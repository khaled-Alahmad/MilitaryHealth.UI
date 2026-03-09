import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/doctor-not-found-component/doctor-not-found-component.ts
var DoctorNotFoundComponent = class _DoctorNotFoundComponent {
  static \u0275fac = function DoctorNotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoctorNotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoctorNotFoundComponent, selectors: [["app-doctor-not-found-component"]], decls: 5, vars: 0, consts: [[1, "not-found-container"]], template: function DoctorNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, " \u062E\u0637\u0623:\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D \u26A0\uFE0F");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u062D\u062F \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0644\u0644\u0637\u0628\u064A\u0628.");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 100px;\n}\nh1[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n/*# sourceMappingURL=doctor-not-found-component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorNotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-doctor-not-found-component", standalone: true, imports: [], template: ' <div class="not-found-container">\r\n      <h1> \u062E\u0637\u0623:\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D  \u26A0\uFE0F</h1>\r\n      <p>\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u062D\u062F \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0644\u0644\u0637\u0628\u064A\u0628.</p>\r\n </div>', styles: ["/* src/app/features/doctor/components/doctor-not-found-component/doctor-not-found-component.scss */\n.not-found-container {\n  text-align: center;\n  margin-top: 100px;\n}\nh1 {\n  color: #d9534f;\n}\n/*# sourceMappingURL=doctor-not-found-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoctorNotFoundComponent, { className: "DoctorNotFoundComponent", filePath: "src/app/features/doctor/components/doctor-not-found-component/doctor-not-found-component.ts", lineNumber: 10 });
})();
export {
  DoctorNotFoundComponent
};
//# sourceMappingURL=chunk-V3W57QOB.js.map
