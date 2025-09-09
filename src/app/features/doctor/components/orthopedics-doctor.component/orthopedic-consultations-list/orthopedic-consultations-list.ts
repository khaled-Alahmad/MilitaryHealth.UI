import { ToastModule } from 'primeng/toast';
import { Component, OnInit } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { OrthopedicExamService } from '../../../services/orthopedic-exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { environment } from '../../../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { TableModule } from "primeng/table";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrthopedicExam } from '../../../models/orthopedic-exam.model';
import { EditOrthopedicExamComponent } from '../edit-orthopedic-exam.component/edit-orthopedic-exam.component';

@Component({
  selector: 'app-orthopedic-consultations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, EditConsultation, PaginatorComponent, TableModule],
  templateUrl: './orthopedic-consultations-list.html',
  styleUrls: ['./orthopedic-consultations-list.scss'] // ✅ صحيح: styleUrls وليس styleUrl
})
export class OrthopedicConsultationsList implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  selectedConsultation: Consultation | null = null;
  loading = false;
  searchText = '';

  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;

  constructor(private service: OrthopedicExamService, private toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadConsultations();
  }

  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getOrthopedicConsultations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.consultations = res.items;
        this.filteredConsultations = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }


  onPageChange(newPage: number) { this.page = newPage; this.loadConsultations(); }

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
  openEditDeferredOrthopedi(orthopedicExam: OrthopedicExam) {
    const modalRef = this.modalService.open(EditConsultation, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.consultation  = orthopedicExam;
    modalRef.componentInstance.OrthopedicExamUpdated.subscribe(() => {
      this.loadConsultations();
    });
  }
  getBadgeClass(result: any): string {
    if (!result) return 'badge bg-secondary';
    switch (result) {
      case 'مقبول': return 'badge bg-success';
      case 'مرفوض': return 'badge bg-danger';
      case 'مؤجل': return 'badge bg-warning text-dark';
      default: return 'badge bg-secondary';
    }
  }
}
