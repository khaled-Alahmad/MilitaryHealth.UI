import { Component, OnInit } from '@angular/core';
import { Investigation } from '../../../models/investigation.model';
import { SurgicalExamService } from '../../../services/surgical-exam.service';
import { EditInvestigation } from '../../Investigations/edit-investigation/edit-investigation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../environments/environment';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-surgery-investigations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent],
  templateUrl: './surgery-investigations-list.html',
  styleUrls: ['./surgery-investigations-list.scss']
})
export class SurgeryInvestigationsList implements OnInit {
  investigations: Investigation[] = [];
  filteredInvestigations: Investigation[] = [];
  pagedInvestigations: Investigation[] = [];
  selectedInvestigation: Investigation | null = null;
  loading = false;
  searchText = '';
  globalFilter: string = '';

  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;

  constructor(
    private service: SurgicalExamService,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() { 
    this.loadInvestigations(); 
  }

  loadInvestigations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getSurgicalInvestigations(this.page, this.rowsPerPage, filter).subscribe({
      next: res => { 
        this.investigations = res.items; 
        this.filteredInvestigations = res.items; 
        this.totalRecords = res.totalCount;
        this.pagedInvestigations = res.items;
        this.loading = false; 
      },
      error: () => { 
        this.toastr.error('حدث خطأ أثناء تحميل الفحوصات الجراحية'); 
        this.loading = false; 
      }
    });
  }

  onFilterChange(event: Event) {
    this.globalFilter = (event.target as HTMLInputElement).value;
    this.page = 1;
    this.loadInvestigations();
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
