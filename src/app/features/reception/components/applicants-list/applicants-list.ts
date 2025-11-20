import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { PaginatorComponent } from "../../../../shared/components/paginator/paginator.component";
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { EditApplicantDialogComponent } from '../edit-applicant-dialog/edit-applicant-dialog';
import { BarcodePrintService } from '../../services/barcode-print.service';
import { MessageService } from 'primeng/api';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { Table } from 'primeng/table';
import { ResetFiltersButtonComponent } from '../../../../shared/components/reset-filters-button/reset-filters-button.component';

@Component({
  selector: 'app-applicants-list',
  imports: [
    TableModule, 
    CommonModule, 
    PaginatorComponent, 
    TagModule, 
    ButtonModule,
    EditApplicantDialogComponent,
    GregorianDatePipe,
    ResetFiltersButtonComponent
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
  
  // Edit Dialog
  editDialogVisible = false;
  selectedApplicant: ApplicantModel | null = null;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  
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

onFilterChange(event: Event) {
  const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
  this.globalFilter = value;
  this.page = 1;
  this.loadApplicants();

  // ✅ Scroll to Top بعد البحث
  setTimeout(() => {
    this.scrollService.scrollToTop(true);
  }, 300);
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
  
  openEditDialog(applicant: ApplicantModel): void {
    this.selectedApplicant = applicant;
    this.editDialogVisible = true;
  }
  
  onEditSave(): void {
    this.loadApplicants(); // إعادة تحميل القائمة
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

    // ✅ جلب البيانات الكاملة للحصول على queueNumber و fileNumber
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
    if (this.searchInput) {
      this.searchInput.nativeElement.value = '';
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadApplicants();
  }
}
