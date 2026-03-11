import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastrService } from 'ngx-toastr';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEarExamComponent } from '../edit-ear-exam/edit-ear-exam';
import { ExamDetailsComponent } from '../exam-details/exam-details';
import { ResetFiltersButtonComponent } from '../../../../../shared/components/reset-filters-button/reset-filters-button.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-deferred-ear-exams',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, TooltipModule, ResetFiltersButtonComponent, PageHeaderComponent],
  templateUrl: './deferred-ear-exams.component.html',
  styleUrls: ['./deferred-ear-exams.component.scss']
})
export class DeferredEarExamsComponent implements OnInit {
  exams: EarClinicExam[] = [];
  filteredExams: EarClinicExam[] = [];
  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private examService: EarClinicExamService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadEarExams();
  }

  loadEarExams() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.examService.getDeferredEarClinicExamsPaged(this.page, this.rowsPerPage, filter).subscribe({
      next: (res: any) => {
        this.exams = res.items;
        this.filteredExams = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
        
        if (res.items.length === 0) {
          this.toastr.warning('لا توجد فحوصات');
        }
      },
      error: () => {
        this.toastr.error('❌ فشل تحميل الفحوصات', 'خطأ');
        this.loading = false;
      }
    });
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value?.trim() || '';
    this.globalFilter = value;
    this.page = 1;
    this.loadEarExams();
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadEarExams();
  }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadEarExams();
  }

  getBadgeClass(result: any): string {
    if (!result || !result.description) return 'badge bg-secondary';
    switch (result.description) {
      case 'مقبول': return 'badge bg-success';
      case 'مرفوض': return 'badge bg-danger';
      case 'مؤجل': return 'badge bg-warning text-dark';
      default: return 'badge bg-secondary';
    }
  }

  openEditExam(exam: EarClinicExam) {
    const modalRef = this.modalService.open(EditEarExamComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    
    modalRef.componentInstance.exam = exam;
    modalRef.componentInstance.earExamUpdated.subscribe(() => this.loadEarExams());
  }

  openExamDetails(exam: EarClinicExam) {
    this.modalService.open(ExamDetailsComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: true,
      centered: true
    }).componentInstance.exam = exam;
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
    this.loadEarExams();
  }
}
