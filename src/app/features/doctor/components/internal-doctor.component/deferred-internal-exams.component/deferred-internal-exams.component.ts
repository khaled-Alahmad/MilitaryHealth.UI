import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InternalExam } from '../../../models/internal-exam.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditInternalExamComponent } from '../edit-internal-exam-component/edit-internal-exam-component';
import { InternalExamDetailsComponent } from '../exam-details/exam-details.component';
import { ToastrService } from 'ngx-toastr';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { ResetFiltersButtonComponent } from '../../../../../shared/components/reset-filters-button/reset-filters-button.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-deferred-internal-exams.component',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    PaginatorComponent,
    ResetFiltersButtonComponent,
    PageHeaderComponent,
  ],
  templateUrl: './deferred-internal-exams.component.html',
  styleUrl: './deferred-internal-exams.component.scss',
})
export class DeferredInternalExamsComponent implements OnInit {
  exams: InternalExam[] = [];
  globalFilter = '';
  loading = true;
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private examService: InternalExamService,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.examService.getAllInternalExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (data: any) => {
        this.exams = data.items || [];
        this.totalRecords = data.totalCount || 0;
        this.loading = false;
      },
      error: () => {
        this.toastr.error('فشل في جلب الفحوصات الداخلية', 'خطأ');
        this.loading = false;
      },
    });
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadExams();
  }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadExams();
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadExams();
  }

  openEditDialog(exam: InternalExam) {
    const modalRef = this.modalService.open(EditInternalExamComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
    modalRef.componentInstance.exam = { ...exam };
    modalRef.componentInstance.dialogClosed.subscribe((updated: boolean) => {
      modalRef.close();
      if (updated) {
        this.toastr.success('تم تحديث الفحص بنجاح', 'نجاح');
        this.loadExams();
      }
    });
  }

  viewDetails(exam: InternalExam) {
    const modalRef = this.modalService.open(InternalExamDetailsComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.exam = exam;
    modalRef.componentInstance.close.subscribe(() => modalRef.close());
  }
  getBadgeClass(result: any): string {
    // إذا لم تكن النتيجة موجودة أو ليس لها description
    if (!result || !result.description) {
      return 'badge bg-secondary'; // رمادي للنتيجة غير المحددة
    }
    
    switch (result.description) {
      case 'مقبول':
        return 'badge bg-success';
      case 'مرفوض':
        return 'badge bg-danger';
      case 'مؤجل':
      case 'تأجيل':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
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
    this.loadExams();
  }
}
