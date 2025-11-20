// services/surgical-exam.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SurgicalExam } from '../models/surgical-exam-post.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { ApiResponse, PagedResponse } from '../../applicants/models/api-response.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurgicalExamService {
  private apiUrl = `${environment.apiUrl}/api/SurgicalExams`;
  private consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private investigationUrl = `${environment.apiUrl}/api/Investigations`;
  public uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(private http: HttpClient, private authService: AuthService) {}

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
getAllSurgicalExams(page: number = 1,
  pageSize: number = 10,
  filter: string = ''): Observable<PagedResponse<SurgicalExam>> {
  const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;

  let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', 'surgicalExamID') // ✅ ترتيب حسب معرف الفحص
      .set('sortDesc', 'true'); // ✅ ترتيب تنازلي (الأحدث أولاً)

    if (filter) {
      params = params.set('filter', filter);
    }
    return this.http
      .get<ApiResponse<PagedResponse<SurgicalExam>>>(this.apiUrl, { params })
      .pipe(
        map(res => {
          const data = res.data ?? {
            items: [],
            totalCount: 0,
            page,
            pageSize,
            totalPages: 0
          };
          
          // ✅ ترتيب إضافي محلياً للتأكد (الأحدث أولاً حسب surgicalExamID)
          if (data.items && data.items.length > 0) {
            data.items = data.items.sort((a, b) => {
              const idA = a.surgicalExamID || 0;
              const idB = b.surgicalExamID || 0;
              return idB - idA; // ترتيب تنازلي
            });
          }
          
          return data;
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


  //   getSurgicalConsultations(page: number = 1,
  //     pageSize: number = 10,
  //     filter: string = ''): Observable<PagedResponse<Consultation>> {
  //   const url = `${this.consultationUrl}?sortDesc=true&page=${page}&pageSize=${pageSize}`;
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', true)
  //     .set('sortBy', 'surgicalExamID');

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }
  //   return this.http
  //     .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, { params })
  //     .pipe(map(res => res.data));
  // }


  getSurgicalConsultations(
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
  
  
  // ✅ تحاليل خاصة بالجراحة
  addInvestigation(investigation: Investigation): Observable<any> {
    return this.http.post(this.investigationUrl, investigation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    });
  }

  getSurgicalInvestigations(page: number = 1, pageSize: number = 50, filter: string = ''): Observable<PagedResponse<Investigation>> {
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

    return this.http.get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
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
