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
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/services/ear-clinic-exam.service.ts
var EarClinicExamService = class _EarClinicExamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/api/EarClinicExams`;
  uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("access_token") || "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  getFileUrl(path) {
    if (!path)
      return "";
    return `${environment.apiUrl}/${path}`;
  }
  addEarClinicExam(exam) {
    return this.http.post(this.apiUrl, exam, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  updateEarClinicExam(id, exam) {
    return this.http.put(`${this.apiUrl}/${id}`, exam, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  updateConsultation(id, consultation) {
    return this.http.put(`${this.consultationUrl}/${id}`, consultation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  updateInvestigation(id, investigation) {
    return this.http.put(`${this.investigationUrl}/${id}`, investigation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(this.uploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).pipe(map((res) => res.path));
  }
  getAllEarClinicExams() {
    return this.http.get(this.apiUrl, {
      headers: this.getAuthHeaders()
    }).pipe(map((res) => res.data || []), catchError(() => of([])));
  }
  // جلب جميع الفحوص الخاصة بالعيادة الأذنية
  getDeferredEarClinicExamsPaged(page = 1, pageSize = 10, filter = "") {
    const currentDoctorId = this.authService.getDoctorId();
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortDesc", "true").set("sortBy", "earClinicID");
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, {
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
      const allExams = (data?.items || []).filter((exam) => {
        return exam.doctorID === currentDoctorId;
      });
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedItems = allExams.slice(startIndex, endIndex);
      return {
        items: paginatedItems,
        totalCount: allExams.length,
        page,
        pageSize,
        totalPages: Math.ceil(allExams.length / pageSize)
      };
    }), catchError(() => of({
      items: [],
      totalCount: 0,
      page,
      pageSize,
      totalPages: 0
    })));
  }
  // جلب التحاليل الخاصة بالعيادة الأذنية فقط
  getAllEarClinicInvestigations(page = 1, pageSize = 10, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", "true").set("sortBy", "investigationID");
    if (filter) {
      params = params.set("filter", filter);
    }
    if (currentSpecializationId) {
      params = params.set("filterDict[doctor.specializationID]", currentSpecializationId.toString());
    }
    return this.http.get(this.investigationUrl, {
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
  // جلب الاستشارات الخاصة بالعيادة الأذنية فقط
  getEarClinicConsultations(page = 1, pageSize = 10, filter = "") {
    const currentSpecializationId = this.authService.getSpecializationId();
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", "true").set("sortBy", "consultationID");
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
    const url = `${this.apiUrl}?sortDesc=true&page=1&pageSize=1000`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((res) => {
      const items = res.data?.items || [];
      const currentSpecializationId = this.authService.getSpecializationId();
      const exam = items.find((e) => e.applicantFileNumber === fileNumber && e.doctor?.specializationID === currentSpecializationId);
      return exam || null;
    }), catchError(() => of(null)));
  }
  getResults() {
    const resultsUrl = `${environment.apiUrl}/api/Results`;
    return this.http.get(resultsUrl, {
      headers: this.getAuthHeaders()
    });
  }
  static \u0275fac = function EarClinicExamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EarClinicExamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EarClinicExamService, factory: _EarClinicExamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EarClinicExamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  EarClinicExamService
};
//# sourceMappingURL=chunk-JD6L6IQM.js.map
