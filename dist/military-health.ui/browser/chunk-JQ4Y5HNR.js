import {
  CommonModule
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YTJKKLZA.js";

// src/app/shared/components/page-header/page-header.component.ts
var _c0 = [[["", "header-actions", ""]]];
var _c1 = ["[header-actions]"];
function PageHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.iconClass);
  }
}
function PageHeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
var PageHeaderComponent = class _PageHeaderComponent {
  title = "";
  subtitle = "";
  icon = "";
  /** 'default' | 'banner' — banner shows gradient background and white text */
  variant = "default";
  get iconClass() {
    if (!this.icon) {
      return "";
    }
    return this.icon.includes("pi ") ? this.icon : `pi ${this.icon}`;
  }
  static \u0275fac = function PageHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: "title", subtitle: "subtitle", icon: "icon", variant: "variant" }, ngContentSelectors: _c1, decls: 9, vars: 5, consts: [[1, "page-header"], [1, "page-header__content"], ["aria-hidden", "true", 3, "class"], [1, "page-header__title"], [1, "page-header__subtitle"], [1, "page-header__actions"], ["aria-hidden", "true"]], template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, PageHeaderComponent_Conditional_2_Template, 1, 2, "i", 2);
      \u0275\u0275domElementStart(3, "div")(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, PageHeaderComponent_Conditional_6_Template, 2, 1, "p", 4);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5);
      \u0275\u0275projection(8);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("page-header--banner", ctx.variant === "banner");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.icon ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle ? 6 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n}\n.page-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.page-header__content[_ngcontent-%COMP%]    > .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: var(--font-size-xl);\n}\n.page-header__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-xl);\n  color: var(--primary-dark);\n}\n.page-header__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.page-header--banner[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  margin-bottom: var(--spacing-2xl);\n}\n.page-header--banner[_ngcontent-%COMP%]   .page-header__title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n}\n.page-header--banner[_ngcontent-%COMP%]   .page-header__subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.page-header--banner[_ngcontent-%COMP%]   .page-header__content[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n/*# sourceMappingURL=page-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-page-header", standalone: true, imports: [CommonModule], template: `<div class="page-header" [class.page-header--banner]="variant === 'banner'">\r
  <div class="page-header__content">\r
    @if (icon) {\r
      <i [class]="iconClass" aria-hidden="true"></i>\r
    }\r
    <div>\r
      <h2 class="page-header__title">{{ title }}</h2>\r
      @if (subtitle) {\r
        <p class="page-header__subtitle">{{ subtitle }}</p>\r
      }\r
    </div>\r
  </div>\r
  <div class="page-header__actions">\r
    <ng-content select="[header-actions]"></ng-content>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/components/page-header/page-header.component.scss */\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n}\n.page-header__content {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.page-header__content > .pi {\n  color: var(--accent-gold);\n  font-size: var(--font-size-xl);\n}\n.page-header__title {\n  margin: 0;\n  font-size: var(--font-size-xl);\n  color: var(--primary-dark);\n}\n.page-header__subtitle {\n  margin: 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.page-header__actions {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.page-header--banner {\n  padding: var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  margin-bottom: var(--spacing-2xl);\n}\n.page-header--banner .page-header__title {\n  color: white;\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n}\n.page-header--banner .page-header__subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.page-header--banner .page-header__content .pi {\n  color: var(--accent-gold);\n}\n/*# sourceMappingURL=page-header.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], icon: [{
    type: Input
  }], variant: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src/app/shared/components/page-header/page-header.component.ts", lineNumber: 11 });
})();

export {
  PageHeaderComponent
};
//# sourceMappingURL=chunk-JQ4Y5HNR.js.map
