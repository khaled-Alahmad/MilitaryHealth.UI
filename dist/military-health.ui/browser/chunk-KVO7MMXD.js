import {
  ConsultationFormComponent,
  InvestigationForm
} from "./chunk-WQO5OFZX.js";
import {
  SearchApplicantComponent
} from "./chunk-5SMVM3T5.js";
import "./chunk-2OSA6QLT.js";
import {
  HEALTH_STATUS_OPTIONS,
  OTHER_OPTION_VALUE,
  resolveHealthStatusValue
} from "./chunk-7R7W7ON6.js";
import {
  EyeExamService
} from "./chunk-T2JR7AGY.js";
import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
import {
  PageHeaderComponent
} from "./chunk-JQ4Y5HNR.js";
import {
  DialogWrapperComponent
} from "./chunk-MH7HOQ25.js";
import "./chunk-5TBOZ7YP.js";
import "./chunk-7K53XEFX.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import "./chunk-N6FOUH3N.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-LBNMWMAA.js";
import "./chunk-M5RFJNTA.js";
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
  ViewChild,
  __spreadProps,
  __spreadValues,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/eye-doctor.component/eye-exam-form/eye-exam-form.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.resultID;
var _forTrack2 = ($index, $item) => $item.refractionTypeID;
function EyeExamForm_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("vision"), " ");
  }
}
function EyeExamForm_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("visionLeft"), " ");
  }
}
function EyeExamForm_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 29);
    \u0275\u0275elementStart(2, "label", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const \u0275$index_59_r3 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTest_" + \u0275$index_59_r3)("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTest_" + \u0275$index_59_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.label);
  }
}
function EyeExamForm_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 31);
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 32);
    \u0275\u0275elementStart(2, "label", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const \u0275$index_82_r5 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTestLeft_" + \u0275$index_82_r5)("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTestLeft_" + \u0275$index_82_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function EyeExamForm_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 33);
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_43_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("worstRefractionRight"), " ");
  }
}
function EyeExamForm_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 11);
    \u0275\u0275text(2, "R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 13);
    \u0275\u0275element(7, "input", 35);
    \u0275\u0275elementStart(8, "label", 36);
    \u0275\u0275text(9, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275element(11, "input", 37);
    \u0275\u0275elementStart(12, "label", 38);
    \u0275\u0275text(13, "\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, EyeExamForm_Conditional_43_div_14_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_1_0 = ctx_r0.examForm.get("worstRefractionRight")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.examForm.get("worstRefractionRight")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r0.examForm.get("worstRefractionRight")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.examForm.get("worstRefractionRight")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.getErrorMessage("worstRefractionRight"));
  }
}
function EyeExamForm_Conditional_44_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("worstRefractionLeft"), " ");
  }
}
function EyeExamForm_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 11);
    \u0275\u0275text(2, "L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 13);
    \u0275\u0275element(7, "input", 39);
    \u0275\u0275elementStart(8, "label", 40);
    \u0275\u0275text(9, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275element(11, "input", 41);
    \u0275\u0275elementStart(12, "label", 42);
    \u0275\u0275text(13, "\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, EyeExamForm_Conditional_44_div_14_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_1_0 = ctx_r0.examForm.get("worstRefractionLeft")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.examForm.get("worstRefractionLeft")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r0.examForm.get("worstRefractionLeft")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.examForm.get("worstRefractionLeft")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.getErrorMessage("worstRefractionLeft"));
  }
}
function EyeExamForm_Conditional_52_For_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.refractionTypeID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.description, " ");
  }
}
function EyeExamForm_Conditional_52_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 52)(2, "div", 3)(3, "div", 53)(4, "label", 5);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 54);
    \u0275\u0275repeaterCreate(9, EyeExamForm_Conditional_52_For_13_For_10_Template, 2, 2, "option", 22, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53)(12, "label", 5);
    \u0275\u0275text(13, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(14, "span", 6);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 56)(18, "button", 57);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_52_For_13_Template_button_click_18_listener() {
      const \u0275$index_198_r9 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeRefraction("rightEye", \u0275$index_198_r9));
    });
    \u0275\u0275element(19, "i", 58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const \u0275$index_198_r9 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_198_r9);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.refractionTypes);
  }
}
function EyeExamForm_Conditional_52_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 43)(2, "h6", 44);
    \u0275\u0275text(3, "\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 45)(5, "div", 46)(6, "div", 47)(7, "h6", 44);
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 48);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_52_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRefraction("rightEye"));
    });
    \u0275\u0275element(10, "i", 49);
    \u0275\u0275text(11, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, EyeExamForm_Conditional_52_For_13_Template, 20, 1, "div", 50, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, EyeExamForm_Conditional_52_Conditional_14_Template, 2, 0, "div", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.getRefractions("rightEye").controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.getRefractions("rightEye").length ? 14 : -1);
  }
}
function EyeExamForm_Conditional_53_For_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r12 = ctx.$implicit;
    \u0275\u0275property("value", type_r12.refractionTypeID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r12.description, " ");
  }
}
function EyeExamForm_Conditional_53_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 52)(2, "div", 3)(3, "div", 53)(4, "label", 5);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 54);
    \u0275\u0275repeaterCreate(9, EyeExamForm_Conditional_53_For_13_For_10_Template, 2, 2, "option", 22, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53)(12, "label", 5);
    \u0275\u0275text(13, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(14, "span", 6);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 56)(18, "button", 57);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_53_For_13_Template_button_click_18_listener() {
      const \u0275$index_261_r13 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeRefraction("leftEye", \u0275$index_261_r13));
    });
    \u0275\u0275element(19, "i", 58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const \u0275$index_261_r13 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_261_r13);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.refractionTypes);
  }
}
function EyeExamForm_Conditional_53_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 43)(2, "h6", 44);
    \u0275\u0275text(3, "\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 59)(5, "div", 46)(6, "div", 47)(7, "h6", 44);
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 48);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_53_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRefraction("leftEye"));
    });
    \u0275\u0275element(10, "i", 49);
    \u0275\u0275text(11, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, EyeExamForm_Conditional_53_For_13_Template, 20, 1, "div", 50, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, EyeExamForm_Conditional_53_Conditional_14_Template, 2, 0, "div", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.getRefractions("leftEye").controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.getRefractions("leftEye").length ? 14 : -1);
  }
}
function EyeExamForm_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    \u0275\u0275property("value", r_r14.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r14.description, " ");
  }
}
function EyeExamForm_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("resultID"), " ");
  }
}
var EyeExamForm = class _EyeExamForm {
  fb;
  examService;
  authService;
  toastr;
  applicantFileNumber = "";
  examAdded = new EventEmitter();
  // ✅ إشعار المكون الأب عند إضافة فحص جديد
  examForm;
  refractionTypes = [];
  results = [];
  loading = false;
  showModal = false;
  showRightEye = true;
  showLeftEye = false;
  healthStatusOptions = HEALTH_STATUS_OPTIONS;
  otherOptionValue = OTHER_OPTION_VALUE;
  colorTestFields = [
    { control: "colorTest", otherControl: "colorTestOther" },
    { control: "colorTestLeft", otherControl: "colorTestLeftOther" }
  ];
  constructor(fb, examService, authService, toastr) {
    this.fb = fb;
    this.examService = examService;
    this.authService = authService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.initForm();
    this.loadRefractionTypesAndResults();
  }
  // ---------------------- INIT FORM ----------------------
  initForm() {
    this.examForm = this.fb.group({
      vision: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      visionLeft: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      colorTest: ["\u0633\u0644\u064A\u0645", Validators.required],
      colorTestOther: [""],
      colorTestLeft: ["\u0633\u0644\u064A\u0645", Validators.required],
      colorTestLeftOther: [""],
      refractiveError: [""],
      // حقل قديم - للتوافق مع البيانات القديمة
      worstRefractionRight: ["", Validators.required],
      // أسوأ انكسار العين اليمنى
      worstRefractionLeft: [""],
      // أسوأ انكسار العين اليسرى (يُفعل عند إظهار العين اليسرى)
      otherDiseases: [""],
      resultID: [null, Validators.required],
      reason: [""],
      leftEye: this.fb.group({
        refractions: this.fb.array([])
      }),
      rightEye: this.fb.group({
        refractions: this.fb.array([])
      })
    });
  }
  loadRefractionTypesAndResults() {
    forkJoin({
      refractionTypes: this.examService.getRefractionTypes(),
      results: this.examService.getResults()
    }).subscribe({
      next: (response) => {
        this.refractionTypes = response.refractionTypes.data.items || [];
        this.results = response.results.data.items || [];
      },
      error: (error) => {
        this.toastr.error("\u274C \u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "\u062E\u0637\u0623");
      }
    });
  }
  // ---------------------- MODAL & EYE TOGGLE ----------------------
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  toggleLeftEye() {
    this.showLeftEye = !this.showLeftEye;
    const leftWorstRefractionControl = this.examForm.get("worstRefractionLeft");
    if (this.showLeftEye) {
      leftWorstRefractionControl?.setValidators([Validators.required]);
    } else {
      leftWorstRefractionControl?.clearValidators();
      leftWorstRefractionControl?.reset("");
    }
    leftWorstRefractionControl?.updateValueAndValidity();
    if (!this.showLeftEye) {
      const leftEyeRefractions = this.examForm.get("leftEye.refractions");
      while (leftEyeRefractions.length)
        leftEyeRefractions.removeAt(0);
    }
  }
  toggleRightEye() {
    this.showRightEye = !this.showRightEye;
    const rightWorstRefractionControl = this.examForm.get("worstRefractionRight");
    if (this.showRightEye) {
      rightWorstRefractionControl?.setValidators([Validators.required]);
    } else {
      rightWorstRefractionControl?.clearValidators();
      rightWorstRefractionControl?.reset("");
      const rightEyeRefractions = this.examForm.get("rightEye.refractions");
      while (rightEyeRefractions.length) {
        rightEyeRefractions.removeAt(0);
      }
    }
    rightWorstRefractionControl?.updateValueAndValidity();
  }
  // ---------------------- REFRACTIONS ----------------------
  addRefraction(eye) {
    const refractions = this.examForm.get(`${eye}.refractions`);
    const newRefraction = this.fb.group({
      refractionTypeID: [null, Validators.required],
      refractionValue: [null, Validators.required]
    });
    refractions.push(newRefraction);
  }
  removeRefraction(eye, index) {
    const refractions = this.examForm.get(`${eye}.refractions`);
    refractions.removeAt(index);
  }
  getRefractions(eye) {
    return this.examForm.get(`${eye}.refractions`);
  }
  // ---------------------- SUBMIT ----------------------
  onSubmit() {
    if (this.examForm.invalid) {
      this.toastr.warning("\u26A0\uFE0F \u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error("\u274C \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0628\u064A\u0628", "\u062E\u0637\u0623");
      return;
    }
    const leftEyeRefractions = this.examForm.get("leftEye.refractions").value;
    const rightEyeRefractions = this.examForm.get("rightEye.refractions").value;
    this.examService.getByFileNumber(this.applicantFileNumber).subscribe({
      next: (res) => {
        const existingExamID = res.data?.eyeExamID ?? null;
        if (res.succeeded && existingExamID) {
          this.updateEyeExam(existingExamID, doctorID, leftEyeRefractions, rightEyeRefractions);
        } else {
          this.createEyeExam(doctorID, leftEyeRefractions, rightEyeRefractions);
        }
      },
      error: () => {
        this.toastr.error("\u274C \u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0633\u0627\u0628\u0642", "\u062E\u0637\u0623");
      }
    });
  }
  // ---------------- CREATE & UPDATE ----------------
  createEyeExam(doctorID, leftEyeRefractions, rightEyeRefractions) {
    const examData = this.buildExamData(doctorID);
    this.loading = true;
    this.examService.createEyeExam(examData).subscribe({
      next: (response) => {
        if (!response.succeeded) {
          this.loading = false;
          this.toastr.error("\u274C \u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
          return;
        }
        const newExamID = response.data?.eyeExamID;
        if (newExamID) {
          this.handleExamResponse(response.data, leftEyeRefractions, rightEyeRefractions, false);
        } else {
          this.loading = false;
          this.toastr.error("\u274C \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u0628\u0639\u062F \u0627\u0644\u0625\u0646\u0634\u0627\u0621", "\u062E\u0637\u0623");
        }
      },
      error: (error) => this.handleExamError(error)
    });
  }
  updateEyeExam(examId, doctorID, leftEyeRefractions, rightEyeRefractions) {
    const examData = __spreadProps(__spreadValues({}, this.buildExamData(doctorID)), { eyeExamID: examId });
    this.loading = true;
    this.examService.updateEyeExam(examId, examData).subscribe({
      next: (response) => {
        if (!response.succeeded) {
          this.loading = false;
          this.toastr.error("\u274C \u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
          return;
        }
        this.handleExamResponse({ eyeExamID: examId }, leftEyeRefractions, rightEyeRefractions, true);
      },
      error: (error) => this.handleExamError(error)
    });
  }
  // ---------------- BUILD EXAM DATA ----------------
  buildExamData(doctorID) {
    return {
      applicantFileNumber: this.applicantFileNumber,
      doctorID,
      vision: this.examForm.value.vision?.toString() || "",
      visionLeft: this.examForm.value.visionLeft?.toString() || "",
      colorTestLeft: resolveHealthStatusValue(this.examForm.value.colorTestLeft, this.examForm.value.colorTestLeftOther).trim(),
      colorTest: resolveHealthStatusValue(this.examForm.value.colorTest, this.examForm.value.colorTestOther).trim(),
      refractiveError: this.examForm.value.refractiveError?.trim() || "",
      // للتوافق مع البيانات القديمة
      worstRefractionRight: this.examForm.value.worstRefractionRight?.trim() || "",
      worstRefractionLeft: this.examForm.value.worstRefractionLeft?.trim() || "",
      otherDiseases: (this.examForm.value.otherDiseases || "").trim(),
      resultID: Number(this.examForm.value.resultID) || 0,
      reason: (this.examForm.value.reason || "").trim()
    };
  }
  // ---------------------- HANDLE RESPONSE ----------------------
  handleExamResponse(examData, leftEyeRefractions, rightEyeRefractions, isUpdate) {
    const examId = examData.eyeExamID;
    const newRefractions = [];
    const validLeft = leftEyeRefractions.filter((r) => r.refractionTypeID && r.refractionValue !== null);
    const validRight = rightEyeRefractions.filter((r) => r.refractionTypeID && r.refractionValue !== null);
    validLeft.forEach((r) => newRefractions.push({ refractionTypeID: +r.refractionTypeID, refractionValue: +r.refractionValue, isLeft: true, eyeExamID: examId }));
    validRight.forEach((r) => newRefractions.push({ refractionTypeID: +r.refractionTypeID, refractionValue: +r.refractionValue, isLeft: false, eyeExamID: examId }));
    if (newRefractions.length === 0) {
      this.toastr.success(isUpdate ? "\u2705 \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635 \u0628\u0646\u062C\u0627\u062D" : "\u2705 \u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0628\u0646\u062C\u0627\u062D");
      this.resetForm();
      if (!isUpdate) {
        this.examAdded.emit();
      }
      return;
    }
    forkJoin(newRefractions.map((r) => this.examService.addRefraction(r))).subscribe({
      next: (responses) => {
        const failed = responses.filter((r) => !r.succeeded);
        if (failed.length) {
          this.toastr.error(`\u274C \u0641\u0634\u0644 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 ${failed.length} \u0627\u0646\u0643\u0633\u0627\u0631`, "\u062E\u0637\u0623");
        } else {
          this.toastr.success(isUpdate ? "\u2705 \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D" : "\u2705 \u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D");
          if (!isUpdate) {
            this.examAdded.emit();
          }
        }
        this.resetForm();
      },
      error: () => {
        this.toastr.error("\u274C \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A", "\u062E\u0637\u0623");
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  handleExamError(error) {
    this.loading = false;
    let errorMessage = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635";
    if (error.error?.errors?.detail) {
      const details = error.error.errors.detail;
      errorMessage = Array.isArray(details) ? details.join(", ") : details;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }
    this.toastr.error(`\u274C ${errorMessage}`, "\u062E\u0637\u0623");
  }
  // ---------------------- RESET ----------------------
  resetForm() {
    this.examForm.reset({
      vision: "",
      visionLeft: "",
      colorTest: "\u0633\u0644\u064A\u0645",
      colorTestOther: "",
      colorTestLeft: "\u0633\u0644\u064A\u0645",
      colorTestLeftOther: "",
      refractiveError: "",
      worstRefractionRight: "",
      worstRefractionLeft: "",
      otherDiseases: "",
      resultID: null,
      reason: ""
    });
    const leftEyeRefractions = this.examForm.get("leftEye.refractions");
    const rightEyeRefractions = this.examForm.get("rightEye.refractions");
    while (leftEyeRefractions.length) {
      leftEyeRefractions.removeAt(0);
    }
    while (rightEyeRefractions.length) {
      rightEyeRefractions.removeAt(0);
    }
    this.showLeftEye = false;
    this.showRightEye = true;
    this.loading = false;
    this.closeModal();
  }
  // ---------------------- VALIDATION HELPERS ----------------------
  getErrorMessage(controlName) {
    const control = this.examForm.get(controlName);
    if (control?.invalid && control?.touched) {
      if (control.errors?.["required"]) {
        return "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
      }
      if (controlName === "vision" || controlName === "visionLeft") {
        if (control.errors?.["min"] || control.errors?.["max"]) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u064A\u0646 0 \u0648 10";
        }
      }
    }
    return "";
  }
  isFieldValid(controlName) {
    const control = this.examForm.get(controlName);
    return !!(control?.valid && control?.touched);
  }
  isFieldInvalid(controlName) {
    const control = this.examForm.get(controlName);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function EyeExamForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeExamForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeExamForm, selectors: [["app-eye-exam-form"]], inputs: { applicantFileNumber: "applicantFileNumber" }, outputs: { examAdded: "examAdded" }, decls: 79, vars: 33, consts: [["title", "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A", "subtitle", "\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A \u0628\u0634\u0643\u0644 \u0643\u0627\u0645\u0644", "icon", "pi pi-eye", "width", "90rem", 3, "visibleChange", "hide", "visible", "useDefaultFooter"], ["novalidate", "", 1, "exam-form", 3, "formGroup"], [1, "section-title"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "number", "formControlName", "vision", "placeholder", "\u0623\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0645\u0646 0 \u0625\u0644\u0649 10", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "number", "formControlName", "visionLeft", "placeholder", "\u0623\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0645\u0646 0 \u0625\u0644\u0649 10", 1, "form-control"], [1, "section-title", "mt-4"], [1, "form-label", "mb-2"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "form-check", "form-check-inline"], [1, "mt-2"], [1, "eye-toggle-actions"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-3", 3, "click"], [1, "card", "mt-3"], [1, "row", "g-3", "mt-3"], [1, "col-12"], ["formControlName", "otherDiseases", "rows", "3", 1, "form-control"], ["formControlName", "resultID", 1, "form-select"], [3, "value"], ["formControlName", "reason", "rows", "2", 1, "form-control"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "\u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A", "icon", "pi pi-save", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "invalid-feedback", "d-block"], [1, "pi", "pi-exclamation-circle", "me-1"], ["type", "radio", "formControlName", "colorTest", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], ["type", "text", "formControlName", "colorTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "radio", "formControlName", "colorTestLeft", 1, "form-check-input", 3, "id", "value"], ["type", "text", "formControlName", "colorTestLeftOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], [1, "refraction-choice-group"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightNotImportant", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightNotImportant", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightImportant", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightImportant", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftNotImportant", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftNotImportant", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftImportant", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftImportant", 1, "form-check-label"], [1, "card-header"], [1, "mb-0"], ["formGroupName", "rightEye", 1, "card-body"], ["formArrayName", "refractions", 1, "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "pi", "pi-plus"], [1, "card", "mb-3", 3, "formGroupName"], [1, "text-muted", "small"], [1, "card-body"], [1, "col-md-5"], ["formControlName", "refractionTypeID", 1, "form-select"], ["type", "number", "formControlName", "refractionValue", 1, "form-control"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-danger", "mt-4", 3, "click"], [1, "pi", "pi-trash"], ["formGroupName", "leftEye", 1, "card-body"]], template: function EyeExamForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275twoWayListener("visibleChange", function EyeExamForm_Template_app_dialog_wrapper_visibleChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showModal, $event) || (ctx.showModal = $event);
        return $event;
      });
      \u0275\u0275listener("hide", function EyeExamForm_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "form", 1)(2, "h6", 2);
      \u0275\u0275text(3, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 (\u0645\u0646 0 \u0625\u0644\u0649 10)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
      \u0275\u0275text(7, "R: ");
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275template(11, EyeExamForm_div_11_Template, 3, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 4)(13, "label", 5);
      \u0275\u0275text(14, "L: ");
      \u0275\u0275elementStart(15, "span", 6);
      \u0275\u0275text(16, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "input", 9);
      \u0275\u0275template(18, EyeExamForm_div_18_Template, 3, 1, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "h6", 10);
      \u0275\u0275text(20, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 3)(22, "div", 4)(23, "label", 11);
      \u0275\u0275text(24, "R: ");
      \u0275\u0275elementStart(25, "span", 6);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 12);
      \u0275\u0275repeaterCreate(28, EyeExamForm_For_29_Template, 4, 4, "div", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, EyeExamForm_Conditional_30_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 4)(32, "label", 11);
      \u0275\u0275text(33, "L: ");
      \u0275\u0275elementStart(34, "span", 6);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 12);
      \u0275\u0275repeaterCreate(37, EyeExamForm_For_38_Template, 4, 4, "div", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, EyeExamForm_Conditional_39_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "h6", 10);
      \u0275\u0275text(41, "\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 3);
      \u0275\u0275conditionalCreate(43, EyeExamForm_Conditional_43_Template, 15, 5, "div", 4);
      \u0275\u0275conditionalCreate(44, EyeExamForm_Conditional_44_Template, 15, 5, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 15)(46, "button", 16);
      \u0275\u0275listener("click", function EyeExamForm_Template_button_click_46_listener() {
        return ctx.toggleRightEye();
      });
      \u0275\u0275element(47, "i");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 16);
      \u0275\u0275listener("click", function EyeExamForm_Template_button_click_49_listener() {
        return ctx.toggleLeftEye();
      });
      \u0275\u0275element(50, "i");
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(52, EyeExamForm_Conditional_52_Template, 15, 1, "div", 17);
      \u0275\u0275conditionalCreate(53, EyeExamForm_Conditional_53_Template, 15, 1, "div", 17);
      \u0275\u0275elementStart(54, "div", 18)(55, "div", 19)(56, "label", 5);
      \u0275\u0275text(57, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "textarea", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "h6", 10);
      \u0275\u0275text(60, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 3)(62, "div", 4)(63, "label", 11);
      \u0275\u0275text(64, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
      \u0275\u0275elementStart(65, "span", 6);
      \u0275\u0275text(66, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "select", 21);
      \u0275\u0275repeaterCreate(68, EyeExamForm_For_69_Template, 2, 2, "option", 22, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, EyeExamForm_div_70_Template, 3, 1, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 18)(72, "div", 19)(73, "label", 5);
      \u0275\u0275text(74, "\u0627\u0644\u0633\u0628\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "textarea", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 24)(77, "p-button", 25);
      \u0275\u0275listener("onClick", function EyeExamForm_Template_p_button_onClick_77_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p-button", 26);
      \u0275\u0275listener("onClick", function EyeExamForm_Template_p_button_onClick_78_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_6_0;
      let tmp_10_0;
      let tmp_12_0;
      let tmp_21_0;
      \u0275\u0275twoWayProperty("visible", ctx.showModal);
      \u0275\u0275property("useDefaultFooter", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx.examForm.get("vision")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.examForm.get("vision")) == null ? null : tmp_3_0.touched))("is-valid", ctx.isFieldValid("vision"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("vision"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx.examForm.get("visionLeft")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.examForm.get("visionLeft")) == null ? null : tmp_6_0.touched))("is-valid", ctx.isFieldValid("visionLeft"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("visionLeft"));
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.healthStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_10_0 = ctx.examForm.get("colorTest")) == null ? null : tmp_10_0.value) === ctx.otherOptionValue ? 30 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.healthStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_12_0 = ctx.examForm.get("colorTestLeft")) == null ? null : tmp_12_0.value) === ctx.otherOptionValue ? 39 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showRightEye ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showLeftEye ? 44 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.showRightEye ? "pi pi-eye-slash" : "pi pi-eye");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showRightEye ? "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649" : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649", " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.showLeftEye ? "pi pi-eye-slash" : "pi pi-eye");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showLeftEye ? "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649" : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRightEye ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showLeftEye ? 53 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275classProp("is-invalid", ((tmp_21_0 = ctx.examForm.get("resultID")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx.examForm.get("resultID")) == null ? null : tmp_21_0.touched))("is-valid", ctx.isFieldValid("resultID"));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.results);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.getErrorMessage("resultID"));
      \u0275\u0275advance(7);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.examForm.invalid || ctx.loading);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CommonModule, NgIf, DialogWrapperComponent, ButtonModule, Button], styles: ["\n\n.exam-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(5, 66, 57, 0.14);\n  border-radius: 12px;\n  box-shadow: none;\n}\n.card-header[_ngcontent-%COMP%] {\n  background: rgba(5, 66, 57, 0.05);\n  border-bottom: 1px solid rgba(5, 66, 57, 0.1);\n}\n.input-group-q[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  flex-direction: row-reverse;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.input-group-q[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.input-group-q[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border: 0;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.eye-toggle-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.refraction-choice-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=eye-exam-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeExamForm, [{
    type: Component,
    args: [{ selector: "app-eye-exam-form", standalone: true, imports: [ReactiveFormsModule, CommonModule, DialogWrapperComponent, ButtonModule], template: `<app-dialog-wrapper\r
  [(visible)]="showModal"\r
  title="\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A"\r
  subtitle="\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A \u0628\u0634\u0643\u0644 \u0643\u0627\u0645\u0644"\r
  icon="pi pi-eye"\r
  width="90rem"\r
  [useDefaultFooter]="false"\r
  (hide)="closeModal()">\r
  <form [formGroup]="examForm" novalidate class="exam-form">\r
      <!-- \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 -->\r
      <h6 class="section-title">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 (\u0645\u0646 0 \u0625\u0644\u0649 10)</h6>\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <label class="form-label">R: <span class="text-danger">*</span></label>\r
          <input\r
            type="number"\r
            class="form-control"\r
            formControlName="vision"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0645\u0646 0 \u0625\u0644\u0649 10"\r
            [class.is-invalid]="examForm.get('vision')?.invalid && examForm.get('vision')?.touched"\r
            [class.is-valid]="isFieldValid('vision')" />\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('vision')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('vision') }}\r
          </div>\r
        </div>\r
\r
        <div class="col-md-6">\r
          <label class="form-label">L: <span class="text-danger">*</span></label>\r
          <input\r
            type="number"\r
            class="form-control"\r
            formControlName="visionLeft"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0645\u0646 0 \u0625\u0644\u0649 10"\r
            [class.is-invalid]="examForm.get('visionLeft')?.invalid && examForm.get('visionLeft')?.touched"\r
            [class.is-valid]="isFieldValid('visionLeft')" />\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('visionLeft')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('visionLeft') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <h6 class="section-title mt-4">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646</h6>\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">R: <span class="text-danger">*</span></label>\r
          <div class="d-flex flex-wrap gap-3">\r
            @for (option of healthStatusOptions; track option.value; let i = $index) {\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="colorTest" [id]="'colorTest_' + i"\r
                [value]="option.value" />\r
              <label class="form-check-label" [for]="'colorTest_' + i">{{ option.label }}</label>\r
            </div>\r
            }\r
          </div>\r
          @if (examForm.get('colorTest')?.value === otherOptionValue) {\r
          <div class="mt-2">\r
            <input type="text" class="form-control" formControlName="colorTestOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644" />\r
          </div>\r
          }\r
        </div>\r
\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">L: <span class="text-danger">*</span></label>\r
          <div class="d-flex flex-wrap gap-3">\r
            @for (option of healthStatusOptions; track option.value; let i = $index) {\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="colorTestLeft" [id]="'colorTestLeft_' + i"\r
                [value]="option.value" />\r
              <label class="form-check-label" [for]="'colorTestLeft_' + i">{{ option.label }}</label>\r
            </div>\r
            }\r
          </div>\r
          @if (examForm.get('colorTestLeft')?.value === otherOptionValue) {\r
          <div class="mt-2">\r
            <input type="text" class="form-control" formControlName="colorTestLeftOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644" />\r
          </div>\r
          }\r
        </div>\r
      </div>\r
\r
      <h6 class="section-title mt-4">\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</h6>\r
      <div class="row g-3">\r
        @if (showRightEye) {\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="refraction-choice-group">\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionRight"\r
                id="worstRefractionRightNotImportant" value="\u063A\u064A\u0631 \u0645\u0647\u0645\u0629"\r
                [class.is-invalid]="examForm.get('worstRefractionRight')?.invalid && examForm.get('worstRefractionRight')?.touched" />\r
              <label class="form-check-label" for="worstRefractionRightNotImportant">\u063A\u064A\u0631 \u0645\u0647\u0645\u0629</label>\r
            </div>\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionRight"\r
                id="worstRefractionRightImportant" value="\u0645\u0647\u0645\u0629"\r
                [class.is-invalid]="examForm.get('worstRefractionRight')?.invalid && examForm.get('worstRefractionRight')?.touched" />\r
              <label class="form-check-label" for="worstRefractionRightImportant">\u0645\u0647\u0645\u0629</label>\r
            </div>\r
          </div>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('worstRefractionRight')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('worstRefractionRight') }}\r
          </div>\r
        </div>\r
        }\r
        @if (showLeftEye) {\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="refraction-choice-group">\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionLeft"\r
                id="worstRefractionLeftNotImportant" value="\u063A\u064A\u0631 \u0645\u0647\u0645\u0629"\r
                [class.is-invalid]="examForm.get('worstRefractionLeft')?.invalid && examForm.get('worstRefractionLeft')?.touched" />\r
              <label class="form-check-label" for="worstRefractionLeftNotImportant">\u063A\u064A\u0631 \u0645\u0647\u0645\u0629</label>\r
            </div>\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionLeft"\r
                id="worstRefractionLeftImportant" value="\u0645\u0647\u0645\u0629"\r
                [class.is-invalid]="examForm.get('worstRefractionLeft')?.invalid && examForm.get('worstRefractionLeft')?.touched" />\r
              <label class="form-check-label" for="worstRefractionLeftImportant">\u0645\u0647\u0645\u0629</label>\r
            </div>\r
          </div>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('worstRefractionLeft')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('worstRefractionLeft') }}\r
          </div>\r
        </div>\r
        }\r
      </div>\r
\r
      <div class="eye-toggle-actions">\r
        <button type="button" class="btn btn-outline-primary mt-3" (click)="toggleRightEye()">\r
          <i [class]="showRightEye ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>\r
          {{ showRightEye ? '\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649' }}\r
        </button>\r
\r
        <button type="button" class="btn btn-outline-primary mt-3" (click)="toggleLeftEye()">\r
          <i [class]="showLeftEye ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>\r
          {{ showLeftEye ? '\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649' }}\r
        </button>\r
      </div>\r
\r
      <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 -->\r
      @if (showRightEye) {\r
      <div class="card mt-3">\r
        <div class="card-header">\r
          <h6 class="mb-0">\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</h6>\r
        </div>\r
        <div class="card-body" formGroupName="rightEye">\r
          <!-- \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A -->\r
          <div class="mb-3" formArrayName="refractions">\r
            <div class="d-flex justify-content-between align-items-center mb-3">\r
              <h6 class="mb-0">\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A</h6>\r
              <button type="button" class="btn btn-sm btn-outline-primary" (click)="addRefraction('rightEye')">\r
                <i class="pi pi-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631\r
              </button>\r
            </div>\r
\r
            @for (refraction of getRefractions('rightEye').controls; track i; let i = $index) {\r
            <div class="card mb-3" [formGroupName]="i">\r
              <div class="card-body">\r
                <div class="row g-3">\r
                  <div class="col-md-5">\r
                    <label class="form-label">\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
                    <select class="form-select" formControlName="refractionTypeID">\r
                      @for (type of refractionTypes; track type.refractionTypeID) {\r
                      <option [value]="type.refractionTypeID">\r
                        {{ type.description }}\r
                      </option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <div class="col-md-5">\r
                    <label class="form-label">\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
                    <input type="number" class="form-control" formControlName="refractionValue" />\r
                  </div>\r
\r
                  <div class="col-md-2">\r
                    <button type="button" class="btn btn-danger mt-4" (click)="removeRefraction('rightEye', i)">\r
                      <i class="pi pi-trash"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            }\r
\r
            @if (!getRefractions('rightEye').length) {\r
            <div class="text-muted small">\r
              \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631.\r
            </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
      }\r
\r
      <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
      @if (showLeftEye) {\r
      <div class="card mt-3">\r
        <div class="card-header">\r
          <h6 class="mb-0">\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</h6>\r
        </div>\r
        <div class="card-body" formGroupName="leftEye">\r
          <!-- \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A -->\r
          <div class="mb-3" formArrayName="refractions">\r
            <div class="d-flex justify-content-between align-items-center mb-3">\r
              <h6 class="mb-0">\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A</h6>\r
              <button type="button" class="btn btn-sm btn-outline-primary" (click)="addRefraction('leftEye')">\r
                <i class="pi pi-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631\r
              </button>\r
            </div>\r
\r
            @for (refraction of getRefractions('leftEye').controls; track i; let i = $index) {\r
            <div class="card mb-3" [formGroupName]="i">\r
              <div class="card-body">\r
                <div class="row g-3">\r
                  <div class="col-md-5">\r
                    <label class="form-label">\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
                    <select class="form-select" formControlName="refractionTypeID">\r
                      @for (type of refractionTypes; track type.refractionTypeID) {\r
                      <option [value]="type.refractionTypeID">\r
                        {{ type.description }}\r
                      </option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <div class="col-md-5">\r
                    <label class="form-label">\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
                    <input type="number" class="form-control" formControlName="refractionValue" />\r
                  </div>\r
\r
                  <div class="col-md-2">\r
                    <button type="button" class="btn btn-danger mt-4" (click)="removeRefraction('leftEye', i)">\r
                      <i class="pi pi-trash"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            }\r
\r
            @if (!getRefractions('leftEye').length) {\r
            <div class="text-muted small">\r
              \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631.\r
            </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
      }\r
\r
      <div class="row g-3 mt-3">\r
        <div class="col-12">\r
          <label class="form-label">\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649</label>\r
          <textarea class="form-control" formControlName="otherDiseases" rows="3"></textarea>\r
        </div>\r
      </div>\r
\r
      <h6 class="section-title mt-4">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">\u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="text-danger">*</span></label>\r
          <select class="form-select" formControlName="resultID" [class.is-invalid]="\r
                examForm.get('resultID')?.invalid && examForm.get('resultID')?.touched\r
              " [class.is-valid]="isFieldValid('resultID')">\r
            @for (r of results; track r.resultID) {\r
            <option [value]="r.resultID">\r
              {{ r.description }}\r
            </option>\r
            }\r
          </select>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('resultID')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('resultID') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="row g-3 mt-3">\r
        <div class="col-12">\r
          <label class="form-label">\u0627\u0644\u0633\u0628\u0628</label>\r
          <textarea class="form-control" formControlName="reason" rows="2"></textarea>\r
        </div>\r
      </div>\r
  </form>\r
\r
  <div dialog-footer class="dialog-actions">\r
    <p-button\r
      label="\u0625\u0644\u063A\u0627\u0621"\r
      icon="pi pi-times"\r
      severity="secondary"\r
      [outlined]="true"\r
      (onClick)="closeModal()"></p-button>\r
    <p-button\r
      label="\u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [loading]="loading"\r
      [disabled]="examForm.invalid || loading"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</app-dialog-wrapper>`, styles: ["/* src/app/features/doctor/components/eye-doctor.component/eye-exam-form/eye-exam-form.scss */\n.exam-form {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.card {\n  border: 1px solid rgba(5, 66, 57, 0.14);\n  border-radius: 12px;\n  box-shadow: none;\n}\n.card-header {\n  background: rgba(5, 66, 57, 0.05);\n  border-bottom: 1px solid rgba(5, 66, 57, 0.1);\n}\n.input-group-q {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  flex-direction: row-reverse;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.input-group-q .form-control,\n.input-group-q .input-group-text {\n  border: 0;\n}\n.form-control,\n.form-select {\n  border-radius: 10px;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.eye-toggle-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.refraction-choice-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=eye-exam-form.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], examAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeExamForm, { className: "EyeExamForm", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-exam-form/eye-exam-form.ts", lineNumber: 23 });
})();

// src/app/features/doctor/components/eye-doctor.component/eye-doctor.component.ts
function EyeDoctorComponent_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275element(1, "span", 17);
    \u0275\u0275text(2, " \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0648\u062C\u0648\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642... ");
    \u0275\u0275elementEnd();
  }
}
function EyeDoctorComponent_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0639\u064A\u0646\u064A \u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
  }
}
function EyeDoctorComponent_div_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
  }
}
function EyeDoctorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275template(7, EyeDoctorComponent_div_4_span_7_Template, 3, 0, "span", 13)(8, EyeDoctorComponent_div_4_span_8_Template, 3, 0, "span", 14)(9, EyeDoctorComponent_div_4_span_9_Template, 3, 0, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedApplicant.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx_r0.selectedApplicant.fileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.checkingEyeExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkingEyeExam && ctx_r0.hasEyeExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkingEyeExam && !ctx_r0.hasEyeExam);
  }
}
function EyeDoctorComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function EyeDoctorComponent_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addEyeExam());
    });
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0639\u064A\u0646\u064A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275listener("click", function EyeDoctorComponent_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addConsultation());
    });
    \u0275\u0275element(5, "i", 25);
    \u0275\u0275text(6, " \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function EyeDoctorComponent_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addInvestigation());
    });
    \u0275\u0275element(8, "i", 26);
    \u0275\u0275text(9, " \u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.checkingEyeExam || ctx_r0.hasEyeExam);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.checkingEyeExam);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.checkingEyeExam);
  }
}
function EyeDoctorComponent_app_eye_exam_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-eye-exam-form", 27);
    \u0275\u0275listener("examAdded", function EyeDoctorComponent_app_eye_exam_form_6_Template_app_eye_exam_form_examAdded_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEyeExamAdded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r0.selectedApplicant.fileNumber);
  }
}
function EyeDoctorComponent_app_consultation_form_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-consultation-form", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r0.selectedApplicant.fileNumber);
  }
}
function EyeDoctorComponent_app_investigation_form_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-investigation-form", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r0.selectedApplicant.fileNumber);
  }
}
var EyeDoctorComponent = class _EyeDoctorComponent {
  toastr;
  eyeExamService;
  selectedApplicant = null;
  hasEyeExam = false;
  // ✅ افتراضياً لا يوجد فحص حتى يتم التحقق
  checkingEyeExam = false;
  // ✅ حالة التحقق من وجود فحص
  eyeExamForm;
  consultationForm;
  investigationForm;
  constructor(toastr, eyeExamService) {
    this.toastr = toastr;
    this.eyeExamService = eyeExamService;
  }
  onApplicantSelected(applicant) {
    this.selectedApplicant = applicant;
    this.hasEyeExam = false;
    this.checkingEyeExam = true;
    if (!applicant?.fileNumber) {
      this.hasEyeExam = false;
      this.checkingEyeExam = false;
      return;
    }
    this.eyeExamService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (response) => {
        this.checkingEyeExam = false;
        const hasExam = !!(response?.succeeded && response.data !== null && response.data !== void 0 && response.data.eyeExamID !== null && response.data.eyeExamID !== void 0);
        this.hasEyeExam = hasExam;
      },
      error: () => {
        this.checkingEyeExam = false;
        this.hasEyeExam = false;
      }
    });
  }
  addEyeExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0631\u064A\u0636 \u0623\u0648\u0644\u0627\u064B");
      return;
    }
    if (this.hasEyeExam) {
      this.toastr.error("\u0627\u0644\u0645\u0631\u064A\u0636 \u0644\u062F\u064A\u0647 \u0641\u062D\u0635 \u0639\u064A\u0646\u064A \u0633\u0627\u0628\u0642 \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u062A\u0647 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649");
      return;
    }
    this.eyeExamForm.openModal();
  }
  addConsultation() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0631\u064A\u0636 \u0623\u0648\u0644\u0627\u064B");
      return;
    }
    this.consultationForm.openModal();
  }
  addInvestigation() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0631\u064A\u0636 \u0623\u0648\u0644\u0627\u064B");
      return;
    }
    this.investigationForm.openModal();
  }
  // ✅ تحديث حالة الفحص بعد إضافة فحص جديد
  onEyeExamAdded() {
    if (this.selectedApplicant?.fileNumber) {
      this.hasEyeExam = true;
    }
  }
  static \u0275fac = function EyeDoctorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeDoctorComponent)(\u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EyeExamService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeDoctorComponent, selectors: [["app-eye-doctor"]], viewQuery: function EyeDoctorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(EyeExamForm, 5);
      \u0275\u0275viewQuery(ConsultationFormComponent, 5);
      \u0275\u0275viewQuery(InvestigationForm, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.eyeExamForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.consultationForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.investigationForm = _t.first);
    }
  }, decls: 9, vars: 5, consts: [[1, "container", "eye-clinic-page"], ["variant", "banner", "title", "\u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0646\u064A\u0629", "subtitle", "\u0625\u062F\u0627\u0631\u0629 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0639\u064A\u0646 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0644\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646", "icon", "pi pi-eye"], [1, "search-panel", "mb-3"], [3, "applicantSelected"], ["class", "selected-applicant-card mb-3", 4, "ngIf"], ["class", "button-group me-3 mb-3 d-flex gap-2", 4, "ngIf"], [3, "applicantFileNumber", "examAdded", 4, "ngIf"], [3, "applicantFileNumber", 4, "ngIf"], [1, "selected-applicant-card", "mb-3"], [1, "applicant-info"], [1, "fw-semibold"], [1, "text-muted"], [1, "exam-status"], ["class", "status-chip status-chip--loading", 4, "ngIf"], ["class", "status-chip status-chip--exists", 4, "ngIf"], ["class", "status-chip status-chip--new", 4, "ngIf"], [1, "status-chip", "status-chip--loading"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "status-chip", "status-chip--exists"], [1, "pi", "pi-check-circle", "me-2"], [1, "status-chip", "status-chip--new"], [1, "pi", "pi-info-circle", "me-2"], [1, "button-group", "me-3", "mb-3", "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "action-btn", 3, "click", "disabled"], [1, "pi", "pi-plus-circle", "me-1"], [1, "pi", "pi-comments", "me-1"], [1, "pi", "pi-file-edit", "me-1"], [3, "examAdded", "applicantFileNumber"], [3, "applicantFileNumber"]], template: function EyeDoctorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-page-header", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-search-applicant", 3);
      \u0275\u0275listener("applicantSelected", function EyeDoctorComponent_Template_app_search_applicant_applicantSelected_3_listener($event) {
        return ctx.onApplicantSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, EyeDoctorComponent_div_4_Template, 10, 5, "div", 4)(5, EyeDoctorComponent_div_5_Template, 10, 3, "div", 5)(6, EyeDoctorComponent_app_eye_exam_form_6_Template, 1, 1, "app-eye-exam-form", 6)(7, EyeDoctorComponent_app_consultation_form_7_Template, 1, 1, "app-consultation-form", 7)(8, EyeDoctorComponent_app_investigation_form_8_Template, 1, 1, "app-investigation-form", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.selectedApplicant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedApplicant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedApplicant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedApplicant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedApplicant);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    PageHeaderComponent,
    SearchApplicantComponent,
    EyeExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.eye-clinic-page[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.search-panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ebeff5;\n  border-radius: 10px;\n  background: #fcfdff;\n  display: flex;\n  justify-content: center;\n}\n.search-panel[_ngcontent-%COMP%]   app-search-applicant[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]     .search-panel .search-applicant-container.container {\n  max-width: 100%;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n[_nghost-%COMP%]     .search-panel .search-applicant-container .col-md-8 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.selected-applicant-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9edf3;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #ffffff;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.status-chip--loading[_ngcontent-%COMP%] {\n  color: #6b5a00;\n  background: #fff9db;\n  border: 1px solid #f1df8a;\n}\n.status-chip--exists[_ngcontent-%COMP%] {\n  color: #0f5132;\n  background: #e9f7ef;\n  border: 1px solid #bfe7cf;\n}\n.status-chip--new[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background: #e7f8ff;\n  border: 1px solid #b8eaf7;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.action-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\n/*# sourceMappingURL=eye-doctor.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeDoctorComponent, [{
    type: Component,
    args: [{ selector: "app-eye-doctor", standalone: true, imports: [
      CommonModule,
      PageHeaderComponent,
      SearchApplicantComponent,
      EyeExamForm,
      ConsultationFormComponent,
      InvestigationForm
    ], template: '<div class="container  eye-clinic-page">\r\n  <app-page-header\r\n    variant="banner"\r\n    title="\u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0646\u064A\u0629"\r\n    subtitle="\u0625\u062F\u0627\u0631\u0629 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0639\u064A\u0646 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0644\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646"\r\n    icon="pi pi-eye">\r\n  </app-page-header>\r\n\r\n  <!-- \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0631\u064A\u0636 -->\r\n  <div class="search-panel mb-3">\r\n    <app-search-applicant (applicantSelected)="onApplicantSelected($event)"></app-search-applicant>\r\n  </div>\r\n\r\n  <div *ngIf="selectedApplicant" class="selected-applicant-card mb-3">\r\n    <div class="applicant-info">\r\n      <div class="fw-semibold">{{ selectedApplicant.fullName }}</div>\r\n      <small class="text-muted">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ selectedApplicant.fileNumber }}</small>\r\n    </div>\r\n\r\n    <div class="exam-status">\r\n      <span *ngIf="checkingEyeExam" class="status-chip status-chip--loading">\r\n        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r\n        \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0648\u062C\u0648\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642...\r\n      </span>\r\n      <span *ngIf="!checkingEyeExam && hasEyeExam" class="status-chip status-chip--exists">\r\n        <i class="pi pi-check-circle me-2"></i>\r\n        \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0639\u064A\u0646\u064A \u0633\u0627\u0628\u0642\r\n      </span>\r\n      <span *ngIf="!checkingEyeExam && !hasEyeExam" class="status-chip status-chip--new">\r\n        <i class="pi pi-info-circle me-2"></i>\r\n        \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 -->\r\n  <div *ngIf="selectedApplicant" class="button-group me-3 mb-3 d-flex gap-2">\r\n    <button\r\n      class="btn btn-outline-primary action-btn"\r\n      [disabled]="checkingEyeExam || hasEyeExam"\r\n      (click)="addEyeExam()">\r\n      <i class="pi pi-plus-circle me-1"></i>\r\n      \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0639\u064A\u0646\u064A\r\n    </button>\r\n\r\n    <button class="btn btn-outline-primary action-btn" [disabled]="checkingEyeExam" (click)="addConsultation()">\r\n      <i class="pi pi-comments me-1"></i>\r\n      \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629\r\n    </button>\r\n    <button class="btn btn-outline-primary action-btn" [disabled]="checkingEyeExam" (click)="addInvestigation()">\r\n      <i class="pi pi-file-edit me-1"></i>\r\n      \u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644\r\n    </button>\r\n  </div>\r\n\r\n  <!-- \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A -->\r\n  <app-eye-exam-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber"\r\n    (examAdded)="onEyeExamAdded()">\r\n  </app-eye-exam-form>\r\n\r\n  <app-consultation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-consultation-form>\r\n\r\n  <app-investigation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-investigation-form>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/eye-doctor.component/eye-doctor.component.scss */\n.container {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.container {\n  max-width: 100%;\n  width: 100%;\n}\n.eye-clinic-page {\n  direction: rtl;\n}\n.search-panel {\n  padding: 10px;\n  border: 1px solid #ebeff5;\n  border-radius: 10px;\n  background: #fcfdff;\n  display: flex;\n  justify-content: center;\n}\n.search-panel app-search-applicant {\n  width: 50%;\n}\n:host ::ng-deep .search-panel .search-applicant-container.container {\n  max-width: 100%;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n:host ::ng-deep .search-panel .search-applicant-container .col-md-8 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.selected-applicant-card {\n  border: 1px solid #e9edf3;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #ffffff;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.status-chip--loading {\n  color: #6b5a00;\n  background: #fff9db;\n  border: 1px solid #f1df8a;\n}\n.status-chip--exists {\n  color: #0f5132;\n  background: #e9f7ef;\n  border: 1px solid #bfe7cf;\n}\n.status-chip--new {\n  color: #0c5460;\n  background: #e7f8ff;\n  border: 1px solid #b8eaf7;\n}\n.button-group {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.action-btn[disabled] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton.btn-outline-primary {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\n/*# sourceMappingURL=eye-doctor.component.css.map */\n'] }]
  }], () => [{ type: ToastrService }, { type: EyeExamService }], { eyeExamForm: [{
    type: ViewChild,
    args: [EyeExamForm]
  }], consultationForm: [{
    type: ViewChild,
    args: [ConsultationFormComponent]
  }], investigationForm: [{
    type: ViewChild,
    args: [InvestigationForm]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeDoctorComponent, { className: "EyeDoctorComponent", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-doctor.component.ts", lineNumber: 27 });
})();
export {
  EyeDoctorComponent
};
//# sourceMappingURL=chunk-KVO7MMXD.js.map
