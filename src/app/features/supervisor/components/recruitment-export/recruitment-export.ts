import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { RecruitmentExportService, PendingExportItem } from '../../services/recruitment-export.service';
import { ToastrService } from 'ngx-toastr';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResetFiltersButtonComponent } from '../../../../shared/components/reset-filters-button/reset-filters-button.component';

@Component({
  selector: 'app-recruitment-export',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    ToastModule,
    TagModule,
    ProgressBarModule,
    GregorianDatePipe,
    ResetFiltersButtonComponent
  ],
  templateUrl: './recruitment-export.html',
  styleUrls: ['./recruitment-export.scss'],
  providers: [MessageService]
})
export class RecruitmentExportComponent implements OnInit {
  pendingExports: PendingExportItem[] = [];
  selectedExports: PendingExportItem[] = [];
  loading = false;
  exporting = false;
  globalFilter = '';
  tableHeight = '600px';
  private decisionIdCache = new Map<string, number>();
  @ViewChild('exportTable') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private exportService: RecruitmentExportService,
    private toastr: ToastrService,
    private messageService: MessageService,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.updateTableHeight();
    this.loadPendingExports();
  }

  @HostListener('window:resize')
  onViewportResize(): void {
    this.updateTableHeight();
  }

  private updateTableHeight(): void {
    if (typeof window === 'undefined') {
      this.tableHeight = '480px';
      return;
    }
    const available = window.innerHeight - 420;
    this.tableHeight = `${Math.max(available, 320)}px`;
  }

  onGlobalFilter(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.globalFilter = value;
    this.table?.filterGlobal(value, 'contains');
  }

  resetFilters(): void {
    this.globalFilter = '';
    if (this.searchInput) {
      this.searchInput.nativeElement.value = '';
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadPendingExports();
  }

  loadPendingExports(): void {
    this.loading = true;
    this.exportService.getPendingExports().subscribe({
      next: (data: PendingExportItem[]) => {
        const normalizedList = data || [];
        const uniqueByFile = new Map<string, PendingExportItem>();
        normalizedList.forEach(item => {
          const key = this.buildUniqueKey(item);
          if (!uniqueByFile.has(key)) {
            uniqueByFile.set(key, { ...item });
          }
        });
        const hadDuplicates = uniqueByFile.size < normalizedList.length;
        this.pendingExports = Array.from(uniqueByFile.values());
        this.selectedExports = [];
        this.decisionIdCache.clear();
        this.pendingExports.forEach(item => {
          if (item.fileNumber && item.decisionID) {
            this.decisionIdCache.set(item.fileNumber, item.decisionID);
          }
        });
        if (hadDuplicates) {
          this.toastr.info('تم استبعاد السجلات المكررة بحسب رقم الملف قبل التصدير.', 'تنبيه');
        }
        
        const itemsNeedingDetails = this.pendingExports.filter(item =>
          item.fileNumber && (!item.supervisorEvaluationDate || !item.decisionID)
        );
        
        if (itemsNeedingDetails.length > 0) {
          const requests = itemsNeedingDetails.map(item =>
            this.applicantService.getApplicantByFileNumber$(item.fileNumber!).pipe(
              map(details => {
                if (details?.finalDecision?.decisionDate && !item.supervisorEvaluationDate) {
                  item.supervisorEvaluationDate = details.finalDecision.decisionDate;
                }
                if (details?.finalDecision?.decisionID) {
                  item.decisionID = details.finalDecision.decisionID;
                  this.decisionIdCache.set(item.fileNumber!, item.decisionID);
                }
                return item;
              }),
              catchError(() => of(item))
            )
          );
          
          forkJoin(requests).subscribe({
            next: () => {
              this.loading = false;
            },
            error: () => {
              this.loading = false;
            }
          });
        } else {
          this.loading = false;
        }
      },
      error: () => {
        this.toastr.error('فشل في تحميل قائمة المنتسبين', 'خطأ');
        this.loading = false;
      }
    });
  }

  onExportSelected(): void {
    if (this.selectedExports.length === 0) {
      this.toastr.warning('يرجى اختيار منتسب واحد على الأقل للتصدير', 'تنبيه');
      return;
    }

    this.ensureDecisionIdsForSelection().subscribe({
      next: (decisionIds) => {
    if (decisionIds.length === 0) {
      this.toastr.error('لم يتم العثور على معرفات القرارات. يرجى تحديث الصفحة والمحاولة مرة أخرى', 'خطأ');
      return;
    }

    this.exporting = true;
    this.exportService.exportToRecruitment({
      decisionIds,
      exportAll: false
    }).subscribe({
      next: (blob: Blob) => {
        // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£Ù† Ø§Ù„Ù€ blob ØµØ­ÙŠØ­
        if (blob && blob.size > 0) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
          this.downloadFile(blob, `Recruitment_Export_${timestamp}.xlsx`);
          this.toastr.success(`تم تصدير ${decisionIds.length} منتسب بنجاح`, 'نجاح');
          this.exporting = false;
          this.selectedExports = [];
          this.loadPendingExports(); // Refresh list
        } else {
          this.toastr.error('الملف المُصدَّر فارغ أو معطوب', 'خطأ');
          this.exporting = false;
        }
      },
      error: (err) => {
        let errorMessage = 'فشل في تصدير البيانات';
        if (err.status === 401) {
          errorMessage = 'غير مصرح لك بالوصول. يرجى تسجيل الدخول مرة أخرى';
        } else if (err.status === 404) {
          errorMessage = 'الـ API غير موجود. يرجى التحقق من إعدادات الخادم';
        } else if (err.status === 500) {
          errorMessage = 'خطأ في الخادم. يرجى المحاولة لاحقاً';
        }
        this.toastr.error(errorMessage, 'خطأ');
        this.exporting = false;
          }
        });
      }
    });
  }

  onExportAll(): void {
    if (this.pendingExports.length === 0) {
      this.toastr.warning('لا توجد بيانات للتصدير', 'تنبيه');
      return;
    }

    this.exporting = true;
    this.exportService.exportAll().subscribe({
      next: (blob: Blob) => {
        // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£Ù† Ø§Ù„Ù€ blob ØµØ­ÙŠØ­
        if (blob && blob.size > 0) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
          this.downloadFile(blob, `Recruitment_Export_All_${timestamp}.xlsx`);
          this.toastr.success(`تم تصدير ${this.pendingExports.length} منتسب بنجاح`, 'نجاح');
          this.exporting = false;
          this.selectedExports = [];
          this.loadPendingExports(); // Refresh list
        } else {
          this.toastr.error('الملف المُصدَّر فارغ أو معطوب', 'خطأ');
          this.exporting = false;
        }
      },
      error: (err) => {
        let errorMessage = 'فشل في تصدير البيانات';
        if (err.status === 401) {
          errorMessage = 'غير مصرح لك بالوصول. يرجى تسجيل الدخول مرة أخرى';
        } else if (err.status === 404) {
          errorMessage = 'الـ API غير موجود. يرجى التحقق من إعدادات الخادم';
        } else if (err.status === 500) {
          errorMessage = 'خطأ في الخادم. يرجى المحاولة لاحقاً';
        }
        this.toastr.error(errorMessage, 'خطأ');
        this.exporting = false;
      }
    });
  }

  private downloadFile(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  isSelected(item: PendingExportItem): boolean {
    return this.selectedExports.some(selected =>
      selected.sequenceNumber === item.sequenceNumber ||
      this.hasSameDecision(selected, item)
    );
  }

  toggleSelection(item: PendingExportItem): void {
    const index = this.selectedExports.findIndex(selected =>
      selected.sequenceNumber === item.sequenceNumber ||
      this.hasSameDecision(selected, item)
    );
    
    if (index > -1) {
      this.selectedExports.splice(index, 1);
    } else {
      this.selectedExports.push({ ...item });
    }
  }

  selectAll(): void {
    // ØªØ­Ø¯ÙŠØ¯ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…Ø±Ø¦ÙŠØ© ÙÙŠ Ø§Ù„Ø¬Ø¯ÙˆÙ„ (Ø¨Ø¹Ø¯ Ø§Ù„ØªØµÙÙŠØ©)
    this.selectedExports = this.pendingExports.map(item => ({ ...item }));
  }

  deselectAll(): void {
    this.selectedExports = [];
  }

  private buildUniqueKey(item: PendingExportItem): string {
    const normalized = (item.fileNumber || '').trim().toLowerCase();
    return normalized || `seq-${item.sequenceNumber}`;
  }

  private hasSameDecision(a: PendingExportItem, b: PendingExportItem): boolean {
    return !!a.decisionID && !!b.decisionID && a.decisionID === b.decisionID;
  }

  private getDecisionIdForItem(item: PendingExportItem) {
    if (item.decisionID) {
      if (item.fileNumber) {
        this.decisionIdCache.set(item.fileNumber, item.decisionID);
      }
      return of(item.decisionID);
    }

    if (item.fileNumber) {
      const cached = this.decisionIdCache.get(item.fileNumber);
      if (cached) {
        item.decisionID = cached;
        return of(cached);
      }
      return this.applicantService.getApplicantByFileNumber$(item.fileNumber).pipe(
        map(details => {
          const decisionId = details?.finalDecision?.decisionID ?? null;
          if (decisionId) {
            item.decisionID = decisionId;
            this.decisionIdCache.set(item.fileNumber!, decisionId);
          }
          return decisionId;
        }),
        catchError(() => of(null))
      );
    }

    return of(null);
  }

  /**
   * Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø£Ù† ÙƒÙ„ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…Ø­Ø¯Ø¯Ø© ØªÙ…ØªÙ„Ùƒ decisionID
   */
  private ensureDecisionIdsForSelection() {
    if (this.selectedExports.length === 0) {
      return of([]);
    }

    const lookups = this.selectedExports.map(item => this.getDecisionIdForItem(item));

    return forkJoin(lookups).pipe(
      map(resolvedIds => {
        const uniqueByFile = new Map<string, number>();
        const missing: string[] = [];
        let duplicates = 0;

        this.selectedExports.forEach((item, index) => {
          const decisionId = item.decisionID ?? resolvedIds[index];
          const key = this.buildUniqueKey(item);

          if (decisionId) {
            if (!uniqueByFile.has(key)) {
              uniqueByFile.set(key, decisionId);
            } else {
              duplicates++;
            }
          } else {
            missing.push(key);
          }
        });

        if (missing.length) {
          this.toastr.warning(`تم تجاهل ${missing.length} منتسب/ة لعدم توفّر قرار نهائي لهم.`, 'تنبيه');
        }

        if (duplicates > 0) {
          this.toastr.info('تم إزالة السجلات المكررة (نفس رقم الملف) من التصدير لضمان عدم التكرار.', 'معلومة');
        }

        return Array.from(uniqueByFile.values());
      })
    );
  }
}

