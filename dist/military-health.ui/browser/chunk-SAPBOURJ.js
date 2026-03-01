import {
  Toast,
  ToastModule
} from "./chunk-BY5VP2T5.js";
import {
  ToastrService
} from "./chunk-QUV35I6O.js";
import {
  Tag,
  TagModule
} from "./chunk-XVKMQIUI.js";
import {
  Checkbox,
  CheckboxModule,
  ResetFiltersButtonComponent,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-5SMAMAOZ.js";
import "./chunk-ZBRQ7FXV.js";
import "./chunk-WAJQF222.js";
import "./chunk-BSHRCOEK.js";
import {
  BaseComponent,
  Bind,
  Button,
  ButtonModule,
  PARENT_INSTANCE
} from "./chunk-DYGQH52H.js";
import {
  BaseStyle,
  MessageService,
  PrimeTemplate,
  SharedModule
} from "./chunk-O5UBWZSW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import {
  ApplicantService
} from "./chunk-HQAVTYQP.js";
import {
  GregorianDatePipe
} from "./chunk-Q6W3HPVX.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  HttpHeaders,
  NgIf,
  NgTemplateOutlet,
  environment
} from "./chunk-7EG6WMAP.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  __spreadValues,
  booleanAttribute,
  catchError,
  forkJoin,
  inject,
  map,
  numberAttribute,
  of,
  setClassMetadata,
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
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// node_modules/@primeuix/styles/dist/progressbar/index.mjs
var style = "\n    .p-progressbar {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        height: dt('progressbar.height');\n        background: dt('progressbar.background');\n        border-radius: dt('progressbar.border.radius');\n    }\n\n    .p-progressbar-value {\n        margin: 0;\n        background: dt('progressbar.value.background');\n    }\n\n    .p-progressbar-label {\n        color: dt('progressbar.label.color');\n        font-size: dt('progressbar.label.font.size');\n        font-weight: dt('progressbar.label.font.weight');\n    }\n\n    .p-progressbar-determinate .p-progressbar-value {\n        height: 100%;\n        width: 0%;\n        position: absolute;\n        display: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        transition: width 1s ease-in-out;\n    }\n\n    .p-progressbar-determinate .p-progressbar-label {\n        display: inline-flex;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::after {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n        animation-delay: 1.15s;\n    }\n\n    @keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n\n    @keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c0 = ["content"];
var _c1 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value, "", ctx_r0.unit);
  }
}
function ProgressBar_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 2);
    \u0275\u0275template(2, ProgressBar_div_0_div_2_Template, 2, 4, "div", 3)(3, ProgressBar_div_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("width", ctx_r0.value + "%")("display", "flex")("background", ctx_r0.color);
    \u0275\u0275property("pBind", ctx_r0.ptm("value"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate && !ctx_r0._contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c1, ctx_r0.value));
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275property("pBind", ctx_r0.ptm("value"));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.mode == "determinate",
    "p-progressbar-indeterminate": instance.mode == "indeterminate"
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressBarStyle_BaseFactory || (\u0275ProgressBarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var PROGRESSBAR_INSTANCE = new InjectionToken("PROGRESSBAR_INSTANCE");
var ProgressBar = class _ProgressBar extends BaseComponent {
  $pcProgressBar = inject(PROGRESSBAR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  /**
   * Template of the content.
   * @group templates
   */
  contentTemplate;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressBarStyle);
  templates;
  _contentTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (\u0275ProgressBar_BaseFactory || (\u0275ProgressBar_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"], ["p-progress-bar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 6,
    hostBindings: function ProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("aria-level", ctx.value + ctx.unit);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressBarStyle, {
      provide: PROGRESSBAR_INSTANCE,
      useExisting: _ProgressBar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressBar
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [[3, "class", "pBind", "width", "display", "background", 4, "ngIf"], [3, "class", "pBind", "background", 4, "ngIf"], [3, "pBind"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProgressBar_div_0_Template, 4, 17, "div", 0)(1, ProgressBar_div_1_Template, 1, 5, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar, p-progress-bar",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <div *ngIf="mode === 'determinate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.width]="value + '%'" [style.display]="'flex'" [style.background]="color">
            <div [class]="cx('label')" [pBind]="ptm('label')">
                <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'">{{ value }}{{ unit }}</div>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
            </div>
        </div>
        <div *ngIf="mode === 'indeterminate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.background]="color"></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressBarStyle, {
        provide: PROGRESSBAR_INSTANCE,
        useExisting: ProgressBar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressBar
      }],
      host: {
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuenow]": "value",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-level]": "value + unit",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule,
    imports: [ProgressBar, SharedModule],
    exports: [ProgressBar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressBar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressBar, SharedModule],
      exports: [ProgressBar, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/supervisor/services/recruitment-export.service.ts
var RecruitmentExportService = class _RecruitmentExportService {
  http;
  apiUrl = `${environment.apiUrl}/api/RecruitmentExport`;
  constructor(http) {
    this.http = http;
  }
  /**
   * الحصول على headers للمصادقة
   */
  getAuthHeaders() {
    const token = localStorage.getItem("access_token") || localStorage.getItem("token") || "";
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  /**
   * الحصول على قائمة المنتسبين الجاهزين للتصدير
   */
  getPendingExports() {
    return this.http.get(`${this.apiUrl}/pending`, {
      headers: this.getAuthHeaders()
    }).pipe(map((response) => {
      let data = [];
      if (Array.isArray(response)) {
        data = response;
      } else if (response && response.data && Array.isArray(response.data)) {
        data = response.data;
      } else if (response && response.succeeded && Array.isArray(response.data)) {
        data = response.data;
      }
      return data.map((item) => this.normalizeExportItem(item));
    }), catchError(() => {
      return of([]);
    }));
  }
  /**
   * تطبيع عنصر التصدير وملء الحقول الناقصة
   */
  normalizeExportItem(item) {
    const evaluationDate = item.supervisorEvaluationDate ?? item.evaluationDate ?? item.finalDecision?.decisionDate ?? item.decisionDate ?? null;
    return {
      sequenceNumber: item.sequenceNumber ?? 0,
      fileNumber: item.fileNumber ?? "",
      fullName: item.fullName ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      motherName: item.motherName ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      maritalStatus: item.maritalStatus ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      dateOfBirth: item.dateOfBirth ?? null,
      bloodType: item.bloodType ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      recruitmentCenter: item.recruitmentCenter ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      result: item.result ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      supervisorEvaluationDate: evaluationDate,
      reason: item.reason ?? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
      decisionID: item.decisionID ?? item.decisionId ?? null,
      recommendations: item.recommendations ?? item.recommendation ?? null
    };
  }
  /**
   * تصدير منتسبين محددين
   */
  exportToRecruitment(request) {
    return this.http.post(`${this.apiUrl}/export`, request, {
      headers: this.getAuthHeaders(),
      responseType: "blob"
    }).pipe(catchError((err) => {
      if (err.error instanceof Blob) {
        err.error.text().then(() => {
        });
      }
      throw err;
    }));
  }
  /**
   * تصدير جميع المنتسبين غير المُصدّرين
   */
  exportAll() {
    return this.http.post(`${this.apiUrl}/export-all`, {}, {
      headers: this.getAuthHeaders(),
      responseType: "blob"
    }).pipe(catchError((err) => {
      if (err.error instanceof Blob) {
        err.error.text().then(() => {
        });
      }
      throw err;
    }));
  }
  static \u0275fac = function RecruitmentExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruitmentExportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecruitmentExportService, factory: _RecruitmentExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruitmentExportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/supervisor/components/recruitment-export/recruitment-export.ts
var _c02 = ["exportTable"];
var _c12 = ["searchInput"];
var _c2 = () => [10, 20, 50, 100];
var _c3 = () => ["fileNumber", "fullName", "motherName", "recruitmentCenter"];
var _c4 = () => ({ "height": "6px" });
function RecruitmentExportComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9)(1, "article", 33)(2, "header");
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062C\u0627\u0647\u0632\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "\u062F\u0641\u0639\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u062A\u0635\u062F\u064A\u0631 \u0645\u0639 \u0643\u0627\u0645\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0647\u0627 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "article", 35)(11, "header");
    \u0275\u0275element(12, "i", 36);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u0627\u0644\u0645\u062D\u062F\u062F \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "\u0645\u0644\u0641\u0627\u062A \u0633\u064A\u062A\u0645 \u062A\u0636\u0645\u064A\u0646\u0647\u0627 \u062D\u0627\u0644 \u062A\u0646\u0641\u064A\u0630 \u0623\u0645\u0631 \u0627\u0644\u062A\u0635\u062F\u064A\u0631.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "article", 37)(20, "header");
    \u0275\u0275element(21, "i", 38);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0627\u0647\u0632\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "\u0627\u062C\u0639\u0644\u0647\u0627 100\u066A \u0644\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0628\u062B\u0642\u0629.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "article", 39)(30, "header");
    \u0275\u0275element(31, "i", 40);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37, "\u0639\u062F\u062F \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u0644\u0645 \u062A\u064F\u062D\u062F\u0651\u062F \u0628\u0639\u062F.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.pendingExports.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedExports.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 4, ctx_r1.pendingExports.length ? ctx_r1.selectedExports.length / ctx_r1.pendingExports.length * 100 : 0, "1.0-0"), "%");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.pendingExports.length - ctx_r1.selectedExports.length);
  }
}
function RecruitmentExportComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "p-progressBar", 41);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062C\u0647\u064A\u0632 \u0645\u0644\u0641 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 ...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c4));
  }
}
function RecruitmentExportComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("ngModelChange", function RecruitmentExportComponent_ng_template_56_Template_p_checkbox_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedExports.length === ctx_r1.pendingExports.length ? ctx_r1.deselectAll() : ctx_r1.selectAll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "th", 44);
    \u0275\u0275text(4, "#");
    \u0275\u0275element(5, "p-sortIcon", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 46);
    \u0275\u0275text(7, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275element(8, "p-sortIcon", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 48);
    \u0275\u0275text(10, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644");
    \u0275\u0275element(11, "p-sortIcon", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 50);
    \u0275\u0275text(13, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0645");
    \u0275\u0275element(14, "p-sortIcon", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 52);
    \u0275\u0275text(18, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F");
    \u0275\u0275element(19, "p-sortIcon", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 54);
    \u0275\u0275text(23, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F");
    \u0275\u0275element(24, "p-sortIcon", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 56);
    \u0275\u0275text(26, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275element(27, "p-sortIcon", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 58);
    \u0275\u0275text(29, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0642\u064A\u064A\u0645");
    \u0275\u0275element(30, "p-sortIcon", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", ctx_r1.selectedExports.length === ctx_r1.pendingExports.length && ctx_r1.pendingExports.length > 0);
  }
}
function RecruitmentExportComponent_ng_template_57_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "gregorianDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, item_r5.dateOfBirth, "yyyy/MM/dd"));
  }
}
function RecruitmentExportComponent_ng_template_57_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentExportComponent_ng_template_57_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "gregorianDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, item_r5.supervisorEvaluationDate, "yyyy/MM/dd"));
  }
}
function RecruitmentExportComponent_ng_template_57_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentExportComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 60);
    \u0275\u0275listener("click", function RecruitmentExportComponent_ng_template_57_Template_tr_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelection(item_r5));
    });
    \u0275\u0275elementStart(1, "td", 61);
    \u0275\u0275listener("click", function RecruitmentExportComponent_ng_template_57_Template_td_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "p-checkbox", 62);
    \u0275\u0275listener("ngModelChange", function RecruitmentExportComponent_ng_template_57_Template_p_checkbox_ngModelChange_2_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelection(item_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 63)(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 63)(7, "span", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 63);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 63);
    \u0275\u0275template(16, RecruitmentExportComponent_ng_template_57_span_16_Template, 3, 4, "span", 66)(17, RecruitmentExportComponent_ng_template_57_span_17_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 63);
    \u0275\u0275element(19, "p-tag", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 63);
    \u0275\u0275element(23, "p-tag", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 63);
    \u0275\u0275template(25, RecruitmentExportComponent_ng_template_57_span_25_Template, 3, 4, "span", 66)(26, RecruitmentExportComponent_ng_template_57_span_26_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 63);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("row-selected", ctx_r1.isSelected(item_r5));
    \u0275\u0275property("title", ctx_r1.isSelected(item_r5) ? "\u0627\u0646\u0642\u0631 \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062F" : "\u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u062D\u062F\u064A\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", ctx_r1.isSelected(item_r5))("inputId", "checkbox-" + item_r5.sequenceNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.sequenceNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.fileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.motherName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.maritalStatus || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r5.dateOfBirth);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", item_r5.bloodType || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.recruitmentCenter || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", item_r5.result || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F")("severity", item_r5.result === "\u0645\u0642\u0628\u0648\u0644" ? "success" : item_r5.result ? "danger" : "warn");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.supervisorEvaluationDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r5.supervisorEvaluationDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.reason || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function RecruitmentExportComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69)(2, "div", 70);
    \u0275\u0275element(3, "i", 71);
    \u0275\u0275elementStart(4, "p", 72);
    \u0275\u0275text(5, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u062A\u0635\u062F\u064A\u0631 \u062D\u0627\u0644\u064A\u0627\u064B.");
    \u0275\u0275elementEnd()()()();
  }
}
function RecruitmentExportComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275element(2, "i", 73);
    \u0275\u0275elementStart(3, "p", 74);
    \u0275\u0275text(4, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...");
    \u0275\u0275elementEnd()()();
  }
}
var RecruitmentExportComponent = class _RecruitmentExportComponent {
  exportService;
  toastr;
  messageService;
  applicantService;
  pendingExports = [];
  selectedExports = [];
  loading = false;
  exporting = false;
  globalFilter = "";
  tableHeight = "600px";
  decisionIdCache = /* @__PURE__ */ new Map();
  table;
  searchInput;
  constructor(exportService, toastr, messageService, applicantService) {
    this.exportService = exportService;
    this.toastr = toastr;
    this.messageService = messageService;
    this.applicantService = applicantService;
  }
  ngOnInit() {
    this.updateTableHeight();
    this.loadPendingExports();
  }
  onViewportResize() {
    this.updateTableHeight();
  }
  updateTableHeight() {
    if (typeof window === "undefined") {
      this.tableHeight = "480px";
      return;
    }
    const available = window.innerHeight - 420;
    this.tableHeight = `${Math.max(available, 320)}px`;
  }
  onGlobalFilter(event) {
    const value = event.target?.value || "";
    this.globalFilter = value;
    this.table?.filterGlobal(value, "contains");
  }
  resetFilters() {
    this.globalFilter = "";
    if (this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadPendingExports();
  }
  loadPendingExports() {
    this.loading = true;
    this.exportService.getPendingExports().subscribe({
      next: (data) => {
        const normalizedList = data || [];
        const uniqueByFile = /* @__PURE__ */ new Map();
        normalizedList.forEach((item) => {
          const key = this.buildUniqueKey(item);
          if (!uniqueByFile.has(key)) {
            uniqueByFile.set(key, __spreadValues({}, item));
          }
        });
        const hadDuplicates = uniqueByFile.size < normalizedList.length;
        this.pendingExports = Array.from(uniqueByFile.values());
        this.selectedExports = [];
        this.decisionIdCache.clear();
        this.pendingExports.forEach((item) => {
          if (item.fileNumber && item.decisionID) {
            this.decisionIdCache.set(item.fileNumber, item.decisionID);
          }
        });
        if (hadDuplicates) {
          this.toastr.info("\u062A\u0645 \u0627\u0633\u062A\u0628\u0639\u0627\u062F \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0645\u0643\u0631\u0631\u0629 \u0628\u062D\u0633\u0628 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0642\u0628\u0644 \u0627\u0644\u062A\u0635\u062F\u064A\u0631.", "\u062A\u0646\u0628\u064A\u0647");
        }
        const itemsNeedingDetails = this.pendingExports.filter((item) => item.fileNumber && (!item.supervisorEvaluationDate || !item.decisionID));
        if (itemsNeedingDetails.length > 0) {
          const requests = itemsNeedingDetails.map((item) => this.applicantService.getApplicantByFileNumber$(item.fileNumber).pipe(map((details) => {
            if (details?.finalDecision?.decisionDate && !item.supervisorEvaluationDate) {
              item.supervisorEvaluationDate = details.finalDecision.decisionDate;
            }
            if (details?.finalDecision?.decisionID) {
              item.decisionID = details.finalDecision.decisionID;
              this.decisionIdCache.set(item.fileNumber, item.decisionID);
            }
            return item;
          }), catchError(() => of(item))));
          forkJoin(requests).subscribe({
            next: () => {
              this.loading = false;
            },
            error: () => {
              this.loading = false;
            }
          });
        } else {
          this.loading = false;
        }
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onExportSelected() {
    if (this.selectedExports.length === 0) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0646\u062A\u0633\u0628 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0644\u062A\u0635\u062F\u064A\u0631", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    this.ensureDecisionIdsForSelection().subscribe({
      next: (decisionIds) => {
        if (decisionIds.length === 0) {
          this.toastr.error("\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A. \u064A\u0631\u062C\u0649 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0641\u062D\u0629 \u0648\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649", "\u062E\u0637\u0623");
          return;
        }
        this.exporting = true;
        this.exportService.exportToRecruitment({
          decisionIds,
          exportAll: false
        }).subscribe({
          next: (blob) => {
            if (blob && blob.size > 0) {
              const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, -5);
              this.downloadFile(blob, `Recruitment_Export_${timestamp}.pdf`);
              this.toastr.success(`\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 ${decisionIds.length} \u0645\u0646\u062A\u0633\u0628 \u0628\u0646\u062C\u0627\u062D`, "\u0646\u062C\u0627\u062D");
              this.exporting = false;
              this.selectedExports = [];
              this.loadPendingExports();
            } else {
              this.toastr.error("\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u064F\u0635\u062F\u0651\u064E\u0631 \u0641\u0627\u0631\u063A \u0623\u0648 \u0645\u0639\u0637\u0648\u0628", "\u062E\u0637\u0623");
              this.exporting = false;
            }
          },
          error: (err) => {
            let errorMessage = "\u0641\u0634\u0644 \u0641\u064A \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A";
            if (err.status === 401) {
              errorMessage = "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643 \u0628\u0627\u0644\u0648\u0635\u0648\u0644. \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649";
            } else if (err.status === 404) {
              errorMessage = "\u0627\u0644\u0640 API \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u0627\u062F\u0645";
            } else if (err.status === 500) {
              errorMessage = "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B";
            }
            this.toastr.error(errorMessage, "\u062E\u0637\u0623");
            this.exporting = false;
          }
        });
      }
    });
  }
  onExportAll() {
    if (this.pendingExports.length === 0) {
      this.toastr.warning("\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u062A\u0635\u062F\u064A\u0631", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    this.exporting = true;
    this.exportService.exportAll().subscribe({
      next: (blob) => {
        if (blob && blob.size > 0) {
          const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, -5);
          this.downloadFile(blob, `Recruitment_Export_All_${timestamp}.pdf`);
          this.toastr.success(`\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 ${this.pendingExports.length} \u0645\u0646\u062A\u0633\u0628 \u0628\u0646\u062C\u0627\u062D`, "\u0646\u062C\u0627\u062D");
          this.exporting = false;
          this.selectedExports = [];
          this.loadPendingExports();
        } else {
          this.toastr.error("\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u064F\u0635\u062F\u0651\u064E\u0631 \u0641\u0627\u0631\u063A \u0623\u0648 \u0645\u0639\u0637\u0648\u0628", "\u062E\u0637\u0623");
          this.exporting = false;
        }
      },
      error: (err) => {
        let errorMessage = "\u0641\u0634\u0644 \u0641\u064A \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A";
        if (err.status === 401) {
          errorMessage = "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643 \u0628\u0627\u0644\u0648\u0635\u0648\u0644. \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649";
        } else if (err.status === 404) {
          errorMessage = "\u0627\u0644\u0640 API \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u0627\u062F\u0645";
        } else if (err.status === 500) {
          errorMessage = "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B";
        }
        this.toastr.error(errorMessage, "\u062E\u0637\u0623");
        this.exporting = false;
      }
    });
  }
  downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  isSelected(item) {
    return this.selectedExports.some((selected) => selected.sequenceNumber === item.sequenceNumber || this.hasSameDecision(selected, item));
  }
  toggleSelection(item) {
    const index = this.selectedExports.findIndex((selected) => selected.sequenceNumber === item.sequenceNumber || this.hasSameDecision(selected, item));
    if (index > -1) {
      this.selectedExports.splice(index, 1);
    } else {
      this.selectedExports.push(__spreadValues({}, item));
    }
  }
  selectAll() {
    this.selectedExports = this.pendingExports.map((item) => __spreadValues({}, item));
  }
  deselectAll() {
    this.selectedExports = [];
  }
  buildUniqueKey(item) {
    const normalized = (item.fileNumber || "").trim().toLowerCase();
    return normalized || `seq-${item.sequenceNumber}`;
  }
  hasSameDecision(a, b) {
    return !!a.decisionID && !!b.decisionID && a.decisionID === b.decisionID;
  }
  getDecisionIdForItem(item) {
    if (item.decisionID) {
      if (item.fileNumber) {
        this.decisionIdCache.set(item.fileNumber, item.decisionID);
      }
      return of(item.decisionID);
    }
    if (item.fileNumber) {
      const cached = this.decisionIdCache.get(item.fileNumber);
      if (cached) {
        item.decisionID = cached;
        return of(cached);
      }
      return this.applicantService.getApplicantByFileNumber$(item.fileNumber).pipe(map((details) => {
        const decisionId = details?.finalDecision?.decisionID ?? null;
        if (decisionId) {
          item.decisionID = decisionId;
          this.decisionIdCache.set(item.fileNumber, decisionId);
        }
        return decisionId;
      }), catchError(() => of(null)));
    }
    return of(null);
  }
  /**
   * Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø£Ù† ÙƒÙ„ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…Ø­Ø¯Ø¯Ø© ØªÙ…ØªÙ„Ùƒ decisionID
   */
  ensureDecisionIdsForSelection() {
    if (this.selectedExports.length === 0) {
      return of([]);
    }
    const lookups = this.selectedExports.map((item) => this.getDecisionIdForItem(item));
    return forkJoin(lookups).pipe(map((resolvedIds) => {
      const uniqueByFile = /* @__PURE__ */ new Map();
      const missing = [];
      let duplicates = 0;
      this.selectedExports.forEach((item, index) => {
        const decisionId = item.decisionID ?? resolvedIds[index];
        const key = this.buildUniqueKey(item);
        if (decisionId) {
          if (!uniqueByFile.has(key)) {
            uniqueByFile.set(key, decisionId);
          } else {
            duplicates++;
          }
        } else {
          missing.push(key);
        }
      });
      if (missing.length) {
        this.toastr.warning(`\u062A\u0645 \u062A\u062C\u0627\u0647\u0644 ${missing.length} \u0645\u0646\u062A\u0633\u0628/\u0629 \u0644\u0639\u062F\u0645 \u062A\u0648\u0641\u0651\u0631 \u0642\u0631\u0627\u0631 \u0646\u0647\u0627\u0626\u064A \u0644\u0647\u0645.`, "\u062A\u0646\u0628\u064A\u0647");
      }
      if (duplicates > 0) {
        this.toastr.info("\u062A\u0645 \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0645\u0643\u0631\u0631\u0629 (\u0646\u0641\u0633 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641) \u0645\u0646 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0636\u0645\u0627\u0646 \u0639\u062F\u0645 \u0627\u0644\u062A\u0643\u0631\u0627\u0631.", "\u0645\u0639\u0644\u0648\u0645\u0629");
      }
      return Array.from(uniqueByFile.values());
    }));
  }
  static \u0275fac = function RecruitmentExportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruitmentExportComponent)(\u0275\u0275directiveInject(RecruitmentExportService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ApplicantService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruitmentExportComponent, selectors: [["app-recruitment-export"]], viewQuery: function RecruitmentExportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, hostBindings: function RecruitmentExportComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function RecruitmentExportComponent_resize_HostBindingHandler() {
        return ctx.onViewportResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 61, vars: 25, consts: [["searchInput", ""], ["exportTable", ""], [1, "recruitment-export-page", "container-fluid"], [1, "hero-panel", "glass-card"], [1, "hero-text"], [1, "eyebrow"], [1, "lead"], [1, "hero-meta"], [1, "meta-chip"], [1, "stats-grid"], [1, "progress-panel"], [1, "table-shell", "glass-card"], [1, "table-headline"], [1, "table-controls"], [1, "control-stack", "search-block"], [1, "search-wrapper"], [1, "pi", "pi-search"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641...", 1, "search-input", 3, "input", "value"], [1, "reset-chip", 3, "reset"], ["type", "button", 1, "ghost-refresh", 3, "click", "disabled"], [1, "pi", "pi-refresh"], [1, "control-stack", "actions-block"], [1, "button-group", "primary-group"], ["label", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F", "icon", "pi pi-download", "severity", "success", "styleClass", "wide", 3, "onClick", "disabled"], ["label", "\u062A\u0635\u062F\u064A\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0644\u0641\u0627\u062A", "icon", "pi pi-file-pdf", "severity", "info", "styleClass", "wide", 3, "onClick", "disabled"], [1, "button-group", "secondary-group"], ["label", "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644", "icon", "pi pi-check-square", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062F", "icon", "pi pi-times", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["responsiveLayout", "scroll", "dataKey", "sequenceNumber", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields", "sortMode", "scrollable", "scrollHeight", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [1, "stat-card", "gradient-green"], [1, "pi", "pi-database"], [1, "stat-card", "gradient-blue"], [1, "pi", "pi-check-circle"], [1, "stat-card", "gradient-gold"], [1, "pi", "pi-percentage"], [1, "stat-card", "gradient-slate"], [1, "pi", "pi-clock"], ["mode", "indeterminate"], [2, "width", "3.2rem"], [3, "ngModelChange", "binary", "ngModel"], ["pSortableColumn", "sequenceNumber"], ["field", "sequenceNumber"], ["pSortableColumn", "fileNumber"], ["field", "fileNumber"], ["pSortableColumn", "fullName"], ["field", "fullName"], ["pSortableColumn", "motherName"], ["field", "motherName"], ["pSortableColumn", "dateOfBirth"], ["field", "dateOfBirth"], ["pSortableColumn", "recruitmentCenter"], ["field", "recruitmentCenter"], ["pSortableColumn", "result"], ["field", "result"], ["pSortableColumn", "supervisorEvaluationDate"], ["field", "supervisorEvaluationDate"], [3, "click", "title"], [1, "text-center", "align-middle", 3, "click"], [3, "ngModelChange", "binary", "ngModel", "inputId"], [1, "text-center", "align-middle"], [1, "badge-seq"], [1, "file-number"], [4, "ngIf"], ["severity", "info", 3, "value"], [3, "value", "severity"], ["colspan", "12", 1, "text-center", "py-5"], [1, "empty-state"], [1, "pi", "pi-inbox"], [1, "mt-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "mt-3"]], template: function RecruitmentExportComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "div", 4)(3, "p", 5);
      \u0275\u0275text(4, "\u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u0634\u0631\u0627\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u062A\u0635\u062F\u064A\u0631 \u062F\u0641\u0639\u0627\u062A \u0627\u0644\u062A\u062C\u0646\u064A\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " \u062A\u0623\u0643\u062F \u0645\u0646 \u062C\u0627\u0647\u0632\u064A\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062B\u0645 \u0635\u062F\u0651\u0631 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0628\u0635\u064A\u063A\u0629 PDF \u0645\u0639 \u062A\u062A\u0628\u0639 \u0644\u062D\u0638\u064A \u0644\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0627\u0647\u0632\u064A\u0629 \u0648\u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span");
      \u0275\u0275text(12, "\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062C\u0627\u0647\u0632\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8)(16, "span");
      \u0275\u0275text(17, "\u0627\u0644\u0645\u062D\u062F\u0651\u062F \u0627\u0644\u0622\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "strong");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "span");
      \u0275\u0275text(22, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u062A\u0635\u062F\u064A\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "strong");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(25, RecruitmentExportComponent_Conditional_25_Template, 38, 7, "section", 9);
      \u0275\u0275conditionalCreate(26, RecruitmentExportComponent_Conditional_26_Template, 4, 3, "section", 10);
      \u0275\u0275elementStart(27, "section", 11)(28, "header", 12)(29, "div")(30, "p", 5);
      \u0275\u0275text(31, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h2");
      \u0275\u0275text(33, "\u0627\u0644\u0645\u0646\u062A\u0633\u0628\u0648\u0646 \u0627\u0644\u062C\u0627\u0647\u0632\u0648\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0623\u064A \u0635\u0641 \u0644\u062A\u062D\u062F\u064A\u062F\u0647. \u064A\u0638\u0647\u0631 \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062E\u0636\u0631 \u0639\u0646\u062F \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0641.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "div", 15);
      \u0275\u0275element(39, "i", 16);
      \u0275\u0275elementStart(40, "input", 17, 0);
      \u0275\u0275listener("input", function RecruitmentExportComponent_Template_input_input_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onGlobalFilter($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "app-reset-filters-button", 18);
      \u0275\u0275listener("reset", function RecruitmentExportComponent_Template_app_reset_filters_button_reset_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 19);
      \u0275\u0275listener("click", function RecruitmentExportComponent_Template_button_click_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadPendingExports());
      });
      \u0275\u0275element(44, "i", 20);
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0622\u0646");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 21)(48, "div", 22)(49, "p-button", 23);
      \u0275\u0275listener("onClick", function RecruitmentExportComponent_Template_p_button_onClick_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onExportSelected());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p-button", 24);
      \u0275\u0275listener("onClick", function RecruitmentExportComponent_Template_p_button_onClick_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onExportAll());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 25)(52, "p-button", 26);
      \u0275\u0275listener("onClick", function RecruitmentExportComponent_Template_p_button_onClick_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAll());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p-button", 27);
      \u0275\u0275listener("onClick", function RecruitmentExportComponent_Template_p_button_onClick_53_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.deselectAll());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "p-table", 28, 1);
      \u0275\u0275template(56, RecruitmentExportComponent_ng_template_56_Template, 33, 2, "ng-template", 29)(57, RecruitmentExportComponent_ng_template_57_Template, 29, 20, "ng-template", 30)(58, RecruitmentExportComponent_ng_template_58_Template, 6, 0, "ng-template", 31)(59, RecruitmentExportComponent_ng_template_59_Template, 5, 0, "ng-template", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(60, "p-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.pendingExports.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.selectedExports.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.pendingExports.length - ctx.selectedExports.length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingExports.length > 0 ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.exporting ? 26 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275property("value", ctx.globalFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("pi-spin", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.selectedExports.length === 0 || ctx.exporting);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.pendingExports.length === 0 || ctx.exporting);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.pendingExports.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.selectedExports.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.pendingExports)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(23, _c2))("globalFilterFields", \u0275\u0275pureFunction0(24, _c3))("sortMode", "single")("scrollable", true)("scrollHeight", ctx.tableHeight)("rowHover", true);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, ButtonModule, Button, CheckboxModule, Checkbox, ToastModule, Toast, TagModule, Tag, ProgressBarModule, ProgressBar, ResetFiltersButtonComponent, DecimalPipe, GregorianDatePipe], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --export-bg:\n    linear-gradient(\n      180deg,\n      #f5f8f7 0%,\n      #e6ebe8 100%);\n  --export-card: rgba(255, 255, 255, 0.92);\n  --export-border: rgba(255, 255, 255, 0.4);\n  --export-green: #0b7d62;\n  --export-dark: #0a2523;\n  --export-gold: #d4a017;\n}\n.recruitment-export-page[_ngcontent-%COMP%] {\n  background: var(--export-bg);\n  padding: clamp(1rem, 2.5vw, 2.5rem);\n  min-height: calc(100vh - 120px);\n  font-family: var(--font-family-primary);\n  color: #0a1d1a;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--export-card);\n  border-radius: 28px;\n  border: 1px solid var(--export-border);\n  box-shadow: 0 25px 60px rgba(7, 22, 20, 0.18);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.hero-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: clamp(1.5rem, 3vw, 2.5rem);\n  background:\n    linear-gradient(\n      135deg,\n      #0c4a41,\n      #0b6656);\n  color: #f8fffb;\n}\n.hero-panel[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n  flex: 1 1 340px;\n  color: #fefefe;\n}\n.hero-panel[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\n  margin-bottom: 0.5rem;\n  color: #ffffff;\n}\n.hero-panel[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1rem;\n  line-height: 1.8;\n}\n.hero-panel[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-panel[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.hero-panel[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%]   .meta-chip[_ngcontent-%COMP%] {\n  padding: 0.9rem 1.1rem;\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.85);\n}\n.hero-panel[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%]   .meta-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.25rem;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  padding: 1.35rem;\n  color: white;\n  box-shadow: 0 18px 40px rgba(7, 22, 20, 0.2);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  margin: 0.5rem 0;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.stats-grid[_ngcontent-%COMP%]   .gradient-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1dbd8a,\n      #0b7d62);\n}\n.stats-grid[_ngcontent-%COMP%]   .gradient-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3fada8,\n      #2a5470);\n}\n.stats-grid[_ngcontent-%COMP%]   .gradient-gold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f9d976,\n      #f39f86);\n}\n.stats-grid[_ngcontent-%COMP%]   .gradient-slate[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4b6cb7,\n      #182848);\n}\n.preflight-card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1.5rem;\n  color: #1f3a33;\n}\n.preflight-card[_ngcontent-%COMP%]   .preflight-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.preflight-card[_ngcontent-%COMP%]   .preflight-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--export-green);\n  font-size: 1.3rem;\n}\n.preflight-card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.25rem;\n  line-height: 1.7;\n}\n.progress-panel[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  background: white;\n  border-radius: 20px;\n  padding: 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  border: 1px solid rgba(6, 73, 62, 0.1);\n}\n.progress-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #274640;\n  font-weight: 600;\n}\n.table-shell[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  overflow: hidden;\n  background: #ffffff;\n}\n.table-shell[_ngcontent-%COMP%]   .table-headline[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  border-bottom: 1px solid rgba(8, 61, 47, 0.08);\n  padding-bottom: 1rem;\n}\n.table-shell[_ngcontent-%COMP%]   .table-headline[_ngcontent-%COMP%]   .table-pill[_ngcontent-%COMP%] {\n  background: rgba(5, 66, 57, 0.1);\n  border-radius: 999px;\n  padding: 0.6rem 1.4rem;\n  min-width: 150px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #054239;\n}\n.table-shell[_ngcontent-%COMP%]   .table-headline[_ngcontent-%COMP%]   .table-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%] {\n  margin: 1.2rem 0 0;\n  padding: 1rem;\n  border: 1px solid rgba(6, 73, 62, 0.08);\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1rem;\n  background: #f8fbfa;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .control-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  border-radius: 999px;\n  border: 1px solid rgba(5, 66, 57, 0.2);\n  padding: 0.55rem 1rem;\n  background: white;\n  flex: 1 1 220px;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4b6e64;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  color: #223b35;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #8aa39a;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .reset-chip[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px dashed rgba(5, 66, 57, 0.35);\n  padding: 0.35rem 0.9rem;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .ghost-refresh[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 12px;\n  border: 1px solid rgba(5, 66, 57, 0.15);\n  padding: 0.5rem 1rem;\n  background: white;\n  color: #054239;\n  font-weight: 600;\n  transition: 0.2s ease;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .ghost-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #054239;\n  color: white;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .ghost-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  flex: 1 1 180px;\n}\n  .recruitment-export-page .p-table {\n  border-radius: 24px;\n  box-shadow: 0 18px 35px rgba(8, 61, 47, 0.12);\n  overflow: hidden;\n}\n  .recruitment-export-page .p-datatable-wrapper, \n  .recruitment-export-page .p-datatable-scrollable-wrapper {\n  border-radius: 18px;\n}\n  .recruitment-export-page .p-datatable-thead > tr > th {\n  background: #032422 !important;\n  color: #cde9df !important;\n  font-weight: 600 !important;\n  font-size: 0.78rem !important;\n  text-align: center !important;\n  padding: 0.65rem !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\n  .recruitment-export-page .p-datatable-tbody > tr {\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n  .recruitment-export-page .p-datatable-tbody > tr:nth-child(even) {\n  background: rgba(5, 66, 57, 0.02);\n}\n  .recruitment-export-page .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.08);\n}\n  .recruitment-export-page .p-datatable-tbody > tr.row-selected {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(5, 66, 57, 0.25),\n      rgba(5, 66, 57, 0.05));\n  box-shadow: inset 0 0 0 1px rgba(5, 66, 57, 0.3);\n}\n  .recruitment-export-page .p-datatable-tbody > tr > td {\n  padding: 0.55rem 0.4rem !important;\n  font-size: 0.85rem !important;\n  border-color: rgba(3, 36, 34, 0.05) !important;\n  white-space: nowrap !important;\n}\n.badge-seq[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  padding: 0.15rem 0.6rem;\n  background: rgba(5, 66, 57, 0.15);\n  color: #054239;\n  font-weight: 700;\n}\n.file-number[_ngcontent-%COMP%] {\n  color: #035e55;\n  font-weight: 600;\n}\n  .recruitment-export-page .p-paginator {\n  border-top: 1px solid rgba(3, 36, 34, 0.08);\n  padding: 1rem;\n  background: white;\n}\n  .recruitment-export-page .p-checkbox .p-checkbox-box {\n  border-radius: 10px !important;\n  border-width: 2px !important;\n  border-color: rgba(5, 66, 57, 0.6) !important;\n}\n  .recruitment-export-page .p-checkbox-box.p-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #0b7d62,\n      #0a4032) !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6f7b7a;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--export-green);\n}\n@media (max-width: 768px) {\n  .table-shell[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n    .recruitment-export-page .p-datatable-thead > tr > th, \n     .recruitment-export-page .p-datatable-tbody > tr > td {\n    font-size: 0.75rem !important;\n    white-space: normal !important;\n  }\n}\n/*# sourceMappingURL=recruitment-export.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruitmentExportComponent, [{
    type: Component,
    args: [{ selector: "app-recruitment-export", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      CheckboxModule,
      ToastModule,
      TagModule,
      ProgressBarModule,
      GregorianDatePipe,
      ResetFiltersButtonComponent
    ], providers: [MessageService], template: `<div class="recruitment-export-page container-fluid">
  <section class="hero-panel glass-card">
    <div class="hero-text">
      <p class="eyebrow">\u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u0634\u0631\u0627\u0641</p>
      <h1>\u062A\u0635\u062F\u064A\u0631 \u062F\u0641\u0639\u0627\u062A \u0627\u0644\u062A\u062C\u0646\u064A\u062F</h1>
      <p class="lead">
        \u062A\u0623\u0643\u062F \u0645\u0646 \u062C\u0627\u0647\u0632\u064A\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062B\u0645 \u0635\u062F\u0651\u0631 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0628\u0635\u064A\u063A\u0629 PDF \u0645\u0639 \u062A\u062A\u0628\u0639 \u0644\u062D\u0638\u064A 
        \u0644\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0627\u0647\u0632\u064A\u0629 \u0648\u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629.
      </p>
      <div class="hero-meta">
        <div class="meta-chip">
          <span>\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062C\u0627\u0647\u0632\u0629</span>
          <strong>{{ pendingExports.length }}</strong>
        </div>
        <div class="meta-chip">
          <span>\u0627\u0644\u0645\u062D\u062F\u0651\u062F \u0627\u0644\u0622\u0646</span>
          <strong>{{ selectedExports.length }}</strong>
        </div>
        <div class="meta-chip">
          <span>\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u062A\u0635\u062F\u064A\u0631</span>
          <strong>{{ pendingExports.length - selectedExports.length }}</strong>
        </div>
      </div>
    </div>
  </section>

  @if (pendingExports.length > 0) {
    <section class="stats-grid">
      <article class="stat-card gradient-green">
        <header>
          <i class="pi pi-database"></i>
          <span>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062C\u0627\u0647\u0632\u0629</span>
        </header>
        <strong>{{ pendingExports.length }}</strong>
        <p>\u062F\u0641\u0639\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u062A\u0635\u062F\u064A\u0631 \u0645\u0639 \u0643\u0627\u0645\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0647\u0627 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629.</p>
      </article>
      <article class="stat-card gradient-blue">
        <header>
          <i class="pi pi-check-circle"></i>
          <span>\u0627\u0644\u0645\u062D\u062F\u062F \u062D\u0627\u0644\u064A\u0627\u064B</span>
        </header>
        <strong>{{ selectedExports.length }}</strong>
        <p>\u0645\u0644\u0641\u0627\u062A \u0633\u064A\u062A\u0645 \u062A\u0636\u0645\u064A\u0646\u0647\u0627 \u062D\u0627\u0644 \u062A\u0646\u0641\u064A\u0630 \u0623\u0645\u0631 \u0627\u0644\u062A\u0635\u062F\u064A\u0631.</p>
      </article>
      <article class="stat-card gradient-gold">
        <header>
          <i class="pi pi-percentage"></i>
          <span>\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0627\u0647\u0632\u064A\u0629</span>
        </header>
        <strong>{{ (pendingExports.length ? (selectedExports.length / pendingExports.length) * 100 : 0) | number:'1.0-0' }}%</strong>
        <p>\u0627\u062C\u0639\u0644\u0647\u0627 100\u066A \u0644\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0628\u062B\u0642\u0629.</p>
      </article>
      <article class="stat-card gradient-slate">
        <header>
          <i class="pi pi-clock"></i>
          <span>\u0627\u0644\u0645\u062A\u0628\u0642\u064A</span>
        </header>
        <strong>{{ pendingExports.length - selectedExports.length }}</strong>
        <p>\u0639\u062F\u062F \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u0644\u0645 \u062A\u064F\u062D\u062F\u0651\u062F \u0628\u0639\u062F.</p>
      </article>
    </section>
  }

  <!-- <section class="preflight-card glass-card">
    <div class="preflight-header">
      <div>
        <p class="eyebrow">\u062F\u0644\u064A\u0644 \u062C\u0648\u062F\u0629</p>
        <h3>\u0642\u0628\u0644 \u0623\u0646 \u062A\u0635\u062F\u0651\u0631</h3>
      </div>
      <i class="pi pi-info-circle"></i>
    </div>
    <ol>
      <li>\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0643\u062A\u0645\u0627\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 \u0648\u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A.</li>
      <li>\u0631\u0627\u062C\u0639 \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F \u0648\u0627\u0644\u0633\u0628\u0628 \u0642\u0628\u0644 \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u062F\u0641\u0639\u0629.</li>
      <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0632\u0631 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0644\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0638\u0647\u0648\u0631 \u0622\u062E\u0631 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A.</li>
    </ol>
  </section> -->

  @if (exporting) {
    <section class="progress-panel">
      <p-progressBar mode="indeterminate" [style]="{'height': '6px'}"></p-progressBar>
      <p>\u062C\u0627\u0631\u064A \u062A\u062C\u0647\u064A\u0632 \u0645\u0644\u0641 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 ...</p>
    </section>
  }

  <section class="table-shell glass-card">
    <header class="table-headline">
      <div>
        <p class="eyebrow">\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A</p>
        <h2>\u0627\u0644\u0645\u0646\u062A\u0633\u0628\u0648\u0646 \u0627\u0644\u062C\u0627\u0647\u0632\u0648\u0646</h2>
        <p>\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0623\u064A \u0635\u0641 \u0644\u062A\u062D\u062F\u064A\u062F\u0647. \u064A\u0638\u0647\u0631 \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062E\u0636\u0631 \u0639\u0646\u062F \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0641.</p>
      </div>
      <!-- <div class="table-pill">
        <span>\u0627\u0644\u0645\u0639\u0631\u0648\u0636</span>
        <strong>{{ pendingExports.length }}</strong>
      </div> -->
    </header>

    <div class="table-controls">
      <div class="control-stack search-block">
        <div class="search-wrapper">
          <i class="pi pi-search"></i>
          <input
            #searchInput
            type="text"
            class="search-input"
            placeholder="\u0627\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641..."
            [value]="globalFilter"
            (input)="onGlobalFilter($event)" />
        </div>
        <app-reset-filters-button class="reset-chip" (reset)="resetFilters()"></app-reset-filters-button>
        <button class="ghost-refresh" type="button" (click)="loadPendingExports()" [disabled]="loading">
          <i class="pi pi-refresh" [class.pi-spin]="loading"></i>
          <span>\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0622\u0646</span>
        </button>
      </div>
      <div class="control-stack actions-block">
        <div class="button-group primary-group">
          <p-button
            label="\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F"
            icon="pi pi-download"
            severity="success"
            styleClass="wide"
            [disabled]="selectedExports.length === 0 || exporting"
            (onClick)="onExportSelected()">
          </p-button>
          <p-button
            label="\u062A\u0635\u062F\u064A\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0644\u0641\u0627\u062A"
            icon="pi pi-file-pdf"
            severity="info"
            styleClass="wide"
            [disabled]="pendingExports.length === 0 || exporting"
            (onClick)="onExportAll()">
          </p-button>
        </div>
        <div class="button-group secondary-group">
          <p-button
            label="\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644"
            icon="pi pi-check-square"
            severity="secondary"
            outlined
            [disabled]="pendingExports.length === 0"
            (onClick)="selectAll()">
          </p-button>
          <p-button
            label="\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062F"
            icon="pi pi-times"
            severity="secondary"
            outlined
            [disabled]="selectedExports.length === 0"
            (onClick)="deselectAll()">
          </p-button>
        </div>
      </div>
    </div>

    <p-table
      #exportTable
      [value]="pendingExports"
      [loading]="loading"
      [paginator]="true"
      [rows]="10"
      [rowsPerPageOptions]="[10, 20, 50, 100]"
      [globalFilterFields]="['fileNumber', 'fullName', 'motherName', 'recruitmentCenter']"
      [sortMode]="'single'"
      responsiveLayout="scroll"
      [scrollable]="true"
      [scrollHeight]="tableHeight"
      [rowHover]="true"
      dataKey="sequenceNumber">

      <ng-template pTemplate="header">
        <tr>
          <th style="width: 3.2rem">
            <p-checkbox
              [binary]="true"
              [ngModel]="selectedExports.length === pendingExports.length && pendingExports.length > 0"
              (ngModelChange)="selectedExports.length === pendingExports.length ? deselectAll() : selectAll()">
            </p-checkbox>
          </th>
          <th pSortableColumn="sequenceNumber">#<p-sortIcon field="sequenceNumber"></p-sortIcon></th>
          <th pSortableColumn="fileNumber">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641<p-sortIcon field="fileNumber"></p-sortIcon></th>
          <th pSortableColumn="fullName">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644<p-sortIcon field="fullName"></p-sortIcon></th>
          <th pSortableColumn="motherName">\u0627\u0633\u0645 \u0627\u0644\u0623\u0645<p-sortIcon field="motherName"></p-sortIcon></th>
          <th>\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</th>
          <th pSortableColumn="dateOfBirth">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F<p-sortIcon field="dateOfBirth"></p-sortIcon></th>
          <th>\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645</th>
          <th pSortableColumn="recruitmentCenter">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F<p-sortIcon field="recruitmentCenter"></p-sortIcon></th>
          <th pSortableColumn="result">\u0627\u0644\u0646\u062A\u064A\u062C\u0629<p-sortIcon field="result"></p-sortIcon></th>
          <th pSortableColumn="supervisorEvaluationDate">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0642\u064A\u064A\u0645<p-sortIcon field="supervisorEvaluationDate"></p-sortIcon></th>
          <th>\u0627\u0644\u0633\u0628\u0628</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-item>
        <tr
          [class.row-selected]="isSelected(item)"
          (click)="toggleSelection(item)"
          [title]="isSelected(item) ? '\u0627\u0646\u0642\u0631 \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062F' : '\u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u062D\u062F\u064A\u062F'">
          <td class="text-center align-middle" (click)="$event.stopPropagation()">
            <p-checkbox
              [binary]="true"
              [ngModel]="isSelected(item)"
              (ngModelChange)="toggleSelection(item)"
              [inputId]="'checkbox-' + item.sequenceNumber">
            </p-checkbox>
          </td>
          <td class="text-center align-middle">
            <span class="badge-seq">{{ item.sequenceNumber }}</span>
          </td>
          <td class="text-center align-middle">
            <span class="file-number">{{ item.fileNumber }}</span>
          </td>
          <td class="text-center align-middle">{{ item.fullName }}</td>
          <td class="text-center align-middle">{{ item.motherName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</td>
          <td class="text-center align-middle">{{ item.maritalStatus || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</td>
          <td class="text-center align-middle">
            <span *ngIf="item.dateOfBirth">{{ item.dateOfBirth | gregorianDate:'yyyy/MM/dd' }}</span>
            <span *ngIf="!item.dateOfBirth">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>
          </td>
          <td class="text-center align-middle">
            <p-tag [value]="item.bloodType || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'" severity="info"></p-tag>
          </td>
          <td class="text-center align-middle">{{ item.recruitmentCenter || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</td>
          <td class="text-center align-middle">
            <p-tag
              [value]="item.result || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'"
              [severity]="item.result === '\u0645\u0642\u0628\u0648\u0644' ? 'success' : item.result ? 'danger' : 'warn'">
            </p-tag>
          </td>
          <td class="text-center align-middle">
            <span *ngIf="item.supervisorEvaluationDate">{{ item.supervisorEvaluationDate | gregorianDate:'yyyy/MM/dd' }}</span>
            <span *ngIf="!item.supervisorEvaluationDate">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>
          </td>
          <td class="text-center align-middle">{{ item.reason || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</td>
        </tr>
      </ng-template>

      <ng-template pTemplate="emptymessage">
        <tr>
          <td colspan="12" class="text-center py-5">
            <div class="empty-state">
              <i class="pi pi-inbox"></i>
              <p class="mt-2">\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u062A\u0635\u062F\u064A\u0631 \u062D\u0627\u0644\u064A\u0627\u064B.</p>
            </div>
          </td>
        </tr>
      </ng-template>

      <ng-template pTemplate="loadingbody">
        <tr>
          <td colspan="12" class="text-center py-5">
            <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
            <p class="mt-3">\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...</p>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </section>
</div>

<p-toast></p-toast>
`, styles: ["/* src/app/features/supervisor/components/recruitment-export/recruitment-export.scss */\n:root {\n  --export-bg:\n    linear-gradient(\n      180deg,\n      #f5f8f7 0%,\n      #e6ebe8 100%);\n  --export-card: rgba(255, 255, 255, 0.92);\n  --export-border: rgba(255, 255, 255, 0.4);\n  --export-green: #0b7d62;\n  --export-dark: #0a2523;\n  --export-gold: #d4a017;\n}\n.recruitment-export-page {\n  background: var(--export-bg);\n  padding: clamp(1rem, 2.5vw, 2.5rem);\n  min-height: calc(100vh - 120px);\n  font-family: var(--font-family-primary);\n  color: #0a1d1a;\n}\n.glass-card {\n  background: var(--export-card);\n  border-radius: 28px;\n  border: 1px solid var(--export-border);\n  box-shadow: 0 25px 60px rgba(7, 22, 20, 0.18);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.hero-panel {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: clamp(1.5rem, 3vw, 2.5rem);\n  background:\n    linear-gradient(\n      135deg,\n      #0c4a41,\n      #0b6656);\n  color: #f8fffb;\n}\n.hero-panel .hero-text {\n  flex: 1 1 340px;\n  color: #fefefe;\n}\n.hero-panel .hero-text h1 {\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\n  margin-bottom: 0.5rem;\n  color: #ffffff;\n}\n.hero-panel .hero-text .lead {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1rem;\n  line-height: 1.8;\n}\n.hero-panel .eyebrow {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-panel .hero-meta {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.hero-panel .hero-meta .meta-chip {\n  padding: 0.9rem 1.1rem;\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.85);\n}\n.hero-panel .hero-meta .meta-chip strong {\n  font-size: 1.2rem;\n  color: white;\n}\n.stats-grid {\n  margin: 2rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.25rem;\n}\n.stats-grid .stat-card {\n  border-radius: 24px;\n  padding: 1.35rem;\n  color: white;\n  box-shadow: 0 18px 40px rgba(7, 22, 20, 0.2);\n}\n.stats-grid .stat-card header {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.stats-grid .stat-card header i {\n  font-size: 1.3rem;\n}\n.stats-grid .stat-card strong {\n  display: block;\n  font-size: 2rem;\n  margin: 0.5rem 0;\n}\n.stats-grid .stat-card p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.stats-grid .gradient-green {\n  background:\n    linear-gradient(\n      135deg,\n      #1dbd8a,\n      #0b7d62);\n}\n.stats-grid .gradient-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #3fada8,\n      #2a5470);\n}\n.stats-grid .gradient-gold {\n  background:\n    linear-gradient(\n      135deg,\n      #f9d976,\n      #f39f86);\n}\n.stats-grid .gradient-slate {\n  background:\n    linear-gradient(\n      135deg,\n      #4b6cb7,\n      #182848);\n}\n.preflight-card {\n  margin-bottom: 1.5rem;\n  padding: 1.5rem;\n  color: #1f3a33;\n}\n.preflight-card .preflight-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.preflight-card .preflight-header i {\n  color: var(--export-green);\n  font-size: 1.3rem;\n}\n.preflight-card ol {\n  margin: 0;\n  padding-left: 1.25rem;\n  line-height: 1.7;\n}\n.progress-panel {\n  margin: 2rem 0;\n  background: white;\n  border-radius: 20px;\n  padding: 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  border: 1px solid rgba(6, 73, 62, 0.1);\n}\n.progress-panel p {\n  margin: 0;\n  color: #274640;\n  font-weight: 600;\n}\n.table-shell {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  overflow: hidden;\n  background: #ffffff;\n}\n.table-shell .table-headline {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  border-bottom: 1px solid rgba(8, 61, 47, 0.08);\n  padding-bottom: 1rem;\n}\n.table-shell .table-headline .table-pill {\n  background: rgba(5, 66, 57, 0.1);\n  border-radius: 999px;\n  padding: 0.6rem 1.4rem;\n  min-width: 150px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #054239;\n}\n.table-shell .table-headline .table-pill strong {\n  font-size: 1.2rem;\n}\n.table-shell .table-controls {\n  margin: 1.2rem 0 0;\n  padding: 1rem;\n  border: 1px solid rgba(6, 73, 62, 0.08);\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1rem;\n  background: #f8fbfa;\n}\n.table-shell .table-controls .control-stack {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.table-shell .table-controls .search-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  border-radius: 999px;\n  border: 1px solid rgba(5, 66, 57, 0.2);\n  padding: 0.55rem 1rem;\n  background: white;\n  flex: 1 1 220px;\n}\n.table-shell .table-controls .search-wrapper i {\n  color: #4b6e64;\n}\n.table-shell .table-controls .search-wrapper .search-input {\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  color: #223b35;\n}\n.table-shell .table-controls .search-wrapper .search-input::placeholder {\n  color: #8aa39a;\n}\n.table-shell .table-controls .reset-chip {\n  border-radius: 999px;\n  border: 1px dashed rgba(5, 66, 57, 0.35);\n  padding: 0.35rem 0.9rem;\n}\n.table-shell .table-controls .ghost-refresh {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 12px;\n  border: 1px solid rgba(5, 66, 57, 0.15);\n  padding: 0.5rem 1rem;\n  background: white;\n  color: #054239;\n  font-weight: 600;\n  transition: 0.2s ease;\n}\n.table-shell .table-controls .ghost-refresh:hover:not(:disabled) {\n  background: #054239;\n  color: white;\n}\n.table-shell .table-controls .ghost-refresh:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.table-shell .table-controls .button-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.table-shell .table-controls .button-group .p-button {\n  flex: 1 1 180px;\n}\n::ng-deep .recruitment-export-page .p-table {\n  border-radius: 24px;\n  box-shadow: 0 18px 35px rgba(8, 61, 47, 0.12);\n  overflow: hidden;\n}\n::ng-deep .recruitment-export-page .p-datatable-wrapper,\n::ng-deep .recruitment-export-page .p-datatable-scrollable-wrapper {\n  border-radius: 18px;\n}\n::ng-deep .recruitment-export-page .p-datatable-thead > tr > th {\n  background: #032422 !important;\n  color: #cde9df !important;\n  font-weight: 600 !important;\n  font-size: 0.78rem !important;\n  text-align: center !important;\n  padding: 0.65rem !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\n::ng-deep .recruitment-export-page .p-datatable-tbody > tr {\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n::ng-deep .recruitment-export-page .p-datatable-tbody > tr:nth-child(even) {\n  background: rgba(5, 66, 57, 0.02);\n}\n::ng-deep .recruitment-export-page .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.08);\n}\n::ng-deep .recruitment-export-page .p-datatable-tbody > tr.row-selected {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(5, 66, 57, 0.25),\n      rgba(5, 66, 57, 0.05));\n  box-shadow: inset 0 0 0 1px rgba(5, 66, 57, 0.3);\n}\n::ng-deep .recruitment-export-page .p-datatable-tbody > tr > td {\n  padding: 0.55rem 0.4rem !important;\n  font-size: 0.85rem !important;\n  border-color: rgba(3, 36, 34, 0.05) !important;\n  white-space: nowrap !important;\n}\n.badge-seq {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  padding: 0.15rem 0.6rem;\n  background: rgba(5, 66, 57, 0.15);\n  color: #054239;\n  font-weight: 700;\n}\n.file-number {\n  color: #035e55;\n  font-weight: 600;\n}\n::ng-deep .recruitment-export-page .p-paginator {\n  border-top: 1px solid rgba(3, 36, 34, 0.08);\n  padding: 1rem;\n  background: white;\n}\n::ng-deep .recruitment-export-page .p-checkbox .p-checkbox-box {\n  border-radius: 10px !important;\n  border-width: 2px !important;\n  border-color: rgba(5, 66, 57, 0.6) !important;\n}\n::ng-deep .recruitment-export-page .p-checkbox-box.p-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #0b7d62,\n      #0a4032) !important;\n}\n.empty-state {\n  text-align: center;\n  color: #6f7b7a;\n}\n.empty-state i {\n  font-size: 2rem;\n  color: var(--export-green);\n}\n@media (max-width: 768px) {\n  .table-shell .table-controls {\n    grid-template-columns: 1fr;\n  }\n  ::ng-deep .recruitment-export-page .p-datatable-thead > tr > th,\n  ::ng-deep .recruitment-export-page .p-datatable-tbody > tr > td {\n    font-size: 0.75rem !important;\n    white-space: normal !important;\n  }\n}\n/*# sourceMappingURL=recruitment-export.css.map */\n"] }]
  }], () => [{ type: RecruitmentExportService }, { type: ToastrService }, { type: MessageService }, { type: ApplicantService }], { table: [{
    type: ViewChild,
    args: ["exportTable"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], onViewportResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruitmentExportComponent, { className: "RecruitmentExportComponent", filePath: "src/app/features/supervisor/components/recruitment-export/recruitment-export.ts", lineNumber: 39 });
})();
export {
  RecruitmentExportComponent
};
//# sourceMappingURL=chunk-SAPBOURJ.js.map
