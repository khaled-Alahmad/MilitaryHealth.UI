import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../applicants/models/api-response.model';
import { of } from 'rxjs';

export interface PendingExportItem {
  sequenceNumber: number;
  fileNumber: string;
  fullName: string;
  motherName?: string;
  maritalStatus?: string;
  dateOfBirth?: Date | string | null;
  bloodType?: string;
  recruitmentCenter?: string;
  result?: string;
  supervisorEvaluationDate?: Date | string | null;
  recommendations?: string;
  reason?: string;
  decisionID?: number;
  /** تاريخ التصدير (للعناصر المُصدَّرة فقط) */
  exportedAt?: Date | string | null;
}

export interface ExportToRecruitmentRequest {
  decisionIds?: number[];
  exportAll: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecruitmentExportService {
  private apiUrl = `${environment.apiUrl}/api/RecruitmentExport`;

  constructor(private http: HttpClient) {}

  /**
   * الحصول على headers للمصادقة
   */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || localStorage.getItem('token') || '';
    return new HttpHeaders({ 
      Authorization: `Bearer ${token}` 
    });
  }

  /**
   * الحصول على قائمة الملفات المُصدَّرة سابقاً للتجنيد (لتحميلها مرة ثانية)
   */
  getExportedToRecruitment(): Observable<PendingExportItem[]> {
    return this.http.get<ApiResponse<PendingExportItem[]> | PendingExportItem[]>(`${this.apiUrl}/exported`, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(response => {
        let data: any[] = [];
        if (Array.isArray(response)) data = response;
        else if (response && (response as any).data && Array.isArray((response as any).data)) data = (response as any).data;
        else if (response && (response as any).succeeded && Array.isArray((response as any).data)) data = (response as any).data;
        return data.map((item: any) => this.normalizeExportItem(item));
      }),
      catchError(() => of([]))
    );
  }

  /**
   * الحصول على قائمة المنتسبين الجاهزين للتصدير
   */
  getPendingExports(): Observable<PendingExportItem[]> {
    return this.http.get<ApiResponse<PendingExportItem[]>>(`${this.apiUrl}/pending`, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(response => {
        // معالجة الـ response - قد يكون array مباشرة أو داخل data
        let data: any[] = [];
        
        if (Array.isArray(response)) {
          data = response;
        } else if (response && response.data && Array.isArray(response.data)) {
          data = response.data;
        } else if (response && response.succeeded && Array.isArray(response.data)) {
          data = response.data;
        }

        // ملء الحقول الناقصة بقيم افتراضية
        return data.map((item: any) => this.normalizeExportItem(item));
      }),
      catchError(() => {
        return of([]);
      })
    );
  }

  /**
   * تطبيع عنصر التصدير وملء الحقول الناقصة (يدعم camelCase و PascalCase من الـ API)
   */
  private normalizeExportItem(item: any): PendingExportItem {
    const evaluationDate = item.supervisorEvaluationDate ?? item.SupervisorEvaluationDate ??
                           item.evaluationDate ?? (item.finalDecision?.decisionDate) ?? (item.decisionDate) ?? null;
    const str = (v: any) => (v != null && v !== '') ? String(v) : null;
    return {
      sequenceNumber: item.sequenceNumber ?? item.SequenceNumber ?? 0,
      fileNumber: item.fileNumber ?? item.FileNumber ?? '',
      fullName: str(item.fullName ?? item.FullName) ?? 'غير محدد',
      motherName: str(item.motherName ?? item.MotherName) ?? undefined,
      maritalStatus: str(item.maritalStatus ?? item.MaritalStatus) ?? undefined,
      dateOfBirth: item.dateOfBirth ?? item.DateOfBirth ?? null,
      bloodType: str(item.bloodType ?? item.BloodType) ?? undefined,
      recruitmentCenter: str(item.recruitmentCenter ?? item.RecruitmentCenter) ?? undefined,
      result: str(item.result ?? item.Result) ?? undefined,
      supervisorEvaluationDate: evaluationDate,
      reason: str(item.reason ?? item.Reason) ?? undefined,
      decisionID: item.decisionID ?? item.decisionId ?? item.DecisionID ?? undefined,
      recommendations: item.recommendations ?? item.recommendation ?? undefined,
      exportedAt: item.exportedAt ?? item.ExportedAt ?? undefined
    };
  }

  /**
   * تصدير منتسبين محددين
   */
  exportToRecruitment(request: ExportToRecruitmentRequest): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/export`, request, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    }).pipe(
      catchError(err => {
        // محاولة قراءة رسالة الخطأ من الـ response
        if (err.error instanceof Blob) {
          err.error.text().then(() => {
            // Error handling without logging
          });
        }
        throw err;
      })
    );
  }

  /**
   * تصدير جميع المنتسبين غير المُصدّرين
   */
  exportAll(): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/export-all`, {}, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    }).pipe(
      catchError(err => {
        if (err.error instanceof Blob) {
          err.error.text().then(() => {
            // Error handling without logging
          });
        }
        throw err;
      })
    );
  }
}

