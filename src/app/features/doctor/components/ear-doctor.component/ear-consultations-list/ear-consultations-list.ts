import { Component, OnInit } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { ToastrService } from 'ngx-toastr';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEarConsultationComponent } from '../edit-ear-consultation/edit-ear-consultation';

@Component({
  selector: 'app-ear-consultations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent],
  templateUrl: './ear-consultations-list.html',
  styleUrls: ['./ear-consultations-list.scss']
})
export class EarConsultationsList implements OnInit {
  consultations: Consultation[] = []
  filteredConsultations: Consultation[] = []
  globalFilter: string = ''
  page = 1
  rowsPerPage = 10
  totalRecords = 0
  loading = false

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
    this.loading = true
    const filter = this.globalFilter || ''
    this.service.getEarClinicConsultations(this.page, this.rowsPerPage, filter).subscribe(
      (res: any) => {
        this.consultations = res.items
        this.filteredConsultations = res.items
        console.log(res)
        this.totalRecords = res.totalCount
        this.loading = false
      },
      () => {
        this.toastr.error('❌ خطأ في جلب الاستشارات', 'خطأ')
        this.loading = false
      }
    )
  }
  
  onFilterChange(event: any) {
    this.globalFilter = event.target.value;
    this.page = 1; // إعادة تعيين الصفحة إلى الأولى عند البحث
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
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    
    modalRef.componentInstance.consultation = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe((updated: boolean) => {
      if (updated) {
        // تحديث محلي فوري
        const index = this.consultations.findIndex(c => c.consultationID === consultation.consultationID);
        if (index !== -1) {
          this.consultations[index] = { ...this.consultations[index], ...consultation };
          this.filteredConsultations = [...this.consultations];
        }
        // إعادة تحميل من السيرفر للتأكد
        this.loadConsultations();
      }
    });
  }
}
