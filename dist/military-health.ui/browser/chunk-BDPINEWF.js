import {
  EditConsultation
} from "./chunk-JEPGTHKH.js";
import {
  NgbModal
} from "./chunk-TGQW4JXT.js";
import {
  InternalExamService
} from "./chunk-G4BN75S6.js";
import "./chunk-KGX6SBXR.js";
import "./chunk-S5S7SM6Z.js";
import {
  ToastrService
} from "./chunk-QUV35I6O.js";
import {
  PaginatorComponent
} from "./chunk-SYMQ7THN.js";
import {
  ResetFiltersButtonComponent,
  Table,
  TableModule,
  TooltipModule
} from "./chunk-5SMAMAOZ.js";
import "./chunk-ZBRQ7FXV.js";
import "./chunk-WAJQF222.js";
import "./chunk-BSHRCOEK.js";
import {
  ButtonModule,
  RippleModule
} from "./chunk-DYGQH52H.js";
import {
  PrimeTemplate
} from "./chunk-O5UBWZSW.js";
import {
  FormsModule
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  NgClass,
  environment
} from "./chunk-7EG6WMAP.js";
import {
  Component,
  ViewChild,
  __spreadValues,
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
  ɵɵpureFunction3,
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
var _c2 = (a0, a1, a2) => ({ "badge bg-success": a0, "badge bg-danger": a1, "badge bg-warning text-dark": a2 });
function InternalConsultationsList_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u064A\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064A\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function InternalConsultationsList_ng_template_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function InternalConsultationsList_ng_template_11_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openFile(c_r4.attachment));
    });
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2, " \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275elementEnd();
  }
}
function InternalConsultationsList_ng_template_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641");
    \u0275\u0275elementEnd();
  }
}
function InternalConsultationsList_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275conditionalCreate(13, InternalConsultationsList_ng_template_11_Conditional_13_Template, 3, 0, "button", 15)(14, InternalConsultationsList_ng_template_11_Conditional_14_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 16)(16, "button", 17);
    \u0275\u0275listener("click", function InternalConsultationsList_ng_template_11_Template_button_click_16_listener() {
      const c_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditConsultation(c_r4));
    });
    \u0275\u0275element(17, "i", 18);
    \u0275\u0275text(18, " \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.applicantFileNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.consultationType || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.referralReason || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c2, c_r4.result === "\u0645\u0642\u0628\u0648\u0644", c_r4.result === "\u0645\u0631\u0641\u0648\u0636", c_r4.result === "\u0645\u0624\u062C\u0644"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.result || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r4.doctor == null ? null : c_r4.doctor.fullName) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.attachment ? 13 : 14);
  }
}
function InternalConsultationsList_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
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
  selectedConsultation = null;
  loading = false;
  searchText = "";
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
  openEditDialog(c) {
    this.selectedConsultation = __spreadValues({}, c);
  }
  onDialogClose(updated) {
    this.selectedConsultation = null;
    if (updated)
      this.loadConsultations();
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
  }, decls: 14, vars: 7, consts: [["searchInput", ""], ["table", ""], [1, "internal-consultations-page", "container"], [1, "table-toolbar", "my-2"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], ["responsiveLayout", "scroll", 1, "custom-table", 3, "value", "rows", "scrollable", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [3, "ngClass"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "text-center"], ["type", "button", "title", "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "pi", "pi-pen-to-square"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], ["colspan", "7", 1, "text-center"]], template: function InternalConsultationsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "app-reset-filters-button", 5);
      \u0275\u0275listener("reset", function InternalConsultationsList_Template_app_reset_filters_button_reset_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "input", 7, 0);
      \u0275\u0275listener("input", function InternalConsultationsList_Template_input_input_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p-table", 9, 1);
      \u0275\u0275template(10, InternalConsultationsList_ng_template_10_Template, 15, 0, "ng-template", 10)(11, InternalConsultationsList_ng_template_11_Template, 19, 11, "ng-template", 11)(12, InternalConsultationsList_ng_template_12_Template, 3, 0, "ng-template", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-paginator", 13);
      \u0275\u0275listener("pageChange", function InternalConsultationsList_Template_app_paginator_pageChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function InternalConsultationsList_Template_app_paginator_pageSizeChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.filteredConsultations)("rows", ctx.rowsPerPage)("scrollable", true)("showCurrentPageReport", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [CommonModule, NgClass, ButtonModule, PrimeTemplate, TableModule, Table, TooltipModule, RippleModule, FormsModule, PaginatorComponent, ResetFiltersButtonComponent], styles: ['@charset "UTF-8";\n\n\n\n.internal-consultations-page[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.user-header-section[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin-bottom: 0.3rem;\n}\n.user-header-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.user-header-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 6px 14px;\n}\n.user-header-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border: none;\n}\n  .p-datatable {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  font-family: "Segoe UI", sans-serif;\n}\n  .p-datatable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable-table-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable-scrollable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 0.75rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: normal !important;\n  word-wrap: break-word !important;\n  max-width: 150px !important;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745 !important;\n  color: white;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n  color: white;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child, \n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n  .p-datatable {\n  direction: rtl;\n}\n  .p-datatable .p-datatable-thead > tr > th, \n  .p-datatable .p-datatable-tbody > tr > td {\n  text-align: center;\n  vertical-align: middle;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n  margin-left: auto;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n.highlight-blue[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  padding: 0 2px;\n  border-radius: 3px;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 4px 10px;\n  font-size: 0.85rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary {\n  border-color: #ced4da;\n  color: #495057;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:hover {\n  background-color: #e9ecef;\n  color: #212529;\n}\n/*# sourceMappingURL=internal-consultations-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalConsultationsList, [{
    type: Component,
    args: [{ selector: "app-internal-consultations-list", imports: [CommonModule, ButtonModule, TableModule, TooltipModule, RippleModule, FormsModule, PaginatorComponent, ResetFiltersButtonComponent], template: `<div class="internal-consultations-page  container">\r
\r
  <!-- \u0628\u062D\u062B -->\r
  <div class="table-toolbar my-2">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
    <div class="search-wrapper">\r
        <input #searchInput type="text" class="search-input" placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645"\r
        (input)="onFilterChange($event)" />\r
      <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u062C\u062F\u0648\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C (PrimeNG) -->\r
  <p-table #table [value]="filteredConsultations" [rows]="rowsPerPage" [scrollable]="true"\r
    [showCurrentPageReport]="true" responsiveLayout="scroll" class="custom-table">\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th>\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u064A\u0636</th>\r
        <th>\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629</th>\r
        <th>\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629</th>\r
        <th>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th>\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064A\u0628</th>\r
        <th>\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642</th>\r
        <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="body" let-c>\r
      <tr>\r
        <td>{{ c.applicantFileNumber || '-' }}</td>\r
        <td>{{ c.consultationType || '-' }}</td>\r
        <td>{{ c.referralReason || '-' }}</td>\r
        <td>\r
          <span [ngClass]="{\r
            'badge bg-success': c.result === '\u0645\u0642\u0628\u0648\u0644',\r
            'badge bg-danger': c.result === '\u0645\u0631\u0641\u0648\u0636',\r
            'badge bg-warning text-dark': c.result === '\u0645\u0624\u062C\u0644'\r
          }">{{ c.result || '-' }}</span>\r
        </td>\r
        <td>{{ c.doctor?.fullName || '-' }}</td>\r
        <td>\r
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
        <td class="text-center">\r
          <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629"\r
          (click)="openEditConsultation(c)">\r
          <i class="pi pi-pen-to-square"></i>\r
            \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629\r
      </button>\r
          <!-- <button type="button" class="btn btn-sm btn-primary" title="\u0627\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629" (click)="openEditConsultation(c)">\r
            <i class="bi bi-pencil-square me-1"></i>\r
            \u0627\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629\r
          </button> -->\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="7" class="text-center">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <app-paginator [totalRecords]="totalRecords" [pageSize]="rowsPerPage" [currentPage]="page"\r
    (pageChange)="onPageChange($event)" (pageSizeChange)="onPageSizeChange($event)">\r
  </app-paginator>\r
\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/internal-consultations-list/internal-consultations-list.scss */\n.internal-consultations-page {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.user-header-section .breadcrumb {\n  font-size: 0.85rem;\n  margin-bottom: 0.3rem;\n}\n.user-header-section h2 {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.user-header-section .btn {\n  font-weight: 500;\n  padding: 6px 14px;\n}\n.user-header-section .btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border: none;\n}\n::ng-deep .p-datatable {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  font-family: "Segoe UI", sans-serif;\n}\n::ng-deep .p-datatable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable-table-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable-scrollable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 0.75rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: normal !important;\n  word-wrap: break-word !important;\n  max-width: 150px !important;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n.badge {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.bg-success {\n  background-color: #28a745 !important;\n  color: white;\n}\n.bg-secondary {\n  background-color: #6c757d !important;\n  color: white;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child,\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.search-wrapper {\n  position: relative;\n  width: 350px;\n}\n.search-input {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n::ng-deep .p-datatable {\n  direction: rtl;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th,\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  text-align: center;\n  vertical-align: middle;\n}\n.search-wrapper {\n  position: relative;\n  width: 350px;\n  margin-left: auto;\n}\n.search-input {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n.highlight-blue {\n  background-color: #007bff;\n  color: #fff;\n  padding: 0 2px;\n  border-radius: 3px;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 4px 10px;\n  font-size: 0.85rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary {\n  border-color: #ced4da;\n  color: #495057;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:hover {\n  background-color: #e9ecef;\n  color: #212529;\n}\n/*# sourceMappingURL=internal-consultations-list.css.map */\n'] }]
  }], () => [{ type: InternalExamService }, { type: ToastrService }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalConsultationsList, { className: "InternalConsultationsList", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-consultations-list/internal-consultations-list.ts", lineNumber: 23 });
})();
export {
  InternalConsultationsList
};
//# sourceMappingURL=chunk-BDPINEWF.js.map
