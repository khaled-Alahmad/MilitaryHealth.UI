import {
  ButtonDirective,
  ButtonModule
} from "./chunk-R2DZOQST.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YTJKKLZA.js";

// src/app/shared/components/reset-filters-button/reset-filters-button.component.ts
var ResetFiltersButtonComponent = class _ResetFiltersButtonComponent {
  disabled = false;
  label = "";
  reset = new EventEmitter();
  onReset() {
    if (!this.disabled) {
      this.reset.emit();
    }
  }
  static \u0275fac = function ResetFiltersButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetFiltersButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetFiltersButtonComponent, selectors: [["app-reset-filters-button"]], inputs: { disabled: "disabled", label: "label" }, outputs: { reset: "reset" }, decls: 4, vars: 2, consts: [["type", "button", "pButton", "", "pRipple", "", 1, "p-button-outlined", "p-button-secondary", "p-button-sm", "filter-reset-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "pi", "pi-filter-slash"], [1, "filter-reset-label"]], template: function ResetFiltersButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ResetFiltersButtonComponent_Template_button_click_0_listener() {
        return ctx.onReset();
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("disabled", ctx.disabled);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.label);
    }
  }, dependencies: [CommonModule, ButtonModule, ButtonDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.filter-reset-btn[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding: 0.45rem 1.15rem !important;\n  min-height: 2.45rem;\n  border-radius: var(--radius-xl);\n  border-width: 1.5px !important;\n  border-color: rgba(5, 66, 57, 0.4) !important;\n  color: var(--neutral-medium) !important;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(240, 248, 247, 0.9)) !important;\n  box-shadow: 0 6px 18px rgba(5, 66, 57, 0.12);\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    background-color 0.15s ease,\n    border-color 0.15s ease;\n}\n.filter-reset-btn[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.filter-reset-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: var(--primary-dark);\n  white-space: nowrap;\n}\n.filter-reset-btn[_ngcontent-%COMP%]:hover:not(:disabled), \n.filter-reset-btn[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 10px 24px rgba(5, 66, 57, 0.22);\n  transform: translateY(-1.5px);\n}\n.filter-reset-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 4px 14px rgba(5, 66, 57, 0.16);\n}\n.filter-reset-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed !important;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .filter-reset-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=reset-filters-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetFiltersButtonComponent, [{
    type: Component,
    args: [{ selector: "app-reset-filters-button", standalone: true, imports: [CommonModule, ButtonModule], template: `
    <button
      type="button"
      pButton
      pRipple
      class="p-button-outlined p-button-secondary p-button-sm filter-reset-btn"
      [disabled]="disabled"
      (click)="onReset()"
    >
      <i class="pi pi-filter-slash" aria-hidden="true"></i>
      <span class="filter-reset-label">{{ label }}</span>
    </button>
  `, styles: ["/* src/app/shared/components/reset-filters-button/reset-filters-button.component.scss */\n:host {\n  display: inline-flex;\n}\n.filter-reset-btn {\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding: 0.45rem 1.15rem !important;\n  min-height: 2.45rem;\n  border-radius: var(--radius-xl);\n  border-width: 1.5px !important;\n  border-color: rgba(5, 66, 57, 0.4) !important;\n  color: var(--neutral-medium) !important;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(240, 248, 247, 0.9)) !important;\n  box-shadow: 0 6px 18px rgba(5, 66, 57, 0.12);\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    background-color 0.15s ease,\n    border-color 0.15s ease;\n}\n.filter-reset-btn .pi {\n  font-size: 1rem;\n}\n.filter-reset-label {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: var(--primary-dark);\n  white-space: nowrap;\n}\n.filter-reset-btn:hover:not(:disabled),\n.filter-reset-btn:focus-visible {\n  box-shadow: 0 10px 24px rgba(5, 66, 57, 0.22);\n  transform: translateY(-1.5px);\n}\n.filter-reset-btn:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 4px 14px rgba(5, 66, 57, 0.16);\n}\n.filter-reset-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed !important;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .filter-reset-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=reset-filters-button.component.css.map */\n"] }]
  }], null, { disabled: [{
    type: Input
  }], label: [{
    type: Input
  }], reset: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetFiltersButtonComponent, { className: "ResetFiltersButtonComponent", filePath: "src/app/shared/components/reset-filters-button/reset-filters-button.component.ts", lineNumber: 24 });
})();

export {
  ResetFiltersButtonComponent
};
//# sourceMappingURL=chunk-3GLFOEUA.js.map
