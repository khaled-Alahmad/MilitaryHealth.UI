import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PaginatorComponent } from "../../../shared/components/paginator/paginator.component";
import { TableModule } from "primeng/table";
import { FinalDecision } from '../dashboard/models/result.model';
import { FinalDecisionsService } from '../services/final-decisions.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FinalDecisionsResponse } from '../dashboard/models/final-decisions-response.model';
import { GregorianDatePipe } from '../../../shared/pipes/gregorian-date.pipe';
import { Table } from 'primeng/table';
import { ResetFiltersButtonComponent } from '../../../shared/components/reset-filters-button/reset-filters-button.component';

@Component({
  selector: 'app-final-applicant-list',
  imports: [PaginatorComponent, TableModule, CommonModule, GregorianDatePipe, ResetFiltersButtonComponent],
  templateUrl: './final-applicant-list.html',
  styleUrl: './final-applicant-list.scss'
})
export class FinalApplicantList {
  decisions: FinalDecision[] = [];
  loading = true;
  filteredFinalDecisions: FinalDecision[] = [];
  globalFilter: string = '';

  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  tableHeight = '300px';
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  constructor(private finalDecisionsService: FinalDecisionsService, private cdr: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    this.loadDecisions();
  }
  loadDecisions() {
    this.finalDecisionsService.getFinalDecisions$(this.page, this.rowsPerPage, this.globalFilter).subscribe({
      next: (res: FinalDecisionsResponse) => {
        this.decisions = res.data.items;
        this.filteredFinalDecisions = this.decisions;
        this.totalRecords = res.data.totalCount;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching final decisions', err);
        this.loading = false;
      }
    });
  }


  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadDecisions();
  }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadDecisions();
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadDecisions();

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
    this.loadDecisions();
  }
}
