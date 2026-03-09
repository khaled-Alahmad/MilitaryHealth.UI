import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/services/orthopedic-exam.service.ts
var OrthopedicExamService = class _OrthopedicExamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/api/OrthopedicExams`;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  addOrthopedicExam(exam) {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    return this.http.post(this.apiUrl, exam, { headers });
  }
  getResults() {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${environment.apiUrl}/api/Results`, { headers });
  }
  updateOrthopedicExam(id, exam) {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
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
  getAllOrthopedicExams(page = 1, pageSize = 10, filter = "") {
    const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "orthopedicExamID").set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((res) => {
      const data = res.data ?? {
        items: [],
        totalCount: 0,
        page,
        pageSize,
        totalPages: 0
      };
      if (data.items && data.items.length > 0) {
        data.items = data.items.sort((a, b) => {
          const idA = a.orthopedicExamID || 0;
          const idB = b.orthopedicExamID || 0;
          return idB - idA;
        });
      }
      return data;
    }));
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token") || "";
    return { Authorization: `Bearer ${token}` };
  }
  // 🔹 إضافة استشارة جديدة
  addConsultation(consultation) {
    return this.http.post(this.consultationUrl, consultation, {
      headers: __spreadProps(__spreadValues({}, this.getAuthHeaders()), { "Content-Type": "application/json" })
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
  getOrthopedicConsultations(page = 1, pageSize = 50, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "consultationID").set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.consultationUrl, {
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
          const idA = a.consultationID || 0;
          const idB = b.consultationID || 0;
          return idB - idA;
        });
      }
      return data;
    }));
  }
  // 🔹 إضافة طلب تحليل
  addInvestigation(investigation) {
    return this.http.post(this.investigationUrl, investigation, {
      headers: __spreadProps(__spreadValues({}, this.getAuthHeaders()), { "Content-Type": "application/json" })
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
  getOrthopedicInvestigations(page = 1, pageSize = 50, filter = "") {
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
  getByFileNumber(fileNumber) {
    const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((res) => {
      const items = res.data?.items || [];
      const currentSpecializationId = this.authService.getSpecializationId();
      const exam = items.find((e) => e.applicantFileNumber === fileNumber && e.doctor?.specializationID === currentSpecializationId);
      return exam || null;
    }));
  }
  static \u0275fac = function OrthopedicExamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrthopedicExamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrthopedicExamService, factory: _OrthopedicExamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrthopedicExamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  OrthopedicExamService
};
//# sourceMappingURL=chunk-R2N3C4MN.js.map
