import {
  CommonModule,
  NgForOf
} from "./chunk-7EG6WMAP.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-YTJKKLZA.js";

// src/app/shared/components/paginator/paginator.component.ts
function PaginatorComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", size_r1)("selected", size_r1 === ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r1, " ");
  }
}
var PaginatorComponent = class _PaginatorComponent {
  totalRecords = 0;
  pageSize = 10;
  currentPage = 1;
  pageChange = new EventEmitter();
  pageSizeChange = new EventEmitter();
  pageSizes = [5, 10, 25, 50, 100];
  get totalPages() {
    return Math.ceil(this.totalRecords / this.pageSize);
  }
  get startRecord() {
    return this.totalRecords === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }
  get endRecord() {
    return Math.min(this.currentPage * this.pageSize, this.totalRecords);
  }
  get hasPreviousPage() {
    return this.currentPage > 1;
  }
  get hasNextPage() {
    return this.currentPage < this.totalPages;
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
  prevPage() {
    if (this.hasPreviousPage) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
  nextPage() {
    if (this.hasNextPage) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
  changePageSize(event) {
    const value = +event.target.value;
    this.pageSizeChange.emit(value);
  }
  static \u0275fac = function PaginatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginatorComponent, selectors: [["app-paginator"]], inputs: { totalRecords: "totalRecords", pageSize: "pageSize", currentPage: "currentPage" }, outputs: { pageChange: "pageChange", pageSizeChange: "pageSizeChange" }, decls: 25, vars: 12, consts: [[1, "pagination-container", "my-3"], [1, "pagination-left"], [1, "page-info"], [1, "pagination-center"], [1, "page-navigation"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "fas", "fa-angles-right"], [1, "fas", "fa-chevron-right"], [1, "fas", "fa-chevron-left"], [1, "fas", "fa-angles-left"], [1, "pagination-right"], [1, "page-size-selector"], ["for", "pageSize"], ["id", "pageSize", 1, "page-size-dropdown", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function PaginatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "nav", 4)(6, "ul", 5)(7, "li", 6)(8, "button", 7);
      \u0275\u0275listener("click", function PaginatorComponent_Template_button_click_8_listener() {
        return ctx.goToPage(1);
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li", 6)(11, "button", 7);
      \u0275\u0275listener("click", function PaginatorComponent_Template_button_click_11_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li", 6)(14, "button", 7);
      \u0275\u0275listener("click", function PaginatorComponent_Template_button_click_14_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275element(15, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li", 6)(17, "button", 7);
      \u0275\u0275listener("click", function PaginatorComponent_Template_button_click_17_listener() {
        return ctx.goToPage(ctx.totalPages);
      });
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "label", 14);
      \u0275\u0275text(22, "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0648\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 15);
      \u0275\u0275listener("change", function PaginatorComponent_Template_select_change_23_listener($event) {
        return ctx.changePageSize($event);
      });
      \u0275\u0275template(24, PaginatorComponent_option_24_Template, 2, 3, "option", 16);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3(" ", ctx.startRecord, " - ", ctx.endRecord, " \u0645\u0646 ", ctx.totalRecords, " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("disabled", ctx.currentPage === 1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", !ctx.hasPreviousPage);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", !ctx.hasNextPage);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.pageSizes);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  direction: rtl;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex: 1;\n}\n.pagination-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n}\n.pagination-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n}\n.page-size-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  color: var(--neutral-dark);\n}\n.page-size-dropdown[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  padding: 5px;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--neutral-dark);\n}\n.page-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pagination[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 5px;\n  padding: 0;\n  margin: 0;\n}\n.page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background-color: #fff;\n  color: var(--primary-dark);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border-color: var(--primary-dark);\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #bbb;\n  cursor: not-allowed;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%], \n.page-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white !important;\n  border-color: var(--primary-dark);\n}\n.page-size-dropdown[_ngcontent-%COMP%]:hover, \n.page-size-dropdown[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n}\n/*# sourceMappingURL=paginator.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorComponent, [{
    type: Component,
    args: [{ selector: "app-paginator", imports: [CommonModule], standalone: true, template: '<div class="pagination-container my-3">\r\n  <!-- \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0635\u0641\u062D\u0629 \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631 -->\r\n  <div class="pagination-left">\r\n    <div class="page-info">\r\n      {{ startRecord }} - {{ endRecord }} \u0645\u0646 {{ totalRecords }}\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u062A\u0646\u0642\u0644 \u0641\u064A \u0627\u0644\u0648\u0633\u0637 -->\r\n  <div class="pagination-center">\r\n    <nav class="page-navigation">\r\n      <ul class="pagination">\r\n        <li class="page-item" [class.disabled]="currentPage === 1">\r\n          <button class="page-link" (click)="goToPage(1)">\r\n            <i class="fas fa-angles-right"></i> <!-- \u0628\u062F\u0627\u064A\u0629 -->\r\n          </button>\r\n        </li>\r\n        <li class="page-item" [class.disabled]="!hasPreviousPage">\r\n          <button class="page-link" (click)="prevPage()">\r\n            <i class="fas fa-chevron-right"></i> <!-- \u0627\u0644\u0633\u0627\u0628\u0642 -->\r\n          </button>\r\n        </li>\r\n        <li class="page-item" [class.disabled]="!hasNextPage">\r\n          <button class="page-link" (click)="nextPage()">\r\n            <i class="fas fa-chevron-left"></i> <!-- \u0627\u0644\u062A\u0627\u0644\u064A -->\r\n          </button>\r\n        </li>\r\n        <li class="page-item" [class.disabled]="currentPage === totalPages">\r\n          <button class="page-link" (click)="goToPage(totalPages)">\r\n            <i class="fas fa-angles-left"></i> <!-- \u0646\u0647\u0627\u064A\u0629 -->\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Page size \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646 -->\r\n  <div class="pagination-right">\r\n    <div class="page-size-selector">\r\n      <label for="pageSize">\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0648\u0641</label>\r\n      <select id="pageSize" (change)="changePageSize($event)" class="page-size-dropdown">\r\n        <option *ngFor="let size of pageSizes" [value]="size" [selected]="size === pageSize">\r\n          {{ size }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/shared/components/paginator/paginator.component.scss */\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  direction: rtl;\n}\n.pagination-left {\n  display: flex;\n  justify-content: flex-start;\n  flex: 1;\n}\n.pagination-center {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n}\n.pagination-right {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n}\n.page-size-selector {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  color: var(--neutral-dark);\n}\n.page-size-dropdown {\n  margin-right: 5px;\n  padding: 5px;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-info {\n  font-weight: bold;\n  color: var(--neutral-dark);\n}\n.page-navigation {\n  display: flex;\n  align-items: center;\n}\n.pagination {\n  list-style: none;\n  display: flex;\n  gap: 5px;\n  padding: 0;\n  margin: 0;\n}\n.page-item .page-link {\n  padding: 6px 12px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background-color: #fff;\n  color: var(--primary-dark);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.page-item .page-link:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border-color: var(--primary-dark);\n}\n.page-item.disabled .page-link {\n  color: #bbb;\n  cursor: not-allowed;\n}\n.page-item.active .page-link,\n.page-link.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white !important;\n  border-color: var(--primary-dark);\n}\n.page-size-dropdown:hover,\n.page-size-dropdown:focus {\n  border-color: var(--primary-medium) !important;\n}\n/*# sourceMappingURL=paginator.component.css.map */\n'] }]
  }], null, { totalRecords: [{
    type: Input
  }], pageSize: [{
    type: Input
  }], currentPage: [{
    type: Input
  }], pageChange: [{
    type: Output
  }], pageSizeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginatorComponent, { className: "PaginatorComponent", filePath: "src/app/shared/components/paginator/paginator.component.ts", lineNumber: 11 });
})();

export {
  PaginatorComponent
};
//# sourceMappingURL=chunk-SYMQ7THN.js.map
