import {
  EarClinicExamService
} from "./chunk-JD6L6IQM.js";
import {
  ConsultationFormComponent,
  InvestigationForm
} from "./chunk-IJQEK7MB.js";
import {
  SearchApplicantComponent
} from "./chunk-GCJ6OPYG.js";
import "./chunk-5TBOZ7YP.js";
import "./chunk-T2JR7AGY.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  NgForOf,
  NgIf
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/ear-doctor.component/ear-clinic-exam-form/ear-clinic-exam-form.ts
function EarClinicExamForm_div_0_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("rightTympanicMembraneOther"), " ");
  }
}
function EarClinicExamForm_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "input", 103);
    \u0275\u0275template(2, EarClinicExamForm_div_0_div_25_div_2_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.examForm.get("rightTympanicMembraneOther")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.examForm.get("rightTympanicMembraneOther")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("rightTympanicMembraneOther"));
  }
}
function EarClinicExamForm_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("rightTympanicMembrane"), " ");
  }
}
function EarClinicExamForm_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("leftTympanicMembraneOther"), " ");
  }
}
function EarClinicExamForm_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "input", 108);
    \u0275\u0275template(2, EarClinicExamForm_div_0_div_42_div_2_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.examForm.get("leftTympanicMembraneOther")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.examForm.get("leftTympanicMembraneOther")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("leftTympanicMembraneOther"));
  }
}
function EarClinicExamForm_div_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("leftTympanicMembrane"), " ");
  }
}
function EarClinicExamForm_div_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("rightHearing"), " ");
  }
}
function EarClinicExamForm_div_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("leftHearing"), " ");
  }
}
function EarClinicExamForm_div_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_For_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function EarClinicExamForm_div_0_For_78_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectResonator(option_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ((tmp_11_0 = ctx_r1.examForm.get("resonators")) == null ? null : tmp_11_0.value) === option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
function EarClinicExamForm_div_0_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("resonators"), " ");
  }
}
function EarClinicExamForm_div_0_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "input", 110);
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("rightWhisperTest"), " ");
  }
}
function EarClinicExamForm_div_0_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "input", 111);
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("leftWhisperTest"), " ");
  }
}
function EarClinicExamForm_div_0_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_div_225_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("mouth"), " ");
  }
}
function EarClinicExamForm_div_0_div_226_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " \u0635\u062D\u064A\u062D ");
    \u0275\u0275elementEnd();
  }
}
function EarClinicExamForm_div_0_option_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r5 = ctx.$implicit;
    \u0275\u0275property("value", result_r5.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r5.description, " ");
  }
}
function EarClinicExamForm_div_0_div_242_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("resultID"), " ");
  }
}
function EarClinicExamForm_div_0_span_251_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 113);
  }
}
function EarClinicExamForm_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275listener("click", function EarClinicExamForm_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h5", 4);
    \u0275\u0275text(4, "\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0623\u0630\u0646 \u0648\u0623\u0646\u0641 \u0648\u062D\u0646\u062C\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function EarClinicExamForm_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "form", 7);
    \u0275\u0275listener("ngSubmit", function EarClinicExamForm_div_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(8, "h6", 8);
    \u0275\u0275text(9, "\u0627\u0644\u0623\u0630\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "label", 11);
    \u0275\u0275text(13, "\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646): ");
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
    \u0275\u0275element(18, "input", 15);
    \u0275\u0275elementStart(19, "label", 16);
    \u0275\u0275text(20, "\u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14);
    \u0275\u0275element(22, "input", 17);
    \u0275\u0275elementStart(23, "label", 18);
    \u0275\u0275text(24, "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, EarClinicExamForm_div_0_div_25_Template, 3, 3, "div", 19)(26, EarClinicExamForm_div_0_div_26_Template, 3, 1, "div", 20)(27, EarClinicExamForm_div_0_div_27_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 10)(29, "label", 11);
    \u0275\u0275text(30, "\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631): ");
    \u0275\u0275elementStart(31, "span", 12);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 13)(34, "div", 14);
    \u0275\u0275element(35, "input", 22);
    \u0275\u0275elementStart(36, "label", 23);
    \u0275\u0275text(37, "\u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 14);
    \u0275\u0275element(39, "input", 24);
    \u0275\u0275elementStart(40, "label", 25);
    \u0275\u0275text(41, "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, EarClinicExamForm_div_0_div_42_Template, 3, 3, "div", 19)(43, EarClinicExamForm_div_0_div_43_Template, 3, 1, "div", 20)(44, EarClinicExamForm_div_0_div_44_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 9)(46, "div", 10)(47, "label", 11);
    \u0275\u0275text(48, "\u0627\u0644\u0633\u0645\u0639 (\u064A\u0645\u064A\u0646) R: ");
    \u0275\u0275elementStart(49, "span", 12);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "input", 26);
    \u0275\u0275template(52, EarClinicExamForm_div_0_div_52_Template, 3, 1, "div", 20)(53, EarClinicExamForm_div_0_div_53_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 10)(55, "label", 11);
    \u0275\u0275text(56, "\u0627\u0644\u0633\u0645\u0639 (\u064A\u0633\u0627\u0631) L: ");
    \u0275\u0275elementStart(57, "span", 12);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "input", 27);
    \u0275\u0275template(60, EarClinicExamForm_div_0_div_60_Template, 3, 1, "div", 20)(61, EarClinicExamForm_div_0_div_61_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 9)(63, "div", 10)(64, "label", 11);
    \u0275\u0275text(65, "\u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A W: ");
    \u0275\u0275elementStart(66, "span", 12);
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 28)(69, "div", 29)(70, "button", 30);
    \u0275\u0275listener("click", function EarClinicExamForm_div_0_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateResonator("prev"));
    });
    \u0275\u0275element(71, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "input", 32);
    \u0275\u0275elementStart(73, "button", 33);
    \u0275\u0275listener("click", function EarClinicExamForm_div_0_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateResonator("next"));
    });
    \u0275\u0275element(74, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 35)(76, "div", 36);
    \u0275\u0275repeaterCreate(77, EarClinicExamForm_div_0_For_78_Template, 2, 3, "button", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(79, EarClinicExamForm_div_0_div_79_Template, 3, 1, "div", 20)(80, EarClinicExamForm_div_0_div_80_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 9)(82, "div", 10)(83, "label", 11);
    \u0275\u0275text(84, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646): ");
    \u0275\u0275elementStart(85, "span", 12);
    \u0275\u0275text(86, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 13)(88, "div", 14);
    \u0275\u0275element(89, "input", 38);
    \u0275\u0275elementStart(90, "label", 39);
    \u0275\u0275text(91, "\u062C\u064A\u062F\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 14);
    \u0275\u0275element(93, "input", 40);
    \u0275\u0275elementStart(94, "label", 41);
    \u0275\u0275text(95, "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(96, EarClinicExamForm_div_0_div_96_Template, 2, 0, "div", 19)(97, EarClinicExamForm_div_0_div_97_Template, 3, 1, "div", 20)(98, EarClinicExamForm_div_0_div_98_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 10)(100, "label", 11);
    \u0275\u0275text(101, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631): ");
    \u0275\u0275elementStart(102, "span", 12);
    \u0275\u0275text(103, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 13)(105, "div", 14);
    \u0275\u0275element(106, "input", 42);
    \u0275\u0275elementStart(107, "label", 43);
    \u0275\u0275text(108, "\u062C\u064A\u062F\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 14);
    \u0275\u0275element(110, "input", 44);
    \u0275\u0275elementStart(111, "label", 45);
    \u0275\u0275text(112, "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(113, EarClinicExamForm_div_0_div_113_Template, 2, 0, "div", 19)(114, EarClinicExamForm_div_0_div_114_Template, 3, 1, "div", 20)(115, EarClinicExamForm_div_0_div_115_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "h6", 46);
    \u0275\u0275text(117, "\u0627\u0644\u0623\u0646\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 9)(119, "div", 10)(120, "label", 47);
    \u0275\u0275text(121, "\u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0645\u064A\u0646):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 48)(123, "div", 14);
    \u0275\u0275element(124, "input", 49);
    \u0275\u0275elementStart(125, "label", 50);
    \u0275\u0275text(126, "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 14);
    \u0275\u0275element(128, "input", 51);
    \u0275\u0275elementStart(129, "label", 52);
    \u0275\u0275text(130, "\u0628\u0633\u064A\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 14);
    \u0275\u0275element(132, "input", 53);
    \u0275\u0275elementStart(133, "label", 54);
    \u0275\u0275text(134, "\u0645\u062A\u0648\u0633\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 14);
    \u0275\u0275element(136, "input", 55);
    \u0275\u0275elementStart(137, "label", 56);
    \u0275\u0275text(138, "\u0634\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(139, "div", 10)(140, "label", 47);
    \u0275\u0275text(141, "\u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0633\u0627\u0631):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 48)(143, "div", 14);
    \u0275\u0275element(144, "input", 57);
    \u0275\u0275elementStart(145, "label", 58);
    \u0275\u0275text(146, "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 14);
    \u0275\u0275element(148, "input", 59);
    \u0275\u0275elementStart(149, "label", 60);
    \u0275\u0275text(150, "\u0628\u0633\u064A\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 14);
    \u0275\u0275element(152, "input", 61);
    \u0275\u0275elementStart(153, "label", 62);
    \u0275\u0275text(154, "\u0645\u062A\u0648\u0633\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 14);
    \u0275\u0275element(156, "input", 63);
    \u0275\u0275elementStart(157, "label", 64);
    \u0275\u0275text(158, "\u0634\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(159, "div", 9)(160, "div", 10)(161, "label", 47);
    \u0275\u0275text(162, "\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "div", 48)(164, "div", 14);
    \u0275\u0275element(165, "input", 65);
    \u0275\u0275elementStart(166, "label", 66);
    \u0275\u0275text(167, "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "div", 14);
    \u0275\u0275element(169, "input", 67);
    \u0275\u0275elementStart(170, "label", 68);
    \u0275\u0275text(171, "\u0628\u0633\u064A\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "div", 14);
    \u0275\u0275element(173, "input", 69);
    \u0275\u0275elementStart(174, "label", 70);
    \u0275\u0275text(175, "\u0645\u062A\u0648\u0633\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div", 14);
    \u0275\u0275element(177, "input", 71);
    \u0275\u0275elementStart(178, "label", 72);
    \u0275\u0275text(179, "\u0634\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(180, "div", 10)(181, "label", 47);
    \u0275\u0275text(182, "\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "div", 48)(184, "div", 14);
    \u0275\u0275element(185, "input", 73);
    \u0275\u0275elementStart(186, "label", 74);
    \u0275\u0275text(187, "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "div", 14);
    \u0275\u0275element(189, "input", 75);
    \u0275\u0275elementStart(190, "label", 76);
    \u0275\u0275text(191, "\u0628\u0633\u064A\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "div", 14);
    \u0275\u0275element(193, "input", 77);
    \u0275\u0275elementStart(194, "label", 78);
    \u0275\u0275text(195, "\u0645\u062A\u0648\u0633\u0637\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 14);
    \u0275\u0275element(197, "input", 79);
    \u0275\u0275elementStart(198, "label", 80);
    \u0275\u0275text(199, "\u0634\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(200, "h6", 46);
    \u0275\u0275text(201, "\u0627\u0644\u0641\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "div", 9)(203, "div", 81)(204, "div", 82)(205, "div", 83)(206, "input", 84);
    \u0275\u0275listener("change", function EarClinicExamForm_div_0_Template_input_change_206_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMouthOption("\u0644\u0627 \u064A\u0648\u062C\u062F", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "label", 85);
    \u0275\u0275text(208, "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(209, "div", 83)(210, "input", 86);
    \u0275\u0275listener("change", function EarClinicExamForm_div_0_Template_input_change_210_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMouthOption("\u0633\u0648\u064A", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "label", 87);
    \u0275\u0275text(212, "\u0633\u0648\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 83)(214, "input", 88);
    \u0275\u0275listener("change", function EarClinicExamForm_div_0_Template_input_change_214_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMouthOption("\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "label", 89);
    \u0275\u0275text(216, "\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "div", 83)(218, "input", 90);
    \u0275\u0275listener("change", function EarClinicExamForm_div_0_Template_input_change_218_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMouthOption("\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "label", 91);
    \u0275\u0275text(220, "\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "div", 83)(222, "input", 92);
    \u0275\u0275listener("change", function EarClinicExamForm_div_0_Template_input_change_222_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMouthOption("\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "label", 93);
    \u0275\u0275text(224, "\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(225, EarClinicExamForm_div_0_div_225_Template, 3, 1, "div", 20)(226, EarClinicExamForm_div_0_div_226_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(227, "div", 9)(228, "div", 81)(229, "label", 11);
    \u0275\u0275text(230, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(231, "textarea", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(232, "h6", 46);
    \u0275\u0275text(233, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "div", 9)(235, "div", 10)(236, "label", 11);
    \u0275\u0275text(237, "\u0645\u0642\u0628\u0648\u0644 / \u0645\u0631\u0641\u0648\u0636 / \u062A\u0623\u062C\u064A\u0644: ");
    \u0275\u0275elementStart(238, "span", 12);
    \u0275\u0275text(239, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(240, "select", 95);
    \u0275\u0275template(241, EarClinicExamForm_div_0_option_241_Template, 2, 2, "option", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275template(242, EarClinicExamForm_div_0_div_242_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "div", 10)(244, "label", 11);
    \u0275\u0275text(245, "\u0627\u0644\u0633\u0628\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(246, "input", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(247, "div", 98)(248, "button", 99);
    \u0275\u0275listener("click", function EarClinicExamForm_div_0_Template_button_click_248_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(249, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "button", 100);
    \u0275\u0275template(251, EarClinicExamForm_div_0_span_251_Template, 1, 0, "span", 101);
    \u0275\u0275text(252, " \u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635 ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_12_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_22_0;
    let tmp_25_0;
    let tmp_35_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.examForm);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.examForm.get("rightTympanicMembrane")) == null ? null : tmp_2_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("rightTympanicMembrane"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("rightTympanicMembrane"));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.examForm.get("leftTympanicMembrane")) == null ? null : tmp_5_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("leftTympanicMembrane"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("leftTympanicMembrane"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.examForm.get("rightHearing")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.examForm.get("rightHearing")) == null ? null : tmp_8_0.touched))("is-valid", ctx_r1.isFieldValid("rightHearing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("rightHearing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("rightHearing"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.examForm.get("leftHearing")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.examForm.get("leftHearing")) == null ? null : tmp_12_0.touched))("is-valid", ctx_r1.isFieldValid("leftHearing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("leftHearing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("leftHearing"));
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx_r1.examForm.get("resonators")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.examForm.get("resonators")) == null ? null : tmp_16_0.touched))("is-valid", ctx_r1.isFieldValid("resonators"));
    \u0275\u0275property("value", ((tmp_18_0 = ctx_r1.examForm.get("resonators")) == null ? null : tmp_18_0.value) || "");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.resonatorOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("resonators"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("resonators"));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ((tmp_22_0 = ctx_r1.examForm.get("rightWhisperTest")) == null ? null : tmp_22_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("rightWhisperTest"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("rightWhisperTest"));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ((tmp_25_0 = ctx_r1.examForm.get("leftWhisperTest")) == null ? null : tmp_25_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("leftWhisperTest"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("leftWhisperTest"));
    \u0275\u0275advance(91);
    \u0275\u0275property("checked", ctx_r1.isMouthOptionSelected("\u0644\u0627 \u064A\u0648\u062C\u062F"));
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isMouthOptionSelected("\u0633\u0648\u064A"));
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isMouthOptionSelected("\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642"));
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isMouthOptionSelected("\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644"));
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isMouthOptionSelected("\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("mouth"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldValid("mouth"));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ((tmp_35_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_35_0.invalid) && ((tmp_35_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_35_0.touched))("is-valid", ctx_r1.isFieldValid("resultID"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.results);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getErrorMessage("resultID"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.examForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var EarClinicExamForm = class _EarClinicExamForm {
  fb;
  examService;
  authService;
  toastr;
  applicantFileNumber = "";
  examAdded = new EventEmitter();
  examForm;
  results = [];
  loading = false;
  showModal = false;
  // قيم الرنانات الشائعة - بأشكال أسهم
  resonatorOptions = [
    "\u2192",
    // سهم لليمين (الصوت يسمع في الأذن اليمنى)
    "\u2190",
    // سهم لليسار (الصوت يسمع في الأذن اليسرى)
    "=",
    // متساوي (الصوت يسمع في الوسط)
    "\u2192\u2192",
    // سهمين لليمين
    "\u2190\u2190",
    // سهمين لليسار
    "\u2191",
    // سهم للأعلى
    "\u2193",
    // سهم للأسفل
    "\u2192\u2191",
    // سهم لليمين وأعلى
    "\u2190\u2191",
    // سهم لليسار وأعلى
    "\u2192\u2193",
    // سهم لليمين وأسفل
    "\u2190\u2193",
    // سهم لليسار وأسفل
    "\u2194",
    // سهم ذهاب وإياب
    "\u2197",
    // سهم قطري لليمين وأعلى
    "\u2196",
    // سهم قطري لليسار وأعلى
    "\u2198",
    // سهم قطري لليمين وأسفل
    "\u2199",
    // سهم قطري لليسار وأسفل
    "\u2713",
    // علامة صح
    "\u2717",
    // علامة خطأ
    "\u25CB",
    // دائرة
    "\u25CF"
    // دائرة مملوءة
  ];
  currentResonatorIndex = 0;
  statusFields = [
    { control: "rightTympanicMembrane", otherControl: "rightTympanicMembraneOther" },
    { control: "leftTympanicMembrane", otherControl: "leftTympanicMembraneOther" }
  ];
  constructor(fb, examService, authService, toastr) {
    this.fb = fb;
    this.examService = examService;
    this.authService = authService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.initForm();
    this.loadResults();
  }
  initForm() {
    this.examForm = this.fb.group({
      rightTympanicMembrane: ["\u0633\u0644\u064A\u0645", Validators.required],
      rightTympanicMembraneOther: [""],
      leftTympanicMembrane: ["\u0633\u0644\u064A\u0645", Validators.required],
      leftTympanicMembraneOther: [""],
      rightHearing: ["", Validators.required],
      leftHearing: ["", Validators.required],
      resonators: ["", Validators.required],
      rightWhisperTest: ["", Validators.required],
      rightWhisperTestOther: [""],
      leftWhisperTest: ["", Validators.required],
      leftWhisperTestOther: [""],
      rightHugeMates: ["\u0644\u0627 \u064A\u0648\u062C\u062F"],
      leftHugeMates: ["\u0644\u0627 \u064A\u0648\u062C\u062F"],
      rightString: ["\u0644\u0627 \u064A\u0648\u062C\u062F"],
      leftString: ["\u0644\u0627 \u064A\u0648\u062C\u062F"],
      mouth: ["", Validators.required],
      // Array of selected options as comma-separated string
      otherDiseases: [""],
      resultID: [null, Validators.required],
      reason: [""]
    });
    this.examForm.get("resonators")?.valueChanges.subscribe((value) => {
      const index = this.resonatorOptions.indexOf(value);
      if (index !== -1) {
        this.currentResonatorIndex = index;
      }
    });
    this.examForm.get("rightTympanicMembrane")?.valueChanges.subscribe((value) => {
      if (value === "\u063A\u064A\u0631 \u0630\u0644\u0643") {
        this.examForm.get("rightTympanicMembraneOther")?.setValidators([Validators.required]);
      } else {
        this.examForm.get("rightTympanicMembraneOther")?.clearValidators();
        this.examForm.get("rightTympanicMembraneOther")?.setValue("");
      }
      this.examForm.get("rightTympanicMembraneOther")?.updateValueAndValidity({ emitEvent: false });
    });
    this.examForm.get("leftTympanicMembrane")?.valueChanges.subscribe((value) => {
      if (value === "\u063A\u064A\u0631 \u0630\u0644\u0643") {
        this.examForm.get("leftTympanicMembraneOther")?.setValidators([Validators.required]);
      } else {
        this.examForm.get("leftTympanicMembraneOther")?.clearValidators();
        this.examForm.get("leftTympanicMembraneOther")?.setValue("");
      }
      this.examForm.get("leftTympanicMembraneOther")?.updateValueAndValidity({ emitEvent: false });
    });
    this.examForm.get("rightWhisperTest")?.valueChanges.subscribe((value) => {
      if (value === "\u063A\u064A\u0631 \u0630\u0644\u0643") {
        this.examForm.get("rightWhisperTestOther")?.setValidators([Validators.required]);
      } else {
        this.examForm.get("rightWhisperTestOther")?.clearValidators();
        this.examForm.get("rightWhisperTestOther")?.setValue("");
      }
      this.examForm.get("rightWhisperTestOther")?.updateValueAndValidity({ emitEvent: false });
    });
    this.examForm.get("leftWhisperTest")?.valueChanges.subscribe((value) => {
      if (value === "\u063A\u064A\u0631 \u0630\u0644\u0643") {
        this.examForm.get("leftWhisperTestOther")?.setValidators([Validators.required]);
      } else {
        this.examForm.get("leftWhisperTestOther")?.clearValidators();
        this.examForm.get("leftWhisperTestOther")?.setValue("");
      }
      this.examForm.get("leftWhisperTestOther")?.updateValueAndValidity({ emitEvent: false });
    });
  }
  loadResults() {
    this.examService.getResults().subscribe({
      next: (response) => {
        if (response.data && response.data.items) {
          this.results = response.data.items;
        } else if (Array.isArray(response)) {
          this.results = response;
        } else if (response.items) {
          this.results = response.items;
        } else {
          this.results = [];
        }
        if (this.results.length === 0) {
          this.toastr.warning("\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0645\u062A\u0627\u062D\u0629");
        }
      },
      error: (error) => {
        this.toastr.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C");
        this.results = [];
      }
    });
  }
  onSubmit() {
    if (this.examForm.valid) {
      this.loading = true;
      const formData = this.examForm.value;
      const rightTympanicMembrane = formData.rightTympanicMembrane === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.rightTympanicMembraneOther || "" : formData.rightTympanicMembrane;
      const leftTympanicMembrane = formData.leftTympanicMembrane === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.leftTympanicMembraneOther || "" : formData.leftTympanicMembrane;
      const examData = {
        applicantFileNumber: this.applicantFileNumber,
        doctorID: Number(this.authService.getDoctorId()) || 0,
        rightTympanicMembrane,
        leftTympanicMembrane,
        rightHearing: formData.rightHearing,
        leftHearing: formData.leftHearing,
        resonators: formData.resonators,
        rightWhisperTest: formData.rightWhisperTest === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.rightWhisperTestOther || "" : formData.rightWhisperTest,
        leftWhisperTest: formData.leftWhisperTest === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.leftWhisperTestOther || "" : formData.leftWhisperTest,
        isRightHugeMates: formData.rightHugeMates !== "\u0644\u0627 \u064A\u0648\u062C\u062F",
        isLeftHugeMates: formData.leftHugeMates !== "\u0644\u0627 \u064A\u0648\u062C\u062F",
        rightString: formData.rightString === "\u0644\u0627 \u064A\u0648\u062C\u062F" ? "" : formData.rightString,
        leftString: formData.leftString === "\u0644\u0627 \u064A\u0648\u062C\u062F" ? "" : formData.leftString,
        mouth: formData.mouth || "",
        otherDiseases: formData.otherDiseases || "",
        resultID: formData.resultID,
        reason: formData.reason || ""
      };
      this.examService.addEarClinicExam(examData).subscribe({
        next: (response) => {
          this.toastr.success("\u062A\u0645 \u062D\u0641\u0638 \u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629 \u0628\u0646\u062C\u0627\u062D");
          this.resetForm();
          this.showModal = false;
          this.loading = false;
          this.examAdded.emit();
        },
        error: (error) => {
          this.toastr.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635");
          this.loading = false;
        }
      });
    } else {
      Object.keys(this.examForm.controls).forEach((key) => {
        const control = this.examForm.get(key);
        if (control?.invalid) {
        }
      });
      this.toastr.error("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
    }
  }
  resetForm() {
    this.examForm.reset(this.getDefaultFormValues());
    this.showModal = false;
  }
  addEarClinicExam() {
    this.showModal = true;
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.examForm.reset(this.getDefaultFormValues());
  }
  // Helper method لتحديد رسالة الخطأ
  getErrorMessage(controlName) {
    const control = this.examForm.get(controlName);
    if (control?.invalid && control?.touched) {
      if (control.errors?.["required"]) {
        return "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
      }
    }
    return "";
  }
  // Helper method للتحقق من صلاحية الحقل
  isFieldValid(controlName) {
    const control = this.examForm.get(controlName);
    return !!(control?.valid && control?.touched);
  }
  // Helper method للتحقق من عدم صلاحية الحقل
  isFieldInvalid(controlName) {
    const control = this.examForm.get(controlName);
    return !!(control?.invalid && control?.touched);
  }
  // التنقل بين قيم الرنانات
  navigateResonator(direction) {
    if (direction === "next") {
      this.currentResonatorIndex = (this.currentResonatorIndex + 1) % this.resonatorOptions.length;
    } else {
      this.currentResonatorIndex = this.currentResonatorIndex === 0 ? this.resonatorOptions.length - 1 : this.currentResonatorIndex - 1;
    }
    this.examForm.patchValue({ resonators: this.resonatorOptions[this.currentResonatorIndex] });
  }
  // تحديد قيمة الرنانات مباشرة
  selectResonator(value) {
    this.currentResonatorIndex = this.resonatorOptions.indexOf(value);
    if (this.currentResonatorIndex === -1) {
      this.currentResonatorIndex = 0;
    }
    this.examForm.patchValue({ resonators: value });
  }
  // خيارات الفم
  mouthOptions = ["\u0644\u0627 \u064A\u0648\u062C\u062F", "\u0633\u0648\u064A", "\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642", "\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644", "\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A"];
  // التحقق من اختيار خيار معين في الفم
  isMouthOptionSelected(option) {
    const currentValue = this.examForm.get("mouth")?.value || "";
    if (!currentValue)
      return false;
    const selectedOptions = currentValue.split(",").map((s) => s.trim());
    return selectedOptions.includes(option);
  }
  // تبديل اختيار خيار في الفم
  toggleMouthOption(option, event) {
    const checkbox = event.target;
    const currentValue = this.examForm.get("mouth")?.value || "";
    let selectedOptions = currentValue ? currentValue.split(",").map((s) => s.trim()).filter((s) => s) : [];
    if (checkbox.checked) {
      if (!selectedOptions.includes(option)) {
        selectedOptions.push(option);
      }
    } else {
      selectedOptions = selectedOptions.filter((opt) => opt !== option);
    }
    const newValue = selectedOptions.join(", ");
    this.examForm.patchValue({ mouth: newValue });
    if (selectedOptions.length === 0) {
      this.examForm.get("mouth")?.setValidators([Validators.required]);
    } else if (selectedOptions.length === 1 && selectedOptions[0] === "\u0644\u0627 \u064A\u0648\u062C\u062F") {
      this.examForm.get("mouth")?.clearValidators();
    } else {
      if (selectedOptions.includes("\u0644\u0627 \u064A\u0648\u062C\u062F")) {
        selectedOptions = selectedOptions.filter((opt) => opt !== "\u0644\u0627 \u064A\u0648\u062C\u062F");
        const newValue2 = selectedOptions.join(", ");
        this.examForm.patchValue({ mouth: newValue2 });
      }
      this.examForm.get("mouth")?.clearValidators();
    }
    this.examForm.get("mouth")?.updateValueAndValidity({ emitEvent: false });
  }
  getDefaultFormValues() {
    return this.statusFields.reduce((acc, field) => {
      acc[field.control] = "\u0633\u0644\u064A\u0645";
      acc[field.otherControl] = "";
      return acc;
    }, {
      rightHearing: "",
      leftHearing: "",
      resonators: "",
      rightWhisperTest: "",
      rightWhisperTestOther: "",
      leftWhisperTest: "",
      leftWhisperTestOther: "",
      rightHugeMates: "\u0644\u0627 \u064A\u0648\u062C\u062F",
      leftHugeMates: "\u0644\u0627 \u064A\u0648\u062C\u062F",
      rightString: "\u0644\u0627 \u064A\u0648\u062C\u062F",
      leftString: "\u0644\u0627 \u064A\u0648\u062C\u062F",
      mouth: "",
      otherDiseases: "",
      resultID: null,
      reason: ""
    });
  }
  static \u0275fac = function EarClinicExamForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EarClinicExamForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EarClinicExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EarClinicExamForm, selectors: [["app-ear-clinic-exam-form"]], inputs: { applicantFileNumber: "applicantFileNumber" }, outputs: { examAdded: "examAdded" }, decls: 1, vars: 1, consts: [["class", "modal-backdrop", 4, "ngIf"], [1, "modal-backdrop"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", "ms-0", "me-auto", 3, "click"], [1, "modal-body"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "section-title", "mb-3"], [1, "row", "g-3", "mb-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], [1, "d-flex", "flex-wrap", "gap-3", "mb-2"], [1, "form-check"], ["type", "radio", "name", "rightTympanicMembrane", "id", "rightTympanicMembrane_normal", "value", "\u0633\u0644\u064A\u0645", "formControlName", "rightTympanicMembrane", 1, "form-check-input"], ["for", "rightTympanicMembrane_normal", 1, "form-check-label"], ["type", "radio", "name", "rightTympanicMembrane", "id", "rightTympanicMembrane_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "rightTympanicMembrane", 1, "form-check-input"], ["for", "rightTympanicMembrane_other", 1, "form-check-label"], ["class", "mt-2", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "valid-feedback", 4, "ngIf"], ["type", "radio", "name", "leftTympanicMembrane", "id", "leftTympanicMembrane_normal", "value", "\u0633\u0644\u064A\u0645", "formControlName", "leftTympanicMembrane", 1, "form-check-input"], ["for", "leftTympanicMembrane_normal", 1, "form-check-label"], ["type", "radio", "name", "leftTympanicMembrane", "id", "leftTympanicMembrane_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "leftTympanicMembrane", 1, "form-check-input"], ["for", "leftTympanicMembrane_other", 1, "form-check-label"], ["type", "text", "formControlName", "rightHearing", 1, "form-control"], ["type", "text", "formControlName", "leftHearing", 1, "form-control"], [1, "resonator-selector"], [1, "input-group"], ["type", "button", "title", "\u0627\u0644\u0633\u0627\u0628\u0642", 1, "btn", "btn-outline-secondary", "resonator-nav-btn", 3, "click"], [1, "pi", "pi-chevron-right"], ["type", "text", "formControlName", "resonators", "readonly", "", 1, "form-control", "text-center", "resonator-input", 3, "value"], ["type", "button", "title", "\u0627\u0644\u062A\u0627\u0644\u064A", 1, "btn", "btn-outline-secondary", "resonator-nav-btn", 3, "click"], [1, "pi", "pi-chevron-left"], [1, "resonator-options", "mt-2"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "resonator-option-btn", 3, "active"], ["type", "radio", "name", "rightWhisperTest", "id", "rightWhisperTest_good", "value", "\u062C\u064A\u062F\u0629", "formControlName", "rightWhisperTest", 1, "form-check-input"], ["for", "rightWhisperTest_good", 1, "form-check-label"], ["type", "radio", "name", "rightWhisperTest", "id", "rightWhisperTest_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "rightWhisperTest", 1, "form-check-input"], ["for", "rightWhisperTest_other", 1, "form-check-label"], ["type", "radio", "name", "leftWhisperTest", "id", "leftWhisperTest_good", "value", "\u062C\u064A\u062F\u0629", "formControlName", "leftWhisperTest", 1, "form-check-input"], ["for", "leftWhisperTest_good", 1, "form-check-label"], ["type", "radio", "name", "leftWhisperTest", "id", "leftWhisperTest_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "leftWhisperTest", 1, "form-check-input"], ["for", "leftWhisperTest_other", 1, "form-check-label"], [1, "section-title", "mb-3", "mt-4"], [1, "form-label", "mb-2"], [1, "d-flex", "flex-wrap", "gap-3"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMates_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMates_none", 1, "form-check-label"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMates_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMates_simple", 1, "form-check-label"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMates_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMates_medium", 1, "form-check-label"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMates_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMates_severe", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMates_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMates_none", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMates_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMates_simple", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMates_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMates_medium", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMates_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMates_severe", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightString_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightString_none", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightString_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightString_simple", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightString_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightString_medium", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightString_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightString_severe", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftString_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftString_none", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftString_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftString_simple", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftString_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftString_medium", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftString_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftString_severe", 1, "form-check-label"], [1, "col-12"], [1, "ms-3"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "mouthNone", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthNone", 1, "form-check-label"], ["type", "checkbox", "id", "mouthNormal", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthNormal", 1, "form-check-label"], ["type", "checkbox", "id", "mouthMalocclusion", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthMalocclusion", 1, "form-check-label"], ["type", "checkbox", "id", "mouthClick", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthClick", 1, "form-check-label"], ["type", "checkbox", "id", "mouthSubluxation", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthSubluxation", 1, "form-check-label"], ["rows", "3", "formControlName", "otherDiseases", 1, "form-control"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "reason", 1, "form-control"], [1, "modal-footer", "mt-4"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "mt-2"], ["type", "text", "formControlName", "rightTympanicMembraneOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)", 1, "form-control"], [1, "invalid-feedback"], [1, "pi", "pi-exclamation-circle"], [1, "valid-feedback"], [1, "pi", "pi-check-circle"], ["type", "text", "formControlName", "leftTympanicMembraneOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)", 1, "form-control"], ["type", "button", 1, "btn", "btn-sm", "resonator-option-btn", 3, "click"], ["type", "text", "formControlName", "rightWhisperTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)", 1, "form-control"], ["type", "text", "formControlName", "leftWhisperTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)", 1, "form-control"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function EarClinicExamForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EarClinicExamForm_div_0_Template, 253, 47, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  margin: 0;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1050;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_fadeIn 0.35s ease;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  padding: 1.5rem 2rem !important;\n  border-bottom: 2px solid #B9A779 !important;\n  border-radius: 16px 16px 0 0 !important;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  overflow-y: auto;\n  max-height: calc(85vh - 100px);\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--neutral-light);\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary-medium);\n  border-radius: var(--radius-sm);\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-dark);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: var(--spacing-lg) 0 var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 2px solid var(--primary-medium);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.section-title[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 20px;\n  background: var(--accent-gold);\n  border-radius: var(--radius-sm);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #054239 !important;\n  border: 2px solid #054239 !important;\n  color: white !important;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #428177 !important;\n  border-color: #428177 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #3D3A3B !important;\n  border: 2px solid #3D3A3B !important;\n  color: white !important;\n  transition: all 0.3s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #161616 !important;\n  border-color: #161616 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  background: white;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 16px;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n}\n.invalid-feedback[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.form-control.is-valid[_ngcontent-%COMP%], \n.form-select.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745 !important;\n}\n.form-control.is-valid[_ngcontent-%COMP%]:focus, \n.form-select.is-valid[_ngcontent-%COMP%]:focus {\n  border-color: #28a745 !important;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;\n}\n.form-control.is-valid[_ngcontent-%COMP%]::after, \n.form-select.is-valid[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  color: #28a745;\n  font-weight: bold;\n  margin-right: 0.5rem;\n}\n.form-check[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem !important;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.form-check[_ngcontent-%COMP%]:hover {\n  background-color: rgba(66, 129, 119, 0.05);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  border: 2px solid var(--primary-medium) !important;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  background-color: white;\n  position: relative;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-dark) !important;\n  transform: scale(1.1);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-dark) !important;\n  border-color: var(--primary-dark) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.2);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked::after {\n  background-color: white;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  transform: scale(1);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-dark) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.15) !important;\n  outline: none;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0 !important;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: var(--font-size-base);\n  color: var(--neutral-dark);\n  flex: 0 0 auto;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n}\n.form-check[_ngcontent-%COMP%]:has(.form-check-input:checked) {\n  background-color: rgba(5, 66, 57, 0.08);\n}\n.form-check[_ngcontent-%COMP%]:has(.form-check-input:checked)   .form-check-label[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.d-flex.gap-3[_ngcontent-%COMP%] {\n  gap: 0.75rem !important;\n}\n.d-flex.gap-3[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  gap: 0.5rem !important;\n  margin-bottom: 0.25rem !important;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%] {\n  background: var(--primary-dark) !important;\n  border: none !important;\n  color: white !important;\n  padding: 0.75rem 1rem;\n  font-size: 1.25rem;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-medium) !important;\n  transform: scale(1.05);\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  background: white;\n  border: 2px solid var(--primary-medium);\n  border-left: none;\n  border-right: none;\n  padding: 0.75rem 1rem;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  box-shadow: none;\n  outline: none;\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background-color: rgba(40, 167, 69, 0.05);\n}\n.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.05);\n}\n.resonator-selector[_ngcontent-%COMP%]   .resonator-options[_ngcontent-%COMP%]   .resonator-option-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid var(--primary-medium);\n  color: var(--primary-dark);\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: var(--radius-md);\n  transition: all 0.2s ease;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.resonator-selector[_ngcontent-%COMP%]   .resonator-options[_ngcontent-%COMP%]   .resonator-option-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(66, 129, 119, 0.1);\n  border-color: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.resonator-selector[_ngcontent-%COMP%]   .resonator-options[_ngcontent-%COMP%]   .resonator-option-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-color: var(--primary-dark);\n  color: white;\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(5, 66, 57, 0.3);\n}\n/*# sourceMappingURL=ear-clinic-exam-form.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EarClinicExamForm, [{
    type: Component,
    args: [{ selector: "app-ear-clinic-exam-form", standalone: true, imports: [ReactiveFormsModule, CommonModule], template: `<!-- \u0627\u0644\u0645\u0648\u062F\u0627\u0644 -->\r
<div class="modal-backdrop" *ngIf="showModal">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <!-- \u0627\u0644\u0647\u064A\u062F\u0631 -->\r
    <div class="modal-header">\r
      <h5 class="modal-title">\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0623\u0630\u0646 \u0648\u0623\u0646\u0641 \u0648\u062D\u0646\u062C\u0631\u0629</h5>\r
      <button type="button" class="btn-close ms-0 me-auto" (click)="closeModal()"></button>\r
    </div>\r
    <!-- \u0627\u0644\u0628\u0648\u062F\u064A -->\r
    <div class="modal-body">\r
      <form [formGroup]="examForm" (ngSubmit)="onSubmit()" novalidate>\r
        \r
        <!-- \u0642\u0633\u0645 \u0627\u0644\u0623\u0630\u0646 -->\r
        <h6 class="section-title mb-3">\u0627\u0644\u0623\u0630\u0646</h6>\r
        \r
        <!-- \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label">\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646): <span class="text-danger">*</span></label>\r
            <div class="d-flex flex-wrap gap-3 mb-2">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightTympanicMembrane"\r
                  id="rightTympanicMembrane_normal"\r
                  value="\u0633\u0644\u064A\u0645"\r
                  formControlName="rightTympanicMembrane" />\r
                <label class="form-check-label" for="rightTympanicMembrane_normal">\u0633\u0644\u064A\u0645</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightTympanicMembrane"\r
                  id="rightTympanicMembrane_other"\r
                  value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                  formControlName="rightTympanicMembrane" />\r
                <label class="form-check-label" for="rightTympanicMembrane_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
              </div>\r
            </div>\r
            <div *ngIf="examForm.get('rightTympanicMembrane')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
              <input\r
                type="text"\r
                class="form-control"\r
                formControlName="rightTympanicMembraneOther"\r
                placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)"\r
                [class.is-invalid]="examForm.get('rightTympanicMembraneOther')?.invalid && examForm.get('rightTympanicMembraneOther')?.touched" />\r
              <div class="invalid-feedback" *ngIf="getErrorMessage('rightTympanicMembraneOther')">\r
                <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('rightTympanicMembraneOther') }}\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('rightTympanicMembrane')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('rightTympanicMembrane') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('rightTympanicMembrane')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label">\u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631): <span class="text-danger">*</span></label>\r
            <div class="d-flex flex-wrap gap-3 mb-2">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftTympanicMembrane"\r
                  id="leftTympanicMembrane_normal"\r
                  value="\u0633\u0644\u064A\u0645"\r
                  formControlName="leftTympanicMembrane" />\r
                <label class="form-check-label" for="leftTympanicMembrane_normal">\u0633\u0644\u064A\u0645</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftTympanicMembrane"\r
                  id="leftTympanicMembrane_other"\r
                  value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                  formControlName="leftTympanicMembrane" />\r
                <label class="form-check-label" for="leftTympanicMembrane_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
              </div>\r
            </div>\r
            <div *ngIf="examForm.get('leftTympanicMembrane')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
              <input\r
                type="text"\r
                class="form-control"\r
                formControlName="leftTympanicMembraneOther"\r
                placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)"\r
                [class.is-invalid]="examForm.get('leftTympanicMembraneOther')?.invalid && examForm.get('leftTympanicMembraneOther')?.touched" />\r
              <div class="invalid-feedback" *ngIf="getErrorMessage('leftTympanicMembraneOther')">\r
                <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('leftTympanicMembraneOther') }}\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('leftTympanicMembrane')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('leftTympanicMembrane') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('leftTympanicMembrane')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0633\u0645\u0639 -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label">\u0627\u0644\u0633\u0645\u0639 (\u064A\u0645\u064A\u0646) R: <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" formControlName="rightHearing"\r
              [class.is-invalid]="examForm.get('rightHearing')?.invalid && examForm.get('rightHearing')?.touched"\r
              [class.is-valid]="isFieldValid('rightHearing')" />\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('rightHearing')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('rightHearing') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('rightHearing')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label">\u0627\u0644\u0633\u0645\u0639 (\u064A\u0633\u0627\u0631) L: <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" formControlName="leftHearing"\r
              [class.is-invalid]="examForm.get('leftHearing')?.invalid && examForm.get('leftHearing')?.touched"\r
              [class.is-valid]="isFieldValid('leftHearing')" />\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('leftHearing')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('leftHearing') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('leftHearing')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label">\u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A W: <span class="text-danger">*</span></label>\r
            <div class="resonator-selector">\r
              <div class="input-group">\r
                <button \r
                  type="button" \r
                  class="btn btn-outline-secondary resonator-nav-btn"\r
                  (click)="navigateResonator('prev')"\r
                  title="\u0627\u0644\u0633\u0627\u0628\u0642">\r
                  <i class="pi pi-chevron-right"></i>\r
                </button>\r
                <input \r
                  type="text" \r
                  class="form-control text-center resonator-input" \r
                  formControlName="resonators"\r
                  [class.is-invalid]="examForm.get('resonators')?.invalid && examForm.get('resonators')?.touched"\r
                  [class.is-valid]="isFieldValid('resonators')"\r
                  readonly\r
                  [value]="examForm.get('resonators')?.value || ''" />\r
                <button \r
                  type="button" \r
                  class="btn btn-outline-secondary resonator-nav-btn"\r
                  (click)="navigateResonator('next')"\r
                  title="\u0627\u0644\u062A\u0627\u0644\u064A">\r
                  <i class="pi pi-chevron-left"></i>\r
                </button>\r
              </div>\r
              <div class="resonator-options mt-2">\r
                <div class="d-flex flex-wrap gap-2">\r
                  @for (option of resonatorOptions; track option) {\r
                    <button\r
                      type="button"\r
                      class="btn btn-sm resonator-option-btn"\r
                      [class.active]="examForm.get('resonators')?.value === option"\r
                      (click)="selectResonator(option)">\r
                      {{ option }}\r
                    </button>\r
                  }\r
                </div>\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('resonators')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('resonators') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('resonators')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646): <span class="text-danger">*</span></label>\r
            <div class="d-flex flex-wrap gap-3 mb-2">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightWhisperTest"\r
                  id="rightWhisperTest_good"\r
                  value="\u062C\u064A\u062F\u0629"\r
                  formControlName="rightWhisperTest" />\r
                <label class="form-check-label" for="rightWhisperTest_good">\u062C\u064A\u062F\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightWhisperTest"\r
                  id="rightWhisperTest_other"\r
                  value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                  formControlName="rightWhisperTest" />\r
                <label class="form-check-label" for="rightWhisperTest_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
              </div>\r
            </div>\r
            <div *ngIf="examForm.get('rightWhisperTest')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
              <input\r
                type="text"\r
                class="form-control"\r
                formControlName="rightWhisperTestOther"\r
                placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)" />\r
            </div>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('rightWhisperTest')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('rightWhisperTest') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('rightWhisperTest')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631): <span class="text-danger">*</span></label>\r
            <div class="d-flex flex-wrap gap-3 mb-2">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftWhisperTest"\r
                  id="leftWhisperTest_good"\r
                  value="\u062C\u064A\u062F\u0629"\r
                  formControlName="leftWhisperTest" />\r
                <label class="form-check-label" for="leftWhisperTest_good">\u062C\u064A\u062F\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftWhisperTest"\r
                  id="leftWhisperTest_other"\r
                  value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                  formControlName="leftWhisperTest" />\r
                <label class="form-check-label" for="leftWhisperTest_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
              </div>\r
            </div>\r
            <div *ngIf="examForm.get('leftWhisperTest')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
              <input\r
                type="text"\r
                class="form-control"\r
                formControlName="leftWhisperTestOther"\r
                placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)" />\r
            </div>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('leftWhisperTest')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('leftWhisperTest') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('leftWhisperTest')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0642\u0633\u0645 \u0627\u0644\u0623\u0646\u0641 -->\r
        <h6 class="section-title mb-3 mt-4">\u0627\u0644\u0623\u0646\u0641</h6>\r
\r
        <!-- \u0636\u062E\u0627\u0645\u0629 \u0627\u0644\u0642\u0631\u064A\u0646\u0627\u062A -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label mb-2">\u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0645\u064A\u0646):</label>\r
            <div class="d-flex flex-wrap gap-3">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightHugeMates"\r
                  id="rightHugeMates_none"\r
                  value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                  formControlName="rightHugeMates" />\r
                <label class="form-check-label" for="rightHugeMates_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightHugeMates"\r
                  id="rightHugeMates_simple"\r
                  value="\u0628\u0633\u064A\u0637\u0629"\r
                  formControlName="rightHugeMates" />\r
                <label class="form-check-label" for="rightHugeMates_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightHugeMates"\r
                  id="rightHugeMates_medium"\r
                  value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                  formControlName="rightHugeMates" />\r
                <label class="form-check-label" for="rightHugeMates_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightHugeMates"\r
                  id="rightHugeMates_severe"\r
                  value="\u0634\u062F\u064A\u062F\u0629"\r
                  formControlName="rightHugeMates" />\r
                <label class="form-check-label" for="rightHugeMates_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label mb-2">\u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0633\u0627\u0631):</label>\r
            <div class="d-flex flex-wrap gap-3">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftHugeMates"\r
                  id="leftHugeMates_none"\r
                  value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                  formControlName="leftHugeMates" />\r
                <label class="form-check-label" for="leftHugeMates_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftHugeMates"\r
                  id="leftHugeMates_simple"\r
                  value="\u0628\u0633\u064A\u0637\u0629"\r
                  formControlName="leftHugeMates" />\r
                <label class="form-check-label" for="leftHugeMates_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftHugeMates"\r
                  id="leftHugeMates_medium"\r
                  value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                  formControlName="leftHugeMates" />\r
                <label class="form-check-label" for="leftHugeMates_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftHugeMates"\r
                  id="leftHugeMates_severe"\r
                  value="\u0634\u062F\u064A\u062F\u0629"\r
                  formControlName="leftHugeMates" />\r
                <label class="form-check-label" for="leftHugeMates_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0648\u062A\u064A\u0631\u0629 -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label mb-2">\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL:</label>\r
            <div class="d-flex flex-wrap gap-3">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightString"\r
                  id="rightString_none"\r
                  value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                  formControlName="rightString" />\r
                <label class="form-check-label" for="rightString_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightString"\r
                  id="rightString_simple"\r
                  value="\u0628\u0633\u064A\u0637\u0629"\r
                  formControlName="rightString" />\r
                <label class="form-check-label" for="rightString_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightString"\r
                  id="rightString_medium"\r
                  value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                  formControlName="rightString" />\r
                <label class="form-check-label" for="rightString_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="rightString"\r
                  id="rightString_severe"\r
                  value="\u0634\u062F\u064A\u062F\u0629"\r
                  formControlName="rightString" />\r
                <label class="form-check-label" for="rightString_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label mb-2">\u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR:</label>\r
            <div class="d-flex flex-wrap gap-3">\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftString"\r
                  id="leftString_none"\r
                  value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                  formControlName="leftString" />\r
                <label class="form-check-label" for="leftString_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftString"\r
                  id="leftString_simple"\r
                  value="\u0628\u0633\u064A\u0637\u0629"\r
                  formControlName="leftString" />\r
                <label class="form-check-label" for="leftString_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftString"\r
                  id="leftString_medium"\r
                  value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                  formControlName="leftString" />\r
                <label class="form-check-label" for="leftString_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
              </div>\r
              <div class="form-check">\r
                <input\r
                  class="form-check-input"\r
                  type="radio"\r
                  name="leftString"\r
                  id="leftString_severe"\r
                  value="\u0634\u062F\u064A\u062F\u0629"\r
                  formControlName="leftString" />\r
                <label class="form-check-label" for="leftString_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0641\u0645 -->\r
        <h6 class="section-title mb-3 mt-4">\u0627\u0644\u0641\u0645</h6>\r
        <div class="row g-3 mb-3">\r
          <div class="col-12">\r
            <div class="ms-3">\r
              <div class="form-check mb-2">\r
                <input \r
                  class="form-check-input" \r
                  type="checkbox" \r
                  id="mouthNone"\r
                  [checked]="isMouthOptionSelected('\u0644\u0627 \u064A\u0648\u062C\u062F')"\r
                  (change)="toggleMouthOption('\u0644\u0627 \u064A\u0648\u062C\u062F', $event)" />\r
                <label class="form-check-label" for="mouthNone">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
              </div>\r
              <div class="form-check mb-2">\r
                <input \r
                  class="form-check-input" \r
                  type="checkbox" \r
                  id="mouthNormal"\r
                  [checked]="isMouthOptionSelected('\u0633\u0648\u064A')"\r
                  (change)="toggleMouthOption('\u0633\u0648\u064A', $event)" />\r
                <label class="form-check-label" for="mouthNormal">\u0633\u0648\u064A</label>\r
              </div>\r
              <div class="form-check mb-2">\r
                <input \r
                  class="form-check-input" \r
                  type="checkbox" \r
                  id="mouthMalocclusion"\r
                  [checked]="isMouthOptionSelected('\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642')"\r
                  (change)="toggleMouthOption('\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642', $event)" />\r
                <label class="form-check-label" for="mouthMalocclusion">\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642</label>\r
              </div>\r
              <div class="form-check mb-2">\r
                <input \r
                  class="form-check-input" \r
                  type="checkbox" \r
                  id="mouthClick"\r
                  [checked]="isMouthOptionSelected('\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644')"\r
                  (change)="toggleMouthOption('\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644', $event)" />\r
                <label class="form-check-label" for="mouthClick">\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644</label>\r
              </div>\r
              <div class="form-check mb-2">\r
                <input \r
                  class="form-check-input" \r
                  type="checkbox" \r
                  id="mouthSubluxation"\r
                  [checked]="isMouthOptionSelected('\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A')"\r
                  (change)="toggleMouthOption('\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A', $event)" />\r
                <label class="form-check-label" for="mouthSubluxation">\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A</label>\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('mouth')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('mouth') }}\r
            </div>\r
            <div class="valid-feedback" *ngIf="isFieldValid('mouth')">\r
              <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649 -->\r
        <div class="row g-3 mb-3">\r
          <div class="col-12">\r
            <label class="form-label">\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649:</label>\r
            <textarea class="form-control" rows="3" formControlName="otherDiseases"></textarea>\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0646\u062A\u064A\u062C\u0629 -->\r
        <h6 class="section-title mb-3 mt-4">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-6">\r
            <label class="form-label">\u0645\u0642\u0628\u0648\u0644 / \u0645\u0631\u0641\u0648\u0636 / \u062A\u0623\u062C\u064A\u0644: <span class="text-danger">*</span></label>\r
            <select class="form-select" formControlName="resultID"\r
              [class.is-invalid]="examForm.get('resultID')?.invalid && examForm.get('resultID')?.touched"\r
              [class.is-valid]="isFieldValid('resultID')">\r
              <option *ngFor="let result of results" [value]="result.resultID">\r
                {{ result.description }}\r
              </option>\r
            </select>\r
            <div class="invalid-feedback" *ngIf="getErrorMessage('resultID')">\r
              <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('resultID') }}\r
            </div>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label">\u0627\u0644\u0633\u0628\u0628:</label>\r
            <input type="text" class="form-control" formControlName="reason" />\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0623\u0632\u0631\u0627\u0631 -->\r
        <div class="modal-footer mt-4">\r
          <button type="button" class="btn btn-secondary" (click)="closeModal()">\u0625\u0644\u063A\u0627\u0621</button>\r
          <button type="submit" class="btn btn-primary" [disabled]="examForm.invalid || loading">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
            \u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/ear-doctor.component/ear-clinic-exam-form/ear-clinic-exam-form.scss */\n.modal-backdrop {\n  position: fixed;\n  margin: 0;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1050;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.modal-content {\n  background: #fff;\n  border-radius: 16px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n  animation: fadeIn 0.35s ease;\n}\n.modal-content {\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n  animation: fadeIn 0.3s ease;\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  padding: 1.5rem 2rem !important;\n  border-bottom: 2px solid #B9A779 !important;\n  border-radius: 16px 16px 0 0 !important;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header .modal-title {\n  font-size: 1.5rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-body {\n  padding: var(--spacing-xl);\n  overflow-y: auto;\n  max-height: calc(85vh - 100px);\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: var(--neutral-light);\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: var(--primary-medium);\n  border-radius: var(--radius-sm);\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-dark);\n}\n.section-title {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: var(--spacing-lg) 0 var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 2px solid var(--primary-medium);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.section-title::before {\n  content: "";\n  width: 4px;\n  height: 20px;\n  background: var(--accent-gold);\n  border-radius: var(--radius-sm);\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;\n}\n.btn-primary {\n  background: #054239 !important;\n  border: 2px solid #054239 !important;\n  color: white !important;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #428177 !important;\n  border-color: #428177 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-secondary {\n  background: #3D3A3B !important;\n  border: 2px solid #3D3A3B !important;\n  color: white !important;\n  transition: all 0.3s ease;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #161616 !important;\n  border-color: #161616 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.modal-footer {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  background: white;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 16px;\n}\n.invalid-feedback {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n}\n.invalid-feedback i {\n  margin-left: 0.25rem;\n}\n.form-control.is-valid,\n.form-select.is-valid {\n  border-color: #28a745 !important;\n}\n.form-control.is-valid:focus,\n.form-select.is-valid:focus {\n  border-color: #28a745 !important;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;\n}\n.form-control.is-valid::after,\n.form-select.is-valid::after {\n  content: "\\2713";\n  color: #28a745;\n  font-weight: bold;\n  margin-right: 0.5rem;\n}\n.form-check {\n  margin-bottom: 0.5rem !important;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem !important;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.form-check:hover {\n  background-color: rgba(66, 129, 119, 0.05);\n}\n.form-check .form-check-input {\n  margin: 0 !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  border: 2px solid var(--primary-medium) !important;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  background-color: white;\n  position: relative;\n}\n.form-check .form-check-input:hover {\n  border-color: var(--primary-dark) !important;\n  transform: scale(1.1);\n}\n.form-check .form-check-input:checked {\n  background-color: var(--primary-dark) !important;\n  border-color: var(--primary-dark) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.2);\n}\n.form-check .form-check-input:checked::after {\n  background-color: white;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  transform: scale(1);\n}\n.form-check .form-check-input:focus {\n  border-color: var(--primary-dark) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.15) !important;\n  outline: none;\n}\n.form-check .form-check-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: var(--font-size-base);\n  color: var(--neutral-dark);\n  flex: 0 0 auto;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.form-check .form-check-label:hover {\n  color: var(--primary-dark);\n}\n.form-check:has(.form-check-input:checked) {\n  background-color: rgba(5, 66, 57, 0.08);\n}\n.form-check:has(.form-check-input:checked) .form-check-label {\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.d-flex.gap-3 {\n  gap: 0.75rem !important;\n}\n.d-flex.gap-3 .form-check {\n  gap: 0.5rem !important;\n  margin-bottom: 0.25rem !important;\n}\ninput[type=checkbox] {\n  margin-top: 0 !important;\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.resonator-selector .input-group {\n  display: flex;\n  align-items: stretch;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.resonator-selector .input-group .resonator-nav-btn {\n  background: var(--primary-dark) !important;\n  border: none !important;\n  color: white !important;\n  padding: 0.75rem 1rem;\n  font-size: 1.25rem;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n}\n.resonator-selector .input-group .resonator-nav-btn:hover:not(:disabled) {\n  background: var(--primary-medium) !important;\n  transform: scale(1.05);\n}\n.resonator-selector .input-group .resonator-nav-btn:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.resonator-selector .input-group .resonator-nav-btn i {\n  font-size: 1.1rem;\n}\n.resonator-selector .input-group .resonator-input {\n  flex: 1;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  background: white;\n  border: 2px solid var(--primary-medium);\n  border-left: none;\n  border-right: none;\n  padding: 0.75rem 1rem;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.resonator-selector .input-group .resonator-input:focus {\n  border-color: var(--primary-medium);\n  box-shadow: none;\n  outline: none;\n}\n.resonator-selector .input-group .resonator-input.is-valid {\n  border-color: #28a745;\n  background-color: rgba(40, 167, 69, 0.05);\n}\n.resonator-selector .input-group .resonator-input.is-invalid {\n  border-color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.05);\n}\n.resonator-selector .resonator-options .resonator-option-btn {\n  background: white;\n  border: 2px solid var(--primary-medium);\n  color: var(--primary-dark);\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: var(--radius-md);\n  transition: all 0.2s ease;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.resonator-selector .resonator-options .resonator-option-btn:hover:not(.active) {\n  background: rgba(66, 129, 119, 0.1);\n  border-color: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.resonator-selector .resonator-options .resonator-option-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-color: var(--primary-dark);\n  color: white;\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(5, 66, 57, 0.3);\n}\n/*# sourceMappingURL=ear-clinic-exam-form.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: EarClinicExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], examAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EarClinicExamForm, { className: "EarClinicExamForm", filePath: "src/app/features/doctor/components/ear-doctor.component/ear-clinic-exam-form/ear-clinic-exam-form.ts", lineNumber: 17 });
})();

// src/app/features/doctor/components/ear-doctor.component/ear-doctor.component.ts
function EarDoctorComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function EarDoctorComponent_div_3_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addEarClinicExam());
    });
    \u0275\u0275text(1, "\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0623\u0630\u0646 \u0648\u0623\u0646\u0641 \u0648\u062D\u0646\u062C\u0631\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function EarDoctorComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, EarDoctorComponent_div_3_button_1_Template, 2, 0, "button", 7);
    \u0275\u0275elementStart(2, "button", 8);
    \u0275\u0275listener("click", function EarDoctorComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addConsultation());
    });
    \u0275\u0275text(3, "\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function EarDoctorComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addInvestigation());
    });
    \u0275\u0275text(5, "\u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hasEarClinicExam);
  }
}
function EarDoctorComponent_app_ear_clinic_exam_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ear-clinic-exam-form", 9);
    \u0275\u0275listener("examAdded", function EarDoctorComponent_app_ear_clinic_exam_form_4_Template_app_ear_clinic_exam_form_examAdded_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEarExamAdded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r2.selectedApplicant.fileNumber);
  }
}
function EarDoctorComponent_app_consultation_form_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-consultation-form", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r2.selectedApplicant.fileNumber);
  }
}
function EarDoctorComponent_app_investigation_form_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-investigation-form", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r2.selectedApplicant.fileNumber);
  }
}
var EarDoctorComponent = class _EarDoctorComponent {
  toastr;
  earClinicExamService;
  selectedApplicant = null;
  hasEarClinicExam = false;
  earClinicExamForm;
  consultationForm;
  investigationForm;
  constructor(toastr, earClinicExamService) {
    this.toastr = toastr;
    this.earClinicExamService = earClinicExamService;
  }
  onApplicantSelected(applicant) {
    this.selectedApplicant = applicant;
    if (!applicant?.fileNumber) {
      this.hasEarClinicExam = false;
      return;
    }
    this.earClinicExamService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.hasEarClinicExam = !!(exam && exam.earClinicID);
      },
      error: () => this.hasEarClinicExam = false
    });
  }
  onEarExamAdded() {
    this.hasEarClinicExam = true;
  }
  onConsultationSaved() {
    this.toastr.success("\xD8\xAA\xD9\u2026 \xD8\xAD\xD9\x81\xD8\xB8 \xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB3\xD8\xAA\xD8\xB4\xD8\xA7\xD8\xB1\xD8\xA9 \xD8\xA8\xD9\u2020\xD8\xAC\xD8\xA7\xD8\xAD");
  }
  onInvestigationSaved() {
    this.toastr.success("\xD8\xAA\xD9\u2026 \xD8\xAD\xD9\x81\xD8\xB8 \xD8\xA7\xD9\u201E\xD8\xAA\xD8\xAD\xD9\u201E\xD9\u0160\xD9\u201E \xD8\xA8\xD9\u2020\xD8\xAC\xD8\xA7\xD8\xAD");
  }
  resetForms() {
    this.earClinicExamForm?.resetForm();
  }
  addEarClinicExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\xD9\u0160\xD8\xB1\xD8\xAC\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xAD\xD8\xAB \xD8\xB9\xD9\u2020 \xD9\u2026\xD8\xB1\xD9\u0160\xD8\xB6 \xD8\xA3\xD9\u02C6\xD9\u201E\xD8\xA7\xD9\u2039");
      return;
    }
    this.earClinicExamForm?.addEarClinicExam();
  }
  addConsultation() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\xD9\u0160\xD8\xB1\xD8\xAC\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xAD\xD8\xAB \xD8\xB9\xD9\u2020 \xD9\u2026\xD8\xB1\xD9\u0160\xD8\xB6 \xD8\xA3\xD9\u02C6\xD9\u201E\xD8\xA7\xD9\u2039");
      return;
    }
    this.consultationForm?.openModal();
  }
  addInvestigation() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\xD9\u0160\xD8\xB1\xD8\xAC\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xAD\xD8\xAB \xD8\xB9\xD9\u2020 \xD9\u2026\xD8\xB1\xD9\u0160\xD8\xB6 \xD8\xA3\xD9\u02C6\xD9\u201E\xD8\xA7\xD9\u2039");
      return;
    }
    this.investigationForm?.openModal();
  }
  static \u0275fac = function EarDoctorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EarDoctorComponent)(\u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EarClinicExamService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EarDoctorComponent, selectors: [["app-ear-doctor"]], viewQuery: function EarDoctorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(EarClinicExamForm, 5);
      \u0275\u0275viewQuery(ConsultationFormComponent, 5);
      \u0275\u0275viewQuery(InvestigationForm, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.earClinicExamForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.consultationForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.investigationForm = _t.first);
    }
  }, decls: 7, vars: 4, consts: [[1, "container", "mt-3"], [1, "mb-3"], [3, "applicantSelected"], ["class", "button-group mb-3 d-flex gap-2", 4, "ngIf"], [3, "applicantFileNumber", "examAdded", 4, "ngIf"], [3, "applicantFileNumber", 4, "ngIf"], [1, "button-group", "mb-3", "d-flex", "gap-2"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], [3, "examAdded", "applicantFileNumber"], [3, "applicantFileNumber"]], template: function EarDoctorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-search-applicant", 2);
      \u0275\u0275listener("applicantSelected", function EarDoctorComponent_Template_app_search_applicant_applicantSelected_2_listener($event) {
        return ctx.onApplicantSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, EarDoctorComponent_div_3_Template, 6, 1, "div", 3)(4, EarDoctorComponent_app_ear_clinic_exam_form_4_Template, 1, 1, "app-ear-clinic-exam-form", 4)(5, EarDoctorComponent_app_consultation_form_5_Template, 1, 1, "app-consultation-form", 5)(6, EarDoctorComponent_app_investigation_form_6_Template, 1, 1, "app-investigation-form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
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
    SearchApplicantComponent,
    EarClinicExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success[_ngcontent-%COMP%]:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=ear-doctor.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EarDoctorComponent, [{
    type: Component,
    args: [{ selector: "app-ear-doctor", standalone: true, imports: [
      CommonModule,
      SearchApplicantComponent,
      EarClinicExamForm,
      ConsultationFormComponent,
      InvestigationForm
    ], template: '<div class="container mt-3">\r\n  <!-- \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0631\u064A\u0636 -->\r\n  <div class="mb-3">\r\n    <app-search-applicant (applicantSelected)="onApplicantSelected($event)"></app-search-applicant>\r\n  </div>\r\n\r\n  <!-- \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 -->\r\n  <div *ngIf="selectedApplicant" class="button-group mb-3 d-flex gap-2">\r\n    <!-- \u064A\u0638\u0647\u0631 \u0641\u0642\u0637 \u0625\u0630\u0627 \u0645\u0627 \u0639\u0646\u062F\u0647 \u0641\u062D\u0635 \u0633\u0627\u0628\u0642 -->\r\n    <button \r\n      *ngIf="!hasEarClinicExam" \r\n      class="btn btn-outline-primary" \r\n      (click)="addEarClinicExam()">\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0623\u0630\u0646 \u0648\u0623\u0646\u0641 \u0648\u062D\u0646\u062C\u0631\u0629\r\n    </button>\r\n\r\n    <button class="btn btn-outline-primary" (click)="addConsultation()">\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629</button>\r\n    <button class="btn btn-outline-primary" (click)="addInvestigation()">\u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644</button>\r\n  </div>\r\n\r\n  <!-- \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A -->\r\n  <app-ear-clinic-exam-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber"\r\n    (examAdded)="onEarExamAdded()">\r\n  </app-ear-clinic-exam-form>\r\n\r\n  <app-consultation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-consultation-form>\r\n\r\n  <app-investigation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-investigation-form>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/ear-doctor.component/ear-doctor.component.scss */\n.container {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.button-group {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\nbutton.btn-outline-primary {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=ear-doctor.component.css.map */\n'] }]
  }], () => [{ type: ToastrService }, { type: EarClinicExamService }], { earClinicExamForm: [{
    type: ViewChild,
    args: [EarClinicExamForm]
  }], consultationForm: [{
    type: ViewChild,
    args: [ConsultationFormComponent]
  }], investigationForm: [{
    type: ViewChild,
    args: [InvestigationForm]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EarDoctorComponent, { className: "EarDoctorComponent", filePath: "src/app/features/doctor/components/ear-doctor.component/ear-doctor.component.ts", lineNumber: 25 });
})();
export {
  EarDoctorComponent
};
//# sourceMappingURL=chunk-A2KJF3MW.js.map
