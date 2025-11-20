import { Component, OnInit } from '@angular/core';
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
    GregorianDatePipe
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

  constructor(
    private exportService: RecruitmentExportService,
    private toastr: ToastrService,
    private messageService: MessageService,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.loadPendingExports();
  }

  onGlobalFilter(event: Event, table: Table): void {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.globalFilter = value;
    table.filterGlobal(value, 'contains');
  }

  loadPendingExports(): void {
    this.loading = true;
    this.exportService.getPendingExports().subscribe({
      next: (data: PendingExportItem[]) => {
        this.pendingExports = data || [];
        
        // ✅ جلب decisionDate من القرار النهائي للمنتسبين الذين لا يملكون supervisorEvaluationDate
        const itemsWithoutDate = this.pendingExports.filter(item => !item.supervisorEvaluationDate && item.fileNumber);
        
        if (itemsWithoutDate.length > 0) {
          const requests = itemsWithoutDate.map(item =>
            this.applicantService.getApplicantByFileNumber$(item.fileNumber).pipe(
              map(details => {
                if (details?.finalDecision?.decisionDate) {
                  item.supervisorEvaluationDate = details.finalDecision.decisionDate;
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
        // التحقق من أن الـ blob صحيح
        if (blob && blob.size > 0) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
          this.downloadFile(blob, `Recruitment_Export_${timestamp}.pdf`);
          this.toastr.success(`تم تصدير ${decisionIds.length} منتسب بنجاح`, 'نجاح');
          this.exporting = false;
          this.selectedExports = [];
          this.loadPendingExports(); // Refresh list
        } else {
          this.toastr.error('الملف المُصدّر فارغ أو معطوب', 'خطأ');
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
        // التحقق من أن الـ blob صحيح
        if (blob && blob.size > 0) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
          this.downloadFile(blob, `Recruitment_Export_All_${timestamp}.pdf`);
          this.toastr.success(`تم تصدير ${this.pendingExports.length} منتسب بنجاح`, 'نجاح');
          this.exporting = false;
          this.selectedExports = [];
          this.loadPendingExports(); // Refresh list
        } else {
          this.toastr.error('الملف المُصدّر فارغ أو معطوب', 'خطأ');
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
      (selected as any).decisionID === (item as any).decisionID
    );
  }

  toggleSelection(item: PendingExportItem): void {
    const index = this.selectedExports.findIndex(selected => 
      selected.sequenceNumber === item.sequenceNumber || 
      (selected as any).decisionID === (item as any).decisionID
    );
    
    if (index > -1) {
      this.selectedExports.splice(index, 1);
    } else {
      this.selectedExports.push({ ...item });
    }
  }

  selectAll(): void {
    // تحديد جميع العناصر المرئية في الجدول (بعد التصفية)
    this.selectedExports = [...this.pendingExports];
  }

  deselectAll(): void {
    this.selectedExports = [];
  }

  /**
   * التأكد من أن كل العناصر المحددة تمتلك decisionID
   */
  private ensureDecisionIdsForSelection() {
    const itemsWithoutDecisionId = this.selectedExports.filter(item => !item.decisionID);

    if (itemsWithoutDecisionId.length === 0) {
      const ids = this.selectedExports
        .map(item => item.decisionID)
        .filter((id): id is number => id !== null && id !== undefined);
      return of(ids);
    }

    const requests = itemsWithoutDecisionId.map(item =>
      this.applicantService.getApplicantByFileNumber$(item.fileNumber).pipe(
        map(details => {
          const decisionId = details?.finalDecision?.decisionID;
          if (decisionId) {
            item.decisionID = decisionId;
          }
          return decisionId;
        }),
        catchError(err => {
          return of(null);
        })
      )
    );

    return forkJoin(requests).pipe(
      map(() => {
        const ids = this.selectedExports
          .map(item => item.decisionID)
          .filter((id): id is number => id !== null && id !== undefined);

        if (ids.length !== this.selectedExports.length) {
          this.toastr.error('بعض المنتسبين لا يملكون قراراً نهائياً، لا يمكن تصديرهم', 'تنبيه');
        }

        return ids;
      })
    );
  }
}

