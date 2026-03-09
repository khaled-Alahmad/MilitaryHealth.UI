import {
  FilterBarComponent
} from "./chunk-XOO63LV7.js";
import {
  EditInvestigation
} from "./chunk-LGDZMD32.js";
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
import "./chunk-3GLFOEUA.js";
import {
  Table,
  TableModule
} from "./chunk-H3VVC3HM.js";
import "./chunk-QKQWARGJ.js";
import "./chunk-ABC4ZTWT.js";
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
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/internal-doctor.component/internal-investigations-list/internal-investigations-list.ts
var _c0 = ["table"];
var _c1 = () => ({ "min-width": "50rem" });
function InternalInvestigationsList_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 12);
    \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 12);
    \u0275\u0275text(6, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 11);
    \u0275\u0275text(8, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 11);
    \u0275\u0275text(10, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 12);
    \u0275\u0275text(12, "\u0627\u0644\u0637\u0628\u064A\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 13);
    \u0275\u0275text(14, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 14);
    \u0275\u0275text(16, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function InternalInvestigationsList_ng_template_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function InternalInvestigationsList_ng_template_8_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openFile(i_r4.attachment));
    });
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2, " \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275elementEnd();
  }
}
function InternalInvestigationsList_ng_template_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641");
    \u0275\u0275elementEnd();
  }
}
function InternalInvestigationsList_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 15);
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
    \u0275\u0275elementStart(16, "td")(17, "span", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 18);
    \u0275\u0275conditionalCreate(20, InternalInvestigationsList_ng_template_8_Conditional_20_Template, 3, 0, "button", 19)(21, InternalInvestigationsList_ng_template_8_Conditional_21_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 18)(23, "button", 20);
    \u0275\u0275listener("click", function InternalInvestigationsList_ng_template_8_Template_button_click_23_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditInvestigation(i_r4));
    });
    \u0275\u0275element(24, "i", 21);
    \u0275\u0275text(25, " \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r4.applicantFileNumber || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r4.type || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r4.investigationReason || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r4.result || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r4.getBadgeClass(i_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r4.status || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((i_r4.doctor == null ? null : i_r4.doctor.fullName) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(i_r4.attachment ? 20 : 21);
  }
}
function InternalInvestigationsList_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
}
var InternalInvestigationsList = class _InternalInvestigationsList {
  service;
  toastr;
  modalService;
  investigations = [];
  filteredInvestigations = [];
  selectedInvestigation = null;
  loading = false;
  searchText = "";
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  table;
  constructor(service, toastr, modalService) {
    this.service = service;
    this.toastr = toastr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadInvestigations();
  }
  loadInvestigations() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.service.getInternalInvestigations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.investigations = res.items;
        this.filteredInvestigations = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: (err) => {
        this.toastr.error("\u274C \u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadInvestigations();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadInvestigations();
  }
  onFilterChange(value) {
    this.globalFilter = (value || "").trim();
    this.page = 1;
    this.loadInvestigations();
  }
  resetFilters() {
    this.globalFilter = "";
    this.page = 1;
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadInvestigations();
  }
  openEditDialog(inv) {
    this.selectedInvestigation = __spreadValues({}, inv);
  }
  onDialogClose(updated) {
    this.selectedInvestigation = null;
    if (updated)
      this.loadInvestigations();
  }
  openFile(attachment) {
    if (!attachment) {
      this.toastr.warning("\u26A0\uFE0F \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641 \u0645\u0631\u0641\u0642", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, "_blank");
  }
  openEditInvestigation(investigation) {
    const modalRef = this.modalService.open(EditInvestigation, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.investigation = investigation;
    modalRef.componentInstance.investigationUpdated.subscribe(() => {
      this.loadInvestigations();
    });
  }
  getBadgeClass(status) {
    if (!status) {
      return "badge";
    }
    switch (status) {
      case "\u0645\u0643\u062A\u0645\u0644":
        return "badge bg-success";
      case "\u0645\u0631\u0641\u0648\u0636":
        return "badge bg-danger";
      case "\u0645\u0624\u062C\u0644":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  }
  static \u0275fac = function InternalInvestigationsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalInvestigationsList)(\u0275\u0275directiveInject(InternalExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalInvestigationsList, selectors: [["app-internal-investigations-list"]], viewQuery: function InternalInvestigationsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, decls: 11, vars: 11, consts: [["table", ""], [1, "list-page-section"], ["variant", "banner", "title", "\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629", "subtitle", "\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627", "icon", "pi pi-file-search"], [1, "table-toolbar"], [1, "table-toolbar__filter"], ["searchPlaceholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 3, "searchChange", "reset", "searchValue", "showReset", "loading", "showSearchHint"], [1, "custom-table", "compact-table", 3, "value", "loading", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [2, "width", "100px"], [2, "width", "120px"], [2, "width", "90px"], [2, "width", "80px"], [1, "fw-bold", "small"], [1, "small"], [1, "small", 3, "ngClass"], [1, "text-center"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", "title", "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "pi", "pi-pen-to-square"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], ["colspan", "8", 1, "text-center", "py-2", "small"]], template: function InternalInvestigationsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-page-header", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "app-filter-bar", 5);
      \u0275\u0275listener("searchChange", function InternalInvestigationsList_Template_app_filter_bar_searchChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      })("reset", function InternalInvestigationsList_Template_app_filter_bar_reset_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "p-table", 6, 0);
      \u0275\u0275template(7, InternalInvestigationsList_ng_template_7_Template, 17, 0, "ng-template", 7)(8, InternalInvestigationsList_ng_template_8_Template, 26, 8, "ng-template", 8)(9, InternalInvestigationsList_ng_template_9_Template, 3, 0, "ng-template", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-paginator", 10);
      \u0275\u0275listener("pageChange", function InternalInvestigationsList_Template_app_paginator_pageChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function InternalInvestigationsList_Template_app_paginator_pageSizeChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("searchValue", ctx.globalFilter)("showReset", true)("loading", ctx.loading)("showSearchHint", false);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.filteredInvestigations)("loading", ctx.loading)("tableStyle", \u0275\u0275pureFunction0(10, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [CommonModule, NgClass, ButtonModule, PrimeTemplate, FormsModule, TableModule, Table, PaginatorComponent, FilterBarComponent, PageHeaderComponent], styles: ['@charset "UTF-8";\n\n\n\n.list-page-section[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  padding: 0.75rem;\n  border: 1px solid #e7edf3;\n  border-radius: var(--border-radius-md);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.table-toolbar__filter[_ngcontent-%COMP%] {\n  width: min(100%, 560px);\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n  flex: 0 0 auto;\n}\n.table-toolbar__filter[_ngcontent-%COMP%]   app-filter-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.custom-table[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.compact-table[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.list-page-section[_ngcontent-%COMP%]   .my-3[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%]   .my-3[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.list-page-section[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.btn-icon-action[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid #dee2e6;\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    transform 0.1s ease;\n}\n.btn-icon-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--primary-dark);\n}\n.btn-icon-action[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: scale(1.05);\n}\n.btn-icon-action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .table-toolbar[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .table-toolbar__filter[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-inline-start: 0;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=internal-investigations-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalInvestigationsList, [{
    type: Component,
    args: [{ selector: "app-internal-investigations-list", imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, FilterBarComponent, PageHeaderComponent], template: `<div class="list-page-section">\r
  <app-page-header\r
    variant="banner"\r
    title="\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629"\r
    subtitle="\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627"\r
    icon="pi pi-file-search">\r
  </app-page-header>\r
\r
  <div class="table-toolbar">\r
    <div class="table-toolbar__filter">\r
      <app-filter-bar\r
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
  <p-table\r
    #table\r
    [value]="filteredInvestigations"\r
    [loading]="loading"\r
    class="custom-table compact-table"\r
    [tableStyle]="{ 'min-width': '50rem' }">\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th style="width: 100px">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th style="width: 120px">\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</th>\r
        <th style="width: 120px">\u0627\u0644\u0633\u0628\u0628</th>\r
        <th style="width: 100px">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th style="width: 100px">\u0627\u0644\u062D\u0627\u0644\u0629</th>\r
        <th style="width: 120px">\u0627\u0644\u0637\u0628\u064A\u0628</th>\r
        <th style="width: 90px">\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642</th>\r
        <th style="width: 80px">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="body" let-i>\r
      <tr>\r
        <td><span class="fw-bold small">{{ i.applicantFileNumber || '-' }}</span></td>\r
        <td><span class="fw-bold small">{{ i.type || '-' }}</span></td>\r
        <td><span class="small">{{ i.investigationReason || '-' }}</span></td>\r
        <td><span class="small">{{ i.result || '-' }}</span></td>\r
        <td>\r
          <span [ngClass]="getBadgeClass(i.status)" class="small">{{ i.status || '-' }}</span>\r
        </td>\r
        <td><span class="fw-bold small">{{ i.doctor?.fullName || '-' }}</span></td>\r
        <td class="text-center">\r
          @if (i.attachment) {\r
            <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"\r
              (click)="openFile(i.attachment)">\r
              <i class="bi bi-file-earmark-text me-1"></i>\r
              \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641\r
            </button>\r
          } @else {\r
            <span>\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641</span>\r
          }\r
        </td>\r
        <td class="text-center">\r
          <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629"\r
            (click)="openEditInvestigation(i)">\r
            <i class="pi pi-pen-to-square"></i>\r
            \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629\r
          </button>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="8" class="text-center py-2 small">\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644</td>\r
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
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/internal-investigations-list/internal-investigations-list.scss */\n.list-page-section,\n.user-header-section {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n}\n.table-toolbar {\n  margin-bottom: var(--spacing-md);\n  padding: 0.75rem;\n  border: 1px solid #e7edf3;\n  border-radius: var(--border-radius-md);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.table-toolbar__filter {\n  width: min(100%, 560px);\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n  flex: 0 0 auto;\n}\n.table-toolbar__filter app-filter-bar {\n  display: block;\n  width: 100%;\n}\n.custom-table {\n  direction: rtl;\n}\n.compact-table {\n  margin-top: 0;\n}\n.list-page-section .my-3,\n.user-header-section .my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.list-page-section .btn.btn-sm,\n.user-header-section .btn.btn-sm {\n  border-radius: 8px;\n}\n.btn-icon-action {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid #dee2e6;\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    transform 0.1s ease;\n}\n.btn-icon-action i {\n  font-size: 0.85rem;\n  color: var(--primary-dark);\n}\n.btn-icon-action:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: scale(1.05);\n}\n.btn-icon-action:hover i {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .table-toolbar {\n    padding: 0.65rem;\n  }\n  .table-toolbar__filter {\n    width: 100%;\n    margin-inline-start: 0;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=internal-investigations-list.css.map */\n'] }]
  }], () => [{ type: InternalExamService }, { type: ToastrService }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalInvestigationsList, { className: "InternalInvestigationsList", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-investigations-list/internal-investigations-list.ts", lineNumber: 22 });
})();
export {
  InternalInvestigationsList
};
//# sourceMappingURL=chunk-ZGI5DH4R.js.map
