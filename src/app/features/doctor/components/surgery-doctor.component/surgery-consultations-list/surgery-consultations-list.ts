import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { Consultation } from '../../../models/consultation.model';
import { SurgicalExamService } from '../../../services/surgical-exam.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../environments/environment';
import { ButtonModule } from 'primeng/button';
import { TableModule } from "primeng/table";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { Loading } from "../../../../../shared/components/loading/loading";
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-surgery-consultations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, Loading],
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
  constructor(
    private service: SurgicalExamService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private authService:AuthService
  ) {}

  ngOnInit() { 
    this.loadConsultations(); 
  }

  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    const doctorId = this.authService.getDoctorId();
    this.service.getSurgicalConsultations(this.page, this.rowsPerPage,filter,doctorId).subscribe({
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
  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.globalFilter = value;
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
}
