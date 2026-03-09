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

// src/app/shared/services/lookup.service.ts
var LookupService = class _LookupService {
  http;
  apiUrl = `${environment.apiUrl}/api/Results`;
  constructor(http) {
    this.http = http;
  }
  getResults() {
    return this.http.get(`${this.apiUrl}?sortDesc=false&page=1&pageSize=20`).pipe(map((response) => response.data.items));
  }
  static \u0275fac = function LookupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LookupService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LookupService, factory: _LookupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  LookupService
};
//# sourceMappingURL=chunk-BJUGQXZ4.js.map
