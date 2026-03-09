import {
  PaginatorComponent
} from "./chunk-MFLEARHA.js";
import {
  ResetFiltersButtonComponent
} from "./chunk-3GLFOEUA.js";
import {
  SortableColumn,
  Table,
  TableModule
} from "./chunk-W3EN3B3V.js";
import "./chunk-B37FJDU3.js";
import "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import "./chunk-SXOA2P4M.js";
import "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import "./chunk-JZZQ7XWY.js";
import "./chunk-2VRBHK6C.js";
import {
  GregorianDatePipe
} from "./chunk-M5RFJNTA.js";
import {
  Router
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Injectable,
  ViewChild,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/admin/services/final-decisions.service.ts
var FinalDecisionsService = class _FinalDecisionsService {
  http;
  apiUrl = `${environment.apiUrl}/api/FinalDecisions`;
  constructor(http) {
    this.http = http;
  }
  getFinalDecisions$(page = 1, pageSize = 10, filter = "", sortDesc = false) {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", sortDesc.toString());
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((response) => response));
  }
  static \u0275fac = function FinalDecisionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinalDecisionsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FinalDecisionsService, factory: _FinalDecisionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinalDecisionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/admin/final-applicant-list/final-applicant-list.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
function FinalApplicantList_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 16);
    \u0275\u0275text(10, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 17);
    \u0275\u0275text(16, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u0631\u0627\u0631");
    \u0275\u0275elementEnd()();
  }
}
function FinalApplicantList_ng_template_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0631\u0624\u064A\u0629: ", decision_r2.eyeExam.vision);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ", decision_r2.eyeExam.result == null ? null : decision_r2.eyeExam.result.description);
  }
}
function FinalApplicantList_ng_template_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0642\u0644\u0628: ", decision_r2.internalExam.heart);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ", decision_r2.internalExam.result == null ? null : decision_r2.internalExam.result.description);
  }
}
function FinalApplicantList_ng_template_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0639\u0638\u0627\u0645: ", decision_r2.orthopedicExam.musculoskeletal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ", decision_r2.orthopedicExam.result == null ? null : decision_r2.orthopedicExam.result.description);
  }
}
function FinalApplicantList_ng_template_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(decision_r2.result == null ? null : decision_r2.result.description);
  }
}
function FinalApplicantList_ng_template_12_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(decision_r2.result == null ? null : decision_r2.result.description);
  }
}
function FinalApplicantList_ng_template_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(decision_r2.result == null ? null : decision_r2.result.description);
  }
}
function FinalApplicantList_ng_template_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function FinalApplicantList_ng_template_12_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", decision_r2.postponeDuration, " ");
  }
}
function FinalApplicantList_ng_template_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function FinalApplicantList_ng_template_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const decision_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", decision_r2.reason, " ");
  }
}
function FinalApplicantList_ng_template_12_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function FinalApplicantList_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, FinalApplicantList_ng_template_12_Conditional_5_Template, 6, 2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, FinalApplicantList_ng_template_12_Conditional_7_Template, 6, 2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, FinalApplicantList_ng_template_12_Conditional_9_Template, 6, 2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275conditionalCreate(11, FinalApplicantList_ng_template_12_Conditional_11_Template, 2, 1, "span", 19)(12, FinalApplicantList_ng_template_12_Conditional_12_Template, 2, 1, "span", 20)(13, FinalApplicantList_ng_template_12_Conditional_13_Template, 2, 1, "span", 21)(14, FinalApplicantList_ng_template_12_Conditional_14_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275conditionalCreate(16, FinalApplicantList_ng_template_12_Conditional_16_Template, 1, 1)(17, FinalApplicantList_ng_template_12_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275conditionalCreate(19, FinalApplicantList_ng_template_12_Conditional_19_Template, 1, 1)(20, FinalApplicantList_ng_template_12_Conditional_20_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 18);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "gregorianDate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const decision_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(decision_r2.applicantFileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(decision_r2.eyeExam ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(decision_r2.internalExam ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(decision_r2.orthopedicExam ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((decision_r2.result == null ? null : decision_r2.result.description) === "\u0645\u0642\u0628\u0648\u0644" ? 11 : (decision_r2.result == null ? null : decision_r2.result.description) === "\u0645\u0631\u0641\u0648\u0636" ? 12 : (decision_r2.result == null ? null : decision_r2.result.description) === "\u0645\u0624\u062C\u0644" ? 13 : 14);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((decision_r2.result == null ? null : decision_r2.result.description) === "\u0645\u0624\u062C\u0644" ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((decision_r2.result == null ? null : decision_r2.result.description) === "\u0645\u0624\u062C\u0644" ? 19 : 20);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 8, decision_r2.decisionDate, "yyyy/MM/dd"));
  }
}
function FinalApplicantList_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23)(2, "div", 24);
    \u0275\u0275element(3, "i", 25);
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u0631\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()()()();
  }
}
var FinalApplicantList = class _FinalApplicantList {
  finalDecisionsService;
  cdr;
  router;
  decisions = [];
  loading = true;
  filteredFinalDecisions = [];
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  tableHeight = "300px";
  table;
  searchInput;
  constructor(finalDecisionsService, cdr, router) {
    this.finalDecisionsService = finalDecisionsService;
    this.cdr = cdr;
    this.router = router;
  }
  ngOnInit() {
    this.loadDecisions();
  }
  loadDecisions() {
    this.finalDecisionsService.getFinalDecisions$(this.page, this.rowsPerPage, this.globalFilter).subscribe({
      next: (res) => {
        this.decisions = res.data.items;
        this.filteredFinalDecisions = this.decisions;
        this.totalRecords = res.data.totalCount;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching final decisions", err);
        this.loading = false;
      }
    });
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadDecisions();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadDecisions();
  }
  onFilterChange(event) {
    const value = event.target.value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadDecisions();
  }
  ngAfterViewInit() {
    this.tableHeight = this.calculateTableHeight();
    this.cdr.detectChanges();
  }
  calculateTableHeight() {
    return window.innerHeight - 200 + "px";
  }
  onResize() {
    this.setTableHeight();
  }
  setTableHeight() {
    const screenHeight = window.innerHeight;
    const reservedSpace = 220;
    this.tableHeight = screenHeight - reservedSpace + "px";
  }
  resetFilters() {
    this.globalFilter = "";
    this.page = 1;
    if (this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadDecisions();
  }
  static \u0275fac = function FinalApplicantList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinalApplicantList)(\u0275\u0275directiveInject(FinalDecisionsService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinalApplicantList, selectors: [["app-final-applicant-list"]], viewQuery: function FinalApplicantList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, hostBindings: function FinalApplicantList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function FinalApplicantList_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 15, vars: 10, consts: [["searchInput", ""], ["table", ""], [1, "user-header-section", "px-1", "pt-1", "container-fluid"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641", 1, "form-control", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "container-fluid"], ["responsiveLayout", "scroll", 1, "custom-table", 3, "value", "rows", "sortMode", "scrollable", "scrollHeight", "loading", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], ["pSortableColumn", "applicantFileNumber"], ["pSortableColumn", "result.description"], ["pSortableColumn", "decisionDate"], [1, "fw-bold"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "badge", "bg-warning"], [1, "text-muted"], ["colspan", "8", 1, "text-center", "py-4"], [1, "d-flex", "flex-column", "align-items-center"], [1, "pi", "pi-inbox", "text-muted", "mb-2", 2, "font-size", "2rem"]], template: function FinalApplicantList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "app-reset-filters-button", 5);
      \u0275\u0275listener("reset", function FinalApplicantList_Template_app_reset_filters_button_reset_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "input", 7, 0);
      \u0275\u0275listener("input", function FinalApplicantList_Template_input_input_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 9)(9, "p-table", 10, 1);
      \u0275\u0275template(11, FinalApplicantList_ng_template_11_Template, 17, 0, "ng-template", 11)(12, FinalApplicantList_ng_template_12_Template, 25, 11, "ng-template", 12)(13, FinalApplicantList_ng_template_13_Template, 6, 0, "ng-template", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-paginator", 14);
      \u0275\u0275listener("pageChange", function FinalApplicantList_Template_app_paginator_pageChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function FinalApplicantList_Template_app_paginator_pageSizeChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.decisions)("rows", 10)("sortMode", "multiple")("scrollable", true)("scrollHeight", ctx.tableHeight)("loading", ctx.loading)("showCurrentPageReport", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [PaginatorComponent, TableModule, Table, PrimeTemplate, SortableColumn, CommonModule, ResetFiltersButtonComponent, GregorianDatePipe], styles: ['@charset "UTF-8";\n\n\n\n.user-header-section[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-xs);\n}\n.user-header-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 600;\n}\n.user-header-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: var(--spacing-sm) var(--spacing-md);\n}\n.user-header-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border: none;\n}\n  .p-datatable {\n  width: 100%;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  font-family: var(--font-family-primary);\n}\n  .p-datatable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable-table-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable-scrollable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: var(--primary-dark);\n  color: white;\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  padding: var(--spacing-md) var(--spacing-lg);\n  text-align: center;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n  .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: var(--radius-lg);\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-top-left-radius: var(--radius-lg);\n}\n  .p-datatable .p-datatable-thead > tr > th .p-sortable-column-icon {\n  color: white;\n  margin-right: var(--spacing-xs);\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: white;\n  transition: all var(--transition-fast);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n  .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: var(--neutral-light);\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.05);\n}\n  .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-xs);\n  font-weight: 400;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: center;\n  line-height: 1.5;\n  color: var(--neutral-dark);\n}\n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n  .p-datatable .p-datatable-tbody > tr > td small {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--neutral-medium);\n  line-height: 1.5;\n  margin-top: var(--spacing-xs);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border-radius: var(--radius-full);\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: var(--primary-dark);\n  color: white;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: var(--status-danger);\n  color: white;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: var(--accent-gold);\n  color: var(--neutral-dark);\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child, \n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n  margin-left: auto;\n}\n.search-input[_ngcontent-%COMP%], \n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-sm) var(--spacing-md);\n  padding-right: 2.25rem;\n  font-size: var(--font-size-sm);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  background-color: var(--neutral-light);\n  color: var(--neutral-dark);\n  transition: border-color var(--transition-fast);\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus, \n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n  .p-datatable {\n  direction: rtl;\n}\n  .p-datatable .p-datatable-thead > tr > th, \n  .p-datatable .p-datatable-tbody > tr > td {\n  text-align: center;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  border-radius: 6px;\n  padding: 0.5rem 0.875rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  min-width: auto;\n  border: 1px solid;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn i, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn .pi, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button i, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button .pi {\n  font-size: 0.875rem;\n  margin: 0;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-sm {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm i, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm .pi, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-sm i, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-sm .pi {\n  font-size: 0.8125rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-outlined {\n  border-color: #3D3A3B;\n  color: #3D3A3B;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:hover:not(:disabled), \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:hover:not(:disabled) {\n  background-color: #3D3A3B;\n  color: white;\n  border-color: #3D3A3B;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:active:not(:disabled), \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:disabled, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-primary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  border: none;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-primary:hover:not(:disabled), \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(5, 66, 57, 0.3);\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-primary:active:not(:disabled), \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .p-button-primary:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 3px rgba(5, 66, 57, 0.2);\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-icon-only {\n  padding: 0.5rem;\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-icon-only i, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-icon-only .pi {\n  margin: 0;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-group {\n  display: inline-flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n/*# sourceMappingURL=final-applicant-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinalApplicantList, [{
    type: Component,
    args: [{ selector: "app-final-applicant-list", imports: [PaginatorComponent, TableModule, CommonModule, GregorianDatePipe, ResetFiltersButtonComponent], template: `<div class="user-header-section px-1 pt-1 container-fluid">\r
  <div class="table-toolbar">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
      <div class="search-wrapper">\r
        <input #searchInput type="text" class="form-control" placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641" (input)="onFilterChange($event)" />\r
        <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="container-fluid">\r
  <p-table \r
    #table \r
    [value]="decisions" \r
    [rows]="10" \r
    [sortMode]="'multiple'" \r
    [scrollable]="true"\r
    [scrollHeight]="tableHeight"\r
    [loading]="loading"\r
    [showCurrentPageReport]="true"\r
    responsiveLayout="scroll"\r
    class="custom-table">\r
\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th pSortableColumn="applicantFileNumber">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th>\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646</th>\r
        <th>\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A</th>\r
        <th>\u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645</th>\r
        <th pSortableColumn="result.description">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th>\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644</th>\r
        <th>\u0627\u0644\u0633\u0628\u0628</th>\r
        <th pSortableColumn="decisionDate">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u0631\u0627\u0631</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="body" let-decision>\r
      <tr>\r
        <td><span class="fw-bold">{{ decision.applicantFileNumber }}</span></td>\r
\r
        <td>\r
          @if (decision.eyeExam) {\r
            <div>\r
              <small>\u0627\u0644\u0631\u0624\u064A\u0629: {{ decision.eyeExam.vision }}</small><br>\r
              <small>\u0627\u0644\u0646\u062A\u064A\u062C\u0629: {{ decision.eyeExam.result?.description }}</small>\r
            </div>\r
          }\r
        </td>\r
\r
        <td>\r
          @if (decision.internalExam) {\r
            <div>\r
              <small>\u0627\u0644\u0642\u0644\u0628: {{ decision.internalExam.heart }}</small><br>\r
              <small>\u0627\u0644\u0646\u062A\u064A\u062C\u0629: {{ decision.internalExam.result?.description }}</small>\r
            </div>\r
          }\r
        </td>\r
\r
        <td>\r
          @if (decision.orthopedicExam) {\r
            <div>\r
              <small>\u0627\u0644\u0639\u0638\u0627\u0645: {{ decision.orthopedicExam.musculoskeletal }}</small><br>\r
              <small>\u0627\u0644\u0646\u062A\u064A\u062C\u0629: {{ decision.orthopedicExam.result?.description }}</small>\r
            </div>\r
          }\r
        </td>\r
\r
        <td>\r
          @if (decision.result?.description === '\u0645\u0642\u0628\u0648\u0644') {\r
            <span class="badge bg-success">{{ decision.result?.description }}</span>\r
          }\r
          @else if (decision.result?.description === '\u0645\u0631\u0641\u0648\u0636') {\r
            <span class="badge bg-danger">{{ decision.result?.description }}</span>\r
          }\r
          @else if (decision.result?.description === '\u0645\u0624\u062C\u0644') {\r
            <span class="badge bg-warning">{{ decision.result?.description }}</span>\r
          }\r
          @else {\r
            <span class="text-muted">-</span>\r
          }\r
        </td>\r
\r
        <td>\r
          @if (decision.result?.description === '\u0645\u0624\u062C\u0644') {\r
            {{ decision.postponeDuration }}\r
          } @else {\r
            -\r
          }\r
        </td>\r
\r
        <td>\r
          @if (decision.result?.description === '\u0645\u0624\u062C\u0644') {\r
            {{ decision.reason }}\r
          } @else {\r
            -\r
          }\r
        </td>\r
\r
        <td>\r
          <span class="fw-bold">{{ decision.decisionDate | gregorianDate:'yyyy/MM/dd' }}</span>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="8" class="text-center py-4">\r
          <div class="d-flex flex-column align-items-center">\r
            <i class="pi pi-inbox text-muted mb-2" style="font-size: 2rem;"></i>\r
            <span class="text-muted">\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u0631\u0627\u0631\u0627\u062A</span>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <app-paginator \r
      [totalRecords]="totalRecords" \r
      [pageSize]="rowsPerPage" \r
      [currentPage]="page"\r
      (pageChange)="onPageChange($event)" \r
      (pageSizeChange)="onPageSizeChange($event)">\r
  </app-paginator>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/final-applicant-list/final-applicant-list.scss */\n.user-header-section .breadcrumb {\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-xs);\n}\n.user-header-section h2 {\n  font-size: var(--font-size-xl);\n  font-weight: 600;\n}\n.user-header-section .btn {\n  font-weight: 500;\n  padding: var(--spacing-sm) var(--spacing-md);\n}\n.user-header-section .btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border: none;\n}\n::ng-deep .p-datatable {\n  width: 100%;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  font-family: var(--font-family-primary);\n}\n::ng-deep .p-datatable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable-table-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable-scrollable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: var(--primary-dark);\n  color: white;\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  padding: var(--spacing-md) var(--spacing-lg);\n  text-align: center;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: var(--radius-lg);\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-top-left-radius: var(--radius-lg);\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th .p-sortable-column-icon {\n  color: white;\n  margin-right: var(--spacing-xs);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: white;\n  transition: all var(--transition-fast);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: var(--neutral-light);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.05);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-xs);\n  font-weight: 400;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: center;\n  line-height: 1.5;\n  color: var(--neutral-dark);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--neutral-medium);\n  line-height: 1.5;\n  margin-top: var(--spacing-xs);\n}\n.badge {\n  font-size: var(--font-size-xs);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border-radius: var(--radius-full);\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.bg-success {\n  background-color: var(--primary-dark);\n  color: white;\n}\n.bg-danger {\n  background-color: var(--status-danger);\n  color: white;\n}\n.bg-warning {\n  background-color: var(--accent-gold);\n  color: var(--neutral-dark);\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child,\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.search-wrapper {\n  position: relative;\n  width: 350px;\n  margin-left: auto;\n}\n.search-input,\n.form-control {\n  width: 100%;\n  padding: var(--spacing-sm) var(--spacing-md);\n  padding-right: 2.25rem;\n  font-size: var(--font-size-sm);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  background-color: var(--neutral-light);\n  color: var(--neutral-dark);\n  transition: border-color var(--transition-fast);\n  outline: none;\n}\n.search-input:focus,\n.form-control:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n::ng-deep .p-datatable {\n  direction: rtl;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th,\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  text-align: center;\n  vertical-align: middle;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  border-radius: 6px;\n  padding: 0.5rem 0.875rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  min-width: auto;\n  border: 1px solid;\n  cursor: pointer;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn i,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn .pi,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button i,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button .pi {\n  font-size: 0.875rem;\n  margin: 0;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-sm {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm i,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm .pi,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-sm i,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-sm .pi {\n  font-size: 0.8125rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-outlined {\n  border-color: #3D3A3B;\n  color: #3D3A3B;\n  background-color: transparent;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:hover:not(:disabled),\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:hover:not(:disabled) {\n  background-color: #3D3A3B;\n  color: white;\n  border-color: #3D3A3B;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:active:not(:disabled),\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:disabled,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-primary,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  border: none;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-primary:hover:not(:disabled),\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(5, 66, 57, 0.3);\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-primary:active:not(:disabled),\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .p-button-primary:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 3px rgba(5, 66, 57, 0.2);\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-icon-only {\n  padding: 0.5rem;\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-icon-only i,\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-icon-only .pi {\n  margin: 0;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-group {\n  display: inline-flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n/*# sourceMappingURL=final-applicant-list.css.map */\n'] }]
  }], () => [{ type: FinalDecisionsService }, { type: ChangeDetectorRef }, { type: Router }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinalApplicantList, { className: "FinalApplicantList", filePath: "src/app/features/admin/final-applicant-list/final-applicant-list.ts", lineNumber: 19 });
})();
export {
  FinalApplicantList
};
//# sourceMappingURL=chunk-MUDDV4XA.js.map
