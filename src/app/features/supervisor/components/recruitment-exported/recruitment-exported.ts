import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { ToastrService } from 'ngx-toastr';
import { RecruitmentExportService, PendingExportItem } from '../../services/recruitment-export.service';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { FilterBarComponent } from '../../../../shared/components/filter-bar/filter-bar.component';

@Component({
  selector: 'app-recruitment-exported',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    TagModule,
    GregorianDatePipe,
    PageHeaderComponent,
    FilterBarComponent
  ],
  templateUrl: './recruitment-exported.html',
  styleUrl: './recruitment-exported.scss'
})
export class RecruitmentExportedComponent implements OnInit {
  exportedList: PendingExportItem[] = [];
  selectedItems: PendingExportItem[] = [];
  loading = false;
  downloading = false;
  globalFilter = '';
  tableHeight = '600px';
  @ViewChild('exportedTable') table?: Table;

  constructor(
    private exportService: RecruitmentExportService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.updateTableHeight();
    this.loadExported();
  }

  @HostListener('window:resize')
  onViewportResize(): void {
    this.updateTableHeight();
  }

  private updateTableHeight(): void {
    if (typeof window === 'undefined') this.tableHeight = '480px';
    else this.tableHeight = `${Math.max(window.innerHeight - 380, 320)}px`;
  }

  loadExported(): void {
    this.loading = true;
    this.exportService.getExportedToRecruitment().subscribe({
      next: (data) => {
        this.exportedList = data ?? [];
        this.loading = false;
      },
      error: () => {
        this.toastr.error('فشل في تحميل قائمة الملفات المُصدَّرة', 'خطأ');
        this.loading = false;
      }
    });
  }
  
  onGlobalFilterFromBar(value: string): void {
    this.globalFilter = value || '';
    this.table?.filterGlobal(this.globalFilter, 'contains');
  }

  downloadAgain(decisionIds: number[]): void {
    if (!decisionIds.length) {
      this.toastr.warning('لم يتم اختيار أي عنصر', 'تنبيه');
      return;
    }
    this.downloading = true;
    this.exportService.exportToRecruitment({ decisionIds, exportAll: false }).subscribe({
      next: (blob) => {
        this.downloading = false;
        if (blob && blob.size > 0) {
          const name = `Recruitment_Export_${new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)}.xlsx`;
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = name;
          a.click();
          URL.revokeObjectURL(url);
          this.toastr.success(`تم تحميل ${decisionIds.length} ملف مرة ثانية`, 'نجاح');
        } else {
          this.toastr.error('الملف فارغ', 'خطأ');
        }
      },
      error: () => {
        this.downloading = false;
        this.toastr.error('فشل في تحميل الملف', 'خطأ');
      }
    });
  }

  downloadSelected(): void {
    const ids = this.selectedItems.map(i => i.decisionID).filter((id): id is number => id != null);
    this.downloadAgain(ids);
  }

  downloadAll(): void {
    const ids = this.exportedList.map(i => i.decisionID).filter((id): id is number => id != null);
    this.downloadAgain(ids);
  }

  isSelected(item: PendingExportItem): boolean {
    return this.selectedItems.some(s => s.decisionID === item.decisionID);
  }

  toggleSelection(item: PendingExportItem): void {
    const id = item.decisionID;
    if (this.selectedItems.some(s => s.decisionID === id)) {
      this.selectedItems = this.selectedItems.filter(s => s.decisionID !== id);
    } else {
      this.selectedItems = [...this.selectedItems, item];
    }
  }
}
