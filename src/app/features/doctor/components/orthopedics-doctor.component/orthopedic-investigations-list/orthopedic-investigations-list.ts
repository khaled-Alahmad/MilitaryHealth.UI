import { Component, OnInit, ViewChild } from '@angular/core';
import { Investigation } from '../../../models/investigation.model';
import { OrthopedicExamService } from '../../../services/orthopedic-exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditInvestigation } from '../../Investigations/edit-investigation/edit-investigation';
import { environment } from '../../../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Table, TableModule } from "primeng/table";
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-orthopedic-investigations-list',
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent],
  templateUrl: './orthopedic-investigations-list.html',
  styleUrl: './orthopedic-investigations-list.scss'
})
export class OrthopedicInvestigationsList implements OnInit {
  investigations: Investigation[] = [];
  filteredInvestigations: Investigation[] = [];
  selectedInvestigation: Investigation | null = null;
  loading = false;
  searchText = '';

  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  @ViewChild('table') table?: Table;

  constructor(private service: OrthopedicExamService,private toastr:ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.loadInvestigations();
  }

  loadInvestigations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getOrthopedicInvestigations(this.page, this.rowsPerPage, filter).subscribe({
      next: res => { 
        this.investigations = res.items; 
        this.filteredInvestigations = res.items; 
        this.totalRecords = res.totalCount;
        this.loading = false; 
      },
      error: err => { 
        console.error(err); 
        this.loading = false; 
      }
    });
  }
  onPageChange(newPage: number) { this.page = newPage; this.loadInvestigations(); }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadInvestigations();
  }

  onFilterChange(value: string) {
    this.globalFilter = (value || '').trim();
    this.page = 1;
    this.loadInvestigations();
  }

  resetFilters(): void {
    this.globalFilter = '';
    this.page = 1;
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
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

  getBadgeClass(status: string): string {
    if (!status) return 'badge bg-secondary';
    switch (status) {
      case 'مكتمل': return 'badge bg-success';
      case 'مرفوض': return 'badge bg-danger';
      case 'مؤجل': return 'badge bg-warning text-dark';
      default: return 'badge bg-secondary';
    }
  }
}