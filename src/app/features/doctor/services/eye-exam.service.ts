import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

// Models
import { EyeExam } from '../models/eye-exam.model';
import { Refraction } from '../models/refraction.model';
import { RefractionType } from '../models/refraction-type.model';
import { OrganizedRefractions } from '../models/organized-refractions.model';
import { DetailedEyeExam } from '../models/detailed-eye-exam.model';
import { Consultation } from '../models/consultation.model';
import { Investigation } from '../models/investigation.model';
import { ApiResponse } from '../../applicants/models/api-response.model';
import { PagedResponse } from '../../../shared/models/paged-response.model';

@Injectable({
  providedIn: 'root'
})
export class EyeExamService {
  private readonly apiUrl = `${environment.apiUrl}/api/EyeExams`;
  private readonly consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private readonly uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  private readonly refractionUrl = `${environment.apiUrl}/api/Refractions`;
  private readonly refractionTypesUrl = `${environment.apiUrl}/api/RefractionTypes`;
  private readonly resultsUrl = `${environment.apiUrl}/api/Results`;
  private readonly investigationUrl = `${environment.apiUrl}/api/Investigations`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Helper Methods
  private organizeRefractions(refractions: Refraction[]): OrganizedRefractions {
    const organized: OrganizedRefractions = {
      rightEye: {
        myopia: undefined,
        hyperopia: undefined,
        astigmatism: undefined
      },
      leftEye: {
        myopia: undefined,
        hyperopia: undefined,
        astigmatism: undefined
      },
      hasRefractions: false
    };

    if (!refractions?.length) {
      return organized;
    }

    organized.hasRefractions = true;

    refractions.forEach(refraction => {
      const eye = refraction.isLeft ? organized.leftEye : organized.rightEye;
      
      if (refraction.refractionType) {
        const description = refraction.refractionType.description.toLowerCase();
        if (description.includes('قصر') || description.includes('myopia')) {
          eye.myopia = refraction.refractionValue;
        } else if (description.includes('طول') || description.includes('hyperopia')) {
          eye.hyperopia = refraction.refractionValue;
        } else if (description.includes('استجماتيزم') || description.includes('astigmatism')) {
          eye.astigmatism = refraction.refractionValue;
        }
      } else {
        switch (refraction.refractionTypeID) {
          case 1: // قصر نظر
            eye.myopia = refraction.refractionValue;
            break;
          case 2: // طول نظر
            eye.hyperopia = refraction.refractionValue;
            break;
          case 3: // استجماتيزم
            eye.astigmatism = refraction.refractionValue;
            break;
        }
      }
    });

    return organized;
  }

