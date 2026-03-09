import {
  EditConsultation
} from "./chunk-PMZT4EKX.js";
import {
  NgbModal
} from "./chunk-SHVRLNBL.js";
import {
  PageHeaderComponent
} from "./chunk-JQ4Y5HNR.js";
import {
  EyeExamService
} from "./chunk-T2JR7AGY.js";
import "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
import {
  FilterBarComponent
} from "./chunk-K763RHOS.js";
import {
  PaginatorComponent
} from "./chunk-MFLEARHA.js";
import "./chunk-3GLFOEUA.js";
import {
  Table,
  TableModule
} from "./chunk-W3EN3B3V.js";
import "./chunk-B37FJDU3.js";
import "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import "./chunk-SXOA2P4M.js";
import {
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import {
  FormsModule
} from "./chunk-JZZQ7XWY.js";
import "./chunk-2VRBHK6C.js";
import {
  Router
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  NgClass,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/doctor/components/eye-doctor.component/eye-consultations/eye-consultations.ts
var _c0 = ["table"];
var _c1 = () => ({ "min-width": "50rem" });
function EyeConsultations_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u064A\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 12);
    \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 12);
    \u0275\u0275text(6, "\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 11);
    \u0275\u0275text(8, "\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064A\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 13);
    \u0275\u0275text(10, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 14);
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 15);
    \u0275\u0275text(14, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function EyeConsultations_ng_template_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function EyeConsultations_ng_template_8_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openFile(c_r4.attachment));
    });
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2, " \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275elementEnd();
  }
}
function EyeConsultations_ng_template_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641");
    \u0275\u0275elementEnd();
  }
}
function EyeConsultations_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 18);
    \u0275\u0275conditionalCreate(17, EyeConsultations_ng_template_8_Conditional_17_Template, 3, 0, "button", 19)(18, EyeConsultations_ng_template_8_Conditional_18_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 18)(20, "button", 20);
    \u0275\u0275listener("click", function EyeConsultations_ng_template_8_Template_button_click_20_listener() {
      const c_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditConsultation(c_r4));
    });
    \u0275\u0275element(21, "i", 21);
    \u0275\u0275text(22, " \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.applicantFileNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.consultationType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.referralReason || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r4.doctor == null ? null : c_r4.doctor.fullName) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r4.getBadgeClass(c_r4.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.result || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.attachment ? 17 : 18);
  }
}
function EyeConsultations_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
var EyeConsultations = class _EyeConsultations {
  service;
  toastr;
  cdr;
  router;
  modalService;
  consultations = [];
  filteredConsultations = [];
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = "360px";
  table;
  // selectedConsultation: Consultation | null = null;
  // searchText: string = '';
  // environment = environment;  
  constructor(service, toastr, cdr, router, modalService) {
    this.service = service;
    this.toastr = toastr;
    this.cdr = cdr;
    this.router = router;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadConsultations();
  }
  getBadgeClass(result) {
    switch (result) {
      case "\u0645\u0643\u062A\u0645\u0644":
        return "badge bg-success";
      case "\u0645\u0624\u062C\u0644":
        return "badge bg-warning";
      case "\u0645\u0631\u0641\u0648\u0636":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.service.getEyeClinicConsultations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.consultations = res.items;
        this.filteredConsultations = res.items;
        console.log(res);
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u274C \u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  openFile(attachment) {
    if (!attachment) {
      this.toastr.warning("\u26A0\uFE0F \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641 \u0645\u0631\u0641\u0642", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, "_blank");
  }
  onLazyLoad(event) {
    this.page = Math.floor(event.first / event.rows) + 1;
    this.rowsPerPage = event.rows;
    this.loadConsultations();
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadConsultations();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadConsultations();
  }
  onFilterChange(value) {
    this.globalFilter = (value || "").toLowerCase().trim();
    this.page = 1;
    this.loadConsultations();
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
  openEditConsultation(consultation) {
    const modalRef = this.modalService.open(EditConsultation, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.consultation = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe(() => {
      this.loadConsultations();
    });
  }
  resetFilters() {
    this.globalFilter = "";
    this.page = 1;
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadConsultations();
  }
  static \u0275fac = function EyeConsultations_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeConsultations)(\u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeConsultations, selectors: [["app-eye-consultations"]], viewQuery: function EyeConsultations_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, hostBindings: function EyeConsultations_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function EyeConsultations_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 11, vars: 11, consts: [["table", ""], [1, "user-header-section", "px-1", "pt-1", "container-fluid"], ["variant", "banner", "title", "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0646\u064A\u0629", "subtitle", "\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627", "icon", "pi pi-comments"], [1, "table-toolbar"], [1, "table-toolbar__filter"], ["searchPlaceholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "eye-filter-bar", 3, "searchChange", "reset", "searchValue", "showReset", "loading", "showSearchHint"], [1, "custom-table", "compact-table", 3, "value", "loading", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [2, "width", "120px"], [2, "width", "130px"], [2, "width", "100px"], [2, "width", "90px"], [2, "width", "80px"], [1, "fw-bold", "small"], [1, "small", 3, "ngClass"], [1, "text-center"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", "title", "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "pi", "pi-pen-to-square"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], ["colspan", "7", 1, "text-center", "py-2", "small"]], template: function EyeConsultations_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-page-header", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "app-filter-bar", 5);
      \u0275\u0275listener("searchChange", function EyeConsultations_Template_app_filter_bar_searchChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      })("reset", function EyeConsultations_Template_app_filter_bar_reset_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "p-table", 6, 0);
      \u0275\u0275template(7, EyeConsultations_ng_template_7_Template, 15, 0, "ng-template", 7)(8, EyeConsultations_ng_template_8_Template, 23, 7, "ng-template", 8)(9, EyeConsultations_ng_template_9_Template, 3, 0, "ng-template", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-paginator", 10);
      \u0275\u0275listener("pageChange", function EyeConsultations_Template_app_paginator_pageChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function EyeConsultations_Template_app_paginator_pageSizeChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("searchValue", ctx.globalFilter)("showReset", true)("loading", ctx.loading)("showSearchHint", false);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.filteredConsultations)("loading", ctx.loading)("tableStyle", \u0275\u0275pureFunction0(10, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [CommonModule, NgClass, ButtonModule, PrimeTemplate, FormsModule, TableModule, Table, PaginatorComponent, FilterBarComponent, PageHeaderComponent], styles: ["\n\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  padding: 0.75rem;\n  border: 1px solid #e7edf3;\n  border-radius: var(--border-radius-md);\n  background:\n    linear-gradient(\n      135deg,\n      #f9fbff 0%,\n      #f2f7ff 100%);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.table-toolbar__filter[_ngcontent-%COMP%] {\n  margin-top: 0;\n  width: min(100%, 560px) !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  flex: 0 0 auto;\n}\n.table-toolbar__filter[_ngcontent-%COMP%]   .eye-filter-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .table-toolbar[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .table-toolbar__filter[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0 !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.user-header-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n}\n.custom-table[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=eye-consultations.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeConsultations, [{
    type: Component,
    args: [{ selector: "app-eye-consultations", standalone: true, imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent], template: `<div class="user-header-section px-1 pt-1 container-fluid">\r
  <app-page-header\r
    variant="banner"\r
    title="\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0646\u064A\u0629"\r
    subtitle="\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627"\r
    icon="pi pi-comments">\r
  </app-page-header>\r
\r
  <!-- \u0627\u0644\u0628\u062D\u062B -->\r
  <div class="table-toolbar">\r
    <div class="table-toolbar__filter">\r
    <app-filter-bar\r
      class="eye-filter-bar"\r
      [searchValue]="globalFilter"\r
      searchPlaceholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645"\r
      [showReset]="true"\r
      [loading]="loading"\r
      [showSearchHint]="false"\r
      (searchChange)="onFilterChange($event)"\r
      (reset)="resetFilters()">\r
    </app-filter-bar>\r
    </div>\r
  </div>\r
\r
  <!-- \u062C\u062F\u0648\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C -->\r
  <p-table\r
    #table\r
    [value]="filteredConsultations"\r
    [loading]="loading"\r
    class="custom-table compact-table"\r
    [tableStyle]="{ 'min-width': '50rem' }"\r
  >\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th style="width: 120px">\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u064A\u0636</th>\r
        <th style="width: 130px">\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629</th>\r
        <th style="width: 130px">\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629</th>\r
        <th style="width: 120px">\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064A\u0628</th>\r
        <th style="width: 100px">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th style="width: 90px">\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642</th>\r
        <th style="width: 80px">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="body" let-c>\r
      <tr>\r
        <td>\r
          <span class="fw-bold small">{{ c.applicantFileNumber }}</span>\r
        </td>\r
        <td>\r
          <span class="fw-bold small">{{ c.consultationType }}</span>\r
        </td>\r
        <td>\r
          <span class="fw-bold small">{{ c.referralReason || '-' }}</span>\r
        </td>\r
        <td>\r
          <span class="fw-bold small">{{ c.doctor?.fullName || '-' }}</span>\r
        </td>\r
        <td>\r
          <span [ngClass]="getBadgeClass(c.result)" class="small">\r
            {{ c.result || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
          </span>\r
        </td>\r
<td class="text-center">\r
          @if(c.attachment){\r
            <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"\r
                (click)="openFile(c.attachment)">\r
                <i class="bi bi-file-earmark-text me-1"></i>\r
                \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641\r
            </button>\r
            }\r
            @else {\r
            <span>\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641</span>\r
            }\r
        </td>\r
\r
        <td class="text-center">\r
          <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629"\r
          (click)="openEditConsultation(c)">\r
          <i class="pi pi-pen-to-square"></i>\r
          \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629\r
      </button>\r
          <!-- <i class="pi pi-pen-to-square icon"\r
           (click)="openEditConsultation(c)" title="\u062A\u0639\u062F\u064A\u0644"></i> -->\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="7" class="text-center py-2 small">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <!-- Paginator -->\r
  <app-paginator\r
    [totalRecords]="totalRecords"\r
    [pageSize]="rowsPerPage"\r
    [currentPage]="page"\r
    (pageChange)="onPageChange($event)"\r
    (pageSizeChange)="onPageSizeChange($event)"\r
  >\r
  </app-paginator>\r
</div>\r
`, styles: ["/* src/app/features/doctor/components/eye-doctor.component/eye-consultations/eye-consultations.scss */\n.table-toolbar {\n  margin-bottom: var(--spacing-md);\n  padding: 0.75rem;\n  border: 1px solid #e7edf3;\n  border-radius: var(--border-radius-md);\n  background:\n    linear-gradient(\n      135deg,\n      #f9fbff 0%,\n      #f2f7ff 100%);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.table-toolbar__filter {\n  margin-top: 0;\n  width: min(100%, 560px) !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  flex: 0 0 auto;\n}\n.table-toolbar__filter .eye-filter-bar {\n  display: block;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .table-toolbar {\n    padding: 0.65rem;\n  }\n  .table-toolbar__filter {\n    width: 100%;\n    margin-left: 0 !important;\n  }\n}\n:host {\n  display: block;\n}\n.user-header-section {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n}\n.custom-table {\n  direction: rtl;\n}\n.btn.btn-sm {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=eye-consultations.css.map */\n"] }]
  }], () => [{ type: EyeExamService }, { type: ToastrService }, { type: ChangeDetectorRef }, { type: Router }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeConsultations, { className: "EyeConsultations", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-consultations/eye-consultations.ts", lineNumber: 26 });
})();
export {
  EyeConsultations
};
//# sourceMappingURL=chunk-Q4MCHOKS.js.map
