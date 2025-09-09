import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OrthopedicExam } from '../models/orthopedic-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { ApiResponse, PagedResponse } from '../../applicants/models/api-response.model';
@Injectable({
  providedIn: 'root'
})
export class OrthopedicExamService {
  private apiUrl = `${environment.apiUrl}/api/OrthopedicExams`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(private http: HttpClient) { }

  addOrthopedicExam(exam: OrthopedicExam): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, exam, { headers });
  }

  getResults(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${environment.apiUrl}/api/Results`, { headers });
  }

  updateOrthopedicExam(id: number, exam: OrthopedicExam): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    return this.http.put(`${this.apiUrl}/${id}`, exam, { headers });
  }

  // getDeferredOrthopedicExams(): Observable<OrthopedicExam[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.get<any>(this.apiUrl, { headers }).pipe(
  //     map(res => {
  //       const items = res.data?.items || res;
  //       return items.filter((exam: any) => exam.result?.description === 'مؤجل');
  //     })
  //   );
  // }
  // 🔹 جلب كل الفحوص العظمية مع Pagination
  getAllOrthopedicExams(page: number = 1,
    pageSize: number = 10,
    filter: string = ''): Observable<PagedResponse<OrthopedicExam>> {
    const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', true);

    if (filter) {
      params = params.set('filter', filter);
    }
    return this.http
      .get<ApiResponse<PagedResponse<OrthopedicExam>>>(this.apiUrl, { params })
      .pipe(map(res => res.data));
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token') || '';
    return { Authorization: `Bearer ${token}` };
  }

  // 🔹 إضافة استشارة جديدة
  addConsultation(consultation: Consultation): Observable<any> {
    return this.http.post(this.consultationUrl, consultation, {
      headers: { ...this.getAuthHeaders(), 'Content-Type': 'application/json' }
    });
  }

  // 🔹 عرض كل الاستشارات للعيادة العظمية فقط
  getOrthopedicConsultations(page: number = 1,
    pageSize: number = 10,
    filter: string = ''): Observable<PagedResponse<Consultation>> {
    const url = `${this.consultationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', false);

    if (filter) {
      params = params.set('filter', filter);
    }
    return this.http
      .get<ApiResponse<PagedResponse<Consultation>>>(this.apiUrl, { params })
      .pipe(map(res => res.data));

  }

  // 🔹 إضافة طلب تحليل
  addInvestigation(investigation: Investigation): Observable<any> {
    return this.http.post(this.investigationUrl, investigation, {
      headers: { ...this.getAuthHeaders(), 'Content-Type': 'application/json' }
    });
  }

  // 🔹 عرض كل التحاليل للعيادة العظمية فقط
  getOrthopedicInvestigations(page: number = 1,
    pageSize: number = 10,
    filter: string = ''): Observable<PagedResponse<Investigation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', true);

    if (filter) {
      params = params.set('filter', filter);
    }
    return this.http
      .get<ApiResponse<PagedResponse<Investigation>>>(this.apiUrl, { params })
      .pipe(map(res => res.data));

  }

  getByFileNumber(fileNumber: string): Observable<OrthopedicExam | null> {
    const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => {
        const items: OrthopedicExam[] = res.data?.items || [];
        // 🔹 نبحث عن فحص سابق لنفس الملف ونفس عيادة العظام فقط (specializationID = 4)
        const exam = items.find(e =>
          e.applicantFileNumber === fileNumber && e.doctor?.specializationID === 4
        );
        return exam || null;
      })
    );
  }

}

