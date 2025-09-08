import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { InternalExam } from '../models/internal-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';

@Injectable({
  providedIn: 'root'
})
export class InternalExamService {
  private apiUrl = `${environment.apiUrl}/api/InternalExams`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;

  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  addInternalExam(exam: InternalExam): Observable<any> {
    return this.http.post(this.apiUrl, exam, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  getResults(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/Results`, { headers: this.getAuthHeaders() });
  }

  // 🔹 جلب الفحوص الداخلية المؤجلة فقط
  getDeferredInternalExams(): Observable<InternalExam[]> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(res => {
        const items = res.data?.items || res;
        return items.filter((exam: any) => exam.result?.description === 'مؤجل');
      })
    );
  }
      //جلب كل الفحوصات الداخلية
    getAllInternalExams(page: number, pageSize: number, searchTerm: string = ''): Observable<InternalExam[]> {
      const url = `${this.apiUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
      return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
        map(res => res.data?.items || [])
      );
    }

    // تحديث فحص داخلي موجود
    updateInternalExam(id: number, exam: InternalExam): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, exam, {
        headers: this.getAuthHeaders().set('Content-Type', 'application/json')
      });
    }




  // جلب كل التحاليل للعيادة الداخلية
  getAllInternalInvestigations(page: number = 1, pageSize: number = 50): Observable<Investigation[]> {
    const url = `${this.investigationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    return this.http.get<{ data?: { items: Investigation[] } }>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => {
        const items: Investigation[] = res.data?.items || [];
        return items.filter(inv => inv.doctor?.specializationID === 2);
      })
    );
  }

  // جلب كل الاستشارات للعيادة الداخلية
  getAllInternalConsultations(page: number = 1, pageSize: number = 50): Observable<Consultation[]> {
    const url = `${this.consultationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    return this.http.get<{ data?: { items: Consultation[] } }>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => {
        const items: Consultation[] = res.data?.items || [];
        return items.filter(c => c.doctor?.specializationID === 2);
      })
    );
  }
    getInternalInvestigations(page: number = 1, pageSize: number = 50): Observable<Investigation[]> {
    const url = `${this.investigationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    return this.http.get<{ data?: { items: Investigation[] } }>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => (res.data?.items || []).filter(inv => inv.doctor?.specializationID === 2)) // 2 = العيادة الداخلية
    );
  }

    getInternalConsultations(page: number = 1, pageSize: number = 50): Observable<Consultation[]> {
    const url = `${this.consultationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
    return this.http.get<{ data?: { items: Consultation[] } }>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => (res.data?.items || []).filter(c => c.doctor?.specializationID === 2)) // 2 = العيادة الداخلية
    );
  }


getByFileNumber(fileNumber: string): Observable<InternalExam | null> {
  const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
  return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
    map(res => {
      const items: InternalExam[] = res.data?.items || [];
      // 🔹 نبحث عن فحص لنفس الملف ونفس التخصص (العيادة الداخلية specializationID = 2)
      const exam = items.find(e => 
        e.applicantFileNumber === fileNumber && e.doctor?.specializationID === 2
      );
      return exam || null;
    }),
    catchError(() => of(null))
  );
}

}
