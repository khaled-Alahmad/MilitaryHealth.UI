import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { ToastrService } from 'ngx-toastr';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEarConsultationComponent } from '../edit-ear-consultation/edit-ear-consultation';
import { ResetFiltersButtonComponent } from '../../../../../shared/components/reset-filters-button/reset-filters-button.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-ear-consultations-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    PaginatorComponent,
    ResetFiltersButtonComponent,
    PageHeaderComponent
  ],
  templateUrl: './ear-consultations-list.html',
  styleUrls: ['./ear-consultations-list.scss']
})
export class EarConsultationsList implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  globalFilter = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private service: EarClinicExamService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadConsultations()
  }

  getBadgeClass(result: string) {
    switch (result) {
      case 'مقبول': return 'badge bg-success'
      case 'مرفوض': return 'badge bg-danger'
      case 'مؤجل': return 'badge bg-warning text-dark'
      default: return 'badge bg-secondary'
    }
  }
  
  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getEarClinicConsultations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res: any) => {
        this.consultations = res.items ?? [];
        this.filteredConsultations = res.items ?? [];
        this.totalRecords = res.totalCount ?? 0;
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ خطأ في جلب الاستشارات', 'خطأ');
        this.loading = false;
      }
    });
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value?.trim() || '';
    this.globalFilter = value;
    this.page = 1;
    this.loadConsultations();
  }

  resetFilters(): void {
    this.globalFilter = '';
    this.page = 1;
    if (this.searchInput) this.searchInput.nativeElement.value = '';
    if (this.table) { this.table.first = 0; this.table.clear(); }
    this.loadConsultations();
  }

  onPageChange(newPage: number) {
    this.page = newPage
    this.loadConsultations()
  }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadConsultations();
  }

  openFile(attachment: string) {
    if (!attachment) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    const url = this.service.getFileUrl(attachment);
    window.open(url, '_blank');
  }

  openEditConsultation(consultation: Consultation) {
    const modalRef = this.modalService.open(EditEarConsultationComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.consultation = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe(() => this.loadConsultations());
  }
}
