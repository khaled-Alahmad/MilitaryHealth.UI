import {
  FilterBarComponent
} from "./chunk-XOO63LV7.js";
import {
  OrthopedicExamService
} from "./chunk-R2N3C4MN.js";
import {
  EditConsultation
} from "./chunk-KHTYNX3C.js";
import {
  NgbModal
} from "./chunk-ZUITLSD7.js";
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

// src/app/features/doctor/components/orthopedics-doctor.component/orthopedic-consultations-list/orthopedic-consultations-list.ts
var _c0 = ["table"];
var _c1 = () => ({ "min-width": "50rem" });
function OrthopedicConsultationsList_ng_template_7_Template(rf, ctx) {
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
function OrthopedicConsultationsList_ng_template_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function OrthopedicConsultationsList_ng_template_8_Conditional_17_Template_button_click_0_listener() {
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
function OrthopedicConsultationsList_ng_template_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641");
    \u0275\u0275elementEnd();
  }
}
function OrthopedicConsultationsList_ng_template_8_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(17, OrthopedicConsultationsList_ng_template_8_Conditional_17_Template, 3, 0, "button", 19)(18, OrthopedicConsultationsList_ng_template_8_Conditional_18_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 18)(20, "button", 20);
    \u0275\u0275listener("click", function OrthopedicConsultationsList_ng_template_8_Template_button_click_20_listener() {
      const c_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditConsultationModal(c_r4));
    });
    \u0275\u0275element(21, "i", 21);
    \u0275\u0275text(22, " \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementEnd()()();
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
function OrthopedicConsultationsList_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
var OrthopedicConsultationsList = class _OrthopedicConsultationsList {
  service;
  toastr;
  modalService;
  consultations = [];
  filteredConsultations = [];
  selectedConsultation = null;
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
    this.loadConsultations();
  }
  loadConsultations() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.service.getOrthopedicConsultations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.consultations = res.items;
        this.filteredConsultations = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: (err) => {
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
  onFilterChange(value) {
    this.globalFilter = (value || "").trim();
    this.page = 1;
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
  openEditConsultationModal(consultation) {
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
    modalRef.componentInstance.dialogClosed?.subscribe((updated) => {
      if (updated)
        this.loadConsultations();
    });
  }
  getBadgeClass(result) {
    if (!result)
      return "badge bg-secondary";
    switch (result) {
      case "\u0645\u0642\u0628\u0648\u0644":
        return "badge bg-success";
      case "\u0645\u0631\u0641\u0648\u0636":
        return "badge bg-danger";
      case "\u0645\u0624\u062C\u0644":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
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
  static \u0275fac = function OrthopedicConsultationsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrthopedicConsultationsList)(\u0275\u0275directiveInject(OrthopedicExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrthopedicConsultationsList, selectors: [["app-orthopedic-consultations-list"]], viewQuery: function OrthopedicConsultationsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, decls: 11, vars: 11, consts: [["table", ""], [1, "list-page-section"], ["variant", "banner", "title", "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629", "subtitle", "\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627", "icon", "pi pi-comments"], [1, "table-toolbar"], [1, "table-toolbar__filter"], ["searchPlaceholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 3, "searchChange", "reset", "searchValue", "showReset", "loading", "showSearchHint"], [1, "custom-table", "compact-table", 3, "value", "loading", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [2, "width", "120px"], [2, "width", "130px"], [2, "width", "100px"], [2, "width", "90px"], [2, "width", "80px"], [1, "fw-bold", "small"], [1, "small", 3, "ngClass"], [1, "text-center"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", "title", "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "pi", "pi-pen-to-square"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], ["colspan", "7", 1, "text-center", "py-2", "small"]], template: function OrthopedicConsultationsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-page-header", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "app-filter-bar", 5);
      \u0275\u0275listener("searchChange", function OrthopedicConsultationsList_Template_app_filter_bar_searchChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      })("reset", function OrthopedicConsultationsList_Template_app_filter_bar_reset_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "p-table", 6, 0);
      \u0275\u0275template(7, OrthopedicConsultationsList_ng_template_7_Template, 15, 0, "ng-template", 7)(8, OrthopedicConsultationsList_ng_template_8_Template, 23, 7, "ng-template", 8)(9, OrthopedicConsultationsList_ng_template_9_Template, 3, 0, "ng-template", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-paginator", 10);
      \u0275\u0275listener("pageChange", function OrthopedicConsultationsList_Template_app_paginator_pageChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function OrthopedicConsultationsList_Template_app_paginator_pageSizeChange_10_listener($event) {
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
  }, dependencies: [CommonModule, NgClass, ButtonModule, PrimeTemplate, FormsModule, PaginatorComponent, TableModule, Table, FilterBarComponent, PageHeaderComponent], styles: ['@charset "UTF-8";\n\n\n\n.list-page-section[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  padding: 0.75rem;\n  border: 1px solid #e7edf3;\n  border-radius: var(--border-radius-md);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.table-toolbar__filter[_ngcontent-%COMP%] {\n  width: min(100%, 560px);\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n  flex: 0 0 auto;\n}\n.table-toolbar__filter[_ngcontent-%COMP%]   app-filter-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.custom-table[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.compact-table[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.list-page-section[_ngcontent-%COMP%]   .my-3[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%]   .my-3[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.list-page-section[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.btn-icon-action[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid #dee2e6;\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    transform 0.1s ease;\n}\n.btn-icon-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--primary-dark);\n}\n.btn-icon-action[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: scale(1.05);\n}\n.btn-icon-action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .table-toolbar[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .table-toolbar__filter[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-inline-start: 0;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=orthopedic-consultations-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrthopedicConsultationsList, [{
    type: Component,
    args: [{ selector: "app-orthopedic-consultations-list", standalone: true, imports: [CommonModule, ButtonModule, FormsModule, PaginatorComponent, TableModule, FilterBarComponent, PageHeaderComponent], template: `<div class="list-page-section">\r
  <app-page-header\r
    variant="banner"\r
    title="\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629"\r
    subtitle="\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0646\u062A\u0627\u0626\u062C\u0647\u0627"\r
    icon="pi pi-comments">\r
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
    [value]="filteredConsultations"\r
    [loading]="loading"\r
    class="custom-table compact-table"\r
    [tableStyle]="{ 'min-width': '50rem' }">\r
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
    <ng-template pTemplate="body" let-c>\r
      <tr>\r
        <td><span class="fw-bold small">{{ c.applicantFileNumber || '-' }}</span></td>\r
        <td><span class="fw-bold small">{{ c.consultationType || '-' }}</span></td>\r
        <td><span class="fw-bold small">{{ c.referralReason || '-' }}</span></td>\r
        <td><span class="fw-bold small">{{ c.doctor?.fullName || '-' }}</span></td>\r
        <td>\r
          <span [ngClass]="getBadgeClass(c.result)" class="small">{{ c.result || '-' }}</span>\r
        </td>\r
        <td class="text-center">\r
          @if (c.attachment) {\r
            <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"\r
              (click)="openFile(c.attachment)">\r
              <i class="bi bi-file-earmark-text me-1"></i>\r
              \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641\r
            </button>\r
          } @else {\r
            <span>\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641</span>\r
          }\r
        </td>\r
        <td class="text-center">\r
          <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629"\r
            (click)="openEditConsultationModal(c)">\r
            <i class="pi pi-pen-to-square"></i>\r
            \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629\r
          </button>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="7" class="text-center py-2 small">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</td>\r
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
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/orthopedics-doctor.component/orthopedic-consultations-list/orthopedic-consultations-list.scss */\n.list-page-section,\n.user-header-section {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n}\n.table-toolbar {\n  margin-bottom: var(--spacing-md);\n  padding: 0.75rem;\n  border: 1px solid #e7edf3;\n  border-radius: var(--border-radius-md);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.table-toolbar__filter {\n  width: min(100%, 560px);\n  margin-inline-start: auto;\n  margin-inline-end: 0;\n  flex: 0 0 auto;\n}\n.table-toolbar__filter app-filter-bar {\n  display: block;\n  width: 100%;\n}\n.custom-table {\n  direction: rtl;\n}\n.compact-table {\n  margin-top: 0;\n}\n.list-page-section .my-3,\n.user-header-section .my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.list-page-section .btn.btn-sm,\n.user-header-section .btn.btn-sm {\n  border-radius: 8px;\n}\n.btn-icon-action {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid #dee2e6;\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    transform 0.1s ease;\n}\n.btn-icon-action i {\n  font-size: 0.85rem;\n  color: var(--primary-dark);\n}\n.btn-icon-action:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: scale(1.05);\n}\n.btn-icon-action:hover i {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .table-toolbar {\n    padding: 0.65rem;\n  }\n  .table-toolbar__filter {\n    width: 100%;\n    margin-inline-start: 0;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=orthopedic-consultations-list.css.map */\n'] }]
  }], () => [{ type: OrthopedicExamService }, { type: ToastrService }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrthopedicConsultationsList, { className: "OrthopedicConsultationsList", filePath: "src/app/features/doctor/components/orthopedics-doctor.component/orthopedic-consultations-list/orthopedic-consultations-list.ts", lineNumber: 25 });
})();
export {
  OrthopedicConsultationsList
};
//# sourceMappingURL=chunk-MM75ZANE.js.map
