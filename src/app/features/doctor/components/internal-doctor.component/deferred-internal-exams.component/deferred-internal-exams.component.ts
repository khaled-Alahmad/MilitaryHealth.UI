import { Component } from '@angular/core';
import { InternalExam } from '../../../models/internal-exam.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { EditInternalExamComponent } from '../edit-internal-exam-component/edit-internal-exam-component';
import { ToastrService } from 'ngx-toastr';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-deferred-internal-exams.component',
  imports: [CommonModule, ButtonModule, TableModule, TooltipModule, RippleModule, FormsModule, EditInternalExamComponent, PaginatorComponent],
  templateUrl: './deferred-internal-exams.component.html',
  styleUrl: './deferred-internal-exams.component.scss'
})
export class DeferredInternalExamsComponent {
  exams: InternalExam[] = [];
  filteredExams: InternalExam[] = [];
  globalFilter: string = '';
  loading = true;
  selectedExam: InternalExam | null = null;
  searchTerm: string = '';

  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;

  constructor(
    private examService: InternalExamService,
    private toastr: ToastrService // ✅ أضفنا toastr
  ) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.examService.getAllInternalExams(this.page, this.rowsPerPage,filter).subscribe({
      next: (data: any) => {
        this.exams = data.items;
        this.filteredExams = [...this.exams];
        this.totalRecords = data.totalCount; // يمكن تعديل حسب ما يرجعه السيرفر
        this.loading = false;
      },
      error: () => { 
        this.toastr.error('❌ فشل في جلب الفحوصات الداخلية', 'خطأ');
        this.loading = false; 
      }
    });
  }

  // changePage(newPage: number) {
  //   if (newPage < 1) return;
  //   this.page = newPage;
  //   this.loadExams();
  // }

  // onSearchChange() {
  //   const term = this.searchTerm.trim().toLowerCase();
  //   if (!term) {
  //     this.filteredExams = [...this.exams];
  //     return;
  //   }

  //   this.filteredExams = this.exams.filter(exam =>
  //     exam.applicantFileNumber?.toLowerCase().includes(term) ||
  //     exam.heart?.toLowerCase().includes(term) ||
  //     exam.respiratory?.toLowerCase().includes(term) ||
  //     exam.digestive?.toLowerCase().includes(term) ||
  //     exam.endocrine?.toLowerCase().includes(term) ||
  //     exam.neurology?.toLowerCase().includes(term) ||
  //     exam.blood?.toLowerCase().includes(term) ||
  //     exam.joints?.toLowerCase().includes(term) ||
  //     exam.kidney?.toLowerCase().includes(term) ||
  //     exam.hearing?.toLowerCase().includes(term) ||
  //     exam.skin?.toLowerCase().includes(term) ||
  //     exam.reason?.toLowerCase().includes(term) ||
  //     exam.result?.description?.toLowerCase().includes(term)
  //   );

  //   if (this.filteredExams.length === 0 && term) {
  //     this.toastr.info('⚠️ لا توجد نتائج مطابقة للبحث', 'معلومة');
  //   }
  // }
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
    this.selectedExam = { ...exam }; 
  }

  onDialogClose(updated: boolean) {
    this.selectedExam = null;
    if (updated) {
      this.toastr.success('✅ تم تحديث الفحص بنجاح', 'نجاح');
      this.loadExams();
    }
  }
  getBadgeClass(result: any): string {
    if (!result || !result.description) {
      return 'badge';
    }
    switch (result.description) {
      case 'مقبول':
        return 'badge bg-success';
      case 'مرفوض':
        return 'badge bg-danger';
      case 'مؤجل':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  }
}
