import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { InternalExam } from '../models/internal-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { ApiResponse, PagedResponse } from '../../applicants/models/api-response.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InternalExamService {
  private apiUrl = `${environment.apiUrl}/api/InternalExams`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;

  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  addInternalExam(exam: InternalExam): Observable<any> {
    return this.http.post(this.apiUrl, exam, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  // ✅ Cache للنتائج لتجنب الطلبات المكررة
  private resultsCache$?: Observable<any>;

  getResults(): Observable<any> {
    if (!this.resultsCache$) {
      this.resultsCache$ = this.http.get(`${environment.apiUrl}/api/Results`, { 
        headers: this.getAuthHeaders() 
      }).pipe(
        shareReplay(1) // ✅ مشاركة النتيجة مع جميع المشتركين
      );
    }
    return this.resultsCache$;
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
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', 'true')
      .set('sortBy', 'investigationID');

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
        map(res => res.data ?? {
          items: [],
          totalCount: 0,
          page,
          pageSize,
          totalPages: 0
        })
      );
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
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', false);
  
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
        map(res => res.data ?? {
          items: [],
          totalCount: 0,
          page,
          pageSize,
          totalPages: 0
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

  // ✅ جلب التحاليل الخاصة بالعيادة الداخلية
  getInternalInvestigations(
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

  getOrthopedicInvestigations(
    page: number = 1,
    pageSize: number = 50,
    filter: string = ''
  ): Observable<PagedResponse<Investigation>> {
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', false);
  
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
        map(res => res.data ?? {
          items: [],
          totalCount: 0,
          page,
          pageSize,
          totalPages: 0
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
    const currentSpecializationId = this.authService.getSpecializationId();
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', true)
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
        page,
        pageSize,
        totalPages: 0
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
    if (!fileNumber) {
      return of(null);
    }

    const currentSpecializationId = this.authService.getSpecializationId();
    
    // ✅ استخدام filter في API بدلاً من جلب كل البيانات
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10') // ✅ تقليل حجم البيانات
      .set('sortDesc', 'false')
      .set('filter', fileNumber); // ✅ فلترة حسب رقم الملف

    // ✅ إضافة فلترة حسب التخصص إذا كان متوفراً
    if (currentSpecializationId) {
      params = params.set('filterDict[doctor.specializationID]', currentSpecializationId.toString());
    }

    return this.http.get<ApiResponse<PagedResponse<InternalExam>>>(this.apiUrl, { 
      headers: this.getAuthHeaders(),
      params 
    }).pipe(
      map(res => {
        const items: InternalExam[] = res.data?.items || [];
        // ✅ البحث عن فحص لنفس الملف (الفلترة الأساسية تمت في API)
        const exam = items.find(e => e.applicantFileNumber === fileNumber);
        return exam || null;
      }),
      catchError(() => of(null))
    );
  }

}
