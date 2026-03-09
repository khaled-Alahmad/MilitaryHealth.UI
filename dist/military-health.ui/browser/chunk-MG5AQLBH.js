import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/services/internal-exam.service.ts
var InternalExamService = class _InternalExamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/api/InternalExams`;
  uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  addInternalExam(exam) {
    return this.http.post(this.apiUrl, exam, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  // ✅ Cache للنتائج لتجنب الطلبات المكررة
  resultsCache$;
  getResults() {
    if (!this.resultsCache$) {
      this.resultsCache$ = this.http.get(`${environment.apiUrl}/api/Results`, {
        headers: this.getAuthHeaders()
      }).pipe(
        shareReplay(1)
        // ✅ مشاركة النتيجة مع جميع المشتركين
      );
    }
    return this.resultsCache$;
  }
  // 🔹 جلب الفحوص الداخلية المؤجلة فقط
  getDeferredInternalExams() {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(this.apiUrl, { headers }).pipe(map((res) => {
      const items = res.data?.items || res;
      return items.filter((exam) => exam.result?.description === "\u0645\u0624\u062C\u0644");
    }));
  }
  // جلب كل الفحوصات الداخلية مع pagination + filter
  getAllInternalExams(page = 1, pageSize = 20, filter = "") {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", true).set("sortBy", "internalExamID");
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((res) => res.data));
  }
  // تحديث فحص داخلي موجود
  updateInternalExam(id, exam) {
    return this.http.put(`${this.apiUrl}/${id}`, exam, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  // جلب كل التحاليل للعيادة الداخلية مع pagination + filter
  getAllInternalInvestigations(page = 1, pageSize = 10, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", "true").set("sortBy", "investigationID");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.investigationUrl, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(map((res) => res.data ?? {
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    }));
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
  getOrthopedicConsultations(page = 1, pageSize = 50, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", false);
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.consultationUrl, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(map((res) => res.data ?? {
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    }));
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
  getInternalInvestigations(page = 1, pageSize = 50, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "investigationID").set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.investigationUrl, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(map((res) => {
      const data = res.data ?? {
        items: [],
        totalCount: 0,
        page,
        pageSize,
        totalPages: 0
      };
      if (data.items && data.items.length > 0) {
        data.items = data.items.sort((a, b) => {
          const idA = a.investigationID || 0;
          const idB = b.investigationID || 0;
          return idB - idA;
        });
      }
      return data;
    }));
  }
  getOrthopedicInvestigations(page = 1, pageSize = 50, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", false);
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.investigationUrl, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(map((res) => res.data ?? {
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    }));
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
  getInternalConsultations(page = 1, pageSize = 10, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", true).set("sortBy", "consultationID");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => res.data ?? {
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    }), catchError(() => of({
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    })));
  }
  getByFileNumber(fileNumber) {
    if (!fileNumber) {
      return of(null);
    }
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", "1").set("pageSize", "10").set("sortDesc", "false").set("filter", fileNumber);
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => {
      const items = res.data?.items || [];
      const exam = items.find((e) => e.applicantFileNumber === fileNumber);
      return exam || null;
    }), catchError(() => of(null)));
  }
  static \u0275fac = function InternalExamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalExamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InternalExamService, factory: _InternalExamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalExamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  InternalExamService
};
//# sourceMappingURL=chunk-MG5AQLBH.js.map
