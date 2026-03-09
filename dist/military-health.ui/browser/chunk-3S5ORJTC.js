import {
  DecisionService,
  Divider,
  DividerModule,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-TJK6RMDX.js";
import {
  Card,
  CardModule
} from "./chunk-MSHWPF4R.js";
import {
  SearchApplicantComponent
} from "./chunk-ZN4S5WAA.js";
import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
import {
  Tag,
  TagModule
} from "./chunk-NJ7ILR2W.js";
import {
  Dialog,
  DialogModule
} from "./chunk-5TBOZ7YP.js";
import {
  InputTextModule
} from "./chunk-7K53XEFX.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import {
  LookupService
} from "./chunk-BJUGQXZ4.js";
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
  Router
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  ViewChild,
  __spreadProps,
  __spreadValues,
  catchError,
  finalize,
  forkJoin,
  map,
  of,
  setClassMetadata,
  shareReplay,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/supervisor/components/supervisor/supervisor.ts
var _c0 = ["decisionForm"];
var _c1 = () => ({ width: "40rem", minWidth: "40rem" });
var _c2 = (a0, a1) => ({ "alert-success": a0, "alert-danger": a1 });
function Supervisor_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()()();
  }
}
function Supervisor_div_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementStart(3, "h5", 49);
    \u0275\u0275text(4, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "p-tag", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", "\u0645\u0644\u0641: " + ctx_r0.applicant.fileNumber);
  }
}
function Supervisor_div_6_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.applicant.bloodType);
  }
}
function Supervisor_div_6_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_div_6_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.applicant.queueNumber);
  }
}
function Supervisor_div_6_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_div_6_div_111_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 48);
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementStart(3, "h5", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "p-tag", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(clinic_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", clinic_r3.exam ? "\u062A\u0645 \u0627\u0644\u0641\u062D\u0635" : "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0641\u062D\u0635")("severity", clinic_r3.exam ? "success" : "danger");
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_29_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.getRefractionTypeName(ref_r4.refractionTypeID), ": ", ref_r4.refractionValue, " ");
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 81);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A (\u064A\u0645\u064A\u0646)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 76)(6, "div", 82);
    \u0275\u0275template(7, Supervisor_div_6_div_111_div_4_div_7_div_29_span_7_Template, 2, 2, "span", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.getRightEyeRefractions(clinic_r3.exam));
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_30_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.getRefractionTypeName(ref_r5.refractionTypeID), ": ", ref_r5.refractionValue, " ");
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A (\u064A\u0633\u0627\u0631)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 76)(6, "div", 82);
    \u0275\u0275template(7, Supervisor_div_6_div_111_div_4_div_7_div_30_span_7_Template, 2, 2, "span", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.getLeftEyeRefractions(clinic_r3.exam));
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 87);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 88);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(clinic_r3.exam.otherDiseases);
  }
}
function Supervisor_div_6_div_111_div_4_div_7_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(clinic_r3.exam.reason);
  }
}
function Supervisor_div_6_div_111_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 (\u064A\u0645\u064A\u0646)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "div", 74);
    \u0275\u0275element(10, "i", 75);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 (\u064A\u0633\u0627\u0631)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 73)(16, "div", 74);
    \u0275\u0275element(17, "i", 77);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 (\u064A\u0645\u064A\u0646)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 73)(23, "div", 74);
    \u0275\u0275element(24, "i", 77);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 (\u064A\u0633\u0627\u0631)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, Supervisor_div_6_div_111_div_4_div_7_div_29_Template, 8, 1, "div", 78)(30, Supervisor_div_6_div_111_div_4_div_7_div_30_Template, 8, 1, "div", 78)(31, Supervisor_div_6_div_111_div_4_div_7_div_31_Template, 7, 0, "div", 78)(32, Supervisor_div_6_div_111_div_4_div_7_div_32_Template, 7, 1, "div", 78)(33, Supervisor_div_6_div_111_div_4_div_7_div_33_Template, 7, 1, "div", 78);
    \u0275\u0275elementStart(34, "div", 79)(35, "div", 74);
    \u0275\u0275element(36, "i", 80);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 76);
    \u0275\u0275element(40, "p-tag", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getVisionRight(clinic_r3.exam));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getVisionLeft(clinic_r3.exam));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getColorTestRight(clinic_r3.exam));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getColorTestLeft(clinic_r3.exam));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getRightEyeRefractions(clinic_r3.exam).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getLeftEyeRefractions(clinic_r3.exam).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getRightEyeRefractions(clinic_r3.exam).length === 0 && ctx_r0.getLeftEyeRefractions(clinic_r3.exam).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r3.exam.otherDiseases);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r3.exam.reason);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.getResultDescription(clinic_r3.exam.resultID))("severity", ctx_r0.getResultSeverity(clinic_r3.exam.resultID));
  }
}
function Supervisor_div_6_div_111_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0627\u0644\u0642\u0644\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "div", 74);
    \u0275\u0275element(10, "i", 90);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 73)(16, "div", 74);
    \u0275\u0275element(17, "i", 91);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 73)(23, "div", 74);
    \u0275\u0275element(24, "i", 92);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "\u0627\u0644\u063A\u062F\u062F \u0627\u0644\u0635\u0645\u0627\u0621");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 73)(30, "div", 74);
    \u0275\u0275element(31, "i", 93);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u0627\u0644\u0623\u0639\u0635\u0627\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 76);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 73)(37, "div", 74);
    \u0275\u0275element(38, "i", 94);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "\u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 76);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 73)(44, "div", 74);
    \u0275\u0275element(45, "i", 95);
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "\u0627\u0644\u0645\u0641\u0627\u0635\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 76);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 73)(51, "div", 74);
    \u0275\u0275element(52, "i", 96);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "\u0627\u0644\u0643\u0644\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 76);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 73)(58, "div", 74);
    \u0275\u0275element(59, "i", 97);
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "\u0627\u0644\u062C\u0644\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 76);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 79)(65, "div", 74);
    \u0275\u0275element(66, "i", 80);
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 76);
    \u0275\u0275element(70, "p-tag", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.heart || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.respiratory || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.digestive || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.endocrine || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.neurology || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.blood || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.joints || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.kidney || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.skin || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.getResultDescription(clinic_r3.exam.resultID))("severity", ctx_r0.getResultSeverity(clinic_r3.exam.resultID));
  }
}
function Supervisor_div_6_div_111_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0639\u0627\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "div", 74);
    \u0275\u0275element(10, "i", 96);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 73)(16, "div", 74);
    \u0275\u0275element(17, "i", 27);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u0627\u0644\u0623\u0648\u0639\u064A\u0629 \u0627\u0644\u062F\u0645\u0648\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 73)(23, "div", 74);
    \u0275\u0275element(24, "i", 90);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "\u0627\u0644\u0635\u062F\u0631");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 79)(30, "div", 74);
    \u0275\u0275element(31, "i", 80);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 76);
    \u0275\u0275element(35, "p-tag", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.generalSurgery || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.urinarySurgery || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.vascularSurgery || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.thoracicSurgery || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.getResultDescription(clinic_r3.exam.resultID))("severity", ctx_r0.getResultSeverity(clinic_r3.exam.resultID));
  }
}
function Supervisor_div_6_div_111_div_4_div_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(clinic_r3.exam.reason);
  }
}
function Supervisor_div_6_div_111_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "i", 98);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0639\u0636\u0644\u064A \u0647\u064A\u0643\u0644\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "div", 74);
    \u0275\u0275element(10, "i", 92);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u062C\u0631\u0627\u062D\u0629 \u0639\u0635\u0628\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 79)(16, "div", 74);
    \u0275\u0275element(17, "i", 80);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 76);
    \u0275\u0275element(21, "p-tag", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, Supervisor_div_6_div_111_div_4_div_10_div_22_Template, 7, 1, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.musculoskeletal || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.neurologicalSurgery || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.getResultDescription(clinic_r3.exam.resultID))("severity", ctx_r0.getResultSeverity(clinic_r3.exam.resultID));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r3.exam.reason);
  }
}
function Supervisor_div_6_div_111_div_4_div_11_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(clinic_r3.exam.reason);
  }
}
function Supervisor_div_6_div_111_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "i", 99);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 (\u0627\u0644\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644\u064A)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "div", 74);
    \u0275\u0275element(10, "i", 100);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 (\u0627\u0644\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644\u064A)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 73)(16, "div", 74);
    \u0275\u0275element(17, "i", 99);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u064A\u0645\u064A\u0646");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 73)(23, "div", 74);
    \u0275\u0275element(24, "i", 100);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "\u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u064A\u0633\u0627\u0631");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 73)(30, "div", 74);
    \u0275\u0275element(31, "i", 90);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 76);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 73)(37, "div", 74);
    \u0275\u0275element(38, "i", 81);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL (\u064A\u0645\u064A\u0646)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 76);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 73)(44, "div", 74);
    \u0275\u0275element(45, "i", 84);
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR (\u064A\u0633\u0627\u0631)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 76);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 73)(51, "div", 74);
    \u0275\u0275element(52, "i", 101);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "\u0627\u0644\u0641\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 76);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 79)(58, "div", 74);
    \u0275\u0275element(59, "i", 80);
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 76);
    \u0275\u0275element(63, "p-tag", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, Supervisor_div_6_div_111_div_4_div_11_div_64_Template, 7, 1, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.rightTympanicMembrane || clinic_r3.exam.rightEar || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", clinic_r3.exam.leftTympanicMembrane || clinic_r3.exam.leftEar || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.rightHearing || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.leftHearing || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.resonators || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getEarExamField(clinic_r3.exam, "rightString"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getEarExamField(clinic_r3.exam, "leftString"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(clinic_r3.exam.mouth || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.getResultDescription(clinic_r3.exam.resultID))("severity", ctx_r0.getResultSeverity(clinic_r3.exam.resultID));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r3.exam.reason);
  }
}
function Supervisor_div_6_div_111_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 69);
    \u0275\u0275elementContainerStart(6, 70);
    \u0275\u0275template(7, Supervisor_div_6_div_111_div_4_div_7_Template, 41, 11, "div", 71)(8, Supervisor_div_6_div_111_div_4_div_8_Template, 71, 11, "div", 71)(9, Supervisor_div_6_div_111_div_4_div_9_Template, 36, 6, "div", 71)(10, Supervisor_div_6_div_111_div_4_div_10_Template, 23, 5, "div", 71)(11, Supervisor_div_6_div_111_div_4_div_11_Template, 65, 11, "div", 71);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngSwitch", clinic_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0648\u0646");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u0629");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062C\u0631\u0627\u062D\u0629");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0630\u0646\u064A\u0629");
  }
}
function Supervisor_div_6_div_111_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 102);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0644\u0645 \u064A\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A");
    \u0275\u0275elementEnd()()();
  }
}
function Supervisor_div_6_div_111_div_15_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const consultation_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(consultation_r7.doctor.fullName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function Supervisor_div_6_div_111_div_15_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const consultation_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(consultation_r7.referralReason);
  }
}
function Supervisor_div_6_div_111_div_15_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u0628\u0628 \u0625\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_15_div_1_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function Supervisor_div_6_div_111_div_15_div_1_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const consultation_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openFile(consultation_r7.attachment));
    });
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_15_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 52);
    \u0275\u0275element(2, "i", 123);
    \u0275\u0275text(3, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0631\u0641\u0642 ");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_15_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125);
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 126);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const consultation_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(consultation_r7.result);
  }
}
function Supervisor_div_6_div_111_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "div", 107)(3, "div", 108)(4, "div", 109);
    \u0275\u0275element(5, "i", 101);
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "p-tag", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 111);
    \u0275\u0275template(10, Supervisor_div_6_div_111_div_15_div_1_div_10_Template, 4, 1, "div", 112)(11, Supervisor_div_6_div_111_div_15_div_1_div_11_Template, 4, 1, "div", 112)(12, Supervisor_div_6_div_111_div_15_div_1_div_12_Template, 4, 0, "div", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 113)(14, "p-button", 114);
    \u0275\u0275listener("onClick", function Supervisor_div_6_div_111_div_15_div_1_Template_p_button_onClick_14_listener() {
      const consultation_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openEditConsultationModal(consultation_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, Supervisor_div_6_div_111_div_15_div_1_button_15_Template, 4, 0, "button", 115)(16, Supervisor_div_6_div_111_div_15_div_1_div_16_Template, 4, 0, "div", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, Supervisor_div_6_div_111_div_15_div_1_div_17_Template, 7, 1, "div", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consultation_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(consultation_r7.consultationType || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance();
    \u0275\u0275property("value", "#" + consultation_r7.consultationID);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", consultation_r7.doctor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consultation_r7.referralReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !consultation_r7.referralReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consultation_r7.attachment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !consultation_r7.attachment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consultation_r7.result);
  }
}
function Supervisor_div_6_div_111_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275template(1, Supervisor_div_6_div_111_div_15_div_1_Template, 18, 9, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", clinic_r3.consultations)("ngForTrackBy", ctx_r0.trackByConsultationId);
  }
}
function Supervisor_div_6_div_111_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_27_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const investigation_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r10.doctor.fullName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function Supervisor_div_6_div_111_div_27_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span", 139);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const investigation_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r10.investigationReason);
  }
}
function Supervisor_div_6_div_111_div_27_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u0628\u0628");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_27_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function Supervisor_div_6_div_111_div_27_div_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const investigation_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openFile(investigation_r10.attachment));
    });
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_27_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 52);
    \u0275\u0275element(2, "i", 123);
    \u0275\u0275text(3, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0631\u0641\u0642 ");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_div_27_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 125);
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 126);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const investigation_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(investigation_r10.result);
  }
}
function Supervisor_div_6_div_111_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 130)(2, "div", 131)(3, "div", 132)(4, "div", 133);
    \u0275\u0275element(5, "i", 62);
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "p-tag", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 135)(10, "div", 118);
    \u0275\u0275element(11, "p-tag", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Supervisor_div_6_div_111_div_27_div_1_div_12_Template, 4, 1, "div", 112)(13, Supervisor_div_6_div_111_div_27_div_1_div_13_Template, 4, 1, "div", 112)(14, Supervisor_div_6_div_111_div_27_div_1_div_14_Template, 4, 0, "div", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 137)(16, "p-button", 114);
    \u0275\u0275listener("onClick", function Supervisor_div_6_div_111_div_27_div_1_Template_p_button_onClick_16_listener() {
      const investigation_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openEditInvestigationModal(investigation_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, Supervisor_div_6_div_111_div_27_div_1_button_17_Template, 4, 0, "button", 115)(18, Supervisor_div_6_div_111_div_27_div_1_div_18_Template, 4, 0, "div", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, Supervisor_div_6_div_111_div_27_div_1_div_19_Template, 7, 1, "div", 138);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const investigation_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(investigation_r10.type || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance();
    \u0275\u0275property("value", "#" + investigation_r10.investigationID);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", investigation_r10.status || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F")("severity", ctx_r0.getStatusSeverity(investigation_r10.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", investigation_r10.doctor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", investigation_r10.investigationReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !investigation_r10.investigationReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", investigation_r10.attachment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !investigation_r10.attachment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", investigation_r10.result);
  }
}
function Supervisor_div_6_div_111_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275template(1, Supervisor_div_6_div_111_div_27_div_1_Template, 20, 11, "div", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", clinic_r3.investigations)("ngForTrackBy", ctx_r0.trackByInvestigationId);
  }
}
function Supervisor_div_6_div_111_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
}
function Supervisor_div_6_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-card");
    \u0275\u0275template(2, Supervisor_div_6_div_111_ng_template_2_Template, 6, 5, "ng-template", 18);
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275template(4, Supervisor_div_6_div_111_div_4_Template, 12, 6, "div", 55)(5, Supervisor_div_6_div_111_div_5_Template, 5, 0, "div", 55);
    \u0275\u0275element(6, "p-divider");
    \u0275\u0275elementStart(7, "div", 56)(8, "div", 57)(9, "div", 48);
    \u0275\u0275element(10, "i", 58);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "p-tag", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-button", 60);
    \u0275\u0275listener("click", function Supervisor_div_6_div_111_Template_p_button_click_14_listener() {
      const clinic_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAddConsultationModal(clinic_r3.name, ctx_r0.getSpecializationId(clinic_r3.name)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, Supervisor_div_6_div_111_div_15_Template, 2, 2, "div", 61)(16, Supervisor_div_6_div_111_ng_template_16_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-divider");
    \u0275\u0275elementStart(19, "div", 56)(20, "div", 57)(21, "div", 48);
    \u0275\u0275element(22, "i", 62);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629 \u0648\u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "p-tag", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-button", 63);
    \u0275\u0275listener("onClick", function Supervisor_div_6_div_111_Template_p_button_onClick_26_listener() {
      const clinic_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAddInvestigationModal(clinic_r3.name, ctx_r0.getSpecializationId(clinic_r3.name)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, Supervisor_div_6_div_111_div_27_Template, 2, 2, "div", 64)(28, Supervisor_div_6_div_111_ng_template_28_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const clinic_r3 = ctx.$implicit;
    const noConsultations_r12 = \u0275\u0275reference(17);
    const noInvestigations_r13 = \u0275\u0275reference(29);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", clinic_r3.exam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !clinic_r3.exam);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", clinic_r3.consultations.length + " \u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.applicant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r3.consultations.length > 0)("ngIfElse", noConsultations_r12);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", clinic_r3.investigations.length + " \u062A\u062D\u0644\u064A\u0644");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.applicant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r3.investigations.length > 0)("ngIfElse", noInvestigations_r13);
  }
}
function Supervisor_div_6_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 141)(2, "div", 142)(3, "div", 143);
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 144)(6, "h4", 145);
    \u0275\u0275element(7, "i", 146);
    \u0275\u0275text(8, " \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 147);
    \u0275\u0275element(10, "i", 148);
    \u0275\u0275text(11, " \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062A\u0641\u0635\u064A\u0644\u064A\u0629 \u0639\u0646 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062C\u0644 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 149)(13, "div", 150)(14, "div", 151)(15, "div", 152);
    \u0275\u0275element(16, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h6", 57);
    \u0275\u0275text(18, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 153)(20, "div", 154)(21, "div", 155);
    \u0275\u0275element(22, "i", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 157)(24, "div", 158);
    \u0275\u0275text(25, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 159);
    \u0275\u0275element(27, "p-tag", 136);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 160)(29, "div", 161);
    \u0275\u0275element(30, "i", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 157)(32, "div", 158);
    \u0275\u0275text(33, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 159);
    \u0275\u0275element(35, "p-tag", 163);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const finalDecision_r14 = ctx_r0.applicant.finalDecision;
    \u0275\u0275advance(27);
    \u0275\u0275property("value", finalDecision_r14.isExportedToRecruitment ?? false ? "\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631" : "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631")("severity", finalDecision_r14.isExportedToRecruitment ?? false ? "success" : "warn");
    \u0275\u0275advance(8);
    \u0275\u0275property("value", finalDecision_r14.result ? finalDecision_r14.result.description : "-")("severity", ctx_r0.getResultSeverity(finalDecision_r14.resultID));
  }
}
function Supervisor_div_6_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 164);
    \u0275\u0275element(2, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 166)(4, "h6", 167);
    \u0275\u0275element(5, "i", 39);
    \u0275\u0275text(6, " \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u0627\u064B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 168);
    \u0275\u0275text(8, ' \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0645\u0633\u0628\u0642\u0627\u064B \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644\u0647 \u0623\u0648 \u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u062C\u062F\u064A\u062F. \u064A\u0645\u0643\u0646\u0643 \u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0641\u064A \u0642\u0633\u0645 "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A" \u0623\u0639\u0644\u0627\u0647. ');
    \u0275\u0275elementEnd()()();
  }
}
function Supervisor_div_6_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 164);
    \u0275\u0275element(2, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 166)(4, "h6", 167);
    \u0275\u0275element(5, "i", 39);
    \u0275\u0275text(6, " \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u0627\u064B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 168);
    \u0275\u0275text(8, ' \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0645\u0633\u0628\u0642\u0627\u064B \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644\u0647 \u0623\u0648 \u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u062C\u062F\u064A\u062F. \u064A\u0645\u0643\u0646\u0643 \u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0641\u064A \u0642\u0633\u0645 "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A" \u0623\u0639\u0644\u0627\u0647. ');
    \u0275\u0275elementEnd()()();
  }
}
function Supervisor_div_6_Conditional_117_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 179);
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275text(2, " \u064A\u062C\u0628 \u0625\u0643\u0645\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 \u0623\u0648\u0644\u0627\u064B ");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_div_6_Conditional_117_div_16_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 175);
    \u0275\u0275element(1, "i", 185);
    \u0275\u0275text(2, " \u0627\u0644\u062A\u0648\u0635\u064A\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_div_6_Conditional_117_div_16_label_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 175);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, " \u0627\u0644\u0633\u0628\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_div_6_Conditional_117_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275template(1, Supervisor_div_6_Conditional_117_div_16_label_1_Template, 3, 0, "label", 183)(2, Supervisor_div_6_Conditional_117_div_16_label_2_Template, 3, 0, "label", 183);
    \u0275\u0275elementStart(3, "textarea", 184);
    \u0275\u0275twoWayListener("ngModelChange", function Supervisor_div_6_Conditional_117_div_16_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.decisionModel.reason, $event) || (ctx_r0.decisionModel.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(4, "                ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isAccept);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAccept);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.decisionModel.reason);
    \u0275\u0275property("disabled", !ctx_r0.hasAllExams() || !ctx_r0.canEditDecision || ctx_r0.previousDecisionLocked);
  }
}
function Supervisor_div_6_Conditional_117_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "label", 175);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 186);
    \u0275\u0275text(5, "                ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isAccept ? "\u0627\u0644\u062A\u0648\u0635\u064A\u0629" : "\u0627\u0644\u0633\u0628\u0628", " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.decisionModel.reason || "\u0644\u0627 \u064A\u0648\u062C\u062F");
  }
}
function Supervisor_div_6_Conditional_117_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 174)(1, "label", 175);
    \u0275\u0275element(2, "i", 187);
    \u0275\u0275text(3, " \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 188);
    \u0275\u0275twoWayListener("ngModelChange", function Supervisor_div_6_Conditional_117_div_18_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.decisionModel.postponeDuration, $event) || (ctx_r0.decisionModel.postponeDuration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.decisionModel.postponeDuration);
    \u0275\u0275property("disabled", !ctx_r0.hasAllExams() || !ctx_r0.canEditDecision || ctx_r0.previousDecisionLocked);
  }
}
function Supervisor_div_6_Conditional_117_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "label", 175);
    \u0275\u0275element(2, "i", 187);
    \u0275\u0275text(3, " \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 189);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.decisionModel.postponeDuration);
  }
}
function Supervisor_div_6_Conditional_117_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 190)(1, "p-button", 191);
    \u0275\u0275listener("onClick", function Supervisor_div_6_Conditional_117_div_20_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.submitDecision());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasAllExams() || ctx_r0.loading || !ctx_r0.canEditDecision || ctx_r0.previousDecisionLocked)("loading", ctx_r0.loading);
  }
}
function Supervisor_div_6_Conditional_117_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 192);
    \u0275\u0275element(2, "i", 193);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c2, ctx_r0.responseSuccess, !ctx_r0.responseSuccess));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.responseSuccess ? "pi pi-check-circle" : "pi pi-exclamation-triangle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.responseMessage, " ");
  }
}
function Supervisor_div_6_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 46, 2)(2, "div", 169)(3, "div", 170);
    \u0275\u0275element(4, "i", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 172);
    \u0275\u0275text(6, "\u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u0646\u0647\u0627\u0626\u064A \u062C\u062F\u064A\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 173)(8, "div", 174)(9, "label", 175);
    \u0275\u0275element(10, "i", 176);
    \u0275\u0275text(11, " \u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(12, "span", 177);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ng-select", 178);
    \u0275\u0275twoWayListener("ngModelChange", function Supervisor_div_6_Conditional_117_Template_ng_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.decisionModel.resultID, $event) || (ctx_r0.decisionModel.resultID = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Supervisor_div_6_Conditional_117_Template_ng_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onResultChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Supervisor_div_6_Conditional_117_Conditional_15_Template, 3, 0, "small", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, Supervisor_div_6_Conditional_117_div_16_Template, 5, 4, "div", 180)(17, Supervisor_div_6_Conditional_117_div_17_Template, 6, 2, "div", 180)(18, Supervisor_div_6_Conditional_117_div_18_Template, 5, 2, "div", 180)(19, Supervisor_div_6_Conditional_117_div_19_Template, 5, 1, "div", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, Supervisor_div_6_Conditional_117_div_20_Template, 2, 2, "div", 181);
    \u0275\u0275conditionalCreate(21, Supervisor_div_6_Conditional_117_Conditional_21_Template, 4, 7, "div", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("items", ctx_r0.results);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.decisionModel.resultID);
    \u0275\u0275property("appendTo", "body")("disabled", !ctx_r0.hasAllExams() || !ctx_r0.canEditDecision || ctx_r0.previousDecisionLocked);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hasAllExams() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canEditDecision && !ctx_r0.previousDecisionLocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previousDecisionLocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isApproved && ctx_r0.canEditDecision && !ctx_r0.previousDecisionLocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previousDecisionLocked && ctx_r0.decisionModel.postponeDuration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canEditDecision && !ctx_r0.previousDecisionLocked);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.responseMessage ? 21 : -1);
  }
}
function Supervisor_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 5)(2, "p-card");
    \u0275\u0275template(3, Supervisor_div_6_ng_template_3_Template, 6, 1, "ng-template", 18);
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 21);
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8, " \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 21);
    \u0275\u0275element(13, "i", 24);
    \u0275\u0275text(14, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21);
    \u0275\u0275element(19, "i", 25);
    \u0275\u0275text(20, " \u0627\u0633\u0645 \u0627\u0644\u0623\u0645 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 20)(24, "div", 21);
    \u0275\u0275element(25, "i", 26);
    \u0275\u0275text(26, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 20)(31, "div", 21);
    \u0275\u0275element(32, "i", 27);
    \u0275\u0275text(33, " \u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 23);
    \u0275\u0275template(35, Supervisor_div_6_span_35_Template, 2, 1, "span", 28)(36, Supervisor_div_6_span_36_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 20)(38, "div", 21);
    \u0275\u0275element(39, "i", 30);
    \u0275\u0275text(40, " \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 23);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 20)(44, "div", 21);
    \u0275\u0275element(45, "i", 31);
    \u0275\u0275text(46, " \u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 23);
    \u0275\u0275template(48, Supervisor_div_6_span_48_Template, 2, 1, "span", 32)(49, Supervisor_div_6_span_49_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 20)(51, "div", 21);
    \u0275\u0275element(52, "i", 33);
    \u0275\u0275text(53, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 23);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 20)(58, "div", 21);
    \u0275\u0275element(59, "i", 27);
    \u0275\u0275text(60, " \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 23);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 20)(64, "div", 21);
    \u0275\u0275element(65, "i", 34);
    \u0275\u0275text(66, " \u0627\u0644\u0648\u0638\u064A\u0641\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 23);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 20)(70, "div", 21);
    \u0275\u0275element(71, "i", 35);
    \u0275\u0275text(72, " \u0627\u0644\u0637\u0648\u0644 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 23);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 20)(76, "div", 21);
    \u0275\u0275element(77, "i", 36);
    \u0275\u0275text(78, " \u0627\u0644\u0648\u0632\u0646 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 23);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 20)(82, "div", 21);
    \u0275\u0275element(83, "i", 37);
    \u0275\u0275text(84, " BMI ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 23);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 20)(88, "div", 21);
    \u0275\u0275element(89, "i", 27);
    \u0275\u0275text(90, " \u0636\u063A\u0637 \u0627\u0644\u062F\u0645 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 23);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 20)(94, "div", 21);
    \u0275\u0275element(95, "i", 38);
    \u0275\u0275text(96, " \u0627\u0644\u0646\u0628\u0636 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 23);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 20)(100, "div", 21);
    \u0275\u0275element(101, "i", 39);
    \u0275\u0275text(102, " \u0648\u0634\u0645 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 23);
    \u0275\u0275element(104, "p-tag", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 41)(106, "div", 21);
    \u0275\u0275element(107, "i", 42);
    \u0275\u0275text(108, " \u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 23);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(111, Supervisor_div_6_div_111_Template, 30, 10, "div", 43);
    \u0275\u0275elementStart(112, "div", 5)(113, "p-card");
    \u0275\u0275conditionalCreate(114, Supervisor_div_6_Conditional_114_Template, 36, 4, "div", 44);
    \u0275\u0275conditionalCreate(115, Supervisor_div_6_Conditional_115_Template, 9, 0, "div", 45)(116, Supervisor_div_6_Conditional_116_Template, 9, 0, "div", 45)(117, Supervisor_div_6_Conditional_117_Template, 22, 11, "form", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.applicant.fileNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.fullName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.motherName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 23, ctx_r0.applicant.dateOfBirth, "yyyy/MM/dd"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.applicant.bloodType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.applicant.bloodType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.recruitmentCenter || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.applicant.queueNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.applicant.queueNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 26, ctx_r0.applicant.createdAt, "yyyy/MM/dd HH:mm"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getMaritalStatusDescription(ctx_r0.applicant.maritalStatusID));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.job);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.applicant.height, " \u0633\u0645");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.applicant.weight, " \u0643\u062C\u0645");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.bmi);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.bloodPressure);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.pulse);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.applicant.tattoo ? "\u064A\u0648\u062C\u062F" : "\u0644\u0627 \u064A\u0648\u062C\u062F")("severity", ctx_r0.applicant.tattoo ? "warn" : "success");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.distinctiveMarks || "\u0644\u0627 \u062A\u0648\u062C\u062F");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.clinicsData);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.applicant && ctx_r0.applicant.finalDecision ? 114 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.applicant && ctx_r0.applicant.finalDecision ? 115 : ctx_r0.previousDecisionLocked ? 116 : 117);
  }
}
function Supervisor_form_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "label", 196);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3, " \u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 206);
    \u0275\u0275elementEnd();
  }
}
function Supervisor_form_8_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275element(1, "i", 207);
    \u0275\u0275text(2, " \u062C\u0627\u0631\u064A \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641... ");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_form_8_div_20_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 211);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function Supervisor_form_8_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212);
    \u0275\u0275element(1, "i", 213);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u0645\u0644\u0641 PDF: ", ctx_r0.previewUrl, " ");
  }
}
function Supervisor_form_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 208);
    \u0275\u0275template(1, Supervisor_form_8_div_20_img_1_Template, 1, 1, "img", 209)(2, Supervisor_form_8_div_20_div_2_Template, 3, 1, "div", 210);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previewUrl.startsWith("data:") || ctx_r0.previewUrl.includes(".jpg") || ctx_r0.previewUrl.includes(".png"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previewUrl.includes(".pdf"));
  }
}
function Supervisor_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 194);
    \u0275\u0275listener("ngSubmit", function Supervisor_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveConsultation());
    });
    \u0275\u0275elementStart(1, "div", 195)(2, "label", 196);
    \u0275\u0275element(3, "i", 101);
    \u0275\u0275text(4, " \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Supervisor_form_8_div_6_Template, 5, 0, "div", 198);
    \u0275\u0275elementStart(7, "div", 195)(8, "label", 196);
    \u0275\u0275element(9, "i", 68);
    \u0275\u0275text(10, " \u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(11, "span", 199);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "textarea", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 195)(15, "label", 196);
    \u0275\u0275element(16, "i", 62);
    \u0275\u0275text(17, " \u0645\u0644\u0641 \u0645\u0631\u0641\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 201);
    \u0275\u0275listener("change", function Supervisor_form_8_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConsultationFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Supervisor_form_8_small_19_Template, 3, 0, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, Supervisor_form_8_div_20_Template, 3, 2, "div", 202);
    \u0275\u0275elementStart(21, "div", 203)(22, "p-button", 204);
    \u0275\u0275listener("onClick", function Supervisor_form_8_Template_p_button_onClick_22_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeConsultationModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-button", 205);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.consultationForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("readonly", ((ctx_r0.selectedConsultation == null ? null : ctx_r0.selectedConsultation.consultationID) ?? 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r0.selectedConsultation == null ? null : ctx_r0.selectedConsultation.consultationID) ?? 0) === 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r0.uploadingFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.uploadingFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previewUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.consultationForm.invalid || ctx_r0.loading || ctx_r0.uploadingFile);
  }
}
function Supervisor_form_10_small_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275element(1, "i", 207);
    \u0275\u0275text(2, " \u062C\u0627\u0631\u064A \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641... ");
    \u0275\u0275elementEnd();
  }
}
function Supervisor_form_10_div_34_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 211);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function Supervisor_form_10_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212);
    \u0275\u0275element(1, "i", 213);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u0645\u0644\u0641 PDF: ", ctx_r0.previewUrl, " ");
  }
}
function Supervisor_form_10_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 208);
    \u0275\u0275template(1, Supervisor_form_10_div_34_img_1_Template, 1, 1, "img", 209)(2, Supervisor_form_10_div_34_div_2_Template, 3, 1, "div", 210);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previewUrl.startsWith("data:") || ctx_r0.previewUrl.includes(".jpg") || ctx_r0.previewUrl.includes(".png"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previewUrl.includes(".pdf"));
  }
}
function Supervisor_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 194);
    \u0275\u0275listener("ngSubmit", function Supervisor_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveInvestigation());
    });
    \u0275\u0275elementStart(1, "div", 195)(2, "label", 196);
    \u0275\u0275element(3, "i", 62);
    \u0275\u0275text(4, " \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 ");
    \u0275\u0275elementStart(5, "span", 199);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 195)(9, "label", 196);
    \u0275\u0275element(10, "i", 68);
    \u0275\u0275text(11, " \u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(12, "span", 199);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "textarea", 215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 195)(16, "label", 196);
    \u0275\u0275element(17, "i", 39);
    \u0275\u0275text(18, " \u0627\u0644\u062D\u0627\u0644\u0629 ");
    \u0275\u0275elementStart(19, "span", 199);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 216)(22, "option", 217);
    \u0275\u0275text(23, "\u0645\u0643\u062A\u0645\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 218);
    \u0275\u0275text(25, "\u0645\u0624\u062C\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 219);
    \u0275\u0275text(27, "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 195)(29, "label", 196);
    \u0275\u0275element(30, "i", 62);
    \u0275\u0275text(31, " \u0645\u0644\u0641 \u0645\u0631\u0641\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 201);
    \u0275\u0275listener("change", function Supervisor_form_10_Template_input_change_32_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInvestigationFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, Supervisor_form_10_small_33_Template, 3, 0, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, Supervisor_form_10_div_34_Template, 3, 2, "div", 202);
    \u0275\u0275elementStart(35, "div", 203)(36, "p-button", 204);
    \u0275\u0275listener("onClick", function Supervisor_form_10_Template_p_button_onClick_36_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeInvestigationModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "p-button", 205);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.investigationForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("readonly", ((ctx_r0.selectedInvestigation == null ? null : ctx_r0.selectedInvestigation.investigationID) ?? 0) > 0);
    \u0275\u0275advance(25);
    \u0275\u0275property("disabled", ctx_r0.uploadingFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.uploadingFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.previewUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.investigationForm.invalid || ctx_r0.loading || ctx_r0.uploadingFile);
  }
}
var Supervisor = class _Supervisor {
  applicantService;
  lookupService;
  decisionService;
  maritalStatusService;
  http;
  fb;
  toastr;
  authService;
  router;
  applicant;
  results = [];
  decisionModel;
  maritalStatuses = [];
  rejectedId = null;
  postponedId = null;
  acceptedId = null;
  responseMessage = "";
  responseSuccess = false;
  isApproved = true;
  isAccept = false;
  // âœ… Ù…ØªØºÙŠØ±Ø§Øª Ù„Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø¥Ù…ÙƒØ§Ù†ÙŠØ© Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©
  canEditDecision = true;
  // ÙŠÙ…ÙƒÙ† Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø§ÙØªØ±Ø§Ø¶ÙŠØ§Ù‹
  previousDecisionLocked = false;
  // Ù‡Ù„ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø© Ù…Ù‚ÙÙ„Ø© (Ù…Ù‚Ø¨ÙˆÙ„/Ù…Ø±ÙÙˆØ¶)
  clinicsData = [];
  loading = false;
  refractionTypes = [];
  currentFileNumber = null;
  // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ù„Ù†ÙØ³ Ø±Ù‚Ù… Ø§Ù„Ù…Ù„Ù
  isLoadingClinicsData = false;
  // âœ… Ù…Ù†Ø¹ Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ loadClinicsData Ø¹Ø¯Ø© Ù…Ø±Ø§Øª
  lastSelectedApplicantSummary = null;
  isLoadingApplicantDetails = false;
  // âœ… Ù…Ù†Ø¹ Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ getApplicantByFileNumber$ Ø¹Ø¯Ø© Ù…Ø±Ø§Øª
  // Specialization IDs
  EYE_SPECIALIZATION_ID = 1;
  INTERNAL_SPECIALIZATION_ID = 2;
  SURGICAL_SPECIALIZATION_ID = 3;
  ORTHOPEDIC_SPECIALIZATION_ID = 4;
  EAR_SPECIALIZATION_ID = 5;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  fileUploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  // Modal states
  showConsultationModal = false;
  showInvestigationModal = false;
  selectedConsultation = null;
  selectedInvestigation = null;
  consultationForm;
  investigationForm;
  uploadedPath = null;
  previewUrl = null;
  uploadingFile = false;
  decisionForm;
  constructor(applicantService, lookupService, decisionService, maritalStatusService, http, fb, toastr, authService, router) {
    this.applicantService = applicantService;
    this.lookupService = lookupService;
    this.decisionService = decisionService;
    this.maritalStatusService = maritalStatusService;
    this.http = http;
    this.fb = fb;
    this.toastr = toastr;
    this.authService = authService;
    this.router = router;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("access_token") || "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  // Helper method to get consultations by specialization and file number
  getConsultationsBySpecialization(specializationId, fileNumber) {
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortBy", "consultationID").set("sortDesc", "true").set("filterDict[doctor.specializationID]", specializationId.toString()).set("filterDict[applicantFileNumber]", fileNumber);
    return this.http.get(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => {
      const items = res.data?.items || [];
      const uniqueItems = this.removeDuplicateConsultations(items);
      return uniqueItems.sort((a, b) => (b.consultationID || 0) - (a.consultationID || 0));
    }), catchError(() => {
      return of([]);
    }), shareReplay(1));
  }
  // Helper method to get investigations by specialization and file number
  getInvestigationsBySpecialization(specializationId, fileNumber) {
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortBy", "investigationID").set("sortDesc", "true").set("filterDict[doctor.specializationID]", specializationId.toString()).set("filterDict[applicantFileNumber]", fileNumber);
    return this.http.get(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => {
      const items = res.data?.items || [];
      const uniqueItems = this.removeDuplicateInvestigations(items);
      return uniqueItems.sort((a, b) => (b.investigationID || 0) - (a.investigationID || 0));
    }), catchError(() => {
      return of([]);
    }), shareReplay(1));
  }
  // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ù…Ù† Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª
  removeDuplicateConsultations(consultations) {
    const seen = /* @__PURE__ */ new Set();
    return consultations.filter((consultation) => {
      const id = consultation.consultationID;
      if (!id || id === 0) {
        return false;
      }
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }
  // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ù…Ù† Ø§Ù„ØªØ­Ø§Ù„ÙŠÙ„
  removeDuplicateInvestigations(investigations) {
    const seen = /* @__PURE__ */ new Set();
    return investigations.filter((investigation) => {
      const id = investigation.investigationID;
      if (!id || id === 0) {
        return false;
      }
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }
  ngOnInit() {
    this.loadResults();
    this.loadMaritalStatuses();
    this.loadRefractionTypes();
  }
  // Ø¬Ù„Ø¨ Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø§Ù†ÙƒØ³Ø§Ø±
  loadRefractionTypes() {
    const url = `${environment.apiUrl}/api/RefractionTypes?page=1&pageSize=100`;
    this.http.get(url, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (response) => {
        this.refractionTypes = response.data?.items || [];
      },
      error: () => {
        this.refractionTypes = [
          { refractionTypeID: 1, description: "\xD9\u201A\xD8\xB5\xD8\xB1 \xD9\u2020\xD8\xB8\xD8\xB1" },
          { refractionTypeID: 2, description: "\xD9\u2026\xD8\xAF \xD9\u2020\xD8\xB8\xD8\xB1" },
          { refractionTypeID: 3, description: "\xD8\xA7\xD8\xB3\xD8\xAA\xD8\xAC\xD9\u2026\xD8\xA7\xD8\xAA\xD9\u0160\xD8\xB2\xD9\u2026" },
          { refractionTypeID: 4, description: "\xD9\u201A\xD8\xB5\xD8\xB1 \xD9\u2020\xD8\xB8\xD8\xB1 \xD9\u2026\xD8\xB9 \xD8\xA7\xD8\xB3\xD8\xAA\xD8\xAC\xD9\u2026\xD8\xA7\xD8\xAA\xD9\u0160\xD8\xB2\xD9\u2026" },
          { refractionTypeID: 5, description: "\xD9\u2026\xD8\xAF \xD9\u2020\xD8\xB8\xD8\xB1 \xD9\u2026\xD8\xB9 \xD8\xA7\xD8\xB3\xD8\xAA\xD8\xAC\xD9\u2026\xD8\xA7\xD8\xAA\xD9\u0160\xD8\xB2\xD9\u2026" }
        ];
      }
    });
  }
  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø³Ù… Ù†ÙˆØ¹ Ø§Ù„Ø§Ù†ÙƒØ³Ø§Ø±
  getRefractionTypeName(refractionTypeID) {
    const type = this.refractionTypes.find((rt) => rt.refractionTypeID === refractionTypeID);
    return type?.description || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
  }
  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù†ÙƒØ³Ø§Ø±Ø§Øª Ø§Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰
  getRightEyeRefractions(exam) {
    if (!exam?.refractions || !Array.isArray(exam.refractions)) {
      return [];
    }
    return exam.refractions.filter((r) => !r.isLeft);
  }
  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù†ÙƒØ³Ø§Ø±Ø§Øª Ø§Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠØ³Ø±Ù‰
  getLeftEyeRefractions(exam) {
    if (!exam?.refractions || !Array.isArray(exam.refractions)) {
      return [];
    }
    return exam.refractions.filter((r) => r.isLeft);
  }
  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø­Ù‚Ù„ Ù…Ù† ÙØ­Øµ Ø§Ù„Ø¹ÙŠÙ† Ù…Ø¹ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„ÙØ§Ø±ØºØ©
  getEyeExamField(exam, fieldName) {
    if (!exam || exam === null || exam === void 0) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    if (!(fieldName in exam)) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    const value = exam[fieldName];
    if (value === null || value === void 0) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    const trimmedValue = String(value).trim();
    if (trimmedValue === "") {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    return trimmedValue;
  }
  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„Ø¨ØµØ±ÙŠØ© Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ visionRight
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ³ØªØ®Ø¯Ù… vision Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback
   */
  getVisionRight(exam) {
    if (!exam)
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    if ("visionRight" in exam && exam.visionRight) {
      const value = String(exam.visionRight).trim();
      if (value !== "")
        return value;
    }
    if ("vision" in exam && exam.vision) {
      const value = String(exam.vision).trim();
      if (value !== "")
        return value;
    }
    return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„Ø¨ØµØ±ÙŠØ© Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠØ³Ø±Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ visionLeft
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ¹Ø±Ø¶ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯" Ù„Ø£Ù† visionLeft ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ API
   * âŒ Ù„Ø§ Ù†Ø³ØªØ®Ø¯Ù… vision Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback Ù„Ø£Ù†Ù‡ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰ ÙÙ‚Ø·
   */
  getVisionLeft(exam) {
    if (!exam)
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    if ("visionLeft" in exam && exam.visionLeft) {
      const value = String(exam.visionLeft).trim();
      if (value !== "")
        return value;
    }
    return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„Ø£Ù„ÙˆØ§Ù† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ colorTestRight
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ³ØªØ®Ø¯Ù… colorTest Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback
   */
  getColorTestRight(exam) {
    if (!exam)
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    if ("colorTestRight" in exam && exam.colorTestRight) {
      const value = String(exam.colorTestRight).trim();
      if (value !== "")
        return value;
    }
    if ("colorTest" in exam && exam.colorTest) {
      const value = String(exam.colorTest).trim();
      if (value !== "")
        return value;
    }
    return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„Ø£Ù„ÙˆØ§Ù† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠØ³Ø±Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ colorTestLeft
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ¹Ø±Ø¶ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯" Ù„Ø£Ù† colorTestLeft ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ API
   * âŒ Ù„Ø§ Ù†Ø³ØªØ®Ø¯Ù… colorTest Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback Ù„Ø£Ù†Ù‡ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰ ÙÙ‚Ø·
   */
  getColorTestLeft(exam) {
    if (!exam)
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    if ("colorTestLeft" in exam && exam.colorTestLeft) {
      const value = String(exam.colorTestLeft).trim();
      if (value !== "")
        return value;
    }
    return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø­Ù‚Ù„ Ù…Ù† ÙØ­Øµ Ø§Ù„Ø£Ø°Ù† Ù…Ø¹ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„ÙØ§Ø±ØºØ©
  getEarExamField(exam, fieldName) {
    if (!exam || exam === null || exam === void 0) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    if (!(fieldName in exam)) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    const value = exam[fieldName];
    if (value === null || value === void 0) {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    const trimmedValue = String(value).trim();
    if (trimmedValue === "") {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
    return trimmedValue;
  }
  // âœ… Ù…Ø¹Ø§Ù„Ø¬ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…Ù†ØªØ³Ø¨ Ù…Ù† Ù…ÙƒÙˆÙ† Ø§Ù„Ø¨Ø­Ø«
  // âœ… Ø¯Ø§Ù„Ø© Ø¬Ø¯ÙŠØ¯Ø© Ù„Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ ApplicantDetailsModel Ù…Ø¨Ø§Ø´Ø±Ø© (ØªØ¬Ù†Ø¨ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø©)
  onApplicantDetailsSelected(applicantDetails) {
    if (!applicantDetails?.fileNumber) {
      this.responseMessage = "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631";
      this.responseSuccess = false;
      return;
    }
    if (this.currentFileNumber === applicantDetails.fileNumber && (this.loading || this.isLoadingApplicantDetails)) {
      return;
    }
    if (this.isLoadingApplicantDetails) {
      return;
    }
    this.currentFileNumber = applicantDetails.fileNumber;
    this.applicant = void 0;
    this.decisionModel = void 0;
    this.responseMessage = "";
    this.responseSuccess = false;
    this.clinicsData = [];
    this.loading = true;
    this.applicant = applicantDetails;
    this.mapApplicantToDecision(applicantDetails);
    this.checkPreviousDecisionStatus(applicantDetails);
    this.loadClinicsData(applicantDetails.fileNumber);
    this.loading = false;
  }
  // âœ… Ø¯Ø§Ù„Ø© Ù‚Ø¯ÙŠÙ…Ø© Ù„Ù„ØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø£Ø®Ø±Ù‰ (Ø¥Ø°Ø§ ÙƒØ§Ù†Øª ØªØ³ØªØ®Ø¯Ù… applicantSelected)
  onApplicantSelected(applicant) {
    if (!applicant?.fileNumber) {
      this.responseMessage = "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631";
      this.responseSuccess = false;
      return;
    }
    if (this.currentFileNumber === applicant.fileNumber && (this.loading || this.isLoadingApplicantDetails)) {
      return;
    }
    if (this.isLoadingApplicantDetails) {
      return;
    }
    this.currentFileNumber = applicant.fileNumber;
    this.lastSelectedApplicantSummary = applicant;
    this.applicant = void 0;
    this.decisionModel = void 0;
    this.responseMessage = "";
    this.responseSuccess = false;
    this.clinicsData = [];
    this.loading = true;
    this.isLoadingApplicantDetails = true;
    this.applicantService.getApplicantByFileNumber$(applicant.fileNumber).pipe(take(1)).subscribe({
      next: (applicantDetails) => {
        this.isLoadingApplicantDetails = false;
        if (applicantDetails) {
          this.applicant = this.mergeApplicantDetailsWithBasicInfo(applicantDetails, this.lastSelectedApplicantSummary);
          this.mapApplicantToDecision(applicantDetails);
          this.checkPreviousDecisionStatus(applicantDetails);
          this.loadClinicsData(applicantDetails.fileNumber);
        } else {
          this.responseMessage = "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062A\u0633\u0628";
          this.responseSuccess = false;
          this.loading = false;
          this.currentFileNumber = null;
        }
      },
      error: () => {
        this.isLoadingApplicantDetails = false;
        this.applicant = void 0;
        this.decisionModel = void 0;
        this.responseMessage = "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062A\u0633\u0628";
        this.responseSuccess = false;
        this.loading = false;
        this.currentFileNumber = null;
        this.lastSelectedApplicantSummary = null;
      }
    });
  }
  mergeApplicantDetailsWithBasicInfo(details, basicInfo) {
    if (!basicInfo) {
      return details;
    }
    const mergedDetails = __spreadValues({}, details);
    if (!mergedDetails.motherName && basicInfo.motherName) {
      mergedDetails.motherName = basicInfo.motherName;
    }
    if (!mergedDetails.dateOfBirth && basicInfo.dateOfBirth) {
      mergedDetails.dateOfBirth = basicInfo.dateOfBirth;
    }
    if (!mergedDetails.bloodType && basicInfo.bloodType) {
      mergedDetails.bloodType = basicInfo.bloodType;
    }
    if (!mergedDetails.recruitmentCenter && basicInfo.recruitmentCenter) {
      mergedDetails.recruitmentCenter = basicInfo.recruitmentCenter;
    }
    if (!mergedDetails.queueNumber && basicInfo.queueNumber) {
      mergedDetails.queueNumber = basicInfo.queueNumber;
    }
    if (!mergedDetails.job && basicInfo.job) {
      mergedDetails.job = basicInfo.job;
    }
    if (!mergedDetails.height && basicInfo.height) {
      mergedDetails.height = basicInfo.height;
    }
    if (!mergedDetails.weight && basicInfo.weight) {
      mergedDetails.weight = basicInfo.weight;
    }
    if (!mergedDetails.bmi && basicInfo.bmi) {
      mergedDetails.bmi = basicInfo.bmi;
    }
    if (!mergedDetails.bloodPressure && basicInfo.bloodPressure) {
      mergedDetails.bloodPressure = basicInfo.bloodPressure;
    }
    if (!mergedDetails.pulse && basicInfo.pulse) {
      mergedDetails.pulse = basicInfo.pulse;
    }
    if (mergedDetails.tattoo === void 0 && basicInfo.tattoo !== void 0) {
      mergedDetails.tattoo = basicInfo.tattoo;
    }
    if (!mergedDetails.distinctiveMarks && basicInfo.distinctiveMarks) {
      mergedDetails.distinctiveMarks = basicInfo.distinctiveMarks;
    }
    return mergedDetails;
  }
  loadClinicsData(fileNumber) {
    if (this.isLoadingClinicsData && this.currentFileNumber === fileNumber) {
      return;
    }
    this.isLoadingClinicsData = true;
    this.loading = true;
    const eyeConsultations$ = this.getConsultationsBySpecialization(this.EYE_SPECIALIZATION_ID, fileNumber);
    const eyeInvestigations$ = this.getInvestigationsBySpecialization(this.EYE_SPECIALIZATION_ID, fileNumber);
    const internalConsultations$ = this.getConsultationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, fileNumber);
    const internalInvestigations$ = this.getInvestigationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, fileNumber);
    const surgicalConsultations$ = this.getConsultationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, fileNumber);
    const surgicalInvestigations$ = this.getInvestigationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, fileNumber);
    const orthopedicConsultations$ = this.getConsultationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, fileNumber);
    const orthopedicInvestigations$ = this.getInvestigationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, fileNumber);
    const earConsultations$ = this.getConsultationsBySpecialization(this.EAR_SPECIALIZATION_ID, fileNumber);
    const earInvestigations$ = this.getInvestigationsBySpecialization(this.EAR_SPECIALIZATION_ID, fileNumber);
    forkJoin({
      eyeConsultations: eyeConsultations$,
      eyeInvestigations: eyeInvestigations$,
      earConsultations: earConsultations$,
      earInvestigations: earInvestigations$,
      internalConsultations: internalConsultations$,
      internalInvestigations: internalInvestigations$,
      surgicalConsultations: surgicalConsultations$,
      surgicalInvestigations: surgicalInvestigations$,
      orthopedicConsultations: orthopedicConsultations$,
      orthopedicInvestigations: orthopedicInvestigations$
    }).subscribe({
      next: (data) => {
        const eyeConsultations = this.removeDuplicateConsultations(data.eyeConsultations);
        const eyeInvestigations = this.removeDuplicateInvestigations(data.eyeInvestigations);
        const earConsultations = this.removeDuplicateConsultations(data.earConsultations);
        const earInvestigations = this.removeDuplicateInvestigations(data.earInvestigations);
        const internalConsultations = this.removeDuplicateConsultations(data.internalConsultations);
        const internalInvestigations = this.removeDuplicateInvestigations(data.internalInvestigations);
        const surgicalConsultations = this.removeDuplicateConsultations(data.surgicalConsultations);
        const surgicalInvestigations = this.removeDuplicateInvestigations(data.surgicalInvestigations);
        const orthopedicConsultations = this.removeDuplicateConsultations(data.orthopedicConsultations);
        const orthopedicInvestigations = this.removeDuplicateInvestigations(data.orthopedicInvestigations);
        this.clinicsData = [
          {
            name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0648\u0646",
            icon: "pi pi-eye",
            exam: this.applicant.eyeExam,
            consultations: eyeConsultations,
            investigations: eyeInvestigations
          },
          {
            name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u0629",
            icon: "pi pi-heart",
            exam: this.applicant.internalExam,
            consultations: internalConsultations,
            investigations: internalInvestigations
          },
          {
            name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062C\u0631\u0627\u062D\u0629",
            icon: "pi pi-briefcase",
            exam: this.applicant.surgicalExam,
            consultations: surgicalConsultations,
            investigations: surgicalInvestigations
          },
          {
            name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629",
            icon: "pi pi-bone",
            exam: this.applicant.orthopedicExamDto,
            consultations: orthopedicConsultations,
            investigations: orthopedicInvestigations
          },
          {
            name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0630\u0646\u064A\u0629",
            icon: "pi pi-volume-up",
            exam: this.applicant.earClinic,
            consultations: earConsultations,
            investigations: earInvestigations
          }
        ];
        this.loading = false;
        this.isLoadingClinicsData = false;
      },
      error: (err) => {
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u064A\u0627\u062F\u0627\u062A", "\u062E\u0637\u0623");
        this.loading = false;
        this.isLoadingClinicsData = false;
      }
    });
  }
  openFile(attachment) {
    if (!attachment) {
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, "_blank");
  }
  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => this.maritalStatuses = data,
      error: () => {
      }
    });
  }
  getMaritalStatusDescription(id) {
    const status = this.maritalStatuses.find((s) => s.maritalStatusID === id);
    return status ? status.description : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  loadResults() {
    this.lookupService.getResults().subscribe({
      next: (data) => {
        this.results = data;
        const rejected = this.results.find((r) => r.description == "\u0645\u0631\u0641\u0648\u0636");
        const postponed = this.results.find((r) => r.description == "\u0645\u0624\u062C\u0644");
        const approved = this.results.find((r) => r.description == "\u0645\u0642\u0628\u0648\u0644");
        this.rejectedId = rejected ? rejected.resultID : null;
        this.postponedId = postponed ? postponed.resultID : null;
        this.acceptedId = approved ? approved.resultID : null;
      },
      error: () => {
      }
    });
  }
  mapApplicantToDecision(applicant) {
    this.decisionModel = {
      orthopedicExamID: applicant.orthopedicExamDto?.orthopedicExamID || 0,
      surgicalExamID: applicant.surgicalExam?.surgicalExamID || 0,
      internalExamID: applicant.internalExam?.internalExamID || 0,
      eyeExamID: applicant.eyeExam?.eyeExamID || 0,
      earClinicID: applicant.earClinic?.earClinicID || 0,
      applicantFileNumber: applicant.fileNumber,
      resultID: 0,
      reason: "",
      postponeDuration: "",
      decisionDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
  }
  /**
   * âœ… ÙØ­Øµ Ø­Ø§Ù„Ø© Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø© ÙˆØªØ­Ø¯ÙŠØ¯ Ø¥Ù…ÙƒØ§Ù†ÙŠØ© Ø§Ù„ØªØ¹Ø¯ÙŠÙ„
   * - Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ù‡Ù†Ø§Ùƒ Ø£ÙŠ Ù†ØªÙŠØ¬Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ù…ÙˆØ¬ÙˆØ¯Ø© â†’ Ù…Ù†Ø¹ Ø¥Ø¶Ø§ÙØ© Ù†ØªÙŠØ¬Ø© Ø¬Ø¯ÙŠØ¯Ø©
   * - ÙŠÙ…ÙƒÙ† ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù†ØªÙŠØ¬Ø© ÙÙ‚Ø· ÙÙŠ dialog Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ù…Ù†ØªØ³Ø¨ÙŠÙ† Ø¥Ø°Ø§ ÙƒØ§Ù†Øª "Ù…Ø¤Ø¬Ù„"
   */
  checkPreviousDecisionStatus(applicant) {
    this.canEditDecision = true;
    this.previousDecisionLocked = false;
    if (!applicant?.finalDecision?.resultID) {
      return;
    }
    const previousResultID = applicant.finalDecision.resultID;
    this.previousDecisionLocked = true;
    this.canEditDecision = false;
    this.decisionModel.resultID = previousResultID;
    this.decisionModel.reason = applicant.finalDecision.reason || "";
    this.decisionModel.postponeDuration = applicant.finalDecision.postponeDuration || "";
    if (previousResultID === this.acceptedId) {
      this.isAccept = true;
      this.isApproved = true;
    } else if (previousResultID === this.rejectedId) {
      this.isAccept = false;
      this.isApproved = true;
    } else if (previousResultID === this.postponedId) {
      this.isApproved = false;
      this.isAccept = false;
    }
  }
  onResultChange(selectedId) {
    if (this.previousDecisionLocked || !this.canEditDecision) {
      return;
    }
    if (selectedId === this.postponedId) {
      this.isApproved = false;
    } else {
      this.isApproved = true;
      this.decisionModel.postponeDuration = "";
    }
    if (selectedId == this.acceptedId) {
      this.isAccept = true;
    } else {
      this.isAccept = false;
    }
  }
  submitDecision() {
    if (this.previousDecisionLocked || !this.canEditDecision) {
      this.responseMessage = "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0642\u064A\u064A\u0645 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0644\u0623\u0646\u0647 \u062A\u0645 \u0625\u0635\u062F\u0627\u0631 \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u0633\u0627\u0628\u0642\u0627\u064B.";
      this.responseSuccess = false;
      this.toastr.warning("\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0642\u064A\u064A\u0645 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0644\u0623\u0646\u0647 \u062A\u0645 \u0625\u0635\u062F\u0627\u0631 \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u0633\u0627\u0628\u0642\u0627\u064B.", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const requiredFields = [
      "orthopedicExamID",
      "surgicalExamID",
      "internalExamID",
      "eyeExamID",
      "applicantFileNumber",
      "resultID",
      "decisionDate"
    ];
    const missingFields = requiredFields.filter((field) => !this.decisionModel[field]);
    if (missingFields.length > 0) {
      this.responseMessage = "\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629: " + missingFields.join(", ");
      this.responseSuccess = false;
      this.toastr.warning("\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629: " + missingFields.join(", "), "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    if (this.applicant?.finalDecision?.resultID) {
      this.responseMessage = "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629\u060C \u062D\u064A\u062B \u062A\u0648\u062C\u062F \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u0645\u0633\u062C\u0651\u0644\u0629 \u0645\u0633\u0628\u0642\u0627\u064B.";
      this.responseSuccess = false;
      this.toastr.warning("\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629\u060C \u062D\u064A\u062B \u062A\u0648\u062C\u062F \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u0645\u0633\u062C\u0651\u0644\u0629 \u0645\u0633\u0628\u0642\u0627\u064B.", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    this.loading = true;
    this.decisionService.createFinalDecision(this.decisionModel).pipe(finalize(() => this.loading = false)).subscribe({
      next: (res) => {
        const isSuccessful = res?.succeeded !== false;
        if (isSuccessful) {
          this.responseMessage = "\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0628\u0646\u062C\u0627\u062D \u0648\u062A\u0645 \u062A\u062B\u0628\u064A\u062A \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641.";
          this.responseSuccess = true;
          this.toastr.success("\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D", {
            timeOut: 2500,
            positionClass: "toast-top-center"
          });
          this.previousDecisionLocked = true;
          this.canEditDecision = false;
          if (this.applicant) {
            const existing = this.applicant.finalDecision;
            const newDecisionId = res?.data?.decisionID;
            const result = existing?.result ?? this.results.find((r) => r.resultID === this.decisionModel.resultID) ?? {
              resultID: this.decisionModel.resultID,
              description: ""
            };
            this.applicant.finalDecision = __spreadValues({
              decisionID: newDecisionId ?? existing?.decisionID ?? 0,
              orthopedicExamID: this.decisionModel.orthopedicExamID ?? existing?.orthopedicExamID ?? 0,
              surgicalExamID: this.decisionModel.surgicalExamID ?? existing?.surgicalExamID ?? 0,
              internalExamID: this.decisionModel.internalExamID ?? existing?.internalExamID ?? 0,
              eyeExamID: this.decisionModel.eyeExamID ?? existing?.eyeExamID ?? 0,
              applicantFileNumber: this.decisionModel.applicantFileNumber ?? existing?.applicantFileNumber ?? "",
              resultID: this.decisionModel.resultID,
              reason: this.decisionModel.reason ?? "",
              postponeDuration: this.decisionModel.postponeDuration ?? "",
              decisionDate: this.decisionModel.decisionDate,
              result,
              supervisorAddedAt: (/* @__PURE__ */ new Date()).toISOString()
            }, existing && {
              receptionAddedAt: existing.receptionAddedAt,
              supervisorLastModifiedAt: existing.supervisorLastModifiedAt,
              isExportedToRecruitment: existing.isExportedToRecruitment,
              exportedAt: existing.exportedAt
            });
          }
        } else {
          const errorMsg = res?.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
          this.responseMessage = errorMsg;
          this.responseSuccess = false;
          this.toastr.error(errorMsg, "\u062E\u0637\u0623");
        }
      },
      error: (err) => {
        let serverMsg = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0633\u064A\u0631\u0641\u0631";
        if (err?.status === 404) {
          serverMsg = "\u0627\u0644\u0640 endpoint \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0640 API \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A.";
        } else if (err?.error?.errors) {
          const errorsMap = err.error.errors;
          if (Array.isArray(errorsMap)) {
            serverMsg = errorsMap.join(", ");
          } else if (Array.isArray(errorsMap?.detail)) {
            serverMsg = errorsMap.detail.join(", ");
          } else if (errorsMap?.message) {
            serverMsg = errorsMap.message;
          }
        } else if (err?.error?.message) {
          serverMsg = err.error.message;
        }
        this.responseMessage = serverMsg;
        this.responseSuccess = false;
        this.toastr.error(serverMsg, "\u062E\u0637\u0623");
        console.error("Error creating final decision:", err);
      }
    });
  }
  resetForm() {
    if (this.decisionForm) {
      this.decisionForm.resetForm();
    }
    this.applicant = void 0;
    this.decisionModel = void 0;
    this.responseMessage = "";
    this.responseSuccess = false;
    this.clinicsData = [];
    this.isApproved = true;
    this.isAccept = false;
    this.loading = false;
    this.canEditDecision = true;
    this.previousDecisionLocked = false;
  }
  getResultDescription(resultID) {
    const result = this.results.find((r) => r.resultID === resultID);
    return result ? result.description : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  getResultSeverity(resultID) {
    const result = this.results.find((r) => r.resultID === resultID);
    if (!result)
      return "secondary";
    const description = result.description.toLowerCase();
    if (description.includes("\u0645\u0642\u0628\u0648\u0644") || description.includes("\u0642\u0628\u0648\u0644"))
      return "success";
    if (description.includes("\u0645\u0631\u0641\u0648\u0636") || description.includes("\u0631\u0641\u0636"))
      return "danger";
    if (description.includes("\u0645\u0624\u062C\u0644") || description.includes("\u062A\u0623\u062C\u064A\u0644"))
      return "warn";
    return "info";
  }
  getStatusSeverity(status) {
    if (!status)
      return "secondary";
    const statusLower = status.toLowerCase();
    if (statusLower.includes("\u0645\u0643\u062A\u0645\u0644") || statusLower.includes("\u062C\u0627\u0647\u0632"))
      return "success";
    if (statusLower.includes("\u0642\u064A\u062F") || statusLower.includes("\u0627\u0646\u062A\u0638\u0627\u0631"))
      return "warn";
    if (statusLower.includes("\u0645\u0644\u063A\u064A") || statusLower.includes("\u0631\u0641\u0636"))
      return "danger";
    return "info";
  }
  /**
   * âœ… Ø­Ø³Ø§Ø¨ Ø¹Ø¯Ø¯ Ø§Ù„ØªÙˆØ§Ø±ÙŠØ® Ø§Ù„Ù…ØªØ§Ø­Ø© ÙÙŠ Ø§Ù„Ù‚Ø±Ø§Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠ
   */
  getDatesCount(finalDecision) {
    if (!finalDecision)
      return 0;
    let count = 0;
    if (finalDecision.receptionAddedAt)
      count++;
    if (finalDecision.supervisorAddedAt)
      count++;
    if (finalDecision.supervisorLastModifiedAt)
      count++;
    if (finalDecision.decisionDate)
      count++;
    if (finalDecision.exportedAt)
      count++;
    return count;
  }
  // TrackBy functions for better performance
  trackByConsultationId(index, consultation) {
    return consultation.consultationID || index;
  }
  trackByInvestigationId(index, investigation) {
    return investigation.investigationID || index;
  }
  hasAllExams() {
    if (!this.applicant)
      return false;
    return !!(this.applicant.eyeExam && this.applicant.surgicalExam && this.applicant.orthopedicExamDto && this.applicant.internalExam && this.applicant.earClinic);
  }
  getSpecializationId(clinicName) {
    switch (clinicName) {
      case "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0648\u0646":
        return this.EYE_SPECIALIZATION_ID;
      case "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u0629":
        return this.INTERNAL_SPECIALIZATION_ID;
      case "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062C\u0631\u0627\u062D\u0629":
        return this.SURGICAL_SPECIALIZATION_ID;
      case "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629":
        return this.ORTHOPEDIC_SPECIALIZATION_ID;
      case "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0630\u0646\u064A\u0629":
        return this.EAR_SPECIALIZATION_ID;
      default:
        return 0;
    }
  }
  /** يُرجع doctorID طبيب التقييم الطبي للعيادة حسب التخصص (ليظهر مع الاستشارات/التحاليل). */
  getDoctorIdForSpecialization(specializationId) {
    if (!this.applicant)
      return null;
    switch (specializationId) {
      case this.EYE_SPECIALIZATION_ID:
        return this.applicant.eyeExam?.doctorID ?? null;
      case this.INTERNAL_SPECIALIZATION_ID:
        return this.applicant.internalExam?.doctorID ?? null;
      case this.SURGICAL_SPECIALIZATION_ID:
        return this.applicant.surgicalExam?.doctorID ?? null;
      case this.ORTHOPEDIC_SPECIALIZATION_ID:
        return this.applicant.orthopedicExamDto?.doctorID ?? null;
      case this.EAR_SPECIALIZATION_ID:
        return this.applicant.earClinic?.doctorID ?? null;
      default:
        return null;
    }
  }
  // ==================== Consultation Methods ====================
  openEditConsultationModal(consultation) {
    this.selectedConsultation = consultation;
    this.consultationForm = this.fb.group({
      result: [consultation.result || "", Validators.required],
      attachment: [consultation.attachment || null]
    });
    this.uploadedPath = consultation.attachment || null;
    this.previewUrl = consultation.attachment ? `${environment.apiUrl}/${consultation.attachment}` : null;
    this.showConsultationModal = true;
  }
  openAddConsultationModal(clinicName, specializationId) {
    const clinicDoctorId = this.getDoctorIdForSpecialization(specializationId);
    this.selectedConsultation = {
      consultationID: 0,
      applicantFileNumber: this.applicant.fileNumber,
      consultationType: "",
      referralReason: "",
      // ✅ جديد
      result: "",
      attachment: "",
      doctorID: clinicDoctorId ?? null
    };
    this.consultationForm = this.fb.group({
      consultationType: ["", Validators.required],
      // referredDoctor: ['', Validators.required], // âŒ ØªÙ… Ø­Ø°ÙÙ‡
      referralReason: [""],
      // âœ… Ø¬Ø¯ÙŠØ¯ - Ø§Ø®ØªÙŠØ§Ø±ÙŠ
      result: ["", Validators.required],
      attachment: [null]
    });
    this.uploadedPath = null;
    this.previewUrl = null;
    this.showConsultationModal = true;
  }
  closeConsultationModal() {
    this.showConsultationModal = false;
    this.selectedConsultation = null;
    this.consultationForm.reset();
    this.uploadedPath = null;
    this.previewUrl = null;
  }
  onConsultationFileSelected(event) {
    const file = event.target.files[0];
    if (!file)
      return;
    this.uploadingFile = true;
    const formData = new FormData();
    formData.append("file", file);
    const reader = new FileReader();
    reader.onload = (e) => this.previewUrl = e.target.result;
    reader.readAsDataURL(file);
    this.http.post(this.fileUploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (response) => {
        const path = response.path ?? response.data;
        if (path) {
          this.uploadedPath = path;
          this.consultationForm.patchValue({ attachment: path });
          this.toastr.success("\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        } else {
          this.toastr.error("\u0641\u0634\u0644 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641", "\u062E\u0637\u0623");
        }
        this.uploadingFile = false;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641", "\u062E\u0637\u0623");
        this.uploadingFile = false;
      }
    });
  }
  saveConsultation() {
    if (this.consultationForm.invalid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    if (!this.selectedConsultation)
      return;
    const formValue = this.consultationForm.value;
    const doctorID = this.selectedConsultation.doctorID ?? this.authService.getDoctorId() ?? null;
    const updatedConsultation = __spreadProps(__spreadValues({}, this.selectedConsultation), {
      doctorID,
      applicantFileNumber: this.applicant.fileNumber,
      consultationType: formValue.consultationType || this.selectedConsultation.consultationType,
      // referredDoctor: formValue.referredDoctor || this.selectedConsultation.referredDoctor, // âŒ ØªÙ… Ø­Ø°ÙÙ‡
      referralReason: formValue.referralReason || this.selectedConsultation.referralReason || "",
      // âœ… Ø¬Ø¯ÙŠØ¯
      result: formValue.result,
      attachment: this.uploadedPath || this.selectedConsultation.attachment || ""
    });
    this.loading = true;
    const isUpdate = this.selectedConsultation.consultationID && this.selectedConsultation.consultationID > 0;
    const request$ = isUpdate ? this.http.put(`${this.consultationUrl}/${this.selectedConsultation.consultationID}`, updatedConsultation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }) : this.http.post(this.consultationUrl, updatedConsultation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
    request$.subscribe({
      next: (response) => {
        if (response.succeeded) {
          this.toastr.success(isUpdate ? "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0628\u0646\u062C\u0627\u062D" : "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
          this.closeConsultationModal();
          this.loadClinicsData(this.applicant.fileNumber);
        } else {
          this.toastr.error("\u0641\u0634\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", "\u062E\u0637\u0623");
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  // ==================== Investigation Methods ====================
  openEditInvestigationModal(investigation) {
    this.selectedInvestigation = investigation;
    this.investigationForm = this.fb.group({
      type: [investigation.type || ""],
      result: [investigation.result || "", Validators.required],
      status: [
        investigation.status || (investigation.result ? "\u0645\u0643\u062A\u0645\u0644" : "\u0645\u0624\u062C\u0644"),
        Validators.required
      ],
      attachment: [investigation.attachment || null]
    });
    this.uploadedPath = investigation.attachment || null;
    this.previewUrl = investigation.attachment ? `${environment.apiUrl}/${investigation.attachment}` : null;
    this.showInvestigationModal = true;
  }
  openAddInvestigationModal(clinicName, specializationId) {
    const clinicDoctorId = this.getDoctorIdForSpecialization(specializationId);
    this.selectedInvestigation = {
      investigationID: 0,
      applicantFileNumber: this.applicant.fileNumber,
      type: "",
      result: "",
      status: "\u0645\u0624\u062C\u0644",
      attachment: "",
      doctorID: clinicDoctorId ?? 0
    };
    this.investigationForm = this.fb.group({
      type: ["", Validators.required],
      result: ["", Validators.required],
      status: ["\u0645\u0624\u062C\u0644", Validators.required],
      attachment: [null]
    });
    this.uploadedPath = null;
    this.previewUrl = null;
    this.showInvestigationModal = true;
  }
  closeInvestigationModal() {
    this.showInvestigationModal = false;
    this.selectedInvestigation = null;
    this.investigationForm.reset();
    this.uploadedPath = null;
    this.previewUrl = null;
  }
  onInvestigationFileSelected(event) {
    const file = event.target.files[0];
    if (!file)
      return;
    this.uploadingFile = true;
    const formData = new FormData();
    formData.append("file", file);
    const reader = new FileReader();
    reader.onload = (e) => this.previewUrl = e.target.result;
    reader.readAsDataURL(file);
    this.http.post(this.fileUploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (response) => {
        const path = response.path ?? response.data;
        if (path) {
          this.uploadedPath = path;
          this.investigationForm.patchValue({ attachment: path });
          this.toastr.success("\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        } else {
          this.toastr.error("\u0641\u0634\u0644 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641", "\u062E\u0637\u0623");
        }
        this.uploadingFile = false;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641", "\u062E\u0637\u0623");
        this.uploadingFile = false;
      }
    });
  }
  saveInvestigation() {
    if (this.investigationForm.invalid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    if (!this.selectedInvestigation)
      return;
    const doctorID = this.selectedInvestigation.doctorID || this.authService.getDoctorId() || 0;
    if (!doctorID) {
      this.toastr.error("\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644: \u064A\u062C\u0628 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0637\u0628\u064A \u0644\u0644\u0639\u064A\u0627\u062F\u0629 \u0623\u0648\u0644\u0627\u064B (\u0644\u0631\u0628\u0637 \u0627\u0644\u0637\u0628\u064A\u0628 \u0628\u0627\u0644\u0639\u064A\u0627\u062F\u0629)", "\u062E\u0637\u0623");
      return;
    }
    const formValue = this.investigationForm.value;
    const updatedInvestigation = __spreadProps(__spreadValues({}, this.selectedInvestigation), {
      doctorID,
      applicantFileNumber: this.applicant.fileNumber,
      type: formValue.type || this.selectedInvestigation.type,
      result: formValue.result,
      status: formValue.status,
      attachment: this.uploadedPath || this.selectedInvestigation.attachment || ""
    });
    this.loading = true;
    const isUpdate = this.selectedInvestigation.investigationID && this.selectedInvestigation.investigationID > 0;
    const request$ = isUpdate ? this.http.put(`${this.investigationUrl}/${this.selectedInvestigation.investigationID}`, updatedInvestigation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    }) : this.http.post(this.investigationUrl, updatedInvestigation, {
      headers: this.getAuthHeaders().set("Content-Type", "application/json")
    });
    request$.subscribe({
      next: (response) => {
        if (response.succeeded) {
          this.toastr.success(isUpdate ? "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0628\u0646\u062C\u0627\u062D" : "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
          this.closeInvestigationModal();
          this.loadClinicsData(this.applicant.fileNumber);
        } else {
          this.toastr.error("\u0641\u0634\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", "\u062E\u0637\u0623");
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  static \u0275fac = function Supervisor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Supervisor)(\u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(LookupService), \u0275\u0275directiveInject(DecisionService), \u0275\u0275directiveInject(MaritalStatusService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Supervisor, selectors: [["app-supervisor"]], viewQuery: function Supervisor_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decisionForm = _t.first);
    }
  }, decls: 11, vars: 28, consts: [["noConsultations", ""], ["noInvestigations", ""], ["decisionForm", "ngForm"], [1, "supervisor-page", "container-fluid"], [1, "row", "justify-content-center", "mb-4"], [1, "col-12"], [3, "applicantDetailsSelected", "hideApplicantDetails"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [3, "visibleChange", "onHide", "visible", "modal", "dismissableMask", "closeOnEscape", "closable", "draggable", "resizable", "header"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row", "g-4"], ["pTemplate", "header"], [1, "personal-info-grid"], [1, "info-item"], [1, "info-label"], [1, "pi", "pi-id-card"], [1, "info-value"], [1, "pi", "pi-user"], [1, "pi", "pi-user-edit"], [1, "pi", "pi-calendar"], [1, "pi", "pi-heart"], ["class", "badge bg-info text-white", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "pi", "pi-building"], [1, "pi", "pi-sort-numeric-up"], ["class", "badge bg-primary text-white", 4, "ngIf"], [1, "pi", "pi-calendar-plus"], [1, "pi", "pi-briefcase"], [1, "pi", "pi-arrows-v"], [1, "pi", "pi-chart-line"], [1, "pi", "pi-calculator"], [1, "pi", "pi-pulse"], [1, "pi", "pi-info-circle"], [3, "value", "severity"], [1, "info-item", "col-12"], [1, "pi", "pi-tag"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "final-decision-card"], [1, "decision-locked-message"], ["name", "decisionForm", 1, "decision-form"], [1, "card-header-custom"], [1, "d-flex", "align-items-center", "gap-2"], [1, "mb-0"], ["severity", "info", "styleClass", "file-badge", 3, "value"], [1, "badge", "bg-info", "text-white"], [1, "text-muted"], [1, "badge", "bg-primary", "text-white"], [1, "clinic-content"], ["class", "section-block", 4, "ngIf"], [1, "section-block"], [1, "section-title"], [1, "pi", "pi-comments"], ["severity", "info", "styleClass", "ms-2 count-badge", 3, "value"], ["icon", "pi pi-plus", "label", "\u0625\u0636\u0627\u0641\u0629 \u0627\u0633\u062A\u0634\u0627\u0631\u0629", "styleClass", "p-button-sm p-button-outlined", 3, "click", "disabled"], ["class", "consultations-list", 4, "ngIf", "ngIfElse"], [1, "pi", "pi-file"], ["icon", "pi pi-plus", "label", "\u0625\u0636\u0627\u0641\u0629 \u062A\u062D\u0644\u064A\u0644", "styleClass", "p-button-sm p-button-outlined", 3, "onClick", "disabled"], ["class", "investigations-list", 4, "ngIf", "ngIfElse"], [1, "clinic-header"], [1, "clinic-icon"], ["styleClass", "exam-status-badge", 3, "value", "severity"], [1, "pi", "pi-file-edit"], [1, "exam-details"], [3, "ngSwitch"], ["class", "exam-data", 4, "ngSwitchCase"], [1, "exam-data"], [1, "data-row"], [1, "data-label"], [1, "pi", "pi-eye"], [1, "data-value"], [1, "pi", "pi-palette"], ["class", "data-row", 4, "ngIf"], [1, "data-row", "result-row"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-angle-right"], [1, "refractions-display", "d-flex", "flex-wrap", "gap-2"], ["class", "badge bg-info text-white", 4, "ngFor", "ngForOf"], [1, "pi", "pi-angle-left"], ["class", "badge bg-secondary text-white", 4, "ngFor", "ngForOf"], [1, "badge", "bg-secondary", "text-white"], [1, "data-value", "text-muted"], [1, "pi", "pi-exclamation-triangle"], [1, "data-value", "reason-text"], [1, "pi", "pi-wind"], [1, "pi", "pi-apple"], [1, "pi", "pi-cog"], [1, "pi", "pi-brain"], [1, "pi", "pi-tint"], [1, "pi", "pi-link"], [1, "pi", "pi-filter"], [1, "pi", "pi-circle"], [1, "pi", "pi-bone"], [1, "pi", "pi-volume-up"], [1, "pi", "pi-volume-down"], [1, "pi", "pi-comment"], [1, "no-data-message"], [1, "consultations-list"], ["class", "consultation-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "consultation-card"], [1, "consultation-main"], [1, "consultation-info"], [1, "consultation-header"], [1, "consultation-type"], ["severity", "info", "styleClass", "consultation-id-badge", 3, "value"], [1, "consultation-meta"], ["class", "meta-item", 4, "ngIf"], [1, "consultation-actions"], ["icon", "pi pi-pencil", "label", "\u062A\u0639\u062F\u064A\u0644", "styleClass", "p-button-sm p-button-outlined", 3, "onClick", "disabled"], ["class", "btn-attachment", "title", "\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642", 3, "click", 4, "ngIf"], ["class", "no-attachment", 4, "ngIf"], ["class", "consultation-result", 4, "ngIf"], [1, "meta-item"], [1, "pi", "pi-user-md"], [1, "referral-reason"], ["title", "\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642", 1, "btn-attachment", 3, "click"], [1, "no-attachment"], [1, "pi", "pi-times-circle"], [1, "consultation-result"], [1, "result-header"], [1, "result-content"], [1, "investigations-list"], ["class", "investigation-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "investigation-card"], [1, "investigation-main"], [1, "investigation-info"], [1, "investigation-header"], [1, "investigation-type"], ["severity", "info", "styleClass", "investigation-id-badge", 3, "value"], [1, "investigation-meta"], ["styleClass", "status-badge", 3, "value", "severity"], [1, "investigation-actions"], ["class", "investigation-result", 4, "ngIf"], [1, "investigation-reason"], [1, "investigation-result"], [1, "decision-card-header"], [1, "header-content"], [1, "header-icon-wrapper"], [1, "header-text"], [1, "header-title"], [1, "pi", "pi-file-check", "header-title-icon"], [1, "header-subtitle"], [1, "pi", "pi-info-circle", "header-subtitle-icon"], [1, "decision-card-body"], [1, "decision-info-section", "status-section"], [1, "section-header"], [1, "section-icon", "status-section-icon"], [1, "info-list", "status-list"], [1, "info-item", "status-item"], [1, "info-item-icon", "status-icon"], [1, "pi", "pi-file-export"], [1, "info-item-content"], [1, "info-item-label"], [1, "info-item-value"], [1, "info-item", "result-item"], [1, "info-item-icon", "result-icon"], [1, "pi", "pi-flag"], ["styleClass", "result-badge", 3, "value", "severity"], [1, "locked-icon"], [1, "pi", "pi-lock"], [1, "locked-content"], [1, "locked-title"], [1, "locked-text"], [1, "form-section-header"], [1, "section-icon-small"], [1, "pi", "pi-plus-circle"], [1, "section-title-small"], [1, "form-fields"], [1, "form-field-group"], [1, "form-label-enhanced"], [1, "pi", "pi-list"], [1, "required-star"], ["bindLabel", "description", "bindValue", "resultID", "name", "resultID", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629", 1, "enhanced-select", 3, "ngModelChange", "items", "ngModel", "appendTo", "disabled"], [1, "form-hint"], ["class", "form-field-group", 4, "ngIf"], ["class", "form-actions", 4, "ngIf"], [1, "response-message"], ["class", "form-label-enhanced", 4, "ngIf"], ["name", "reason", "rows", "4", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0623\u0648 \u0627\u0644\u0633\u0628\u0628...", 1, "form-control-enhanced", 3, "ngModelChange", "ngModel", "disabled"], [1, "pi", "pi-thumbs-up"], ["rows", "4", "readonly", "", 1, "form-control-enhanced", 2, "background-color", "var(--neutral-light)", "cursor", "not-allowed", 3, "value"], [1, "pi", "pi-clock"], ["type", "text", "name", "postponeDuration", "placeholder", "\u0623\u062F\u062E\u0644 \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644...", 1, "form-control-enhanced", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "readonly", "", 1, "form-control-enhanced", 2, "background-color", "var(--neutral-light)", "cursor", "not-allowed", 3, "value"], [1, "form-actions"], ["label", "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A", "icon", "pi pi-check", "severity", "success", "styleClass", "submit-decision-btn", 3, "onClick", "disabled", "loading"], ["role", "alert", 1, "alert", 3, "ngClass"], [1, "me-2"], [3, "ngSubmit", "formGroup"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "consultationType", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629", 1, "form-control", 3, "readonly"], ["class", "form-group mb-3", 4, "ngIf"], [1, "text-danger"], ["formControlName", "result", "rows", "5", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629", 1, "form-control"], ["type", "file", "accept", "image/*,.pdf", 1, "form-control", 3, "change", "disabled"], ["class", "preview-container mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "styleClass", "p-button-secondary", 3, "onClick", "disabled"], ["label", "\u062D\u0641\u0638", "icon", "pi pi-check", "type", "submit", 3, "disabled"], ["type", "text", "formControlName", "referralReason", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", 1, "form-control"], [1, "pi", "pi-spin", "pi-spinner"], [1, "preview-container", "mb-3"], ["alt", "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642", "class", "img-fluid rounded", "style", "max-height: 200px;", 3, "src", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["alt", "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642", 1, "img-fluid", "rounded", 2, "max-height", "200px", 3, "src"], [1, "alert", "alert-info"], [1, "pi", "pi-file-pdf"], ["type", "text", "formControlName", "type", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644", 1, "form-control", 3, "readonly"], ["formControlName", "result", "rows", "5", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "\u0645\u0643\u062A\u0645\u0644"], ["value", "\u0645\u0624\u062C\u0644"], ["value", "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631"]], template: function Supervisor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "app-search-applicant", 6);
      \u0275\u0275listener("applicantDetailsSelected", function Supervisor_Template_app_search_applicant_applicantDetailsSelected_3_listener($event) {
        return ctx.onApplicantDetailsSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, Supervisor_div_4_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, Supervisor_div_5_Template, 4, 0, "div", 8)(6, Supervisor_div_6_Template, 118, 29, "div", 9);
      \u0275\u0275elementStart(7, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Supervisor_Template_p_dialog_visibleChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showConsultationModal, $event) || (ctx.showConsultationModal = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function Supervisor_Template_p_dialog_onHide_7_listener() {
        return ctx.closeConsultationModal();
      });
      \u0275\u0275template(8, Supervisor_form_8_Template, 24, 8, "form", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Supervisor_Template_p_dialog_visibleChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showInvestigationModal, $event) || (ctx.showInvestigationModal = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function Supervisor_Template_p_dialog_onHide_9_listener() {
        return ctx.closeInvestigationModal();
      });
      \u0275\u0275template(10, Supervisor_form_10_Template, 38, 7, "form", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("hideApplicantDetails", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.applicant && !ctx.hasAllExams());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.applicant && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.showConsultationModal);
      \u0275\u0275property("modal", true)("dismissableMask", false)("closeOnEscape", true)("closable", true)("draggable", false)("resizable", false)("header", ((ctx.selectedConsultation == null ? null : ctx.selectedConsultation.consultationID) ?? 0) > 0 ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629" : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.consultationForm);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.showInvestigationModal);
      \u0275\u0275property("modal", true)("dismissableMask", false)("closeOnEscape", true)("closable", true)("draggable", false)("resizable", false)("header", ((ctx.selectedInvestigation == null ? null : ctx.selectedInvestigation.investigationID) ?? 0) > 0 ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644" : "\u0625\u0636\u0627\u0641\u0629 \u062A\u062D\u0644\u064A\u0644 \u062C\u062F\u064A\u062F");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.investigationForm);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    NgForm,
    NgSelectModule,
    NgSelectComponent,
    CardModule,
    Card,
    PrimeTemplate,
    TagModule,
    Tag,
    ButtonModule,
    Button,
    DividerModule,
    Divider,
    DialogModule,
    Dialog,
    InputTextModule,
    SearchApplicantComponent,
    GregorianDatePipe
  ], styles: ['\n\n.supervisor-page[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  background-color: var(--neutral-light);\n  min-height: 100vh;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card {\n  background: white !important;\n  border-radius: 12px !important;\n  margin: 0 !important;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;\n  border: 1px solid rgba(5, 66, 57, 0.08) !important;\n  overflow: hidden !important;\n  position: relative !important;\n  display: block !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  padding: 24px !important;\n  position: relative !important;\n  overflow: hidden !important;\n  display: block !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content {\n  display: flex !important;\n  align-items: center !important;\n  gap: 20px !important;\n  position: relative !important;\n  z-index: 1 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-icon-wrapper {\n  width: 72px !important;\n  height: 72px !important;\n  background: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  backdrop-filter: blur(10px) !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border: 3px solid #b9a779 !important;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25) !important;\n  flex-shrink: 0 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-icon-wrapper i {\n  font-size: 2.25rem !important;\n  color: #b9a779 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-text {\n  flex: 1 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-title {\n  margin: 0 0 8px 0 !important;\n  font-size: 1.75rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-subtitle {\n  margin: 0 !important;\n  font-size: 1rem !important;\n  color: rgba(255, 255, 255, 0.95) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 6px !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-body {\n  padding: 24px !important;\n  background: white !important;\n  display: block !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section {\n  margin-bottom: 32px !important;\n  display: block !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .section-header {\n  display: flex !important;\n  align-items: center !important;\n  gap: 12px !important;\n  margin-bottom: 20px !important;\n  padding-bottom: 12px !important;\n  border-bottom: 3px solid #e0e0e0 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .section-icon {\n  width: 42px !important;\n  height: 42px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%) !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .section-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .section-title {\n  margin: 0 !important;\n  font-size: 1.25rem !important;\n  font-weight: 700 !important;\n  color: #054239 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-list {\n  display: grid !important;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;\n  gap: 16px !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: 12px !important;\n  padding: 16px !important;\n  background: white !important;\n  border-radius: 8px !important;\n  border: 2px solid rgba(5, 66, 57, 0.08) !important;\n  border-right: 4px solid #e0e0e0 !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon {\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%) !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-content {\n  flex: 1 !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 4px !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-label {\n  font-size: 0.875rem !important;\n  font-weight: 700 !important;\n  color: #666 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-value {\n  display: flex !important;\n  align-items: center !important;\n  min-height: 1.75rem !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .value-text {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: #054239 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .value-text-featured {\n  font-size: 1.2rem !important;\n  font-weight: 700 !important;\n  color: #054239 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-featured {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.08) 0%,\n      rgba(66, 129, 119, 0.03) 100%) !important;\n  border-right-color: #428177 !important;\n  border-right-width: 5px !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured {\n  width: 48px !important;\n  height: 48px !important;\n  min-width: 48px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured i {\n  font-size: 1.3rem !important;\n  color: white !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  font-family: "PrimeIcons" !important;\n  line-height: 1 !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured i.pi-calendar-check {\n  font-size: 1.3rem !important;\n  color: white !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured i.pi-calendar-check::before {\n  content: "\\e92a" !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  font-family: "PrimeIcons" !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .status-section-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #b9a779 0%,\n      #8b7a5a 100%) !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .status-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #b9a779 0%,\n      #8b7a5a 100%) !important;\n}\n  .supervisor-page .p-card .p-card-body .final-decision-card .result-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  width: 100%;\n  background: white;\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem 1.25rem;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  font-family: var(--font-family-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 0.875rem 2rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  transition: all var(--transition-fast);\n  white-space: nowrap;\n}\n.search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n  .p-card {\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  margin-bottom: var(--spacing-xl);\n  overflow: hidden;\n  background: white;\n  transition: all var(--transition-normal);\n}\n  .p-card:hover {\n  box-shadow: var(--shadow-xl);\n  transform: translateY(-2px);\n}\n  .p-card .p-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border: none;\n  border-bottom: 3px solid var(--accent-gold);\n}\n  .p-card .p-card-body {\n  padding: var(--spacing-2xl);\n}\n.card-header-custom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.card-header-custom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.card-header-custom[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.card-header-custom[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.card-header-custom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.card-header-custom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.card-header-custom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.card-header-custom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.card-header-custom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.card-header-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--accent-gold);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.clinic-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.clinic-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.clinic-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.clinic-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.clinic-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.clinic-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.clinic-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.clinic-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.clinic-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.clinic-header[_ngcontent-%COMP%]   .clinic-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--accent-gold);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n  .p-card-header h1, \n  .p-card-header h2, \n  .p-card-header h3, \n  .p-card-header h4, \n  .p-card-header h5, \n  .p-card-header h6, \n  .p-card-header span, \n  .p-card-header p, \n  .p-card-header div {\n  color: white !important;\n}\n  .p-card-header .card-header-custom h1, \n  .p-card-header .card-header-custom h2, \n  .p-card-header .card-header-custom h3, \n  .p-card-header .card-header-custom h4, \n  .p-card-header .card-header-custom h5, \n  .p-card-header .card-header-custom h6, \n  .p-card-header .card-header-custom span, \n  .p-card-header .card-header-custom p, \n  .p-card-header .clinic-header h1, \n  .p-card-header .clinic-header h2, \n  .p-card-header .clinic-header h3, \n  .p-card-header .clinic-header h4, \n  .p-card-header .clinic-header h5, \n  .p-card-header .clinic-header h6, \n  .p-card-header .clinic-header span, \n  .p-card-header .clinic-header p {\n  color: white !important;\n}\n.personal-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--spacing-xl);\n}\n.personal-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-lg);\n  background: var(--neutral-light);\n  border-radius: var(--radius-md);\n  border-right: 3px solid var(--primary-medium);\n  transition: all var(--transition-fast);\n}\n.personal-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  background: rgba(66, 129, 119, 0.05);\n  transform: translateX(-3px);\n}\n.personal-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--neutral-medium);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.personal-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-medium);\n  font-size: 1rem;\n}\n.personal-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--neutral-dark);\n  font-weight: 700;\n  margin-top: var(--spacing-xs);\n}\n.clinic-content[_ngcontent-%COMP%]   .section-block[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-2xl);\n}\n.clinic-content[_ngcontent-%COMP%]   .section-block[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.clinic-content[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-lg);\n  padding-bottom: var(--spacing-md);\n  border-bottom: 3px solid var(--primary-medium);\n}\n.clinic-content[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 1.5rem;\n  background: rgba(185, 167, 121, 0.1);\n  padding: var(--spacing-sm);\n  border-radius: var(--radius-md);\n}\n.exam-details[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(237, 235, 224, 0.5) 0%,\n      rgb(255, 255, 255) 100%);\n  padding: var(--spacing-xl);\n  border-radius: var(--radius-lg);\n  border-right: 5px solid var(--primary-medium);\n  box-shadow: var(--shadow-sm);\n}\n.exam-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n}\n.exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: white;\n  border-radius: var(--radius-md);\n  border-right: 3px solid transparent;\n  transition: all var(--transition-fast);\n}\n.exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]:hover {\n  background: var(--neutral-light);\n  border-right-color: var(--primary-medium);\n  transform: translateX(-3px);\n}\n.exam-data[_ngcontent-%COMP%]   .data-row.result-row[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.05) 0%,\n      rgba(66, 129, 119, 0.05) 100%);\n  border-right-color: var(--primary-medium);\n  padding: var(--spacing-lg);\n  margin-top: var(--spacing-md);\n}\n.exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]   .data-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-dark);\n  min-width: 180px;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]   .data-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 1.1rem;\n  width: 24px;\n  text-align: center;\n}\n.exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]   .data-value[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  flex: 1;\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  line-height: 1.6;\n}\n.exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]   .reason-text[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n  font-weight: 600;\n  padding: var(--spacing-sm) var(--spacing-md);\n  background: rgba(107, 31, 42, 0.05);\n  border-radius: var(--radius-sm);\n  border-right: 2px solid var(--status-danger);\n}\n.consultations-list[_ngcontent-%COMP%], \n.investigations-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: var(--spacing-lg);\n}\n.consultation-card[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 2px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  transition: all var(--transition-normal);\n  box-shadow: var(--shadow-sm);\n}\n.consultation-card[_ngcontent-%COMP%]:hover, \n.investigation-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n  border-color: var(--primary-medium);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-main[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-main[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-main[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-main[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n  flex: 1;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-header[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-header[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-header[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-header[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-header[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-header[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-header[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-lg);\n  flex: 1;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-medium);\n  font-size: 1.25rem;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-type[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 700;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-id-badge[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-id-badge[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-id-badge[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-id-badge[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-id-badge[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-id-badge[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-id-badge[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-id-badge[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  padding: 0.25rem 0.5rem;\n  font-weight: 600;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 0.9rem;\n  min-width: 16px;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .consultation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .referral-reason[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-info[_ngcontent-%COMP%]   .investigation-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .investigation-reason[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 500;\n  line-height: 1.5;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-actions[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-actions[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-actions[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-actions[_ngcontent-%COMP%]   .btn-attachment[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-actions[_ngcontent-%COMP%]   .btn-attachment[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-actions[_ngcontent-%COMP%]   .btn-attachment[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-actions[_ngcontent-%COMP%]   .btn-attachment[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.consultation-card[_ngcontent-%COMP%]   .no-attachment[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .no-attachment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n  padding: var(--spacing-sm);\n}\n.consultation-card[_ngcontent-%COMP%]   .no-attachment[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .no-attachment[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neutral-medium);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.03) 0%,\n      rgba(66, 129, 119, 0.03) 100%);\n  border-top: 2px solid var(--primary-medium);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 1.1rem;\n}\n.consultation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%], \n.consultation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .consultation-result[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%], \n.investigation-card[_ngcontent-%COMP%]   .investigation-result[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  font-size: var(--font-size-base);\n  line-height: 1.7;\n  padding: var(--spacing-md);\n  background: white;\n  border-radius: var(--radius-sm);\n  border-right: 3px solid var(--primary-medium);\n}\n.btn-attachment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border: none;\n  border-radius: var(--radius-md);\n  font-weight: 600;\n  font-size: var(--font-size-sm);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  white-space: nowrap;\n}\n.btn-attachment[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.btn-attachment[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-attachment[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.no-data-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-2xl);\n  background: var(--neutral-light);\n  border-radius: var(--radius-lg);\n  color: var(--neutral-medium);\n  text-align: center;\n  border: 2px dashed rgba(0, 0, 0, 0.1);\n}\n.no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--accent-gold);\n}\n.no-data-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n}\n  .p-tag {\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n}\n  .p-tag.file-badge {\n  font-size: var(--font-size-base);\n  padding: 0.625rem 1.25rem;\n}\n  .p-tag.exam-status-badge {\n  font-size: var(--font-size-base);\n  padding: 0.625rem 1.25rem;\n}\n  .p-tag.count-badge {\n  font-size: var(--font-size-sm);\n  padding: 0.375rem 0.875rem;\n}\n  .p-tag.status-badge {\n  font-size: var(--font-size-sm);\n  padding: 0.375rem 0.875rem;\n}\n  .p-button {\n  font-family: var(--font-family-primary) !important;\n  font-weight: 600 !important;\n  border-radius: var(--radius-md) !important;\n  padding: 0.75rem 1.5rem !important;\n  transition: all var(--transition-fast) !important;\n  border: 2px solid transparent !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: var(--spacing-xs) !important;\n}\n  .p-button .p-button-icon {\n  font-size: 1rem !important;\n}\n  .p-button.p-button-sm {\n  padding: 0.5rem 1rem !important;\n  font-size: var(--font-size-sm) !important;\n}\n  .p-button.p-button-sm .p-button-icon {\n  font-size: 0.875rem !important;\n}\n  .p-button.p-button-outlined {\n  border: 2px solid var(--primary-medium) !important;\n  color: var(--primary-dark) !important;\n  background: transparent !important;\n}\n  .p-button.p-button-outlined:hover:not(:disabled) {\n  background: var(--primary-medium) !important;\n  border-color: var(--primary-medium) !important;\n  color: white !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n  .p-button.p-button-outlined:active:not(:disabled) {\n  transform: translateY(0);\n}\n  .p-button.p-button-secondary {\n  background: var(--neutral-medium) !important;\n  border-color: var(--neutral-medium) !important;\n  color: white !important;\n}\n  .p-button.p-button-secondary:hover:not(:disabled) {\n  background: var(--neutral-dark) !important;\n  border-color: var(--neutral-dark) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n  .p-button:not(.p-button-outlined):not(.p-button-secondary) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border: none !important;\n}\n  .p-button:not(.p-button-outlined):not(.p-button-secondary):hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n  .p-button:disabled {\n  opacity: 0.5 !important;\n  cursor: not-allowed !important;\n  transform: none !important;\n}\n  .p-divider {\n  margin: var(--spacing-2xl) 0;\n}\n  .p-divider .p-divider-content {\n  background: var(--neutral-light);\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 1.1rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  padding: 0.875rem 1.25rem;\n  font-family: var(--font-family-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f3f4f6;\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  border-radius: var(--radius-lg);\n  border-right: 4px solid;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1) 0%,\n      rgba(5, 66, 57, 0.05) 100%);\n  border-color: #10b981;\n  color: #065f46;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 38, 38, 0.1) 0%,\n      rgba(107, 31, 42, 0.05) 100%);\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 202, 240, 0.1) 0%,\n      rgba(5, 66, 57, 0.05) 100%);\n  border-color: #0dcaf0;\n  color: #055160;\n}\n.refractions-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-sm);\n  align-items: center;\n}\n.refractions-display[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  padding: 0.5rem 0.75rem;\n  font-weight: 600;\n  border-radius: var(--radius-md);\n  white-space: nowrap;\n}\n.refractions-display[_ngcontent-%COMP%]   .badge.bg-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0dcaf0 0%,\n      #0aa2c0 100%) !important;\n  color: white !important;\n}\n.refractions-display[_ngcontent-%COMP%]   .badge.bg-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c757d 0%,\n      #5a6268 100%) !important;\n  color: white !important;\n}\n@media (max-width: 992px) {\n  .consultations-list[_ngcontent-%COMP%], \n   .investigations-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .supervisor-page[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .search-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n    padding: var(--spacing-md);\n  }\n  .search-wrapper[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .personal-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card-header-custom[_ngcontent-%COMP%], \n   .clinic-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-sm);\n  }\n  .exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n  }\n  .exam-data[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]   .data-label[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .consultation-main[_ngcontent-%COMP%], \n   .investigation-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .consultation-actions[_ngcontent-%COMP%], \n   .investigation-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .consultation-actions[_ngcontent-%COMP%]   .btn-attachment[_ngcontent-%COMP%], \n   .investigation-actions[_ngcontent-%COMP%]   .btn-attachment[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n    .p-card .p-card-body {\n    padding: var(--spacing-lg);\n  }\n    .p-card .p-card-header {\n    padding: var(--spacing-lg);\n  }\n}\n  .p-dialog {\n}\n  .p-dialog .p-dialog-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n}\n  .p-dialog .p-dialog-header .p-dialog-title {\n  color: white;\n  font-weight: 700;\n  font-size: var(--font-size-xl);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon {\n  color: white;\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n  .p-dialog .p-dialog-content {\n  padding: var(--spacing-2xl);\n  background: white;\n}\n  .p-dialog .form-label {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n  .p-dialog .form-label i {\n  color: var(--primary-medium);\n  font-size: 1.1rem;\n}\n  .p-dialog .form-control {\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  padding: 0.75rem 1rem;\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n}\n  .p-dialog .form-control:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n  .p-dialog .form-control[readonly] {\n  background-color: var(--neutral-light);\n  cursor: not-allowed;\n}\n  .p-dialog textarea.form-control {\n  resize: vertical;\n  min-height: 120px;\n}\n  .p-dialog .preview-container {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--neutral-light);\n  border-radius: var(--radius-md);\n  border: 2px dashed var(--primary-medium);\n}\n  .p-dialog .preview-container img {\n  max-width: 100%;\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-sm);\n}\n  .p-dialog .text-danger {\n  color: var(--danger-color, #dc3545);\n}\n  .p-dialog .text-muted {\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n  .p-dialog .text-muted i {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n  .p-dialog .d-flex.justify-content-end {\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 2px solid var(--neutral-light);\n}\n  .p-dialog .d-flex.justify-content-end .p-button {\n  min-width: 120px;\n}\n  .p-dialog .d-flex.justify-content-end .p-button:first-child {\n  margin-left: var(--spacing-md);\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card, \n  .p-dialog   .p-card-body .final-decision-card, \n  .p-dialog .final-decision-card {\n  background: white !important;\n  border-radius: var(--radius-xl) !important;\n  margin-bottom: var(--spacing-2xl) !important;\n  box-shadow: var(--shadow-lg) !important;\n  border: 1px solid rgba(5, 66, 57, 0.08) !important;\n  overflow: hidden !important;\n  position: relative !important;\n  transition: all var(--transition-normal) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card:hover, \n  .p-dialog   .p-card-body .final-decision-card:hover, \n  .p-dialog .final-decision-card:hover {\n  box-shadow: var(--shadow-xl) !important;\n  transform: translateY(-2px) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header, \n  .p-dialog .final-decision-card .decision-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  padding: var(--spacing-2xl) var(--spacing-2xl) !important;\n  position: relative !important;\n  overflow: hidden !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header::before, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header::before, \n  .p-dialog .final-decision-card .decision-card-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 250px;\n  height: 250px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(185, 167, 121, 0.15) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  transform: translate(25%, -25%);\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header::after, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header::after, \n  .p-dialog .final-decision-card .decision-card-header::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--accent-gold) 50%,\n      transparent 100%);\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content, \n  .p-dialog .final-decision-card .decision-card-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n  position: relative;\n  z-index: 1;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper {\n  width: 72px !important;\n  height: 72px !important;\n  background: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  backdrop-filter: blur(10px) !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border: 3px solid var(--accent-gold) !important;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25) !important;\n  flex-shrink: 0 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper i, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper i, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper i {\n  font-size: 2.25rem !important;\n  color: var(--accent-gold) !important;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-text, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-text {\n  flex: 1;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title {\n  margin: 0 0 var(--spacing-sm) 0 !important;\n  font-size: 1.75rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: var(--spacing-sm) !important;\n  line-height: 1.3 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title .header-title-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title .header-title-icon, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title .header-title-icon {\n  font-size: 1.4rem !important;\n  color: var(--accent-gold) !important;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle {\n  margin: 0 !important;\n  font-size: 1rem !important;\n  color: rgba(255, 255, 255, 0.95) !important;\n  font-weight: 400 !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: var(--spacing-xs) !important;\n  line-height: 1.5 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle .header-subtitle-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle .header-subtitle-icon, \n  .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle .header-subtitle-icon {\n  font-size: 0.9rem !important;\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-body, \n  .p-dialog   .p-card-body .final-decision-card .decision-card-body, \n  .p-dialog .final-decision-card .decision-card-body {\n  padding: var(--spacing-2xl) !important;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(237, 235, 224, 0.02) 0%,\n      white 100%) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section, \n  .p-dialog .final-decision-card .decision-info-section {\n  margin-bottom: var(--spacing-2xl);\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section:last-child, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section:last-child, \n  .p-dialog .final-decision-card .decision-info-section:last-child {\n  margin-bottom: 0;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .section-header, \n  .p-dialog .final-decision-card .decision-info-section .section-header {\n  display: flex !important;\n  align-items: center !important;\n  gap: var(--spacing-md) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  padding-bottom: var(--spacing-md) !important;\n  border-bottom: 3px solid var(--primary-light) !important;\n  position: relative !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header::after, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .section-header::after, \n  .p-dialog .final-decision-card .decision-info-section .section-header::after {\n  content: "" !important;\n  position: absolute !important;\n  bottom: -3px !important;\n  right: 0 !important;\n  width: 80px !important;\n  height: 3px !important;\n  background: var(--primary-medium) !important;\n  border-radius: 0 0 0 3px !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .section-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .section-header .section-icon, \n  .p-dialog .final-decision-card .decision-info-section .section-header .section-icon {\n  width: 42px !important;\n  height: 42px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  border-radius: var(--radius-md) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  box-shadow: var(--shadow-sm) !important;\n  flex-shrink: 0 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .section-icon i, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .section-header .section-icon i, \n  .p-dialog .final-decision-card .decision-info-section .section-header .section-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .status-section-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .section-header .status-section-icon, \n  .p-dialog .final-decision-card .decision-info-section .section-header .status-section-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .section-title, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .section-header .section-title, \n  .p-dialog .final-decision-card .decision-info-section .section-header .section-title {\n  margin: 0 !important;\n  font-size: 1.25rem !important;\n  font-weight: 700 !important;\n  color: var(--primary-dark) !important;\n  letter-spacing: -0.3px !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-list, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-list, \n  .p-dialog .final-decision-card .decision-info-section .info-list {\n  display: grid !important;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;\n  gap: var(--spacing-lg) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-list.status-list, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-list.status-list, \n  .p-dialog .final-decision-card .decision-info-section .info-list.status-list {\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item, \n  .p-dialog .final-decision-card .decision-info-section .info-item {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: var(--spacing-md) !important;\n  padding: var(--spacing-lg) !important;\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  border: 2px solid rgba(5, 66, 57, 0.08) !important;\n  border-right: 4px solid var(--primary-light) !important;\n  transition: all var(--transition-fast) !important;\n  box-shadow: var(--shadow-sm) !important;\n  position: relative !important;\n  overflow: hidden !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item::before, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item::before, \n  .p-dialog .final-decision-card .decision-info-section .info-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--primary-light) 100%);\n  opacity: 0;\n  transition: opacity var(--transition-fast);\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item:hover, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item:hover, \n  .p-dialog .final-decision-card .decision-info-section .info-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.03) 0%,\n      white 100%) !important;\n  border-right-color: var(--primary-medium) !important;\n  border-color: rgba(66, 129, 119, 0.15) !important;\n  box-shadow: var(--shadow-md) !important;\n  transform: translateX(-3px) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item:hover::before, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item:hover::before, \n  .p-dialog .final-decision-card .decision-info-section .info-item:hover::before {\n  opacity: 1 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured, \n  .p-dialog .final-decision-card .decision-info-section .info-item.info-item-featured {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.08) 0%,\n      rgba(66, 129, 119, 0.03) 100%) !important;\n  border-right-color: var(--primary-medium) !important;\n  border-right-width: 5px !important;\n  border-color: rgba(66, 129, 119, 0.2) !important;\n  box-shadow: var(--shadow-md) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured:hover, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured:hover, \n  .p-dialog .final-decision-card .decision-info-section .info-item.info-item-featured:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.12) 0%,\n      rgba(66, 129, 119, 0.05) 100%) !important;\n  box-shadow: var(--shadow-lg) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported, \n  .p-dialog .final-decision-card .decision-info-section .info-item.info-item-exported {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08) 0%,\n      rgba(16, 185, 129, 0.03) 100%) !important;\n  border-right-color: #10b981 !important;\n  border-color: rgba(16, 185, 129, 0.15) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .info-item-icon-exported, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .info-item-icon-exported, \n  .p-dialog .final-decision-card .decision-info-section .info-item.info-item-exported .info-item-icon-exported {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .value-text-exported, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .value-text-exported, \n  .p-dialog .final-decision-card .decision-info-section .info-item.info-item-exported .value-text-exported {\n  color: #059669 !important;\n  font-weight: 700 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon {\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  border-radius: var(--radius-md) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n  box-shadow: var(--shadow-sm) !important;\n  transition: all var(--transition-fast) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon i, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon i, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  box-shadow: var(--shadow-md) !important;\n  width: 48px !important;\n  height: 48px !important;\n  min-width: 48px !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured i, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured i, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured i {\n  font-size: 1.3rem !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.status-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.status-icon, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.status-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.result-icon, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.result-icon, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.result-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content {\n  flex: 1 !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: var(--spacing-xs) !important;\n  min-width: 0 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-label, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-label, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-label {\n  font-size: 0.875rem !important;\n  font-weight: 700 !important;\n  color: var(--neutral-medium) !important;\n  margin-bottom: var(--spacing-xs) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n  line-height: 1.4 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value {\n  display: flex !important;\n  align-items: center !important;\n  min-height: 1.75rem !important;\n  flex-wrap: wrap !important;\n  gap: var(--spacing-xs) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: var(--primary-dark) !important;\n  line-height: 1.5 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured {\n  font-size: 1.2rem !important;\n  font-weight: 700 !important;\n  color: var(--primary-dark) !important;\n  letter-spacing: -0.2px !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-empty, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-empty, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-empty {\n  font-size: 0.9rem !important;\n  color: var(--neutral-medium) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value   .status-badge {\n  font-size: 0.95rem !important;\n  font-weight: 600 !important;\n  padding: 0.5rem 1.25rem !important;\n  border-radius: var(--radius-md) !important;\n  box-shadow: var(--shadow-sm) !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value   .result-badge {\n  font-size: 1.1rem !important;\n  font-weight: 700 !important;\n  padding: 0.625rem 1.5rem !important;\n  border-radius: var(--radius-md) !important;\n  box-shadow: var(--shadow-md) !important;\n  letter-spacing: 0.2px !important;\n}\n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog   .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog   .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value   .result-badge, \n  .p-dialog .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value   .status-badge, \n  .p-dialog .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value   .result-badge {\n  box-shadow: var(--shadow-md) !important;\n}\n  .p-dialog .decision-form {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  box-shadow: var(--shadow-md);\n  margin-top: var(--spacing-xl);\n}\n  .p-dialog .decision-form .form-section-header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-xl);\n  padding-bottom: var(--spacing-lg);\n  border-bottom: 2px solid var(--primary-light);\n}\n  .p-dialog .decision-form .form-section-header .section-icon-small {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n  .p-dialog .decision-form .form-section-header .section-icon-small i {\n  font-size: 1.1rem;\n  color: white;\n}\n  .p-dialog .decision-form .form-section-header .section-title-small {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n}\n  .p-dialog .decision-form .form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xl);\n}\n  .p-dialog .decision-form .form-field-group {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n  .p-dialog .decision-form .form-field-group .form-label-enhanced {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-xs);\n}\n  .p-dialog .decision-form .form-field-group .form-label-enhanced i {\n  font-size: 1.1rem;\n  color: var(--primary-medium);\n}\n  .p-dialog .decision-form .form-field-group .form-label-enhanced .required-star {\n  color: var(--status-danger);\n  margin-right: 0.25rem;\n}\n  .p-dialog .decision-form .form-field-group .form-control-enhanced {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  padding: 0.875rem 1.25rem;\n  font-size: var(--font-size-base);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background: white;\n}\n  .p-dialog .decision-form .form-field-group .form-control-enhanced:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n  .p-dialog .decision-form .form-field-group .form-control-enhanced:disabled {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n  .p-dialog .decision-form .form-field-group .form-control-enhanced::placeholder {\n  color: var(--neutral-medium);\n  opacity: 0.6;\n}\n  .p-dialog .decision-form .form-field-group textarea.form-control-enhanced {\n  resize: vertical;\n  min-height: 100px;\n  line-height: 1.6;\n}\n  .p-dialog .decision-form .form-field-group .enhanced-select   .ng-select .ng-select-container {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  min-height: 48px;\n  transition: all var(--transition-fast);\n}\n  .p-dialog .decision-form .form-field-group .enhanced-select   .ng-select .ng-select-container:hover {\n  border-color: var(--primary-light);\n}\n  .p-dialog .decision-form .form-field-group .enhanced-select   .ng-select .ng-select-container.ng-select-focused {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\n  .p-dialog .decision-form .form-field-group .enhanced-select   .ng-select.ng-select-disabled .ng-select-container {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n  .p-dialog .decision-form .form-field-group .form-hint {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-size: 0.85rem;\n  color: var(--accent-gold-dark);\n  font-weight: 500;\n  margin-top: var(--spacing-xs);\n}\n  .p-dialog .decision-form .form-field-group .form-hint i {\n  font-size: 0.9rem;\n  color: var(--accent-gold);\n}\n  .p-dialog .decision-form .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 2px solid rgba(5, 66, 57, 0.08);\n}\n  .p-dialog .decision-form .form-actions   .submit-decision-btn {\n  min-width: 200px;\n  padding: 0.875rem 2rem;\n  font-weight: 600;\n  font-size: 1rem;\n  box-shadow: var(--shadow-md);\n}\n  .p-dialog .decision-form .form-actions   .submit-decision-btn:hover:not(:disabled) {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n  .p-dialog .decision-locked-message {\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #fffbf0 100%);\n  border: 2px solid var(--accent-gold);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  margin-top: var(--spacing-xl);\n  display: flex;\n  gap: var(--spacing-xl);\n  align-items: flex-start;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  overflow: hidden;\n}\n  .p-dialog .decision-locked-message::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(185, 167, 121, 0.1) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  transform: translate(30%, -30%);\n}\n  .p-dialog .decision-locked-message::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-light) 100%);\n}\n  .p-dialog .decision-locked-message .locked-icon {\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  z-index: 1;\n}\n  .p-dialog .decision-locked-message .locked-icon i {\n  font-size: 2rem;\n  color: white;\n}\n  .p-dialog .decision-locked-message .locked-content {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n  .p-dialog .decision-locked-message .locked-content .locked-title {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  margin: 0 0 var(--spacing-md) 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--accent-gold-dark);\n}\n  .p-dialog .decision-locked-message .locked-content .locked-title i {\n  font-size: 1.3rem;\n  color: var(--accent-gold);\n}\n  .p-dialog .decision-locked-message .locked-content .locked-text {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.7;\n  color: var(--neutral-dark);\n  font-weight: 500;\n}\n@media (max-width: 1200px) {\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-list {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n    .p-dialog .final-decision-card .decision-card-header {\n    padding: var(--spacing-xl) var(--spacing-lg);\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content {\n    flex-direction: column;\n    text-align: center;\n    gap: var(--spacing-lg);\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper {\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper i {\n    font-size: 2rem;\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle {\n    font-size: 0.95rem;\n    justify-content: center;\n    text-align: center;\n  }\n    .p-dialog .final-decision-card .decision-card-body {\n    padding: var(--spacing-xl) var(--spacing-lg);\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section {\n    margin-bottom: var(--spacing-xl);\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header {\n    margin-bottom: var(--spacing-lg);\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header .section-icon {\n    width: 38px;\n    height: 38px;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header .section-icon i {\n    font-size: 1.1rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header .section-title {\n    font-size: 1.15rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-list {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item {\n    padding: var(--spacing-md);\n    flex-direction: row;\n    align-items: center;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon {\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon i {\n    font-size: 1.1rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon.info-item-icon-featured {\n    width: 44px;\n    height: 44px;\n    min-width: 44px;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon.info-item-icon-featured i {\n    font-size: 1.2rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-label {\n    font-size: 0.85rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text {\n    font-size: 0.95rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured {\n    font-size: 1.1rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value   .status-badge, \n     .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value   .result-badge {\n    font-size: 0.9rem;\n    padding: 0.45rem 1rem;\n  }\n}\n@media (max-width: 480px) {\n    .p-dialog .final-decision-card .decision-card-header {\n    padding: var(--spacing-lg);\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content {\n    gap: var(--spacing-md);\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper {\n    width: 56px;\n    height: 56px;\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper i {\n    font-size: 1.75rem;\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title {\n    font-size: 1.3rem;\n  }\n    .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle {\n    font-size: 0.875rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body {\n    padding: var(--spacing-lg);\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item {\n    padding: var(--spacing-sm) var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon {\n    width: 36px;\n    height: 36px;\n    min-width: 36px;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon i {\n    font-size: 1rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon.info-item-icon-featured {\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-label {\n    font-size: 0.8rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text {\n    font-size: 0.9rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured {\n    font-size: 1rem;\n  }\n    .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value   .status-badge, \n     .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value   .result-badge {\n    font-size: 0.85rem;\n    padding: 0.4rem 0.875rem;\n  }\n    .p-dialog .decision-form {\n    padding: var(--spacing-lg);\n  }\n    .p-dialog .decision-form .form-section-header .section-icon-small {\n    width: 32px;\n    height: 32px;\n  }\n    .p-dialog .decision-form .form-section-header .section-icon-small i {\n    font-size: 1rem;\n  }\n    .p-dialog .decision-form .form-section-header .section-title-small {\n    font-size: 1rem;\n  }\n    .p-dialog .decision-form .form-actions   .submit-decision-btn {\n    width: 100%;\n    min-width: auto;\n  }\n    .p-dialog .decision-locked-message {\n    padding: var(--spacing-lg);\n    flex-direction: column;\n    text-align: center;\n  }\n    .p-dialog .decision-locked-message .locked-icon {\n    margin: 0 auto;\n    width: 56px;\n    height: 56px;\n  }\n    .p-dialog .decision-locked-message .locked-icon i {\n    font-size: 1.75rem;\n  }\n    .p-dialog .decision-locked-message .locked-content .locked-title {\n    justify-content: center;\n    font-size: 1.1rem;\n  }\n    .p-dialog .decision-locked-message .locked-content .locked-text {\n    font-size: 0.9rem;\n  }\n}\n  .p-dialog .p-button {\n  font-family: var(--font-family-primary) !important;\n  font-weight: 600 !important;\n  border-radius: var(--radius-md) !important;\n  padding: 0.75rem 1.5rem !important;\n  transition: all var(--transition-fast) !important;\n}\n  .p-dialog .p-button.p-button-secondary {\n  background: var(--neutral-medium) !important;\n  border-color: var(--neutral-medium) !important;\n  color: white !important;\n}\n  .p-dialog .p-button.p-button-secondary:hover:not(:disabled) {\n  background: var(--neutral-dark) !important;\n  border-color: var(--neutral-dark) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n  .p-dialog .p-button:not(.p-button-secondary) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border: none !important;\n}\n  .p-dialog .p-button:not(.p-button-secondary):hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n  .p-dialog .p-button:disabled {\n  opacity: 0.5 !important;\n  cursor: not-allowed !important;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-lg);\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.section-title[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.section-title[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.decision-form[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  box-shadow: var(--shadow-md);\n  margin-top: var(--spacing-xl);\n}\n.decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-xl);\n  padding-bottom: var(--spacing-lg);\n  border-bottom: 2px solid var(--primary-light);\n}\n.decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%]   .section-icon-small[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n.decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%]   .section-icon-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: white;\n}\n.decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%]   .section-title-small[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n}\n.decision-form[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xl);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-xs);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--primary-medium);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%]   .required-star[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n  margin-right: 0.25rem;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%] {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  padding: 0.875rem 1.25rem;\n  font-size: var(--font-size-base);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background: white;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%]:disabled {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%]::placeholder {\n  color: var(--neutral-medium);\n  opacity: 0.6;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   textarea.form-control-enhanced[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  line-height: 1.6;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  min-height: 48px;\n  transition: all var(--transition-fast);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%]     .ng-select .ng-select-container:hover {\n  border-color: var(--primary-light);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%]     .ng-select .ng-select-container.ng-select-focused {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%]     .ng-select.ng-select-disabled .ng-select-container {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-size: 0.85rem;\n  color: var(--accent-gold-dark);\n  font-weight: 500;\n  margin-top: var(--spacing-xs);\n}\n.decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--accent-gold);\n}\n.decision-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 2px solid rgba(5, 66, 57, 0.08);\n}\n.decision-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     .submit-decision-btn {\n  min-width: 200px;\n  padding: 0.875rem 2rem;\n  font-weight: 600;\n  font-size: 1rem;\n  box-shadow: var(--shadow-md);\n}\n.decision-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     .submit-decision-btn:hover:not(:disabled) {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n.decision-form[_ngcontent-%COMP%]   .response-message[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n  padding-top: var(--spacing-lg);\n  border-top: 1px solid rgba(5, 66, 57, 0.08);\n}\n.decision-form[_ngcontent-%COMP%]   .response-message[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-weight: 500;\n  box-shadow: var(--shadow-sm);\n}\n.decision-form[_ngcontent-%COMP%]   .response-message[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.1) 0%,\n      rgba(66, 129, 119, 0.1) 100%);\n  border: 2px solid var(--primary-medium);\n  color: var(--primary-dark);\n}\n.decision-form[_ngcontent-%COMP%]   .response-message[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: 1.2rem;\n}\n.decision-form[_ngcontent-%COMP%]   .response-message[_ngcontent-%COMP%]   .alert.alert-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(107, 31, 42, 0.1) 0%,\n      rgba(107, 31, 42, 0.05) 100%);\n  border: 2px solid var(--status-danger);\n  color: var(--status-danger);\n}\n.decision-form[_ngcontent-%COMP%]   .response-message[_ngcontent-%COMP%]   .alert.alert-danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n  font-size: 1.2rem;\n}\n.decision-locked-message[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #fffbf0 100%);\n  border: 2px solid var(--accent-gold);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  margin-top: var(--spacing-xl);\n  display: flex;\n  gap: var(--spacing-xl);\n  align-items: flex-start;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  overflow: hidden;\n}\n.decision-locked-message[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(185, 167, 121, 0.1) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  transform: translate(30%, -30%);\n}\n.decision-locked-message[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-light) 100%);\n}\n.decision-locked-message[_ngcontent-%COMP%]   .locked-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  z-index: 1;\n}\n.decision-locked-message[_ngcontent-%COMP%]   .locked-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.decision-locked-message[_ngcontent-%COMP%]   .locked-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.decision-locked-message[_ngcontent-%COMP%]   .locked-content[_ngcontent-%COMP%]   .locked-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  margin: 0 0 var(--spacing-md) 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--accent-gold-dark);\n}\n.decision-locked-message[_ngcontent-%COMP%]   .locked-content[_ngcontent-%COMP%]   .locked-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--accent-gold);\n}\n.decision-locked-message[_ngcontent-%COMP%]   .locked-content[_ngcontent-%COMP%]   .locked-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.7;\n  color: var(--neutral-dark);\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .decision-form[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%]   .section-icon-small[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%]   .section-icon-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .decision-form[_ngcontent-%COMP%]   .form-section-header[_ngcontent-%COMP%]   .section-title-small[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .decision-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     .submit-decision-btn {\n    width: 100%;\n    min-width: auto;\n  }\n  .decision-locked-message[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n    flex-direction: column;\n    text-align: center;\n  }\n  .decision-locked-message[_ngcontent-%COMP%]   .locked-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 56px;\n    height: 56px;\n  }\n  .decision-locked-message[_ngcontent-%COMP%]   .locked-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .decision-locked-message[_ngcontent-%COMP%]   .locked-content[_ngcontent-%COMP%]   .locked-title[_ngcontent-%COMP%] {\n    justify-content: center;\n    font-size: 1.1rem;\n  }\n  .decision-locked-message[_ngcontent-%COMP%]   .locked-content[_ngcontent-%COMP%]   .locked-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .decision-form[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .decision-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=supervisor.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Supervisor, [{
    type: Component,
    args: [{ selector: "app-supervisor", imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgSelectModule,
      CardModule,
      TagModule,
      ButtonModule,
      DividerModule,
      DialogModule,
      InputTextModule,
      SearchApplicantComponent,
      GregorianDatePipe
    ], template: `<div class="supervisor-page container-fluid">\r
  <!-- \u2705 Search Section - \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0643\u0648\u0646 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645 -->\r
  <div class="row justify-content-center mb-4">\r
    <div class="col-12">\r
      <app-search-applicant [hideApplicantDetails]="true"\r
        (applicantDetailsSelected)="onApplicantDetailsSelected($event)"></app-search-applicant>\r
      <div *ngIf="applicant && !hasAllExams()" class="alert alert-danger mt-3" role="alert">\r
        <i class="fas fa-exclamation-triangle me-2"></i>\r
        \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading Spinner -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Applicant Data -->\r
  <div *ngIf="applicant && !loading" class="row g-4">\r
    <!-- Personal Information Card -->\r
    <div class="col-12">\r
      <p-card>\r
        <ng-template pTemplate="header">\r
          <div class="card-header-custom">\r
            <div class="d-flex align-items-center gap-2">\r
              <i class="pi pi-user"></i>\r
              <h5 class="mb-0">\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0637\u0628\u064A\u0629</h5>\r
            </div>\r
            <p-tag [value]="'\u0645\u0644\u0641: ' + applicant.fileNumber" severity="info" styleClass="file-badge"></p-tag>\r
          </div>\r
        </ng-template>\r
\r
        <div class="personal-info-grid">\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-id-card"></i>\r
              \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641\r
            </div>\r
            <div class="info-value">{{ applicant.fileNumber }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-user"></i>\r
              \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644\r
            </div>\r
            <div class="info-value">{{ applicant.fullName }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-user-edit"></i>\r
              \u0627\u0633\u0645 \u0627\u0644\u0623\u0645\r
            </div>\r
            <div class="info-value">{{ applicant.motherName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-calendar"></i>\r
              \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F\r
            </div>\r
            <div class="info-value">{{ applicant.dateOfBirth | gregorianDate:'yyyy/MM/dd' }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-heart"></i>\r
              \u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645\r
            </div>\r
            <div class="info-value">\r
              <span *ngIf="applicant.bloodType" class="badge bg-info text-white">{{ applicant.bloodType }}</span>\r
              <span *ngIf="!applicant.bloodType" class="text-muted">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-building"></i>\r
              \u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F\r
            </div>\r
            <div class="info-value">{{ applicant.recruitmentCenter || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-sort-numeric-up"></i>\r
              \u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631\r
            </div>\r
            <div class="info-value">\r
              <span *ngIf="applicant.queueNumber" class="badge bg-primary text-white">{{ applicant.queueNumber }}</span>\r
              <span *ngIf="!applicant.queueNumber" class="text-muted">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-calendar-plus"></i>\r
              \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629\r
            </div>\r
            <div class="info-value">{{ applicant.createdAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-heart"></i>\r
              \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629\r
            </div>\r
            <div class="info-value">{{ getMaritalStatusDescription(applicant.maritalStatusID) }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-briefcase"></i>\r
              \u0627\u0644\u0648\u0638\u064A\u0641\u0629\r
            </div>\r
            <div class="info-value">{{ applicant.job }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-arrows-v"></i>\r
              \u0627\u0644\u0637\u0648\u0644\r
            </div>\r
            <div class="info-value">{{ applicant.height }} \u0633\u0645</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-chart-line"></i>\r
              \u0627\u0644\u0648\u0632\u0646\r
            </div>\r
            <div class="info-value">{{ applicant.weight }} \u0643\u062C\u0645</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-calculator"></i>\r
              BMI\r
            </div>\r
            <div class="info-value">{{ applicant.bmi }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-heart"></i>\r
              \u0636\u063A\u0637 \u0627\u0644\u062F\u0645\r
            </div>\r
            <div class="info-value">{{ applicant.bloodPressure }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-pulse"></i>\r
              \u0627\u0644\u0646\u0628\u0636\r
            </div>\r
            <div class="info-value">{{ applicant.pulse }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">\r
              <i class="pi pi-info-circle"></i>\r
              \u0648\u0634\u0645\r
            </div>\r
            <div class="info-value">\r
              <p-tag [value]="applicant.tattoo ? '\u064A\u0648\u062C\u062F' : '\u0644\u0627 \u064A\u0648\u062C\u062F'"\r
                [severity]="applicant.tattoo ? 'warn' : 'success'"></p-tag>\r
            </div>\r
          </div>\r
          <div class="info-item col-12">\r
            <div class="info-label">\r
              <i class="pi pi-tag"></i>\r
              \u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629\r
            </div>\r
            <div class="info-value">{{ applicant.distinctiveMarks || '\u0644\u0627 \u062A\u0648\u062C\u062F' }}</div>\r
          </div>\r
        </div>\r
      </p-card>\r
    </div>\r
\r
    <!-- Clinics Cards -->\r
    <div class="col-12" *ngFor="let clinic of clinicsData">\r
      <p-card>\r
        <ng-template pTemplate="header">\r
          <div class="clinic-header">\r
            <div class="d-flex align-items-center gap-2">\r
              <i [class]="clinic.icon" class="clinic-icon"></i>\r
              <h5 class="mb-0">{{ clinic.name }}</h5>\r
            </div>\r
            <p-tag [value]="clinic.exam ? '\u062A\u0645 \u0627\u0644\u0641\u062D\u0635' : '\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0641\u062D\u0635'" [severity]="clinic.exam ? 'success' : 'danger'"\r
              styleClass="exam-status-badge"></p-tag>\r
          </div>\r
        </ng-template>\r
\r
        <div class="clinic-content">\r
          <!-- Exam Section -->\r
          <div class="section-block" *ngIf="clinic.exam">\r
            <div class="section-title">\r
              <i class="pi pi-file-edit"></i>\r
              <span>\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A</span>\r
            </div>\r
            <div class="exam-details">\r
              <ng-container [ngSwitch]="clinic.name">\r
                <!-- Eye Exam -->\r
                <div *ngSwitchCase="'\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0648\u0646'" class="exam-data">\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-eye"></i>\r
                      <span>\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 (\u064A\u0645\u064A\u0646)</span>\r
                    </div>\r
                    <div class="data-value">{{ getVisionRight(clinic.exam) }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-eye"></i>\r
                      <span>\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 (\u064A\u0633\u0627\u0631)</span>\r
                    </div>\r
                    <div class="data-value">{{ getVisionLeft(clinic.exam) }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-palette"></i>\r
                      <span>\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 (\u064A\u0645\u064A\u0646)</span>\r
                    </div>\r
                    <div class="data-value">{{ getColorTestRight(clinic.exam) }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-palette"></i>\r
                      <span>\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 (\u064A\u0633\u0627\u0631)</span>\r
                    </div>\r
                    <div class="data-value">{{ getColorTestLeft(clinic.exam) }}</div>\r
                  </div>\r
\r
                  <!-- \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 -->\r
                  <div class="data-row" *ngIf="getRightEyeRefractions(clinic.exam).length > 0">\r
                    <div class="data-label">\r
                      <i class="pi pi-angle-right"></i>\r
                      <span>\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A (\u064A\u0645\u064A\u0646)</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <div class="refractions-display d-flex flex-wrap gap-2">\r
                        <span *ngFor="let ref of getRightEyeRefractions(clinic.exam)" class="badge bg-info text-white">\r
                          {{ getRefractionTypeName(ref.refractionTypeID) }}: {{ ref.refractionValue }}\r
                        </span>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <!-- \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
                  <div class="data-row" *ngIf="getLeftEyeRefractions(clinic.exam).length > 0">\r
                    <div class="data-label">\r
                      <i class="pi pi-angle-left"></i>\r
                      <span>\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A (\u064A\u0633\u0627\u0631)</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <div class="refractions-display d-flex flex-wrap gap-2">\r
                        <span *ngFor="let ref of getLeftEyeRefractions(clinic.exam)"\r
                          class="badge bg-secondary text-white">\r
                          {{ getRefractionTypeName(ref.refractionTypeID) }}: {{ ref.refractionValue }}\r
                        </span>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <!-- \u0631\u0633\u0627\u0644\u0629 \u0625\u0630\u0627 \u0644\u0645 \u062A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A -->\r
                  <div class="data-row"\r
                    *ngIf="getRightEyeRefractions(clinic.exam).length === 0 && getLeftEyeRefractions(clinic.exam).length === 0">\r
                    <div class="data-label">\r
                      <i class="pi pi-info-circle"></i>\r
                      <span>\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A</span>\r
                    </div>\r
                    <div class="data-value text-muted">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0633\u062C\u0644\u0629</div>\r
                  </div>\r
\r
                  <div class="data-row" *ngIf="clinic.exam.otherDiseases">\r
                    <div class="data-label">\r
                      <i class="pi pi-exclamation-triangle"></i>\r
                      <span>\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.otherDiseases }}</div>\r
                  </div>\r
\r
                  <div class="data-row" *ngIf="clinic.exam.reason">\r
                    <div class="data-label">\r
                      <i class="pi pi-info-circle"></i>\r
                      <span>\u0627\u0644\u0633\u0628\u0628</span>\r
                    </div>\r
                    <div class="data-value reason-text">{{ clinic.exam.reason }}</div>\r
                  </div>\r
\r
                  <div class="data-row result-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-check-circle"></i>\r
                      <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <p-tag [value]="getResultDescription(clinic.exam.resultID)"\r
                        [severity]="getResultSeverity(clinic.exam.resultID)"></p-tag>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Internal Exam -->\r
                <div *ngSwitchCase="'\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u0629'" class="exam-data">\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-heart"></i>\r
                      <span>\u0627\u0644\u0642\u0644\u0628</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.heart || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-wind"></i>\r
                      <span>\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.respiratory || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-apple"></i>\r
                      <span>\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645\u064A</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.digestive || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-cog"></i>\r
                      <span>\u0627\u0644\u063A\u062F\u062F \u0627\u0644\u0635\u0645\u0627\u0621</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.endocrine || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-brain"></i>\r
                      <span>\u0627\u0644\u0623\u0639\u0635\u0627\u0628</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.neurology || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-tint"></i>\r
                      <span>\u0627\u0644\u062F\u0645</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.blood || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-link"></i>\r
                      <span>\u0627\u0644\u0645\u0641\u0627\u0635\u0644</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.joints || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-filter"></i>\r
                      <span>\u0627\u0644\u0643\u0644\u0649</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.kidney || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-circle"></i>\r
                      <span>\u0627\u0644\u062C\u0644\u062F</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.skin || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row result-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-check-circle"></i>\r
                      <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <p-tag [value]="getResultDescription(clinic.exam.resultID)"\r
                        [severity]="getResultSeverity(clinic.exam.resultID)"></p-tag>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Surgical Exam -->\r
                <div *ngSwitchCase="'\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062C\u0631\u0627\u062D\u0629'" class="exam-data">\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-briefcase"></i>\r
                      <span>\u0639\u0627\u0645</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.generalSurgery || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-filter"></i>\r
                      <span>\u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.urinarySurgery || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-heart"></i>\r
                      <span>\u0627\u0644\u0623\u0648\u0639\u064A\u0629 \u0627\u0644\u062F\u0645\u0648\u064A\u0629</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.vascularSurgery || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-wind"></i>\r
                      <span>\u0627\u0644\u0635\u062F\u0631</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.thoracicSurgery || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row result-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-check-circle"></i>\r
                      <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <p-tag [value]="getResultDescription(clinic.exam.resultID)"\r
                        [severity]="getResultSeverity(clinic.exam.resultID)"></p-tag>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Orthopedic Exam -->\r
                <div *ngSwitchCase="'\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629'" class="exam-data">\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-bone"></i>\r
                      <span>\u0639\u0636\u0644\u064A \u0647\u064A\u0643\u0644\u064A</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.musculoskeletal || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-cog"></i>\r
                      <span>\u062C\u0631\u0627\u062D\u0629 \u0639\u0635\u0628\u064A\u0629</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.neurologicalSurgery || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row result-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-check-circle"></i>\r
                      <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <p-tag [value]="getResultDescription(clinic.exam.resultID)"\r
                        [severity]="getResultSeverity(clinic.exam.resultID)"></p-tag>\r
                    </div>\r
                  </div>\r
                  <div class="data-row" *ngIf="clinic.exam.reason">\r
                    <div class="data-label">\r
                      <i class="pi pi-info-circle"></i>\r
                      <span>\u0627\u0644\u0633\u0628\u0628</span>\r
                    </div>\r
                    <div class="data-value reason-text">{{ clinic.exam.reason }}</div>\r
                  </div>\r
                </div>\r
\r
                <!-- Ear Exam -->\r
                <div *ngSwitchCase="'\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0630\u0646\u064A\u0629'" class="exam-data">\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-volume-up"></i>\r
                      <span>\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 (\u0627\u0644\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644\u064A)</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.rightTympanicMembrane || clinic.exam.rightEar || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'\r
                      }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-volume-down"></i>\r
                      <span>\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 (\u0627\u0644\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644\u064A)</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.leftTympanicMembrane || clinic.exam.leftEar || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
                    </div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-volume-up"></i>\r
                      <span>\u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u064A\u0645\u064A\u0646</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.rightHearing || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-volume-down"></i>\r
                      <span>\u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u064A\u0633\u0627\u0631</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.leftHearing || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-wind"></i>\r
                      <span>\u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.resonators || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-angle-right"></i>\r
                      <span>\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL (\u064A\u0645\u064A\u0646)</span>\r
                    </div>\r
                    <div class="data-value">{{ getEarExamField(clinic.exam, 'rightString') }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-angle-left"></i>\r
                      <span>\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR (\u064A\u0633\u0627\u0631)</span>\r
                    </div>\r
                    <div class="data-value">{{ getEarExamField(clinic.exam, 'leftString') }}</div>\r
                  </div>\r
                  <div class="data-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-comment"></i>\r
                      <span>\u0627\u0644\u0641\u0645</span>\r
                    </div>\r
                    <div class="data-value">{{ clinic.exam.mouth || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
                  </div>\r
                  <div class="data-row result-row">\r
                    <div class="data-label">\r
                      <i class="pi pi-check-circle"></i>\r
                      <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                    </div>\r
                    <div class="data-value">\r
                      <p-tag [value]="getResultDescription(clinic.exam.resultID)"\r
                        [severity]="getResultSeverity(clinic.exam.resultID)"></p-tag>\r
                    </div>\r
                  </div>\r
                  <div class="data-row" *ngIf="clinic.exam.reason">\r
                    <div class="data-label">\r
                      <i class="pi pi-info-circle"></i>\r
                      <span>\u0627\u0644\u0633\u0628\u0628</span>\r
                    </div>\r
                    <div class="data-value reason-text">{{ clinic.exam.reason }}</div>\r
                  </div>\r
                </div>\r
              </ng-container>\r
            </div>\r
          </div>\r
\r
          <div class="section-block" *ngIf="!clinic.exam">\r
            <div class="no-data-message">\r
              <i class="pi pi-info-circle"></i>\r
              <span>\u0644\u0645 \u064A\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A</span>\r
            </div>\r
          </div>\r
\r
          <p-divider></p-divider>\r
\r
          <!-- Consultations Section -->\r
          <div class="section-block">\r
            <div class="section-title">\r
              <div class="d-flex align-items-center gap-2">\r
                <i class="pi pi-comments"></i>\r
                <span>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629</span>\r
                <p-tag [value]="clinic.consultations.length + ' \u0627\u0633\u062A\u0634\u0627\u0631\u0629'" severity="info"\r
                  styleClass="ms-2 count-badge"></p-tag>\r
              </div>\r
              <p-button icon="pi pi-plus" label="\u0625\u0636\u0627\u0641\u0629 \u0627\u0633\u062A\u0634\u0627\u0631\u0629" styleClass="p-button-sm p-button-outlined"\r
                (click)="openAddConsultationModal(clinic.name, getSpecializationId(clinic.name))"\r
                [disabled]="!applicant"></p-button>\r
            </div>\r
            <div *ngIf="clinic.consultations.length > 0; else noConsultations" class="consultations-list">\r
              <div *ngFor="let consultation of clinic.consultations; trackBy: trackByConsultationId"\r
                class="consultation-card">\r
                <div class="consultation-main">\r
                  <div class="consultation-info">\r
                    <div class="consultation-header">\r
                      <div class="consultation-type">\r
                        <i class="pi pi-comment"></i>\r
                        <strong>{{ consultation.consultationType || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>\r
                      </div>\r
                      <p-tag [value]="'#' + consultation.consultationID" severity="info"\r
                        styleClass="consultation-id-badge"></p-tag>\r
                    </div>\r
                    <div class="consultation-meta">\r
                      <div class="meta-item" *ngIf="consultation.doctor">\r
                        <i class="pi pi-user-md"></i>\r
                        <span>{{ consultation.doctor.fullName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>\r
                      </div>\r
                      <div class="meta-item" *ngIf="consultation.referralReason">\r
                        <i class="pi pi-info-circle"></i>\r
                        <span class="referral-reason">{{ consultation.referralReason }}</span>\r
                      </div>\r
                      <div class="meta-item" *ngIf="!consultation.referralReason">\r
                        <i class="pi pi-info-circle"></i>\r
                        <span class="text-muted">\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u0628\u0628 \u0625\u062D\u0627\u0644\u0629</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="consultation-actions">\r
                    <p-button icon="pi pi-pencil" label="\u062A\u0639\u062F\u064A\u0644" styleClass="p-button-sm p-button-outlined"\r
                      (onClick)="openEditConsultationModal(consultation)" [disabled]="loading"></p-button>\r
                    <button *ngIf="consultation.attachment" class="btn-attachment"\r
                      (click)="openFile(consultation.attachment)" title="\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642">\r
                      <i class="pi pi-file"></i>\r
                      <span>\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642</span>\r
                    </button>\r
                    <div *ngIf="!consultation.attachment" class="no-attachment">\r
                      <span class="text-muted">\r
                        <i class="pi pi-times-circle"></i>\r
                        \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0631\u0641\u0642\r
                      </span>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="consultation-result" *ngIf="consultation.result">\r
                  <div class="result-header">\r
                    <i class="pi pi-check-circle"></i>\r
                    <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                  </div>\r
                  <div class="result-content">{{ consultation.result }}</div>\r
                </div>\r
              </div>\r
            </div>\r
            <ng-template #noConsultations>\r
              <div class="no-data-message">\r
                <i class="pi pi-info-circle"></i>\r
                <span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</span>\r
              </div>\r
            </ng-template>\r
          </div>\r
\r
          <p-divider></p-divider>\r
\r
          <!-- Investigations Section -->\r
          <div class="section-block">\r
            <div class="section-title">\r
              <div class="d-flex align-items-center gap-2">\r
                <i class="pi pi-file"></i>\r
                <span>\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629 \u0648\u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629</span>\r
                <p-tag [value]="clinic.investigations.length + ' \u062A\u062D\u0644\u064A\u0644'" severity="info"\r
                  styleClass="ms-2 count-badge"></p-tag>\r
              </div>\r
              <p-button icon="pi pi-plus" label="\u0625\u0636\u0627\u0641\u0629 \u062A\u062D\u0644\u064A\u0644" styleClass="p-button-sm p-button-outlined"\r
                (onClick)="openAddInvestigationModal(clinic.name, getSpecializationId(clinic.name))"\r
                [disabled]="!applicant"></p-button>\r
            </div>\r
            <div *ngIf="clinic.investigations.length > 0; else noInvestigations" class="investigations-list">\r
              <div *ngFor="let investigation of clinic.investigations; trackBy: trackByInvestigationId"\r
                class="investigation-card">\r
                <div class="investigation-main">\r
                  <div class="investigation-info">\r
                    <div class="investigation-header">\r
                      <div class="investigation-type">\r
                        <i class="pi pi-file"></i>\r
                        <strong>{{ investigation.type || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>\r
                      </div>\r
                      <p-tag [value]="'#' + investigation.investigationID" severity="info"\r
                        styleClass="investigation-id-badge"></p-tag>\r
                    </div>\r
                    <div class="investigation-meta">\r
                      <div class="meta-item">\r
                        <p-tag [value]="investigation.status || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'"\r
                          [severity]="getStatusSeverity(investigation.status)" styleClass="status-badge"></p-tag>\r
                      </div>\r
                      <div class="meta-item" *ngIf="investigation.doctor">\r
                        <i class="pi pi-user-md"></i>\r
                        <span>{{ investigation.doctor.fullName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>\r
                      </div>\r
                      <div class="meta-item" *ngIf="investigation.investigationReason">\r
                        <i class="pi pi-info-circle"></i>\r
                        <span class="investigation-reason">{{ investigation.investigationReason }}</span>\r
                      </div>\r
                      <div class="meta-item" *ngIf="!investigation.investigationReason">\r
                        <i class="pi pi-info-circle"></i>\r
                        <span class="text-muted">\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u0628\u0628</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="investigation-actions">\r
                    <p-button icon="pi pi-pencil" label="\u062A\u0639\u062F\u064A\u0644" styleClass="p-button-sm p-button-outlined"\r
                      (onClick)="openEditInvestigationModal(investigation)" [disabled]="loading"></p-button>\r
                    <button *ngIf="investigation.attachment" class="btn-attachment"\r
                      (click)="openFile(investigation.attachment)" title="\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642">\r
                      <i class="pi pi-file"></i>\r
                      <span>\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642</span>\r
                    </button>\r
                    <div *ngIf="!investigation.attachment" class="no-attachment">\r
                      <span class="text-muted">\r
                        <i class="pi pi-times-circle"></i>\r
                        \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0631\u0641\u0642\r
                      </span>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="investigation-result" *ngIf="investigation.result">\r
                  <div class="result-header">\r
                    <i class="pi pi-check-circle"></i>\r
                    <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span>\r
                  </div>\r
                  <div class="result-content">{{ investigation.result }}</div>\r
                </div>\r
              </div>\r
            </div>\r
            <ng-template #noInvestigations>\r
              <div class="no-data-message">\r
                <i class="pi pi-info-circle"></i>\r
                <span>\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644</span>\r
              </div>\r
            </ng-template>\r
          </div>\r
        </div>\r
      </p-card>\r
    </div>\r
\r
    <!-- Final Decision Card -->\r
    <div class="col-12">\r
      <p-card>\r
        <!-- <ng-template pTemplate="header">\r
          <div class="card-header-custom">\r
            <div class="d-flex align-items-center gap-2">\r
              <i class="pi pi-check-circle"></i>\r
              <h5 class="mb-0">\u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A</h5>\r
            </div>\r
          </div>\r
        </ng-template> -->\r
\r
        <!-- \u2705 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0627\u0644\u062D\u0627\u0644\u064A (\u0625\u0646 \u0648\u062C\u062F) -->\r
        @if (applicant && applicant.finalDecision) {\r
        @let finalDecision = applicant.finalDecision;\r
        <div class="final-decision-card">\r
          <!-- Header Section -->\r
          <div class="decision-card-header">\r
            <div class="header-content">\r
              <div class="header-icon-wrapper">\r
                <i class="pi pi-check-circle"></i>\r
              </div>\r
              <div class="header-text">\r
                <h4 class="header-title">\r
                  <i class="pi pi-file-check header-title-icon"></i>\r
                  \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\r
                </h4>\r
                <p class="header-subtitle">\r
                  <i class="pi pi-info-circle header-subtitle-icon"></i>\r
                  \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062A\u0641\u0635\u064A\u0644\u064A\u0629 \u0639\u0646 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062C\u0644\r
                </p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Content Section -->\r
          <div class="decision-card-body">\r
            <!-- \u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E Section -->\r
            <!-- <div class="decision-info-section dates-section">\r
                <div class="section-header">\r
                  <div class="section-icon">\r
                    <i class="pi pi-calendar"></i>\r
                  </div>\r
                  <h6 class="section-title">\u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0623\u0648\u0642\u0627\u062A</h6>\r
                </div>\r
                <div class="info-list">\r
                  <div class="info-item">\r
                    <div class="info-item-icon">\r
                      <i class="pi pi-calendar-plus"></i>\r
                    </div>\r
                    <div class="info-item-content">\r
                      <div class="info-item-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0631\u064A\u0633\u0628\u0634\u0646</div>\r
                      <div class="info-item-value">\r
                        @if (finalDecision.receptionAddedAt) {\r
                          <span class="value-text">{{ finalDecision.receptionAddedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
                        } @else {\r
                          <span class="value-empty">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
                        }\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <div class="info-item">\r
                    <div class="info-item-icon">\r
                      <i class="pi pi-user-plus"></i>\r
                    </div>\r
                    <div class="info-item-content">\r
                      <div class="info-item-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0641</div>\r
                      <div class="info-item-value">\r
                        @if (finalDecision.supervisorAddedAt) {\r
                          <span class="value-text">{{ finalDecision.supervisorAddedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
                        } @else {\r
                          <span class="value-empty">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
                        }\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <div class="info-item">\r
                    <div class="info-item-icon">\r
                      <i class="pi pi-pencil"></i>\r
                    </div>\r
                    <div class="info-item-content">\r
                      <div class="info-item-label">\u062A\u0627\u0631\u064A\u062E \u0622\u062E\u0631 \u062A\u0639\u062F\u064A\u0644 \u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0641</div>\r
                      <div class="info-item-value">\r
                        @if (finalDecision.supervisorLastModifiedAt) {\r
                          <span class="value-text">{{ finalDecision.supervisorLastModifiedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
                        } @else {\r
                          <span class="value-empty">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
                        }\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <div class="info-item info-item-featured">\r
                    <div class="info-item-icon info-item-icon-featured">\r
                      <i class="pi pi-calendar-check"></i>\r
                    </div>\r
                    <div class="info-item-content">\r
                      <div class="info-item-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u0631\u0627\u0631</div>\r
                      <div class="info-item-value">\r
                        @if (finalDecision.decisionDate) {\r
                          <span class="value-text value-text-featured">{{ finalDecision.decisionDate | gregorianDate:'yyyy/MM/dd' }}</span>\r
                        } @else {\r
                          <span class="value-empty">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
                        }\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  @if (finalDecision.isExportedToRecruitment && finalDecision.exportedAt) {\r
                    <div class="info-item info-item-exported">\r
                      <div class="info-item-icon info-item-icon-exported">\r
                        <i class="pi pi-upload"></i>\r
                      </div>\r
                      <div class="info-item-content">\r
                        <div class="info-item-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F</div>\r
                        <div class="info-item-value">\r
                          <span class="value-text value-text-exported">{{ finalDecision.exportedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  }\r
                </div>\r
              </div> -->\r
\r
            <!-- \u0627\u0644\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629 Section -->\r
            <div class="decision-info-section status-section">\r
              <div class="section-header">\r
                <div class="section-icon status-section-icon">\r
                  <i class="pi pi-check-circle"></i>\r
                </div>\r
                <h6 class="section-title">\u0627\u0644\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
              </div>\r
              <div class="info-list status-list">\r
                <div class="info-item status-item">\r
                  <div class="info-item-icon status-icon">\r
                    <i class="pi pi-file-export"></i>\r
                  </div>\r
                  <div class="info-item-content">\r
                    <div class="info-item-label">\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F</div>\r
                    <div class="info-item-value">\r
                      <p-tag\r
                        [value]="(finalDecision.isExportedToRecruitment ?? false) ? '\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631' : '\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631'"\r
                        [severity]="(finalDecision.isExportedToRecruitment ?? false) ? 'success' : 'warn'"\r
                        styleClass="status-badge">\r
                      </p-tag>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="info-item result-item">\r
                  <div class="info-item-icon result-icon">\r
                    <i class="pi pi-flag"></i>\r
                  </div>\r
                  <div class="info-item-content">\r
                    <div class="info-item-label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629</div>\r
                    <div class="info-item-value">\r
                      <p-tag [value]="finalDecision.result ? finalDecision.result.description : '-'"\r
                        [severity]="getResultSeverity(finalDecision.resultID)" styleClass="result-badge">\r
                      </p-tag>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        }\r
\r
        <!-- \u2705 \u0631\u0633\u0627\u0644\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0646\u0627\u0643 \u0642\u0631\u0627\u0631 \u0646\u0647\u0627\u0626\u064A \u0645\u0648\u062C\u0648\u062F -->\r
        @if (applicant && applicant.finalDecision) {\r
        <div class="decision-locked-message">\r
          <div class="locked-icon">\r
            <i class="pi pi-lock"></i>\r
          </div>\r
          <div class="locked-content">\r
            <h6 class="locked-title">\r
              <i class="pi pi-info-circle"></i>\r
              \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u0627\u064B\r
            </h6>\r
            <p class="locked-text">\r
              \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0645\u0633\u0628\u0642\u0627\u064B \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644\u0647 \u0623\u0648 \u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u062C\u062F\u064A\u062F.\r
              \u064A\u0645\u0643\u0646\u0643 \u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0641\u064A \u0642\u0633\u0645 "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A" \u0623\u0639\u0644\u0627\u0647.\r
            </p>\r
          </div>\r
        </div>\r
        } @else if (previousDecisionLocked) {\r
        <!-- \u2705 \u0631\u0633\u0627\u0644\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0646\u0627\u0643 \u0642\u0631\u0627\u0631 \u0646\u0647\u0627\u0626\u064A \u0645\u0648\u062C\u0648\u062F (\u0645\u0646 checkExistingDecision) -->\r
        <div class="decision-locked-message">\r
          <div class="locked-icon">\r
            <i class="pi pi-lock"></i>\r
          </div>\r
          <div class="locked-content">\r
            <h6 class="locked-title">\r
              <i class="pi pi-info-circle"></i>\r
              \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u0627\u064B\r
            </h6>\r
            <p class="locked-text">\r
              \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0645\u0633\u0628\u0642\u0627\u064B \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644\u0647 \u0623\u0648 \u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u062C\u062F\u064A\u062F.\r
              \u064A\u0645\u0643\u0646\u0643 \u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0641\u064A \u0642\u0633\u0645 "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A" \u0623\u0639\u0644\u0627\u0647.\r
            </p>\r
          </div>\r
        </div>\r
        } @else {\r
        <!-- \u2705 \u0646\u0645\u0648\u0630\u062C \u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u0646\u0647\u0627\u0626\u064A \u062C\u062F\u064A\u062F -->\r
        <form #decisionForm="ngForm" name="decisionForm" class="decision-form">\r
          <div class="form-section-header">\r
            <div class="section-icon-small">\r
              <i class="pi pi-plus-circle"></i>\r
            </div>\r
            <h6 class="section-title-small">\u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0627\u0631 \u0646\u0647\u0627\u0626\u064A \u062C\u062F\u064A\u062F</h6>\r
          </div>\r
\r
          <div class="form-fields">\r
            <div class="form-field-group">\r
              <label class="form-label-enhanced">\r
                <i class="pi pi-list"></i>\r
                \u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="required-star">*</span>\r
              </label>\r
              <ng-select [items]="results" bindLabel="description" bindValue="resultID"\r
                [(ngModel)]="decisionModel.resultID" name="resultID" (ngModelChange)="onResultChange($event)"\r
                [appendTo]="'body'" [disabled]="!hasAllExams() || !canEditDecision || previousDecisionLocked"\r
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629" class="enhanced-select">\r
              </ng-select>\r
              @if (!hasAllExams()) {\r
              <small class="form-hint">\r
                <i class="pi pi-exclamation-triangle"></i>\r
                \u064A\u062C\u0628 \u0625\u0643\u0645\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 \u0623\u0648\u0644\u0627\u064B\r
              </small>\r
              }\r
            </div>\r
\r
            <div class="form-field-group" *ngIf="canEditDecision && !previousDecisionLocked">\r
              <label class="form-label-enhanced" *ngIf="isAccept">\r
                <i class="pi pi-thumbs-up"></i>\r
                \u0627\u0644\u062A\u0648\u0635\u064A\u0629\r
              </label>\r
              <label class="form-label-enhanced" *ngIf="!isAccept">\r
                <i class="pi pi-info-circle"></i>\r
                \u0627\u0644\u0633\u0628\u0628\r
              </label>\r
              <textarea class="form-control-enhanced" [(ngModel)]="decisionModel.reason" name="reason" rows="4"\r
                placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0623\u0648 \u0627\u0644\u0633\u0628\u0628..."\r
                [disabled]="!hasAllExams() || !canEditDecision || previousDecisionLocked">\r
                </textarea>\r
            </div>\r
\r
            <!-- \u2705 \u0639\u0631\u0636 \u0627\u0644\u0633\u0628\u0628/\u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637 \u0639\u0646\u062F \u0648\u062C\u0648\u062F \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 -->\r
            <div class="form-field-group" *ngIf="previousDecisionLocked">\r
              <label class="form-label-enhanced">\r
                <i class="pi pi-info-circle"></i>\r
                {{ isAccept ? '\u0627\u0644\u062A\u0648\u0635\u064A\u0629' : '\u0627\u0644\u0633\u0628\u0628' }}\r
              </label>\r
              <textarea class="form-control-enhanced" [value]="decisionModel.reason || '\u0644\u0627 \u064A\u0648\u062C\u062F'" rows="4" readonly\r
                style="background-color: var(--neutral-light); cursor: not-allowed;">\r
                </textarea>\r
            </div>\r
\r
            <div class="form-field-group" *ngIf="!isApproved && canEditDecision && !previousDecisionLocked">\r
              <label class="form-label-enhanced">\r
                <i class="pi pi-clock"></i>\r
                \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644\r
              </label>\r
              <input type="text" class="form-control-enhanced" [(ngModel)]="decisionModel.postponeDuration"\r
                name="postponeDuration" placeholder="\u0623\u062F\u062E\u0644 \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644..."\r
                [disabled]="!hasAllExams() || !canEditDecision || previousDecisionLocked">\r
            </div>\r
\r
            <!-- \u2705 \u0639\u0631\u0636 \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644 \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637 \u0639\u0646\u062F \u0648\u062C\u0648\u062F \u0646\u062A\u064A\u062C\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 -->\r
            <div class="form-field-group" *ngIf="previousDecisionLocked && decisionModel.postponeDuration">\r
              <label class="form-label-enhanced">\r
                <i class="pi pi-clock"></i>\r
                \u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644\r
              </label>\r
              <input type="text" class="form-control-enhanced" [value]="decisionModel.postponeDuration" readonly\r
                style="background-color: var(--neutral-light); cursor: not-allowed;">\r
            </div>\r
          </div>\r
\r
          <div class="form-actions" *ngIf="canEditDecision && !previousDecisionLocked">\r
            <p-button label="\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A" icon="pi pi-check" severity="success" (onClick)="submitDecision()"\r
              [disabled]="!hasAllExams() || loading || !canEditDecision || previousDecisionLocked" [loading]="loading"\r
              styleClass="submit-decision-btn">\r
            </p-button>\r
          </div>\r
\r
          @if (responseMessage) {\r
          <div class="response-message">\r
            <div class="alert" [ngClass]="{'alert-success': responseSuccess, 'alert-danger': !responseSuccess}"\r
              role="alert">\r
              <i [class]="responseSuccess ? 'pi pi-check-circle' : 'pi pi-exclamation-triangle'" class="me-2"></i>\r
              {{ responseMessage }}\r
            </div>\r
          </div>\r
          }\r
        </form>\r
        }\r
      </p-card>\r
    </div>\r
  </div>\r
\r
  <!-- Consultation Modal -->\r
  <p-dialog [(visible)]="showConsultationModal" [modal]="true" [dismissableMask]="false" [closeOnEscape]="true"\r
    [style]="{width: '40rem', minWidth: '40rem'}"\r
    [closable]="true" [draggable]="false" [resizable]="false" (onHide)="closeConsultationModal()"\r
    [header]="(selectedConsultation?.consultationID ?? 0) > 0 ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629'">\r
\r
    <form [formGroup]="consultationForm" *ngIf="consultationForm" (ngSubmit)="saveConsultation()">\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-comment"></i>\r
          \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629\r
        </label>\r
        <input type="text" class="form-control" formControlName="consultationType"\r
          [readonly]="(selectedConsultation?.consultationID ?? 0) > 0" placeholder="\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629">\r
      </div>\r
\r
      <div class="form-group mb-3" *ngIf="(selectedConsultation?.consultationID ?? 0) === 0">\r
        <label class="form-label">\r
          <i class="pi pi-info-circle"></i>\r
          \u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629\r
        </label>\r
        <textarea type="text" class="form-control" formControlName="referralReason" rows="3"\r
          placeholder="\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"></textarea>\r
      </div>\r
\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-file-edit"></i>\r
          \u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="text-danger">*</span>\r
        </label>\r
        <textarea class="form-control" formControlName="result" rows="5" placeholder="\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629"></textarea>\r
      </div>\r
\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-file"></i>\r
          \u0645\u0644\u0641 \u0645\u0631\u0641\u0642\r
        </label>\r
        <input type="file" class="form-control" accept="image/*,.pdf" (change)="onConsultationFileSelected($event)"\r
          [disabled]="uploadingFile">\r
        <small class="text-muted" *ngIf="uploadingFile">\r
          <i class="pi pi-spin pi-spinner"></i>\r
          \u062C\u0627\u0631\u064A \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641...\r
        </small>\r
      </div>\r
\r
      <div *ngIf="previewUrl" class="preview-container mb-3">\r
        <img *ngIf="previewUrl.startsWith('data:') || previewUrl.includes('.jpg') || previewUrl.includes('.png')"\r
          [src]="previewUrl" alt="\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642" class="img-fluid rounded" style="max-height: 200px;">\r
        <div *ngIf="previewUrl.includes('.pdf')" class="alert alert-info">\r
          <i class="pi pi-file-pdf"></i>\r
          \u0645\u0644\u0641 PDF: {{ previewUrl }}\r
        </div>\r
      </div>\r
\r
      <div class="d-flex justify-content-end gap-2">\r
        <p-button label="\u0625\u0644\u063A\u0627\u0621" icon="pi pi-times" styleClass="p-button-secondary" (onClick)="closeConsultationModal()"\r
          [disabled]="loading"></p-button>\r
        <p-button label="\u062D\u0641\u0638" icon="pi pi-check" type="submit"\r
          [disabled]="consultationForm.invalid || loading || uploadingFile"></p-button>\r
      </div>\r
    </form>\r
  </p-dialog>\r
\r
  <!-- Investigation Modal -->\r
  <p-dialog [(visible)]="showInvestigationModal" [modal]="true" [dismissableMask]="false" [closeOnEscape]="true"\r
    [style]="{width: '40rem', minWidth: '40rem'}"\r
    [closable]="true" [draggable]="false" [resizable]="false" (onHide)="closeInvestigationModal()"\r
    [header]="(selectedInvestigation?.investigationID ?? 0) > 0 ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644' : '\u0625\u0636\u0627\u0641\u0629 \u062A\u062D\u0644\u064A\u0644 \u062C\u062F\u064A\u062F'">\r
\r
    <form [formGroup]="investigationForm" *ngIf="investigationForm" (ngSubmit)="saveInvestigation()">\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-file"></i>\r
          \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 <span class="text-danger">*</span>\r
        </label>\r
        <input type="text" class="form-control" formControlName="type"\r
          [readonly]="(selectedInvestigation?.investigationID ?? 0) > 0" placeholder="\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644">\r
      </div>\r
\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-file-edit"></i>\r
          \u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="text-danger">*</span>\r
        </label>\r
        <textarea class="form-control" formControlName="result" rows="5" placeholder="\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644"></textarea>\r
      </div>\r
\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-info-circle"></i>\r
          \u0627\u0644\u062D\u0627\u0644\u0629 <span class="text-danger">*</span>\r
        </label>\r
        <select class="form-control" formControlName="status">\r
          <option value="\u0645\u0643\u062A\u0645\u0644">\u0645\u0643\u062A\u0645\u0644</option>\r
          <option value="\u0645\u0624\u062C\u0644">\u0645\u0624\u062C\u0644</option>\r
          <option value="\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631">\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631</option>\r
        </select>\r
      </div>\r
\r
      <div class="form-group mb-3">\r
        <label class="form-label">\r
          <i class="pi pi-file"></i>\r
          \u0645\u0644\u0641 \u0645\u0631\u0641\u0642\r
        </label>\r
        <input type="file" class="form-control" accept="image/*,.pdf" (change)="onInvestigationFileSelected($event)"\r
          [disabled]="uploadingFile">\r
        <small class="text-muted" *ngIf="uploadingFile">\r
          <i class="pi pi-spin pi-spinner"></i>\r
          \u062C\u0627\u0631\u064A \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641...\r
        </small>\r
      </div>\r
\r
      <div *ngIf="previewUrl" class="preview-container mb-3">\r
        <img *ngIf="previewUrl.startsWith('data:') || previewUrl.includes('.jpg') || previewUrl.includes('.png')"\r
          [src]="previewUrl" alt="\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642" class="img-fluid rounded" style="max-height: 200px;">\r
        <div *ngIf="previewUrl.includes('.pdf')" class="alert alert-info">\r
          <i class="pi pi-file-pdf"></i>\r
          \u0645\u0644\u0641 PDF: {{ previewUrl }}\r
        </div>\r
      </div>\r
\r
      <div class="d-flex justify-content-end gap-2">\r
        <p-button label="\u0625\u0644\u063A\u0627\u0621" icon="pi pi-times" styleClass="p-button-secondary" (onClick)="closeInvestigationModal()"\r
          [disabled]="loading"></p-button>\r
        <p-button label="\u062D\u0641\u0638" icon="pi pi-check" type="submit"\r
          [disabled]="investigationForm.invalid || loading || uploadingFile"></p-button>\r
      </div>\r
    </form>\r
  </p-dialog>\r
</div>`, styles: ['/* src/app/features/supervisor/components/supervisor/supervisor.scss */\n.supervisor-page {\n  padding: var(--spacing-xl);\n  background-color: var(--neutral-light);\n  min-height: 100vh;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card {\n  background: white !important;\n  border-radius: 12px !important;\n  margin: 0 !important;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;\n  border: 1px solid rgba(5, 66, 57, 0.08) !important;\n  overflow: hidden !important;\n  position: relative !important;\n  display: block !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  padding: 24px !important;\n  position: relative !important;\n  overflow: hidden !important;\n  display: block !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content {\n  display: flex !important;\n  align-items: center !important;\n  gap: 20px !important;\n  position: relative !important;\n  z-index: 1 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-icon-wrapper {\n  width: 72px !important;\n  height: 72px !important;\n  background: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  backdrop-filter: blur(10px) !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border: 3px solid #b9a779 !important;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25) !important;\n  flex-shrink: 0 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-icon-wrapper i {\n  font-size: 2.25rem !important;\n  color: #b9a779 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-text {\n  flex: 1 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-title {\n  margin: 0 0 8px 0 !important;\n  font-size: 1.75rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-subtitle {\n  margin: 0 !important;\n  font-size: 1rem !important;\n  color: rgba(255, 255, 255, 0.95) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 6px !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-body {\n  padding: 24px !important;\n  background: white !important;\n  display: block !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section {\n  margin-bottom: 32px !important;\n  display: block !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .section-header {\n  display: flex !important;\n  align-items: center !important;\n  gap: 12px !important;\n  margin-bottom: 20px !important;\n  padding-bottom: 12px !important;\n  border-bottom: 3px solid #e0e0e0 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .section-icon {\n  width: 42px !important;\n  height: 42px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%) !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .section-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .section-title {\n  margin: 0 !important;\n  font-size: 1.25rem !important;\n  font-weight: 700 !important;\n  color: #054239 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-list {\n  display: grid !important;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;\n  gap: 16px !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: 12px !important;\n  padding: 16px !important;\n  background: white !important;\n  border-radius: 8px !important;\n  border: 2px solid rgba(5, 66, 57, 0.08) !important;\n  border-right: 4px solid #e0e0e0 !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon {\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%) !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-content {\n  flex: 1 !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 4px !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-label {\n  font-size: 0.875rem !important;\n  font-weight: 700 !important;\n  color: #666 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-value {\n  display: flex !important;\n  align-items: center !important;\n  min-height: 1.75rem !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .value-text {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: #054239 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .value-text-featured {\n  font-size: 1.2rem !important;\n  font-weight: 700 !important;\n  color: #054239 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-featured {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.08) 0%,\n      rgba(66, 129, 119, 0.03) 100%) !important;\n  border-right-color: #428177 !important;\n  border-right-width: 5px !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured {\n  width: 48px !important;\n  height: 48px !important;\n  min-width: 48px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured i {\n  font-size: 1.3rem !important;\n  color: white !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  font-family: "PrimeIcons" !important;\n  line-height: 1 !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured i.pi-calendar-check {\n  font-size: 1.3rem !important;\n  color: white !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .info-item-icon-featured i.pi-calendar-check::before {\n  content: "\\e92a" !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  font-family: "PrimeIcons" !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .status-section-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #b9a779 0%,\n      #8b7a5a 100%) !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .status-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #b9a779 0%,\n      #8b7a5a 100%) !important;\n}\n::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .result-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n}\n.search-wrapper {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  width: 100%;\n  background: white;\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n}\n.search-input {\n  flex: 1;\n  padding: 0.875rem 1.25rem;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  font-family: var(--font-family-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n}\n.search-input:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n.search-btn {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 0.875rem 2rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  transition: all var(--transition-fast);\n  white-space: nowrap;\n}\n.search-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.search-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-btn i {\n  font-size: 1.1rem;\n}\n::ng-deep .p-card {\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  margin-bottom: var(--spacing-xl);\n  overflow: hidden;\n  background: white;\n  transition: all var(--transition-normal);\n}\n::ng-deep .p-card:hover {\n  box-shadow: var(--shadow-xl);\n  transform: translateY(-2px);\n}\n::ng-deep .p-card .p-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border: none;\n  border-bottom: 3px solid var(--accent-gold);\n}\n::ng-deep .p-card .p-card-body {\n  padding: var(--spacing-2xl);\n}\n.card-header-custom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.card-header-custom h5,\n.card-header-custom h4,\n.card-header-custom h3,\n.card-header-custom h2,\n.card-header-custom h1,\n.card-header-custom span,\n.card-header-custom p {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.card-header-custom h5 {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.card-header-custom i {\n  font-size: 1.75rem;\n  color: var(--accent-gold);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.clinic-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.clinic-header h5,\n.clinic-header h4,\n.clinic-header h3,\n.clinic-header h2,\n.clinic-header h1,\n.clinic-header span,\n.clinic-header p {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.clinic-header h5 {\n  color: white !important;\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.clinic-header .clinic-icon {\n  font-size: 1.75rem;\n  color: var(--accent-gold);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n::ng-deep .p-card-header h1,\n::ng-deep .p-card-header h2,\n::ng-deep .p-card-header h3,\n::ng-deep .p-card-header h4,\n::ng-deep .p-card-header h5,\n::ng-deep .p-card-header h6,\n::ng-deep .p-card-header span,\n::ng-deep .p-card-header p,\n::ng-deep .p-card-header div {\n  color: white !important;\n}\n::ng-deep .p-card-header .card-header-custom h1,\n::ng-deep .p-card-header .card-header-custom h2,\n::ng-deep .p-card-header .card-header-custom h3,\n::ng-deep .p-card-header .card-header-custom h4,\n::ng-deep .p-card-header .card-header-custom h5,\n::ng-deep .p-card-header .card-header-custom h6,\n::ng-deep .p-card-header .card-header-custom span,\n::ng-deep .p-card-header .card-header-custom p,\n::ng-deep .p-card-header .clinic-header h1,\n::ng-deep .p-card-header .clinic-header h2,\n::ng-deep .p-card-header .clinic-header h3,\n::ng-deep .p-card-header .clinic-header h4,\n::ng-deep .p-card-header .clinic-header h5,\n::ng-deep .p-card-header .clinic-header h6,\n::ng-deep .p-card-header .clinic-header span,\n::ng-deep .p-card-header .clinic-header p {\n  color: white !important;\n}\n.personal-info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--spacing-xl);\n}\n.personal-info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-lg);\n  background: var(--neutral-light);\n  border-radius: var(--radius-md);\n  border-right: 3px solid var(--primary-medium);\n  transition: all var(--transition-fast);\n}\n.personal-info-grid .info-item:hover {\n  background: rgba(66, 129, 119, 0.05);\n  transform: translateX(-3px);\n}\n.personal-info-grid .info-item .info-label {\n  font-size: var(--font-size-sm);\n  color: var(--neutral-medium);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.personal-info-grid .info-item .info-label i {\n  color: var(--primary-medium);\n  font-size: 1rem;\n}\n.personal-info-grid .info-item .info-value {\n  font-size: var(--font-size-lg);\n  color: var(--neutral-dark);\n  font-weight: 700;\n  margin-top: var(--spacing-xs);\n}\n.clinic-content .section-block {\n  margin-bottom: var(--spacing-2xl);\n}\n.clinic-content .section-block:last-child {\n  margin-bottom: 0;\n}\n.clinic-content .section-title {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-lg);\n  padding-bottom: var(--spacing-md);\n  border-bottom: 3px solid var(--primary-medium);\n}\n.clinic-content .section-title i {\n  color: var(--accent-gold);\n  font-size: 1.5rem;\n  background: rgba(185, 167, 121, 0.1);\n  padding: var(--spacing-sm);\n  border-radius: var(--radius-md);\n}\n.exam-details {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(237, 235, 224, 0.5) 0%,\n      rgb(255, 255, 255) 100%);\n  padding: var(--spacing-xl);\n  border-radius: var(--radius-lg);\n  border-right: 5px solid var(--primary-medium);\n  box-shadow: var(--shadow-sm);\n}\n.exam-data {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n}\n.exam-data .data-row {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: white;\n  border-radius: var(--radius-md);\n  border-right: 3px solid transparent;\n  transition: all var(--transition-fast);\n}\n.exam-data .data-row:hover {\n  background: var(--neutral-light);\n  border-right-color: var(--primary-medium);\n  transform: translateX(-3px);\n}\n.exam-data .data-row.result-row {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.05) 0%,\n      rgba(66, 129, 119, 0.05) 100%);\n  border-right-color: var(--primary-medium);\n  padding: var(--spacing-lg);\n  margin-top: var(--spacing-md);\n}\n.exam-data .data-row .data-label {\n  font-weight: 700;\n  color: var(--primary-dark);\n  min-width: 180px;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.exam-data .data-row .data-label i {\n  color: var(--accent-gold);\n  font-size: 1.1rem;\n  width: 24px;\n  text-align: center;\n}\n.exam-data .data-row .data-value {\n  color: var(--neutral-dark);\n  flex: 1;\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  line-height: 1.6;\n}\n.exam-data .data-row .reason-text {\n  color: var(--status-danger);\n  font-weight: 600;\n  padding: var(--spacing-sm) var(--spacing-md);\n  background: rgba(107, 31, 42, 0.05);\n  border-radius: var(--radius-sm);\n  border-right: 2px solid var(--status-danger);\n}\n.consultations-list,\n.investigations-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: var(--spacing-lg);\n}\n.consultation-card,\n.investigation-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 2px solid rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  transition: all var(--transition-normal);\n  box-shadow: var(--shadow-sm);\n}\n.consultation-card:hover,\n.investigation-card:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n  border-color: var(--primary-medium);\n}\n.consultation-card .consultation-main,\n.consultation-card .investigation-main,\n.investigation-card .consultation-main,\n.investigation-card .investigation-main {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n}\n.consultation-card .consultation-info,\n.consultation-card .investigation-info,\n.investigation-card .consultation-info,\n.investigation-card .investigation-info {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n  flex: 1;\n}\n.consultation-card .consultation-info .consultation-header,\n.consultation-card .consultation-info .investigation-header,\n.consultation-card .investigation-info .consultation-header,\n.consultation-card .investigation-info .investigation-header,\n.investigation-card .consultation-info .consultation-header,\n.investigation-card .consultation-info .investigation-header,\n.investigation-card .investigation-info .consultation-header,\n.investigation-card .investigation-info .investigation-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.consultation-card .consultation-info .consultation-type,\n.consultation-card .consultation-info .investigation-type,\n.consultation-card .investigation-info .consultation-type,\n.consultation-card .investigation-info .investigation-type,\n.investigation-card .consultation-info .consultation-type,\n.investigation-card .consultation-info .investigation-type,\n.investigation-card .investigation-info .consultation-type,\n.investigation-card .investigation-info .investigation-type {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-lg);\n  flex: 1;\n}\n.consultation-card .consultation-info .consultation-type i,\n.consultation-card .consultation-info .investigation-type i,\n.consultation-card .investigation-info .consultation-type i,\n.consultation-card .investigation-info .investigation-type i,\n.investigation-card .consultation-info .consultation-type i,\n.investigation-card .consultation-info .investigation-type i,\n.investigation-card .investigation-info .consultation-type i,\n.investigation-card .investigation-info .investigation-type i {\n  color: var(--primary-medium);\n  font-size: 1.25rem;\n}\n.consultation-card .consultation-info .consultation-type strong,\n.consultation-card .consultation-info .investigation-type strong,\n.consultation-card .investigation-info .consultation-type strong,\n.consultation-card .investigation-info .investigation-type strong,\n.investigation-card .consultation-info .consultation-type strong,\n.investigation-card .consultation-info .investigation-type strong,\n.investigation-card .investigation-info .consultation-type strong,\n.investigation-card .investigation-info .investigation-type strong {\n  color: var(--primary-dark);\n  font-weight: 700;\n}\n.consultation-card .consultation-info .consultation-id-badge,\n.consultation-card .consultation-info .investigation-id-badge,\n.consultation-card .investigation-info .consultation-id-badge,\n.consultation-card .investigation-info .investigation-id-badge,\n.investigation-card .consultation-info .consultation-id-badge,\n.investigation-card .consultation-info .investigation-id-badge,\n.investigation-card .investigation-info .consultation-id-badge,\n.investigation-card .investigation-info .investigation-id-badge {\n  font-size: var(--font-size-xs);\n  padding: 0.25rem 0.5rem;\n  font-weight: 600;\n}\n.consultation-card .consultation-info .consultation-meta,\n.consultation-card .consultation-info .investigation-meta,\n.consultation-card .investigation-info .consultation-meta,\n.consultation-card .investigation-info .investigation-meta,\n.investigation-card .consultation-info .consultation-meta,\n.investigation-card .consultation-info .investigation-meta,\n.investigation-card .investigation-info .consultation-meta,\n.investigation-card .investigation-info .investigation-meta {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.consultation-card .consultation-info .consultation-meta .meta-item,\n.consultation-card .consultation-info .investigation-meta .meta-item,\n.consultation-card .investigation-info .consultation-meta .meta-item,\n.consultation-card .investigation-info .investigation-meta .meta-item,\n.investigation-card .consultation-info .consultation-meta .meta-item,\n.investigation-card .consultation-info .investigation-meta .meta-item,\n.investigation-card .investigation-info .consultation-meta .meta-item,\n.investigation-card .investigation-info .investigation-meta .meta-item {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.consultation-card .consultation-info .consultation-meta .meta-item i,\n.consultation-card .consultation-info .investigation-meta .meta-item i,\n.consultation-card .investigation-info .consultation-meta .meta-item i,\n.consultation-card .investigation-info .investigation-meta .meta-item i,\n.investigation-card .consultation-info .consultation-meta .meta-item i,\n.investigation-card .consultation-info .investigation-meta .meta-item i,\n.investigation-card .investigation-info .consultation-meta .meta-item i,\n.investigation-card .investigation-info .investigation-meta .meta-item i {\n  color: var(--accent-gold);\n  font-size: 0.9rem;\n  min-width: 16px;\n}\n.consultation-card .consultation-info .consultation-meta .meta-item .referral-reason,\n.consultation-card .consultation-info .consultation-meta .meta-item .investigation-reason,\n.consultation-card .consultation-info .investigation-meta .meta-item .referral-reason,\n.consultation-card .consultation-info .investigation-meta .meta-item .investigation-reason,\n.consultation-card .investigation-info .consultation-meta .meta-item .referral-reason,\n.consultation-card .investigation-info .consultation-meta .meta-item .investigation-reason,\n.consultation-card .investigation-info .investigation-meta .meta-item .referral-reason,\n.consultation-card .investigation-info .investigation-meta .meta-item .investigation-reason,\n.investigation-card .consultation-info .consultation-meta .meta-item .referral-reason,\n.investigation-card .consultation-info .consultation-meta .meta-item .investigation-reason,\n.investigation-card .consultation-info .investigation-meta .meta-item .referral-reason,\n.investigation-card .consultation-info .investigation-meta .meta-item .investigation-reason,\n.investigation-card .investigation-info .consultation-meta .meta-item .referral-reason,\n.investigation-card .investigation-info .consultation-meta .meta-item .investigation-reason,\n.investigation-card .investigation-info .investigation-meta .meta-item .referral-reason,\n.investigation-card .investigation-info .investigation-meta .meta-item .investigation-reason {\n  color: var(--primary-dark);\n  font-weight: 500;\n  line-height: 1.5;\n}\n.consultation-card .consultation-actions,\n.consultation-card .investigation-actions,\n.investigation-card .consultation-actions,\n.investigation-card .investigation-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.consultation-card .consultation-actions .p-button,\n.consultation-card .investigation-actions .p-button,\n.investigation-card .consultation-actions .p-button,\n.investigation-card .investigation-actions .p-button {\n  flex-shrink: 0;\n}\n.consultation-card .consultation-actions .btn-attachment,\n.consultation-card .investigation-actions .btn-attachment,\n.investigation-card .consultation-actions .btn-attachment,\n.investigation-card .investigation-actions .btn-attachment {\n  flex-shrink: 0;\n}\n.consultation-card .no-attachment,\n.investigation-card .no-attachment {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n  padding: var(--spacing-sm);\n}\n.consultation-card .no-attachment i,\n.investigation-card .no-attachment i {\n  color: var(--neutral-medium);\n}\n.consultation-card .consultation-result,\n.consultation-card .investigation-result,\n.investigation-card .consultation-result,\n.investigation-card .investigation-result {\n  padding: var(--spacing-lg);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.03) 0%,\n      rgba(66, 129, 119, 0.03) 100%);\n  border-top: 2px solid var(--primary-medium);\n}\n.consultation-card .consultation-result .result-header,\n.consultation-card .investigation-result .result-header,\n.investigation-card .consultation-result .result-header,\n.investigation-card .investigation-result .result-header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.consultation-card .consultation-result .result-header i,\n.consultation-card .investigation-result .result-header i,\n.investigation-card .consultation-result .result-header i,\n.investigation-card .investigation-result .result-header i {\n  color: var(--accent-gold);\n  font-size: 1.1rem;\n}\n.consultation-card .consultation-result .result-content,\n.consultation-card .investigation-result .result-content,\n.investigation-card .consultation-result .result-content,\n.investigation-card .investigation-result .result-content {\n  color: var(--neutral-dark);\n  font-size: var(--font-size-base);\n  line-height: 1.7;\n  padding: var(--spacing-md);\n  background: white;\n  border-radius: var(--radius-sm);\n  border-right: 3px solid var(--primary-medium);\n}\n.btn-attachment {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border: none;\n  border-radius: var(--radius-md);\n  font-weight: 600;\n  font-size: var(--font-size-sm);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  white-space: nowrap;\n}\n.btn-attachment i {\n  font-size: 1.1rem;\n}\n.btn-attachment:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-attachment:active {\n  transform: translateY(0);\n}\n.no-data-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-2xl);\n  background: var(--neutral-light);\n  border-radius: var(--radius-lg);\n  color: var(--neutral-medium);\n  text-align: center;\n  border: 2px dashed rgba(0, 0, 0, 0.1);\n}\n.no-data-message i {\n  font-size: 2rem;\n  color: var(--accent-gold);\n}\n.no-data-message span {\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n}\n::ng-deep .p-tag {\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n}\n::ng-deep .p-tag.file-badge {\n  font-size: var(--font-size-base);\n  padding: 0.625rem 1.25rem;\n}\n::ng-deep .p-tag.exam-status-badge {\n  font-size: var(--font-size-base);\n  padding: 0.625rem 1.25rem;\n}\n::ng-deep .p-tag.count-badge {\n  font-size: var(--font-size-sm);\n  padding: 0.375rem 0.875rem;\n}\n::ng-deep .p-tag.status-badge {\n  font-size: var(--font-size-sm);\n  padding: 0.375rem 0.875rem;\n}\n::ng-deep .p-button {\n  font-family: var(--font-family-primary) !important;\n  font-weight: 600 !important;\n  border-radius: var(--radius-md) !important;\n  padding: 0.75rem 1.5rem !important;\n  transition: all var(--transition-fast) !important;\n  border: 2px solid transparent !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: var(--spacing-xs) !important;\n}\n::ng-deep .p-button .p-button-icon {\n  font-size: 1rem !important;\n}\n::ng-deep .p-button.p-button-sm {\n  padding: 0.5rem 1rem !important;\n  font-size: var(--font-size-sm) !important;\n}\n::ng-deep .p-button.p-button-sm .p-button-icon {\n  font-size: 0.875rem !important;\n}\n::ng-deep .p-button.p-button-outlined {\n  border: 2px solid var(--primary-medium) !important;\n  color: var(--primary-dark) !important;\n  background: transparent !important;\n}\n::ng-deep .p-button.p-button-outlined:hover:not(:disabled) {\n  background: var(--primary-medium) !important;\n  border-color: var(--primary-medium) !important;\n  color: white !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n::ng-deep .p-button.p-button-outlined:active:not(:disabled) {\n  transform: translateY(0);\n}\n::ng-deep .p-button.p-button-secondary {\n  background: var(--neutral-medium) !important;\n  border-color: var(--neutral-medium) !important;\n  color: white !important;\n}\n::ng-deep .p-button.p-button-secondary:hover:not(:disabled) {\n  background: var(--neutral-dark) !important;\n  border-color: var(--neutral-dark) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n::ng-deep .p-button:not(.p-button-outlined):not(.p-button-secondary) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border: none !important;\n}\n::ng-deep .p-button:not(.p-button-outlined):not(.p-button-secondary):hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n::ng-deep .p-button:disabled {\n  opacity: 0.5 !important;\n  cursor: not-allowed !important;\n  transform: none !important;\n}\n::ng-deep .p-divider {\n  margin: var(--spacing-2xl) 0;\n}\n::ng-deep .p-divider .p-divider-content {\n  background: var(--neutral-light);\n}\n.form-label {\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.form-label i {\n  color: var(--accent-gold);\n  font-size: 1.1rem;\n}\n.form-control {\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  padding: 0.875rem 1.25rem;\n  font-family: var(--font-family-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n}\n.form-control:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n.form-control:disabled {\n  background-color: #f3f4f6;\n  cursor: not-allowed;\n}\n.alert {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  border-radius: var(--radius-lg);\n  border-right: 4px solid;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n.alert i {\n  font-size: 1.25rem;\n}\n.alert.alert-success {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1) 0%,\n      rgba(5, 66, 57, 0.05) 100%);\n  border-color: #10b981;\n  color: #065f46;\n}\n.alert.alert-danger {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 38, 38, 0.1) 0%,\n      rgba(107, 31, 42, 0.05) 100%);\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.alert.alert-info {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 202, 240, 0.1) 0%,\n      rgba(5, 66, 57, 0.05) 100%);\n  border-color: #0dcaf0;\n  color: #055160;\n}\n.refractions-display {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-sm);\n  align-items: center;\n}\n.refractions-display .badge {\n  font-size: var(--font-size-sm);\n  padding: 0.5rem 0.75rem;\n  font-weight: 600;\n  border-radius: var(--radius-md);\n  white-space: nowrap;\n}\n.refractions-display .badge.bg-info {\n  background:\n    linear-gradient(\n      135deg,\n      #0dcaf0 0%,\n      #0aa2c0 100%) !important;\n  color: white !important;\n}\n.refractions-display .badge.bg-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #6c757d 0%,\n      #5a6268 100%) !important;\n  color: white !important;\n}\n@media (max-width: 992px) {\n  .consultations-list,\n  .investigations-list {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .supervisor-page {\n    padding: var(--spacing-md);\n  }\n  .search-wrapper {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n    padding: var(--spacing-md);\n  }\n  .search-wrapper .search-btn {\n    width: 100%;\n  }\n  .personal-info-grid {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card-header-custom,\n  .clinic-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-sm);\n  }\n  .exam-data .data-row {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n  }\n  .exam-data .data-row .data-label {\n    min-width: auto;\n  }\n  .consultation-main,\n  .investigation-main {\n    flex-direction: column;\n  }\n  .consultation-actions,\n  .investigation-actions {\n    width: 100%;\n  }\n  .consultation-actions .btn-attachment,\n  .investigation-actions .btn-attachment {\n    width: 100%;\n    justify-content: center;\n  }\n  ::ng-deep .p-card .p-card-body {\n    padding: var(--spacing-lg);\n  }\n  ::ng-deep .p-card .p-card-header {\n    padding: var(--spacing-lg);\n  }\n}\n::ng-deep .p-dialog {\n}\n::ng-deep .p-dialog .p-dialog-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n}\n::ng-deep .p-dialog .p-dialog-header .p-dialog-title {\n  color: white;\n  font-weight: 700;\n  font-size: var(--font-size-xl);\n}\n::ng-deep .p-dialog .p-dialog-header .p-dialog-header-icon {\n  color: white;\n}\n::ng-deep .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n::ng-deep .p-dialog .p-dialog-content {\n  padding: var(--spacing-2xl);\n  background: white;\n}\n::ng-deep .p-dialog .form-label {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-base);\n}\n::ng-deep .p-dialog .form-label i {\n  color: var(--primary-medium);\n  font-size: 1.1rem;\n}\n::ng-deep .p-dialog .form-control {\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--radius-md);\n  padding: 0.75rem 1rem;\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n}\n::ng-deep .p-dialog .form-control:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n::ng-deep .p-dialog .form-control[readonly] {\n  background-color: var(--neutral-light);\n  cursor: not-allowed;\n}\n::ng-deep .p-dialog textarea.form-control {\n  resize: vertical;\n  min-height: 120px;\n}\n::ng-deep .p-dialog .preview-container {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--neutral-light);\n  border-radius: var(--radius-md);\n  border: 2px dashed var(--primary-medium);\n}\n::ng-deep .p-dialog .preview-container img {\n  max-width: 100%;\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-sm);\n}\n::ng-deep .p-dialog .text-danger {\n  color: var(--danger-color, #dc3545);\n}\n::ng-deep .p-dialog .text-muted {\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n::ng-deep .p-dialog .text-muted i {\n  animation: spin 1s linear infinite;\n}\n::ng-deep .p-dialog .d-flex.justify-content-end {\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 2px solid var(--neutral-light);\n}\n::ng-deep .p-dialog .d-flex.justify-content-end .p-button {\n  min-width: 120px;\n}\n::ng-deep .p-dialog .d-flex.justify-content-end .p-button:first-child {\n  margin-left: var(--spacing-md);\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card,\n::ng-deep .p-dialog .final-decision-card {\n  background: white !important;\n  border-radius: var(--radius-xl) !important;\n  margin-bottom: var(--spacing-2xl) !important;\n  box-shadow: var(--shadow-lg) !important;\n  border: 1px solid rgba(5, 66, 57, 0.08) !important;\n  overflow: hidden !important;\n  position: relative !important;\n  transition: all var(--transition-normal) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card:hover,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card:hover,\n::ng-deep .p-dialog .final-decision-card:hover {\n  box-shadow: var(--shadow-xl) !important;\n  transform: translateY(-2px) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header,\n::ng-deep .p-dialog .final-decision-card .decision-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  padding: var(--spacing-2xl) var(--spacing-2xl) !important;\n  position: relative !important;\n  overflow: hidden !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header::before,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header::before,\n::ng-deep .p-dialog .final-decision-card .decision-card-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 250px;\n  height: 250px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(185, 167, 121, 0.15) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  transform: translate(25%, -25%);\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header::after,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header::after,\n::ng-deep .p-dialog .final-decision-card .decision-card-header::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--accent-gold) 50%,\n      transparent 100%);\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n  position: relative;\n  z-index: 1;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper {\n  width: 72px !important;\n  height: 72px !important;\n  background: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  backdrop-filter: blur(10px) !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border: 3px solid var(--accent-gold) !important;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25) !important;\n  flex-shrink: 0 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper i,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-icon-wrapper i,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper i {\n  font-size: 2.25rem !important;\n  color: var(--accent-gold) !important;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-text,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text {\n  flex: 1;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title {\n  margin: 0 0 var(--spacing-sm) 0 !important;\n  font-size: 1.75rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: var(--spacing-sm) !important;\n  line-height: 1.3 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title .header-title-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-title .header-title-icon,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title .header-title-icon {\n  font-size: 1.4rem !important;\n  color: var(--accent-gold) !important;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle {\n  margin: 0 !important;\n  font-size: 1rem !important;\n  color: rgba(255, 255, 255, 0.95) !important;\n  font-weight: 400 !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: var(--spacing-xs) !important;\n  line-height: 1.5 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle .header-subtitle-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-header .header-content .header-text .header-subtitle .header-subtitle-icon,\n::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle .header-subtitle-icon {\n  font-size: 0.9rem !important;\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-card-body,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-card-body,\n::ng-deep .p-dialog .final-decision-card .decision-card-body {\n  padding: var(--spacing-2xl) !important;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(237, 235, 224, 0.02) 0%,\n      white 100%) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section,\n::ng-deep .p-dialog .final-decision-card .decision-info-section {\n  margin-bottom: var(--spacing-2xl);\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section:last-child,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section:last-child,\n::ng-deep .p-dialog .final-decision-card .decision-info-section:last-child {\n  margin-bottom: 0;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .section-header,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .section-header {\n  display: flex !important;\n  align-items: center !important;\n  gap: var(--spacing-md) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  padding-bottom: var(--spacing-md) !important;\n  border-bottom: 3px solid var(--primary-light) !important;\n  position: relative !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header::after,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .section-header::after,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .section-header::after {\n  content: "" !important;\n  position: absolute !important;\n  bottom: -3px !important;\n  right: 0 !important;\n  width: 80px !important;\n  height: 3px !important;\n  background: var(--primary-medium) !important;\n  border-radius: 0 0 0 3px !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .section-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .section-header .section-icon,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .section-header .section-icon {\n  width: 42px !important;\n  height: 42px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  border-radius: var(--radius-md) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  box-shadow: var(--shadow-sm) !important;\n  flex-shrink: 0 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .section-icon i,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .section-header .section-icon i,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .section-header .section-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .status-section-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .section-header .status-section-icon,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .section-header .status-section-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .section-header .section-title,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .section-header .section-title,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .section-header .section-title {\n  margin: 0 !important;\n  font-size: 1.25rem !important;\n  font-weight: 700 !important;\n  color: var(--primary-dark) !important;\n  letter-spacing: -0.3px !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-list,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-list,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-list {\n  display: grid !important;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;\n  gap: var(--spacing-lg) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-list.status-list,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-list.status-list,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-list.status-list {\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: var(--spacing-md) !important;\n  padding: var(--spacing-lg) !important;\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  border: 2px solid rgba(5, 66, 57, 0.08) !important;\n  border-right: 4px solid var(--primary-light) !important;\n  transition: all var(--transition-fast) !important;\n  box-shadow: var(--shadow-sm) !important;\n  position: relative !important;\n  overflow: hidden !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item::before,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item::before,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--primary-light) 100%);\n  opacity: 0;\n  transition: opacity var(--transition-fast);\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item:hover,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item:hover,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.03) 0%,\n      white 100%) !important;\n  border-right-color: var(--primary-medium) !important;\n  border-color: rgba(66, 129, 119, 0.15) !important;\n  box-shadow: var(--shadow-md) !important;\n  transform: translateX(-3px) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item:hover::before,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item:hover::before,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item:hover::before {\n  opacity: 1 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.info-item-featured {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.08) 0%,\n      rgba(66, 129, 119, 0.03) 100%) !important;\n  border-right-color: var(--primary-medium) !important;\n  border-right-width: 5px !important;\n  border-color: rgba(66, 129, 119, 0.2) !important;\n  box-shadow: var(--shadow-md) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured:hover,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.info-item-featured:hover,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.info-item-featured:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(66, 129, 119, 0.12) 0%,\n      rgba(66, 129, 119, 0.05) 100%) !important;\n  box-shadow: var(--shadow-lg) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.info-item-exported {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08) 0%,\n      rgba(16, 185, 129, 0.03) 100%) !important;\n  border-right-color: #10b981 !important;\n  border-color: rgba(16, 185, 129, 0.15) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .info-item-icon-exported,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .info-item-icon-exported,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.info-item-exported .info-item-icon-exported {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .value-text-exported,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.info-item-exported .value-text-exported,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.info-item-exported .value-text-exported {\n  color: #059669 !important;\n  font-weight: 700 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon {\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  border-radius: var(--radius-md) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n  box-shadow: var(--shadow-sm) !important;\n  transition: all var(--transition-fast) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon i,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon i,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon i {\n  font-size: 1.2rem !important;\n  color: white !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  box-shadow: var(--shadow-md) !important;\n  width: 48px !important;\n  height: 48px !important;\n  min-width: 48px !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured i,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured i,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.info-item-icon-featured i {\n  font-size: 1.3rem !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.status-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.status-icon,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.status-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.result-icon,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-icon.result-icon,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-icon.result-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content {\n  flex: 1 !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: var(--spacing-xs) !important;\n  min-width: 0 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-label,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-label,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-label {\n  font-size: 0.875rem !important;\n  font-weight: 700 !important;\n  color: var(--neutral-medium) !important;\n  margin-bottom: var(--spacing-xs) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n  line-height: 1.4 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value {\n  display: flex !important;\n  align-items: center !important;\n  min-height: 1.75rem !important;\n  flex-wrap: wrap !important;\n  gap: var(--spacing-xs) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: var(--primary-dark) !important;\n  line-height: 1.5 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured {\n  font-size: 1.2rem !important;\n  font-weight: 700 !important;\n  color: var(--primary-dark) !important;\n  letter-spacing: -0.2px !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-empty,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-empty,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value .value-empty {\n  font-size: 0.9rem !important;\n  color: var(--neutral-medium) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .status-badge {\n  font-size: 0.95rem !important;\n  font-weight: 600 !important;\n  padding: 0.5rem 1.25rem !important;\n  border-radius: var(--radius-md) !important;\n  box-shadow: var(--shadow-sm) !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .result-badge {\n  font-size: 1.1rem !important;\n  font-weight: 700 !important;\n  padding: 0.625rem 1.5rem !important;\n  border-radius: var(--radius-md) !important;\n  box-shadow: var(--shadow-md) !important;\n  letter-spacing: 0.2px !important;\n}\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog ::ng-deep .supervisor-page .p-card .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog ::ng-deep .p-card-body .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.status-item .info-item-content .info-item-value ::ng-deep .result-badge,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value ::ng-deep .status-badge,\n::ng-deep .p-dialog .final-decision-card .decision-info-section .info-item.result-item .info-item-content .info-item-value ::ng-deep .result-badge {\n  box-shadow: var(--shadow-md) !important;\n}\n::ng-deep .p-dialog .decision-form {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  box-shadow: var(--shadow-md);\n  margin-top: var(--spacing-xl);\n}\n::ng-deep .p-dialog .decision-form .form-section-header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-xl);\n  padding-bottom: var(--spacing-lg);\n  border-bottom: 2px solid var(--primary-light);\n}\n::ng-deep .p-dialog .decision-form .form-section-header .section-icon-small {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n::ng-deep .p-dialog .decision-form .form-section-header .section-icon-small i {\n  font-size: 1.1rem;\n  color: white;\n}\n::ng-deep .p-dialog .decision-form .form-section-header .section-title-small {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n}\n::ng-deep .p-dialog .decision-form .form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xl);\n}\n::ng-deep .p-dialog .decision-form .form-field-group {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-label-enhanced {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-xs);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-label-enhanced i {\n  font-size: 1.1rem;\n  color: var(--primary-medium);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-label-enhanced .required-star {\n  color: var(--status-danger);\n  margin-right: 0.25rem;\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-control-enhanced {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  padding: 0.875rem 1.25rem;\n  font-size: var(--font-size-base);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background: white;\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-control-enhanced:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-control-enhanced:disabled {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-control-enhanced::placeholder {\n  color: var(--neutral-medium);\n  opacity: 0.6;\n}\n::ng-deep .p-dialog .decision-form .form-field-group textarea.form-control-enhanced {\n  resize: vertical;\n  min-height: 100px;\n  line-height: 1.6;\n}\n::ng-deep .p-dialog .decision-form .form-field-group .enhanced-select ::ng-deep .ng-select .ng-select-container {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  min-height: 48px;\n  transition: all var(--transition-fast);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .enhanced-select ::ng-deep .ng-select .ng-select-container:hover {\n  border-color: var(--primary-light);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .enhanced-select ::ng-deep .ng-select .ng-select-container.ng-select-focused {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .enhanced-select ::ng-deep .ng-select.ng-select-disabled .ng-select-container {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-hint {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-size: 0.85rem;\n  color: var(--accent-gold-dark);\n  font-weight: 500;\n  margin-top: var(--spacing-xs);\n}\n::ng-deep .p-dialog .decision-form .form-field-group .form-hint i {\n  font-size: 0.9rem;\n  color: var(--accent-gold);\n}\n::ng-deep .p-dialog .decision-form .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 2px solid rgba(5, 66, 57, 0.08);\n}\n::ng-deep .p-dialog .decision-form .form-actions ::ng-deep .submit-decision-btn {\n  min-width: 200px;\n  padding: 0.875rem 2rem;\n  font-weight: 600;\n  font-size: 1rem;\n  box-shadow: var(--shadow-md);\n}\n::ng-deep .p-dialog .decision-form .form-actions ::ng-deep .submit-decision-btn:hover:not(:disabled) {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n::ng-deep .p-dialog .decision-locked-message {\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #fffbf0 100%);\n  border: 2px solid var(--accent-gold);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  margin-top: var(--spacing-xl);\n  display: flex;\n  gap: var(--spacing-xl);\n  align-items: flex-start;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  overflow: hidden;\n}\n::ng-deep .p-dialog .decision-locked-message::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(185, 167, 121, 0.1) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  transform: translate(30%, -30%);\n}\n::ng-deep .p-dialog .decision-locked-message::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-light) 100%);\n}\n::ng-deep .p-dialog .decision-locked-message .locked-icon {\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  z-index: 1;\n}\n::ng-deep .p-dialog .decision-locked-message .locked-icon i {\n  font-size: 2rem;\n  color: white;\n}\n::ng-deep .p-dialog .decision-locked-message .locked-content {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n::ng-deep .p-dialog .decision-locked-message .locked-content .locked-title {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  margin: 0 0 var(--spacing-md) 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--accent-gold-dark);\n}\n::ng-deep .p-dialog .decision-locked-message .locked-content .locked-title i {\n  font-size: 1.3rem;\n  color: var(--accent-gold);\n}\n::ng-deep .p-dialog .decision-locked-message .locked-content .locked-text {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.7;\n  color: var(--neutral-dark);\n  font-weight: 500;\n}\n@media (max-width: 1200px) {\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-list {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header {\n    padding: var(--spacing-xl) var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content {\n    flex-direction: column;\n    text-align: center;\n    gap: var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper {\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper i {\n    font-size: 2rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle {\n    font-size: 0.95rem;\n    justify-content: center;\n    text-align: center;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body {\n    padding: var(--spacing-xl) var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section {\n    margin-bottom: var(--spacing-xl);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header {\n    margin-bottom: var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header .section-icon {\n    width: 38px;\n    height: 38px;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header .section-icon i {\n    font-size: 1.1rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .section-header .section-title {\n    font-size: 1.15rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-list {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item {\n    padding: var(--spacing-md);\n    flex-direction: row;\n    align-items: center;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon {\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon i {\n    font-size: 1.1rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon.info-item-icon-featured {\n    width: 44px;\n    height: 44px;\n    min-width: 44px;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon.info-item-icon-featured i {\n    font-size: 1.2rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-label {\n    font-size: 0.85rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text {\n    font-size: 0.95rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured {\n    font-size: 1.1rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .status-badge,\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .result-badge {\n    font-size: 0.9rem;\n    padding: 0.45rem 1rem;\n  }\n}\n@media (max-width: 480px) {\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header {\n    padding: var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content {\n    gap: var(--spacing-md);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper {\n    width: 56px;\n    height: 56px;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-icon-wrapper i {\n    font-size: 1.75rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-title {\n    font-size: 1.3rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-header .header-content .header-text .header-subtitle {\n    font-size: 0.875rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body {\n    padding: var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item {\n    padding: var(--spacing-sm) var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon {\n    width: 36px;\n    height: 36px;\n    min-width: 36px;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon i {\n    font-size: 1rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-icon.info-item-icon-featured {\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-label {\n    font-size: 0.8rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text {\n    font-size: 0.9rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value .value-text.value-text-featured {\n    font-size: 1rem;\n  }\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .status-badge,\n  ::ng-deep .p-dialog .final-decision-card .decision-card-body .decision-info-section .info-item .info-item-content .info-item-value ::ng-deep .result-badge {\n    font-size: 0.85rem;\n    padding: 0.4rem 0.875rem;\n  }\n  ::ng-deep .p-dialog .decision-form {\n    padding: var(--spacing-lg);\n  }\n  ::ng-deep .p-dialog .decision-form .form-section-header .section-icon-small {\n    width: 32px;\n    height: 32px;\n  }\n  ::ng-deep .p-dialog .decision-form .form-section-header .section-icon-small i {\n    font-size: 1rem;\n  }\n  ::ng-deep .p-dialog .decision-form .form-section-header .section-title-small {\n    font-size: 1rem;\n  }\n  ::ng-deep .p-dialog .decision-form .form-actions ::ng-deep .submit-decision-btn {\n    width: 100%;\n    min-width: auto;\n  }\n  ::ng-deep .p-dialog .decision-locked-message {\n    padding: var(--spacing-lg);\n    flex-direction: column;\n    text-align: center;\n  }\n  ::ng-deep .p-dialog .decision-locked-message .locked-icon {\n    margin: 0 auto;\n    width: 56px;\n    height: 56px;\n  }\n  ::ng-deep .p-dialog .decision-locked-message .locked-icon i {\n    font-size: 1.75rem;\n  }\n  ::ng-deep .p-dialog .decision-locked-message .locked-content .locked-title {\n    justify-content: center;\n    font-size: 1.1rem;\n  }\n  ::ng-deep .p-dialog .decision-locked-message .locked-content .locked-text {\n    font-size: 0.9rem;\n  }\n}\n::ng-deep .p-dialog .p-button {\n  font-family: var(--font-family-primary) !important;\n  font-weight: 600 !important;\n  border-radius: var(--radius-md) !important;\n  padding: 0.75rem 1.5rem !important;\n  transition: all var(--transition-fast) !important;\n}\n::ng-deep .p-dialog .p-button.p-button-secondary {\n  background: var(--neutral-medium) !important;\n  border-color: var(--neutral-medium) !important;\n  color: white !important;\n}\n::ng-deep .p-dialog .p-button.p-button-secondary:hover:not(:disabled) {\n  background: var(--neutral-dark) !important;\n  border-color: var(--neutral-dark) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n::ng-deep .p-dialog .p-button:not(.p-button-secondary) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border: none !important;\n}\n::ng-deep .p-dialog .p-button:not(.p-button-secondary):hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-dark) 100%) !important;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n::ng-deep .p-dialog .p-button:disabled {\n  opacity: 0.5 !important;\n  cursor: not-allowed !important;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.section-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-lg);\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.section-title .d-flex {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.section-title .p-button {\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.decision-form {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  border: 2px solid rgba(5, 66, 57, 0.1);\n  box-shadow: var(--shadow-md);\n  margin-top: var(--spacing-xl);\n}\n.decision-form .form-section-header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-xl);\n  padding-bottom: var(--spacing-lg);\n  border-bottom: 2px solid var(--primary-light);\n}\n.decision-form .form-section-header .section-icon-small {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n.decision-form .form-section-header .section-icon-small i {\n  font-size: 1.1rem;\n  color: white;\n}\n.decision-form .form-section-header .section-title-small {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n}\n.decision-form .form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xl);\n}\n.decision-form .form-field-group {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.decision-form .form-field-group .form-label-enhanced {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-xs);\n}\n.decision-form .form-field-group .form-label-enhanced i {\n  font-size: 1.1rem;\n  color: var(--primary-medium);\n}\n.decision-form .form-field-group .form-label-enhanced .required-star {\n  color: var(--status-danger);\n  margin-right: 0.25rem;\n}\n.decision-form .form-field-group .form-control-enhanced {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  padding: 0.875rem 1.25rem;\n  font-size: var(--font-size-base);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background: white;\n}\n.decision-form .form-field-group .form-control-enhanced:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n  outline: none;\n}\n.decision-form .form-field-group .form-control-enhanced:disabled {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.decision-form .form-field-group .form-control-enhanced::placeholder {\n  color: var(--neutral-medium);\n  opacity: 0.6;\n}\n.decision-form .form-field-group textarea.form-control-enhanced {\n  resize: vertical;\n  min-height: 100px;\n  line-height: 1.6;\n}\n.decision-form .form-field-group .enhanced-select ::ng-deep .ng-select .ng-select-container {\n  border: 2px solid rgba(5, 66, 57, 0.15);\n  border-radius: var(--radius-md);\n  min-height: 48px;\n  transition: all var(--transition-fast);\n}\n.decision-form .form-field-group .enhanced-select ::ng-deep .ng-select .ng-select-container:hover {\n  border-color: var(--primary-light);\n}\n.decision-form .form-field-group .enhanced-select ::ng-deep .ng-select .ng-select-container.ng-select-focused {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\n.decision-form .form-field-group .enhanced-select ::ng-deep .ng-select.ng-select-disabled .ng-select-container {\n  background: var(--neutral-light);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.decision-form .form-field-group .form-hint {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  font-size: 0.85rem;\n  color: var(--accent-gold-dark);\n  font-weight: 500;\n  margin-top: var(--spacing-xs);\n}\n.decision-form .form-field-group .form-hint i {\n  font-size: 0.9rem;\n  color: var(--accent-gold);\n}\n.decision-form .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 2px solid rgba(5, 66, 57, 0.08);\n}\n.decision-form .form-actions ::ng-deep .submit-decision-btn {\n  min-width: 200px;\n  padding: 0.875rem 2rem;\n  font-weight: 600;\n  font-size: 1rem;\n  box-shadow: var(--shadow-md);\n}\n.decision-form .form-actions ::ng-deep .submit-decision-btn:hover:not(:disabled) {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n.decision-form .response-message {\n  margin-top: var(--spacing-lg);\n  padding-top: var(--spacing-lg);\n  border-top: 1px solid rgba(5, 66, 57, 0.08);\n}\n.decision-form .response-message .alert {\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-weight: 500;\n  box-shadow: var(--shadow-sm);\n}\n.decision-form .response-message .alert.alert-success {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.1) 0%,\n      rgba(66, 129, 119, 0.1) 100%);\n  border: 2px solid var(--primary-medium);\n  color: var(--primary-dark);\n}\n.decision-form .response-message .alert.alert-success i {\n  color: var(--primary-dark);\n  font-size: 1.2rem;\n}\n.decision-form .response-message .alert.alert-danger {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(107, 31, 42, 0.1) 0%,\n      rgba(107, 31, 42, 0.05) 100%);\n  border: 2px solid var(--status-danger);\n  color: var(--status-danger);\n}\n.decision-form .response-message .alert.alert-danger i {\n  color: var(--status-danger);\n  font-size: 1.2rem;\n}\n.decision-locked-message {\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #fffbf0 100%);\n  border: 2px solid var(--accent-gold);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  margin-top: var(--spacing-xl);\n  display: flex;\n  gap: var(--spacing-xl);\n  align-items: flex-start;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  overflow: hidden;\n}\n.decision-locked-message::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(185, 167, 121, 0.1) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  transform: translate(30%, -30%);\n}\n.decision-locked-message::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-light) 100%);\n}\n.decision-locked-message .locked-icon {\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold) 0%,\n      var(--accent-gold-dark) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n  position: relative;\n  z-index: 1;\n}\n.decision-locked-message .locked-icon i {\n  font-size: 2rem;\n  color: white;\n}\n.decision-locked-message .locked-content {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.decision-locked-message .locked-content .locked-title {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  margin: 0 0 var(--spacing-md) 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--accent-gold-dark);\n}\n.decision-locked-message .locked-content .locked-title i {\n  font-size: 1.3rem;\n  color: var(--accent-gold);\n}\n.decision-locked-message .locked-content .locked-text {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.7;\n  color: var(--neutral-dark);\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .decision-form {\n    padding: var(--spacing-lg);\n  }\n  .decision-form .form-section-header .section-icon-small {\n    width: 32px;\n    height: 32px;\n  }\n  .decision-form .form-section-header .section-icon-small i {\n    font-size: 1rem;\n  }\n  .decision-form .form-section-header .section-title-small {\n    font-size: 1rem;\n  }\n  .decision-form .form-actions ::ng-deep .submit-decision-btn {\n    width: 100%;\n    min-width: auto;\n  }\n  .decision-locked-message {\n    padding: var(--spacing-lg);\n    flex-direction: column;\n    text-align: center;\n  }\n  .decision-locked-message .locked-icon {\n    margin: 0 auto;\n    width: 56px;\n    height: 56px;\n  }\n  .decision-locked-message .locked-icon i {\n    font-size: 1.75rem;\n  }\n  .decision-locked-message .locked-content .locked-title {\n    justify-content: center;\n    font-size: 1.1rem;\n  }\n  .decision-locked-message .locked-content .locked-text {\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .decision-form {\n    padding: var(--spacing-md);\n  }\n  .decision-form .form-field-group .form-label-enhanced {\n    font-size: 0.875rem;\n  }\n  .decision-form .form-field-group .form-control-enhanced {\n    padding: 0.75rem 1rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=supervisor.css.map */\n'] }]
  }], () => [{ type: ApplicantService }, { type: LookupService }, { type: DecisionService }, { type: MaritalStatusService }, { type: HttpClient }, { type: FormBuilder }, { type: ToastrService }, { type: AuthService }, { type: Router }], { decisionForm: [{
    type: ViewChild,
    args: ["decisionForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Supervisor, { className: "Supervisor", filePath: "src/app/features/supervisor/components/supervisor/supervisor.ts", lineNumber: 70 });
})();
export {
  Supervisor
};
//# sourceMappingURL=chunk-3S5ORJTC.js.map
