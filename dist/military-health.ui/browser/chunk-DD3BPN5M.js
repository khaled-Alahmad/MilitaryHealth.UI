import {
  Card,
  CardModule
} from "./chunk-MSHWPF4R.js";
import {
  Toast,
  ToastModule
} from "./chunk-HZN3FIAV.js";
import {
  TextareaModule
} from "./chunk-2OSA6QLT.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
import {
  BarcodePrintService
} from "./chunk-QUEHRW3Q.js";
import {
  PageHeaderComponent
} from "./chunk-JQ4Y5HNR.js";
import {
  DatePicker,
  DatePickerModule,
  InputNumber,
  InputNumberModule
} from "./chunk-QKQWARGJ.js";
import "./chunk-OY2VKGI7.js";
import {
  InputText,
  InputTextModule
} from "./chunk-7K53XEFX.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import {
  MaritalStatusService
} from "./chunk-NYSGGAWF.js";
import {
  ApplicantService
} from "./chunk-LBNMWMAA.js";
import {
  ActivatedRoute
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  registerLocaleData
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
  Component,
  Input,
  __async,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
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

// node_modules/@angular/common/locales/ar.js
var u = void 0;
function plural(val) {
  const n = val;
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (n === 2)
    return 2;
  if (n % 100 === Math.floor(n % 100) && (n % 100 >= 3 && n % 100 <= 10))
    return 3;
  if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 99))
    return 4;
  return 5;
}
var ar_default = ["ar", [["\u0635", "\u0645"]], [["\u0635", "\u0645"], u, ["\u0635\u0628\u0627\u062D\u064B\u0627", "\u0645\u0633\u0627\u0621\u064B"]], [["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"], u, ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"]], u, [["\u064A", "\u0641", "\u0645", "\u0623", "\u0648", "\u0646", "\u0644", "\u063A", "\u0633", "\u0643", "\u0628", "\u062F"], ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]], u, [["\u0642.\u0645", "\u0645"], u, ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0645\u064A\u0644\u0627\u062F\u064A"]], 6, [5, 6], ["d\u200F/M\u200F/y", "dd\u200F/MM\u200F/y", "d MMMM y", "EEEE\u060C d MMMM y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} \u0641\u064A {0}", u], [".", ",", ";", "\u200E%\u200E", "\u200E+", "\u200E-", "E", "\xD7", "\u2030", "\u221E", "\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "EGP", "\u062C.\u0645.\u200F", "\u062C\u0646\u064A\u0647 \u0645\u0635\u0631\u064A", { "AED": ["\u062F.\u0625.\u200F"], "ARS": [u, "AR$"], "AUD": ["AU$"], "BBD": [u, "BB$"], "BHD": ["\u062F.\u0628.\u200F"], "BMD": [u, "BM$"], "BND": [u, "BN$"], "BSD": [u, "BS$"], "BYN": [u, "\u0440."], "BZD": [u, "BZ$"], "CAD": ["CA$"], "CLP": [u, "CL$"], "CNY": ["CN\xA5"], "COP": [u, "CO$"], "CUP": [u, "CU$"], "DOP": [u, "DO$"], "DZD": ["\u062F.\u062C.\u200F"], "EGP": ["\u062C.\u0645.\u200F", "E\xA3"], "FJD": [u, "FJ$"], "GBP": ["UK\xA3"], "GYD": [u, "GY$"], "HKD": ["HK$"], "IQD": ["\u062F.\u0639.\u200F"], "IRR": ["\u0631.\u0625."], "JMD": [u, "JM$"], "JOD": ["\u062F.\u0623.\u200F"], "JPY": ["JP\xA5"], "KWD": ["\u062F.\u0643.\u200F"], "KYD": [u, "KY$"], "LBP": ["\u0644.\u0644.\u200F", "L\xA3"], "LRD": [u, "$LR"], "LYD": ["\u062F.\u0644.\u200F"], "MAD": ["\u062F.\u0645.\u200F"], "MRU": ["\u0623.\u0645."], "MXN": ["MX$"], "NZD": ["NZ$"], "OMR": ["\u0631.\u0639.\u200F"], "PHP": [u, "\u20B1"], "QAR": ["\u0631.\u0642.\u200F"], "SAR": ["\u0631.\u0633.\u200F"], "SBD": [u, "SB$"], "SDD": ["\u062F.\u0633.\u200F"], "SDG": ["\u062C.\u0633."], "SRD": [u, "SR$"], "SYP": ["\u0644.\u0633.\u200F", "\xA3"], "THB": ["\u0E3F"], "TND": ["\u062F.\u062A.\u200F"], "TTD": [u, "TT$"], "TWD": ["NT$"], "USD": ["US$"], "UYU": [u, "UY$"], "YER": ["\u0631.\u064A.\u200F"] }, "rtl", plural];

// src/app/shared/components/form-card/form-card.component.ts
var _c0 = ["*"];
function FormCardComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.iconClass);
  }
}
function FormCardComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function FormCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, FormCardComponent_ng_template_1_Conditional_1_Template, 1, 2, "i", 3);
    \u0275\u0275elementStart(2, "div")(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, FormCardComponent_ng_template_1_Conditional_5_Template, 2, 1, "p", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.icon ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subtitle ? 5 : -1);
  }
}
var FormCardComponent = class _FormCardComponent {
  title = "";
  subtitle = "";
  icon = "";
  variant = "default";
  get iconClass() {
    if (!this.icon) {
      return "";
    }
    return this.icon.includes("pi ") ? this.icon : `pi ${this.icon}`;
  }
  static \u0275fac = function FormCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCardComponent, selectors: [["app-form-card"]], inputs: { title: "title", subtitle: "subtitle", icon: "icon", variant: "variant" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[3, "styleClass"], ["pTemplate", "header"], [1, "form-card__header"], ["aria-hidden", "true", 3, "class"], [1, "form-card__title"], [1, "form-card__subtitle"], ["aria-hidden", "true"]], template: function FormCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "p-card", 0);
      \u0275\u0275template(1, FormCardComponent_ng_template_1_Template, 6, 3, "ng-template", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("styleClass", ctx.variant === "banner" ? "form-card form-card--banner" : "form-card");
    }
  }, dependencies: [CommonModule, CardModule, Card, PrimeTemplate], styles: ["\n\n[_nghost-%COMP%]     .form-card .p-card-header {\n  padding: 0;\n}\n.form-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n.form-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n}\n.form-card__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-sm);\n  color: var(--neutral-medium);\n}\n[_nghost-%COMP%]     .form-card--banner .p-card-header .form-card__header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n}\n[_nghost-%COMP%]     .form-card--banner .p-card-header .form-card__header .form-card__title, \n[_nghost-%COMP%]     .form-card--banner .p-card-header .form-card__header .form-card__subtitle {\n  color: white;\n}\n[_nghost-%COMP%]     .form-card--banner .p-card-header .form-card__header .form-card__subtitle {\n  opacity: 0.9;\n}\n[_nghost-%COMP%]     .form-card--banner .p-card-header .form-card__header .pi {\n  color: var(--accent-gold);\n}\n/*# sourceMappingURL=form-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCardComponent, [{
    type: Component,
    args: [{ selector: "app-form-card", standalone: true, imports: [CommonModule, CardModule], template: `<p-card [styleClass]="variant === 'banner' ? 'form-card form-card--banner' : 'form-card'">\r
  <ng-template pTemplate="header">\r
    <div class="form-card__header">\r
      @if (icon) {\r
        <i [class]="iconClass" aria-hidden="true"></i>\r
      }\r
      <div>\r
        <h3 class="form-card__title">{{ title }}</h3>\r
        @if (subtitle) {\r
          <p class="form-card__subtitle">{{ subtitle }}</p>\r
        }\r
      </div>\r
    </div>\r
  </ng-template>\r
\r
  <ng-content></ng-content>\r
</p-card>\r
`, styles: ["/* src/app/shared/components/form-card/form-card.component.scss */\n:host ::ng-deep .form-card .p-card-header {\n  padding: 0;\n}\n.form-card__header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n.form-card__title {\n  margin: 0;\n  font-size: var(--font-size-lg);\n}\n.form-card__subtitle {\n  margin: 0;\n  font-size: var(--font-size-sm);\n  color: var(--neutral-medium);\n}\n:host ::ng-deep .form-card--banner .p-card-header .form-card__header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n}\n:host ::ng-deep .form-card--banner .p-card-header .form-card__header .form-card__title,\n:host ::ng-deep .form-card--banner .p-card-header .form-card__header .form-card__subtitle {\n  color: white;\n}\n:host ::ng-deep .form-card--banner .p-card-header .form-card__header .form-card__subtitle {\n  opacity: 0.9;\n}\n:host ::ng-deep .form-card--banner .p-card-header .form-card__header .pi {\n  color: var(--accent-gold);\n}\n/*# sourceMappingURL=form-card.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCardComponent, { className: "FormCardComponent", filePath: "src/app/shared/components/form-card/form-card.component.ts", lineNumber: 12 });
})();

// src/app/features/reception/components/add-edit-applicant/add-edit-applicant.ts
var _forTrack0 = ($index, $item) => $item.maritalStatusID;
function AddEditApplicant_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx_r0.fileNumber);
  }
}
function AddEditApplicant_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("fullName"));
  }
}
function AddEditApplicant_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("motherName"));
  }
}
function AddEditApplicant_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("recruitmentCenter"));
  }
}
function AddEditApplicant_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("job"));
  }
}
function AddEditApplicant_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    \u0275\u0275property("value", status_r2.maritalStatusID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r2.description);
  }
}
function AddEditApplicant_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("maritalStatusID"));
  }
}
function AddEditApplicant_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("associateNumber"));
  }
}
function AddEditApplicant_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("height"));
  }
}
function AddEditApplicant_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("weight"));
  }
}
function AddEditApplicant_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("bmi"));
  }
}
function AddEditApplicant_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("bloodPressure"));
  }
}
function AddEditApplicant_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("pulse"));
  }
}
function AddEditApplicant_Conditional_146_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("tattooDescription"));
  }
}
function AddEditApplicant_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "label", 10);
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275text(3, " \u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 67);
    \u0275\u0275conditionalCreate(5, AddEditApplicant_Conditional_146_Conditional_5_Template, 2, 1, "small", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("p-invalid", ctx_r0.isControlInvalid("tattooDescription"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getControlErrorMessage("tattooDescription") ? 5 : -1);
  }
}
function AddEditApplicant_Conditional_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getControlErrorMessage("distinctiveMarks"));
  }
}
function AddEditApplicant_Conditional_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 68);
    \u0275\u0275listener("onClick", function AddEditApplicant_Conditional_154_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printBarcode());
    });
    \u0275\u0275elementEnd();
  }
}
registerLocaleData(ar_default);
var VALIDATION = {
  fullNameMaxLength: 150,
  motherNameMaxLength: 150,
  recruitmentCenterMaxLength: 200,
  jobMaxLength: 150,
  associateNumberMaxLength: 50,
  bloodPressureMaxLength: 20,
  tattooDescriptionMaxLength: 500,
  distinctiveMarksMaxLength: 500,
  heightMin: 50,
  heightMax: 250,
  weightMin: 20,
  weightMax: 300,
  bmiMin: 10,
  bmiMax: 80,
  pulseMin: 30,
  pulseMax: 250
};
var BLOOD_PRESSURE_PATTERN = /^(|\d{2,3}\s*\/\s*\d{2,3})$/;
function optionalMinMax(min, max) {
  return (control) => {
    const v = control.value;
    if (v === null || v === void 0 || v === "")
      return null;
    const n = Number(v);
    if (isNaN(n))
      return null;
    if (n < min)
      return { min: { min } };
    if (n > max)
      return { max: { max } };
    return null;
  };
}
var AddEditApplicant = class _AddEditApplicant {
  fb;
  maritalStatusService;
  applicantService;
  route;
  toastr;
  messageService;
  barcodePrintService;
  cdr;
  applicantForm;
  maritalStatuses = [];
  applicantId;
  fileNumber = "";
  submitted = false;
  loading = false;
  message = "";
  success = false;
  minDate;
  maxDate = /* @__PURE__ */ new Date();
  constructor(fb, maritalStatusService, applicantService, route, toastr, messageService, barcodePrintService, cdr) {
    this.fb = fb;
    this.maritalStatusService = maritalStatusService;
    this.applicantService = applicantService;
    this.route = route;
    this.toastr = toastr;
    this.messageService = messageService;
    this.barcodePrintService = barcodePrintService;
    this.cdr = cdr;
    const today = /* @__PURE__ */ new Date();
    this.minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  }
  ngOnInit() {
    this.loadForm();
    this.loadMaritalStatuses();
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.applicantId = +id;
        this.loadApplicant(this.applicantId);
      }
    });
  }
  getFormDefaults() {
    return {
      fullName: "",
      motherName: "",
      dateOfBirth: null,
      recruitmentCenter: "",
      bloodType: "",
      maritalStatusID: null,
      job: "",
      height: null,
      weight: null,
      bmi: null,
      bloodPressure: "",
      pulse: null,
      tattoo: false,
      tattooDescription: "",
      distinctiveMarks: "",
      associateNumber: ""
    };
  }
  loadForm() {
    const defaults = this.getFormDefaults();
    this.applicantForm = this.fb.group({
      fullName: [
        defaults.fullName,
        [Validators.required, Validators.maxLength(VALIDATION.fullNameMaxLength)]
      ],
      motherName: [defaults.motherName, Validators.maxLength(VALIDATION.motherNameMaxLength)],
      dateOfBirth: [defaults.dateOfBirth],
      recruitmentCenter: [
        defaults.recruitmentCenter,
        Validators.maxLength(VALIDATION.recruitmentCenterMaxLength)
      ],
      bloodType: [defaults.bloodType],
      maritalStatusID: [defaults.maritalStatusID, Validators.required],
      job: [
        defaults.job,
        [Validators.required, Validators.maxLength(VALIDATION.jobMaxLength)]
      ],
      height: [
        defaults.height,
        [optionalMinMax(VALIDATION.heightMin, VALIDATION.heightMax)]
      ],
      weight: [
        defaults.weight,
        [optionalMinMax(VALIDATION.weightMin, VALIDATION.weightMax)]
      ],
      bmi: [
        defaults.bmi,
        [optionalMinMax(VALIDATION.bmiMin, VALIDATION.bmiMax)]
      ],
      bloodPressure: [
        defaults.bloodPressure,
        [
          Validators.maxLength(VALIDATION.bloodPressureMaxLength),
          Validators.pattern(BLOOD_PRESSURE_PATTERN)
        ]
      ],
      pulse: [
        defaults.pulse,
        [optionalMinMax(VALIDATION.pulseMin, VALIDATION.pulseMax)]
      ],
      tattoo: [defaults.tattoo],
      tattooDescription: [
        defaults.tattooDescription,
        Validators.maxLength(VALIDATION.tattooDescriptionMaxLength)
      ],
      distinctiveMarks: [
        defaults.distinctiveMarks,
        Validators.maxLength(VALIDATION.distinctiveMarksMaxLength)
      ],
      associateNumber: [
        defaults.associateNumber,
        [
          Validators.required,
          Validators.maxLength(VALIDATION.associateNumberMaxLength)
        ]
      ]
    });
  }
  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => this.maritalStatuses = data,
      error: (err) => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629", "\u062E\u0637\u0623");
      }
    });
  }
  loadApplicant(id) {
    this.applicantService.getApplicantById$(id).subscribe({
      next: (applicant) => {
        const dateOfBirth = this.toDateOnly(applicant.dateOfBirth);
        this.applicantForm.patchValue({
          fullName: applicant.fullName ?? "",
          motherName: applicant.motherName ?? "",
          dateOfBirth,
          recruitmentCenter: applicant.recruitmentCenter ?? "",
          bloodType: applicant.bloodType ?? "",
          maritalStatusID: applicant.maritalStatusID ?? null,
          job: applicant.job ?? "",
          height: applicant.height ?? null,
          weight: applicant.weight ?? null,
          bmi: applicant.bmi ?? null,
          bloodPressure: applicant.bloodPressure ?? "",
          pulse: applicant.pulse ?? null,
          tattoo: applicant.tattoo ?? false,
          tattooDescription: applicant.tattooDescription ?? "",
          distinctiveMarks: applicant.distinctiveMarks ?? "",
          associateNumber: applicant.associateNumber ?? ""
        });
        this.fileNumber = applicant.fileNumber;
        this.cdr.detectChanges();
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628", "\u062E\u0637\u0623");
      }
    });
  }
  preventMinus(event) {
    if (event.key === "-" || event.key === "e") {
      event.preventDefault();
    }
  }
  resetForm(showMessage = true) {
    this.applicantForm.reset(this.getFormDefaults());
    this.submitted = false;
    if (showMessage) {
      this.toastr.info("\u062A\u0645 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0646\u0645\u0648\u0630\u062C", "\u062A\u0645");
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.applicantForm.invalid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u062D\u0630\u064A\u0631");
      return;
    }
    const formValue = this.applicantForm.getRawValue();
    const applicantModel = {
      applicantID: 0,
      fileNumber: "",
      fullName: (formValue.fullName || "").trim(),
      motherName: formValue.motherName ? formValue.motherName.trim() : null,
      dateOfBirth: formValue.dateOfBirth ? new Date(formValue.dateOfBirth).toISOString() : null,
      recruitmentCenter: formValue.recruitmentCenter ? formValue.recruitmentCenter.trim() : null,
      bloodType: formValue.bloodType ? formValue.bloodType.trim() : null,
      maritalStatusID: Number(formValue.maritalStatusID),
      // ✅ تحويل إلى رقم
      job: (formValue.job || "").trim(),
      height: formValue.height ? Number(formValue.height) : null,
      weight: formValue.weight ? Number(formValue.weight) : null,
      bmi: formValue.bmi ? Number(formValue.bmi) : null,
      bloodPressure: formValue.bloodPressure ? formValue.bloodPressure.trim() : null,
      pulse: formValue.pulse ? Number(formValue.pulse) : null,
      tattoo: Boolean(formValue.tattoo) || false,
      tattooDescription: formValue.tattooDescription ? formValue.tattooDescription.trim() : null,
      // ✅ وصف الوشم
      distinctiveMarks: formValue.distinctiveMarks ? formValue.distinctiveMarks.trim() : null,
      associateNumber: (formValue.associateNumber || "").trim()
      // ❌ لا نرسل maritalStatus - الـ backend يحتاج فقط maritalStatusID
    };
    this.loading = true;
    if (!this.applicantId) {
      this.applicantService.createApplicant(applicantModel).pipe(
        // ✅ جلب بيانات المنتسب الكاملة بعد الإنشاء
        switchMap((res) => {
          this.toastr.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D", {
            timeOut: 3e3,
            positionClass: "toast-top-center"
          });
          this.success = true;
          this.loading = false;
          if (res.data && res.data.applicantID) {
            return this.applicantService.getApplicantById$(res.data.applicantID);
          } else {
            return of(res.data);
          }
        }),
        tap((fullApplicantData) => __async(this, null, function* () {
          if (fullApplicantData) {
            try {
              yield this.barcodePrintService.printBarcodeReceipt(fullApplicantData);
            } catch (error) {
              this.toastr.warning("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0628\u0646\u062C\u0627\u062D\u060C \u0644\u0643\u0646 \u0641\u0634\u0644\u062A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", "\u062A\u062D\u0630\u064A\u0631");
            }
          }
          this.resetForm(false);
        }))
      ).subscribe({
        error: (err) => {
          this.success = false;
          this.loading = false;
          let errorMsg = "\u0641\u0634\u0644 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628";
          if (err?.error?.message) {
            errorMsg = err.error.message;
          } else if (err?.error?.errors) {
            errorMsg = Array.isArray(err.error.errors) ? err.error.errors.join(", ") : err.error.errors;
          }
          this.toastr.error(errorMsg, "\u062E\u0637\u0623");
        }
      });
    } else {
      this.applicantService.updateApplicant(this.applicantId, applicantModel).subscribe({
        next: () => {
          this.loading = false;
          this.success = true;
          this.messageService.add({
            severity: "success",
            summary: "\u0646\u062C\u0627\u062D",
            detail: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0628\u0646\u062C\u0627\u062D"
          });
        },
        error: (err) => {
          this.success = false;
          this.loading = false;
          let errorMsg = "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628";
          if (err?.error?.message) {
            errorMsg = err.error.message;
          } else if (err?.error?.errors) {
            errorMsg = Array.isArray(err.error.errors) ? err.error.errors.join(", ") : typeof err.error?.errors === "string" ? err.error.errors : JSON.stringify(err.error?.errors);
          }
          this.toastr.error(errorMsg, "\u062E\u0637\u0623");
        }
      });
    }
  }
  get f() {
    return this.applicantForm.controls;
  }
  get hasTattoo() {
    return !!this.applicantForm.get("tattoo")?.value;
  }
  setTattooChoice(value) {
    const tattooControl = this.applicantForm.get("tattoo");
    if (!tattooControl) {
      return;
    }
    tattooControl.setValue(value);
    tattooControl.markAsDirty();
    tattooControl.markAsTouched();
    if (!value) {
      this.applicantForm.get("tattooDescription")?.reset("");
    }
  }
  toDateOnly(value) {
    if (!value) {
      return null;
    }
    const parsed = typeof value === "string" ? new Date(value) : new Date(value.getTime());
    if (isNaN(parsed.getTime())) {
      return null;
    }
    return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
  }
  isControlValid(controlName) {
    const control = this.f[controlName];
    return control.valid && (control.dirty || control.touched || this.submitted);
  }
  isControlInvalid(controlName) {
    const control = this.f[controlName];
    return control.invalid && (control.dirty || control.touched || this.submitted);
  }
  controlHasError(validation, controlName) {
    const control = this.f[controlName];
    return control.hasError(validation) && (control.dirty || control.touched || this.submitted);
  }
  getControlErrorMessage(controlName) {
    const control = this.f[controlName];
    if (!control?.errors || !(control.dirty || control.touched || this.submitted)) {
      return "";
    }
    const e = control.errors;
    if (e["required"])
      return "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
    if (e["maxlength"])
      return `\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 ${e["maxlength"].requiredLength} \u062D\u0631\u0641`;
    if (e["min"])
      return `\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 ${e["min"].min}`;
    if (e["max"])
      return `\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 ${e["max"].max}`;
    if (e["pattern"]) {
      if (controlName === "bloodPressure")
        return "\u0635\u064A\u063A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629 (\u0645\u062B\u0627\u0644: 120/80)";
      return "\u0635\u064A\u063A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629";
    }
    return "";
  }
  isControlTouched(controlName) {
    const control = this.f[controlName];
    return control.dirty || control.touched || this.submitted;
  }
  printBarcode() {
    if (this.applicantId && this.fileNumber) {
      this.applicantService.getApplicantById$(this.applicantId).subscribe({
        next: (applicant) => {
          try {
            this.barcodePrintService.printBarcodeReceipt(applicant);
            this.toastr.success("\u062A\u0645\u062A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
          } catch (error) {
            this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", "\u062E\u0637\u0623");
          }
        },
        error: () => {
          this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628", "\u062E\u0637\u0623");
        }
      });
    }
  }
  static \u0275fac = function AddEditApplicant_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEditApplicant)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MaritalStatusService), \u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(BarcodePrintService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEditApplicant, selectors: [["app-add-edit-applicant"]], decls: 157, vars: 69, consts: [[1, "reception-page", "add-edit-page"], ["variant", "banner", "icon", "pi pi-user-plus", 3, "title", "subtitle"], ["header-actions", "", 1, "file-number-badge"], ["title", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628", "icon", "pi pi-id-card", "variant", "banner"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "pi", "pi-user"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "required"], ["pInputText", "", "type", "text", "formControlName", "fullName", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644", 3, "maxlength"], [1, "p-error"], ["pInputText", "", "type", "text", "formControlName", "motherName", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0623\u0645", 3, "maxlength"], [1, "pi", "pi-calendar"], ["formControlName", "dateOfBirth", "dateFormat", "dd/mm/yy", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F", "styleClass", "date-picker-rtl", 3, "showIcon", "minDate", "maxDate", "appendTo"], [1, "pi", "pi-map-marker"], ["pInputText", "", "type", "text", "formControlName", "recruitmentCenter", "placeholder", "\u0623\u062F\u062E\u0644 \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F", 3, "maxlength"], [1, "pi", "pi-heart"], ["formControlName", "bloodType", 1, "form-control"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "pi", "pi-briefcase"], ["pInputText", "", "type", "text", "formControlName", "job", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644", 3, "maxlength"], ["formControlName", "maritalStatusID", 1, "form-control"], [3, "value"], [1, "pi", "pi-tag"], ["pInputText", "", "type", "text", "formControlName", "associateNumber", "placeholder", "\u0623\u062F\u062E\u0644 \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F", 3, "maxlength"], [1, "pi", "pi-heartbeat"], [1, "pi", "pi-arrows-v"], ["formControlName", "height", "placeholder", "50\u2013250 \u0633\u0645", 3, "min", "max", "step", "useGrouping"], [1, "pi", "pi-chart-line"], ["formControlName", "weight", "placeholder", "20\u2013300 \u0643\u063A", 3, "min", "max", "step", "useGrouping"], [1, "pi", "pi-calculator"], ["pInputText", "", "type", "number", "formControlName", "bmi", "placeholder", "10\u201380", "min", "10", "max", "80"], ["pInputText", "", "type", "text", "formControlName", "bloodPressure", "placeholder", "\u0645\u062B\u0627\u0644: 120/80", "maxlength", "20"], [1, "pi", "pi-circle"], ["pInputText", "", "type", "number", "formControlName", "pulse", "placeholder", "30\u2013250", "min", "30", "max", "250", 3, "keydown"], [1, "tattoo-section"], [1, "section-divider"], [1, "section-subtitle"], [1, "pi", "pi-palette"], [1, "form-group", "full-width"], ["role", "group", "aria-label", "\u062D\u0627\u0644\u0629 \u0627\u0644\u0648\u0634\u0645", 1, "tattoo-choice-group"], ["type", "button", 1, "tattoo-choice", 3, "click"], [1, "choice-icon", "success"], [1, "pi", "pi-check-circle"], [1, "choice-text"], [1, "choice-title"], [1, "choice-icon", "neutral"], [1, "pi", "pi-ban"], [1, "form-group", "full-width", "tattoo-details-field"], [1, "pi", "pi-bookmark"], ["formControlName", "distinctiveMarks", "rows", "3", "maxlength", "500", "placeholder", "\u0623\u062F\u062E\u0644 \u0623\u064A \u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629 \u0623\u0648 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0647\u0645\u0629 (\u0627\u0644\u0646\u062F\u0648\u0628\u060C \u0627\u0644\u0648\u062D\u0645\u0627\u062A\u060C \u0625\u0644\u062E...)", 1, "form-control"], [1, "form-actions"], ["type", "button", "label", "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", "icon", "pi pi-print", "severity", "info", "size", "large", "styleClass", "form-action-btn"], ["type", "submit", "icon", "pi pi-save", "severity", "primary", "size", "large", "styleClass", "form-action-btn", 3, "label", "loading", "disabled"], ["type", "button", "label", "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646", "icon", "pi pi-refresh", "severity", "secondary", "size", "large", "styleClass", "form-action-btn", 3, "onClick", "outlined"], ["aria-hidden", "true", 1, "pi", "pi-file"], [1, "pi", "pi-pencil"], ["formControlName", "tattooDescription", "rows", "2", "maxlength", "500", "placeholder", "\u0648\u0635\u0641 \u0645\u0641\u0635\u0644 \u0644\u0644\u0648\u0634\u0645 - \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u062D\u062C\u0645\u060C \u0627\u0644\u0623\u0644\u0648\u0627\u0646\u060C \u0625\u0644\u062E...", 1, "form-control"], ["type", "button", "label", "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", "icon", "pi pi-print", "severity", "info", "size", "large", "styleClass", "form-action-btn", 3, "onClick"]], template: function AddEditApplicant_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "app-page-header", 1);
      \u0275\u0275conditionalCreate(3, AddEditApplicant_Conditional_3_Template, 4, 1, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-form-card", 3)(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function AddEditApplicant_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementStart(9, "h3");
      \u0275\u0275text(10, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 10);
      \u0275\u0275element(14, "i", 7);
      \u0275\u0275text(15, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275conditionalCreate(19, AddEditApplicant_Conditional_19_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 10);
      \u0275\u0275element(22, "i", 7);
      \u0275\u0275text(23, " \u0627\u0633\u0645 \u0627\u0644\u0623\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275conditionalCreate(25, AddEditApplicant_Conditional_25_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9)(27, "label", 10);
      \u0275\u0275element(28, "i", 15);
      \u0275\u0275text(29, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "p-datepicker", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 10);
      \u0275\u0275element(33, "i", 17);
      \u0275\u0275text(34, " \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 18);
      \u0275\u0275conditionalCreate(36, AddEditApplicant_Conditional_36_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 9)(38, "label", 10);
      \u0275\u0275element(39, "i", 19);
      \u0275\u0275text(40, " \u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645 (\u0641\u0635\u064A\u0644\u0629 \u0627\u0644\u062F\u0645) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "select", 20)(42, "option", 21);
      \u0275\u0275text(43, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 22);
      \u0275\u0275text(45, "A-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 23);
      \u0275\u0275text(47, "B+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 24);
      \u0275\u0275text(49, "B-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 25);
      \u0275\u0275text(51, "AB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 26);
      \u0275\u0275text(53, "AB-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 27);
      \u0275\u0275text(55, "O+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 28);
      \u0275\u0275text(57, "O-");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 9)(59, "label", 10);
      \u0275\u0275element(60, "i", 29);
      \u0275\u0275text(61, " \u0627\u0644\u0639\u0645\u0644 ");
      \u0275\u0275elementStart(62, "span", 11);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "input", 30);
      \u0275\u0275conditionalCreate(65, AddEditApplicant_Conditional_65_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 9)(67, "label", 10);
      \u0275\u0275element(68, "i", 19);
      \u0275\u0275text(69, " \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 ");
      \u0275\u0275elementStart(70, "span", 11);
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "select", 31);
      \u0275\u0275repeaterCreate(73, AddEditApplicant_For_74_Template, 2, 2, "option", 32, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(75, AddEditApplicant_Conditional_75_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 9)(77, "label", 10);
      \u0275\u0275element(78, "i", 33);
      \u0275\u0275text(79, " \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F ");
      \u0275\u0275elementStart(80, "span", 11);
      \u0275\u0275text(81, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(82, "input", 34);
      \u0275\u0275conditionalCreate(83, AddEditApplicant_Conditional_83_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 5)(85, "div", 6);
      \u0275\u0275element(86, "i", 35);
      \u0275\u0275elementStart(87, "h3");
      \u0275\u0275text(88, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 8)(90, "div", 9)(91, "label", 10);
      \u0275\u0275element(92, "i", 36);
      \u0275\u0275text(93, " \u0627\u0644\u0637\u0648\u0644 (\u0633\u0645) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "p-inputNumber", 37);
      \u0275\u0275conditionalCreate(95, AddEditApplicant_Conditional_95_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 9)(97, "label", 10);
      \u0275\u0275element(98, "i", 38);
      \u0275\u0275text(99, " \u0627\u0644\u0648\u0632\u0646 (\u0643\u063A) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "p-inputNumber", 39);
      \u0275\u0275conditionalCreate(101, AddEditApplicant_Conditional_101_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 9)(103, "label", 10);
      \u0275\u0275element(104, "i", 40);
      \u0275\u0275text(105, " \u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645 (BMI) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "input", 41);
      \u0275\u0275conditionalCreate(107, AddEditApplicant_Conditional_107_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 9)(109, "label", 10);
      \u0275\u0275element(110, "i", 19);
      \u0275\u0275text(111, " \u0636\u063A\u0637 \u0627\u0644\u062F\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "input", 42);
      \u0275\u0275conditionalCreate(113, AddEditApplicant_Conditional_113_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 9)(115, "label", 10);
      \u0275\u0275element(116, "i", 43);
      \u0275\u0275text(117, " \u0627\u0644\u0646\u0628\u0636 (\u0646\u0628\u0636\u0629/\u062F\u0642\u064A\u0642\u0629) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "input", 44);
      \u0275\u0275listener("keydown", function AddEditApplicant_Template_input_keydown_118_listener($event) {
        return ctx.preventMinus($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(119, AddEditApplicant_Conditional_119_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 45);
      \u0275\u0275element(121, "div", 46);
      \u0275\u0275elementStart(122, "h4", 47);
      \u0275\u0275element(123, "i", 48);
      \u0275\u0275text(124, " \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0645\u064A\u064A\u0632 \u0648\u0627\u0644\u0648\u0634\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 49)(126, "label", 10);
      \u0275\u0275element(127, "i", 48);
      \u0275\u0275text(128, " \u0647\u0644 \u064A\u0648\u062C\u062F \u0648\u0634\u0645\u061F ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 50)(130, "button", 51);
      \u0275\u0275listener("click", function AddEditApplicant_Template_button_click_130_listener() {
        return ctx.setTattooChoice(true);
      });
      \u0275\u0275elementStart(131, "span", 52);
      \u0275\u0275element(132, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 54)(134, "span", 55);
      \u0275\u0275text(135, "\u064A\u0648\u062C\u062F \u0648\u0634\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "small");
      \u0275\u0275text(137, "\u0633\u062C\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0648\u0634\u0645 \u0645\u0639 \u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "button", 51);
      \u0275\u0275listener("click", function AddEditApplicant_Template_button_click_138_listener() {
        return ctx.setTattooChoice(false);
      });
      \u0275\u0275elementStart(139, "span", 56);
      \u0275\u0275element(140, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 54)(142, "span", 55);
      \u0275\u0275text(143, "\u0644\u0627 \u064A\u0648\u062C\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "small");
      \u0275\u0275text(145, "\u062A\u0623\u0643\u064A\u062F \u0639\u062F\u0645 \u0648\u062C\u0648\u062F \u0623\u064A \u0648\u0634\u0645 \u0638\u0627\u0647\u0631");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(146, AddEditApplicant_Conditional_146_Template, 6, 3, "div", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 49)(148, "label", 10);
      \u0275\u0275element(149, "i", 59);
      \u0275\u0275text(150, " \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "textarea", 60);
      \u0275\u0275conditionalCreate(152, AddEditApplicant_Conditional_152_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 61);
      \u0275\u0275conditionalCreate(154, AddEditApplicant_Conditional_154_Template, 1, 0, "p-button", 62);
      \u0275\u0275element(155, "p-button", 63);
      \u0275\u0275elementStart(156, "p-button", 64);
      \u0275\u0275listener("onClick", function AddEditApplicant_Template_p_button_onClick_156_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.applicantId ? "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628" : "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628 \u062C\u062F\u064A\u062F")("subtitle", ctx.applicantId ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628" : "\u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628 \u0627\u0644\u062C\u062F\u064A\u062F");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fileNumber ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.applicantForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("fullName"));
      \u0275\u0275property("maxlength", 150);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("fullName") ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("motherName"));
      \u0275\u0275property("maxlength", 150);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("motherName") ? 25 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("showIcon", true)("minDate", ctx.minDate)("maxDate", ctx.maxDate)("appendTo", "body");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("recruitmentCenter"));
      \u0275\u0275property("maxlength", 200);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("recruitmentCenter") ? 36 : -1);
      \u0275\u0275advance(28);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("job"));
      \u0275\u0275property("maxlength", 150);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("job") ? 65 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("maritalStatusID"));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.maritalStatuses);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.getControlErrorMessage("maritalStatusID") ? 75 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("associateNumber"));
      \u0275\u0275property("maxlength", 50);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("associateNumber") ? 83 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("ng-invalid", ctx.isControlInvalid("height"));
      \u0275\u0275property("min", 50)("max", 250)("step", 0.1)("useGrouping", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("height") ? 95 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("ng-invalid", ctx.isControlInvalid("weight"));
      \u0275\u0275property("min", 20)("max", 300)("step", 0.1)("useGrouping", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("weight") ? 101 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("bmi"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("bmi") ? 107 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("bloodPressure"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("bloodPressure") ? 113 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("pulse"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("pulse") ? 119 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.hasTattoo);
      \u0275\u0275attribute("aria-pressed", ctx.hasTattoo);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", !ctx.hasTattoo);
      \u0275\u0275attribute("aria-pressed", !ctx.hasTattoo);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.hasTattoo ? 146 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("distinctiveMarks"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getControlErrorMessage("distinctiveMarks") ? 152 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.applicantId && ctx.fileNumber ? 154 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A")("loading", ctx.loading)("disabled", ctx.loading || ctx.applicantForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    MinValidator,
    MaxValidator,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    InputTextModule,
    InputText,
    ButtonModule,
    Button,
    DatePickerModule,
    DatePicker,
    InputNumberModule,
    InputNumber,
    TextareaModule,
    ToastModule,
    Toast,
    PageHeaderComponent,
    FormCardComponent
  ], styles: ['\n\n.reception-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.reception-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  margin: 0 0 var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  transition: box-shadow var(--transition-fast);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-dark);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 14px;\n  background: var(--accent-gold);\n  border-radius: 2px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--neutral-medium);\n  font-weight: 500;\n}\n.reception-list-page[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n.add-edit-page[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0;\n  padding: var(--spacing-lg) 0;\n}\n.file-number-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  background: rgba(255, 255, 255, 0.15);\n  padding: var(--spacing-sm) var(--spacing-lg);\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n.file-number-badge[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.file-number-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--font-size-sm);\n  color: white;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-2xl);\n  padding: var(--spacing-xl);\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid var(--neutral-light);\n}\n.section-header[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n  margin: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-weight: 600;\n  color: var(--neutral-dark);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-xs);\n}\n.form-label[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n  font-weight: 700;\n}\n.p-error[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.tattoo-section[_ngcontent-%COMP%]   .section-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--neutral-light),\n      transparent);\n  margin: var(--spacing-xl) 0;\n}\n.tattoo-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n  margin: var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid var(--neutral-light);\n}\n.tattoo-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-details-field[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border-left: 4px solid var(--accent-gold);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-radius: var(--radius-lg);\n  border: 1.5px solid rgba(5, 66, 57, 0.15);\n  background: white;\n  cursor: pointer;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n  text-align: right;\n  color: inherit;\n  outline: none;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.25);\n  border-color: var(--accent-gold);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]:hover {\n  border-color: rgba(5, 66, 57, 0.35);\n  box-shadow: var(--shadow-sm);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-dark);\n  background: rgba(5, 66, 57, 0.04);\n  box-shadow: var(--shadow-sm);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: var(--radius-lg);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-size-lg);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-icon.success[_ngcontent-%COMP%] {\n  background: rgba(5, 66, 57, 0.12);\n  color: var(--primary-dark);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-icon.neutral[_ngcontent-%COMP%] {\n  background: rgba(61, 58, 59, 0.1);\n  color: var(--neutral-medium);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-text[_ngcontent-%COMP%]   .choice-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-dark);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--neutral-medium);\n  font-size: var(--font-size-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-lg);\n  margin-top: var(--spacing-2xl);\n  padding: var(--spacing-xl);\n  background: var(--neutral-light);\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%]     .form-action-btn {\n  min-width: 140px;\n}\n.date-picker-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .add-edit-page[_ngcontent-%COMP%] {\n    padding: var(--spacing-md) 0;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=add-edit-applicant.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEditApplicant, [{
    type: Component,
    args: [{ selector: "app-add-edit-applicant", imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      InputTextModule,
      ButtonModule,
      DatePickerModule,
      InputNumberModule,
      TextareaModule,
      ToastModule,
      PageHeaderComponent,
      FormCardComponent
    ], template: `<p-toast></p-toast>
<div class="reception-page add-edit-page">
  <app-page-header
    variant="banner"
    [title]="applicantId ? '\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628' : '\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628 \u062C\u062F\u064A\u062F'"
    [subtitle]="applicantId ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628' : '\u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628 \u0627\u0644\u062C\u062F\u064A\u062F'"
    icon="pi pi-user-plus">
    @if (fileNumber) {
      <div header-actions class="file-number-badge">
        <i class="pi pi-file" aria-hidden="true"></i>
        <span>\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ fileNumber }}</span>
      </div>
    }
  </app-page-header>

  <app-form-card title="\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628" icon="pi pi-id-card" variant="banner">
    <form [formGroup]="applicantForm" (ngSubmit)="onSubmit()" novalidate>

      <!-- Personal Information Section -->
      <div class="form-section">
        <div class="section-header">
          <i class="pi pi-user"></i>
          <h3>\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629</h3>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-user"></i>
              \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644
              <span class="required">*</span>
            </label>
            <input pInputText type="text" formControlName="fullName" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644"
              [class.p-invalid]="isControlInvalid('fullName')" [maxlength]="150" />
            @if (getControlErrorMessage('fullName')) {
              <small class="p-error">{{ getControlErrorMessage('fullName') }}</small>
            }
          </div>

          <!-- \u2705 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 -->
          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-user"></i>
              \u0627\u0633\u0645 \u0627\u0644\u0623\u0645
            </label>
            <input pInputText type="text" formControlName="motherName" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0623\u0645"
              [class.p-invalid]="isControlInvalid('motherName')" [maxlength]="150" />
            @if (getControlErrorMessage('motherName')) {
              <small class="p-error">{{ getControlErrorMessage('motherName') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-calendar"></i>
              \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F
            </label>
            <p-datepicker formControlName="dateOfBirth" [showIcon]="true" dateFormat="dd/mm/yy"
              placeholder="\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F" [minDate]="minDate" [maxDate]="maxDate" [appendTo]="'body'"
              styleClass="date-picker-rtl"></p-datepicker>
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-map-marker"></i>
              \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F
            </label>
            <input pInputText type="text" formControlName="recruitmentCenter" placeholder="\u0623\u062F\u062E\u0644 \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F"
              [class.p-invalid]="isControlInvalid('recruitmentCenter')" [maxlength]="200" />
            @if (getControlErrorMessage('recruitmentCenter')) {
              <small class="p-error">{{ getControlErrorMessage('recruitmentCenter') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-heart"></i>
              \u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645 (\u0641\u0635\u064A\u0644\u0629 \u0627\u0644\u062F\u0645)
            </label>
            <select formControlName="bloodType" class="form-control">
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-briefcase"></i>
              \u0627\u0644\u0639\u0645\u0644
              <span class="required">*</span>
            </label>
            <input pInputText type="text" formControlName="job" placeholder="\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644"
              [class.p-invalid]="isControlInvalid('job')" [maxlength]="150" />
            @if (getControlErrorMessage('job')) {
              <small class="p-error">{{ getControlErrorMessage('job') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-heart"></i>
              \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629
              <span class="required">*</span>
            </label>
            <select formControlName="maritalStatusID" class="form-control"
              [class.p-invalid]="isControlInvalid('maritalStatusID')">
              @for (status of maritalStatuses; track status.maritalStatusID) {
              <option [value]="status.maritalStatusID">{{ status.description }}</option>
              }
            </select>
            @if (getControlErrorMessage('maritalStatusID')) {
              <small class="p-error">{{ getControlErrorMessage('maritalStatusID') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-tag"></i>
              \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F
              <span class="required">*</span>
            </label>
            <input pInputText type="text" formControlName="associateNumber" placeholder="\u0623\u062F\u062E\u0644 \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F"
              [class.p-invalid]="isControlInvalid('associateNumber')" [maxlength]="50" />
            @if (getControlErrorMessage('associateNumber')) {
              <small class="p-error">{{ getControlErrorMessage('associateNumber') }}</small>
            }
          </div>
        </div>
      </div>

      <!-- Medical Information Section -->
      <div class="form-section">
        <div class="section-header">
          <i class="pi pi-heartbeat"></i>
          <h3>\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629</h3>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-arrows-v"></i>
              \u0627\u0644\u0637\u0648\u0644 (\u0633\u0645)
            </label>
            <p-inputNumber formControlName="height" [min]="50" [max]="250" [step]="0.1" placeholder="50\u2013250 \u0633\u0645"
              [useGrouping]="false" [class.ng-invalid]="isControlInvalid('height')">
            </p-inputNumber>
            @if (getControlErrorMessage('height')) {
              <small class="p-error">{{ getControlErrorMessage('height') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-chart-line"></i>
              \u0627\u0644\u0648\u0632\u0646 (\u0643\u063A)
            </label>
            <p-inputNumber formControlName="weight" [min]="20" [max]="300" [step]="0.1" placeholder="20\u2013300 \u0643\u063A"
              [useGrouping]="false" [class.ng-invalid]="isControlInvalid('weight')">
            </p-inputNumber>
            @if (getControlErrorMessage('weight')) {
              <small class="p-error">{{ getControlErrorMessage('weight') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-calculator"></i>
              \u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645 (BMI)
            </label>
            <input pInputText type="number" formControlName="bmi" placeholder="10\u201380"
              [class.p-invalid]="isControlInvalid('bmi')" min="10" max="80" />
            @if (getControlErrorMessage('bmi')) {
              <small class="p-error">{{ getControlErrorMessage('bmi') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-heart"></i>
              \u0636\u063A\u0637 \u0627\u0644\u062F\u0645
            </label>
            <input pInputText type="text" formControlName="bloodPressure" placeholder="\u0645\u062B\u0627\u0644: 120/80"
              [class.p-invalid]="isControlInvalid('bloodPressure')" maxlength="20" />
            @if (getControlErrorMessage('bloodPressure')) {
              <small class="p-error">{{ getControlErrorMessage('bloodPressure') }}</small>
            }
          </div>

          <div class="form-group">
            <label class="form-label">
              <i class="pi pi-circle"></i>
              \u0627\u0644\u0646\u0628\u0636 (\u0646\u0628\u0636\u0629/\u062F\u0642\u064A\u0642\u0629)
            </label>
            <input pInputText type="number" formControlName="pulse" placeholder="30\u2013250"
              [class.p-invalid]="isControlInvalid('pulse')" min="30" max="250" (keydown)="preventMinus($event)" />
            @if (getControlErrorMessage('pulse')) {
              <small class="p-error">{{ getControlErrorMessage('pulse') }}</small>
            }
          </div>
        </div>

        <!-- \u2705 \u062A\u062D\u0633\u064A\u0646 \u0642\u0633\u0645 \u0627\u0644\u0648\u0634\u0645 \u0648\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629 -->
        <div class="tattoo-section">
          <div class="section-divider"></div>
          <h4 class="section-subtitle">
            <i class="pi pi-palette"></i>
            \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0645\u064A\u064A\u0632 \u0648\u0627\u0644\u0648\u0634\u0645
          </h4>

          <div class="form-group full-width">
            <label class="form-label">
              <i class="pi pi-palette"></i>
              \u0647\u0644 \u064A\u0648\u062C\u062F \u0648\u0634\u0645\u061F
            </label>
            <div class="tattoo-choice-group" role="group" aria-label="\u062D\u0627\u0644\u0629 \u0627\u0644\u0648\u0634\u0645">
              <button
                type="button"
                class="tattoo-choice"
                [class.active]="hasTattoo"
                (click)="setTattooChoice(true)"
                [attr.aria-pressed]="hasTattoo">
                <span class="choice-icon success">
                  <i class="pi pi-check-circle"></i>
                </span>
                <div class="choice-text">
                  <span class="choice-title">\u064A\u0648\u062C\u062F \u0648\u0634\u0645</span>
                  <small>\u0633\u062C\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0648\u0634\u0645 \u0645\u0639 \u0627\u0644\u0645\u0648\u0642\u0639</small>
                </div>
              </button>
              <button
                type="button"
                class="tattoo-choice"
                [class.active]="!hasTattoo"
                (click)="setTattooChoice(false)"
                [attr.aria-pressed]="!hasTattoo">
                <span class="choice-icon neutral">
                  <i class="pi pi-ban"></i>
                </span>
                <div class="choice-text">
                  <span class="choice-title">\u0644\u0627 \u064A\u0648\u062C\u062F</span>
                  <small>\u062A\u0623\u0643\u064A\u062F \u0639\u062F\u0645 \u0648\u062C\u0648\u062F \u0623\u064A \u0648\u0634\u0645 \u0638\u0627\u0647\u0631</small>
                </div>
              </button>
            </div>
          </div>

          @if (hasTattoo) {
          <div class="form-group full-width tattoo-details-field">
            <label class="form-label">
              <i class="pi pi-pencil"></i>
              \u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)
            </label>
            <textarea formControlName="tattooDescription" rows="2" maxlength="500"
              placeholder="\u0648\u0635\u0641 \u0645\u0641\u0635\u0644 \u0644\u0644\u0648\u0634\u0645 - \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u062D\u062C\u0645\u060C \u0627\u0644\u0623\u0644\u0648\u0627\u0646\u060C \u0625\u0644\u062E..." class="form-control"
              [class.p-invalid]="isControlInvalid('tattooDescription')"></textarea>
            @if (getControlErrorMessage('tattooDescription')) {
              <small class="p-error">{{ getControlErrorMessage('tattooDescription') }}</small>
            }
          </div>
          }
        </div>

        <div class="form-group full-width">
          <label class="form-label">
            <i class="pi pi-bookmark"></i>
            \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629 \u0627\u0644\u0623\u062E\u0631\u0649
          </label>
          <textarea formControlName="distinctiveMarks" rows="3" maxlength="500"
            placeholder="\u0623\u062F\u062E\u0644 \u0623\u064A \u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629 \u0623\u0648 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0647\u0645\u0629 (\u0627\u0644\u0646\u062F\u0648\u0628\u060C \u0627\u0644\u0648\u062D\u0645\u0627\u062A\u060C \u0625\u0644\u062E...)"
            class="form-control" [class.p-invalid]="isControlInvalid('distinctiveMarks')"></textarea>
          @if (getControlErrorMessage('distinctiveMarks')) {
            <small class="p-error">{{ getControlErrorMessage('distinctiveMarks') }}</small>
          }
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="form-actions">
        @if (applicantId && fileNumber) {
        <p-button
          type="button"
          label="\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F"
          icon="pi pi-print"
          severity="info"
          size="large"
          styleClass="form-action-btn"
          (onClick)="printBarcode()">
        </p-button>
        }

        <p-button
          type="submit"
          [label]="loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A'"
          icon="pi pi-save"
          severity="primary"
          size="large"
          styleClass="form-action-btn"
          [loading]="loading"
          [disabled]="loading || applicantForm.invalid">
        </p-button>

        <p-button
          type="button"
          label="\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646"
          icon="pi pi-refresh"
          severity="secondary"
          size="large"
          styleClass="form-action-btn"
          [outlined]="true"
          (onClick)="resetForm()">
        </p-button>
      </div>
    </form>
  </app-form-card>
</div>
`, styles: ['/* src/app/features/reception/components/add-edit-applicant/add-edit-applicant.scss */\n.reception-page {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.reception-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.info-section {\n  margin-bottom: var(--spacing-xl);\n}\n.info-section .section-title {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  margin: 0 0 var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.info-section .section-title .pi {\n  color: var(--accent-gold);\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  transition: box-shadow var(--transition-fast);\n}\n.info-grid .info-item:hover {\n  box-shadow: var(--shadow-sm);\n}\n.info-grid .info-item.full-width {\n  grid-column: 1/-1;\n}\n.info-grid .info-item .info-label {\n  font-weight: 600;\n  color: var(--primary-dark);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.info-grid .info-item .info-label::before {\n  content: "";\n  width: 4px;\n  height: 14px;\n  background: var(--accent-gold);\n  border-radius: 2px;\n}\n.info-grid .info-item .info-value {\n  font-size: var(--font-size-base);\n  color: var(--neutral-medium);\n  font-weight: 500;\n}\n.reception-list-page {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n.add-edit-page {\n  max-width: 100%;\n  margin: 0;\n  padding: var(--spacing-lg) 0;\n}\n.file-number-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  background: rgba(255, 255, 255, 0.15);\n  padding: var(--spacing-sm) var(--spacing-lg);\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n.file-number-badge .pi {\n  color: var(--accent-gold);\n}\n.file-number-badge span {\n  font-weight: 600;\n  font-size: var(--font-size-sm);\n  color: white;\n}\n.form-section {\n  margin-bottom: var(--spacing-2xl);\n  padding: var(--spacing-xl);\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid var(--neutral-light);\n}\n.section-header .pi {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n}\n.section-header h3 {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n  margin: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n}\n.form-group.full-width {\n  grid-column: 1/-1;\n}\n.form-label {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-weight: 600;\n  color: var(--neutral-dark);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-xs);\n}\n.form-label .pi {\n  color: var(--primary-dark);\n}\n.form-label .required {\n  color: var(--status-danger);\n  font-weight: 700;\n}\n.p-error {\n  color: var(--status-danger);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.tattoo-section .section-divider {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--neutral-light),\n      transparent);\n  margin: var(--spacing-xl) 0;\n}\n.tattoo-section .section-subtitle {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n  margin: var(--spacing-lg) 0;\n  padding-bottom: var(--spacing-md);\n  border-bottom: 2px solid var(--neutral-light);\n}\n.tattoo-section .section-subtitle .pi {\n  color: var(--accent-gold);\n}\n.tattoo-section .tattoo-details-field {\n  padding: var(--spacing-md);\n  background: #f8f9fa;\n  border-radius: var(--radius-md);\n  border-left: 4px solid var(--accent-gold);\n}\n.tattoo-section .tattoo-choice-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice {\n  flex: 1 1 220px;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-radius: var(--radius-lg);\n  border: 1.5px solid rgba(5, 66, 57, 0.15);\n  background: white;\n  cursor: pointer;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n  text-align: right;\n  color: inherit;\n  outline: none;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice:focus-visible {\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.25);\n  border-color: var(--accent-gold);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice:hover {\n  border-color: rgba(5, 66, 57, 0.35);\n  box-shadow: var(--shadow-sm);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice.active {\n  border-color: var(--primary-dark);\n  background: rgba(5, 66, 57, 0.04);\n  box-shadow: var(--shadow-sm);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: var(--radius-lg);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-size-lg);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-icon.success {\n  background: rgba(5, 66, 57, 0.12);\n  color: var(--primary-dark);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-icon.neutral {\n  background: rgba(61, 58, 59, 0.1);\n  color: var(--neutral-medium);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-text {\n  display: flex;\n  flex-direction: column;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-text .choice-title {\n  font-weight: 600;\n  color: var(--primary-dark);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-text small {\n  color: var(--neutral-medium);\n  font-size: var(--font-size-xs);\n}\n.form-actions {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-lg);\n  margin-top: var(--spacing-2xl);\n  padding: var(--spacing-xl);\n  background: var(--neutral-light);\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n:host ::ng-deep .form-action-btn {\n  min-width: 140px;\n}\n.date-picker-rtl {\n  direction: rtl;\n  text-align: right;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .add-edit-page {\n    padding: var(--spacing-md) 0;\n  }\n  .form-section {\n    padding: var(--spacing-md);\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=add-edit-applicant.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: MaritalStatusService }, { type: ApplicantService }, { type: ActivatedRoute }, { type: ToastrService }, { type: MessageService }, { type: BarcodePrintService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEditApplicant, { className: "AddEditApplicant", filePath: "src/app/features/reception/components/add-edit-applicant/add-edit-applicant.ts", lineNumber: 94 });
})();
export {
  AddEditApplicant
};
/*! Bundled license information:

@angular/common/locales/ar.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-DD3BPN5M.js.map
