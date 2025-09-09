import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { InternalExam } from '../models/internal-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { ApiResponse, PagedResponse } from '../../applicants/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class InternalExamService {
  private apiUrl = `${environment.apiUrl}/api/InternalExams`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;

  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;

  constructor(private http: HttpClient) { }

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
  // جلب كل الفحوصات الداخلية مع pagination + filter
  getAllInternalExams(
    page: number = 1,
    pageSize: number = 20,
    filter: string = ''
  ): Observable<PagedResponse<InternalExam>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', true)
      .set('sortBy', 'internalExamID');

    if (filter) {
      params = params.set('filter', filter);
    }

    return this.http
      .get<ApiResponse<PagedResponse<InternalExam>>>(this.apiUrl, { params })
      .pipe(map(res => res.data));
  }

  // تحديث فحص داخلي موجود
  updateInternalExam(id: number, exam: InternalExam): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, exam, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }




  // جلب كل التحاليل للعيادة الداخلية مع pagination + filter
  getAllInternalInvestigations(
    page: number = 1,
    pageSize: number = 10,
    filter: string = ''
  ): Observable<PagedResponse<Investigation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', 'true')
      .set('sortBy', 'investigationID');

    if (filter) {
      params = params.set('filter', filter);
    }

    return this.http
      .get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, { params })
      .pipe(map(res => res.data));
  }


  // getInternalInvestigations(page: number = 1,
  //   pageSize: number = 10,
  //   filter: string = ''): Observable<PagedResponse<Investigation>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', true)
  //     .set('sortBy', 'investigationID');

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }
  //   return this.http
  //     .get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, { params })
  //     .pipe(map(res => res.data));
  // }
  getOrthopedicConsultations(
    page: number = 1,
    pageSize: number = 50,
    filter: string = ''
  ): Observable<PagedResponse<Consultation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', false);
  
    if (filter) {
      params = params.set('filter', filter);
    }
  
    return this.http
      .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
        params,
        headers: this.getAuthHeaders()
      })
      .pipe(
        map(res => {
          const data = res.data;
          return {
            ...data,
            items: (data?.items || []).filter(
              (c: Consultation) => c.doctor?.specializationID === 2
            )
          } as PagedResponse<Consultation>;
        })
      );
  }
  // جلب كل الاستشارات للعيادة الداخلية مع pagination + filter
  // getAllInternalConsultations(
  //   page: number = 1,
  //   pageSize: number = 20,
  //   filter: string = ''
  // ): Observable<PagedResponse<Consultation>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', true)
  //     .set('sortBy', 'consultationID');

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }

  //   return this.http
  //     .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, { params })
  //     .pipe(map(res => res.data));
  // }

  getOrthopedicInvestigations(
    page: number = 1,
    pageSize: number = 50,
    filter: string = ''
  ): Observable<PagedResponse<Investigation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', false);
  
    if (filter) {
      params = params.set('filter', filter);
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
          return {
            ...data,
            items: (data?.items || []).filter(
              (i: Investigation) => i.doctor?.specializationID === 2
            )
          } as PagedResponse<Investigation>;
        })
      );
  }
  // getInternalConsultations(page: number = 1,
  //   pageSize: number = 10,
  //   filter: string = ''): Observable<PagedResponse<Consultation>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', true)
  //     .set('sortBy', 'consultationID')
  //     ;

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }
  //   return this.http
  //     .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, { params })
  //     .pipe(map(res => res.data));
  // }

  getInternalConsultations(
    page: number = 1,
    pageSize: number = 10,
    filter: string = ''
  ): Observable<PagedResponse<Consultation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', true)
      .set('sortBy', 'consultationID');
  
    if (filter) {
      params = params.set('filter', filter);
    }
  
    return this.http.get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => {
        const data = res.data ?? {
          items: [],
          totalCount: 0,
          page,
          pageSize,
          totalPages: 0
        };
        return {
          ...data,
          items: (data?.items || []).filter(
            (c: Consultation) => c.doctor?.specializationID === 3 // 👈 ID الباطنة (عدّله حسب DB عندك)
          )
        } as PagedResponse<Consultation>;
      }),
      catchError(() => of({
        items: [],
        totalCount: 0,
        page: page,
        pageSize,
        totalPages: 0
      } as PagedResponse<Consultation>))
      
    );
  }
  
  getByFileNumber(fileNumber: string): Observable<InternalExam | null> {
    const url = `${this.apiUrl}?sortDesc=false&page=1&pageSize=1000`;
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
