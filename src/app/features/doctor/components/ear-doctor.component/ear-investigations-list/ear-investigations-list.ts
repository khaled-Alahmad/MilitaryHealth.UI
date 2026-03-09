import { Component, OnInit, ViewChild } from '@angular/core';
import { Investigation } from '../../../models/investigation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { ToastrService } from 'ngx-toastr';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEarInvestigationComponent } from '../edit-ear-investigation/edit-ear-investigation';
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-ear-investigations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent],
  templateUrl: './ear-investigations-list.html',
  styleUrls: ['./ear-investigations-list.scss']
})
export class EarInvestigationsList implements OnInit {
  investigations: Investigation[] = []
  filteredInvestigations: Investigation[] = []
  globalFilter: string = ''
  page = 1
  rowsPerPage = 10
  totalRecords = 0
  loading = false
  @ViewChild('table') table?: Table;

  constructor(
    private service: EarClinicExamService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadInvestigations()
  }

  getBadgeClass(result: string) {
    switch (result) {
      case 'مقبول': return 'badge bg-success'
      case 'مرفوض': return 'badge bg-danger'
      case 'مؤجل': return 'badge bg-warning text-dark'
      default: return 'badge bg-secondary'
    }
  }
  
  loadInvestigations() {
    this.loading = true
    const filter = this.globalFilter || ''
    this.service.getAllEarClinicInvestigations(this.page, this.rowsPerPage, filter).subscribe(
      (res: any) => {
        this.investigations = res.items
        this.filteredInvestigations = res.items
        console.log(res)
        this.totalRecords = res.totalCount
        this.loading = false
      },
      () => {
        this.toastr.error('❌ خطأ في جلب التحاليل', 'خطأ')
        this.loading = false
      }
    )
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

  onPageChange(newPage: number) {
    this.page = newPage
    this.loadInvestigations()
  }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadInvestigations();
  }

  openFile(attachment: string) {
    if (!attachment) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    const url = this.service.getFileUrl(attachment);
    window.open(url, '_blank');
  }

  openEditInvestigation(investigation: Investigation) {
    const modalRef = this.modalService.open(EditEarInvestigationComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });
    
    modalRef.componentInstance.investigation = investigation;
    modalRef.componentInstance.investigationUpdated.subscribe((updated: boolean) => {
      if (updated) {
        // تحديث محلي فوري
        const index = this.investigations.findIndex(i => i.investigationID === investigation.investigationID);
        if (index !== -1) {
          this.investigations[index] = { ...this.investigations[index], ...investigation };
          this.filteredInvestigations = [...this.investigations];
        }
        // إعادة تحميل من السيرفر للتأكد
        this.loadInvestigations();
      }
    });
  }
}
