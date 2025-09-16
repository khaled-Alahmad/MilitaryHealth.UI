import { Component, OnInit } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../environments/environment';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { Loading } from "../../../../../shared/components/loading/loading";

@Component({
  selector: 'app-internal-consultations-list',
  imports: [CommonModule, ButtonModule, TableModule, TooltipModule, RippleModule, FormsModule, PaginatorComponent, Loading],
  templateUrl: './internal-consultations-list.html',
  styleUrl: './internal-consultations-list.scss'
})
export class InternalConsultationsList implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  globalFilter: string = '';
  selectedConsultation: Consultation | null = null;
  loading = false;
  searchText = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;

  constructor(
    private service: InternalExamService,
    private toastr: ToastrService ,
    private modalService: NgbModal,// ✅ toastr
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

  openEditDialog(c: Consultation) { this.selectedConsultation = { ...c }; }

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
}
