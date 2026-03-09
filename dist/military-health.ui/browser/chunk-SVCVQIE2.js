import {
  Card,
  CardModule
} from "./chunk-MSHWPF4R.js";
import {
  Toast,
  ToastModule
} from "./chunk-HZN3FIAV.js";
import {
  PageHeaderComponent
} from "./chunk-JQ4Y5HNR.js";
import {
  Tag,
  TagModule
} from "./chunk-NJ7ILR2W.js";
import {
  BarcodePrintService
} from "./chunk-QUEHRW3Q.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import "./chunk-2VRBHK6C.js";
import {
  MaritalStatusService
} from "./chunk-NYSGGAWF.js";
import {
  ApplicantService
} from "./chunk-LBNMWMAA.js";
import {
  GregorianDatePipe
} from "./chunk-M5RFJNTA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  NgIf
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
    \u0275\u0275property("label", action_r2.label)("icon", action_r2.icon)("size", ctx_r2.size)("severity", action_r2.severity || "secondary")("outlined", action_r2.outlined ?? true)("disabled", action_r2.disabled || false)("pTooltip", action_r2.tooltip || action_r2.label);
  }
}
var ActionButtonsComponent = class _ActionButtonsComponent {
  actions = [];
  size = "small";
  actionClick = new EventEmitter();
  onActionClick(actionId) {
    this.actionClick.emit(actionId);
  }
  static \u0275fac = function ActionButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionButtonsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionButtonsComponent, selectors: [["app-action-buttons"]], inputs: { actions: "actions", size: "size" }, outputs: { actionClick: "actionClick" }, decls: 3, vars: 0, consts: [[1, "action-buttons"], ["tooltipPosition", "top", 3, "label", "icon", "size", "severity", "outlined", "disabled", "pTooltip"], ["tooltipPosition", "top", 3, "onClick", "label", "icon", "size", "severity", "outlined", "disabled", "pTooltip"]], template: function ActionButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ActionButtonsComponent_For_2_Template, 1, 7, "p-button", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.actions);
    }
  }, dependencies: [CommonModule, ButtonModule, Button, TooltipModule, Tooltip], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-xs);\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=action-buttons.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionButtonsComponent, [{
    type: Component,
    args: [{ selector: "app-action-buttons", standalone: true, imports: [CommonModule, ButtonModule, TooltipModule], template: `<div class="action-buttons">
  @for (action of actions; track action.id) {
    <p-button
      [label]="action.label"
      [icon]="action.icon"
      [size]="size"
      [severity]="action.severity || 'secondary'"
      [outlined]="action.outlined ?? true"
      [disabled]="action.disabled || false"
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
  }], actionClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionButtonsComponent, { className: "ActionButtonsComponent", filePath: "src/app/shared/components/action-buttons/action-buttons.component.ts", lineNumber: 23 });
})();

// src/app/features/reception/components/applicant-details/applicant-details.ts
function ApplicantDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantDetailsComponent_p_card_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "h3", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx_r0.applicant.fileNumber);
  }
}
function ApplicantDetailsComponent_p_card_6_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 18);
    \u0275\u0275text(2, "\u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.applicant.tattooDescription);
  }
}
function ApplicantDetailsComponent_p_card_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 10);
    \u0275\u0275template(1, ApplicantDetailsComponent_p_card_6_ng_template_1_Template, 8, 2, "ng-template", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "h4", 14);
    \u0275\u0275element(5, "i", 15);
    \u0275\u0275text(6, " \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 17)(9, "span", 18);
    \u0275\u0275text(10, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 19);
    \u0275\u0275element(12, "p-tag", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "span", 18);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 19);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 17)(19, "span", 18);
    \u0275\u0275text(20, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 19);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 17)(24, "span", 18);
    \u0275\u0275text(25, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 19);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 17)(30, "span", 18);
    \u0275\u0275text(31, "\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 19);
    \u0275\u0275element(33, "p-tag", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17)(35, "span", 18);
    \u0275\u0275text(36, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 19);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 17)(40, "span", 18);
    \u0275\u0275text(41, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 19);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 17)(45, "span", 18);
    \u0275\u0275text(46, "\u0627\u0644\u0639\u0645\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 19);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 17)(50, "span", 18);
    \u0275\u0275text(51, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 19);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 17)(55, "span", 18);
    \u0275\u0275text(56, "\u0648\u062C\u0648\u062F \u0648\u0634\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 19);
    \u0275\u0275element(58, "p-tag", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, ApplicantDetailsComponent_p_card_6_div_59_Template, 5, 1, "div", 23);
    \u0275\u0275elementStart(60, "div", 24)(61, "span", 18);
    \u0275\u0275text(62, "\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 19);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "h4", 25);
    \u0275\u0275element(66, "i", 26);
    \u0275\u0275text(67, " \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 16)(69, "div", 17)(70, "span", 18);
    \u0275\u0275text(71, "\u0627\u0644\u0637\u0648\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 19);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 17)(75, "span", 18);
    \u0275\u0275text(76, "\u0627\u0644\u0648\u0632\u0646:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 19);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 17)(80, "span", 18);
    \u0275\u0275text(81, "BMI:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 19);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 17)(85, "span", 18);
    \u0275\u0275text(86, "\u0636\u063A\u0637 \u0627\u0644\u062F\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 19);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 17)(90, "span", 18);
    \u0275\u0275text(91, "\u0627\u0644\u0646\u0628\u0636:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 19);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("value", (ctx_r0.applicant.queueNumber == null ? null : ctx_r0.applicant.queueNumber.toString()) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.fullName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.motherName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 18, ctx_r0.applicant.dateOfBirth, "yyyy/MM/dd"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.applicant.bloodType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.recruitmentCenter || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getMaritalStatusDescription(ctx_r0.applicant.maritalStatusID) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.job || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.associateNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.applicant.tattoo ? "\u0646\u0639\u0645" : "\u0644\u0627")("severity", ctx_r0.applicant.tattoo ? "warn" : "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.applicant.tattooDescription);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.distinctiveMarks || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.applicant.height || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.weight || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.applicant.bmi == null ? null : ctx_r0.applicant.bmi.toFixed(1)) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.bloodPressure || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.applicant.pulse == null ? null : ctx_r0.applicant.pulse.toString()) || "-");
  }
}
function ApplicantDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementStart(2, "p", 34);
    \u0275\u0275text(3, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
    \u0275\u0275elementEnd()();
  }
}
var ApplicantDetailsComponent = class _ApplicantDetailsComponent {
  route;
  router;
  applicantService;
  messageService;
  maritalStatusService;
  barcodePrintService;
  applicant = null;
  loading = false;
  fileNumber = "";
  maritalStatuses = [];
  get headerActions() {
    const disabled = !this.applicant || this.loading;
    return [
      { id: "back", label: "\u0631\u062C\u0648\u0639", icon: "pi pi-arrow-right", severity: "secondary", outlined: true },
      { id: "print", label: "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644", icon: "pi pi-print", severity: "info", outlined: false, disabled, tooltip: "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644" },
      { id: "edit", label: "\u062A\u0639\u062F\u064A\u0644", icon: "pi pi-pencil", severity: "success", outlined: false, disabled, tooltip: "\u062A\u0639\u062F\u064A\u0644" }
    ];
  }
  constructor(route, router, applicantService, messageService, maritalStatusService, barcodePrintService) {
    this.route = route;
    this.router = router;
    this.applicantService = applicantService;
    this.messageService = messageService;
    this.maritalStatusService = maritalStatusService;
    this.barcodePrintService = barcodePrintService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const fileNumber = params.get("fileNumber");
      if (fileNumber) {
        this.fileNumber = fileNumber;
        this.loadApplicant(fileNumber);
      }
    });
    this.loadMaritalStatuses();
  }
  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => this.maritalStatuses = data,
      error: () => {
      }
    });
  }
  loadApplicant(fileNumber) {
    this.loading = true;
    this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
      next: (data) => {
        this.applicant = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: "\u062E\u0637\u0623",
          detail: "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628"
        });
      }
    });
  }
  onHeaderAction(actionId) {
    if (actionId === "back")
      this.goBack();
    else if (actionId === "print")
      this.printReceipt();
    else if (actionId === "edit")
      this.editApplicant();
  }
  editApplicant() {
    if (!this.applicant?.applicantID) {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u0646\u0628\u064A\u0647",
        detail: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 - \u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"
      });
      return;
    }
    this.router.navigate(["reception", "applicants", this.applicant.applicantID]);
  }
  getMaritalStatusDescription(maritalStatusID) {
    const status = this.maritalStatuses.find((s) => s.maritalStatusID === maritalStatusID);
    return status?.description || "";
  }
  goBack() {
    this.router.navigate(["reception/applicants"]);
  }
  printReceipt() {
    if (!this.applicant) {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u062D\u0630\u064A\u0631",
        detail: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646\u062A\u0633\u0628 \u0644\u0644\u0637\u0628\u0627\u0639\u0629"
      });
      return;
    }
    if (this.applicant.applicantID) {
      this.applicantService.getApplicantById$(this.applicant.applicantID).subscribe({
        next: (fullApplicantData) => {
          this.barcodePrintService.printBarcodeReceipt(fullApplicantData).catch(() => {
            this.messageService.add({
              severity: "error",
              summary: "\u062E\u0637\u0623",
              detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
            });
          });
        },
        error: () => {
          const applicantForPrint = {
            applicantID: this.applicant.applicantID,
            fileNumber: this.applicant.fileNumber,
            fullName: this.applicant.fullName,
            motherName: this.applicant.motherName,
            dateOfBirth: this.applicant.dateOfBirth,
            recruitmentCenter: this.applicant.recruitmentCenter,
            bloodType: this.applicant.bloodType,
            queueNumber: this.applicant.queueNumber,
            maritalStatusID: this.applicant.maritalStatusID,
            job: this.applicant.job,
            height: this.applicant.height,
            weight: this.applicant.weight,
            bmi: this.applicant.bmi,
            bloodPressure: this.applicant.bloodPressure,
            pulse: this.applicant.pulse,
            tattoo: this.applicant.tattoo,
            distinctiveMarks: this.applicant.distinctiveMarks,
            associateNumber: this.applicant.associateNumber || "",
            maritalStatus: { maritalStatusID: this.applicant.maritalStatusID, description: "" }
          };
          this.barcodePrintService.printBarcodeReceipt(applicantForPrint).catch(() => {
            this.messageService.add({
              severity: "error",
              summary: "\u062E\u0637\u0623",
              detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
            });
          });
        }
      });
    } else {
      const applicantForPrint = {
        applicantID: this.applicant.applicantID,
        fileNumber: this.applicant.fileNumber,
        fullName: this.applicant.fullName,
        motherName: this.applicant.motherName,
        dateOfBirth: this.applicant.dateOfBirth,
        recruitmentCenter: this.applicant.recruitmentCenter,
        bloodType: this.applicant.bloodType,
        queueNumber: this.applicant.queueNumber,
        maritalStatusID: this.applicant.maritalStatusID,
        job: this.applicant.job,
        height: this.applicant.height,
        weight: this.applicant.weight,
        bmi: this.applicant.bmi,
        bloodPressure: this.applicant.bloodPressure,
        pulse: this.applicant.pulse,
        tattoo: this.applicant.tattoo,
        distinctiveMarks: this.applicant.distinctiveMarks,
        associateNumber: this.applicant.associateNumber || "",
        maritalStatus: { maritalStatusID: this.applicant.maritalStatusID, description: "" }
      };
      this.barcodePrintService.printBarcodeReceipt(applicantForPrint).catch(() => {
        this.messageService.add({
          severity: "error",
          summary: "\u062E\u0637\u0623",
          detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
        });
      });
    }
  }
  static \u0275fac = function ApplicantDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicantDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(MaritalStatusService), \u0275\u0275directiveInject(BarcodePrintService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicantDetailsComponent, selectors: [["app-applicant-details"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 9, vars: 4, consts: [[1, "reception-page"], [1, "container-fluid", "py-4"], ["title", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628", "icon", "pi pi-user"], ["header-actions", ""], ["size", "large", 3, "actionClick", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["styleClass", "reception-details-card", 4, "ngIf"], [1, "text-center", "py-5"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "mt-3"], ["styleClass", "reception-details-card"], ["pTemplate", "header"], [1, "card-body"], [1, "info-section"], [1, "section-title"], [1, "pi", "pi-id-card", "ms-2"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["severity", "info", 3, "value"], ["severity", "danger", 3, "value"], [3, "value", "severity"], ["class", "info-item full-width", 4, "ngIf"], [1, "info-item", "full-width"], [1, "section-title", "mt-4"], [1, "pi", "pi-heartbeat", "ms-2"], [1, "details-card-header"], [1, "details-card-header__icon"], ["aria-hidden", "true", 1, "pi", "pi-user"], [1, "details-card-header__text"], [1, "details-card-header__title"], [1, "details-card-header__subtitle"], [1, "pi", "pi-exclamation-triangle", "text-muted", 2, "font-size", "3rem"], [1, "mt-3", "text-muted"]], template: function ApplicantDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-page-header", 2)(3, "div", 3)(4, "app-action-buttons", 4);
      \u0275\u0275listener("actionClick", function ApplicantDetailsComponent_Template_app_action_buttons_actionClick_4_listener($event) {
        return ctx.onHeaderAction($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(5, ApplicantDetailsComponent_div_5_Template, 4, 0, "div", 5)(6, ApplicantDetailsComponent_p_card_6_Template, 94, 21, "p-card", 6)(7, ApplicantDetailsComponent_div_7_Template, 4, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "p-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("actions", ctx.headerActions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading && !ctx.applicant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.applicant && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.applicant && !ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    CardModule,
    Card,
    PrimeTemplate,
    ToastModule,
    Toast,
    TagModule,
    Tag,
    PageHeaderComponent,
    ActionButtonsComponent,
    GregorianDatePipe
  ], styles: ['\n\n.reception-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.reception-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  margin: 0 0 var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  transition: box-shadow var(--transition-fast);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-dark);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 14px;\n  background: var(--accent-gold);\n  border-radius: 2px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--neutral-medium);\n  font-weight: 500;\n}\n.reception-list-page[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n[_nghost-%COMP%]     .reception-details-card .p-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  padding: 0;\n}\n.details-card-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n}\n.details-card-header__icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details-card-header__icon[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  color: var(--accent-gold);\n}\n.details-card-header__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.details-card-header__title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 var(--spacing-xs) 0;\n  color: white;\n}\n.details-card-header__subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  opacity: 0.9;\n  margin: 0;\n}\n[_nghost-%COMP%]     .reception-details-card .p-card-body {\n  padding: var(--spacing-2xl);\n}\n@media (max-width: 768px) {\n  .details-card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=applicant-details.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicantDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-applicant-details", standalone: true, imports: [
      CommonModule,
      GregorianDatePipe,
      CardModule,
      ToastModule,
      TagModule,
      PageHeaderComponent,
      ActionButtonsComponent
    ], providers: [MessageService], template: `<div class="reception-page">
  <div class="container-fluid py-4">
    <app-page-header
      title="\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628"
      icon="pi pi-user">
      <div header-actions>
        <app-action-buttons
          [actions]="headerActions"
          size="large"
          (actionClick)="onHeaderAction($event)">
        </app-action-buttons>
      </div>
    </app-page-header>

    <!-- Loading -->
    <div *ngIf="loading && !applicant" class="text-center py-5">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
      <p class="mt-3">\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...</p>
    </div>

    <p-card *ngIf="applicant && !loading" styleClass="reception-details-card">
      <ng-template pTemplate="header">
        <div class="details-card-header">
          <div class="details-card-header__icon">
            <i class="pi pi-user" aria-hidden="true"></i>
          </div>
          <div class="details-card-header__text">
            <h3 class="details-card-header__title">{{ applicant.fullName }}</h3>
            <p class="details-card-header__subtitle">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ applicant.fileNumber }}</p>
          </div>
        </div>
      </ng-template>

      <div class="card-body">
        <div class="info-section">
          <h4 class="section-title">
            <i class="pi pi-id-card ms-2"></i>
            \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629
          </h4>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631:</span>
              <span class="info-value">
                <p-tag [value]="applicant.queueNumber?.toString() || '-'" severity="info"></p-tag>
              </span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644:</span>
              <span class="info-value">{{ applicant.fullName || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0627\u0633\u0645 \u0627\u0644\u0623\u0645:</span>
              <span class="info-value">{{ applicant.motherName || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F:</span>
              <span class="info-value">
                {{ applicant.dateOfBirth | gregorianDate:'yyyy/MM/dd' }}
              </span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645:</span>
              <span class="info-value">
                <p-tag [value]="applicant.bloodType || '-'" severity="danger"></p-tag>
              </span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F:</span>
              <span class="info-value">{{ applicant.recruitmentCenter || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629:</span>
              <span class="info-value">{{ getMaritalStatusDescription(applicant.maritalStatusID) || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0627\u0644\u0639\u0645\u0644:</span>
              <span class="info-value">{{ applicant.job || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628:</span>
              <span class="info-value">{{ applicant.associateNumber || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0648\u062C\u0648\u062F \u0648\u0634\u0645:</span>
              <span class="info-value">
                <p-tag [value]="applicant.tattoo ? '\u0646\u0639\u0645' : '\u0644\u0627'" [severity]="applicant.tattoo ? 'warn' : 'success'">
                </p-tag>
              </span>
            </div>
            <div class="info-item full-width" *ngIf="applicant.tattooDescription">
              <span class="info-label">\u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645:</span>
              <span class="info-value">{{ applicant.tattooDescription }}</span>
            </div>
            <div class="info-item full-width">
              <span class="info-label">\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629:</span>
              <span class="info-value">{{ applicant.distinctiveMarks || '-' }}</span>
            </div>
          </div>
          <h4 class="section-title mt-4">
            <i class="pi pi-heartbeat ms-2"></i>
            \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629
          </h4>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">\u0627\u0644\u0637\u0648\u0644:</span>
              <span class="info-value">{{ applicant.height || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0627\u0644\u0648\u0632\u0646:</span>
              <span class="info-value">{{ applicant.weight || '-' }}</span>
            </div>
         
            <div class="info-item">
              <span class="info-label">BMI:</span>
              <span class="info-value">{{ applicant.bmi?.toFixed(1) || '-' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">\u0636\u063A\u0637 \u0627\u0644\u062F\u0645:</span>
              <span class="info-value">{{ applicant.bloodPressure || '-' }}</span>
            </div>
        
            <div class="info-item">
              <span class="info-label">\u0627\u0644\u0646\u0628\u0636:</span>
              <span class="info-value">{{ applicant.pulse?.toString() || '-' }}</span>
            </div>


          </div>
        </div>
      </div>
    </p-card>

    <!-- No Data -->
    <div *ngIf="!applicant && !loading" class="text-center py-5">
      <i class="pi pi-exclamation-triangle text-muted" style="font-size: 3rem;"></i>
      <p class="mt-3 text-muted">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628</p>
    </div>
  </div>

  <p-toast></p-toast>
</div>`, styles: ['/* src/app/features/reception/components/applicant-details/applicant-details.scss */\n.reception-page {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.reception-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.info-section {\n  margin-bottom: var(--spacing-xl);\n}\n.info-section .section-title {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  margin: 0 0 var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.info-section .section-title .pi {\n  color: var(--accent-gold);\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  transition: box-shadow var(--transition-fast);\n}\n.info-grid .info-item:hover {\n  box-shadow: var(--shadow-sm);\n}\n.info-grid .info-item.full-width {\n  grid-column: 1/-1;\n}\n.info-grid .info-item .info-label {\n  font-weight: 600;\n  color: var(--primary-dark);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.info-grid .info-item .info-label::before {\n  content: "";\n  width: 4px;\n  height: 14px;\n  background: var(--accent-gold);\n  border-radius: 2px;\n}\n.info-grid .info-item .info-value {\n  font-size: var(--font-size-base);\n  color: var(--neutral-medium);\n  font-weight: 500;\n}\n.reception-list-page {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n:host ::ng-deep .reception-details-card .p-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  padding: 0;\n}\n.details-card-header {\n  padding: var(--spacing-2xl);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n}\n.details-card-header__icon {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details-card-header__icon .pi {\n  font-size: var(--font-size-3xl);\n  color: var(--accent-gold);\n}\n.details-card-header__text {\n  flex: 1;\n}\n.details-card-header__title {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 var(--spacing-xs) 0;\n  color: white;\n}\n.details-card-header__subtitle {\n  font-size: var(--font-size-base);\n  opacity: 0.9;\n  margin: 0;\n}\n:host ::ng-deep .reception-details-card .p-card-body {\n  padding: var(--spacing-2xl);\n}\n@media (max-width: 768px) {\n  .details-card-header {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=applicant-details.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ApplicantService }, { type: MessageService }, { type: MaritalStatusService }, { type: BarcodePrintService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicantDetailsComponent, { className: "ApplicantDetailsComponent", filePath: "src/app/features/reception/components/applicant-details/applicant-details.ts", lineNumber: 39 });
})();
export {
  ApplicantDetailsComponent
};
//# sourceMappingURL=chunk-SVCVQIE2.js.map
