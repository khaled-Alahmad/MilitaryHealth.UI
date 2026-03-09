import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { Investigation } from '../../../models/investigation.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditInvestigation } from '../../Investigations/edit-investigation/edit-investigation';
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
  selector: 'app-eye-investigations-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent],
  templateUrl: './eye-investigations-list.html',
  styleUrl: './eye-investigations-list.scss'
})
export class EyeInvestigationsList implements OnInit {
  investigations: Investigation[] = [];
  filteredInvestigations: Investigation[] = [];
  globalFilter: string = '';
  page = 1;
  rowsPerPage = 5;
  totalRecords = 0;
  loading = false;
  tableHeight = '360px';

  selectedInvestigation: Investigation | null = null;
  searchText = '';
  environment = environment;
  @ViewChild('table') table?: Table;

  constructor(
    private service: EyeExamService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.loadInvestigations();
  }

  loadInvestigations() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.service.getEyeClinicInvestigations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res: PagedResponse<Investigation>) => {
        // ترتيب تنازلي حسب investigationID مع التعامل مع undefined
        this.investigations = res.items.sort((a, b) => (b.investigationID ?? 0) - (a.investigationID ?? 0));
        this.filteredInvestigations = this.investigations;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ فشل في جلب التحاليل', 'خطأ');
        this.loading = false;
      }
    });
  }
  

  openFile(attachment: string) {
    if (!attachment) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    window.open(`${environment.apiUrl}/${attachment}`, '_blank');
  }
  onLazyLoad(event: any) {
    this.page = Math.floor(event.first / event.rows) + 1;
    this.rowsPerPage = event.rows;
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
  onFilterChange(value: string) {
    this.globalFilter = (value || '').toLowerCase().trim();
    this.page = 1;
    this.loadInvestigations();

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
  openEditInvestigation(investigation: Investigation) {
      const modalRef = this.modalService.open(EditInvestigation, {
        size: 'xl',
        backdrop: 'static',
        keyboard: false,
        centered: true
      });
      modalRef.componentInstance.investigation  = investigation;
      modalRef.componentInstance.investigationUpdated.subscribe(() => {
        this.loadInvestigations();
      });
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
}
