import {
  Card,
  CardModule
} from "./chunk-CF6VTVJ7.js";
import {
  ToastrService
} from "./chunk-QUV35I6O.js";
import {
  BarcodePrintService
} from "./chunk-PHTDGWVA.js";
import {
  DatePicker,
  DatePickerModule,
  InputNumber,
  InputNumberModule
} from "./chunk-ZBRQ7FXV.js";
import {
  BaseModelHolder,
  InputText,
  InputTextModule
} from "./chunk-BSHRCOEK.js";
import {
  Bind,
  ButtonModule,
  Fluid,
  PARENT_INSTANCE
} from "./chunk-DYGQH52H.js";
import {
  BaseStyle,
  PrimeTemplate
} from "./chunk-O5UBWZSW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import {
  MaritalStatusService
} from "./chunk-ZLDVKVU5.js";
import {
  ApplicantService
} from "./chunk-HQAVTYQP.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-QLKHPIKE.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  registerLocaleData
} from "./chunk-7EG6WMAP.js";
import {
  ChangeDetectorRef,
  Component,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  __async,
  booleanAttribute,
  computed,
  inject,
  input,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
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

// node_modules/@primeuix/styles/dist/textarea/index.mjs
var style = "\n    .p-textarea {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('textarea.color');\n        background: dt('textarea.background');\n        padding-block: dt('textarea.padding.y');\n        padding-inline: dt('textarea.padding.x');\n        border: 1px solid dt('textarea.border.color');\n        transition:\n            background dt('textarea.transition.duration'),\n            color dt('textarea.transition.duration'),\n            border-color dt('textarea.transition.duration'),\n            outline-color dt('textarea.transition.duration'),\n            box-shadow dt('textarea.transition.duration');\n        appearance: none;\n        border-radius: dt('textarea.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('textarea.shadow');\n    }\n\n    .p-textarea:enabled:hover {\n        border-color: dt('textarea.hover.border.color');\n    }\n\n    .p-textarea:enabled:focus {\n        border-color: dt('textarea.focus.border.color');\n        box-shadow: dt('textarea.focus.ring.shadow');\n        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');\n        outline-offset: dt('textarea.focus.ring.offset');\n    }\n\n    .p-textarea.p-invalid {\n        border-color: dt('textarea.invalid.border.color');\n    }\n\n    .p-textarea.p-variant-filled {\n        background: dt('textarea.filled.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:hover {\n        background: dt('textarea.filled.hover.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:focus {\n        background: dt('textarea.filled.focus.background');\n    }\n\n    .p-textarea:disabled {\n        opacity: 1;\n        background: dt('textarea.disabled.background');\n        color: dt('textarea.disabled.color');\n    }\n\n    .p-textarea::placeholder {\n        color: dt('textarea.placeholder.color');\n    }\n\n    .p-textarea.p-invalid::placeholder {\n        color: dt('textarea.invalid.placeholder.color');\n    }\n\n    .p-textarea-fluid {\n        width: 100%;\n    }\n\n    .p-textarea-resizable {\n        overflow: hidden;\n        resize: none;\n    }\n\n    .p-textarea-sm {\n        font-size: dt('textarea.sm.font.size');\n        padding-block: dt('textarea.sm.padding.y');\n        padding-inline: dt('textarea.sm.padding.x');\n    }\n\n    .p-textarea-lg {\n        font-size: dt('textarea.lg.font.size');\n        padding-block: dt('textarea.lg.padding.y');\n        padding-inline: dt('textarea.lg.padding.x');\n    }\n";

// node_modules/primeng/fesm2022/primeng-textarea.mjs
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-textarea p-component", {
    "p-filled": instance.$filled(),
    "p-textarea-resizable ": instance.autoResize,
    "p-variant-filled": instance.$variant() === "filled",
    "p-textarea-fluid": instance.hasFluid,
    "p-inputfield-sm p-textarea-sm": instance.pSize === "small",
    "p-textarea-lg p-inputfield-lg": instance.pSize === "large",
    "p-invalid": instance.invalid()
  }]
};
var TextareaStyle = class _TextareaStyle extends BaseStyle {
  name = "textarea";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaStyle_BaseFactory;
    return function TextareaStyle_Factory(__ngFactoryType__) {
      return (\u0275TextareaStyle_BaseFactory || (\u0275TextareaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaStyle)))(__ngFactoryType__ || _TextareaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TextareaStyle,
    factory: _TextareaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaStyle, [{
    type: Injectable
  }], null, null);
})();
var TextareaClasses;
(function(TextareaClasses2) {
  TextareaClasses2["root"] = "p-textarea";
})(TextareaClasses || (TextareaClasses = {}));
var TEXTAREA_INSTANCE = new InjectionToken("TEXTAREA_INSTANCE");
var Textarea = class _Textarea extends BaseModelHolder {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTextarea = inject(TEXTAREA_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  ngControlSubscription;
  _componentStyle = inject(TextareaStyle);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  onInit() {
    if (this.ngControl) {
      this.ngControlSubscription = this.ngControl.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  onAfterViewInit() {
    if (this.autoResize) this.resize();
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.autoResize) {
      this.resize();
    }
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput(e) {
    this.writeModelValue(e.target?.value);
    this.updateState();
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    if (this.autoResize) {
      this.resize();
    }
  }
  onDestroy() {
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Textarea_BaseFactory;
    return function Textarea_Factory(__ngFactoryType__) {
      return (\u0275Textarea_BaseFactory || (\u0275Textarea_BaseFactory = \u0275\u0275getInheritedFactory(_Textarea)))(__ngFactoryType__ || _Textarea);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Textarea,
    selectors: [["", "pTextarea", ""], ["", "pInputTextarea", ""]],
    hostVars: 2,
    hostBindings: function Textarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function Textarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275ProvidersFeature([TextareaStyle, {
      provide: TEXTAREA_INSTANCE,
      useExisting: _Textarea
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Textarea
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Textarea, [{
    type: Directive,
    args: [{
      selector: "[pTextarea], [pInputTextarea]",
      standalone: true,
      host: {
        "[class]": "cx('root')"
      },
      providers: [TextareaStyle, {
        provide: TEXTAREA_INSTANCE,
        useExisting: Textarea
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Textarea
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var TextareaModule = class _TextareaModule {
  static \u0275fac = function TextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextareaModule,
    imports: [Textarea],
    exports: [Textarea]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaModule, [{
    type: NgModule,
    args: [{
      imports: [Textarea],
      exports: [Textarea]
    }]
  }], null, null);
})();

// src/app/features/reception/components/add-edit-applicant/add-edit-applicant.ts
var _forTrack0 = ($index, $item) => $item.maritalStatusID;
function AddEditApplicant_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628 \u062C\u062F\u064A\u062F ");
  }
}
function AddEditApplicant_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628 ");
  }
}
function AddEditApplicant_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628 \u0627\u0644\u062C\u062F\u064A\u062F ");
  }
}
function AddEditApplicant_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628 ");
  }
}
function AddEditApplicant_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 74);
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
function AddEditApplicant_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
    \u0275\u0275elementEnd()();
  }
}
function AddEditApplicant_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
function AddEditApplicant_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644 \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
function AddEditApplicant_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
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
function AddEditApplicant_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
  }
}
function AddEditApplicant_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "\u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
function AddEditApplicant_Conditional_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "label", 17);
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275text(3, " \u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 78);
    \u0275\u0275elementEnd();
  }
}
function AddEditApplicant_Conditional_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function AddEditApplicant_Conditional_156_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printBarcode());
    });
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2, " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F ");
    \u0275\u0275elementEnd();
  }
}
function AddEditApplicant_Conditional_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
  }
}
function AddEditApplicant_Conditional_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 81);
    \u0275\u0275text(1, " \u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638... ");
  }
}
registerLocaleData(ar_default);
var AddEditApplicant = class _AddEditApplicant {
  fb;
  maritalStatusService;
  applicantService;
  route;
  router;
  toastr;
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
  constructor(fb, maritalStatusService, applicantService, route, router, toastr, barcodePrintService, cdr) {
    this.fb = fb;
    this.maritalStatusService = maritalStatusService;
    this.applicantService = applicantService;
    this.route = route;
    this.router = router;
    this.toastr = toastr;
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
      fullName: [defaults.fullName, Validators.required],
      motherName: [defaults.motherName],
      dateOfBirth: [defaults.dateOfBirth],
      recruitmentCenter: [defaults.recruitmentCenter],
      bloodType: [defaults.bloodType],
      maritalStatusID: [defaults.maritalStatusID, Validators.required],
      job: [defaults.job, Validators.required],
      height: [defaults.height],
      weight: [defaults.weight],
      bmi: [defaults.bmi],
      bloodPressure: [defaults.bloodPressure],
      pulse: [defaults.pulse],
      tattoo: [defaults.tattoo],
      tattooDescription: [defaults.tattooDescription],
      distinctiveMarks: [defaults.distinctiveMarks],
      associateNumber: [defaults.associateNumber, Validators.required]
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
          this.success = true;
          this.loading = false;
          this.toastr.success("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D", {
            timeOut: 3e3,
            positionClass: "toast-top-center"
          });
        },
        error: (err) => {
          this.success = false;
          this.loading = false;
          let errorMsg = "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628";
          if (err?.error?.message) {
            errorMsg = err.error.message;
          } else if (err?.error?.errors) {
            errorMsg = Array.isArray(err.error.errors) ? err.error.errors.join(", ") : err.error.errors;
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
    return new (__ngFactoryType__ || _AddEditApplicant)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MaritalStatusService), \u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(BarcodePrintService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEditApplicant, selectors: [["app-add-edit-applicant"]], decls: 164, vars: 36, consts: [[1, "professional-form-container"], [1, "form-header"], [1, "header-content"], [1, "header-icon"], [1, "pi", "pi-user-plus"], [1, "header-text"], [1, "form-title", 2, "color", "white !important"], [1, "form-subtitle"], [1, "file-number-badge"], [1, "form-card"], ["pTemplate", "header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "pi", "pi-user"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "required"], ["pInputText", "", "type", "text", "formControlName", "fullName", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644"], [1, "p-error"], ["pInputText", "", "type", "text", "formControlName", "motherName", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0623\u0645"], [1, "pi", "pi-calendar"], ["formControlName", "dateOfBirth", "dateFormat", "dd/mm/yy", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F", "styleClass", "date-picker-rtl", 3, "showIcon", "minDate", "maxDate", "appendTo"], [1, "pi", "pi-map-marker"], ["pInputText", "", "type", "text", "formControlName", "recruitmentCenter", "placeholder", "\u0623\u062F\u062E\u0644 \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F"], [1, "pi", "pi-heart"], ["formControlName", "bloodType", 1, "form-control"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "pi", "pi-briefcase"], ["pInputText", "", "type", "text", "formControlName", "job", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644"], ["formControlName", "maritalStatusID", 1, "form-control"], [3, "value"], [1, "pi", "pi-tag"], ["pInputText", "", "type", "text", "formControlName", "associateNumber", "placeholder", "\u0623\u062F\u062E\u0644 \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F"], [1, "pi", "pi-heartbeat"], [1, "pi", "pi-arrows-v"], ["formControlName", "height", "placeholder", "\u0627\u062F\u062E\u0644 \u0627\u0644\u0637\u0648\u0644", 3, "min", "step", "useGrouping"], [1, "pi", "pi-chart-line"], ["formControlName", "weight", "placeholder", "\u0627\u062F\u062E\u0644 \u0627\u0644\u0648\u0632\u0646", 3, "min", "step", "useGrouping"], [1, "pi", "pi-calculator"], ["pInputText", "", "type", "number", "min", "0", "formControlName", "bmi", "placeholder", "\u0623\u062F\u062E\u0644 \u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645"], ["pInputText", "", "type", "text", "formControlName", "bloodPressure", "placeholder", "\u0645\u062B\u0627\u0644: 120/80"], [1, "pi", "pi-circle"], ["pInputText", "", "type", "number", "min", "0", "formControlName", "pulse", "placeholder", "\u0623\u062F\u062E\u0644 \u0645\u0639\u062F\u0644 \u0627\u0644\u0646\u0628\u0636"], [1, "tattoo-section"], [1, "section-divider"], [1, "section-subtitle"], [1, "pi", "pi-palette"], [1, "form-group", "full-width"], ["role", "group", "aria-label", "\u062D\u0627\u0644\u0629 \u0627\u0644\u0648\u0634\u0645", 1, "tattoo-choice-group"], ["type", "button", 1, "tattoo-choice", 3, "click"], [1, "choice-icon", "success"], [1, "pi", "pi-check-circle"], [1, "choice-text"], [1, "choice-title"], [1, "choice-icon", "neutral"], [1, "pi", "pi-ban"], [1, "form-group", "full-width", "tattoo-details-field"], [1, "pi", "pi-bookmark"], ["formControlName", "distinctiveMarks", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0623\u064A \u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629 \u0623\u0648 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0647\u0645\u0629 (\u0627\u0644\u0646\u062F\u0648\u0628\u060C \u0627\u0644\u0648\u062D\u0645\u0627\u062A\u060C \u0625\u0644\u062E...)", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-info", "btn-lg"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], [1, "pi", "pi-save", "me-2"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [1, "pi", "pi-refresh", "me-2"], [1, "pi", "pi-file"], [1, "card-header"], [1, "pi", "pi-id-card"], [1, "pi", "pi-pencil"], ["formControlName", "tattooDescription", "rows", "2", "placeholder", "\u0648\u0635\u0641 \u0645\u0641\u0635\u0644 \u0644\u0644\u0648\u0634\u0645 - \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u062D\u062C\u0645\u060C \u0627\u0644\u0623\u0644\u0648\u0627\u0646\u060C \u0625\u0644\u062E...", 1, "form-control"], ["type", "button", 1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "pi", "pi-print", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddEditApplicant_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h2", 6);
      \u0275\u0275conditionalCreate(7, AddEditApplicant_Conditional_7_Template, 1, 0)(8, AddEditApplicant_Conditional_8_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275conditionalCreate(10, AddEditApplicant_Conditional_10_Template, 1, 0)(11, AddEditApplicant_Conditional_11_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, AddEditApplicant_Conditional_12_Template, 4, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-card", 9);
      \u0275\u0275template(14, AddEditApplicant_ng_template_14_Template, 4, 0, "ng-template", 10);
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function AddEditApplicant_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275elementStart(19, "h3");
      \u0275\u0275text(20, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "label", 17);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275text(25, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
      \u0275\u0275elementStart(26, "span", 18);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 19);
      \u0275\u0275conditionalCreate(29, AddEditApplicant_Conditional_29_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 16)(31, "label", 17);
      \u0275\u0275element(32, "i", 14);
      \u0275\u0275text(33, " \u0627\u0633\u0645 \u0627\u0644\u0623\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 16)(36, "label", 17);
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275text(38, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "p-datepicker", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 16)(41, "label", 17);
      \u0275\u0275element(42, "i", 24);
      \u0275\u0275text(43, " \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 16)(46, "label", 17);
      \u0275\u0275element(47, "i", 26);
      \u0275\u0275text(48, " \u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645 (\u0641\u0635\u064A\u0644\u0629 \u0627\u0644\u062F\u0645) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 27)(50, "option", 28);
      \u0275\u0275text(51, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 29);
      \u0275\u0275text(53, "A-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 30);
      \u0275\u0275text(55, "B+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 31);
      \u0275\u0275text(57, "B-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 32);
      \u0275\u0275text(59, "AB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 33);
      \u0275\u0275text(61, "AB-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 34);
      \u0275\u0275text(63, "O+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 35);
      \u0275\u0275text(65, "O-");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 16)(67, "label", 17);
      \u0275\u0275element(68, "i", 36);
      \u0275\u0275text(69, " \u0627\u0644\u0639\u0645\u0644 ");
      \u0275\u0275elementStart(70, "span", 18);
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "input", 37);
      \u0275\u0275conditionalCreate(73, AddEditApplicant_Conditional_73_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 16)(75, "label", 17);
      \u0275\u0275element(76, "i", 26);
      \u0275\u0275text(77, " \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 ");
      \u0275\u0275elementStart(78, "span", 18);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "select", 38);
      \u0275\u0275repeaterCreate(81, AddEditApplicant_For_82_Template, 2, 2, "option", 39, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(83, AddEditApplicant_Conditional_83_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 16)(85, "label", 17);
      \u0275\u0275element(86, "i", 40);
      \u0275\u0275text(87, " \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F ");
      \u0275\u0275elementStart(88, "span", 18);
      \u0275\u0275text(89, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(90, "input", 41);
      \u0275\u0275conditionalCreate(91, AddEditApplicant_Conditional_91_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 12)(93, "div", 13);
      \u0275\u0275element(94, "i", 42);
      \u0275\u0275elementStart(95, "h3");
      \u0275\u0275text(96, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 15)(98, "div", 16)(99, "label", 17);
      \u0275\u0275element(100, "i", 43);
      \u0275\u0275text(101, " \u0627\u0644\u0637\u0648\u0644 (\u0633\u0645) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(102, "p-inputNumber", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 16)(104, "label", 17);
      \u0275\u0275element(105, "i", 45);
      \u0275\u0275text(106, " \u0627\u0644\u0648\u0632\u0646 (\u0643\u063A) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "p-inputNumber", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 16)(109, "label", 17);
      \u0275\u0275element(110, "i", 47);
      \u0275\u0275text(111, " \u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645 (BMI) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 16)(114, "label", 17);
      \u0275\u0275element(115, "i", 26);
      \u0275\u0275text(116, " \u0636\u063A\u0637 \u0627\u0644\u062F\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 16)(119, "label", 17);
      \u0275\u0275element(120, "i", 50);
      \u0275\u0275text(121, " \u0627\u0644\u0646\u0628\u0636 (\u0646\u0628\u0636\u0629/\u062F\u0642\u064A\u0642\u0629) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 52);
      \u0275\u0275element(124, "div", 53);
      \u0275\u0275elementStart(125, "h4", 54);
      \u0275\u0275element(126, "i", 55);
      \u0275\u0275text(127, " \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0645\u064A\u064A\u0632 \u0648\u0627\u0644\u0648\u0634\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 56)(129, "label", 17);
      \u0275\u0275element(130, "i", 55);
      \u0275\u0275text(131, " \u0647\u0644 \u064A\u0648\u062C\u062F \u0648\u0634\u0645\u061F ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 57)(133, "button", 58);
      \u0275\u0275listener("click", function AddEditApplicant_Template_button_click_133_listener() {
        return ctx.setTattooChoice(true);
      });
      \u0275\u0275elementStart(134, "span", 59);
      \u0275\u0275element(135, "i", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 61)(137, "span", 62);
      \u0275\u0275text(138, "\u064A\u0648\u062C\u062F \u0648\u0634\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "small");
      \u0275\u0275text(140, "\u0633\u062C\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0648\u0634\u0645 \u0645\u0639 \u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "button", 58);
      \u0275\u0275listener("click", function AddEditApplicant_Template_button_click_141_listener() {
        return ctx.setTattooChoice(false);
      });
      \u0275\u0275elementStart(142, "span", 63);
      \u0275\u0275element(143, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 61)(145, "span", 62);
      \u0275\u0275text(146, "\u0644\u0627 \u064A\u0648\u062C\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "small");
      \u0275\u0275text(148, "\u062A\u0623\u0643\u064A\u062F \u0639\u062F\u0645 \u0648\u062C\u0648\u062F \u0623\u064A \u0648\u0634\u0645 \u0638\u0627\u0647\u0631");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(149, AddEditApplicant_Conditional_149_Template, 5, 0, "div", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 56)(151, "label", 17);
      \u0275\u0275element(152, "i", 66);
      \u0275\u0275text(153, " \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "textarea", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 68);
      \u0275\u0275conditionalCreate(156, AddEditApplicant_Conditional_156_Template, 3, 0, "button", 69);
      \u0275\u0275elementStart(157, "button", 70);
      \u0275\u0275element(158, "i", 71);
      \u0275\u0275conditionalCreate(159, AddEditApplicant_Conditional_159_Template, 1, 0)(160, AddEditApplicant_Conditional_160_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "button", 72);
      \u0275\u0275listener("click", function AddEditApplicant_Template_button_click_161_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275element(162, "i", 73);
      \u0275\u0275text(163, " \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.applicantId ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.applicantId ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.fileNumber ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.applicantForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("fullName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.controlHasError("required", "fullName") ? 29 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("showIcon", true)("minDate", ctx.minDate)("maxDate", ctx.maxDate)("appendTo", "body");
      \u0275\u0275advance(33);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("job"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.controlHasError("required", "job") ? 73 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("maritalStatusID"));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.maritalStatuses);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.controlHasError("required", "maritalStatusID") ? 83 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("p-invalid", ctx.isControlInvalid("associateNumber"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.controlHasError("required", "associateNumber") ? 91 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275property("min", 0)("step", 0.1)("useGrouping", false);
      \u0275\u0275advance(5);
      \u0275\u0275property("min", 0)("step", 0.1)("useGrouping", false);
      \u0275\u0275advance(26);
      \u0275\u0275classProp("active", ctx.hasTattoo);
      \u0275\u0275attribute("aria-pressed", ctx.hasTattoo);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", !ctx.hasTattoo);
      \u0275\u0275attribute("aria-pressed", !ctx.hasTattoo);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.hasTattoo ? 149 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.applicantId && ctx.fileNumber ? 156 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading || ctx.applicantForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 159 : 160);
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
    MinValidator,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    CardModule,
    Card,
    PrimeTemplate,
    InputTextModule,
    InputText,
    ButtonModule,
    DatePickerModule,
    DatePicker,
    InputNumberModule,
    InputNumber,
    TextareaModule
  ], styles: ['@charset "UTF-8";\n\n\n\n.professional-form-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem;\n  background: #EDEBE0;\n  min-height: 100vh;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--accent-gold);\n}\n.header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  color: var(--accent-gold);\n}\n.header-text[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0;\n  color: white !important;\n}\n.header-text[_ngcontent-%COMP%]   .form-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0.25rem 0 0 0;\n  color: rgba(255, 255, 255, 0.8);\n}\n.file-number-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.file-number-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B9A779;\n}\n.file-number-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: white;\n}\n.form-card[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  color: white !important;\n  padding: 1rem !important;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n.card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B9A779;\n  font-size: 1.2rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #EDEBE0;\n}\n.section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #054239;\n  font-size: 1.2rem;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #054239;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #EDEBE0;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]:hover {\n  border-color: rgba(5, 66, 57, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8f9fa 100%);\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]   .tattoo-checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  color: #054239;\n  font-size: 1rem;\n  cursor: pointer;\n  margin: 0;\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]   .tattoo-checkbox-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #B9A779;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]   .tattoo-checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]     .p-checkbox .p-checkbox-box {\n  width: 1.5rem !important;\n  height: 1.5rem !important;\n  border: 2px solid #054239 !important;\n  border-radius: 6px !important;\n  transition: all 0.3s ease !important;\n  background: white !important;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]     .p-checkbox .p-checkbox-box:hover {\n  border-color: #428177 !important;\n  box-shadow: 0 0 0 4px rgba(5, 66, 57, 0.1) !important;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]     .p-checkbox .p-checkbox-box.p-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  border-color: #054239 !important;\n}\n.form-group[_ngcontent-%COMP%]   .tattoo-checkbox-container[_ngcontent-%COMP%]     .p-checkbox .p-checkbox-box.p-highlight .p-checkbox-icon {\n  color: white !important;\n  font-size: 1rem !important;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  color: #3D3A3B;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #054239;\n  font-size: 1rem;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #6B1F2A;\n  font-weight: 700;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  color: #3D3A3B;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #054239;\n}\n.p-inputtext[_ngcontent-%COMP%], \ntextarea.form-control[_ngcontent-%COMP%], \nselect.form-control[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  padding: 0.5rem 0.75rem !important;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif !important;\n  font-size: 1rem !important;\n  transition: all 0.15s ease !important;\n  width: 100% !important;\n}\n.p-inputtext[_ngcontent-%COMP%]:focus, \ntextarea.form-control[_ngcontent-%COMP%]:focus, \nselect.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #054239 !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n}\n.p-inputtext.p-invalid[_ngcontent-%COMP%], \ntextarea.form-control.p-invalid[_ngcontent-%COMP%], \nselect.form-control.p-invalid[_ngcontent-%COMP%] {\n  border-color: #6B1F2A !important;\n}\n.p-inputtext.p-invalid[_ngcontent-%COMP%]:focus, \ntextarea.form-control.p-invalid[_ngcontent-%COMP%]:focus, \nselect.form-control.p-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(107, 31, 42, 0.1) !important;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.p-checkbox[_ngcontent-%COMP%]   .p-checkbox-box[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  transition: all 0.15s ease !important;\n}\n.p-checkbox[_ngcontent-%COMP%]   .p-checkbox-box.p-highlight[_ngcontent-%COMP%] {\n  background-color: #054239 !important;\n  border-color: #054239 !important;\n}\n.p-button[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif !important;\n  font-weight: 600 !important;\n  padding: 0.75rem 1.5rem !important;\n  font-size: 1rem !important;\n  transition: all 0.15s ease !important;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;\n}\n.p-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;\n}\n.p-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0) !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #054239 !important;\n  border-color: #054239 !important;\n  color: white !important;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #428177 !important;\n  border-color: #428177 !important;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #3D3A3B !important;\n  border-color: #3D3A3B !important;\n  color: white !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #161616 !important;\n  border-color: #161616 !important;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #0D5B87 !important;\n  border-color: #0D5B87 !important;\n  color: white !important;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background-color: #054A6F !important;\n  border-color: #054A6F !important;\n}\n.p-error[_ngcontent-%COMP%] {\n  color: #6B1F2A !important;\n  font-size: 0.75rem !important;\n  font-weight: 500 !important;\n  margin-top: 0.25rem !important;\n}\n.tattoo-section[_ngcontent-%COMP%]   .section-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #EDEBE0,\n      transparent);\n  margin: 1.5rem 0;\n}\n.tattoo-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #054239;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 1rem 0 1.5rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #EDEBE0;\n}\n.tattoo-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #B9A779;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-details-field[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInDown 0.4s ease-out;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 8px;\n  border-left: 4px solid #B9A779;\n}\n.tattoo-section[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  background: white;\n  color: #054239;\n}\n.tattoo-section[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.tattoo-section[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]::placeholder {\n  color: rgba(5, 66, 57, 0.4);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.9rem 1rem !important;\n  border-radius: 12px !important;\n  border: 1.5px solid rgba(5, 66, 57, 0.15) !important;\n  background: white !important;\n  box-shadow: none !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: right;\n  color: inherit !important;\n  outline: none !important;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.35) !important;\n  border-color: #B9A779 !important;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]:hover {\n  border-color: rgba(5, 66, 57, 0.4);\n  box-shadow: 0 8px 14px rgba(5, 66, 57, 0.08);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice.active[_ngcontent-%COMP%] {\n  border-color: #054239 !important;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.07),\n      rgba(5, 66, 57, 0.02));\n  box-shadow: 0 12px 20px rgba(5, 66, 57, 0.1);\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-icon.success[_ngcontent-%COMP%] {\n  background: rgba(5, 66, 57, 0.12);\n  color: #054239;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-icon.neutral[_ngcontent-%COMP%] {\n  background: rgba(61, 58, 59, 0.1);\n  color: #3D3A3B;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-text[_ngcontent-%COMP%]   .choice-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #054239;\n}\n.tattoo-section[_ngcontent-%COMP%]   .tattoo-choice-group[_ngcontent-%COMP%]   .tattoo-choice[_ngcontent-%COMP%]   .choice-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #EDEBE0;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.form-actions[_ngcontent-%COMP%]   .spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n.p-toast[_ngcontent-%COMP%]   .p-toast-message[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n}\n.p-toast-message-success[_ngcontent-%COMP%]   .p-toast-icon[_ngcontent-%COMP%] {\n  background: #428177 !important;\n  color: white !important;\n}\n.p-toast-message-error[_ngcontent-%COMP%]   .p-toast-icon[_ngcontent-%COMP%] {\n  background: #6B1F2A !important;\n  color: white !important;\n}\n.p-toast-message-warn[_ngcontent-%COMP%]   .p-toast-icon[_ngcontent-%COMP%] {\n  background: #B9A779 !important;\n  color: #161616 !important;\n}\n.p-toast-message-info[_ngcontent-%COMP%]   .p-toast-icon[_ngcontent-%COMP%] {\n  background: #002623 !important;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .professional-form-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .professional-form-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .header-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem !important;\n  }\n  .form-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n}\n.form-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInUp 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n  .p-calendar {\n  width: 100%;\n}\n  .p-calendar .p-calendar-w-btn .p-inputtext {\n  border-radius: 8px !important;\n  padding: 0.5rem 0.75rem !important;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif !important;\n  font-size: 1rem !important;\n  color: #3D3A3B;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  transition: all 0.15s ease !important;\n}\n  .p-calendar .p-calendar-w-btn .p-inputtext:focus {\n  outline: none !important;\n  border-color: #054239 !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n}\n  .p-calendar .p-calendar-button {\n  background-color: transparent !important;\n  border: none !important;\n  padding: 0.5rem 0.75rem !important;\n  color: #054239 !important;\n}\n  .p-calendar .p-calendar-button:hover {\n  background-color: rgba(5, 66, 57, 0.05) !important;\n}\n.date-picker-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  width: 100%;\n}\n/*# sourceMappingURL=add-edit-applicant.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEditApplicant, [{
    type: Component,
    args: [{ selector: "app-add-edit-applicant", imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      CardModule,
      InputTextModule,
      ButtonModule,
      DatePickerModule,
      InputNumberModule,
      TextareaModule
    ], template: `<div class="professional-form-container">\r
  <!-- Header Section with Professional Design -->\r
  <div class="form-header">\r
    <div class="header-content">\r
      <div class="header-icon">\r
        <i class="pi pi-user-plus"></i>\r
      </div>\r
      <div class="header-text">\r
        <h2 class="form-title" style="color: white !important;">\r
          @if (!applicantId) {\r
          \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628 \u062C\u062F\u064A\u062F\r
          } @else {\r
          \u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628\r
          }\r
        </h2>\r
        <p class="form-subtitle">\r
          @if (!applicantId) {\r
          \u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628 \u0627\u0644\u062C\u062F\u064A\u062F\r
          } @else {\r
          \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u0633\u0628\r
          }\r
        </p>\r
      </div>\r
    </div>\r
\r
    @if(fileNumber) {\r
    <div class="file-number-badge">\r
      <i class="pi pi-file"></i>\r
      <span>\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ fileNumber }}</span>\r
    </div>\r
    }\r
  </div>\r
\r
  <!-- Form Card with PrimeNG -->\r
  <p-card class="form-card">\r
    <ng-template pTemplate="header">\r
      <div class="card-header">\r
        <i class="pi pi-id-card"></i>\r
        <span>\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628</span>\r
      </div>\r
    </ng-template>\r
\r
    <form [formGroup]="applicantForm" (ngSubmit)="onSubmit()" novalidate>\r
\r
      <!-- Personal Information Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <i class="pi pi-user"></i>\r
          <h3>\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629</h3>\r
        </div>\r
\r
        <div class="form-grid">\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-user"></i>\r
              \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644\r
              <span class="required">*</span>\r
            </label>\r
            <input pInputText type="text" formControlName="fullName" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644"\r
              [class.p-invalid]="isControlInvalid('fullName')" />\r
            @if (controlHasError('required', 'fullName')) {\r
            <small class="p-error">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628</small>\r
            }\r
          </div>\r
\r
          <!-- \u2705 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 -->\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-user"></i>\r
              \u0627\u0633\u0645 \u0627\u0644\u0623\u0645\r
            </label>\r
            <input pInputText type="text" formControlName="motherName" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0623\u0645" />\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-calendar"></i>\r
              \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F\r
            </label>\r
            <p-datepicker formControlName="dateOfBirth" [showIcon]="true" dateFormat="dd/mm/yy"\r
              placeholder="\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F" [minDate]="minDate" [maxDate]="maxDate" [appendTo]="'body'"\r
              styleClass="date-picker-rtl"></p-datepicker>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-map-marker"></i>\r
              \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F\r
            </label>\r
            <input pInputText type="text" formControlName="recruitmentCenter" placeholder="\u0623\u062F\u062E\u0644 \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F" />\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-heart"></i>\r
              \u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645 (\u0641\u0635\u064A\u0644\u0629 \u0627\u0644\u062F\u0645)\r
            </label>\r
            <select formControlName="bloodType" class="form-control">\r
              <option value="A+">A+</option>\r
              <option value="A-">A-</option>\r
              <option value="B+">B+</option>\r
              <option value="B-">B-</option>\r
              <option value="AB+">AB+</option>\r
              <option value="AB-">AB-</option>\r
              <option value="O+">O+</option>\r
              <option value="O-">O-</option>\r
            </select>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-briefcase"></i>\r
              \u0627\u0644\u0639\u0645\u0644\r
              <span class="required">*</span>\r
            </label>\r
            <input pInputText type="text" formControlName="job" placeholder="\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644"\r
              [class.p-invalid]="isControlInvalid('job')" />\r
            @if (controlHasError('required', 'job')) {\r
            <small class="p-error">\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644 \u0645\u0637\u0644\u0648\u0628</small>\r
            }\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-heart"></i>\r
              \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629\r
              <span class="required">*</span>\r
            </label>\r
            <select formControlName="maritalStatusID" class="form-control"\r
              [class.p-invalid]="isControlInvalid('maritalStatusID')">\r
              @for (status of maritalStatuses; track status.maritalStatusID) {\r
              <option [value]="status.maritalStatusID">{{ status.description }}</option>\r
              }\r
            </select>\r
            @if (controlHasError('required', 'maritalStatusID')) {\r
            <small class="p-error">\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</small>\r
            }\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-tag"></i>\r
              \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F\r
              <span class="required">*</span>\r
            </label>\r
            <input pInputText type="text" formControlName="associateNumber" placeholder="\u0623\u062F\u062E\u0644 \u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F"\r
              [class.p-invalid]="isControlInvalid('associateNumber')" />\r
            @if (controlHasError('required', 'associateNumber')) {\r
            <small class="p-error">\u0643\u0648\u062F \u0627\u0644\u062A\u062C\u0646\u064A\u062F \u0645\u0637\u0644\u0648\u0628</small>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Medical Information Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <i class="pi pi-heartbeat"></i>\r
          <h3>\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629</h3>\r
        </div>\r
\r
        <div class="form-grid">\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-arrows-v"></i>\r
              \u0627\u0644\u0637\u0648\u0644 (\u0633\u0645)\r
            </label>\r
            <p-inputNumber formControlName="height" [min]="0" [step]="0.1" placeholder="\u0627\u062F\u062E\u0644 \u0627\u0644\u0637\u0648\u0644"\r
              [useGrouping]="false">\r
            </p-inputNumber>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-chart-line"></i>\r
              \u0627\u0644\u0648\u0632\u0646 (\u0643\u063A)\r
            </label>\r
            <p-inputNumber formControlName="weight" [min]="0" [step]="0.1" placeholder="\u0627\u062F\u062E\u0644 \u0627\u0644\u0648\u0632\u0646"\r
              [useGrouping]="false">\r
            </p-inputNumber>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-calculator"></i>\r
              \u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645 (BMI)\r
            </label>\r
            <input pInputText type="number" min="0" formControlName="bmi" placeholder="\u0623\u062F\u062E\u0644 \u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645" />\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-heart"></i>\r
              \u0636\u063A\u0637 \u0627\u0644\u062F\u0645\r
            </label>\r
            <input pInputText type="text" formControlName="bloodPressure" placeholder="\u0645\u062B\u0627\u0644: 120/80" />\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">\r
              <i class="pi pi-circle"></i>\r
              \u0627\u0644\u0646\u0628\u0636 (\u0646\u0628\u0636\u0629/\u062F\u0642\u064A\u0642\u0629)\r
            </label>\r
            <input pInputText type="number" min="0" formControlName="pulse" placeholder="\u0623\u062F\u062E\u0644 \u0645\u0639\u062F\u0644 \u0627\u0644\u0646\u0628\u0636" />\r
          </div>\r
        </div>\r
\r
        <!-- \u2705 \u062A\u062D\u0633\u064A\u0646 \u0642\u0633\u0645 \u0627\u0644\u0648\u0634\u0645 \u0648\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629 -->\r
        <div class="tattoo-section">\r
          <div class="section-divider"></div>\r
          <h4 class="section-subtitle">\r
            <i class="pi pi-palette"></i>\r
            \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0645\u064A\u064A\u0632 \u0648\u0627\u0644\u0648\u0634\u0645\r
          </h4>\r
\r
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
            <textarea formControlName="tattooDescription" rows="2"\r
              placeholder="\u0648\u0635\u0641 \u0645\u0641\u0635\u0644 \u0644\u0644\u0648\u0634\u0645 - \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u062D\u062C\u0645\u060C \u0627\u0644\u0623\u0644\u0648\u0627\u0646\u060C \u0625\u0644\u062E..." class="form-control"></textarea>\r
          </div>\r
          }\r
        </div>\r
\r
        <div class="form-group full-width">\r
          <label class="form-label">\r
            <i class="pi pi-bookmark"></i>\r
            \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629 \u0627\u0644\u0623\u062E\u0631\u0649\r
          </label>\r
          <textarea formControlName="distinctiveMarks" rows="3"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0623\u064A \u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629 \u0623\u0648 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0647\u0645\u0629 (\u0627\u0644\u0646\u062F\u0648\u0628\u060C \u0627\u0644\u0648\u062D\u0645\u0627\u062A\u060C \u0625\u0644\u062E...)"\r
            class="form-control"></textarea>\r
        </div>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="form-actions">\r
        @if (applicantId && fileNumber) {\r
        <button type="button" class="btn btn-info btn-lg" (click)="printBarcode()">\r
          <i class="pi pi-print me-2"></i>\r
          \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F\r
        </button>\r
        }\r
\r
        <button type="submit" class="btn btn-primary btn-lg" [disabled]="loading || applicantForm.invalid">\r
          <i class="pi pi-save me-2"></i>\r
          @if (!loading) {\r
          \u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A\r
          } @else {\r
          <span class="spinner-border spinner-border-sm me-2"></span>\r
          \u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...\r
          }\r
        </button>\r
\r
        <button type="button" class="btn btn-secondary btn-lg" (click)="resetForm()">\r
          <i class="pi pi-refresh me-2"></i>\r
          \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646\r
        </button>\r
      </div>\r
    </form>\r
  </p-card>\r
\r
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/reception/components/add-edit-applicant/add-edit-applicant.scss */\n.professional-form-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem;\n  background: #EDEBE0;\n  min-height: 100vh;\n}\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.header-icon {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--accent-gold);\n}\n.header-icon i {\n  font-size: var(--font-size-2xl);\n  color: var(--accent-gold);\n}\n.header-text .form-title {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0;\n  color: white !important;\n}\n.header-text .form-subtitle {\n  font-size: 0.875rem;\n  margin: 0.25rem 0 0 0;\n  color: rgba(255, 255, 255, 0.8);\n}\n.file-number-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.file-number-badge i {\n  color: #B9A779;\n}\n.file-number-badge span {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: white;\n}\n.form-card {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  color: white !important;\n  padding: 1rem !important;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n.card-header i {\n  color: #B9A779;\n  font-size: 1.2rem;\n}\n.form-section {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #EDEBE0;\n}\n.section-header i {\n  color: #054239;\n  font-size: 1.2rem;\n}\n.section-header h3 {\n  color: #054239;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group.full-width {\n  grid-column: 1/-1;\n}\n.form-group.checkbox-group {\n  flex-direction: row;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #EDEBE0;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.form-group .tattoo-checkbox-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.form-group .tattoo-checkbox-container:hover {\n  border-color: rgba(5, 66, 57, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8f9fa 100%);\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.1);\n}\n.form-group .tattoo-checkbox-container .tattoo-checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  color: #054239;\n  font-size: 1rem;\n  cursor: pointer;\n  margin: 0;\n  flex: 1;\n}\n.form-group .tattoo-checkbox-container .tattoo-checkbox-label i {\n  font-size: 1.25rem;\n  color: #B9A779;\n}\n.form-group .tattoo-checkbox-container .tattoo-checkbox-label span {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.form-group .tattoo-checkbox-container ::ng-deep .p-checkbox .p-checkbox-box {\n  width: 1.5rem !important;\n  height: 1.5rem !important;\n  border: 2px solid #054239 !important;\n  border-radius: 6px !important;\n  transition: all 0.3s ease !important;\n  background: white !important;\n}\n.form-group .tattoo-checkbox-container ::ng-deep .p-checkbox .p-checkbox-box:hover {\n  border-color: #428177 !important;\n  box-shadow: 0 0 0 4px rgba(5, 66, 57, 0.1) !important;\n}\n.form-group .tattoo-checkbox-container ::ng-deep .p-checkbox .p-checkbox-box.p-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  border-color: #054239 !important;\n}\n.form-group .tattoo-checkbox-container ::ng-deep .p-checkbox .p-checkbox-box.p-highlight .p-checkbox-icon {\n  color: white !important;\n  font-size: 1rem !important;\n}\n.form-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  color: #3D3A3B;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.form-label i {\n  color: #054239;\n  font-size: 1rem;\n}\n.form-label .required {\n  color: #6B1F2A;\n  font-weight: 700;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  color: #3D3A3B;\n  cursor: pointer;\n}\n.checkbox-label i {\n  color: #054239;\n}\n.p-inputtext,\ntextarea.form-control,\nselect.form-control {\n  border-radius: 8px !important;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  padding: 0.5rem 0.75rem !important;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif !important;\n  font-size: 1rem !important;\n  transition: all 0.15s ease !important;\n  width: 100% !important;\n}\n.p-inputtext:focus,\ntextarea.form-control:focus,\nselect.form-control:focus {\n  outline: none !important;\n  border-color: #054239 !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n}\n.p-inputtext.p-invalid,\ntextarea.form-control.p-invalid,\nselect.form-control.p-invalid {\n  border-color: #6B1F2A !important;\n}\n.p-inputtext.p-invalid:focus,\ntextarea.form-control.p-invalid:focus,\nselect.form-control.p-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(107, 31, 42, 0.1) !important;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.p-checkbox .p-checkbox-box {\n  border-radius: 4px !important;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  transition: all 0.15s ease !important;\n}\n.p-checkbox .p-checkbox-box.p-highlight {\n  background-color: #054239 !important;\n  border-color: #054239 !important;\n}\n.p-button {\n  border-radius: 8px !important;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif !important;\n  font-weight: 600 !important;\n  padding: 0.75rem 1.5rem !important;\n  font-size: 1rem !important;\n  transition: all 0.15s ease !important;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;\n}\n.p-button:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;\n}\n.p-button:active {\n  transform: translateY(0) !important;\n}\n.btn-primary {\n  background-color: #054239 !important;\n  border-color: #054239 !important;\n  color: white !important;\n}\n.btn-primary:hover {\n  background-color: #428177 !important;\n  border-color: #428177 !important;\n}\n.btn-secondary {\n  background-color: #3D3A3B !important;\n  border-color: #3D3A3B !important;\n  color: white !important;\n}\n.btn-secondary:hover {\n  background-color: #161616 !important;\n  border-color: #161616 !important;\n}\n.btn-info {\n  background-color: #0D5B87 !important;\n  border-color: #0D5B87 !important;\n  color: white !important;\n}\n.btn-info:hover {\n  background-color: #054A6F !important;\n  border-color: #054A6F !important;\n}\n.p-error {\n  color: #6B1F2A !important;\n  font-size: 0.75rem !important;\n  font-weight: 500 !important;\n  margin-top: 0.25rem !important;\n}\n.tattoo-section .section-divider {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #EDEBE0,\n      transparent);\n  margin: 1.5rem 0;\n}\n.tattoo-section .section-subtitle {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #054239;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 1rem 0 1.5rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #EDEBE0;\n}\n.tattoo-section .section-subtitle i {\n  font-size: 1.25rem;\n  color: #B9A779;\n}\n.tattoo-section .tattoo-details-field {\n  animation: fadeInDown 0.4s ease-out;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 8px;\n  border-left: 4px solid #B9A779;\n}\n.tattoo-section textarea.form-control {\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  background: white;\n  color: #054239;\n}\n.tattoo-section textarea.form-control:focus {\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.tattoo-section textarea.form-control::placeholder {\n  color: rgba(5, 66, 57, 0.4);\n}\n.tattoo-section .tattoo-choice-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice {\n  flex: 1 1 220px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.9rem 1rem !important;\n  border-radius: 12px !important;\n  border: 1.5px solid rgba(5, 66, 57, 0.15) !important;\n  background: white !important;\n  box-shadow: none !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: right;\n  color: inherit !important;\n  outline: none !important;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice:focus-visible {\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.35) !important;\n  border-color: #B9A779 !important;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice:hover {\n  border-color: rgba(5, 66, 57, 0.4);\n  box-shadow: 0 8px 14px rgba(5, 66, 57, 0.08);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice.active {\n  border-color: #054239 !important;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.07),\n      rgba(5, 66, 57, 0.02));\n  box-shadow: 0 12px 20px rgba(5, 66, 57, 0.1);\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-icon.success {\n  background: rgba(5, 66, 57, 0.12);\n  color: #054239;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-icon.neutral {\n  background: rgba(61, 58, 59, 0.1);\n  color: #3D3A3B;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-text {\n  display: flex;\n  flex-direction: column;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-text .choice-title {\n  font-weight: 600;\n  color: #054239;\n}\n.tattoo-section .tattoo-choice-group .tattoo-choice .choice-text small {\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-actions {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #EDEBE0;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.form-actions .btn {\n  min-width: 150px;\n}\n.form-actions .btn i {\n  margin-left: 0.5rem;\n}\n.form-actions .spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n.p-toast .p-toast-message {\n  border-radius: 8px !important;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n}\n.p-toast-message-success .p-toast-icon {\n  background: #428177 !important;\n  color: white !important;\n}\n.p-toast-message-error .p-toast-icon {\n  background: #6B1F2A !important;\n  color: white !important;\n}\n.p-toast-message-warn .p-toast-icon {\n  background: #B9A779 !important;\n  color: #161616 !important;\n}\n.p-toast-message-info .p-toast-icon {\n  background: #002623 !important;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .professional-form-container {\n    padding: 1rem;\n  }\n  .form-header {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .header-content {\n    flex-direction: column;\n    text-align: center;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .form-actions {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .form-section {\n    padding: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .professional-form-container {\n    padding: 0.5rem;\n  }\n  .form-header {\n    padding: 1rem;\n  }\n  .header-icon {\n    width: 50px;\n    height: 50px;\n  }\n  .form-title {\n    font-size: 1.25rem !important;\n  }\n  .form-subtitle {\n    font-size: 0.75rem !important;\n  }\n}\n.form-section {\n  animation: slideInUp 0.5s ease-out;\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n::ng-deep .p-calendar {\n  width: 100%;\n}\n::ng-deep .p-calendar .p-calendar-w-btn .p-inputtext {\n  border-radius: 8px !important;\n  padding: 0.5rem 0.75rem !important;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif !important;\n  font-size: 1rem !important;\n  color: #3D3A3B;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  transition: all 0.15s ease !important;\n}\n::ng-deep .p-calendar .p-calendar-w-btn .p-inputtext:focus {\n  outline: none !important;\n  border-color: #054239 !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n}\n::ng-deep .p-calendar .p-calendar-button {\n  background-color: transparent !important;\n  border: none !important;\n  padding: 0.5rem 0.75rem !important;\n  color: #054239 !important;\n}\n::ng-deep .p-calendar .p-calendar-button:hover {\n  background-color: rgba(5, 66, 57, 0.05) !important;\n}\n.date-picker-rtl {\n  direction: rtl;\n  text-align: right;\n  width: 100%;\n}\n/*# sourceMappingURL=add-edit-applicant.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: MaritalStatusService }, { type: ApplicantService }, { type: ActivatedRoute }, { type: Router }, { type: ToastrService }, { type: BarcodePrintService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEditApplicant, { className: "AddEditApplicant", filePath: "src/app/features/reception/components/add-edit-applicant/add-edit-applicant.ts", lineNumber: 50 });
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
//# sourceMappingURL=chunk-3E43OSFT.js.map
