import { Component, OnInit } from '@angular/core';
import { Investigation } from '../../../models/investigation.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { EditInvestigation } from '../../Investigations/edit-investigation/edit-investigation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../environments/environment';
import { ButtonModule } from 'primeng/button';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from "primeng/table";
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { Loading } from "../../../../../shared/components/loading/loading";
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-internal-investigations-list',
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, Loading],
  templateUrl: './internal-investigations-list.html',
  styleUrl: './internal-investigations-list.scss'
})
export class InternalInvestigationsList implements OnInit {
  investigations: Investigation[] = [];
  filteredInvestigations: Investigation[] = [];
  selectedInvestigation: Investigation | null = null;
  loading = false;
  searchText = '';
  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  constructor(
    private service: InternalExamService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private authService : AuthService
  ) {}

  ngOnInit() { this.loadInvestigations(); }

  loadInvestigations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    const doctorId = this.authService.getDoctorId();
    this.service.getOrthopedicInvestigations(this.page, this.rowsPerPage, filter,doctorId).subscribe({
      next: res => {
        this.investigations = res.items;
        this.filteredInvestigations = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: err => {
        this.toastr.error('❌ فشل جلب التحاليل', 'خطأ');
        this.loading = false;
      }
    });
  }
  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadInvestigations();
  }
  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadInvestigations();
  }
  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadInvestigations();

  }

  openEditDialog(inv: Investigation) {
    this.selectedInvestigation = { ...inv };
  }

  onDialogClose(updated: boolean) {
    this.selectedInvestigation = null;
    if (updated) this.loadInvestigations();
  }

   openFile(attachment: string) {
    if (!attachment) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, '_blank');
  }
  openEditInvestigation(investigation: Investigation) {
    const modalRef = this.modalService.open(EditInvestigation, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.investigation  = investigation;
    modalRef.componentInstance.investigationUpdated.subscribe(() => {
      this.loadInvestigations();
    });
  }
  getBadgeClass(status: any): string {
    if (!status) {
      return 'badge';
    }
    switch (status) {
      case 'مكتمل':
        return 'badge bg-success';
      case 'مرفوض':
        return 'badge bg-danger';
      case 'مؤجل':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  }
}
