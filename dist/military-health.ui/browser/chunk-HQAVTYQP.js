import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-7EG6WMAP.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/reception/services/applicant.service.ts
var ApplicantService = class _ApplicantService {
  http;
  apiUrl = `${environment.apiUrl}/api/Applicants`;
  constructor(http) {
    this.http = http;
  }
  createApplicant(applicant) {
    return this.http.post(this.apiUrl, applicant);
  }
  updateApplicant(id, applicant) {
    return this.http.put(`${this.apiUrl}/${id}`, applicant);
  }
  getApplicantById$(id) {
    return this.http.get(`${this.apiUrl}/get/${id}`).pipe(map((response) => response.data));
  }
  getApplicantByFileNumber$(fileNumber) {
    const url = this.apiUrl + "/Details";
    return this.http.get(`${url}/${fileNumber}`).pipe(map((response) => response.data));
  }
  getApplicants$(page = 1, pageSize = 10, filter = "") {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortBy", "createdAt").set("sortDesc", true);
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((response) => response.data));
  }
  getStatistics() {
    const url = this.apiUrl + "/GetApplicantsStatistics";
    return this.http.get(url);
  }
  static \u0275fac = function ApplicantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicantService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicantService, factory: _ApplicantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApplicantService
};
//# sourceMappingURL=chunk-HQAVTYQP.js.map
