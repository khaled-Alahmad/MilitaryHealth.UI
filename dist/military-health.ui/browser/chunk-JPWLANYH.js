import {
  Tooltip,
  TooltipModule
} from "./chunk-ABC4ZTWT.js";
import {
  Button,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-YTJKKLZA.js";

// src/app/shared/components/action-buttons/action-buttons.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ActionButtonsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 2);
    \u0275\u0275listener("onClick", function ActionButtonsComponent_For_2_Template_p_button_onClick_0_listener() {
      const action_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onActionClick(action_r2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r2.iconOnly ? "" : action_r2.label)("icon", action_r2.icon)("size", ctx_r2.size)("severity", action_r2.severity || "secondary")("outlined", action_r2.outlined ?? true)("disabled", action_r2.disabled || false)("rounded", action_r2.rounded ?? ctx_r2.iconOnly)("text", action_r2.text ?? false)("styleClass", ctx_r2.getStyleClass(action_r2))("pTooltip", action_r2.tooltip || action_r2.label);
  }
}
var ActionButtonsComponent = class _ActionButtonsComponent {
  actions = [];
  size = "small";
  iconOnly = false;
  buttonClass = "";
  actionClick = new EventEmitter();
  get visibleActions() {
    return this.actions.filter((action) => action.visible !== false);
  }
  getStyleClass(action) {
    return [this.buttonClass, action.styleClass].filter(Boolean).join(" ");
  }
  onActionClick(actionId) {
    this.actionClick.emit(actionId);
  }
  static \u0275fac = function ActionButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionButtonsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionButtonsComponent, selectors: [["app-action-buttons"]], inputs: { actions: "actions", size: "size", iconOnly: "iconOnly", buttonClass: "buttonClass" }, outputs: { actionClick: "actionClick" }, decls: 3, vars: 0, consts: [[1, "action-buttons"], ["tooltipPosition", "top", 3, "label", "icon", "size", "severity", "outlined", "disabled", "rounded", "text", "styleClass", "pTooltip"], ["tooltipPosition", "top", 3, "onClick", "label", "icon", "size", "severity", "outlined", "disabled", "rounded", "text", "styleClass", "pTooltip"]], template: function ActionButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ActionButtonsComponent_For_2_Template, 1, 10, "p-button", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.visibleActions);
    }
  }, dependencies: [CommonModule, ButtonModule, Button, TooltipModule, Tooltip], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-xs);\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=action-buttons.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionButtonsComponent, [{
    type: Component,
    args: [{ selector: "app-action-buttons", standalone: true, imports: [CommonModule, ButtonModule, TooltipModule], template: `<div class="action-buttons">
  @for (action of visibleActions; track action.id) {
    <p-button
      [label]="iconOnly ? '' : action.label"
      [icon]="action.icon"
      [size]="size"
      [severity]="action.severity || 'secondary'"
      [outlined]="action.outlined ?? true"
      [disabled]="action.disabled || false"
      [rounded]="action.rounded ?? iconOnly"
      [text]="action.text ?? false"
      [styleClass]="getStyleClass(action)"
      [pTooltip]="action.tooltip || action.label"
      tooltipPosition="top"
      (onClick)="onActionClick(action.id)"
    ></p-button>
  }
</div>
`, styles: ["/* src/app/shared/components/action-buttons/action-buttons.component.scss */\n.action-buttons {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-xs);\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=action-buttons.component.css.map */\n"] }]
  }], null, { actions: [{
    type: Input
  }], size: [{
    type: Input
  }], iconOnly: [{
    type: Input
  }], buttonClass: [{
    type: Input
  }], actionClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionButtonsComponent, { className: "ActionButtonsComponent", filePath: "src/app/shared/components/action-buttons/action-buttons.component.ts", lineNumber: 27 });
})();

export {
  ActionButtonsComponent
};
//# sourceMappingURL=chunk-JPWLANYH.js.map
