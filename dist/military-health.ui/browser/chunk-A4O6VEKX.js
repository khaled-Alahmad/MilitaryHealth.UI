import {
  InternalExamService
} from "./chunk-G4BN75S6.js";
import {
  ConsultationFormComponent,
  InvestigationForm
} from "./chunk-47JTK3EG.js";
import {
  SearchApplicantComponent
} from "./chunk-R5OK4HNG.js";
import "./chunk-Y66SSJKT.js";
import {
  HEALTH_STATUS_OPTIONS,
  OTHER_OPTION_VALUE,
  resolveHealthStatusValue
} from "./chunk-7R7W7ON6.js";
import "./chunk-KGX6SBXR.js";
import {
  AuthService
} from "./chunk-S5S7SM6Z.js";
import {
  ToastrService
} from "./chunk-QUV35I6O.js";
import "./chunk-BSHRCOEK.js";
import "./chunk-DYGQH52H.js";
import "./chunk-O5UBWZSW.js";
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
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-HQAVTYQP.js";
import "./chunk-Q6W3HPVX.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-7EG6WMAP.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/internal-doctor.component/internal-exam-form/internal-exam-form.ts
var _forTrack0 = ($index, $item) => $item.control;
var _forTrack1 = ($index, $item) => $item.value;
function InternalExamForm_div_0_For_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "input", 26);
    \u0275\u0275elementStart(2, "label", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const \u0275$index_26_r4 = ctx.$index;
    const section_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", section_r5.control)("id", section_r5.control + "_" + \u0275$index_26_r4)("value", option_r3.value)("formControlName", section_r5.control);
    \u0275\u0275advance();
    \u0275\u0275property("for", section_r5.control + "_" + \u0275$index_26_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.label, " ");
  }
}
function InternalExamForm_div_0_For_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "input", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", section_r5.otherControl);
  }
}
function InternalExamForm_div_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, InternalExamForm_div_0_For_9_For_5_Template, 4, 6, "div", 24, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, InternalExamForm_div_0_For_9_Conditional_6_Template, 2, 1, "div", 25);
  }
  if (rf & 2) {
    let tmp_14_0;
    const section_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.healthStatusOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_14_0 = ctx_r1.examForm.get(section_r5.control)) == null ? null : tmp_14_0.value) === ctx_r1.otherOptionValue ? 6 : -1);
  }
}
function InternalExamForm_div_0_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.description);
  }
}
function InternalExamForm_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("resultID"), " ");
  }
}
function InternalExamForm_div_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
  }
}
function InternalExamForm_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275listener("click", function InternalExamForm_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h5", 4);
    \u0275\u0275text(4, "\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function InternalExamForm_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "form", 7);
    \u0275\u0275listener("ngSubmit", function InternalExamForm_div_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275repeaterCreate(8, InternalExamForm_div_0_For_9_Template, 7, 2, null, null, _forTrack0);
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "select", 11);
    \u0275\u0275template(16, InternalExamForm_div_0_option_16_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, InternalExamForm_div_0_div_17_Template, 3, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "label", 15);
    \u0275\u0275text(20, "\u0627\u0644\u0633\u0628\u0628 (\u0625\u0646 \u0648\u062C\u062F)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
    \u0275\u0275listener("click", function InternalExamForm_div_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(24, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 19);
    \u0275\u0275template(26, InternalExamForm_div_0_span_26_Template, 1, 0, "span", 20);
    \u0275\u0275text(27, " \u062D\u0641\u0638 ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.examForm);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusSections);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_3_0.touched))("is-valid", ctx_r1.isFieldValid("resultID"));
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
var InternalExamForm = class _InternalExamForm {
  fb;
  examService;
  authService;
  toastr;
  applicantFileNumber = "";
  examAdded = new EventEmitter();
  examForm;
  results = [];
  showModal = false;
  loading = false;
  resultAccepted = 0;
  resultRejected = 0;
  resultPostponed = 0;
  healthStatusOptions = HEALTH_STATUS_OPTIONS;
  otherOptionValue = OTHER_OPTION_VALUE;
  statusSections = [
    { control: "heart", otherControl: "heartOther", label: "\u062C\u0647\u0627\u0632 \u0627\u0644\u0642\u0644\u0628 \u0648\u0627\u0644\u062F\u0648\u0631\u0627\u0646" },
    { control: "respiratory", otherControl: "respiratoryOther", label: "\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A" },
    { control: "digestive", otherControl: "digestiveOther", label: "\u0623\u0645\u0631\u0627\u0636 \u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645" },
    { control: "endocrine", otherControl: "endocrineOther", label: "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u063A\u062F\u062F \u0627\u0644\u0635\u0645 \u0648\u0627\u0644\u062A\u063A\u0630\u064A\u0629" },
    { control: "neurology", otherControl: "neurologyOther", label: "\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0639\u0635\u0628\u064A\u0629" },
    { control: "blood", otherControl: "bloodOther", label: "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062F\u0645" },
    { control: "joints", otherControl: "jointsOther", label: "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0645\u0641\u0627\u0635\u0644" },
    { control: "kidney", otherControl: "kidneyOther", label: "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0643\u0644\u064A\u0629" },
    { control: "skin", otherControl: "skinOther", label: "\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0644\u062F\u064A\u0629" }
  ];
  constructor(fb, examService, authService, toastr) {
    this.fb = fb;
    this.examService = examService;
    this.authService = authService;
    this.toastr = toastr;
  }
  ngOnInit() {
    const controlsConfig = {};
    this.statusSections.forEach((section) => {
      controlsConfig[section.control] = ["\u0633\u0644\u064A\u0645", Validators.required];
      controlsConfig[section.otherControl] = [""];
    });
    controlsConfig["resultID"] = [null, Validators.required];
    controlsConfig["reason"] = [""];
    this.examForm = this.fb.group(controlsConfig);
    this.examService.getResults().subscribe({
      next: (res) => {
        this.results = res.data.items;
      },
      error: () => this.toastr.error("\u274C \u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0646\u062A\u0627\u0626\u062C", "\u062E\u0637\u0623")
    });
  }
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
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  onSubmit() {
    if (this.examForm.invalid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    this.loading = true;
    const payload = __spreadProps(__spreadValues({
      applicantFileNumber: this.applicantFileNumber,
      doctorID: Number(this.authService.getDoctorId())
    }, this.buildStatusPayload()), {
      resultID: Number(this.examForm.value.resultID),
      reason: this.examForm.value.reason
    });
    this.examService.addInternalExam(payload).subscribe({
      next: () => {
        this.toastr.success("\u2705 \u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.examForm.reset(this.getDefaultFormValues());
        this.closeModal();
        this.loading = false;
        this.examAdded.emit();
      },
      error: () => {
        this.toastr.error("\u274C \u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  trackBySection(_, section) {
    return section.control;
  }
  trackByStatusOption(_, option) {
    return option.value;
  }
  buildStatusPayload() {
    return this.statusSections.reduce((acc, section) => {
      acc[section.control] = resolveHealthStatusValue(this.examForm.value[section.control], this.examForm.value[section.otherControl]);
      return acc;
    }, {});
  }
  getDefaultFormValues() {
    return this.statusSections.reduce((acc, section) => {
      acc[section.control] = "\u0633\u0644\u064A\u0645";
      acc[section.otherControl] = "";
      return acc;
    }, { resultID: null, reason: "" });
  }
  static \u0275fac = function InternalExamForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalExamForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InternalExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalExamForm, selectors: [["app-internal-exam-form"]], inputs: { applicantFileNumber: "applicantFileNumber" }, outputs: { examAdded: "examAdded" }, decls: 1, vars: 1, consts: [["class", "modal-backdrop", 4, "ngIf"], [1, "modal-backdrop"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", "ms-0", "me-auto", 3, "click"], [1, "modal-body"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "result-section"], [1, "form-label", "mb-3"], [1, "text-danger"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "reason-section"], [1, "form-label"], ["formControlName", "reason", "rows", "3", "placeholder", "\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F", 1, "form-control"], [1, "modal-footer", "mt-4"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "medical-system-row"], [1, "system-label"], [1, "system-options"], [1, "form-check"], [1, "other-input-row"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "value", "formControlName"], [1, "form-check-label", 3, "for"], ["type", "text", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control", 3, "formControlName"], [3, "value"], [1, "invalid-feedback"], [1, "pi", "pi-exclamation-circle"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function InternalExamForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InternalExamForm_div_0_Template, 28, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1050;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  max-width: 700px;\n  width: 100%;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_fadeIn 0.35s ease;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  border-bottom: 2px solid #B9A779 !important;\n  border-radius: 16px 16px 0 0 !important;\n  padding: 1.5rem 2rem !important;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  overflow-y: auto;\n  max-height: calc(85vh - 100px);\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--neutral-light);\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary-medium);\n  border-radius: var(--radius-sm);\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-dark);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: var(--spacing-lg) 0 var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 2px solid var(--primary-medium);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.section-title[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 20px;\n  background: var(--accent-gold);\n  border-radius: var(--radius-sm);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #054239 !important;\n  border: 2px solid #054239 !important;\n  color: white !important;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #428177 !important;\n  border-color: #428177 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #3D3A3B !important;\n  border: 2px solid #3D3A3B !important;\n  color: white !important;\n  transition: all 0.3s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #161616 !important;\n  border-color: #161616 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  background: white;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 16px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.medical-system-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  transition: background-color 0.2s;\n}\n.medical-system-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #1f2937;\n  min-width: 250px;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 2px solid #6b7280;\n  cursor: pointer;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #054239;\n  border-color: #054239;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 500;\n}\n.result-section[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem;\n  background: #f9fafb;\n  border-top: 2px solid #054239;\n  border-bottom: 2px solid #054239;\n  margin: 2rem 0 1rem 0;\n}\n.result-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #1f2937;\n}\n.result-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 1rem;\n}\n.result-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.reason-section[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem;\n  margin-top: 1rem;\n}\n.reason-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #1f2937;\n  margin-bottom: 0.75rem;\n}\n.reason-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 1rem;\n}\n.reason-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.modal-content[_ngcontent-%COMP%] {\n  max-width: 800px !important;\n}\n.modal-body[_ngcontent-%COMP%] {\n  max-height: calc(85vh - 150px) !important;\n}\n/*# sourceMappingURL=internal-exam-form.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalExamForm, [{
    type: Component,
    args: [{ selector: "app-internal-exam-form", imports: [ReactiveFormsModule, CommonModule], template: `<!-- \u0627\u0644\u0645\u0648\u062F\u0627\u0644 -->\r
<div class="modal-backdrop" *ngIf="showModal">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
\r
    <!-- \u0627\u0644\u0647\u064A\u062F\u0631 -->\r
    <div class="modal-header">\r
      <h5 class="modal-title">\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A </h5>\r
      <button type="button" class="btn-close ms-0 me-auto" (click)="closeModal()"></button>\r
    </div>\r
\r
\r
    <!-- \u0627\u0644\u0628\u0648\u062F\u064A -->\r
    <div class="modal-body">\r
      <form [formGroup]="examForm" (ngSubmit)="onSubmit()" novalidate>\r
\r
        @for (section of statusSections; track section.control; let sectionIndex = $index) {\r
        <div class="medical-system-row">\r
          <div class="system-label">{{ section.label }}</div>\r
          <div class="system-options">\r
            @for (option of healthStatusOptions; track option.value; let optionIndex = $index) {\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                [name]="section.control"\r
                [id]="section.control + '_' + optionIndex"\r
                [value]="option.value"\r
                [formControlName]="section.control">\r
              <label class="form-check-label" [for]="section.control + '_' + optionIndex">\r
                {{ option.label }}\r
              </label>\r
            </div>\r
            }\r
          </div>\r
        </div>\r
        @if (examForm.get(section.control)?.value === otherOptionValue) {\r
        <div class="other-input-row">\r
          <input\r
            type="text"\r
            class="form-control"\r
            [formControlName]="section.otherControl"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
        </div>\r
        }\r
        }\r
\r
        <!-- \u0627\u0644\u0646\u062A\u064A\u062C\u0629 -->\r
        <div class="result-section">\r
          <label class="form-label mb-3">\u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="text-danger">*</span></label>\r
          <select class="form-select" formControlName="resultID"\r
                  [class.is-invalid]="examForm.get('resultID')?.invalid && examForm.get('resultID')?.touched"\r
                  [class.is-valid]="isFieldValid('resultID')">\r
            <option *ngFor="let r of results" [value]="r.resultID">{{ r.description }}</option>\r
          </select>\r
          <div class="invalid-feedback" *ngIf="getErrorMessage('resultID')">\r
            <i class="pi pi-exclamation-circle"></i>{{ getErrorMessage('resultID') }}\r
          </div>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0633\u0628\u0628 -->\r
        <div class="reason-section">\r
          <label class="form-label">\u0627\u0644\u0633\u0628\u0628 (\u0625\u0646 \u0648\u062C\u062F)</label>\r
          <textarea class="form-control" formControlName="reason" rows="3" placeholder="\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F"></textarea>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0623\u0632\u0631\u0627\u0631 -->\r
        <div class="modal-footer mt-4">\r
          <button type="button" class="btn btn-secondary" (click)="closeModal()">\u0625\u0644\u063A\u0627\u0621</button>\r
          <button type="submit" class="btn btn-success" [disabled]="examForm.invalid || loading">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
            \u062D\u0641\u0638\r
          </button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/internal-exam-form/internal-exam-form.scss */\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1050;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.modal-content {\n  background: #fff;\n  border-radius: 16px;\n  max-width: 700px;\n  width: 100%;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n  animation: fadeIn 0.35s ease;\n}\n.modal-content {\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  border-bottom: 2px solid #B9A779 !important;\n  border-radius: 16px 16px 0 0 !important;\n  padding: 1.5rem 2rem !important;\n}\n.modal-header .modal-title {\n  font-size: 1.5rem !important;\n  font-weight: 700 !important;\n  color: white !important;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-body {\n  padding: var(--spacing-xl);\n  overflow-y: auto;\n  max-height: calc(85vh - 100px);\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: var(--neutral-light);\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: var(--primary-medium);\n  border-radius: var(--radius-sm);\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-dark);\n}\n.section-title {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: var(--spacing-lg) 0 var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 2px solid var(--primary-medium);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.section-title::before {\n  content: "";\n  width: 4px;\n  height: 20px;\n  background: var(--accent-gold);\n  border-radius: var(--radius-sm);\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;\n}\n.btn-primary {\n  background: #054239 !important;\n  border: 2px solid #054239 !important;\n  color: white !important;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #428177 !important;\n  border-color: #428177 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-secondary {\n  background: #3D3A3B !important;\n  border: 2px solid #3D3A3B !important;\n  color: white !important;\n  transition: all 0.3s ease;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #161616 !important;\n  border-color: #161616 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.modal-footer {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  background: white;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 16px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.medical-system-row {\n  display: flex;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  transition: background-color 0.2s;\n}\n.medical-system-row:hover {\n  background-color: #f9fafb;\n}\n.medical-system-row .system-label {\n  flex: 1;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #1f2937;\n  min-width: 250px;\n}\n.medical-system-row .system-options {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n}\n.medical-system-row .system-options .form-check {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n}\n.medical-system-row .system-options .form-check .form-check-input {\n  margin: 0;\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 2px solid #6b7280;\n  cursor: pointer;\n}\n.medical-system-row .system-options .form-check .form-check-input:checked {\n  background-color: #054239;\n  border-color: #054239;\n}\n.medical-system-row .system-options .form-check .form-check-label {\n  margin: 0;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 500;\n}\n.result-section {\n  padding: 1.5rem 1.5rem;\n  background: #f9fafb;\n  border-top: 2px solid #054239;\n  border-bottom: 2px solid #054239;\n  margin: 2rem 0 1rem 0;\n}\n.result-section .form-label {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #1f2937;\n}\n.result-section .form-select {\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 1rem;\n}\n.result-section .form-select:focus {\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.reason-section {\n  padding: 1.5rem 1.5rem;\n  margin-top: 1rem;\n}\n.reason-section .form-label {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #1f2937;\n  margin-bottom: 0.75rem;\n}\n.reason-section .form-control {\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 1rem;\n}\n.reason-section .form-control:focus {\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.modal-content {\n  max-width: 800px !important;\n}\n.modal-body {\n  max-height: calc(85vh - 150px) !important;\n}\n/*# sourceMappingURL=internal-exam-form.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: InternalExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], examAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalExamForm, { className: "InternalExamForm", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-exam-form/internal-exam-form.ts", lineNumber: 22 });
})();

// src/app/features/doctor/components/internal-doctor.component/internal-doctor.component.ts
function InternalDoctorComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function InternalDoctorComponent_div_3_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addInternalExam());
    });
    \u0275\u0275text(1, "\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u062F\u0627\u062E\u0644\u064A ");
    \u0275\u0275elementEnd();
  }
}
function InternalDoctorComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, InternalDoctorComponent_div_3_button_1_Template, 2, 0, "button", 7);
    \u0275\u0275elementStart(2, "button", 8);
    \u0275\u0275listener("click", function InternalDoctorComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addConsultation());
    });
    \u0275\u0275text(3, "\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function InternalDoctorComponent_div_3_Template_button_click_4_listener() {
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
    \u0275\u0275property("ngIf", !ctx_r2.hasInternalExam);
  }
}
function InternalDoctorComponent_app_internal_exam_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-internal-exam-form", 9);
    \u0275\u0275listener("examAdded", function InternalDoctorComponent_app_internal_exam_form_4_Template_app_internal_exam_form_examAdded_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInternalExamAdded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r2.selectedApplicant.fileNumber);
  }
}
function InternalDoctorComponent_app_consultation_form_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-consultation-form", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r2.selectedApplicant.fileNumber);
  }
}
function InternalDoctorComponent_app_investigation_form_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-investigation-form", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r2.selectedApplicant.fileNumber);
  }
}
var InternalDoctorComponent = class _InternalDoctorComponent {
  toastr;
  examService;
  selectedApplicant = null;
  hasInternalExam = false;
  internalForm;
  consultationForm;
  investigationForm;
  constructor(toastr, examService) {
    this.toastr = toastr;
    this.examService = examService;
  }
  onApplicantSelected(applicant) {
    this.selectedApplicant = applicant;
    this.examService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.hasInternalExam = !!(exam && exam.internalExamID);
      },
      error: () => this.hasInternalExam = false
    });
  }
  addInternalExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0631\u064A\u0636 \u0623\u0648\u0644\u0627\u064B");
      return;
    }
    if (this.hasInternalExam) {
      this.toastr.error("\u0627\u0644\u0645\u0631\u064A\u0636 \u0644\u062F\u064A\u0647 \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A \u0633\u0627\u0628\u0642 \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u062A\u0647 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649");
      return;
    }
    this.internalForm.openModal();
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
  onInternalExamAdded() {
    this.hasInternalExam = true;
  }
  static \u0275fac = function InternalDoctorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalDoctorComponent)(\u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(InternalExamService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalDoctorComponent, selectors: [["app-internal-doctor"]], viewQuery: function InternalDoctorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(InternalExamForm, 5);
      \u0275\u0275viewQuery(ConsultationFormComponent, 5);
      \u0275\u0275viewQuery(InvestigationForm, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.internalForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.consultationForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.investigationForm = _t.first);
    }
  }, decls: 7, vars: 4, consts: [[1, "container", "mt-3"], [1, "mb-3"], [3, "applicantSelected"], ["class", "button-group mb-3 d-flex gap-2", 4, "ngIf"], [3, "applicantFileNumber", "examAdded", 4, "ngIf"], [3, "applicantFileNumber", 4, "ngIf"], [1, "button-group", "mb-3", "d-flex", "gap-2"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], [3, "examAdded", "applicantFileNumber"], [3, "applicantFileNumber"]], template: function InternalDoctorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-search-applicant", 2);
      \u0275\u0275listener("applicantSelected", function InternalDoctorComponent_Template_app_search_applicant_applicantSelected_2_listener($event) {
        return ctx.onApplicantSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, InternalDoctorComponent_div_3_Template, 6, 1, "div", 3)(4, InternalDoctorComponent_app_internal_exam_form_4_Template, 1, 1, "app-internal-exam-form", 4)(5, InternalDoctorComponent_app_consultation_form_5_Template, 1, 1, "app-consultation-form", 5)(6, InternalDoctorComponent_app_investigation_form_6_Template, 1, 1, "app-investigation-form", 5);
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
    ReactiveFormsModule,
    SearchApplicantComponent,
    InternalExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success[_ngcontent-%COMP%]:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=internal-doctor.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalDoctorComponent, [{
    type: Component,
    args: [{ selector: "app-internal-doctor", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      SearchApplicantComponent,
      InternalExamForm,
      ConsultationFormComponent,
      InvestigationForm
    ], template: '<div class="container mt-3">\r\n  <!-- \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0631\u064A\u0636 -->\r\n  <div class="mb-3">\r\n    <app-search-applicant (applicantSelected)="onApplicantSelected($event)"></app-search-applicant>\r\n  </div>\r\n\r\n  <!-- \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 -->\r\n  <div *ngIf="selectedApplicant " class="button-group mb-3 d-flex gap-2">\r\n    <!-- \u064A\u0638\u0647\u0631 \u0641\u0642\u0637 \u0625\u0630\u0627 \u0645\u0627 \u0639\u0646\u062F\u0647 \u0641\u062D\u0635 \u0633\u0627\u0628\u0642 -->\r\n    <button \r\n      *ngIf="!hasInternalExam " \r\n      class="btn btn-outline-primary" \r\n      (click)="addInternalExam()">\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u062F\u0627\u062E\u0644\u064A\r\n    </button>\r\n\r\n    <button class="btn btn-outline-primary" (click)="addConsultation()">\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629</button>\r\n    <button class="btn btn-outline-primary" (click)="addInvestigation()">\u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644</button>\r\n  </div>\r\n\r\n  <!-- \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A -->\r\n  <app-internal-exam-form\n    *ngIf="selectedApplicant"\n    [applicantFileNumber]="selectedApplicant.fileNumber"\n    (examAdded)="onInternalExamAdded()">\n  </app-internal-exam-form>\n\r\n  <app-consultation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-consultation-form>\r\n\r\n  <app-investigation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-investigation-form>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/internal-doctor.component.scss */\n.container {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.button-group {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\nbutton.btn-outline-primary {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=internal-doctor.component.css.map */\n'] }]
  }], () => [{ type: ToastrService }, { type: InternalExamService }], { internalForm: [{
    type: ViewChild,
    args: [InternalExamForm]
  }], consultationForm: [{
    type: ViewChild,
    args: [ConsultationFormComponent]
  }], investigationForm: [{
    type: ViewChild,
    args: [InvestigationForm]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalDoctorComponent, { className: "InternalDoctorComponent", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-doctor.component.ts", lineNumber: 27 });
})();
export {
  InternalDoctorComponent
};
//# sourceMappingURL=chunk-A4O6VEKX.js.map
