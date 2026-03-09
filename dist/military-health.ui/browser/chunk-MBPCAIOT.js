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
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/services/surgical-exam.service.ts
var SurgicalExamService = class _SurgicalExamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/api/SurgicalExams`;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  // إضافة فحص جراحي جديد
  addSurgicalExam(exam) {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    return this.http.post(this.apiUrl, exam, { headers });
  }
  // جلب جميع الفحوصات
  getSurgicalExams() {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(this.apiUrl, { headers }).pipe(map((res) => res.data?.items || res));
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
  getAllSurgicalExams(page = 1, pageSize = 10, filter = "") {
    const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "surgicalExamID").set("sortDesc", "true");
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
          const idA = a.surgicalExamID || 0;
          const idB = b.surgicalExamID || 0;
          return idB - idA;
        });
      }
      return data;
    }));
  }
  // جلب نتائج الفحوص
  getResults() {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${environment.apiUrl}/api/Results`, { headers });
  }
  // تحديث فحص جراحي موجود
  updateSurgicalExam(id, exam) {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
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
  getSurgicalConsultations(page = 1, pageSize = 50, filter = "") {
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
  // ✅ تحاليل خاصة بالجراحة
  addInvestigation(investigation) {
    return this.http.post(this.investigationUrl, investigation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  getSurgicalInvestigations(page = 1, pageSize = 50, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "investigationID").set("sortDesc", "true");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
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
  getAuthHeaders() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  getByFileNumber(fileNumber) {
    const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((res) => {
      const items = res.data?.items || [];
      const exam = items.find((e) => e.applicantFileNumber?.toString() === fileNumber.toString() && e.doctor?.specializationID === 3);
      return exam || null;
    }));
  }
  static \u0275fac = function SurgicalExamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SurgicalExamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SurgicalExamService, factory: _SurgicalExamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurgicalExamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  SurgicalExamService
};
//# sourceMappingURL=chunk-MBPCAIOT.js.map
