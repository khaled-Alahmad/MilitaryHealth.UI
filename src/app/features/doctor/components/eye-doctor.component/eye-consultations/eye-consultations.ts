import { environment } from './../../../../../../environments/environment';
import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { EyeExamService } from '../../../services/eye-exam.service';
import { Loading } from "../../../../../shared/components/loading/loading";
import { Toolbar } from "primeng/toolbar";
import { AuthService } from '../../../../auth/services/auth.service';
import { ConsultationFormComponent } from "../../Consultations/consultation-form.component/consultation-form.component";


@Component({
  selector: 'app-eye-consultations',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, Loading, Toolbar, ConsultationFormComponent],
  templateUrl: './eye-consultations.html',
  styleUrls: ['./eye-consultations.scss']
})
export class EyeConsultations implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = '360px';
  @ViewChild(ConsultationFormComponent) consultationForm!: ConsultationFormComponent;
  // selectedConsultation: Consultation | null = null;
  // searchText: string = '';
  // environment = environment;  

  constructor(
    private service: EyeExamService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private modalService: NgbModal,
    private authService : AuthService
  ) {}

  ngOnInit(): void {
    this.loadConsultations();
  }
  getBadgeClass(result: string) {
    switch (result) {
      case 'مكتمل':
        return 'badge bg-success';
      case 'مؤجل':
        return 'badge bg-warning';
      case 'مرفوض':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
  
  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    const doctorId = this.authService.getDoctorId();
    this.service.getEyeClinicConsultations(this.page, this.rowsPerPage, filter,doctorId).subscribe({
      next: (res: PagedResponse<Consultation>) => {
        this.consultations = res.items;
        this.filteredConsultations = res.items;
        console.log(res);
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ خطأ في جلب الاستشارات', 'خطأ');
        this.loading = false;
      }
    });
  }
  

  openFile(attachment: string) {
    if (!attachment) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, '_blank');
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
  ngAfterViewInit() {
    this.tableHeight = this.calculateTableHeight();
    this.cdr.detectChanges();
  }

  calculateTableHeight(): string {
    return window.innerHeight - 200 + 'px';
  }
  @HostListener('window:resize')
  onResize() {
    this.setTableHeight();
  }

  setTableHeight() {
    const screenHeight = window.innerHeight;

    const reservedSpace = 220;

    this.tableHeight = (screenHeight - reservedSpace) + 'px';
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
  addConsultation(){
    this.consultationForm.openModal();
  }
}