  // Eye Exam CRUD Operations
  createEyeExam(eyeExam: any): Observable<ApiResponse<EyeExam>> {
    if (!eyeExam) {
      return of({
        succeeded: false,
        status: 400,
        message: 'بيانات الفحص مطلوبة',
        data: {} as EyeExam,
        traceId: ''
      });
    }

    return this.http.post<ApiResponse<EyeExam>>(this.apiUrl, eyeExam, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    }).pipe(
      catchError(error => {
        return of({
          succeeded: false,
          status: error.status || 500,
          message: error.error?.message || error.message || 'حدث خطأ أثناء إنشاء الفحص',
          data: {} as EyeExam,
          traceId: error.error?.traceId || ''
        });
      })
    );
  }

  updateEyeExam(id: number, eyeExam: EyeExam): Observable<ApiResponse<EyeExam>> {
    if (!id || !eyeExam) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الفحص والبيانات مطلوبة',
        data: {} as EyeExam,
        traceId: ''
      });
    }

    return this.http.put<ApiResponse<EyeExam>>(`${this.apiUrl}/${id}`, eyeExam, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء تحديث الفحص',
        data: {} as EyeExam,
        traceId: ''
      }))
    );
  }

  getEyeExamById(id: number): Observable<ApiResponse<EyeExam>> {
    if (!id) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الفحص مطلوب',
        data: {} as EyeExam,
        traceId: ''
      });
    }

    return this.http.get<ApiResponse<EyeExam>>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء جلب الفحص',
        data: {} as EyeExam,
        traceId: ''
      }))
    );
  }

  getAllEyeExams(page: number = 1, pageSize: number = 20, filter: string = ''): Observable<PagedResponse<EyeExam>> {
    let params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString())
    .set('sortBy', 'applicantFileNumber') // فرز حسب رقم الملف
    .set('sortDesc', 'true'); // ترتيب تنازلي

    if (filter) {
      params = params.set('filter', filter);
    }

    return this.http.get<ApiResponse<PagedResponse<EyeExam>>>(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => res.data),
      catchError(() => of({
        items: [],
        totalCount: 0,
        pageNumber: page,
        pageSize: pageSize,
        totalPages: 0
      }))
    );
  }

  getByFileNumber(fileNumber: string): Observable<ApiResponse<EyeExam | null>> {
    if (!fileNumber) {
      return of({
        succeeded: false,
        status: 400,
        message: 'رقم الملف مطلوب',
        data: null,
        traceId: ''
      });
    }

    const params = new HttpParams()
      .set('filter', `applicantFileNumber=${fileNumber}`)
      .set('page', '1')
      .set('pageSize', '1');

    return this.http.get<ApiResponse<PagedResponse<EyeExam>>>(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(response => ({
        ...response,
        data: response.data.items?.[0] || null
      })),
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء جلب الفحص',
        data: null,
        traceId: ''
      }))
    );
  }


  getByFileNumber1(fileNumber: string): Observable<EyeExam | null> {
    const url = `${this.apiUrl}?sortDesc=false&page=1&pageSize=1000`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() }).pipe(
      map(res => {
        const items: EyeExam[] = res.data?.items || [];
        // 🔹 نبحث عن فحص لنفس الملف ونفس التخصص (العيادة الداخلية specializationID = 2)
        const exam = items.find(e =>
          e.applicantFileNumber === fileNumber && e.doctor?.specializationID === 1
        );
        return exam || null;
      }),
      catchError(() => of(null))
    );
  }


  
  // Detailed Eye Exam Operations
  getDetailedEyeExamByFileNumber(fileNumber: string): Observable<ApiResponse<DetailedEyeExam | null>> {
    if (!fileNumber) {
      return of({
        succeeded: false,
        status: 400,
        message: 'رقم الملف مطلوب',
        data: null,
        traceId: ''
      });
    }

    return this.getByFileNumber(fileNumber).pipe(
      switchMap(response => {
        if (!response.succeeded || !response.data) {
          return of(response as ApiResponse<DetailedEyeExam | null>);
        }

        const eyeExam = response.data;

        return forkJoin({
          refractions: this.getRefractionsByEyeExamId(eyeExam.eyeExamID!),
          types: this.getRefractionTypes()
        }).pipe(
          map(({ refractions, types }) => {
            if (!refractions.succeeded) {
              return {
                ...response,
                succeeded: false,
                status: refractions.status,
                message: 'فشل في جلب الانكسارات',
                data: null
              };
            }

            const refractionsWithTypes = refractions.data.map(refraction => ({
              ...refraction,
              refractionType: types.data.items?.find(
                type => type.refractionTypeID === refraction.refractionTypeID
              )
            }));

            const organizedRefractions = this.organizeRefractions(refractionsWithTypes);

            const detailedExam: DetailedEyeExam = {
              ...eyeExam,
              organizedRefractions
            };

            return {
              succeeded: true,
              status: 200,
              message: 'تم جلب تفاصيل الفحص العيني بنجاح',
              data: detailedExam,
              traceId: response.traceId
            };
          }),
          catchError(error => of({
            succeeded: false,
            status: error.status || 500,
            message: error.message || 'حدث خطأ غير متوقع',
            data: null,
            traceId: ''
          }))
        );
      })
    );
  }

  // Refraction Operations
  addRefraction(refraction: Refraction): Observable<ApiResponse<Refraction>> {
    if (!refraction || !refraction.eyeExamID) {
      return of({
        succeeded: false,
        status: 400,
        message: 'بيانات الانكسار ومعرف الفحص مطلوبة',
        data: {} as Refraction,
        traceId: ''
      });
    }

    return this.http.post<ApiResponse<Refraction>>(this.refractionUrl, refraction, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء إضافة الانكسار',
        data: {} as Refraction,
        traceId: ''
      }))
    );
  }

  deleteRefraction(refractionId: number): Observable<ApiResponse<void>> {
    if (!refractionId) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الانكسار مطلوب',
        data: undefined,
        traceId: ''
      });
    }

    return this.http.delete<ApiResponse<void>>(`${this.refractionUrl}/${refractionId}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء حذف الانكسار',
        data: undefined,
        traceId: ''
      }))
    );
  }

  updateRefraction(refractionId: number, refraction: Refraction): Observable<ApiResponse<Refraction>> {
    if (!refractionId || !refraction) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الانكسار والبيانات مطلوبة',
        data: {} as Refraction,
        traceId: ''
      });
    }

    return this.http.put<ApiResponse<Refraction>>(`${this.refractionUrl}/${refractionId}`, refraction, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء تحديث الانكسار',
        data: {} as Refraction,
        traceId: ''
      }))
    );
  }

  getRefractionsByEyeExamId(eyeExamId: number): Observable<ApiResponse<Refraction[]>> {
    if (!eyeExamId) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الفحص مطلوب',
        data: [],
        traceId: ''
      });
    }

    const params = new HttpParams()
      .set('filter', `eyeExamId=${eyeExamId}`)
      .set('page', '1')
      .set('pageSize', '100');

    return this.http.get<ApiResponse<PagedResponse<Refraction>>>(
      this.refractionUrl,
      { headers: this.getAuthHeaders(), params }
    ).pipe(
      map(response => ({
        ...response,
        data: response.data?.items || []
      })),
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء جلب الانكسارات',
        data: [],
        traceId: ''
      }))
    );
  }

  getRefractionsByApplicantId(applicantId: number): Observable<Refraction[]> {
    if (!applicantId) {
      return of([]);
    }

    return this.getEyeExamsByApplicantId(applicantId).pipe(
      switchMap(exams => {
        if (!exams.length) {
          return of([]);
        }
        
        const refractionCalls = exams.map(exam =>
          this.getRefractionsByEyeExamId(exam.eyeExamID!).pipe(
            map(response => response.data)
          )
        );

        return forkJoin(refractionCalls).pipe(
          map(refractionArrays => refractionArrays.flat()),
          catchError(() => of([]))
        );
      }),
      catchError(() => of([]))
    );
  }

  private getEyeExamsByApplicantId(applicantId: number): Observable<EyeExam[]> {
    if (!applicantId) {
      return of([]);
    }

    const params = new HttpParams()
      .set('filter', `applicantId=${applicantId}`)
      .set('page', '1')
      .set('pageSize', '1000')
      .set('sortDesc', 'true');

    return this.http.get<ApiResponse<PagedResponse<EyeExam>>>(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => res.data?.items || []),
      catchError(() => of([]))
    );
  }

  getRefractionTypes(): Observable<ApiResponse<PagedResponse<RefractionType>>> {
    return this.http.get<ApiResponse<PagedResponse<RefractionType>>>(
      this.refractionTypesUrl,
      { headers: this.getAuthHeaders() }
    ).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء جلب أنواع الانكسارات',
        data: {
          items: [],
          pageNumber: 1,
          pageSize: 0,
          totalCount: 0,
          totalPages: 0
        },
        traceId: ''
      }))
    );
  }

  // Results Operations
  getResults(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(this.resultsUrl, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء جلب النتائج',
        data: null,
        traceId: ''
      }))
    );
  }

  // File Operations
  uploadFile(file: File): Observable<string> {
    if (!file) {
      return of('');
    }

    const formData = new FormData();
    formData.append('File', file);

    return this.http.post<any>(this.uploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(res => res.path || ''),
      catchError(() => of(''))
    );
  }

  // Consultation Operations
  addConsultation(consultation: Consultation): Observable<ApiResponse<Consultation>> {
    if (!consultation) {
      return of({
        succeeded: false,
        status: 400,
        message: 'بيانات الاستشارة مطلوبة',
        data: {} as Consultation,
        traceId: ''
      });
    }

    return this.http.post<ApiResponse<Consultation>>(this.consultationUrl, consultation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء إضافة الاستشارة',
        data: {} as Consultation,
        traceId: ''
      }))
    );
  }

  getEyeClinicConsultations(
    page: number = 1,
    pageSize: number = 20,
    filter: string = ''
  ): Observable<PagedResponse<Consultation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortDesc', 'true');
  
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
            (c: Consultation) => c.doctor?.specializationID === 1 // 👈 رقم التخصص الخاص بالعيون
          )
        } as PagedResponse<Consultation>;
      }),
      catchError(() => of({
        items: [],
        totalCount: 0,
        pageNumber: page,
        pageSize: pageSize,
        totalPages: 0
      }))
    );
  }
  

  updateConsultation(id: number, consultation: Consultation): Observable<ApiResponse<Consultation>> {
    if (!id || !consultation) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الاستشارة والبيانات مطلوبة',
        data: {} as Consultation,
        traceId: ''
      });
    }

    return this.http.put<ApiResponse<Consultation>>(`${this.consultationUrl}/${id}`, consultation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء تحديث الاستشارة',
        data: {} as Consultation,
        traceId: ''
      }))
    );
  }

  // // Investigation Operations
  // getEyeClinicInvestigations(
  //   page: number = 1,
  //   pageSize: number = 20,
  //   filter: string = ''
  // ): Observable<PagedResponse<Investigation>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortDesc', 'true');

  //   if (filter) {
  //     params = params.set('filter', filter);
  //   }

  //   return this.http.get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
  //     headers: this.getAuthHeaders(),
  //     params
  //   }).pipe(
  //     map(res => res.data),
  //     catchError(() => of({
  //       items: [],
  //       totalCount: 0,
  //       pageNumber: page,
  //       pageSize: pageSize,
  //       totalPages: 0
  //     }))
  //   );
  // }
// Investigation Operations



getEyeClinicInvestigations(
  page: number = 1,
  pageSize: number = 20,
  filter: string = ''
): Observable<PagedResponse<Investigation>> {
  let params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString())
    .set('sortDesc', 'true');

  if (filter) {
    params = params.set('filter', filter);
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
      return {
        ...data,
        items: (data?.items || []).filter(
          (i: Investigation) => i.doctor?.specializationID === 1 // 👈 ID تبع عيادة العيون
        )
      } as PagedResponse<Investigation>;
    }),
    catchError(() => of({
      items: [],
      totalCount: 0,
      pageNumber: page,
      pageSize: pageSize,
      totalPages: 0
    }))
  );
}



  addInvestigation(investigation: Investigation): Observable<ApiResponse<Investigation>> {
    if (!investigation) {
      return of({
        succeeded: false,
        status: 400,
        message: 'بيانات الفحص مطلوبة',
        data: {} as Investigation,
        traceId: ''
      });
    }

    return this.http.post<ApiResponse<Investigation>>(this.investigationUrl, investigation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء إضافة الفحص',
        data: {} as Investigation,
        traceId: ''
      }))
    );
  }

  updateInvestigation(id: number, investigation: Investigation): Observable<ApiResponse<Investigation>> {
    if (!id || !investigation) {
      return of({
        succeeded: false,
        status: 400,
        message: 'معرف الفحص والبيانات مطلوبة',
        data: {} as Investigation,
        traceId: ''
      });
    }

    return this.http.put<ApiResponse<Investigation>>(`${this.investigationUrl}/${id}`, investigation, {
      headers: this.getAuthHeaders().set('Content-Type', 'application/json')
    }).pipe(
      catchError(error => of({
        succeeded: false,
        status: error.status || 500,
        message: error.message || 'حدث خطأ أثناء تحديث الفحص',
        data: {} as Investigation,
        traceId: ''
      }))
    );
  }
}
