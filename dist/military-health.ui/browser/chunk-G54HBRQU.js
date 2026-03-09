import {
  ApplicantService
} from "./chunk-LBNMWMAA.js";
import {
  CommonModule
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YTJKKLZA.js";

// src/app/features/admin/dashboard/dashboard.ts
function Dashboard_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275domElement(5, "i", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 6)(7, "div", 7);
    \u0275\u0275text(8, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 8);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(11, "div", 2)(12, "div", 3)(13, "div", 9);
    \u0275\u0275domElement(14, "i", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "div", 6)(16, "div", 7);
    \u0275\u0275text(17, "\u0627\u0644\u0645\u0642\u0628\u0648\u0644\u064A\u0646");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "div", 11);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(20, "div", 2)(21, "div", 3)(22, "div", 12);
    \u0275\u0275domElement(23, "i", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "div", 6)(25, "div", 7);
    \u0275\u0275text(26, "\u0627\u0644\u0645\u0631\u0641\u0648\u0636\u064A\u0646");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "div", 14);
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(29, "div", 2)(30, "div", 3)(31, "div", 15);
    \u0275\u0275domElement(32, "i", 16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "div", 6)(34, "div", 7);
    \u0275\u0275text(35, "\u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "div", 17);
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.total);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.accepted);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.rejected);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.pending);
  }
}
var Dashboard = class _Dashboard {
  applicantService;
  total = 0;
  accepted = 0;
  rejected = 0;
  pending = 0;
  loading = true;
  constructor(applicantService) {
    this.applicantService = applicantService;
  }
  ngOnInit() {
    this.loadStatistics();
  }
  loadStatistics() {
    this.applicantService.getStatistics().subscribe({
      next: (res) => {
        if (res.succeeded) {
          this.total = res.data.total;
          this.accepted = res.data.accepted;
          this.rejected = res.data.rejected;
          this.pending = res.data.pending;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching statistics", err);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(ApplicantService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 1, vars: 1, consts: [[1, "container", "mt-4", "admin-dashboard"], [1, "row", "g-3"], [1, "col-lg-3", "col-md-6"], [1, "stat-card"], [1, "icon-wrap", "total"], [1, "fas", "fa-users"], [1, "stat-content"], [1, "label"], [1, "value", "text-primary"], [1, "icon-wrap", "accepted"], [1, "fas", "fa-check-circle"], [1, "value", "text-success"], [1, "icon-wrap", "rejected"], [1, "fas", "fa-times-circle"], [1, "value", "text-danger"], [1, "icon-wrap", "pending"], [1, "fas", "fa-hourglass-half"], [1, "value", "text-warning"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Dashboard_Conditional_0_Template, 38, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.admin-dashboard[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 6px 14px rgba(2, 6, 23, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(2, 6, 23, 0.08);\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  color: #0f172a;\n  font-size: 20px;\n}\n.icon-wrap.total[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.icon-wrap.accepted[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #16a34a;\n}\n.icon-wrap.rejected[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.icon-wrap.pending[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.stat-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #475569;\n  font-weight: 600;\n}\n.stat-content[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [CommonModule], template: '@if(!loading){\r\n<div class="container mt-4 admin-dashboard">\r\n  <div class="row g-3">\r\n    <div class="col-lg-3 col-md-6">\r\n      <div class="stat-card">\r\n        <div class="icon-wrap total"><i class="fas fa-users"></i></div>\r\n        <div class="stat-content">\r\n          <div class="label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646</div>\r\n          <div class="value text-primary">{{ total }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-lg-3 col-md-6">\r\n      <div class="stat-card">\r\n        <div class="icon-wrap accepted"><i class="fas fa-check-circle"></i></div>\r\n        <div class="stat-content">\r\n          <div class="label">\u0627\u0644\u0645\u0642\u0628\u0648\u0644\u064A\u0646</div>\r\n          <div class="value text-success">{{ accepted }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-lg-3 col-md-6">\r\n      <div class="stat-card">\r\n        <div class="icon-wrap rejected"><i class="fas fa-times-circle"></i></div>\r\n        <div class="stat-content">\r\n          <div class="label">\u0627\u0644\u0645\u0631\u0641\u0648\u0636\u064A\u0646</div>\r\n          <div class="value text-danger">{{ rejected }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-lg-3 col-md-6">\r\n      <div class="stat-card">\r\n        <div class="icon-wrap pending"><i class="fas fa-hourglass-half"></i></div>\r\n        <div class="stat-content">\r\n          <div class="label">\u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631</div>\r\n          <div class="value text-warning">{{ pending }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n}', styles: ["/* src/app/features/admin/dashboard/dashboard.scss */\n.admin-dashboard {\n  direction: rtl;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 6px 14px rgba(2, 6, 23, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(2, 6, 23, 0.08);\n}\n.icon-wrap {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  color: #0f172a;\n  font-size: 20px;\n}\n.icon-wrap.total {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.icon-wrap.accepted {\n  background: #ecfdf5;\n  color: #16a34a;\n}\n.icon-wrap.rejected {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.icon-wrap.pending {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.stat-content .label {\n  color: #475569;\n  font-weight: 600;\n}\n.stat-content .value {\n  font-size: 28px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], () => [{ type: ApplicantService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/admin/dashboard/dashboard.ts", lineNumber: 11 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-G54HBRQU.js.map
