import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { EarClinicExam } from '../models/ear-clinic-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { AuthService } from '../../auth/services/auth.service';
import { ApiResponse, PagedResponse } from '../../applicants/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class EarClinicExamService {
  private apiUrl = `${environment.apiUrl}/api/EarClinicExams`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;

  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getFileUrl(path: string): string {
    if (!path) return '';
    return `${environment.apiUrl}/${path}`;
  }

  addEarClinicExam(exam: EarClinicExam): Observable<any> {
    return this.http.post(this.apiUrl, exam, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  updateEarClinicExam(id: number, exam: EarClinicExam): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, exam, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  updateConsultation(id: number, consultation: Consultation): Observable<any> {
    return this.http.put(`${this.consultationUrl}/${id}`, consultation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  updateInvestigation(id: number, investigation: Investigation): Observable<any> {
    return this.http.put(`${this.investigationUrl}/${id}`, investigation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post(this.uploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).pipe(
      map((res: any) => res.path)
    );
  }

  getAllEarClinicExams(): Observable<EarClinicExam[]> {
    return this.http.get<ApiResponse<EarClinicExam[]>>(this.apiUrl, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(res => res.data || []),
      catchError(() => of([]))
    );
  }

  // جلب الفحوص المؤجلة الخاصة بالعيادة الأذنية فقط
  getDeferredEarClinicExamsPaged(
    page: number = 1,
    pageSize: number = 10,
    filter: string = ''
  ): Observable<PagedResponse<EarClinicExam>> {
    // جلب ALL data ثم فلتر محلياً (حل مؤقت حتى يصلح الباك)
    const currentDoctorId = this.authService.getDoctorId();
    
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '1000') // جلب كل البيانات
      .set('sortDesc', 'true')
      .set('sortBy', 'earClinicID');
  
    if (filter) {
      params = params.set('filter', filter);
    }
  
    return this.http.get<ApiResponse<PagedResponse<EarClinicExam>>>(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => {
        const data = res.data ?? {
          items: [],
          totalCount: 0,
          page: page,
          pageSize,
          totalPages: 0
        };
        
        // فلترة الفحوص المؤجلة حسب doctorID
        const deferredExams = (data?.items || []).filter((exam: EarClinicExam) => {
          const resultDesc = exam.result?.description || '';
          return exam.doctorID === currentDoctorId && resultDesc.toLowerCase().includes('مؤجل');
        });
        
        // تطبيق pagination محلي
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedItems = deferredExams.slice(startIndex, endIndex);
        
        return {
          items: paginatedItems,
          totalCount: deferredExams.length,
          page: page,
          pageSize: pageSize,
          totalPages: Math.ceil(deferredExams.length / pageSize)
        } as PagedResponse<EarClinicExam>;
      }),
      catchError(() => of({
        items: [],
        totalCount: 0,
        page: page,
        pageSize,
        totalPages: 0
      } as PagedResponse<EarClinicExam>))
    );
  }

  // جلب التحاليل الخاصة بالعيادة الأذنية فقط
  getAllEarClinicInvestigations(
    page: number = 1,
    pageSize: number = 10,
    filter: string = ''
  ): Observable<PagedResponse<Investigation>> {
    const currentDoctorId = this.authService.getDoctorId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', 'true')
      .set('sortBy', 'investigationID');

    if (filter) {
      params = params.set('filter', filter);
    }

    // إضافة فلترة حسب doctorID للتحاليل
    if (currentDoctorId) {
      params = params.set('filterDict[doctorID]', currentDoctorId.toString());
    }

    return this.http
      .get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, { 
        headers: this.getAuthHeaders(),
        params 
      })
      .pipe(
        map(res => res.data ?? {
          items: [],
          totalCount: 0,
          page: page,
          pageSize,
          totalPages: 0
        }),
        catchError(() => of({
          items: [],
          totalCount: 0,
          page: page,
          pageSize,
          totalPages: 0
        } as PagedResponse<Investigation>))
      );
  }

  // جلب الاستشارات الخاصة بالعيادة الأذنية فقط
  getEarClinicConsultations(
    page: number = 1,
    pageSize: number = 10,
    filter: string = ''
  ): Observable<PagedResponse<Consultation>> {
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', 'true')
      .set('sortBy', 'consultationID');

    if (filter) {
      params = params.set('filter', filter);
    }

    // إضافة فلترة حسب التخصص باستخدام filterDict
    if (currentSpecializationId) {
      params = params.set('filterDict[doctor.specializationID]', currentSpecializationId.toString());
    }
  
    return this.http.get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => res.data ?? {
        items: [],
        totalCount: 0,
        page: page,
        pageSize: pageSize,
        totalPages: 0
      }),
      catchError(() => of({
        items: [],
        totalCount: 0,
        page: page,
        pageSize: pageSize,
        totalPages: 0
      } as PagedResponse<Consultation>))
    );
  }

  getByFileNumber(fileNumber: string): Observable<EarClinicExam | null> {
    const url = `${this.apiUrl}/file/${fileNumber}`;
    return this.http.get<ApiResponse<EarClinicExam>>(url, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(res => res.data || null),
      catchError(() => of(null))
    );
  }

  getResults(): Observable<any> {
    const resultsUrl = `${environment.apiUrl}/api/Results`;
    return this.http.get<any>(resultsUrl, {
      headers: this.getAuthHeaders()
    });
  }
}