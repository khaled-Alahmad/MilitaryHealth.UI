import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../environments/environment';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { ResetFiltersButtonComponent } from '../../../../../shared/components/reset-filters-button/reset-filters-button.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-internal-consultations-list',
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
  templateUrl: './internal-consultations-list.html',
  styleUrl: './internal-consultations-list.scss',
})
export class InternalConsultationsList implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  globalFilter = '';
  loading = false;
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private service: InternalExamService,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() { this.loadConsultations(); }

  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getInternalConsultations(this.page, this.rowsPerPage,filter).subscribe({
      next: res => {
        this.consultations = res.items;
        this.filteredConsultations = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ فشل جلب الاستشارات', 'خطأ');
        this.loading = false;
      }
    });
  }
  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadConsultations();
  }
  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadConsultations();
  }
  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadConsultations();
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
    this.loadConsultations();
  }

  getBadgeClass(result: string): string {
    if (!result) return 'badge bg-secondary';
    if (result === 'مقبول') return 'badge bg-success';
    if (result === 'مرفوض') return 'badge bg-danger';
    if (result === 'مؤجل') return 'badge bg-warning text-dark';
    return 'badge bg-secondary';
  }

  openFile(attachment: string) {
    if (!attachment) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, '_blank');
  }
  openEditConsultation(consultation: Consultation) {
    const modalRef = this.modalService.open(EditConsultation, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
    modalRef.componentInstance.consultation = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe(() => {
      this.loadConsultations();
    });
  }
}
