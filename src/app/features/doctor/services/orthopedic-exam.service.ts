import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OrthopedicExam } from '../models/orthopedic-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { ApiResponse, PagedResponse } from '../../applicants/models/api-response.model';
import { AuthService } from '../../auth/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class OrthopedicExamService {
  private apiUrl = `${environment.apiUrl}/api/OrthopedicExams`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(private http: HttpClient, private authService: AuthService) { }

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
      .set('sortBy', 'orthopedicExamID') // ✅ ترتيب حسب معرف الفحص
      .set('sortDesc', 'true'); // ✅ ترتيب تنازلي (الأحدث أولاً)

    if (filter) {
      params = params.set('filter', filter);
    }
    return this.http
      .get<ApiResponse<PagedResponse<OrthopedicExam>>>(this.apiUrl, { params })
      .pipe(
        map(res => {
          const data = res.data ?? {
            items: [],
            totalCount: 0,
            page,
            pageSize,
            totalPages: 0
          };
          
          // ✅ ترتيب إضافي محلياً للتأكد (الأحدث أولاً حسب orthopedicExamID)
          if (data.items && data.items.length > 0) {
            data.items = data.items.sort((a, b) => {
              const idA = a.orthopedicExamID || 0;
              const idB = b.orthopedicExamID || 0;
              return idB - idA; // ترتيب تنازلي
            });
          }
          
          return data;
        })
      );
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
  // getOrthopedicConsultations(page: number = 1,
  //   pageSize: number = 10,
  //   filter: string = ''): Observable<PagedResponse<Consultation>> {
  //   const url = `${this.consultationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', true);

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }
  //   return this.http
  //     .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, { params })
  //     .pipe(map(res => res.data));

  // }
  getOrthopedicConsultations(
    page: number = 1,
    pageSize: number = 50,
    filter: string = ''
  ): Observable<PagedResponse<Consultation>> {
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', 'consultationID') // ✅ ترتيب حسب معرف الاستشارة
      .set('sortDesc', 'true'); // ✅ ترتيب تنازلي (الأحدث أولاً)
  
    if (filter) {
      params = params.set('filter', filter);
    }

    // إضافة فلترة حسب التخصص باستخدام filterDict
    if (currentSpecializationId) {
      params = params.set('filterDict[doctor.specializationID]', currentSpecializationId.toString());
    }
  
    return this.http
      .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
        params,
        headers: this.getAuthHeaders()
      })
      .pipe(
        map(res => {
          const data = res.data ?? {
          items: [],
          totalCount: 0,
          page,
          pageSize,
          totalPages: 0
          };
          
          // ✅ ترتيب إضافي محلياً للتأكد (الأحدث أولاً حسب consultationID)
          if (data.items && data.items.length > 0) {
            data.items = data.items.sort((a, b) => {
              const idA = a.consultationID || 0;
              const idB = b.consultationID || 0;
              return idB - idA; // ترتيب تنازلي
            });
          }
          
          return data;
        })
      );
  }
  
  // 🔹 إضافة طلب تحليل
  addInvestigation(investigation: Investigation): Observable<any> {
    return this.http.post(this.investigationUrl, investigation, {
      headers: { ...this.getAuthHeaders(), 'Content-Type': 'application/json' }
    });
  }

  // 🔹 عرض كل التحاليل للعيادة العظمية فقط
  // getOrthopedicInvestigations(page: number = 1,
  //   pageSize: number = 10,
  //   filter: string = ''): Observable<PagedResponse<Investigation>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', true);

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }
  //   return this.http
  //     .get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, { params })
  //     .pipe(map(res => res.data));

  // }
  getOrthopedicInvestigations(
    page: number = 1,
    pageSize: number = 50,
    filter: string = ''
  ): Observable<PagedResponse<Investigation>> {
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', 'investigationID') // ✅ ترتيب حسب معرف التحليل
      .set('sortDesc', 'true'); // ✅ ترتيب تنازلي (الأحدث أولاً)
  
    if (filter) {
      params = params.set('filter', filter);
    }

    // إضافة فلترة حسب التخصص للتحاليل
    if (currentSpecializationId) {
      params = params.set('filterDict[doctor.specializationID]', currentSpecializationId.toString());
    }
  
    return this.http
      .get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
        params,
        headers: this.getAuthHeaders()
      })
      .pipe(
        map(res => {
          const data = res.data ?? {
          items: [],
          totalCount: 0,
          page,
          pageSize,
          totalPages: 0
          };
          
          // ✅ ترتيب إضافي محلياً للتأكد (الأحدث أولاً حسب investigationID)
          if (data.items && data.items.length > 0) {
            data.items = data.items.sort((a, b) => {
              const idA = a.investigationID || 0;
              const idB = b.investigationID || 0;
              return idB - idA; // ترتيب تنازلي
            });
          }
          
          return data;
        })
      );
  }
  

  getByFileNumber(fileNumber: string): Observable<OrthopedicExam | null> {
    const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => {
        const items: OrthopedicExam[] = res.data?.items || [];
        const currentSpecializationId = this.authService.getSpecializationId();
        // 🔹 نبحث عن فحص سابق لنفس الملف ونفس التخصص
        const exam = items.find(e =>
          e.applicantFileNumber === fileNumber && e.doctor?.specializationID === currentSpecializationId
        );
        return exam || null;
      })
    );
  }
}

