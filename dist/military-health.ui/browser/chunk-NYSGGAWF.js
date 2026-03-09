import {
  HttpClient,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/features/reception/services/marital-status.service.ts
var MaritalStatusService = class _MaritalStatusService {
  http;
  apiUrl = `${environment.apiUrl}/api/MaritalStatuses`;
  constructor(http) {
    this.http = http;
  }
  getMaritalStatus() {
    return this.http.get(`${this.apiUrl}?sortDesc=false&page=1&pageSize=20`).pipe(
      map((response) => response.data.items)
      // الوصول مباشرة إلى data.items
    );
  }
  static \u0275fac = function MaritalStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaritalStatusService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaritalStatusService, factory: _MaritalStatusService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaritalStatusService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MaritalStatusService
};
//# sourceMappingURL=chunk-NYSGGAWF.js.map
