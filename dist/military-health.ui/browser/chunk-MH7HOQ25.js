import {
  Dialog,
  DialogModule
} from "./chunk-5TBOZ7YP.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
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
  ɵɵclassMap,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YTJKKLZA.js";

// src/app/shared/components/dialog-wrapper/dialog-wrapper.component.ts
var _c0 = ["*", [["", "dialog-footer", ""]]];
var _c1 = ["*", "[dialog-footer]"];
var _c2 = (a0) => ({ width: a0 });
function DialogWrapperComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.iconClass);
  }
}
function DialogWrapperComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function DialogWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, DialogWrapperComponent_ng_template_1_Conditional_1_Template, 1, 2, "i", 5);
    \u0275\u0275elementStart(2, "div")(3, "h3", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DialogWrapperComponent_ng_template_1_Conditional_5_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.iconClass ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subtitle ? 5 : -1);
  }
}
function DialogWrapperComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function DialogWrapperComponent_Conditional_4_ng_template_0_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 11);
    \u0275\u0275listener("onClick", function DialogWrapperComponent_Conditional_4_ng_template_0_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r0.cancelLabel)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r0.confirmLabel)("severity", ctx_r0.confirmSeverity)("disabled", ctx_r0.confirmDisabled)("loading", ctx_r0.confirmLoading);
  }
}
function DialogWrapperComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DialogWrapperComponent_Conditional_4_ng_template_0_Template, 3, 6, "ng-template", 3);
  }
}
function DialogWrapperComponent_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function DialogWrapperComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DialogWrapperComponent_Conditional_5_ng_template_0_Template, 1, 0, "ng-template", 3);
  }
}
var DialogWrapperComponent = class _DialogWrapperComponent {
  visible = false;
  visibleChange = new EventEmitter();
  title = "";
  subtitle = "";
  icon = "";
  width = "32rem";
  modal = true;
  closable = true;
  dismissableMask = true;
  closeOnEscape = true;
  blockScroll = true;
  useDefaultFooter = true;
  cancelLabel = "\u0625\u0644\u063A\u0627\u0621";
  confirmLabel = "\u062A\u0623\u0643\u064A\u062F";
  confirmSeverity = "primary";
  confirmDisabled = false;
  confirmLoading = false;
  confirm = new EventEmitter();
  cancel = new EventEmitter();
  hide = new EventEmitter();
  get iconClass() {
    if (!this.icon) {
      return "";
    }
    return this.icon.includes("pi ") ? this.icon : `pi ${this.icon}`;
  }
  onVisibleChange(value) {
    this.visible = value;
    this.visibleChange.emit(value);
  }
  onHide() {
    this.hide.emit();
  }
  onCancel() {
    this.cancel.emit();
    this.onVisibleChange(false);
  }
  onConfirm() {
    this.confirm.emit();
  }
  static \u0275fac = function DialogWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogWrapperComponent, selectors: [["app-dialog-wrapper"]], inputs: { visible: "visible", title: "title", subtitle: "subtitle", icon: "icon", width: "width", modal: "modal", closable: "closable", dismissableMask: "dismissableMask", closeOnEscape: "closeOnEscape", blockScroll: "blockScroll", useDefaultFooter: "useDefaultFooter", cancelLabel: "cancelLabel", confirmLabel: "confirmLabel", confirmSeverity: "confirmSeverity", confirmDisabled: "confirmDisabled", confirmLoading: "confirmLoading" }, outputs: { visibleChange: "visibleChange", confirm: "confirm", cancel: "cancel", hide: "hide" }, ngContentSelectors: _c1, decls: 6, vars: 13, consts: [[3, "visibleChange", "onHide", "visible", "modal", "closable", "dismissableMask", "closeOnEscape", "blockScroll", "draggable", "resizable"], ["pTemplate", "header"], [1, "dialog-wrapper__content"], ["pTemplate", "footer"], [1, "dialog-wrapper__header"], [1, "dialog-wrapper__icon", 3, "class"], [1, "dialog-wrapper__title"], [1, "dialog-wrapper__subtitle"], [1, "dialog-wrapper__icon"], [1, "dialog-wrapper__footer"], ["severity", "secondary", 3, "onClick", "label", "outlined"], [3, "onClick", "label", "severity", "disabled", "loading"]], template: function DialogWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "p-dialog", 0);
      \u0275\u0275listener("visibleChange", function DialogWrapperComponent_Template_p_dialog_visibleChange_0_listener($event) {
        return ctx.onVisibleChange($event);
      })("onHide", function DialogWrapperComponent_Template_p_dialog_onHide_0_listener() {
        return ctx.onHide();
      });
      \u0275\u0275template(1, DialogWrapperComponent_ng_template_1_Template, 6, 3, "ng-template", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, DialogWrapperComponent_Conditional_4_Template, 1, 0, null, 3)(5, DialogWrapperComponent_Conditional_5_Template, 1, 0, null, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleMap(\u0275\u0275pureFunction1(11, _c2, ctx.width));
      \u0275\u0275property("visible", ctx.visible)("modal", ctx.modal)("closable", ctx.closable)("dismissableMask", ctx.dismissableMask)("closeOnEscape", ctx.closeOnEscape)("blockScroll", ctx.blockScroll)("draggable", false)("resizable", false);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.useDefaultFooter ? 4 : 5);
    }
  }, dependencies: [CommonModule, DialogModule, Dialog, PrimeTemplate, ButtonModule, Button], styles: ["\n\n.dialog-wrapper__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.dialog-wrapper__icon[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n}\n.dialog-wrapper__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n}\n.dialog-wrapper__subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.dialog-wrapper__content[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.dialog-wrapper__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n}\n/*# sourceMappingURL=dialog-wrapper.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogWrapperComponent, [{
    type: Component,
    args: [{ selector: "app-dialog-wrapper", standalone: true, imports: [CommonModule, DialogModule, ButtonModule], template: '<p-dialog\r\n  [visible]="visible"\r\n  [modal]="modal"\r\n  [closable]="closable"\r\n  [dismissableMask]="dismissableMask"\r\n  [closeOnEscape]="closeOnEscape"\r\n  [blockScroll]="blockScroll"\r\n  [draggable]="false"\r\n  [resizable]="false"\r\n  [style]="{ width: width }"\r\n  (visibleChange)="onVisibleChange($event)"\r\n  (onHide)="onHide()"\r\n>\r\n  <ng-template pTemplate="header">\r\n    <div class="dialog-wrapper__header">\r\n      @if (iconClass) {\r\n        <i class="dialog-wrapper__icon" [class]="iconClass"></i>\r\n      }\r\n      <div>\r\n        <h3 class="dialog-wrapper__title">{{ title }}</h3>\r\n        @if (subtitle) {\r\n          <p class="dialog-wrapper__subtitle">{{ subtitle }}</p>\r\n        }\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <div class="dialog-wrapper__content">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  @if (useDefaultFooter) {\r\n    <ng-template pTemplate="footer">\r\n      <div class="dialog-wrapper__footer">\r\n        <p-button\r\n          [label]="cancelLabel"\r\n          severity="secondary"\r\n          [outlined]="true"\r\n          (onClick)="onCancel()"\r\n        ></p-button>\r\n        <p-button\r\n          [label]="confirmLabel"\r\n          [severity]="confirmSeverity"\r\n          [disabled]="confirmDisabled"\r\n          [loading]="confirmLoading"\r\n          (onClick)="onConfirm()"\r\n        ></p-button>\r\n      </div>\r\n    </ng-template>\r\n  } @else {\r\n    <ng-template pTemplate="footer">\r\n      <ng-content select="[dialog-footer]"></ng-content>\r\n    </ng-template>\r\n  }\r\n</p-dialog>\r\n', styles: ["/* src/app/shared/components/dialog-wrapper/dialog-wrapper.component.scss */\n.dialog-wrapper__header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.dialog-wrapper__icon {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n}\n.dialog-wrapper__title {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n}\n.dialog-wrapper__subtitle {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.dialog-wrapper__content {\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.dialog-wrapper__footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n}\n/*# sourceMappingURL=dialog-wrapper.component.css.map */\n"] }]
  }], null, { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], icon: [{
    type: Input
  }], width: [{
    type: Input
  }], modal: [{
    type: Input
  }], closable: [{
    type: Input
  }], dismissableMask: [{
    type: Input
  }], closeOnEscape: [{
    type: Input
  }], blockScroll: [{
    type: Input
  }], useDefaultFooter: [{
    type: Input
  }], cancelLabel: [{
    type: Input
  }], confirmLabel: [{
    type: Input
  }], confirmSeverity: [{
    type: Input
  }], confirmDisabled: [{
    type: Input
  }], confirmLoading: [{
    type: Input
  }], confirm: [{
    type: Output
  }], cancel: [{
    type: Output
  }], hide: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogWrapperComponent, { className: "DialogWrapperComponent", filePath: "src/app/shared/components/dialog-wrapper/dialog-wrapper.component.ts", lineNumber: 13 });
})();

export {
  DialogWrapperComponent
};
//# sourceMappingURL=chunk-MH7HOQ25.js.map
