import {
  DatePipe
} from "./chunk-V2S2U4KH.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-YTJKKLZA.js";

// src/app/shared/pipes/gregorian-date.pipe.ts
var GregorianDatePipe = class _GregorianDatePipe {
  datePipe;
  constructor() {
    this.datePipe = new DatePipe("en-US");
  }
  transform(value, format = "yyyy/MM/dd") {
    if (!value) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    try {
      const date = typeof value === "string" ? new Date(value) : value;
      if (isNaN(date.getTime())) {
        return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
      }
      return this.datePipe.transform(date, format) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    } catch {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
  }
  static \u0275fac = function GregorianDatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GregorianDatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "gregorianDate", type: _GregorianDatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GregorianDatePipe, [{
    type: Pipe,
    args: [{
      name: "gregorianDate",
      standalone: true
    }]
  }], () => [], null);
})();

export {
  GregorianDatePipe
};
//# sourceMappingURL=chunk-M5RFJNTA.js.map
