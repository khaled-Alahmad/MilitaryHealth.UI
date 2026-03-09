import {
  EditConsultation
} from "./chunk-KHTYNX3C.js";
import {
  NgbModal
} from "./chunk-ZUITLSD7.js";
import {
  InternalExamService
} from "./chunk-MG5AQLBH.js";
import "./chunk-T2JR7AGY.js";
import "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
import {
  PageHeaderComponent
} from "./chunk-JQ4Y5HNR.js";
import {
  PaginatorComponent
} from "./chunk-MFLEARHA.js";
import {
  ResetFiltersButtonComponent
} from "./chunk-3GLFOEUA.js";
import {
  Table,
  TableModule
} from "./chunk-H3VVC3HM.js";
import "./chunk-QKQWARGJ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import "./chunk-7K53XEFX.js";
import {
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import {
  FormsModule
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  NgClass,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  Component,
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
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/internal-doctor.component/internal-consultations-list/internal-consultations-list.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
var _c2 = () => ({ "min-width": "50rem" });
function InternalConsultationsList_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u064A\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 16);
    \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 16);
    \u0275\u0275text(6, "\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 15);
    \u0275\u0275text(8, "\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064A\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 17);
    \u0275\u0275text(10, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 18);
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 19);
    \u0275\u0275text(14, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function InternalConsultationsList_ng_template_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function InternalConsultationsList_ng_template_12_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openFile(c_r4.attachment));
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementEnd();
  }
}
function InternalConsultationsList_ng_template_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275elementEnd();
  }
}
function InternalConsultationsList_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 20)(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 20)(8, "span", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 20)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 20)(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 20);
    \u0275\u0275conditionalCreate(17, InternalConsultationsList_ng_template_12_Conditional_17_Template, 2, 0, "button", 23)(18, InternalConsultationsList_ng_template_12_Conditional_18_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 20)(20, "div", 25)(21, "button", 26);
    \u0275\u0275listener("click", function InternalConsultationsList_ng_template_12_Template_button_click_21_listener() {
      const c_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditConsultation(c_r4));
    });
    \u0275\u0275element(22, "i", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.applicantFileNumber || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.consultationType || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.referralReason || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r4.doctor == null ? null : c_r4.doctor.fullName) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r4.getBadgeClass(c_r4.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.result || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.attachment ? 17 : 18);
  }
}
function InternalConsultationsList_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
var InternalConsultationsList = class _InternalConsultationsList {
  service;
  toastr;
  modalService;
  consultations = [];
  filteredConsultations = [];
  globalFilter = "";
  loading = false;
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  table;
  searchInput;
  constructor(service, toastr, modalService) {
    this.service = service;
    this.toastr = toastr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadConsultations();
  }
  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.service.getInternalConsultations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.consultations = res.items;
        this.filteredConsultations = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u274C \u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
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
  onFilterChange(event) {
    const value = event.target.value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadConsultations();
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
    this.loadConsultations();
  }
  getBadgeClass(result) {
    if (!result)
      return "badge bg-secondary";
    if (result === "\u0645\u0642\u0628\u0648\u0644")
      return "badge bg-success";
    if (result === "\u0645\u0631\u0641\u0648\u0636")
      return "badge bg-danger";
    if (result === "\u0645\u0624\u062C\u0644")
      return "badge bg-warning text-dark";
    return "badge bg-secondary";
  }
  openFile(attachment) {
    if (!attachment) {
      this.toastr.warning("\u26A0\uFE0F \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641 \u0645\u0631\u0641\u0642", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, "_blank");
  }
  openEditConsultation(consultation) {
    const modalRef = this.modalService.open(EditConsultation, {
      size: "xl",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.consultation = consultation;
    modalRef.componentInstance.consultationUpdated.subscribe(() => {
      this.loadConsultations();
    });
  }
  static \u0275fac = function InternalConsultationsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalConsultationsList)(\u0275\u0275directiveInject(InternalExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalConsultationsList, selectors: [["app-internal-consultations-list"]], viewQuery: function InternalConsultationsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, decls: 15, vars: 9, consts: [["searchInput", ""], ["table", ""], [1, "user-header-section", "p-3", "container-fluid"], ["variant", "banner", "title", "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629", "subtitle", "\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627", "icon", "pi pi-comments"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "custom-table", "my-3", 3, "value", "loading", "rows", "totalRecords", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [1, "text-center", 2, "min-width", "120px"], [1, "text-center", 2, "min-width", "130px"], [1, "text-center", 2, "min-width", "100px"], [1, "text-center", 2, "min-width", "90px"], [1, "text-center", 2, "min-width", "80px"], [1, "text-center", "align-middle"], [1, "fw-bold", "small"], [1, "small", 3, "ngClass"], ["type", "button", "pTooltip", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", "tooltipPosition", "top", 1, "btn-icon-action"], [1, "text-muted", "small"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center", "gap-2"], ["type", "button", "pTooltip", "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-pen-to-square"], ["type", "button", "pTooltip", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-file"], ["colspan", "7", 1, "text-center", "py-3", "align-middle", "small"]], template: function InternalConsultationsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "app-page-header", 3);
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "app-reset-filters-button", 6);
      \u0275\u0275listener("reset", function InternalConsultationsList_Template_app_reset_filters_button_reset_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "input", 8, 0);
      \u0275\u0275listener("input", function InternalConsultationsList_Template_input_input_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p-table", 10, 1);
      \u0275\u0275template(11, InternalConsultationsList_ng_template_11_Template, 15, 0, "ng-template", 11)(12, InternalConsultationsList_ng_template_12_Template, 23, 7, "ng-template", 12)(13, InternalConsultationsList_ng_template_13_Template, 3, 0, "ng-template", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-paginator", 14);
      \u0275\u0275listener("pageChange", function InternalConsultationsList_Template_app_paginator_pageChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function InternalConsultationsList_Template_app_paginator_pageSizeChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.filteredConsultations)("loading", ctx.loading)("rows", ctx.rowsPerPage)("totalRecords", ctx.totalRecords)("tableStyle", \u0275\u0275pureFunction0(8, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    ButtonModule,
    PrimeTemplate,
    TableModule,
    Table,
    TooltipModule,
    Tooltip,
    PaginatorComponent,
    ResetFiltersButtonComponent,
    PageHeaderComponent
  ], styles: ['@charset "UTF-8";\n\n\n\n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.filter-reset-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n[_nghost-%COMP%]     .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-success, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-primary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-warning, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #b9a779 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6b1f2a !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-secondary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3d3a3b !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge .text-primary-emphasis, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n[_nghost-%COMP%]     .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n@media (max-width: 768px) {\n  .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=internal-consultations-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalConsultationsList, [{
    type: Component,
    args: [{ selector: "app-internal-consultations-list", imports: [
      CommonModule,
      FormsModule,
      ButtonModule,
      TableModule,
      TooltipModule,
      PaginatorComponent,
      ResetFiltersButtonComponent,
      PageHeaderComponent
    ], template: `<div class="user-header-section p-3 container-fluid">\r
  <app-page-header\r
    variant="banner"\r
    title="\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629"\r
    subtitle="\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627"\r
    icon="pi pi-comments">\r
  </app-page-header>\r
\r
  <div class="table-toolbar">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
      <div class="search-wrapper">\r
        <input\r
          #searchInput\r
          type="text"\r
          class="search-input"\r
          placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645"\r
          (input)="onFilterChange($event)"\r
        />\r
        <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <p-table\r
    #table\r
    [value]="filteredConsultations"\r
    [loading]="loading"\r
    [rows]="rowsPerPage"\r
    [totalRecords]="totalRecords"\r
    class="custom-table my-3"\r
    [tableStyle]="{ 'min-width': '50rem' }">\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th style="min-width: 120px" class="text-center">\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u064A\u0636</th>\r
        <th style="min-width: 130px" class="text-center">\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629</th>\r
        <th style="min-width: 130px" class="text-center">\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629</th>\r
        <th style="min-width: 120px" class="text-center">\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064A\u0628</th>\r
        <th style="min-width: 100px" class="text-center">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th style="min-width: 90px" class="text-center">\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642</th>\r
        <th style="min-width: 80px" class="text-center">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="body" let-c>\r
      <tr>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ c.applicantFileNumber || '-' }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ c.consultationType || '-' }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ c.referralReason || '-' }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ c.doctor?.fullName || '-' }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span [ngClass]="getBadgeClass(c.result)" class="small">{{ c.result || '-' }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          @if (c.attachment) {\r
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"\r
              tooltipPosition="top"\r
              (click)="openFile(c.attachment)">\r
              <i class="pi pi-file"></i>\r
            </button>\r
          } @else {\r
            <span class="text-muted small">\u0644\u0627 \u064A\u0648\u062C\u062F</span>\r
          }\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="d-flex flex-row justify-content-center align-items-center gap-2">\r
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629"\r
              tooltipPosition="top"\r
              (click)="openEditConsultation(c)">\r
              <i class="pi pi-pen-to-square"></i>\r
            </button>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="7" class="text-center py-3 align-middle small">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <app-paginator\r
    [totalRecords]="totalRecords"\r
    [pageSize]="rowsPerPage"\r
    [currentPage]="page"\r
    (pageChange)="onPageChange($event)"\r
    (pageSizeChange)="onPageSizeChange($event)">\r
  </app-paginator>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/internal-consultations-list/internal-consultations-list.scss */\n.user-header-section {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-toolbar {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.filter-reset-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrapper {\n  position: relative;\n  width: 400px;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n:host ::ng-deep .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-success,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #b9a779 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6b1f2a !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3d3a3b !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge .text-primary-emphasis,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n:host ::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n@media (max-width: 768px) {\n  .search-wrapper {\n    width: 100%;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=internal-consultations-list.css.map */\n'] }]
  }], () => [{ type: InternalExamService }, { type: ToastrService }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalConsultationsList, { className: "InternalConsultationsList", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-consultations-list/internal-consultations-list.ts", lineNumber: 32 });
})();
export {
  InternalConsultationsList
};
//# sourceMappingURL=chunk-6MV3HRRX.js.map
