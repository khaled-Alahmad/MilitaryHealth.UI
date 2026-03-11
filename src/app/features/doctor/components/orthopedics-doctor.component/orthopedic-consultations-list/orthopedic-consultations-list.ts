import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Consultation } from '../../../models/consultation.model';
import { OrthopedicExamService } from '../../../services/orthopedic-exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditConsultation } from '../../Consultations/edit-consultation/edit-consultation';
import { environment } from '../../../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { ResetFiltersButtonComponent } from '../../../../../shared/components/reset-filters-button/reset-filters-button.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-orthopedic-consultations-list',
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
  templateUrl: './orthopedic-consultations-list.html',
  styleUrls: ['./orthopedic-consultations-list.scss']
})
export class OrthopedicConsultationsList implements OnInit {
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  loading = false;
  globalFilter = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

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
    const value = (event.target as HTMLInputElement).value?.trim() || '';
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
      centered: true
    });
    modalRef.componentInstance.consultation = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe(() => {
      this.loadConsultations();
    });
    modalRef.componentInstance.dialogClosed?.subscribe((updated: boolean) => {
      if (updated) this.loadConsultations();
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
