import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { Consultation } from '../../../models/consultation.model';
import { SurgicalExamService } from '../../../services/surgical-exam.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../environments/environment';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from "primeng/table";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-surgery-consultations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent],
  templateUrl: './surgery-consultations-list.html',
  styleUrls: ['./surgery-consultations-list.scss']
})
export class SurgeryConsultationsList implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  selectedConsultation: Consultation | null = null;
  loading = false;
  searchText = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  globalFilter: string = '';
  @ViewChild('table') table?: Table;

  constructor(
    private service: SurgicalExamService,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() { 
    this.loadConsultations(); 
  }

  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getSurgicalConsultations(this.page, this.rowsPerPage,filter).subscribe({
      next: res => { 
        this.consultations = res.items; 
        this.filteredConsultations = res.items; 
        this.totalRecords = res.totalCount;
        this.loading = false; 
      },
      error: () => { 
        this.toastr.error('حدث خطأ أثناء تحميل الاستشارات الجراحية'); 
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
  onFilterChange(value: string) {
    this.globalFilter = (value || '').trim();
    this.page = 1;
    this.loadConsultations();
  }

  openEditDialog(c: Consultation) { 
    this.selectedConsultation = { ...c }; 
  }

  onDialogClose(updated: boolean) {
    this.selectedConsultation = null;
    if (updated) this.loadConsultations();
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
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.consultation  = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe(() => {
      this.loadConsultations();
    });
  }

  getBadgeClass(result: string): string {
    if (!result) return 'badge bg-secondary';
    if (result === 'مقبول') return 'badge bg-success';
    if (result === 'مرفوض') return 'badge bg-danger';
    if (result === 'مؤجل') return 'badge bg-warning text-dark';
    return 'badge bg-secondary';
  }

  resetFilters(): void {
    this.globalFilter = '';
    this.page = 1;
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadConsultations();
  }
}
