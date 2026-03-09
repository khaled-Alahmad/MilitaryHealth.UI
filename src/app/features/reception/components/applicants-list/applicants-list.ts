import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { PaginatorComponent } from '../../../../shared/components/paginator/paginator.component';
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { BarcodePrintService } from '../../services/barcode-print.service';
import { MessageService } from 'primeng/api';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { Table } from 'primeng/table';
import { FilterBarComponent } from '../../../../shared/components/filter-bar/filter-bar.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { ActionButtonsComponent, ActionButtonConfig } from '../../../../shared/components/action-buttons/action-buttons.component';
import { DialogWrapperComponent } from '../../../../shared/components/dialog-wrapper/dialog-wrapper.component';

@Component({
  selector: 'app-applicants-list',
  imports: [
    TableModule,
    CommonModule,
    PaginatorComponent,
    TagModule,
    GregorianDatePipe,
    FilterBarComponent,
    PageHeaderComponent,
    ActionButtonsComponent,
    DialogWrapperComponent
  ],
  templateUrl: './applicants-list.html',
  styleUrl: './applicants-list.scss',
  providers: [MessageService]
})
export class ApplicantsList implements OnInit, AfterViewInit {
  applicants: ApplicantModel[] = [];
  globalFilter: string = '';
  selectedApplicantForPrint: ApplicantModel | null = null;
  printDialogVisible = false;
  printLoading = false;
  
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = '400px';

  readonly headerActions: ActionButtonConfig[] = [
    { id: 'add', label: 'إضافة منتسب', icon: 'pi pi-plus', severity: 'primary', outlined: false }
  ];

  readonly rowActions: ActionButtonConfig[] = [
    { id: 'view', label: 'عرض', icon: 'pi pi-eye', severity: 'secondary', outlined: true, tooltip: 'عرض التفاصيل' },
    { id: 'edit', label: 'تعديل', icon: 'pi pi-pencil', severity: 'success', outlined: false, tooltip: 'تعديل المنتسب' },
    { id: 'print', label: 'طباعة', icon: 'pi pi-print', severity: 'info', outlined: false, tooltip: 'طباعة الباركود' }
  ];
  
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
    this.applicantService.getApplicants$(this.page, this.rowsPerPage, filter).subscribe({
      next: (res: PagedResponse<ApplicantModel>) => {
        this.applicants = res.items;
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
  viewApplicant(applicant: ApplicantModel) {
    this.router.navigate(['reception/applicants/details', applicant.fileNumber]);
  }

  onHeaderAction(actionId: string): void {
    if (actionId === 'add') {
      this.router.navigate(['reception/applicants/add']);
    }
  }

  onRowAction(actionId: string, applicant: ApplicantModel): void {
    if (actionId === 'view') {
      this.viewApplicant(applicant);
      return;
    }
    if (actionId === 'edit') {
      this.editApplicant(applicant);
      return;
    }
    if (actionId === 'print') {
      this.openPrintDialog(applicant);
    }
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
    this.router.navigate(['reception', 'applicants', applicant.applicantID]);
  }

  openPrintDialog(applicant: ApplicantModel): void {
    if (!applicant) {
      this.messageService.add({
        severity: 'warn',
        summary: 'تحذير',
        detail: 'لا توجد بيانات منتسب للطباعة'
      });
      return;
    }
    this.selectedApplicantForPrint = applicant;
    this.printDialogVisible = true;
  }

  confirmPrintApplicant(): void {
    const applicant = this.selectedApplicantForPrint;
    if (!applicant) {
      return;
    }

    this.printLoading = true;
    if (applicant.applicantID) {
      this.applicantService.getApplicantById$(applicant.applicantID).subscribe({
        next: (fullApplicantData: ApplicantModel) => {
          this.barcodePrintService.printBarcodeReceipt(fullApplicantData).catch(() => {
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في طباعة الإيصال'
            });
          });
          this.closePrintDialog();
        },
        error: () => {
          this.barcodePrintService.printBarcodeReceipt(applicant).catch(() => {
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في طباعة الإيصال'
            });
          });
          this.closePrintDialog();
        },
        complete: () => {
          this.printLoading = false;
        }
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'تحذير',
        detail: 'لا يمكن طباعة الإيصال - بيانات ناقصة'
      });
      this.printLoading = false;
    }
  }

  closePrintDialog(): void {
    this.printDialogVisible = false;
    this.printLoading = false;
    this.selectedApplicantForPrint = null;
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
}
