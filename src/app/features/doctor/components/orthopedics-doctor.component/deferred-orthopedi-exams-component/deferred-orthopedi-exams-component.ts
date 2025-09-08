import { Component, OnInit } from '@angular/core';
import { OrthopedicExam } from '../../../models/orthopedic-exam.model';
import { OrthopedicExamService } from '../../../services/orthopedic-exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditOrthopedicExamComponent } from '../edit-orthopedic-exam.component/edit-orthopedic-exam.component';
import { ToastrService } from 'ngx-toastr';
import { TableModule } from "primeng/table";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";

@Component({
  selector: 'app-deferred-orthopedi-exams-component',
  imports: [CommonModule, FormsModule, ButtonModule, EditOrthopedicExamComponent, TableModule, PaginatorComponent],
  templateUrl: './deferred-orthopedi-exams-component.html',
  styleUrl: './deferred-orthopedi-exams-component.scss'
})
export class DeferredOrthopediExamsComponent implements OnInit {
  exams: OrthopedicExam[] = [];
  filteredExams: OrthopedicExam[] = [];
  loading = true;
  selectedExam: OrthopedicExam | null = null;
  searchTerm: string = '';
  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;

  constructor(private examService: OrthopedicExamService, private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.examService.getAllOrthopedicExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.exams = res.items;
        this.filteredExams =res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: err => { 
        this.toastr.error('❌ فشل تحميل الفحوص', 'خطأ');
        this.loading = false; 
      }
    });
  }

  onPageChange(newPage: number) { this.page = newPage; this.loadExams(); }

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


  getBadgeClass(result: any): string {
    if (!result || !result.description) return 'badge bg-secondary';
    switch (result.description) {
      case 'مقبول': return 'badge bg-success';
      case 'مرفوض': return 'badge bg-danger';
      case 'مؤجل': return 'badge bg-warning text-dark';
      default: return 'badge bg-secondary';
    }
  }

  openEditDeferredOrthopedi(orthopedicExam: OrthopedicExam) {
    const modalRef = this.modalService.open(EditOrthopedicExamComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.exam  = orthopedicExam;
    modalRef.componentInstance.OrthopedicExamUpdated.subscribe(() => {
      this.loadExams();
    });
  }
}
