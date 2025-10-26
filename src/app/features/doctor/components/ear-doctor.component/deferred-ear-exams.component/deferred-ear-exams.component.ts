import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastrService } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEarExamComponent } from '../edit-ear-exam/edit-ear-exam';

@Component({
  selector: 'app-deferred-ear-exams',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, TooltipModule],
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
    console.log('Loading deferred ear exams...');
    const filter = this.globalFilter || '';
    this.examService.getDeferredEarClinicExamsPaged(this.page, this.rowsPerPage, filter).subscribe({
      next: (res: any) => {
        console.log('Received deferred exams:', res);
        this.exams = res.items;
        this.filteredExams = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
        
        if (res.items.length === 0) {
          this.toastr.warning('لا توجد فحوصات مؤجلة');
        }
      },
      error: (err) => {
        console.error('Error loading deferred exams:', err);
        this.toastr.error('❌ فشل تحميل الفحوصات المؤجلة', 'خطأ');
        this.loading = false;
      }
    });
  }

  onFilterChange(event: any) {
    this.globalFilter = event.target.value;
    this.page = 1; // إعادة تعيين الصفحة إلى الأولى عند البحث
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
    switch (result?.description) {
      case 'مؤجل': return 'badge bg-warning text-dark';
      case 'مقبول': return 'badge bg-success';
      case 'مرفوض': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  openEditExam(exam: EarClinicExam) {
    const modalRef = this.modalService.open(EditEarExamComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    
    modalRef.componentInstance.exam = exam;
    modalRef.componentInstance.earExamUpdated.subscribe((updated: boolean) => {
      if (updated) {
        // تحديث محلي فوري
        const index = this.exams.findIndex(e => e.earClinicID === exam.earClinicID);
        if (index !== -1) {
          this.exams[index] = { ...this.exams[index], ...exam };
          this.filteredExams = [...this.exams];
        }
        // إعادة تحميل من السيرفر للتأكد
        this.loadEarExams();
      }
    });
  }
}
