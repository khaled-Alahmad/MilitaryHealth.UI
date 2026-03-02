import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SurgicalExam } from '../../../models/surgical-exam-post.model';
import { EditSurgicalExam } from '../edit-surgical-exam/edit-surgical-exam';
import { SurgicalExamDetailsComponent } from '../surgical-exam-details/surgical-exam-details.component';
import { SurgicalExamService } from '../../../services/surgical-exam.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Table, TableModule } from "primeng/table";
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { ResetFiltersButtonComponent } from '../../../../../shared/components/reset-filters-button/reset-filters-button.component';

@Component({
  selector: 'app-deferred-surgical-exams',
  standalone: true,
  imports: [CommonModule, ButtonModule, EditSurgicalExam, SurgicalExamDetailsComponent, FormsModule, TableModule, PaginatorComponent, TooltipModule, ResetFiltersButtonComponent],
  templateUrl: './deferred-surgical-exams.component.html',
  styleUrls: ['./deferred-surgical-exams.component.scss']
})
export class DeferredSurgicalExamsComponent implements OnInit {
  exams: SurgicalExam[] = [];
  filteredExams: SurgicalExam[] = [];
  loading = true;
  selectedExam: SurgicalExam | null = null;
  selectedExamDetails: SurgicalExam | null = null;
  searchTerm: string = '';

  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private examService: SurgicalExamService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadExams();
  }


  loadExams() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.examService.getAllSurgicalExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (data) => {
        this.exams = data.items;
        this.filteredExams =data.items;
        this.totalRecords = data.totalCount;
        this.loading = false;
      },
      error: err => { 
        this.toastr.error('حدث خطأ أثناء تحميل الفحوصات الجراحية'); 
        this.loading = false; 
      }
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

  onEnterSearch() {
    this.page = 1;
    this.loadExams();
  }

  openEditDialog(exam: SurgicalExam) {
    this.selectedExam = { ...exam };
  }

  viewDetails(exam: SurgicalExam) {
    this.selectedExamDetails = { ...exam };
  }

  closeDetailsModal() {
    this.selectedExamDetails = null;
  }

  onDialogClose(updated: boolean) {
    this.selectedExam = null;
    if (updated) this.loadExams();
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
