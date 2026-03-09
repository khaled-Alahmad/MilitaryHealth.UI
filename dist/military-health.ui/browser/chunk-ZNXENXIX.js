import {
  PageHeaderComponent
} from "./chunk-JQ4Y5HNR.js";
import {
  ConsultationFormComponent,
  InvestigationForm
} from "./chunk-IJQEK7MB.js";
import {
  SearchApplicantComponent
} from "./chunk-GCJ6OPYG.js";
import "./chunk-5TBOZ7YP.js";
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
import "./chunk-SXOA2P4M.js";
import "./chunk-R2DZOQST.js";
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
} from "./chunk-JZZQ7XWY.js";
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
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/eye-doctor.component/eye-exam-form/eye-exam-form.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.resultID;
var _forTrack2 = ($index, $item) => $item.refractionTypeID;
function EyeExamForm_Conditional_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("vision"), " ");
  }
}
function EyeExamForm_Conditional_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("visionLeft"), " ");
  }
}
function EyeExamForm_Conditional_0_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "input", 56);
    \u0275\u0275elementStart(2, "label", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const \u0275$index_81_r4 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTest_" + \u0275$index_81_r4)("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTest_" + \u0275$index_81_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
function EyeExamForm_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "input", 58);
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "input", 59);
    \u0275\u0275elementStart(2, "label", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const \u0275$index_104_r6 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTestLeft_" + \u0275$index_104_r6)("value", option_r5.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTestLeft_" + \u0275$index_104_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r5.label);
  }
}
function EyeExamForm_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "input", 60);
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("worstRefractionRight"), " ");
  }
}
function EyeExamForm_Conditional_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("worstRefractionLeft"), " ");
  }
}
function EyeExamForm_Conditional_0_For_98_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
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
function EyeExamForm_Conditional_0_For_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 61)(2, "div", 8)(3, "div", 62)(4, "label", 10);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 63);
    \u0275\u0275repeaterCreate(9, EyeExamForm_Conditional_0_For_98_For_10_Template, 2, 2, "option", 46, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 62)(12, "label", 10);
    \u0275\u0275text(13, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 65)(18, "button", 66);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_For_98_Template_button_click_18_listener() {
      const \u0275$index_205_r9 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeRefraction("rightEye", \u0275$index_205_r9));
    });
    \u0275\u0275element(19, "i", 67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const \u0275$index_205_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_205_r9);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.refractionTypes);
  }
}
function EyeExamForm_Conditional_0_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_0_Conditional_103_For_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
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
function EyeExamForm_Conditional_0_Conditional_103_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 61)(2, "div", 8)(3, "div", 62)(4, "label", 10);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 63);
    \u0275\u0275repeaterCreate(9, EyeExamForm_Conditional_0_Conditional_103_For_13_For_10_Template, 2, 2, "option", 46, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 62)(12, "label", 10);
    \u0275\u0275text(13, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 65)(18, "button", 66);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Conditional_103_For_13_Template_button_click_18_listener() {
      const \u0275$index_273_r13 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeRefraction("leftEye", \u0275$index_273_r13));
    });
    \u0275\u0275element(19, "i", 67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const \u0275$index_273_r13 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", \u0275$index_273_r13);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.refractionTypes);
  }
}
function EyeExamForm_Conditional_0_Conditional_103_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EyeExamForm_Conditional_0_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "h6", 33);
    \u0275\u0275text(3, "\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 68)(5, "div", 35)(6, "div", 36)(7, "h6", 33);
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 37);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Conditional_103_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addRefraction("leftEye"));
    });
    \u0275\u0275element(10, "i", 38);
    \u0275\u0275text(11, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, EyeExamForm_Conditional_0_Conditional_103_For_13_Template, 20, 1, "div", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, EyeExamForm_Conditional_0_Conditional_103_Conditional_14_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.getRefractions("leftEye").controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.getRefractions("leftEye").length ? 14 : -1);
  }
}
function EyeExamForm_Conditional_0_For_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
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
function EyeExamForm_Conditional_0_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("resultID"), " ");
  }
}
function EyeExamForm_Conditional_0_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function EyeExamForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 3);
    \u0275\u0275text(4, "\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "form", 6)(8, "h6", 7);
    \u0275\u0275text(9, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "R: ");
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275element(17, "input", 13);
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275text(19, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, EyeExamForm_Conditional_0_div_20_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 9)(22, "label", 10);
    \u0275\u0275text(23, "L: ");
    \u0275\u0275elementStart(24, "span", 11);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275elementStart(28, "span", 14);
    \u0275\u0275text(29, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, EyeExamForm_Conditional_0_div_30_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "h6", 17);
    \u0275\u0275text(32, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 8)(34, "div", 9)(35, "label", 18);
    \u0275\u0275text(36, "R: ");
    \u0275\u0275elementStart(37, "span", 11);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 19);
    \u0275\u0275repeaterCreate(40, EyeExamForm_Conditional_0_For_41_Template, 4, 4, "div", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(42, EyeExamForm_Conditional_0_Conditional_42_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 9)(44, "label", 18);
    \u0275\u0275text(45, "L: ");
    \u0275\u0275elementStart(46, "span", 11);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 19);
    \u0275\u0275repeaterCreate(49, EyeExamForm_Conditional_0_For_50_Template, 4, 4, "div", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(51, EyeExamForm_Conditional_0_Conditional_51_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "h6", 17);
    \u0275\u0275text(53, "\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 8)(55, "div", 9)(56, "label", 18);
    \u0275\u0275text(57, "R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(58, "span", 11);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 22)(61, "div", 20);
    \u0275\u0275element(62, "input", 23);
    \u0275\u0275elementStart(63, "label", 24);
    \u0275\u0275text(64, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 20);
    \u0275\u0275element(66, "input", 25);
    \u0275\u0275elementStart(67, "label", 26);
    \u0275\u0275text(68, "\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(69, EyeExamForm_Conditional_0_div_69_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 9)(71, "label", 18);
    \u0275\u0275text(72, "L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(73, "span", 11);
    \u0275\u0275text(74, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 22)(76, "div", 20);
    \u0275\u0275element(77, "input", 27);
    \u0275\u0275elementStart(78, "label", 28);
    \u0275\u0275text(79, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 20);
    \u0275\u0275element(81, "input", 29);
    \u0275\u0275elementStart(82, "label", 30);
    \u0275\u0275text(83, "\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(84, EyeExamForm_Conditional_0_div_84_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 31)(86, "div", 32)(87, "h6", 33);
    \u0275\u0275text(88, "\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 34)(90, "div", 35)(91, "div", 36)(92, "h6", 33);
    \u0275\u0275text(93, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 37);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRefraction("rightEye"));
    });
    \u0275\u0275element(95, "i", 38);
    \u0275\u0275text(96, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(97, EyeExamForm_Conditional_0_For_98_Template, 20, 1, "div", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(99, EyeExamForm_Conditional_0_Conditional_99_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "button", 41);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLeftEye());
    });
    \u0275\u0275element(101, "i");
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(103, EyeExamForm_Conditional_0_Conditional_103_Template, 15, 1, "div", 31);
    \u0275\u0275elementStart(104, "div", 42)(105, "div", 43)(106, "label", 10);
    \u0275\u0275text(107, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275element(108, "textarea", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "h6", 17);
    \u0275\u0275text(110, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 8)(112, "div", 9)(113, "label", 18);
    \u0275\u0275text(114, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(115, "span", 11);
    \u0275\u0275text(116, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "select", 45);
    \u0275\u0275repeaterCreate(118, EyeExamForm_Conditional_0_For_119_Template, 2, 2, "option", 46, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(120, EyeExamForm_Conditional_0_div_120_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 42)(122, "div", 43)(123, "label", 10);
    \u0275\u0275text(124, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275element(125, "textarea", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(126, "div", 48)(127, "button", 49);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(128, "i", 50);
    \u0275\u0275text(129, " \u0625\u0644\u063A\u0627\u0621 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "button", 51);
    \u0275\u0275listener("click", function EyeExamForm_Conditional_0_Template_button_click_130_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275conditionalCreate(131, EyeExamForm_Conditional_0_Conditional_131_Template, 1, 0, "span", 52);
    \u0275\u0275element(132, "i", 53);
    \u0275\u0275text(133, " \u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_23_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.examForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.examForm.get("vision")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.examForm.get("vision")) == null ? null : tmp_2_0.touched))("is-valid", ctx_r1.isFieldValid("vision"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("vision"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.examForm.get("visionLeft")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.examForm.get("visionLeft")) == null ? null : tmp_5_0.touched))("is-valid", ctx_r1.isFieldValid("visionLeft"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("visionLeft"));
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.healthStatusOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_9_0 = ctx_r1.examForm.get("colorTest")) == null ? null : tmp_9_0.value) === ctx_r1.otherOptionValue ? 42 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.healthStatusOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_11_0 = ctx_r1.examForm.get("colorTestLeft")) == null ? null : tmp_11_0.value) === ctx_r1.otherOptionValue ? 51 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.examForm.get("worstRefractionRight")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.examForm.get("worstRefractionRight")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.examForm.get("worstRefractionRight")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.examForm.get("worstRefractionRight")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("worstRefractionRight"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_15_0 = ctx_r1.examForm.get("worstRefractionLeft")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r1.examForm.get("worstRefractionLeft")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx_r1.examForm.get("worstRefractionLeft")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.examForm.get("worstRefractionLeft")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("worstRefractionLeft"));
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.getRefractions("rightEye").controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.getRefractions("rightEye").length ? 99 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.showLeftEye ? "pi pi-eye-slash" : "pi pi-eye");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showLeftEye ? "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649" : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showLeftEye ? 103 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ((tmp_23_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_23_0.touched))("is-valid", ctx_r1.isFieldValid("resultID"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.results);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("resultID"));
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.examForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading ? 131 : -1);
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
      vision: ["", Validators.required],
      visionLeft: ["", Validators.required],
      colorTest: ["\u0633\u0644\u064A\u0645", Validators.required],
      colorTestOther: [""],
      colorTestLeft: ["\u0633\u0644\u064A\u0645", Validators.required],
      colorTestLeftOther: [""],
      refractiveError: [""],
      // حقل قديم - للتوافق مع البيانات القديمة
      worstRefractionRight: ["", Validators.required],
      // أسوأ انكسار العين اليمنى
      worstRefractionLeft: ["", Validators.required],
      // أسوأ انكسار العين اليسرى
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
    if (!this.showLeftEye) {
      const leftEyeRefractions = this.examForm.get("leftEye.refractions");
      while (leftEyeRefractions.length)
        leftEyeRefractions.removeAt(0);
    }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeExamForm, selectors: [["app-eye-exam-form"]], inputs: { applicantFileNumber: "applicantFileNumber" }, outputs: { examAdded: "examAdded" }, decls: 1, vars: 1, consts: [[1, "modal-content", "modal-lg"], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-black", 3, "click"], [1, "modal-title", "text-center", "flex-grow-1"], [1, "invisible", 2, "width", "1.5rem"], [1, "modal-body"], ["novalidate", "", 3, "formGroup"], [1, "section-title"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "number", "formControlName", "vision", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645", 1, "form-control"], [1, "input-group-text"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "number", "formControlName", "visionLeft", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645", 1, "form-control"], [1, "section-title", "mt-4"], [1, "form-label", "mb-2"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "form-check", "form-check-inline"], [1, "mt-2"], [1, "ms-3"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightNotImportant", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightNotImportant", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightImportant", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightImportant", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftNotImportant", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftNotImportant", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftImportant", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftImportant", 1, "form-check-label"], [1, "card", "mt-3"], [1, "card-header"], [1, "mb-0"], ["formGroupName", "rightEye", 1, "card-body"], ["formArrayName", "refractions", 1, "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "pi", "pi-plus"], [1, "card", "mb-3", 3, "formGroupName"], [1, "text-muted", "small"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-3", 3, "click"], [1, "row", "g-3", "mt-3"], [1, "col-12"], ["formControlName", "otherDiseases", "rows", "3", 1, "form-control"], ["formControlName", "resultID", 1, "form-select"], [3, "value"], ["formControlName", "reason", "rows", "2", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "pi", "pi-times", "me-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "pi", "pi-save", "me-2"], [1, "invalid-feedback", "d-block"], [1, "pi", "pi-exclamation-circle", "me-1"], ["type", "radio", "formControlName", "colorTest", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], ["type", "text", "formControlName", "colorTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "radio", "formControlName", "colorTestLeft", 1, "form-check-input", 3, "id", "value"], ["type", "text", "formControlName", "colorTestLeftOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], [1, "card-body"], [1, "col-md-5"], ["formControlName", "refractionTypeID", 1, "form-select"], ["type", "number", "formControlName", "refractionValue", 1, "form-control"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-danger", "mt-4", 3, "click"], [1, "pi", "pi-trash"], ["formGroupName", "leftEye", 1, "card-body"]], template: function EyeExamForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EyeExamForm_Conditional_0_Template, 134, 35, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showModal ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CommonModule, NgIf], styles: [`@charset "UTF-8";



.modal-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;
}
.dialog-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;
}
.professional-modal-container[_ngcontent-%COMP%], 
.modal-content[_ngcontent-%COMP%]:not(.dialog-card) {
  background: #ede8dd;
  border-radius: 24px;
  max-width: 760px;
  width: min(94vw, 760px) !important;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 60px rgba(11, 47, 41, 0.28), 0 0 0 1px rgba(5, 66, 57, 0.08);
  position: fixed !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  z-index: 1051 !important;
  overflow: hidden;
  margin: 0 !important;
  opacity: 0;
  animation: _ngcontent-%COMP%_modalAppear 0.25s ease forwards !important;
}
.dialog-backdrop[_ngcontent-%COMP%]   .dialog-card[_ngcontent-%COMP%], 
.dialog-backdrop[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {
  background: #ede8dd;
  border-radius: 24px;
  max-width: 760px;
  width: min(94vw, 760px) !important;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 60px rgba(11, 47, 41, 0.28), 0 0 0 1px rgba(5, 66, 57, 0.08);
  position: relative;
  z-index: 1051;
  overflow: hidden;
  animation: _ngcontent-%COMP%_dialogAppear 0.25s ease forwards !important;
}
.modern-clinic-modal[_ngcontent-%COMP%] {
  position: relative;
  background: #fdf9f2;
  border-radius: 28px;
  border: 1px solid rgba(5, 66, 57, 0.08);
  box-shadow: 0 28px 62px rgba(12, 44, 36, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.35) inset;
  overflow: hidden;
}
.modern-clinic-modal[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.4),
      transparent 58%);
  pointer-events: none;
}
.modern-clinic-modal[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.45);
  pointer-events: none;
  mix-blend-mode: soft-light;
}
@keyframes _ngcontent-%COMP%_modalAppear {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes _ngcontent-%COMP%_dialogAppear {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-content.modal-lg[_ngcontent-%COMP%] {
  max-width: 900px !important;
  width: 90% !important;
}
.modal-content.modal-sm[_ngcontent-%COMP%] {
  max-width: 500px !important;
  width: 90% !important;
}
.modal-header-professional[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      120deg,
      #0d4f40 0%,
      #176b59 55%,
      #1d846c 100%) !important;
  padding: 1.5rem 2.4rem !important;
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between;
  align-items: center;
  color: white !important;
  border-bottom: 2px solid #b9a779 !important;
  border-radius: 24px 24px 0 0 !important;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 0.65rem;
  font-size: 1.35rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.2);
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  margin: 0 !important;
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0 !important;
  font-size: 1rem !important;
  color: #f0f0f0 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 400 !important;
}
.modal-header-professional[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  margin: 0 !important;
  font-size: 1.75rem !important;
  font-weight: 700 !important;
  color: white !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  border-radius: 999px !important;
  width: 2.8rem !important;
  height: 2.8rem !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  font-size: 1.35rem !important;
  font-weight: 400 !important;
  line-height: 1 !important;
  padding: 0 !important;
  margin: 0 !important;
  order: -1 !important;
  z-index: 2;
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:hover, 
.modal-header-professional[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover, 
.modal-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:hover, 
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover, 
.dialog-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:hover, 
.dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  transform: translateY(-2px) !important;
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:active, 
.modal-header-professional[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:active, 
.modal-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:active, 
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:active, 
.dialog-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:active, 
.dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:active {
  transform: scale(0.96) !important;
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-header-professional[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  pointer-events: none;
  font-size: 1.1rem !important;
}
.btn-close[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.45) !important;
  border-radius: 50% !important;
  width: 3.1rem !important;
  height: 3.1rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  font-size: 1.8rem !important;
  font-weight: 300 !important;
  padding: 0 !important;
  margin: 0 !important;
  order: -1 !important;
}
.btn-close[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.05) !important;
}
.btn-close[_ngcontent-%COMP%]:active {
  transform: scale(0.95) !important;
}
.btn-close[_ngcontent-%COMP%]::before {
  content: "\\d7" !important;
  font-size: 1.6rem;
  font-weight: 200;
}
.modal-body-professional[_ngcontent-%COMP%], 
.modal-body[_ngcontent-%COMP%], 
.dialog-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: #fdfbf5;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar, 
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar, 
.dialog-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]::-webkit-scrollbar, 
.dialog-form[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 8px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar-track, 
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, 
.dialog-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]::-webkit-scrollbar-track, 
.dialog-form[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 4px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, 
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, 
.dialog-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, 
.dialog-form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #b9a779;
  border-radius: 4px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, 
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, 
.dialog-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, 
.dialog-form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #988561;
}
.modal-footer-professional[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 16px 16px;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
  min-width: 150px;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem !important;
  font-family:
    "Cairo",
    "Segoe UI",
    sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.125rem !important;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled, 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:disabled, 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:disabled, 
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, 
.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled, 
.modal-footer[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:disabled, 
.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:disabled, 
.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, 
.form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled, 
.form-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:disabled, 
.form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {
  background-color: #054239 !important;
  border-color: #054239 !important;
  color: white !important;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer-professional[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #428177 !important;
  border-color: #428177 !important;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], 
.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], 
.form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
  background-color: #3d3a3b !important;
  border-color: #3d3a3b !important;
  color: white !important;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled), 
.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled), 
.form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #161616 !important;
  border-color: #161616 !important;
}
.dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 767px) {
  .dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.75rem;
  }
}
.dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.dialog-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  font-weight: 600 !important;
  margin-bottom: 0.5rem !important;
  color: #374151 !important;
  font-size: 1.05rem !important;
}
.dialog-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #dc3545;
  margin-right: 0.25rem;
}
.dialog-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  padding: 0.875rem 1.125rem !important;
  border: 2px solid #d1d5db !important;
  border-radius: 8px !important;
  font-size: 1.05rem !important;
  font-family:
    "Cairo",
    "Segoe UI",
    sans-serif !important;
  background: white !important;
  transition: all 0.3s ease !important;
}
.dialog-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, 
.dialog-form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:focus, 
.dialog-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, 
.dialog-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, 
.dialog-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.dialog-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, 
.dialog-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  outline: none !important;
  border-color: #428177 !important;
  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;
}
.dialog-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder, 
.dialog-form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]::placeholder, 
.dialog-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::placeholder, 
.dialog-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::placeholder, 
.dialog-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.dialog-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, 
.dialog-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af !important;
}
.dialog-form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=file].is-invalid[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=number].is-invalid[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   select.is-invalid[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   textarea.is-invalid[_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545 !important;
}
.dialog-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   input[type=text][readonly][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   input[type=file][readonly][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   input[type=email][readonly][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   input[type=number][readonly][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   select[readonly][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   textarea[readonly][_ngcontent-%COMP%], 
.dialog-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled, 
.dialog-form[_ngcontent-%COMP%]   .form-control[readonly][_ngcontent-%COMP%] {
  background-color: #f3f4f6 !important;
  cursor: not-allowed !important;
}
.dialog-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  min-height: 80px;
  resize: vertical;
}
.dialog-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem !important;
}
.preview-container[_ngcontent-%COMP%] {
  margin-top: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 2px dashed #d1d5db;
}
.preview-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.section-title[_ngcontent-%COMP%] {
  font-size: 1.375rem !important;
  font-weight: 700 !important;
  color: #054239 !important;
  margin-bottom: 1rem !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 2px solid #b9a779 !important;
}
.pill-option-group[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.pill-option-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {
  border: 1px solid rgba(5, 66, 57, 0.25);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  background: #fff;
  transition: all 0.2s ease;
}
.pill-option-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:has(.form-check-input:checked), 
.pill-option-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:hover {
  border-color: #054239;
  background: rgba(5, 66, 57, 0.08);
}
.dual-input-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.form-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: #428177;
}
.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #054239;
}
.section-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(5, 66, 57, 0.08);
  box-shadow: 0 16px 32px rgba(5, 66, 57, 0.08);
  position: relative;
  overflow: hidden;
}
.section-card[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.4);
  pointer-events: none;
}
.section-card[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}
.section-card[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: rgba(5, 66, 57, 0.12);
  color: #054239;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.section-card[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0d4136;
}
.section-card[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.95rem;
  color: #6b6a63;
}
.error-message[_ngcontent-%COMP%] {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .professional-modal-container[_ngcontent-%COMP%], 
   .dialog-card[_ngcontent-%COMP%], 
   .modal-content[_ngcontent-%COMP%] {
    max-width: 95%;
    width: 95%;
    max-height: 90vh;
  }
  .modal-header-professional[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%] {
    padding: 1rem 1.5rem !important;
    flex-direction: column;
    gap: 1rem;
  }
  .modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
  }
  .modal-header-professional[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
   .modal-header-professional[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
   .modal-header-professional[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
   .modal-header-professional[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
   .modal-header-professional[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
   .modal-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
   .dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
    font-size: 1.4rem !important;
  }
  .modal-body-professional[_ngcontent-%COMP%], 
   .modal-body[_ngcontent-%COMP%], 
   .dialog-form[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
  .modal-footer-professional[_ngcontent-%COMP%], 
   .modal-footer[_ngcontent-%COMP%], 
   .form-actions[_ngcontent-%COMP%] {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
  .modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], 
   .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], 
   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
    min-width: 100%;
  }
  .dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.text-center[_ngcontent-%COMP%] {
  text-align: center !important;
}
.mt-3[_ngcontent-%COMP%] {
  margin-top: 1rem !important;
}
.mt-4[_ngcontent-%COMP%] {
  margin-top: 1.5rem !important;
}
.mb-3[_ngcontent-%COMP%] {
  margin-bottom: 1rem !important;
}
.gap-2[_ngcontent-%COMP%] {
  gap: 0.5rem !important;
}
.d-flex[_ngcontent-%COMP%] {
  display: flex !important;
}
.justify-content-between[_ngcontent-%COMP%] {
  justify-content: space-between !important;
}
.justify-content-end[_ngcontent-%COMP%] {
  justify-content: flex-end !important;
}
.align-items-center[_ngcontent-%COMP%] {
  align-items: center !important;
}
.flex-grow-1[_ngcontent-%COMP%] {
  flex-grow: 1 !important;
}
.invalid-feedback[_ngcontent-%COMP%] {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  color: #dc2626 !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  margin-top: 0.5rem !important;
  padding: 0.5rem 0.75rem !important;
  background: #fee2e2 !important;
  border-radius: 8px !important;
  border-right: 3px solid #dc2626 !important;
  animation: _ngcontent-%COMP%_shake 0.4s ease !important;
}
.invalid-feedback[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #dc2626 !important;
  font-size: 1rem !important;
}
.form-control.is-valid[_ngcontent-%COMP%], 
.form-select.is-valid[_ngcontent-%COMP%], 
input.is-valid[_ngcontent-%COMP%], 
select.is-valid[_ngcontent-%COMP%], 
textarea.is-valid[_ngcontent-%COMP%] {
  border-color: #10b981 !important;
  border-width: 2px !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%2310b981' d='M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.71 6.71-4 4c-.39.39-1.02.39-1.41 0l-2-2c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L9 10.59l3.29-3.29c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02.01 1.41z'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 0.75rem center !important;
  background-size: 1.25rem 1.25rem !important;
  padding-right: 2.5rem !important;
}
.form-control.is-valid[_ngcontent-%COMP%]:focus, 
.form-select.is-valid[_ngcontent-%COMP%]:focus, 
input.is-valid[_ngcontent-%COMP%]:focus, 
select.is-valid[_ngcontent-%COMP%]:focus, 
textarea.is-valid[_ngcontent-%COMP%]:focus {
  border-color: #10b981 !important;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important;
}
.form-control.is-invalid[_ngcontent-%COMP%], 
.form-select.is-invalid[_ngcontent-%COMP%], 
input.is-invalid[_ngcontent-%COMP%], 
select.is-invalid[_ngcontent-%COMP%], 
textarea.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc2626 !important;
  border-width: 2px !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23dc2626' d='M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.71 8.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L10 11.41l-2.29 2.29c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L8.59 10 6.3 7.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 8.59l2.29-2.29c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L11.41 10l2.3 2.71z'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 0.75rem center !important;
  background-size: 1.25rem 1.25rem !important;
  padding-right: 2.5rem !important;
}
.form-control.is-invalid[_ngcontent-%COMP%]:focus, 
.form-select.is-invalid[_ngcontent-%COMP%]:focus, 
input.is-invalid[_ngcontent-%COMP%]:focus, 
select.is-invalid[_ngcontent-%COMP%]:focus, 
textarea.is-invalid[_ngcontent-%COMP%]:focus {
  border-color: #dc2626 !important;
  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1) !important;
}
@keyframes _ngcontent-%COMP%_shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}
@keyframes _ngcontent-%COMP%_slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.valid-feedback[_ngcontent-%COMP%] {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  color: #10b981 !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  margin-top: 0.5rem !important;
  padding: 0.5rem 0.75rem !important;
  background: #d1fae5 !important;
  border-radius: 8px !important;
  border-right: 3px solid #10b981 !important;
  animation: _ngcontent-%COMP%_slideDown 0.3s ease !important;
}
.valid-feedback[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #10b981 !important;
  font-size: 1rem !important;
}
.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%], 
.text-danger[_ngcontent-%COMP%] {
  color: #dc2626 !important;
  font-weight: 700 !important;
  animation: _ngcontent-%COMP%_pulse 2s infinite !important;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
.form-control[_ngcontent-%COMP%]:hover, 
.form-select[_ngcontent-%COMP%]:hover, 
input[_ngcontent-%COMP%]:hover, 
select[_ngcontent-%COMP%]:hover, 
textarea[_ngcontent-%COMP%]:hover {
  border-color: #428177 !important;
  transition: all 0.3s ease !important;
}
.input-group[_ngcontent-%COMP%]   .form-control.is-valid[_ngcontent-%COMP%] {
  border-right: none !important;
}
.input-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {
  border-right: none !important;
}
.input-group-text[_ngcontent-%COMP%] {
  transition: all 0.3s ease !important;
}
.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + .input-group-text[_ngcontent-%COMP%] {
  border-color: #428177 !important;
}
.input-group[_ngcontent-%COMP%]   .form-control.is-valid[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%] {
  border-color: #10b981 !important;
  color: #10b981 !important;
}
.input-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%] {
  border-color: #dc2626 !important;
  color: #dc2626 !important;
}
.modal-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  animation: _ngcontent-%COMP%_fadeIn 0.35s ease;
}
.modal-content[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 18px;
  max-width: 860px;
  width: 100%;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.28);
  border-top: 5px solid var(--primary-medium);
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.35rem 2rem;
  border-bottom: 2px solid #b9a779;
  border-radius: 18px 18px 0 0;
  background:
    linear-gradient(
      135deg,
      #054239 0%,
      #428177 100%) !important;
}
.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #fff !important;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  width: 2.35rem;
  height: 2.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.2s ease, background 0.2s ease;
  padding: 0;
  order: -1 !important;
}
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.28);
  transform: translateY(-2px);
}
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  display: block !important;
}
.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]::before {
  display: none;
}
.modal-body[_ngcontent-%COMP%] {
  padding: var(--spacing-xl);
  overflow-y: auto;
  max-height: calc(88vh - 150px);
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--neutral-light);
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--primary-medium);
  border-radius: var(--radius-sm);
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
.section-title[_ngcontent-%COMP%] {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--primary-dark);
  margin: var(--spacing-lg) 0 var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--primary-medium);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
