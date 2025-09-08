// services/surgical-exam.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SurgicalExam } from '../models/surgical-exam-post.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';

@Injectable({
  providedIn: 'root'
})
export class SurgicalExamService {
  private apiUrl = `${environment.apiUrl}/api/SurgicalExams`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(private http: HttpClient) {}

  // إضافة فحص جراحي جديد
  addSurgicalExam(exam: SurgicalExam): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, exam, { headers });
  }

  // جلب جميع الفحوصات
  getSurgicalExams(): Observable<SurgicalExam[]> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(res => res.data?.items || res) 
    );
  }

  // جلب الفحوصات المؤجلة فقط
  // getDeferredSurgicalExams(): Observable<SurgicalExam[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.get<any>(this.apiUrl, { headers }).pipe(
  //     map(res => {
  //       const items = res.data?.items || res;
  //       // فلترة الفحوص المؤجلة حسب النتيجة
  //       return items.filter((exam: any) => exam.result?.description === 'مؤجل');
  //     })
  //   );
  // }

  // 🔹 جلب كل الفحوصات الجراحية مع Pagination
getAllSurgicalExams(page: number = 1, pageSize: number = 10): Observable<{ items: SurgicalExam[], totalCount: number }> {
  const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
  const headers = this.getAuthHeaders();

  return this.http.get<{ data?: { items: SurgicalExam[], totalCount: number } }>(url, { headers }).pipe(
    map(res => {
      const items = res.data?.items || [];
      const totalCount = res.data?.totalCount || items.length;
      return { items, totalCount };
    })
  );
}

  // جلب نتائج الفحوص
  getResults(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${environment.apiUrl}/api/Results`, { headers });
  }

  // تحديث فحص جراحي موجود
  updateSurgicalExam(id: number, exam: SurgicalExam): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    return this.http.put(`${this.apiUrl}/${id}`, exam, { headers });
  }


    getSurgicalConsultations(page: number = 1, pageSize: number = 50): Observable<Consultation[]> {
    const url = `${this.consultationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => (res.data?.items || []).filter((c: any) => c.doctor?.specializationID === 3))
    );
  }

  // ✅ تحاليل خاصة بالجراحة
  addInvestigation(investigation: Investigation): Observable<any> {
    return this.http.post(this.investigationUrl, investigation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  getSurgicalInvestigations(page: number = 1, pageSize: number = 50): Observable<Investigation[]> {
    const url = `${this.investigationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => (res.data?.items || []).filter((i: any) => i.doctor?.specializationID === 3))
    );
  }
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getByFileNumber(fileNumber: string): Observable<SurgicalExam | null> {
  const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
  return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
    map(res => {
      const items: SurgicalExam[] = res.data?.items || [];
      // 🔹 نبحث عن فحص سابق لنفس الملف ونفس عيادة الجراحة (specializationID = 3)
      const exam = items.find(e => 
        e.applicantFileNumber?.toString() === fileNumber.toString() &&
        (e.doctor?.specializationID === 3)
      );
      return exam || null;
    })
  );
}

}
