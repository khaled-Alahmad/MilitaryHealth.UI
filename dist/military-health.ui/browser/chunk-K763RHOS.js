import {
  ResetFiltersButtonComponent
} from "./chunk-3GLFOEUA.js";
import {
  InputText,
  InputTextModule
} from "./chunk-SXOA2P4M.js";
import {
  CommonModule
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-YTJKKLZA.js";

// src/app/shared/components/filter-bar/filter-bar.component.ts
var _c0 = [[["", "extra-filters", ""]]];
var _c1 = ["[extra-filters]"];
function FilterBarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reset-filters-button", 7);
    \u0275\u0275listener("reset", function FilterBarComponent_Conditional_4_Template_app_reset_filters_button_reset_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled || ctx_r1.loading);
  }
}
var FilterBarComponent = class _FilterBarComponent {
  searchValue = "";
  searchPlaceholder = "\u0627\u0628\u062D\u062B...";
  showReset = true;
  disabled = false;
  loading = false;
  showSearchHint = true;
  searchChange = new EventEmitter();
  reset = new EventEmitter();
  onSearchInput(event) {
    const value = event.target.value;
    this.searchChange.emit(value);
  }
  static \u0275fac = function FilterBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterBarComponent, selectors: [["app-filter-bar"]], inputs: { searchValue: "searchValue", searchPlaceholder: "searchPlaceholder", showReset: "showReset", disabled: "disabled", loading: "loading", showSearchHint: "showSearchHint" }, outputs: { searchChange: "searchChange", reset: "reset" }, ngContentSelectors: _c1, decls: 8, vars: 4, consts: [[1, "filter-bar"], [1, "filter-bar__extras"], [1, "filter-bar__controls"], [3, "disabled"], [1, "p-input-icon-right", "filter-bar__search-wrap"], ["aria-hidden", "true", 1, "pi", "pi-search"], ["pInputText", "", "type", "text", 1, "filter-bar__search-input", 3, "input", "disabled", "value", "placeholder"], [3, "reset", "disabled"]], template: function FilterBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275conditionalCreate(4, FilterBarComponent_Conditional_4_Template, 1, 1, "app-reset-filters-button", 3);
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementStart(7, "input", 6);
      \u0275\u0275listener("input", function FilterBarComponent_Template_input_input_7_listener($event) {
        return ctx.onSearchInput($event);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showReset ? 4 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.disabled || ctx.loading)("value", ctx.searchValue)("placeholder", ctx.searchPlaceholder);
    }
  }, dependencies: [CommonModule, InputTextModule, InputText, ResetFiltersButtonComponent], styles: ["\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  margin-bottom: var(--spacing-md);\n}\n.filter-bar__extras[_ngcontent-%COMP%], \n.filter-bar__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.filter-bar__extras[_ngcontent-%COMP%] {\n  margin-inline-end: auto;\n}\n.filter-bar__controls[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n.filter-bar__search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.filter-bar__search-wrap[_ngcontent-%COMP%]   .pi-search[_ngcontent-%COMP%] {\n  right: 0.75rem;\n  color: var(--primary-medium);\n  font-size: 0.9rem;\n}\n.filter-bar__search-input[_ngcontent-%COMP%] {\n  min-width: 280px;\n  border-radius: var(--radius-md);\n  padding-inline-start: 0.75rem;\n  padding-inline-end: 2rem;\n  border-color: rgba(0, 0, 0, 0.14);\n}\n.filter-bar__search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 2px rgba(66, 129, 119, 0.15);\n}\n@media (max-width: 768px) {\n  .filter-bar__extras[_ngcontent-%COMP%], \n   .filter-bar__controls[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-bar__controls[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .filter-bar__search-input[_ngcontent-%COMP%] {\n    min-width: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=filter-bar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterBarComponent, [{
    type: Component,
    args: [{ selector: "app-filter-bar", standalone: true, imports: [CommonModule, InputTextModule, ResetFiltersButtonComponent], template: '<div class="filter-bar">\n  <div class="filter-bar__extras">\n    <ng-content select="[extra-filters]"></ng-content>\n  </div>\n\n  <div class="filter-bar__controls">\n    @if (showReset) {\n      <app-reset-filters-button [disabled]="disabled || loading" (reset)="reset.emit()"></app-reset-filters-button>\n    }\n    <span class="p-input-icon-right filter-bar__search-wrap">\n      <i class="pi pi-search" aria-hidden="true"></i>\n      <input\n        pInputText\n        type="text"\n        class="filter-bar__search-input"\n        [disabled]="disabled || loading"\n        [value]="searchValue"\n        [placeholder]="searchPlaceholder"\n        (input)="onSearchInput($event)"\n      />\n    </span>\n  </div>\n</div>\n', styles: ["/* src/app/shared/components/filter-bar/filter-bar.component.scss */\n.filter-bar {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  margin-bottom: var(--spacing-md);\n}\n.filter-bar__extras,\n.filter-bar__controls {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.filter-bar__extras {\n  margin-inline-end: auto;\n}\n.filter-bar__controls {\n  margin-inline-start: auto;\n}\n.filter-bar__search-wrap {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.filter-bar__search-wrap .pi-search {\n  right: 0.75rem;\n  color: var(--primary-medium);\n  font-size: 0.9rem;\n}\n.filter-bar__search-input {\n  min-width: 280px;\n  border-radius: var(--radius-md);\n  padding-inline-start: 0.75rem;\n  padding-inline-end: 2rem;\n  border-color: rgba(0, 0, 0, 0.14);\n}\n.filter-bar__search-input:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 2px rgba(66, 129, 119, 0.15);\n}\n@media (max-width: 768px) {\n  .filter-bar__extras,\n  .filter-bar__controls {\n    width: 100%;\n  }\n  .filter-bar__controls {\n    justify-content: flex-end;\n  }\n  .filter-bar__search-input {\n    min-width: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=filter-bar.component.css.map */\n"] }]
  }], null, { searchValue: [{
    type: Input
  }], searchPlaceholder: [{
    type: Input
  }], showReset: [{
    type: Input
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], showSearchHint: [{
    type: Input
  }], searchChange: [{
    type: Output
  }], reset: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterBarComponent, { className: "FilterBarComponent", filePath: "src/app/shared/components/filter-bar/filter-bar.component.ts", lineNumber: 13 });
})();

export {
  FilterBarComponent
};
//# sourceMappingURL=chunk-K763RHOS.js.map
