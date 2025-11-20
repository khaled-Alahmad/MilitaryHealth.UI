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
  decisionID?: number; // ✅ إضافة decisionID
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
   * تطبيع عنصر التصدير وملء الحقول الناقصة
   */
  private normalizeExportItem(item: any): PendingExportItem {
    // ✅ استخدام decisionDate من finalDecision إذا كان supervisorEvaluationDate null
    const evaluationDate = item.supervisorEvaluationDate ?? 
                           item.evaluationDate ?? 
                           (item.finalDecision?.decisionDate) ?? 
                           (item.decisionDate) ?? 
                           null;
    
    return {
      sequenceNumber: item.sequenceNumber ?? 0,
      fileNumber: item.fileNumber ?? '',
      fullName: item.fullName ?? 'غير محدد',
      motherName: item.motherName ?? 'غير محدد',
      maritalStatus: item.maritalStatus ?? 'غير محدد',
      dateOfBirth: item.dateOfBirth ?? null,
      bloodType: item.bloodType ?? 'غير محدد',
      recruitmentCenter: item.recruitmentCenter ?? 'غير محدد',
      result: item.result ?? 'غير محدد',
      supervisorEvaluationDate: evaluationDate,
      reason: item.reason ?? 'غير محدد',
      decisionID: item.decisionID ?? item.decisionId ?? null,
      recommendations: item.recommendations ?? item.recommendation ?? null
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

