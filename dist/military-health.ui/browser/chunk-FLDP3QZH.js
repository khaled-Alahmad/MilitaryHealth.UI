import {
  HttpClient,
  HttpHeaders,
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

// src/app/features/supervisor/services/recruitment-export.service.ts
var RecruitmentExportService = class _RecruitmentExportService {
  http;
  apiUrl = `${environment.apiUrl}/api/RecruitmentExport`;
  constructor(http) {
    this.http = http;
  }
  /**
   * الحصول على headers للمصادقة
   */
  getAuthHeaders() {
    const token = localStorage.getItem("access_token") || localStorage.getItem("token") || "";
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  /**
   * الحصول على قائمة الملفات المُصدَّرة سابقاً للتجنيد (لتحميلها مرة ثانية)
   */
  getExportedToRecruitment() {
    return this.http.get(`${this.apiUrl}/exported`, {
      headers: this.getAuthHeaders()
    }).pipe(map((response) => {
      let data = [];
      if (Array.isArray(response))
        data = response;
      else if (response && response.data && Array.isArray(response.data))
        data = response.data;
      else if (response && response.succeeded && Array.isArray(response.data))
        data = response.data;
      return data.map((item) => this.normalizeExportItem(item));
    }), catchError(() => of([])));
  }
  /**
   * الحصول على قائمة المنتسبين الجاهزين للتصدير
   */
  getPendingExports() {
    return this.http.get(`${this.apiUrl}/pending`, {
      headers: this.getAuthHeaders()
    }).pipe(map((response) => {
      let data = [];
      if (Array.isArray(response)) {
        data = response;
      } else if (response && response.data && Array.isArray(response.data)) {
        data = response.data;
      } else if (response && response.succeeded && Array.isArray(response.data)) {
        data = response.data;
      }
      return data.map((item) => this.normalizeExportItem(item));
    }), catchError(() => {
      return of([]);
    }));
  }
  /**
   * تطبيع عنصر التصدير وملء الحقول الناقصة (يدعم camelCase و PascalCase من الـ API)
   */
  normalizeExportItem(item) {
    const evaluationDate = item.supervisorEvaluationDate ?? item.SupervisorEvaluationDate ?? item.evaluationDate ?? item.finalDecision?.decisionDate ?? item.decisionDate ?? null;
    const str = (v) => v != null && v !== "" ? String(v) : null;
    return {
      sequenceNumber: item.sequenceNumber ?? item.SequenceNumber ?? 0,
      fileNumber: item.fileNumber ?? item.FileNumber ?? "",
      fullName: str(item.fullName ?? item.FullName) ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      motherName: str(item.motherName ?? item.MotherName) ?? void 0,
      maritalStatus: str(item.maritalStatus ?? item.MaritalStatus) ?? void 0,
      dateOfBirth: item.dateOfBirth ?? item.DateOfBirth ?? null,
      bloodType: str(item.bloodType ?? item.BloodType) ?? void 0,
      recruitmentCenter: str(item.recruitmentCenter ?? item.RecruitmentCenter) ?? void 0,
      result: str(item.result ?? item.Result) ?? void 0,
      supervisorEvaluationDate: evaluationDate,
      reason: str(item.reason ?? item.Reason) ?? void 0,
      decisionID: item.decisionID ?? item.decisionId ?? item.DecisionID ?? void 0,
      recommendations: item.recommendations ?? item.recommendation ?? void 0,
      exportedAt: item.exportedAt ?? item.ExportedAt ?? void 0
    };
  }
  /**
   * تصدير منتسبين محددين
   */
  exportToRecruitment(request) {
    return this.http.post(`${this.apiUrl}/export`, request, {
      headers: this.getAuthHeaders(),
      responseType: "blob"
    }).pipe(catchError((err) => {
      if (err.error instanceof Blob) {
        err.error.text().then(() => {
        });
      }
      throw err;
    }));
  }
  /**
   * تصدير جميع المنتسبين غير المُصدّرين
   */
  exportAll() {
    return this.http.post(`${this.apiUrl}/export-all`, {}, {
      headers: this.getAuthHeaders(),
      responseType: "blob"
    }).pipe(catchError((err) => {
      if (err.error instanceof Blob) {
        err.error.text().then(() => {
        });
      }
      throw err;
    }));
  }
  static \u0275fac = function RecruitmentExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruitmentExportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecruitmentExportService, factory: _RecruitmentExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruitmentExportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RecruitmentExportService
};
//# sourceMappingURL=chunk-FLDP3QZH.js.map