.section-title[_ngcontent-%COMP%]::before {
  content: "";
  width: 4px;
  height: 20px;
  background: var(--accent-gold);
  border-radius: var(--radius-sm);
}
.form-section[_ngcontent-%COMP%], 
.card[_ngcontent-%COMP%] {
  border: 1px solid rgba(5, 66, 57, 0.12);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 12px 24px rgba(5, 66, 57, 0.06);
}
.card-header[_ngcontent-%COMP%] {
  background: rgba(5, 66, 57, 0.08) !important;
  border-radius: 12px !important;
  padding: 0.75rem 1rem !important;
}
.card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 700;
  color: var(--primary-dark);
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%], 
.form-check-input[_ngcontent-%COMP%] {
  border-radius: 10px;
  border: 1px solid rgba(5, 66, 57, 0.25);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: var(--primary-medium);
  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);
}
.form-check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin: 0 !important;
  width: 1.2rem !important;
  height: 1.2rem !important;
  border: 2px solid #6b7280;
  cursor: pointer;
  flex-shrink: 0;
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {
  background-color: #054239;
  border-color: #054239;
  box-shadow: 0 3px 10px rgba(5, 66, 57, 0.25);
}
.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 500;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  line-height: 1.5;
  -webkit-user-select: none;
  user-select: none;
}
.form-check-inline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0;
  margin-right: 1.5rem;
}
.form-check-inline[_ngcontent-%COMP%]:last-child {
  margin-right: 0;
}
.form-check-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin: 0 !important;
  width: 1.2rem !important;
  height: 1.2rem !important;
  flex-shrink: 0;
}
.form-check-inline[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 500;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  line-height: 1.5;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #054239 !important;
  border: 2px solid #054239 !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 14px;
  padding: 0.65rem 1.9rem;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #428177 !important;
  border-color: #428177 !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(5, 66, 57, 0.22);
}
.btn-secondary[_ngcontent-%COMP%] {
  background: #3d3a3b !important;
  border: 2px solid #3d3a3b !important;
  color: #fff !important;
  border-radius: 14px;
  padding: 0.65rem 1.9rem;
}
.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #161616 !important;
  border-color: #161616 !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
}
.modal-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1.05rem;
  padding: 1.35rem 1.9rem;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 18px 18px;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/*# sourceMappingURL=eye-exam-form.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeExamForm, [{
    type: Component,
    args: [{ selector: "app-eye-exam-form", standalone: true, imports: [ReactiveFormsModule, CommonModule], template: `<!-- \u0627\u0644\u0645\u0648\u062F\u0627\u0644 -->\r
@if (showModal) {\r
<div class="modal-content modal-lg">\r
  <div class="modal-header d-flex justify-content-between align-items-center">\r
    <button type="button" class="btn-close btn-close-black" aria-label="Close" (click)="closeModal()"></button>\r
    <h4 class="modal-title text-center flex-grow-1">\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A</h4>\r
    <div class="invisible" style="width: 1.5rem;"></div> <!-- \u0639\u0646\u0635\u0631 \u062A\u0648\u0627\u0632\u0646 \u063A\u064A\u0631 \u0645\u0631\u0626\u064A -->\r
  </div>\r
\r
  <div class="modal-body">\r
    <form [formGroup]="examForm" novalidate>\r
      <!-- \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 -->\r
      <h6 class="section-title">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629</h6>\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <label class="form-label">R: <span class="text-danger">*</span></label>\r
          <div class="input-group">\r
            <input type="number" class="form-control" formControlName="vision" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645"\r
              [class.is-invalid]="examForm.get('vision')?.invalid && examForm.get('vision')?.touched"\r
              [class.is-valid]="isFieldValid('vision')" />\r
            <span class="input-group-text">/10</span>\r
          </div>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('vision')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('vision') }}\r
          </div>\r
        </div>\r
\r
        <div class="col-md-6">\r
          <label class="form-label">L: <span class="text-danger">*</span></label>\r
          <div class="input-group">\r
            <input type="number" class="form-control" formControlName="visionLeft" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645"\r
              [class.is-invalid]="examForm.get('visionLeft')?.invalid && examForm.get('visionLeft')?.touched"\r
              [class.is-valid]="isFieldValid('visionLeft')" />\r
            <span class="input-group-text">/10</span>\r
          </div>\r
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
        <div class="col-md-6">\r
          <label class="form-label mb-2">R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="ms-3">\r
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
        <div class="col-md-6">\r
          <label class="form-label mb-2">L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="ms-3">\r
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
      </div>\r
\r
      <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 -->\r
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
\r
      <!-- \u0632\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
      <button type="button" class="btn btn-outline-primary mt-3" (click)="toggleLeftEye()">\r
        <i [class]="showLeftEye ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>\r
        {{ showLeftEye ? '\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649' }}\r
      </button>\r
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
  </div>\r
\r
  <!-- \u0627\u0644\u0623\u0632\u0631\u0627\u0631 -->\r
  <div class="modal-footer">\r
    <button type="button" class="btn btn-secondary" (click)="closeModal()">\r
      <i class="pi pi-times me-2"></i> \u0625\u0644\u063A\u0627\u0621\r
    </button>\r
    <button type="button" class="btn btn-primary" (click)="onSubmit()" [disabled]="examForm.invalid || loading">\r
      @if (loading) {\r
      <span class="spinner-border spinner-border-sm me-2"></span>\r
      }\r
      <i class="pi pi-save me-2"></i> \u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A\r
    </button>\r
  </div>\r
</div>\r
\r
\r
}`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/eye-doctor.component/eye-exam-form/eye-exam-form.scss */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}
.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}
.professional-modal-container,
.modal-content:not(.dialog-card) {
  background: #ede8dd;
  border-radius: 24px;
  max-width: 760px;
  width: min(94vw, 760px) !important;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 60px rgba(11, 47, 41, 0.28), 0 0 0 1px rgba(5, 66, 57, 0.08);
  position: fixed !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  z-index: 1051 !important;
  overflow: hidden;
  margin: 0 !important;
  opacity: 0;
  animation: modalAppear 0.25s ease forwards !important;
}
.dialog-backdrop .dialog-card,
.dialog-backdrop .modal-content {
  background: #ede8dd;
  border-radius: 24px;
  max-width: 760px;
  width: min(94vw, 760px) !important;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 60px rgba(11, 47, 41, 0.28), 0 0 0 1px rgba(5, 66, 57, 0.08);
  position: relative;
  z-index: 1051;
  overflow: hidden;
  animation: dialogAppear 0.25s ease forwards !important;
}
.modern-clinic-modal {
  position: relative;
  background: #fdf9f2;
  border-radius: 28px;
  border: 1px solid rgba(5, 66, 57, 0.08);
  box-shadow: 0 28px 62px rgba(12, 44, 36, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.35) inset;
  overflow: hidden;
}
.modern-clinic-modal::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.4),
      transparent 58%);
  pointer-events: none;
}
.modern-clinic-modal::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.45);
  pointer-events: none;
  mix-blend-mode: soft-light;
}
@keyframes modalAppear {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes dialogAppear {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-content.modal-lg {
  max-width: 900px !important;
  width: 90% !important;
}
.modal-content.modal-sm {
  max-width: 500px !important;
  width: 90% !important;
}
.modal-header-professional,
.modal-header,
.dialog-header {
  background:
    linear-gradient(
      120deg,
      #0d4f40 0%,
      #176b59 55%,
      #1d846c 100%) !important;
  padding: 1.5rem 2.4rem !important;
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between;
  align-items: center;
  color: white !important;
  border-bottom: 2px solid #b9a779 !important;
  border-radius: 24px 24px 0 0 !important;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.modal-header-professional .header-content,
.modal-header .header-content,
.dialog-header .header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.modal-header-professional .header-content .header-icon,
.modal-header .header-content .header-icon,
.dialog-header .header-content .header-icon {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 0.65rem;
  font-size: 1.35rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.2);
}
.modal-header-professional .header-content .header-text,
.modal-header-professional .header-content .modal-title,
.modal-header-professional .header-content .modal-title-professional,
.modal-header .header-content .header-text,
.modal-header .header-content .modal-title,
.modal-header .header-content .modal-title-professional,
.dialog-header .header-content .header-text,
.dialog-header .header-content .modal-title,
.dialog-header .header-content .modal-title-professional {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.modal-header-professional .header-content .header-text h3,
.modal-header-professional .header-content .header-text h4,
.modal-header-professional .header-content .header-text h5,
.modal-header-professional .header-content .header-text h6,
.modal-header-professional .header-content .header-text p,
.modal-header-professional .header-content .header-text span,
.modal-header-professional .header-content .modal-title h3,
.modal-header-professional .header-content .modal-title h4,
.modal-header-professional .header-content .modal-title h5,
.modal-header-professional .header-content .modal-title h6,
.modal-header-professional .header-content .modal-title p,
.modal-header-professional .header-content .modal-title span,
.modal-header-professional .header-content .modal-title-professional h3,
.modal-header-professional .header-content .modal-title-professional h4,
.modal-header-professional .header-content .modal-title-professional h5,
.modal-header-professional .header-content .modal-title-professional h6,
.modal-header-professional .header-content .modal-title-professional p,
.modal-header-professional .header-content .modal-title-professional span,
.modal-header .header-content .header-text h3,
.modal-header .header-content .header-text h4,
.modal-header .header-content .header-text h5,
.modal-header .header-content .header-text h6,
.modal-header .header-content .header-text p,
.modal-header .header-content .header-text span,
.modal-header .header-content .modal-title h3,
.modal-header .header-content .modal-title h4,
.modal-header .header-content .modal-title h5,
.modal-header .header-content .modal-title h6,
.modal-header .header-content .modal-title p,
.modal-header .header-content .modal-title span,
.modal-header .header-content .modal-title-professional h3,
.modal-header .header-content .modal-title-professional h4,
.modal-header .header-content .modal-title-professional h5,
.modal-header .header-content .modal-title-professional h6,
.modal-header .header-content .modal-title-professional p,
.modal-header .header-content .modal-title-professional span,
.dialog-header .header-content .header-text h3,
.dialog-header .header-content .header-text h4,
.dialog-header .header-content .header-text h5,
.dialog-header .header-content .header-text h6,
.dialog-header .header-content .header-text p,
.dialog-header .header-content .header-text span,
.dialog-header .header-content .modal-title h3,
.dialog-header .header-content .modal-title h4,
.dialog-header .header-content .modal-title h5,
.dialog-header .header-content .modal-title h6,
.dialog-header .header-content .modal-title p,
.dialog-header .header-content .modal-title span,
.dialog-header .header-content .modal-title-professional h3,
.dialog-header .header-content .modal-title-professional h4,
.dialog-header .header-content .modal-title-professional h5,
.dialog-header .header-content .modal-title-professional h6,
.dialog-header .header-content .modal-title-professional p,
.dialog-header .header-content .modal-title-professional span {
  margin: 0 !important;
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.modal-header-professional .header-content .header-text .modal-subtitle,
.modal-header-professional .header-content .header-text p,
.modal-header-professional .header-content .modal-title .modal-subtitle,
.modal-header-professional .header-content .modal-title p,
.modal-header-professional .header-content .modal-title-professional .modal-subtitle,
.modal-header-professional .header-content .modal-title-professional p,
.modal-header .header-content .header-text .modal-subtitle,
.modal-header .header-content .header-text p,
.modal-header .header-content .modal-title .modal-subtitle,
.modal-header .header-content .modal-title p,
.modal-header .header-content .modal-title-professional .modal-subtitle,
.modal-header .header-content .modal-title-professional p,
.dialog-header .header-content .header-text .modal-subtitle,
.dialog-header .header-content .header-text p,
.dialog-header .header-content .modal-title .modal-subtitle,
.dialog-header .header-content .modal-title p,
.dialog-header .header-content .modal-title-professional .modal-subtitle,
.dialog-header .header-content .modal-title-professional p {
  margin: 0 !important;
  font-size: 1rem !important;
  color: #f0f0f0 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 400 !important;
}
.modal-header-professional .modal-title,
.modal-header-professional .modal-title-professional,
.modal-header-professional h3,
.modal-header-professional h4,
.modal-header-professional h5,
.modal-header-professional h6,
.modal-header .modal-title,
.modal-header .modal-title-professional,
.modal-header h3,
.modal-header h4,
.modal-header h5,
.modal-header h6,
.dialog-header .modal-title,
.dialog-header .modal-title-professional,
.dialog-header h3,
.dialog-header h4,
.dialog-header h5,
.dialog-header h6 {
  margin: 0 !important;
  font-size: 1.75rem !important;
  font-weight: 700 !important;
  color: white !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.modal-header-professional .btn-close-professional,
.modal-header-professional .btn-close,
.modal-header .btn-close-professional,
.modal-header .btn-close,
.dialog-header .btn-close-professional,
.dialog-header .btn-close {
  background: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  border-radius: 999px !important;
  width: 2.8rem !important;
  height: 2.8rem !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  font-size: 1.35rem !important;
  font-weight: 400 !important;
  line-height: 1 !important;
  padding: 0 !important;
  margin: 0 !important;
  order: -1 !important;
  z-index: 2;
}
.modal-header-professional .btn-close-professional:hover,
.modal-header-professional .btn-close:hover,
.modal-header .btn-close-professional:hover,
.modal-header .btn-close:hover,
.dialog-header .btn-close-professional:hover,
.dialog-header .btn-close:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  transform: translateY(-2px) !important;
}
.modal-header-professional .btn-close-professional:active,
.modal-header-professional .btn-close:active,
.modal-header .btn-close-professional:active,
.modal-header .btn-close:active,
.dialog-header .btn-close-professional:active,
.dialog-header .btn-close:active {
  transform: scale(0.96) !important;
}
.modal-header-professional .btn-close-professional i,
.modal-header-professional .btn-close i,
.modal-header .btn-close-professional i,
.modal-header .btn-close i,
.dialog-header .btn-close-professional i,
.dialog-header .btn-close i {
  pointer-events: none;
  font-size: 1.1rem !important;
}
.btn-close {
  background: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.45) !important;
  border-radius: 50% !important;
  width: 3.1rem !important;
  height: 3.1rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  font-size: 1.8rem !important;
  font-weight: 300 !important;
  padding: 0 !important;
  margin: 0 !important;
  order: -1 !important;
}
.btn-close:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.05) !important;
}
.btn-close:active {
  transform: scale(0.95) !important;
}
.btn-close::before {
  content: "\\d7" !important;
  font-size: 1.6rem;
  font-weight: 200;
}
.modal-body-professional,
.modal-body,
.dialog-card form,
.dialog-form {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: #fdfbf5;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
.modal-body-professional::-webkit-scrollbar,
.modal-body::-webkit-scrollbar,
.dialog-card form::-webkit-scrollbar,
.dialog-form::-webkit-scrollbar {
  width: 8px;
}
.modal-body-professional::-webkit-scrollbar-track,
.modal-body::-webkit-scrollbar-track,
.dialog-card form::-webkit-scrollbar-track,
.dialog-form::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 4px;
}
.modal-body-professional::-webkit-scrollbar-thumb,
.modal-body::-webkit-scrollbar-thumb,
.dialog-card form::-webkit-scrollbar-thumb,
.dialog-form::-webkit-scrollbar-thumb {
  background: #b9a779;
  border-radius: 4px;
}
.modal-body-professional::-webkit-scrollbar-thumb:hover,
.modal-body::-webkit-scrollbar-thumb:hover,
.dialog-card form::-webkit-scrollbar-thumb:hover,
.dialog-form::-webkit-scrollbar-thumb:hover {
  background: #988561;
}
.modal-footer-professional,
.modal-footer,
.form-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 16px 16px;
}
.modal-footer-professional .btn,
.modal-footer-professional .btn-primary,
.modal-footer-professional .btn-success,
.modal-footer-professional .btn-secondary,
.modal-footer .btn,
.modal-footer .btn-primary,
.modal-footer .btn-success,
.modal-footer .btn-secondary,
.form-actions .btn,
.form-actions .btn-primary,
.form-actions .btn-success,
.form-actions .btn-secondary {
  min-width: 150px;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem !important;
  font-family:
    "Cairo",
    "Segoe UI",
    sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}
.modal-footer-professional .btn i,
.modal-footer-professional .btn-primary i,
.modal-footer-professional .btn-success i,
.modal-footer-professional .btn-secondary i,
.modal-footer .btn i,
.modal-footer .btn-primary i,
.modal-footer .btn-success i,
.modal-footer .btn-secondary i,
.form-actions .btn i,
.form-actions .btn-primary i,
.form-actions .btn-success i,
.form-actions .btn-secondary i {
  font-size: 1.125rem !important;
}
.modal-footer-professional .btn:hover:not(:disabled),
.modal-footer-professional .btn-primary:hover:not(:disabled),
.modal-footer-professional .btn-success:hover:not(:disabled),
.modal-footer-professional .btn-secondary:hover:not(:disabled),
.modal-footer .btn:hover:not(:disabled),
.modal-footer .btn-primary:hover:not(:disabled),
.modal-footer .btn-success:hover:not(:disabled),
.modal-footer .btn-secondary:hover:not(:disabled),
.form-actions .btn:hover:not(:disabled),
.form-actions .btn-primary:hover:not(:disabled),
.form-actions .btn-success:hover:not(:disabled),
.form-actions .btn-secondary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.modal-footer-professional .btn:disabled,
.modal-footer-professional .btn-primary:disabled,
.modal-footer-professional .btn-success:disabled,
.modal-footer-professional .btn-secondary:disabled,
.modal-footer .btn:disabled,
.modal-footer .btn-primary:disabled,
.modal-footer .btn-success:disabled,
.modal-footer .btn-secondary:disabled,
.form-actions .btn:disabled,
.form-actions .btn-primary:disabled,
.form-actions .btn-success:disabled,
.form-actions .btn-secondary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.modal-footer-professional .btn-primary,
.modal-footer-professional .btn-success,
.modal-footer .btn-primary,
.modal-footer .btn-success,
.form-actions .btn-primary,
.form-actions .btn-success {
  background-color: #054239 !important;
  border-color: #054239 !important;
  color: white !important;
}
.modal-footer-professional .btn-primary:hover:not(:disabled),
.modal-footer-professional .btn-success:hover:not(:disabled),
.modal-footer .btn-primary:hover:not(:disabled),
.modal-footer .btn-success:hover:not(:disabled),
.form-actions .btn-primary:hover:not(:disabled),
.form-actions .btn-success:hover:not(:disabled) {
  background-color: #428177 !important;
  border-color: #428177 !important;
}
.modal-footer-professional .btn-secondary,
.modal-footer .btn-secondary,
.form-actions .btn-secondary {
  background-color: #3d3a3b !important;
  border-color: #3d3a3b !important;
  color: white !important;
}
.modal-footer-professional .btn-secondary:hover:not(:disabled),
.modal-footer .btn-secondary:hover:not(:disabled),
.form-actions .btn-secondary:hover:not(:disabled) {
  background-color: #161616 !important;
  border-color: #161616 !important;
}
.dialog-form .form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 767px) {
  .dialog-form .form-row {
    flex-direction: column;
    gap: 0.75rem;
  }
}
.dialog-form .form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.dialog-form label,
.dialog-form .form-label {
  font-weight: 600 !important;
  margin-bottom: 0.5rem !important;
  color: #374151 !important;
  font-size: 1.05rem !important;
}
.dialog-form label .required,
.dialog-form .form-label .required {
  color: #dc3545;
  margin-right: 0.25rem;
}
.dialog-form input[type=text],
.dialog-form input[type=file],
.dialog-form input[type=email],
.dialog-form input[type=number],
.dialog-form select,
.dialog-form textarea,
.dialog-form .form-control {
  padding: 0.875rem 1.125rem !important;
  border: 2px solid #d1d5db !important;
  border-radius: 8px !important;
  font-size: 1.05rem !important;
  font-family:
    "Cairo",
    "Segoe UI",
    sans-serif !important;
  background: white !important;
  transition: all 0.3s ease !important;
}
.dialog-form input[type=text]:focus,
.dialog-form input[type=file]:focus,
.dialog-form input[type=email]:focus,
.dialog-form input[type=number]:focus,
.dialog-form select:focus,
.dialog-form textarea:focus,
.dialog-form .form-control:focus {
  outline: none !important;
  border-color: #428177 !important;
  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;
}
.dialog-form input[type=text]::placeholder,
.dialog-form input[type=file]::placeholder,
.dialog-form input[type=email]::placeholder,
.dialog-form input[type=number]::placeholder,
.dialog-form select::placeholder,
.dialog-form textarea::placeholder,
.dialog-form .form-control::placeholder {
  color: #9ca3af !important;
}
.dialog-form input[type=text].is-invalid,
.dialog-form input[type=file].is-invalid,
.dialog-form input[type=email].is-invalid,
.dialog-form input[type=number].is-invalid,
.dialog-form select.is-invalid,
.dialog-form textarea.is-invalid,
.dialog-form .form-control.is-invalid {
  border-color: #dc3545 !important;
}
.dialog-form input[type=text]:disabled,
.dialog-form input[type=text][readonly],
.dialog-form input[type=file]:disabled,
.dialog-form input[type=file][readonly],
.dialog-form input[type=email]:disabled,
.dialog-form input[type=email][readonly],
.dialog-form input[type=number]:disabled,
.dialog-form input[type=number][readonly],
.dialog-form select:disabled,
.dialog-form select[readonly],
.dialog-form textarea:disabled,
.dialog-form textarea[readonly],
.dialog-form .form-control:disabled,
.dialog-form .form-control[readonly] {
  background-color: #f3f4f6 !important;
  cursor: not-allowed !important;
}
.dialog-form textarea {
  min-height: 80px;
  resize: vertical;
}
.dialog-form select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem !important;
}
.preview-container {
  margin-top: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 2px dashed #d1d5db;
}
.preview-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.section-title {
  font-size: 1.375rem !important;
  font-weight: 700 !important;
  color: #054239 !important;
  margin-bottom: 1rem !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 2px solid #b9a779 !important;
}
.pill-option-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.pill-option-group .form-check {
  border: 1px solid rgba(5, 66, 57, 0.25);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  background: #fff;
  transition: all 0.2s ease;
}
.pill-option-group .form-check:has(.form-check-input:checked),
.pill-option-group .form-check:hover {
  border-color: #054239;
  background: rgba(5, 66, 57, 0.08);
}
.dual-input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.form-section {
  margin-bottom: 2rem;
}
.form-section .section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.form-section .section-header i {
  font-size: 1.5rem;
  color: #428177;
}
.form-section .section-header h4 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #054239;
}
.section-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(5, 66, 57, 0.08);
  box-shadow: 0 16px 32px rgba(5, 66, 57, 0.08);
  position: relative;
  overflow: hidden;
}
.section-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.4);
  pointer-events: none;
}
.section-card .section-heading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}
.section-card .section-heading i {
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: rgba(5, 66, 57, 0.12);
  color: #054239;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.section-card .section-heading h6 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0d4136;
}
.section-card .section-heading p {
  margin: 0;
  font-size: 0.95rem;
  color: #6b6a63;
}
.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .professional-modal-container,
  .dialog-card,
  .modal-content {
    max-width: 95%;
    width: 95%;
    max-height: 90vh;
  }
  .modal-header-professional,
  .modal-header,
  .dialog-header {
    padding: 1rem 1.5rem !important;
    flex-direction: column;
    gap: 1rem;
  }
  .modal-header-professional .header-content,
  .modal-header .header-content,
  .dialog-header .header-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .modal-header-professional .modal-title-professional,
  .modal-header-professional h3,
  .modal-header-professional h4,
  .modal-header-professional h5,
  .modal-header-professional h6,
  .modal-header .modal-title-professional,
  .modal-header h3,
  .modal-header h4,
  .modal-header h5,
  .modal-header h6,
  .dialog-header .modal-title-professional,
  .dialog-header h3,
  .dialog-header h4,
  .dialog-header h5,
  .dialog-header h6 {
    font-size: 1.4rem !important;
  }
  .modal-body-professional,
  .modal-body,
  .dialog-form {
    padding: 1.5rem;
  }
  .modal-footer-professional,
  .modal-footer,
  .form-actions {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
  .modal-footer-professional .btn,
  .modal-footer .btn,
  .form-actions .btn {
    width: 100%;
    min-width: 100%;
  }
  .dialog-form .form-row {
    flex-direction: column;
  }
}
.text-center {
  text-align: center !important;
}
.mt-3 {
  margin-top: 1rem !important;
}
.mt-4 {
  margin-top: 1.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.gap-2 {
  gap: 0.5rem !important;
}
.d-flex {
  display: flex !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.align-items-center {
  align-items: center !important;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.invalid-feedback {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  color: #dc2626 !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  margin-top: 0.5rem !important;
  padding: 0.5rem 0.75rem !important;
  background: #fee2e2 !important;
  border-radius: 8px !important;
  border-right: 3px solid #dc2626 !important;
  animation: shake 0.4s ease !important;
}
.invalid-feedback i {
  color: #dc2626 !important;
  font-size: 1rem !important;
}
.form-control.is-valid,
.form-select.is-valid,
input.is-valid,
select.is-valid,
textarea.is-valid {
  border-color: #10b981 !important;
  border-width: 2px !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%2310b981' d='M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.71 6.71-4 4c-.39.39-1.02.39-1.41 0l-2-2c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L9 10.59l3.29-3.29c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02.01 1.41z'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 0.75rem center !important;
  background-size: 1.25rem 1.25rem !important;
  padding-right: 2.5rem !important;
}
.form-control.is-valid:focus,
.form-select.is-valid:focus,
input.is-valid:focus,
select.is-valid:focus,
textarea.is-valid:focus {
  border-color: #10b981 !important;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important;
}
.form-control.is-invalid,
.form-select.is-invalid,
input.is-invalid,
select.is-invalid,
textarea.is-invalid {
  border-color: #dc2626 !important;
  border-width: 2px !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23dc2626' d='M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.71 8.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L10 11.41l-2.29 2.29c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L8.59 10 6.3 7.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 8.59l2.29-2.29c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L11.41 10l2.3 2.71z'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 0.75rem center !important;
  background-size: 1.25rem 1.25rem !important;
  padding-right: 2.5rem !important;
}
.form-control.is-invalid:focus,
.form-select.is-invalid:focus,
input.is-invalid:focus,
select.is-invalid:focus,
textarea.is-invalid:focus {
  border-color: #dc2626 !important;
  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1) !important;
}
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.valid-feedback {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  color: #10b981 !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  margin-top: 0.5rem !important;
  padding: 0.5rem 0.75rem !important;
  background: #d1fae5 !important;
  border-radius: 8px !important;
  border-right: 3px solid #10b981 !important;
  animation: slideDown 0.3s ease !important;
}
.valid-feedback i {
  color: #10b981 !important;
  font-size: 1rem !important;
}
.form-label .required,
.text-danger {
  color: #dc2626 !important;
  font-weight: 700 !important;
  animation: pulse 2s infinite !important;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
.form-control:hover,
.form-select:hover,
input:hover,
select:hover,
textarea:hover {
  border-color: #428177 !important;
  transition: all 0.3s ease !important;
}
.input-group .form-control.is-valid {
  border-right: none !important;
}
.input-group .form-control.is-invalid {
  border-right: none !important;
}
.input-group-text {
  transition: all 0.3s ease !important;
}
.input-group .form-control:focus + .input-group-text {
  border-color: #428177 !important;
}
.input-group .form-control.is-valid + .input-group-text {
  border-color: #10b981 !important;
  color: #10b981 !important;
}
.input-group .form-control.is-invalid + .input-group-text {
  border-color: #dc2626 !important;
  color: #dc2626 !important;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  animation: fadeIn 0.35s ease;
}
.modal-content {
  background: #fff;
  border-radius: 18px;
  max-width: 860px;
  width: 100%;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.28);
  border-top: 5px solid var(--primary-medium);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.35rem 2rem;
  border-bottom: 2px solid #b9a779;
  border-radius: 18px 18px 0 0;
  background:
    linear-gradient(
      135deg,
      #054239 0%,
      #428177 100%) !important;
}
.modal-header .modal-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #fff !important;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.modal-header .btn-close {
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  width: 2.35rem;
  height: 2.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.2s ease, background 0.2s ease;
  padding: 0;
  order: -1 !important;
}
.modal-header .btn-close:hover {
  background: rgba(255, 255, 255, 0.28);
  transform: translateY(-2px);
}
.modal-header .btn-close i {
  font-size: 1.05rem;
  display: block !important;
}
.modal-header .btn-close::before {
  display: none;
}
.modal-body {
  padding: var(--spacing-xl);
  overflow-y: auto;
  max-height: calc(88vh - 150px);
}
.modal-body::-webkit-scrollbar {
  width: 6px;
}
.modal-body::-webkit-scrollbar-track {
  background: var(--neutral-light);
}
.modal-body::-webkit-scrollbar-thumb {
  background: var(--primary-medium);
  border-radius: var(--radius-sm);
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
.section-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--primary-dark);
  margin: var(--spacing-lg) 0 var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--primary-medium);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
.section-title::before {
  content: "";
  width: 4px;
  height: 20px;
  background: var(--accent-gold);
  border-radius: var(--radius-sm);
}
.form-section,
.card {
  border: 1px solid rgba(5, 66, 57, 0.12);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 12px 24px rgba(5, 66, 57, 0.06);
}
.card-header {
  background: rgba(5, 66, 57, 0.08) !important;
  border-radius: 12px !important;
  padding: 0.75rem 1rem !important;
}
.card-header h6 {
  margin: 0;
  font-weight: 700;
  color: var(--primary-dark);
}
.form-control,
.form-select,
.form-check-input {
  border-radius: 10px;
  border: 1px solid rgba(5, 66, 57, 0.25);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: var(--primary-medium);
  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);
}
.form-check {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.form-check .form-check-input {
  margin: 0 !important;
  width: 1.2rem !important;
  height: 1.2rem !important;
  border: 2px solid #6b7280;
  cursor: pointer;
  flex-shrink: 0;
}
.form-check .form-check-input:checked {
  background-color: #054239;
  border-color: #054239;
  box-shadow: 0 3px 10px rgba(5, 66, 57, 0.25);
}
.form-check .form-check-label {
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 500;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  line-height: 1.5;
  -webkit-user-select: none;
  user-select: none;
}
.form-check-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0;
  margin-right: 1.5rem;
}
.form-check-inline:last-child {
  margin-right: 0;
}
.form-check-inline .form-check-input {
  margin: 0 !important;
  width: 1.2rem !important;
  height: 1.2rem !important;
  flex-shrink: 0;
}
.form-check-inline .form-check-label {
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 500;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  line-height: 1.5;
}
.btn-primary {
  background: #054239 !important;
  border: 2px solid #054239 !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 14px;
  padding: 0.65rem 1.9rem;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.btn-primary:hover:not(:disabled) {
  background: #428177 !important;
  border-color: #428177 !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(5, 66, 57, 0.22);
}
.btn-secondary {
  background: #3d3a3b !important;
  border: 2px solid #3d3a3b !important;
  color: #fff !important;
  border-radius: 14px;
  padding: 0.65rem 1.9rem;
}
.btn-secondary:hover:not(:disabled) {
  background: #161616 !important;
  border-color: #161616 !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
}
.modal-footer {
  display: flex;
  justify-content: center;
  gap: 1.05rem;
  padding: 1.35rem 1.9rem;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 18px 18px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/*# sourceMappingURL=eye-exam-form.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], examAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeExamForm, { className: "EyeExamForm", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-exam-form/eye-exam-form.ts", lineNumber: 21 });
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
//# sourceMappingURL=chunk-ZNXENXIX.js.map
