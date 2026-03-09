import {
  Tag,
  TagModule
} from "./chunk-NJ7ILR2W.js";
import {
  BarcodePrintService
} from "./chunk-QUEHRW3Q.js";
import {
  FilterBarComponent
} from "./chunk-K763RHOS.js";
import {
  ScrollService
} from "./chunk-RQ7NA3ZI.js";
import {
  PaginatorComponent
} from "./chunk-MFLEARHA.js";
import "./chunk-3GLFOEUA.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-W3EN3B3V.js";
import "./chunk-B37FJDU3.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import "./chunk-SXOA2P4M.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import "./chunk-JZZQ7XWY.js";
import "./chunk-2VRBHK6C.js";
import {
  ApplicantService
} from "./chunk-LBNMWMAA.js";
import {
  GregorianDatePipe
} from "./chunk-M5RFJNTA.js";
import {
  Router
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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

// src/app/features/reception/components/applicants-list/applicants-list.ts
var _c0 = ["table"];
var _c1 = () => ["fileNumber", "fullName"];
function ApplicantsList_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 8);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631 ");
    \u0275\u0275element(3, "p-sortIcon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 10);
    \u0275\u0275text(5, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275element(6, "p-sortIcon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 12);
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
    \u0275\u0275element(9, "p-sortIcon", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 14);
    \u0275\u0275text(11, "\u0627\u0644\u0639\u0645\u0644 ");
    \u0275\u0275element(12, "p-sortIcon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0648\u0634\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 16);
    \u0275\u0275text(18, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 ");
    \u0275\u0275element(19, "p-sortIcon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantsList_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 18)(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 18)(8, "span", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 18)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 18)(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 18);
    \u0275\u0275element(17, "p-tag", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 18)(19, "span", 21);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 18)(23, "div", 23)(24, "p-button", 24);
    \u0275\u0275listener("onClick", function ApplicantsList_ng_template_5_Template_p_button_onClick_24_listener() {
      const applicant_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewApplicant(applicant_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-button", 25);
    \u0275\u0275listener("onClick", function ApplicantsList_ng_template_5_Template_p_button_onClick_25_listener() {
      const applicant_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editApplicant(applicant_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-button", 26);
    \u0275\u0275listener("onClick", function ApplicantsList_ng_template_5_Template_p_button_onClick_26_listener() {
      const applicant_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.printApplicant(applicant_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const applicant_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.queueNumber || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.fileNumber || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.fullName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.job || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((applicant_r3.maritalStatus == null ? null : applicant_r3.maritalStatus.description) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", applicant_r3.tattoo ? "\u0646\u0639\u0645" : "\u0644\u0627")("severity", applicant_r3.tattoo ? "warn" : "success");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 8, applicant_r3.createdAt, "yyyy/MM/dd"));
  }
}
function ApplicantsList_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 29);
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062A\u0642\u062F\u0645\u064A\u0646");
    \u0275\u0275elementEnd()()()();
  }
}
var ApplicantsList = class _ApplicantsList {
  applicantService;
  cdr;
  router;
  barcodePrintService;
  messageService;
  scrollService;
  applicants = [];
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = "400px";
  table;
  constructor(applicantService, cdr, router, barcodePrintService, messageService, scrollService) {
    this.applicantService = applicantService;
    this.cdr = cdr;
    this.router = router;
    this.barcodePrintService = barcodePrintService;
    this.messageService = messageService;
    this.scrollService = scrollService;
  }
  ngOnInit() {
    this.loadApplicants();
  }
  loadApplicants() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.applicantService.getApplicants$(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.applicants = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadApplicants();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadApplicants();
  }
  onSearchChange(value) {
    this.globalFilter = (value || "").toLowerCase().trim();
    this.page = 1;
    this.loadApplicants();
    setTimeout(() => this.scrollService.scrollToTop(true), 300);
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
  viewApplicant(applicant) {
    this.router.navigate(["reception/applicants/details", applicant.fileNumber]);
  }
  editApplicant(applicant) {
    if (!applicant?.applicantID) {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u0646\u0628\u064A\u0647",
        detail: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 - \u0645\u0639\u0631\u0651\u0641 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"
      });
      return;
    }
    this.router.navigate(["reception", "applicants", applicant.applicantID]);
  }
  printApplicant(applicant) {
    if (!applicant) {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u062D\u0630\u064A\u0631",
        detail: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646\u062A\u0633\u0628 \u0644\u0644\u0637\u0628\u0627\u0639\u0629"
      });
      return;
    }
    if (applicant.applicantID) {
      this.applicantService.getApplicantById$(applicant.applicantID).subscribe({
        next: (fullApplicantData) => {
          this.barcodePrintService.printBarcodeReceipt(fullApplicantData).catch((error) => {
            this.messageService.add({
              severity: "error",
              summary: "\u062E\u0637\u0623",
              detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
            });
          });
        },
        error: (err) => {
          this.barcodePrintService.printBarcodeReceipt(applicant).catch((error) => {
            this.messageService.add({
              severity: "error",
              summary: "\u062E\u0637\u0623",
              detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
            });
          });
        }
      });
    } else {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u062D\u0630\u064A\u0631",
        detail: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 - \u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629"
      });
    }
  }
  resetFilters() {
    this.globalFilter = "";
    this.page = 1;
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadApplicants();
  }
  static \u0275fac = function ApplicantsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicantsList)(\u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(BarcodePrintService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ScrollService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicantsList, selectors: [["app-applicants-list"]], viewQuery: function ApplicantsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, hostBindings: function ApplicantsList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ApplicantsList_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 8, vars: 12, consts: [["table", ""], [1, "reception-list-page", "container-fluid"], ["searchPlaceholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "reception-filter-bar", 3, "searchChange", "reset", "searchValue", "showReset"], ["styleClass", "reception-applicants-table", "responsiveLayout", "scroll", 3, "value", "loading", "scrollable", "scrollHeight", "globalFilterFields", "sortMode"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], ["pSortableColumn", "queueNumber"], ["field", "queueNumber"], ["pSortableColumn", "fileNumber"], ["field", "fileNumber"], ["pSortableColumn", "fullName"], ["field", "fullName"], ["pSortableColumn", "job"], ["field", "job"], ["pSortableColumn", "createdAt"], ["field", "createdAt"], [1, "text-center", "align-middle"], [1, "queue-badge"], [1, "cell-text", "cell-text--bold"], [1, "cell-text"], ["styleClass", "tattoo-tag", 3, "value", "severity"], [1, "actions-wrap"], ["icon", "pi pi-eye", "label", "", "styleClass", "p-button-sm p-button-outlined table-action-btn", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", "tooltipPosition", "top", 3, "onClick"], ["icon", "pi pi-pencil", "label", "", "styleClass", "p-button-sm p-button-success table-action-btn", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628", "tooltipPosition", "top", 3, "onClick"], ["icon", "pi pi-print", "label", "", "styleClass", "p-button-sm p-button-info table-action-btn", "pTooltip", "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", "tooltipPosition", "top", 3, "onClick"], ["colspan", "8", 1, "text-center", "py-4"], [1, "empty-state"], [1, "pi", "pi-users", "empty-state__icon"], [1, "text-muted"]], template: function ApplicantsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-filter-bar", 2);
      \u0275\u0275listener("searchChange", function ApplicantsList_Template_app_filter_bar_searchChange_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchChange($event));
      })("reset", function ApplicantsList_Template_app_filter_bar_reset_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p-table", 3, 0);
      \u0275\u0275template(4, ApplicantsList_ng_template_4_Template, 22, 0, "ng-template", 4)(5, ApplicantsList_ng_template_5_Template, 27, 11, "ng-template", 5)(6, ApplicantsList_ng_template_6_Template, 6, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-paginator", 7);
      \u0275\u0275listener("pageChange", function ApplicantsList_Template_app_paginator_pageChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function ApplicantsList_Template_app_paginator_pageSizeChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("searchValue", ctx.globalFilter)("showReset", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.applicants)("loading", ctx.loading)("scrollable", true)("scrollHeight", ctx.tableHeight)("globalFilterFields", \u0275\u0275pureFunction0(11, _c1))("sortMode", "single");
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SortIcon,
    CommonModule,
    PaginatorComponent,
    TagModule,
    Tag,
    ButtonModule,
    Button,
    TooltipModule,
    Tooltip,
    FilterBarComponent,
    GregorianDatePipe
  ], styles: ['\n\n.reception-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.reception-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  margin: 0 0 var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  transition: box-shadow var(--transition-fast);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-dark);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 14px;\n  background: var(--accent-gold);\n  border-radius: 2px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--neutral-medium);\n  font-weight: 500;\n}\n.reception-list-page[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n[_nghost-%COMP%]     .reception-filter-bar .filter-bar {\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]     .reception-filter-bar .filter-bar__controls {\n  width: 100%;\n  justify-content: flex-end;\n  margin-inline-start: auto;\n}\n[_nghost-%COMP%]     .reception-filter-bar .filter-bar__search-wrap {\n  order: -1;\n}\n[_nghost-%COMP%]     .reception-filter-bar .filter-bar__search-wrap .pi-search {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]     .reception-filter-bar .filter-bar__search-input {\n  padding-right: 2rem;\n}\n[_nghost-%COMP%]     .reception-applicants-table .p-datatable-wrapper {\n  overflow-x: auto;\n  max-width: 100%;\n}\n[_nghost-%COMP%]     .reception-applicants-table .p-datatable-thead > tr > th {\n  background: var(--primary-dark);\n  color: #fff;\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  text-align: center;\n  white-space: nowrap;\n  padding: 0.6rem 0.5rem;\n}\n[_nghost-%COMP%]     .reception-applicants-table .p-datatable-tbody > tr > td {\n  font-size: var(--font-size-xs);\n  padding: 0.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n[_nghost-%COMP%]     .reception-applicants-table .p-datatable-tbody > tr:nth-child(even) {\n  background: #fafafa;\n}\n[_nghost-%COMP%]     .reception-applicants-table .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.04);\n}\n[_nghost-%COMP%]     .reception-applicants-table .p-datatable-emptymessage td {\n  border: none;\n  padding: var(--spacing-2xl);\n  text-align: center;\n  color: var(--neutral-medium);\n}\n.cell-text[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--neutral-dark);\n}\n.cell-text--bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.queue-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 2.25rem;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  background: var(--primary-medium);\n  color: #fff;\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  line-height: 1.2;\n}\n.actions-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n}\n[_nghost-%COMP%]     .table-action-btn {\n  width: 2rem;\n  height: 2rem;\n}\n[_nghost-%COMP%]     .table-action-btn .p-button-label {\n  display: none;\n}\n[_nghost-%COMP%]     .tattoo-tag {\n  font-size: var(--font-size-xs);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--neutral-medium);\n}\n/*# sourceMappingURL=applicants-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicantsList, [{
    type: Component,
    args: [{ selector: "app-applicants-list", imports: [
      TableModule,
      CommonModule,
      PaginatorComponent,
      TagModule,
      ButtonModule,
      TooltipModule,
      GregorianDatePipe,
      FilterBarComponent
    ], providers: [MessageService], template: `<div class="reception-list-page container-fluid">
    <app-filter-bar
      class="reception-filter-bar"
      [searchValue]="globalFilter"
      searchPlaceholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645"
      [showReset]="true"
      (searchChange)="onSearchChange($event)"
      (reset)="resetFilters()">
    </app-filter-bar>

    <p-table #table
        styleClass="reception-applicants-table"
        [value]="applicants" 
        [loading]="loading"
        [scrollable]="true" 
        [scrollHeight]="tableHeight"
        [globalFilterFields]="['fileNumber','fullName']"
        [sortMode]="'single'"
        responsiveLayout="scroll">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="queueNumber">\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631 <p-sortIcon field="queueNumber"></p-sortIcon></th>
                <th pSortableColumn="fileNumber">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 <p-sortIcon field="fileNumber"></p-sortIcon></th>
                <th pSortableColumn="fullName">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 <p-sortIcon field="fullName"></p-sortIcon></th>
                <th pSortableColumn="job">\u0627\u0644\u0639\u0645\u0644 <p-sortIcon field="job"></p-sortIcon></th>
                <th>\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</th>
                <th>\u0648\u0634\u0645</th>
                <th pSortableColumn="createdAt">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 <p-sortIcon field="createdAt"></p-sortIcon></th>
                <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-applicant>
            <tr>
                <td class="text-center align-middle">
                    <span class="queue-badge">{{applicant.queueNumber || '-'}}</span>
                </td>
                <td class="text-center align-middle">
                    <span class="cell-text cell-text--bold">{{applicant.fileNumber || '-'}}</span>
                </td>
                <td class="text-center align-middle">
                    <span class="cell-text">{{applicant.fullName || '-'}}</span>
                </td>
                <td class="text-center align-middle">
                    <span class="cell-text">{{applicant.job || '-'}}</span>
                </td>
                <td class="text-center align-middle">
                    <span class="cell-text">{{applicant.maritalStatus?.description || '-'}}</span>
                </td>
                <td class="text-center align-middle">
                    <p-tag 
                      [value]="applicant.tattoo ? '\u0646\u0639\u0645' : '\u0644\u0627'" 
                      [severity]="applicant.tattoo ? 'warn' : 'success'"
                      styleClass="tattoo-tag"></p-tag>
                </td>
                <td class="text-center align-middle">
                    <span class="cell-text">{{applicant.createdAt | gregorianDate:'yyyy/MM/dd' }}</span>
                </td>
                <td class="text-center align-middle">
                    <div class="actions-wrap">
                    <p-button
                        icon="pi pi-eye"
                        label=""
                        styleClass="p-button-sm p-button-outlined table-action-btn"
                        pTooltip="\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"
                        tooltipPosition="top"
                        (onClick)="viewApplicant(applicant)"></p-button>
                    <p-button
                        icon="pi pi-pencil"
                        label=""
                        styleClass="p-button-sm p-button-success table-action-btn"
                        pTooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628"
                        tooltipPosition="top"
                        (onClick)="editApplicant(applicant)"></p-button>
                    <p-button
                        icon="pi pi-print"
                        label=""
                        styleClass="p-button-sm p-button-info table-action-btn"
                        pTooltip="\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F"
                        tooltipPosition="top"
                        (onClick)="printApplicant(applicant)"></p-button>
                    </div>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="8" class="text-center py-4">
                    <div class="empty-state">
                        <i class="pi pi-users empty-state__icon"></i>
                        <span class="text-muted">\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062A\u0642\u062F\u0645\u064A\u0646</span>
                    </div>
                </td>
            </tr>
        </ng-template>
    </p-table>

    <app-paginator 
        [totalRecords]="totalRecords" 
        [pageSize]="rowsPerPage" 
        [currentPage]="page"
        (pageChange)="onPageChange($event)" 
        (pageSizeChange)="onPageSizeChange($event)">
    </app-paginator>

</div>
`, styles: ['/* src/app/features/reception/components/applicants-list/applicants-list.scss */\n.reception-page {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.reception-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.info-section {\n  margin-bottom: var(--spacing-xl);\n}\n.info-section .section-title {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  margin: 0 0 var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.info-section .section-title .pi {\n  color: var(--accent-gold);\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  transition: box-shadow var(--transition-fast);\n}\n.info-grid .info-item:hover {\n  box-shadow: var(--shadow-sm);\n}\n.info-grid .info-item.full-width {\n  grid-column: 1/-1;\n}\n.info-grid .info-item .info-label {\n  font-weight: 600;\n  color: var(--primary-dark);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.info-grid .info-item .info-label::before {\n  content: "";\n  width: 4px;\n  height: 14px;\n  background: var(--accent-gold);\n  border-radius: 2px;\n}\n.info-grid .info-item .info-value {\n  font-size: var(--font-size-base);\n  color: var(--neutral-medium);\n  font-weight: 500;\n}\n.reception-list-page {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n:host ::ng-deep .reception-filter-bar .filter-bar {\n  justify-content: flex-end;\n}\n:host ::ng-deep .reception-filter-bar .filter-bar__controls {\n  width: 100%;\n  justify-content: flex-end;\n  margin-inline-start: auto;\n}\n:host ::ng-deep .reception-filter-bar .filter-bar__search-wrap {\n  order: -1;\n}\n:host ::ng-deep .reception-filter-bar .filter-bar__search-wrap .pi-search {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n:host ::ng-deep .reception-filter-bar .filter-bar__search-input {\n  padding-right: 2rem;\n}\n:host ::ng-deep .reception-applicants-table .p-datatable-wrapper {\n  overflow-x: auto;\n  max-width: 100%;\n}\n:host ::ng-deep .reception-applicants-table .p-datatable-thead > tr > th {\n  background: var(--primary-dark);\n  color: #fff;\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  text-align: center;\n  white-space: nowrap;\n  padding: 0.6rem 0.5rem;\n}\n:host ::ng-deep .reception-applicants-table .p-datatable-tbody > tr > td {\n  font-size: var(--font-size-xs);\n  padding: 0.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n:host ::ng-deep .reception-applicants-table .p-datatable-tbody > tr:nth-child(even) {\n  background: #fafafa;\n}\n:host ::ng-deep .reception-applicants-table .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.04);\n}\n:host ::ng-deep .reception-applicants-table .p-datatable-emptymessage td {\n  border: none;\n  padding: var(--spacing-2xl);\n  text-align: center;\n  color: var(--neutral-medium);\n}\n.cell-text {\n  font-size: var(--font-size-xs);\n  color: var(--neutral-dark);\n}\n.cell-text--bold {\n  font-weight: 700;\n}\n.queue-badge {\n  display: inline-block;\n  min-width: 2.25rem;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  background: var(--primary-medium);\n  color: #fff;\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  line-height: 1.2;\n}\n.actions-wrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n}\n:host ::ng-deep .table-action-btn {\n  width: 2rem;\n  height: 2rem;\n}\n:host ::ng-deep .table-action-btn .p-button-label {\n  display: none;\n}\n:host ::ng-deep .tattoo-tag {\n  font-size: var(--font-size-xs);\n}\n.empty-state {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.empty-state__icon {\n  font-size: 2rem;\n  color: var(--neutral-medium);\n}\n/*# sourceMappingURL=applicants-list.css.map */\n'] }]
  }], () => [{ type: ApplicantService }, { type: ChangeDetectorRef }, { type: Router }, { type: BarcodePrintService }, { type: MessageService }, { type: ScrollService }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicantsList, { className: "ApplicantsList", filePath: "src/app/features/reception/components/applicants-list/applicants-list.ts", lineNumber: 35 });
})();
export {
  ApplicantsList
};
//# sourceMappingURL=chunk-KGVPMK7F.js.map
