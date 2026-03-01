import {
  EditInvestigation
} from "./chunk-IVVEAGGB.js";
import {
  NgbModal
} from "./chunk-TGQW4JXT.js";
import {
  EyeExamService
} from "./chunk-KGX6SBXR.js";
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
  TableModule
} from "./chunk-5SMAMAOZ.js";
import "./chunk-ZBRQ7FXV.js";
import "./chunk-WAJQF222.js";
import "./chunk-BSHRCOEK.js";
import {
  ButtonModule
} from "./chunk-DYGQH52H.js";
import {
  PrimeTemplate
} from "./chunk-O5UBWZSW.js";
import {
  FormsModule
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import {
  Router
} from "./chunk-QLKHPIKE.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  environment
} from "./chunk-7EG6WMAP.js";
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
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/eye-doctor.component/eye-investigations-list/eye-investigations-list.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
var _c2 = () => ({ "min-width": "50rem" });
function EyeInvestigationsList_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 14);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 15);
    \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 14);
    \u0275\u0275text(8, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 15);
    \u0275\u0275text(10, "\u0627\u0644\u0637\u0628\u064A\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 16);
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 17);
    \u0275\u0275text(14, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function EyeInvestigationsList_ng_template_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EyeInvestigationsList_ng_template_11_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const investigation_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openFile(investigation_r4.attachment));
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2, " \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275elementEnd();
  }
}
function EyeInvestigationsList_ng_template_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641");
    \u0275\u0275elementEnd();
  }
}
function EyeInvestigationsList_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 20);
    \u0275\u0275conditionalCreate(17, EyeInvestigationsList_ng_template_11_Conditional_17_Template, 3, 0, "button", 21)(18, EyeInvestigationsList_ng_template_11_Conditional_18_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 20)(20, "button", 22);
    \u0275\u0275listener("click", function EyeInvestigationsList_ng_template_11_Template_button_click_20_listener() {
      const investigation_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditInvestigation(investigation_r4));
    });
    \u0275\u0275element(21, "i", 23);
    \u0275\u0275text(22, " \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const investigation_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r4.applicantFileNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r4.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r4.result || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r4.status || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((investigation_r4.doctor == null ? null : investigation_r4.doctor.fullName) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(investigation_r4.attachment ? 17 : 18);
  }
}
function EyeInvestigationsList_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
}
var EyeInvestigationsList = class _EyeInvestigationsList {
  service;
  toastr;
  cdr;
  router;
  modalService;
  investigations = [];
  filteredInvestigations = [];
  globalFilter = "";
  page = 1;
  rowsPerPage = 5;
  totalRecords = 0;
  loading = false;
  tableHeight = "360px";
  selectedInvestigation = null;
  searchText = "";
  environment = environment;
  table;
  searchInput;
  constructor(service, toastr, cdr, router, modalService) {
    this.service = service;
    this.toastr = toastr;
    this.cdr = cdr;
    this.router = router;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadInvestigations();
  }
  loadInvestigations() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.service.getEyeClinicInvestigations(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.investigations = res.items.sort((a, b) => (b.investigationID ?? 0) - (a.investigationID ?? 0));
        this.filteredInvestigations = this.investigations;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u274C \u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  openFile(attachment) {
    if (!attachment) {
      this.toastr.warning("\u26A0\uFE0F \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641 \u0645\u0631\u0641\u0642", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    window.open(`${environment.apiUrl}/${attachment}`, "_blank");
  }
  onLazyLoad(event) {
    this.page = Math.floor(event.first / event.rows) + 1;
    this.rowsPerPage = event.rows;
    this.loadInvestigations();
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
  onFilterChange(event) {
    const value = event.target.value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadInvestigations();
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
    this.loadInvestigations();
  }
  static \u0275fac = function EyeInvestigationsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeInvestigationsList)(\u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeInvestigationsList, selectors: [["app-eye-investigations-list"]], viewQuery: function EyeInvestigationsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, hostBindings: function EyeInvestigationsList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function EyeInvestigationsList_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 14, vars: 7, consts: [["searchInput", ""], ["table", ""], [1, "user-header-section", "px-1", "pt-1", "container-fluid"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "custom-table", "compact-table", 3, "value", "loading", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [2, "width", "100px"], [2, "width", "120px"], [2, "width", "90px"], [2, "width", "80px"], [1, "fw-bold", "small"], [1, "small"], [1, "text-center"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", "title", "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "pi", "pi-pen-to-square"], ["type", "button", "title", "\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], ["colspan", "7", 1, "text-center", "py-2", "small"]], template: function EyeInvestigationsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "app-reset-filters-button", 5);
      \u0275\u0275listener("reset", function EyeInvestigationsList_Template_app_reset_filters_button_reset_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "input", 7, 0);
      \u0275\u0275listener("input", function EyeInvestigationsList_Template_input_input_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p-table", 9, 1);
      \u0275\u0275template(10, EyeInvestigationsList_ng_template_10_Template, 15, 0, "ng-template", 10)(11, EyeInvestigationsList_ng_template_11_Template, 23, 6, "ng-template", 11)(12, EyeInvestigationsList_ng_template_12_Template, 3, 0, "ng-template", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-paginator", 13);
      \u0275\u0275listener("pageChange", function EyeInvestigationsList_Template_app_paginator_pageChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function EyeInvestigationsList_Template_app_paginator_pageSizeChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.filteredInvestigations)("loading", ctx.loading)("tableStyle", \u0275\u0275pureFunction0(6, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [CommonModule, ButtonModule, PrimeTemplate, FormsModule, TableModule, Table, PaginatorComponent, ResetFiltersButtonComponent], styles: ['@charset "UTF-8";\n\n\n\n.user-header-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n  margin-bottom: 1.5rem;\n}\n.user-header-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  padding-right: 2.5rem;\n  font-size: 0.875rem;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  background-color: white;\n  color: #161616;\n  transition: all 0.3s ease;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n}\n.user-header-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.user-header-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #3D3A3B;\n  opacity: 0.6;\n}\n.user-header-section[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #054239;\n  font-size: 1rem;\n  pointer-events: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1;\n  white-space: nowrap;\n}\n.bg-primary-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(5, 66, 57, 0.1) !important;\n  color: #054239 !important;\n  border: 1px solid rgba(5, 66, 57, 0.2);\n}\n.bg-secondary-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(61, 58, 59, 0.1) !important;\n  color: #3D3A3B !important;\n  border: 1px solid rgba(61, 58, 59, 0.2);\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: rgba(66, 129, 119, 0.1) !important;\n  color: #428177 !important;\n  border: 1px solid rgba(66, 129, 119, 0.2);\n}\n.text-primary-emphasis[_ngcontent-%COMP%] {\n  color: #054239 !important;\n}\n.text-secondary-emphasis[_ngcontent-%COMP%] {\n  color: #3D3A3B !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #3D3A3B !important;\n  color: #3D3A3B !important;\n  background-color: transparent !important;\n  padding: 0.375rem 0.75rem !important;\n  font-size: 0.8125rem !important;\n  font-weight: 500 !important;\n  border-radius: 6px !important;\n  transition: all 0.2s ease !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #3D3A3B !important;\n  color: white !important;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.btn-outline-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #3D3A3B !important;\n}\n.fs-8[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.fs-9[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.refractions-display[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin: 0.125rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  padding: 2rem;\n  color: #3D3A3B;\n  font-size: 0.875rem;\n}\n.d-flex.gap-1[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  .search-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .user-header-section[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n    padding: 0.25rem 0.5rem !important;\n  }\n  .user-header-section[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0.125rem;\n    font-size: 0.75rem;\n  }\n  .user-header-section[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n    padding: 0.25rem 0.5rem;\n  }\n}\n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--border-radius-md) !important;\n  box-shadow: var(--shadow-sm) !important;\n  padding: var(--spacing-md) !important;\n  margin: 0 auto var(--spacing-md) !important;\n  border: 1px solid #e9ecef !important;\n}\n  .p-datatable {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  font-family: "Segoe UI", sans-serif;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745 !important;\n  color: white;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n  color: white;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child, \n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n  .p-datatable {\n  direction: rtl;\n}\n  .p-datatable .p-datatable-thead > tr > th, \n  .p-datatable .p-datatable-tbody > tr > td {\n  text-align: center;\n  vertical-align: middle;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n  margin-left: auto;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n.highlight-blue[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  padding: 0 2px;\n  border-radius: 3px;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 4px 10px;\n  font-size: 0.85rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary {\n  border-color: #ced4da;\n  color: #495057;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:hover {\n  background-color: #e9ecef;\n  color: #212529;\n}\n  .p-button-ghost {\n  background: transparent !important;\n  color: var(--primary-color, #007bff) !important;\n  border: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s ease-in-out;\n}\n  .p-button-ghost:hover {\n  background: rgba(0, 123, 255, 0.1) !important;\n  color: var(--primary-color-hover, #0056b3) !important;\n}\n  .p-button-ghost .pi {\n  font-size: 1.1rem;\n}\n.icon[_ngcontent-%COMP%] {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary-medium);\n  transform: scale(1.2);\n  cursor: pointer;\n}\n.icon[_ngcontent-%COMP%] {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary-medium);\n  transform: scale(1.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=eye-investigations-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeInvestigationsList, [{
    type: Component,
    args: [{ selector: "app-eye-investigations-list", standalone: true, imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, ResetFiltersButtonComponent], template: `<div class="user-header-section px-1 pt-1 container-fluid">\r
  <!-- \u0627\u0644\u0628\u062D\u062B -->\r
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
  <!-- \u062C\u062F\u0648\u0644 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 -->\r
  <p-table\r
    #table\r
    [value]="filteredInvestigations"\r
    [loading]="loading"\r
    class="custom-table compact-table"\r
    [tableStyle]="{ 'min-width': '50rem' }"\r
  >\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th style="width: 100px">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th style="width: 120px">\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</th>\r
        <th style="width: 120px">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th style="width: 100px">\u0627\u0644\u062D\u0627\u0644\u0629</th>\r
        <th style="width: 120px">\u0627\u0644\u0637\u0628\u064A\u0628</th>\r
        <th style="width: 90px">\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642</th>\r
        <th style="width: 80px">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="body" let-investigation>\r
      <tr>\r
        <td>\r
          <span class="fw-bold  small">{{ investigation.applicantFileNumber }}</span>\r
        </td>\r
        <td>\r
          <span class="fw-bold small">{{ investigation.type }}</span>\r
        </td>\r
        <td>\r
          <span class="fw-bold small">{{ investigation.result || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>\r
        </td>\r
        <td>\r
          <span class="small">{{ investigation.status || '-' }}</span>\r
        </td>\r
        <td>\r
          <span class="small">{{ investigation.doctor?.fullName || '-' }}</span>\r
        </td>\r
        <td class="text-center">\r
          @if(investigation.attachment){\r
            <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"\r
                (click)="openFile(investigation.attachment)">\r
                <i class="bi bi-file-earmark-text me-1"></i>\r
                \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641\r
            </button>\r
            }\r
            @else {\r
            <span>\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641</span>\r
            }\r
          <!-- <div class="d-flex justify-content-center"> -->\r
            <!-- \u0632\u0631 \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0645\u0648\u062C\u0648\u062F -->\r
             <!-- @if(investigation.attachment){\r
              <i class="pi pi-folder-open icon"\r
              (click)="openFile(investigation.attachment)"  title="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"></i>\r
             }@else {\r
              <i class="pi pi-times"  title="\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641"></i>\r
             } -->\r
            \r
            <!-- <button\r
              *ngIf="investigation.attachment"\r
              title="\u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641"\r
              class="btn btn-sm btn-info p-1"\r
              (click)="openFile(investigation.attachment)"\r
            >\r
              <i class="fas fa-eye"></i>\r
            </button> -->\r
\r
            <!-- \u0623\u064A\u0642\u0648\u0646\u0629 \u062B\u0627\u0628\u062A\u0629 \u0625\u0630\u0627 \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0641 -->\r
            <!-- <i *ngIf="!investigation.attachment" class="fas fa-eye no-file-icon"></i> -->\r
          <!-- </div> -->\r
        </td>\r
        <td class="text-center">\r
          <button type="button" class="btn btn-sm btn-outline-secondary" title="\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629"\r
          (click)="openEditInvestigation(investigation)">\r
          <i class="pi pi-pen-to-square"></i>\r
          \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629\r
      </button>\r
          <!-- <i class="pi pi-pen-to-square icon"\r
          (click)="openEditInvestigation(investigation)"  title="\u062A\u0639\u062F\u064A\u0644 \u0646\u062A\u064A\u062C\u0629"></i> -->\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="7" class="text-center py-2 small">\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <!-- \u0627\u0644\u0645\u0631\u0642\u0645 -->\r
  <app-paginator\r
    [totalRecords]="totalRecords"\r
    [pageSize]="rowsPerPage"\r
    [currentPage]="page"\r
    (pageChange)="onPageChange($event)"\r
    (pageSizeChange)="onPageSizeChange($event)"\r
  >\r
  </app-paginator>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/eye-doctor.component/eye-investigations-list/eye-investigations-list.scss */\n.user-header-section .search-wrapper {\n  position: relative;\n  max-width: 400px;\n  margin-bottom: 1.5rem;\n}\n.user-header-section .search-wrapper .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  padding-right: 2.5rem;\n  font-size: 0.875rem;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  background-color: white;\n  color: #161616;\n  transition: all 0.3s ease;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n}\n.user-header-section .search-wrapper .search-input:focus {\n  outline: none;\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.user-header-section .search-wrapper .search-input::placeholder {\n  color: #3D3A3B;\n  opacity: 0.6;\n}\n.user-header-section .search-wrapper .search-icon {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #054239;\n  font-size: 1rem;\n  pointer-events: none;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1;\n  white-space: nowrap;\n}\n.bg-primary-subtle {\n  background-color: rgba(5, 66, 57, 0.1) !important;\n  color: #054239 !important;\n  border: 1px solid rgba(5, 66, 57, 0.2);\n}\n.bg-secondary-subtle {\n  background-color: rgba(61, 58, 59, 0.1) !important;\n  color: #3D3A3B !important;\n  border: 1px solid rgba(61, 58, 59, 0.2);\n}\n.bg-info {\n  background-color: rgba(66, 129, 119, 0.1) !important;\n  color: #428177 !important;\n  border: 1px solid rgba(66, 129, 119, 0.2);\n}\n.text-primary-emphasis {\n  color: #054239 !important;\n}\n.text-secondary-emphasis {\n  color: #3D3A3B !important;\n}\n.btn-outline-secondary {\n  border: 1px solid #3D3A3B !important;\n  color: #3D3A3B !important;\n  background-color: transparent !important;\n  padding: 0.375rem 0.75rem !important;\n  font-size: 0.8125rem !important;\n  font-weight: 500 !important;\n  border-radius: 6px !important;\n  transition: all 0.2s ease !important;\n}\n.btn-outline-secondary:hover {\n  background-color: #3D3A3B !important;\n  color: white !important;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.btn-outline-secondary i {\n  margin-left: 0.25rem;\n}\n.text-muted {\n  color: #3D3A3B !important;\n}\n.fs-8 {\n  font-size: 0.75rem;\n}\n.fs-9 {\n  font-size: 0.6875rem;\n}\n.fw-bold {\n  font-weight: 700;\n}\n.refractions-display .badge {\n  margin: 0.125rem;\n}\n.text-center {\n  padding: 2rem;\n  color: #3D3A3B;\n  font-size: 0.875rem;\n}\n.d-flex.gap-1 {\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  .search-wrapper {\n    max-width: 100%;\n  }\n  .user-header-section .btn-outline-secondary {\n    font-size: 0.75rem !important;\n    padding: 0.25rem 0.5rem !important;\n  }\n  .user-header-section .btn-outline-secondary i {\n    margin-left: 0.125rem;\n    font-size: 0.75rem;\n  }\n  .user-header-section .badge {\n    font-size: 0.6875rem;\n    padding: 0.25rem 0.5rem;\n  }\n}\n.user-header-section {\n  background: white !important;\n  border-radius: var(--border-radius-md) !important;\n  box-shadow: var(--shadow-sm) !important;\n  padding: var(--spacing-md) !important;\n  margin: 0 auto var(--spacing-md) !important;\n  border: 1px solid #e9ecef !important;\n}\n::ng-deep .p-datatable {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  font-family: "Segoe UI", sans-serif;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n.badge {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.bg-success {\n  background-color: #28a745 !important;\n  color: white;\n}\n.bg-secondary {\n  background-color: #6c757d !important;\n  color: white;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child,\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.search-wrapper {\n  position: relative;\n  width: 350px;\n}\n.search-input {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n::ng-deep .p-datatable {\n  direction: rtl;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th,\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  text-align: center;\n  vertical-align: middle;\n}\n.search-wrapper {\n  position: relative;\n  width: 350px;\n  margin-left: auto;\n}\n.search-input {\n  width: 100%;\n  padding: 6px 12px;\n  padding-right: 35px;\n  font-size: 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 0.375rem;\n  background-color: #f9f9f9;\n  color: #111;\n  transition: border-color 0.2s ease-in-out;\n  outline: none;\n}\n.search-input:focus {\n  border-color: var(--primary-medium);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  pointer-events: none;\n}\n.highlight-blue {\n  background-color: #007bff;\n  color: #fff;\n  padding: 0 2px;\n  border-radius: 3px;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn.btn-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 4px 10px;\n  font-size: 0.85rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary {\n  border-color: #ced4da;\n  color: #495057;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .btn-outline-secondary:hover {\n  background-color: #e9ecef;\n  color: #212529;\n}\n::ng-deep .p-button-ghost {\n  background: transparent !important;\n  color: var(--primary-color, #007bff) !important;\n  border: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s ease-in-out;\n}\n::ng-deep .p-button-ghost:hover {\n  background: rgba(0, 123, 255, 0.1) !important;\n  color: var(--primary-color-hover, #0056b3) !important;\n}\n::ng-deep .p-button-ghost .pi {\n  font-size: 1.1rem;\n}\n.icon {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon:hover {\n  color: var(--primary-medium);\n  transform: scale(1.2);\n  cursor: pointer;\n}\n.icon {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon:hover {\n  color: var(--primary-medium);\n  transform: scale(1.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=eye-investigations-list.css.map */\n'] }]
  }], () => [{ type: EyeExamService }, { type: ToastrService }, { type: ChangeDetectorRef }, { type: Router }, { type: NgbModal }], { table: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeInvestigationsList, { className: "EyeInvestigationsList", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-investigations-list/eye-investigations-list.ts", lineNumber: 24 });
})();
export {
  EyeInvestigationsList
};
//# sourceMappingURL=chunk-ZWVBJ6RB.js.map
