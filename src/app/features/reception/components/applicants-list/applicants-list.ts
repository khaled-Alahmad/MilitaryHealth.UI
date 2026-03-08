import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { PaginatorComponent } from '../../../../shared/components/paginator/paginator.component';
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { BarcodePrintService } from '../../services/barcode-print.service';
import { MessageService } from 'primeng/api';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { Table } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FilterBarComponent } from '../../../../shared/components/filter-bar/filter-bar.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { ActionButtonsComponent, ActionButtonConfig } from '../../../../shared/components/action-buttons/action-buttons.component';

@Component({
  selector: 'app-applicants-list',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    CommonModule,
    ToastModule,
    PaginatorComponent,
    TagModule,
    ButtonModule,
    TooltipModule,
    GregorianDatePipe,
    FilterBarComponent,
    PageHeaderComponent,
    ActionButtonsComponent
  ],
  templateUrl: './applicants-list.html',
  styleUrl: './applicants-list.scss',
  providers: [MessageService]
})
export class ApplicantsList implements OnInit,AfterViewInit  {
  applicants: ApplicantModel[] = [];
  filteredApplicants: ApplicantModel[] = [];
  globalFilter: string = '';
  
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = '400px';
  
  @ViewChild('table') table?: Table;
  
  constructor(
    private applicantService: ApplicantService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private barcodePrintService: BarcodePrintService,
    private messageService: MessageService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.loadApplicants();
  }

  loadApplicants() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.applicantService.getApplicants$(this.page, this.rowsPerPage,filter).subscribe({
      next: (res: PagedResponse<ApplicantModel>) => {
        this.applicants = res.items;
        this.filteredApplicants = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

onPageChange(newPage: number) {
  this.page = newPage;
  this.loadApplicants();
}

onPageSizeChange(newSize: number) {
  this.rowsPerPage = newSize;
  this.page = 1;
  this.loadApplicants();
}

onSearchChange(value: string): void {
  this.globalFilter = (value || '').toLowerCase().trim();
  this.page = 1;
  this.loadApplicants();
  setTimeout(() => this.scrollService.scrollToTop(true), 300);
}
  ngAfterViewInit() {
    this.tableHeight = this.calculateTableHeight(); 
    this.cdr.detectChanges(); 
  }

  calculateTableHeight(): string {
    return window.innerHeight - 200 + 'px'; 
  }
  @HostListener('window:resize')
  onResize() {
    this.setTableHeight();
  }

  setTableHeight() {
    const screenHeight = window.innerHeight;

    const reservedSpace = 220;  

    this.tableHeight = (screenHeight - reservedSpace) + 'px';
  }
  viewApplicant(applicant: ApplicantModel): void {
    this.router.navigate(['/reception/applicants/details', applicant.fileNumber]);
  }

  editApplicant(applicant: ApplicantModel): void {
    if (!applicant?.applicantID) {
      this.messageService.add({
        severity: 'warn',
        summary: 'تنبيه',
        detail: 'لا يمكن تعديل هذا المنتسب - معرّف غير متوفر'
      });
      return;
    }
    this.router.navigate(['/reception/applicants', applicant.applicantID]);
  }

  printApplicant(applicant: ApplicantModel): void {
    if (!applicant) {
      this.messageService.add({
        severity: 'warn',
        summary: 'تحذير',
        detail: 'لا توجد بيانات منتسب للطباعة'
      });
      return;
    }

    if (applicant.applicantID) {
      this.applicantService.getApplicantById$(applicant.applicantID).subscribe({
        next: (fullApplicantData: ApplicantModel) => {
          this.barcodePrintService.printBarcodeReceipt(fullApplicantData).catch(error => {
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في طباعة الإيصال'
            });
          });
        },
        error: (err) => {
          // محاولة الطباعة بالبيانات المتوفرة
          this.barcodePrintService.printBarcodeReceipt(applicant).catch(error => {
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في طباعة الإيصال'
            });
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'تحذير',
        detail: 'لا يمكن طباعة الإيصال - بيانات ناقصة'
      });
    }
  }

  resetFilters(): void {
    this.globalFilter = '';
    this.page = 1;
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadApplicants();
  }

  goToAdd(): void {
    this.router.navigate(['/reception/applicants/add']);
  }

  /** نص ملخص النتائج (عرض 1–10 من 42) */
  get resultSummary(): string {
    if (this.totalRecords === 0) return 'لا توجد نتائج';
    const start = (this.page - 1) * this.rowsPerPage + 1;
    const end = Math.min(this.page * this.rowsPerPage, this.totalRecords);
    return `عرض ${start}–${end} من ${this.totalRecords}`;
  }

  /** عنوان حالة عدم وجود بيانات */
  get emptyStateTitle(): string {
    return this.globalFilter?.length ? 'لا توجد نتائج للبحث' : 'لا يوجد متقدمين';
  }

  /** نص فرعي في حالة عدم النتائج (عند وجود فلتر) */
  get emptyStateSubtext(): string | null {
    return this.globalFilter?.length ? 'جرّب تغيير كلمات البحث أو أعد تعيين الفلتر' : null;
  }

  /** أيقونة الحالة الفارغة */
  get emptyStateIcon(): string {
    return this.globalFilter?.length ? 'pi pi-search' : 'pi pi-users';
  }

  getRowActions(applicant: ApplicantModel): ActionButtonConfig[] {
    return [
      { id: 'view', label: '', icon: 'pi pi-eye', severity: 'secondary', outlined: true, tooltip: 'عرض التفاصيل' },
      { id: 'edit', label: '', icon: 'pi pi-pencil', severity: 'success', outlined: false, tooltip: 'تعديل المنتسب' },
      { id: 'print', label: '', icon: 'pi pi-print', severity: 'info', outlined: false, tooltip: 'طباعة الباركود' }
    ];
  }

  onRowAction(actionId: string, applicant: ApplicantModel): void {
    if (actionId === 'view') this.viewApplicant(applicant);
    else if (actionId === 'edit') this.editApplicant(applicant);
    else if (actionId === 'print') this.printApplicant(applicant);
  }
}
