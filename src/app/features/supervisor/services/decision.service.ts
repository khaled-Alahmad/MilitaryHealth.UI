import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../shared/models/paged-response.model';
import { FinalDecisionModel } from '../models/final-decision.model';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {
  private apiUrl = `${environment.apiUrl}/api/FinalDecisions`;

  constructor(private http: HttpClient) {}
  
  /**
   * الحصول على headers للمصادقة
   */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || localStorage.getItem('token') || '';
    return new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  
  createFinalDecision(decision: FinalDecisionModel): Observable<ApiResponse<FinalDecisionModel>> {
    // ✅ تنظيف البيانات - إزالة الحقول الاختيارية التي قد تكون undefined
    const cleanDecision: any = {
      orthopedicExamID: decision.orthopedicExamID || 0,
      surgicalExamID: decision.surgicalExamID || 0,
      internalExamID: decision.internalExamID || 0,
      eyeExamID: decision.eyeExamID || 0,
      applicantFileNumber: decision.applicantFileNumber,
      resultID: decision.resultID,
      decisionDate: decision.decisionDate
    };

    // ✅ إضافة الحقول الاختيارية فقط إذا كانت موجودة
    if (decision.earClinicID) {
      cleanDecision.earClinicID = decision.earClinicID;
    }
    if (decision.reason) {
      cleanDecision.reason = decision.reason;
    }
    if (decision.postponeDuration) {
      cleanDecision.postponeDuration = decision.postponeDuration;
    }

    return this.http.post<ApiResponse<FinalDecisionModel>>(this.apiUrl, cleanDecision, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ التحقق من وجود نتيجة نهائية للمنتسب
  checkExistingDecision(fileNumber: string): Observable<ApiResponse<FinalDecisionModel | null>> {
    return this.http.get<ApiResponse<FinalDecisionModel | null>>(`${this.apiUrl}/by-file/${fileNumber}`, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ تحديث القرار النهائي باستخدام PUT
  updateFinalDecision(decisionId: number, decision: FinalDecisionModel): Observable<ApiResponse<FinalDecisionModel>> {
    // ✅ تنظيف البيانات وإضافة supervisorLastModifiedAt بالتاريخ الحالي
    // الـ backend يتوقع معرف واحد (FinalDecisionID) وليس composite key
    const cleanDecision: any = {
      // ✅ الحقول الأساسية المطلوبة
      orthopedicExamID: decision.orthopedicExamID || 0,
      surgicalExamID: decision.surgicalExamID || 0,
      internalExamID: decision.internalExamID || 0,
      eyeExamID: decision.eyeExamID || 0,
      applicantFileNumber: decision.applicantFileNumber,
      resultID: decision.resultID,
      decisionDate: decision.decisionDate,
      // ✅ تاريخ آخر تعديل تلقائياً
      supervisorLastModifiedAt: new Date().toISOString()
    };

    // ✅ إضافة الحقول الاختيارية فقط إذا كانت موجودة
    if (decision.earClinicID) {
      cleanDecision.earClinicID = decision.earClinicID;
    }
    if (decision.reason) {
      cleanDecision.reason = decision.reason;
    }
    if (decision.postponeDuration) {
      cleanDecision.postponeDuration = decision.postponeDuration;
    }
    // ✅ الحفاظ على التواريخ الأصلية إذا كانت موجودة
    if (decision.receptionAddedAt) {
      cleanDecision.receptionAddedAt = decision.receptionAddedAt;
    }
    if (decision.supervisorAddedAt) {
      cleanDecision.supervisorAddedAt = decision.supervisorAddedAt;
    }

    // ✅ استخدام decisionID كمعرف في الـ route parameter
    // الـ backend يتوقع FinalDecisionID كمعرف واحد في الـ path: /api/FinalDecisions/{id}
    // decisionID هو المعرف الصحيح الذي يجب استخدامه
    console.log('PUT Request:', {
      url: `${this.apiUrl}/${decisionId}`,
      decisionId: decisionId,
      body: cleanDecision
    });
    
    return this.http.put<ApiResponse<FinalDecisionModel>>(`${this.apiUrl}/${decisionId}`, cleanDecision, {
      headers: this.getAuthHeaders()
    });
  }
}
