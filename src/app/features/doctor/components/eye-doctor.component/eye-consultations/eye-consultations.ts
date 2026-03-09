import { environment } from './../../../../../../environments/environment';
import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { EyeExamService } from '../../../services/eye-exam.service';
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';


@Component({
  selector: 'app-eye-consultations',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent],
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
  @ViewChild('table') table?: Table;

  // selectedConsultation: Consultation | null = null;
  // searchText: string = '';
  // environment = environment;  

  constructor(
    private service: EyeExamService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private modalService: NgbModal,
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
    this.service.getEyeClinicConsultations(this.page, this.rowsPerPage, filter).subscribe({
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

  onLazyLoad(event: any) {
    this.page = Math.floor(event.first / event.rows) + 1;
    this.rowsPerPage = event.rows;
    this.loadConsultations();
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
    this.globalFilter = (value || '').toLowerCase().trim();
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
