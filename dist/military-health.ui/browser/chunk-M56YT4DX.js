import {
  InternalExamService
} from "./chunk-MG5AQLBH.js";
import {
  ConsultationFormComponent,
  InvestigationForm
} from "./chunk-GRU57U67.js";
import {
  SearchApplicantComponent
} from "./chunk-ZN4S5WAA.js";
import "./chunk-2OSA6QLT.js";
import {
  HEALTH_STATUS_OPTIONS,
  OTHER_OPTION_VALUE,
  resolveHealthStatusValue
} from "./chunk-7R7W7ON6.js";
import "./chunk-T2JR7AGY.js";
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
} from "./chunk-544Z4HCU.js";
import "./chunk-5TBOZ7YP.js";
import "./chunk-7K53XEFX.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
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
} from "./chunk-OMFZJHBV.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/internal-doctor.component/internal-exam-form/internal-exam-form.ts
var _forTrack0 = ($index, $item) => $item.control;
var _forTrack1 = ($index, $item) => $item.value;
function InternalExamForm_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "input", 20);
    \u0275\u0275elementStart(2, "label", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const \u0275$index_16_r2 = ctx.$index;
    const section_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", section_r3.control)("id", section_r3.control + "_" + \u0275$index_16_r2)("value", option_r1.value)("formControlName", section_r3.control);
    \u0275\u0275advance();
    \u0275\u0275property("for", section_r3.control + "_" + \u0275$index_16_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.label, " ");
  }
}
function InternalExamForm_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "input", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", section_r3.otherControl);
  }
}
function InternalExamForm_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, InternalExamForm_For_5_For_5_Template, 4, 6, "div", 18, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, InternalExamForm_For_5_Conditional_6_Template, 2, 1, "div", 19);
  }
  if (rf & 2) {
    let tmp_13_0;
    const section_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.healthStatusOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_13_0 = ctx_r3.examForm.get(section_r3.control)) == null ? null : tmp_13_0.value) === ctx_r3.otherOptionValue ? 6 : -1);
  }
}
function InternalExamForm_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.description);
  }
}
function InternalExamForm_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.getErrorMessage("resultID"), " ");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalExamForm, selectors: [["app-internal-exam-form"]], inputs: { applicantFileNumber: "applicantFileNumber" }, outputs: { examAdded: "examAdded" }, decls: 27, vars: 12, consts: [["title", "\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A", "subtitle", "\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0644\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629", "icon", "pi pi-heart", "width", "90rem", 3, "visibleChange", "hide", "visible", "useDefaultFooter"], ["novalidate", "", 1, "exam-form", 3, "ngSubmit", "formGroup"], [1, "section-title"], [1, "section-title", "mt-4"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label", "mb-2"], [1, "text-danger"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "reason", "rows", "3", "placeholder", "\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F", 1, "form-control"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "\u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635", "icon", "pi pi-save", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "medical-system-row"], [1, "system-label"], [1, "system-options"], [1, "form-check"], [1, "other-input-row"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "value", "formControlName"], [1, "form-check-label", 3, "for"], ["type", "text", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control", 3, "formControlName"], [3, "value"], [1, "invalid-feedback", "d-block"], [1, "pi", "pi-exclamation-circle", "me-1"]], template: function InternalExamForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275twoWayListener("visibleChange", function InternalExamForm_Template_app_dialog_wrapper_visibleChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showModal, $event) || (ctx.showModal = $event);
        return $event;
      });
      \u0275\u0275listener("hide", function InternalExamForm_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function InternalExamForm_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "h6", 2);
      \u0275\u0275text(3, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0637\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(4, InternalExamForm_For_5_Template, 7, 2, null, null, _forTrack0);
      \u0275\u0275elementStart(6, "h6", 3);
      \u0275\u0275text(7, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
      \u0275\u0275text(11, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275template(15, InternalExamForm_option_15_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, InternalExamForm_div_16_Template, 3, 1, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "h6", 3);
      \u0275\u0275text(18, "\u0627\u0644\u0633\u0628\u0628 (\u0625\u0646 \u0648\u062C\u062F)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 4)(20, "div", 5)(21, "label", 6);
      \u0275\u0275text(22, "\u0627\u0644\u0633\u0628\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 12)(25, "p-button", 13);
      \u0275\u0275listener("onClick", function InternalExamForm_Template_p_button_onClick_25_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-button", 14);
      \u0275\u0275listener("onClick", function InternalExamForm_Template_p_button_onClick_26_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275twoWayProperty("visible", ctx.showModal);
      \u0275\u0275property("useDefaultFooter", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.statusSections);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx.examForm.get("resultID")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.examForm.get("resultID")) == null ? null : tmp_4_0.touched))("is-valid", ctx.isFieldValid("resultID"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.results);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("resultID"));
      \u0275\u0275advance(9);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.examForm.invalid || ctx.loading);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgForOf, NgIf, DialogWrapperComponent, ButtonModule, Button], styles: ['@charset "UTF-8";\n\n\n\n.edit-dialog-root[_ngcontent-%COMP%] {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.edit-dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-wrapper__icon[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  flex-shrink: 0;\n}\n.dialog-wrapper__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n}\n.dialog-wrapper__subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.btn-close-dialog[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.edit-dialog-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n  flex: 1;\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.edit-dialog-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.section-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  display: block;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #428177;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  cursor: default;\n}\n.preview-container[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.preview-img[_ngcontent-%COMP%] {\n  max-height: 200px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.edit-dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid #e9ecef;\n  background: #f8fafc;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  width: 100%;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.medical-system-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #1f2937;\n  min-width: 220px;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 1.1rem;\n  height: 1.1rem;\n  cursor: pointer;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: #374151;\n}\n.other-input-row[_ngcontent-%COMP%] {\n  padding: 0 0 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=internal-exam-form.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalExamForm, [{
    type: Component,
    args: [{ selector: "app-internal-exam-form", imports: [ReactiveFormsModule, CommonModule, DialogWrapperComponent, ButtonModule], template: `<app-dialog-wrapper\r
  [(visible)]="showModal"\r
  title="\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A"\r
  subtitle="\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0644\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629"\r
  icon="pi pi-heart"\r
  width="90rem"\r
  [useDefaultFooter]="false"\r
  (hide)="closeModal()">\r
  <form [formGroup]="examForm" (ngSubmit)="onSubmit()" novalidate class="exam-form">\r
\r
    <h6 class="section-title">\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0637\u0628\u064A\u0629</h6>\r
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
                [formControlName]="section.control" />\r
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
            placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644" />\r
        </div>\r
      }\r
    }\r
\r
    <h6 class="section-title mt-4">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
    <div class="row g-3">\r
      <div class="col-12">\r
        <label class="form-label mb-2">\u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="text-danger">*</span></label>\r
        <select\r
          class="form-select"\r
          formControlName="resultID"\r
          [class.is-invalid]="examForm.get('resultID')?.invalid && examForm.get('resultID')?.touched"\r
          [class.is-valid]="isFieldValid('resultID')">\r
          <option *ngFor="let r of results" [value]="r.resultID">{{ r.description }}</option>\r
        </select>\r
        <div class="invalid-feedback d-block" *ngIf="getErrorMessage('resultID')">\r
          <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('resultID') }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <h6 class="section-title mt-4">\u0627\u0644\u0633\u0628\u0628 (\u0625\u0646 \u0648\u062C\u062F)</h6>\r
    <div class="row g-3">\r
      <div class="col-12">\r
        <label class="form-label mb-2">\u0627\u0644\u0633\u0628\u0628</label>\r
        <textarea\r
          class="form-control"\r
          formControlName="reason"\r
          rows="3"\r
          placeholder="\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F"></textarea>\r
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
      label="\u062D\u0641\u0638 \u0627\u0644\u0641\u062D\u0635"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [loading]="loading"\r
      [disabled]="examForm.invalid || loading"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</app-dialog-wrapper>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/internal-exam-form/internal-exam-form.scss */\n.edit-dialog-root {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.edit-dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-wrapper__icon {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  flex-shrink: 0;\n}\n.dialog-wrapper__title {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n}\n.dialog-wrapper__subtitle {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.btn-close-dialog {\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.edit-dialog-body {\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n  flex: 1;\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.edit-dialog-form {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.section-title:first-child {\n  margin-top: 0;\n}\n.form-label {\n  font-weight: 600;\n  color: #374151;\n  display: block;\n}\n.form-control {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #428177;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\ntextarea.form-control {\n  min-height: 80px;\n}\n.form-control[readonly] {\n  background-color: #f3f4f6;\n  cursor: default;\n}\n.preview-container {\n  margin-top: 0.75rem;\n}\n.preview-img {\n  max-height: 200px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.edit-dialog-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid #e9ecef;\n  background: #f8fafc;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  width: 100%;\n}\n:host {\n  display: block;\n}\n.medical-system-row {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.medical-system-row .system-label {\n  flex: 1;\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #1f2937;\n  min-width: 220px;\n}\n.medical-system-row .system-options {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.medical-system-row .system-options .form-check {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n}\n.medical-system-row .system-options .form-check .form-check-input {\n  margin: 0;\n  width: 1.1rem;\n  height: 1.1rem;\n  cursor: pointer;\n}\n.medical-system-row .system-options .form-check .form-check-label {\n  margin: 0;\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: #374151;\n}\n.other-input-row {\n  padding: 0 0 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=internal-exam-form.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: InternalExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], examAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalExamForm, { className: "InternalExamForm", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-exam-form/internal-exam-form.ts", lineNumber: 24 });
})();

// src/app/features/doctor/components/internal-doctor.component/internal-doctor.component.ts
function InternalDoctorComponent_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275element(1, "span", 17);
    \u0275\u0275text(2, " \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0648\u062C\u0648\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642... ");
    \u0275\u0275elementEnd();
  }
}
function InternalDoctorComponent_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A \u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
  }
}
function InternalDoctorComponent_div_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
  }
}
function InternalDoctorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275template(7, InternalDoctorComponent_div_4_span_7_Template, 3, 0, "span", 13)(8, InternalDoctorComponent_div_4_span_8_Template, 3, 0, "span", 14)(9, InternalDoctorComponent_div_4_span_9_Template, 3, 0, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedApplicant.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx_r0.selectedApplicant.fileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.checkingInternalExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkingInternalExam && ctx_r0.hasInternalExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkingInternalExam && !ctx_r0.hasInternalExam);
  }
}
function InternalDoctorComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function InternalDoctorComponent_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addInternalExam());
    });
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u062F\u0627\u062E\u0644\u064A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275listener("click", function InternalDoctorComponent_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addConsultation());
    });
    \u0275\u0275element(5, "i", 25);
    \u0275\u0275text(6, " \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function InternalDoctorComponent_div_5_Template_button_click_7_listener() {
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
    \u0275\u0275property("disabled", ctx_r0.checkingInternalExam || ctx_r0.hasInternalExam);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.checkingInternalExam);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.checkingInternalExam);
  }
}
function InternalDoctorComponent_app_internal_exam_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-internal-exam-form", 27);
    \u0275\u0275listener("examAdded", function InternalDoctorComponent_app_internal_exam_form_6_Template_app_internal_exam_form_examAdded_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInternalExamAdded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r0.selectedApplicant.fileNumber);
  }
}
function InternalDoctorComponent_app_consultation_form_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-consultation-form", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r0.selectedApplicant.fileNumber);
  }
}
function InternalDoctorComponent_app_investigation_form_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-investigation-form", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r0.selectedApplicant.fileNumber);
  }
}
var InternalDoctorComponent = class _InternalDoctorComponent {
  toastr;
  examService;
  selectedApplicant = null;
  hasInternalExam = false;
  checkingInternalExam = false;
  internalForm;
  consultationForm;
  investigationForm;
  constructor(toastr, examService) {
    this.toastr = toastr;
    this.examService = examService;
  }
  onApplicantSelected(applicant) {
    this.selectedApplicant = applicant;
    this.hasInternalExam = false;
    this.checkingInternalExam = true;
    if (!applicant?.fileNumber) {
      this.checkingInternalExam = false;
      return;
    }
    this.examService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.checkingInternalExam = false;
        this.hasInternalExam = !!(exam && exam.internalExamID);
      },
      error: () => {
        this.checkingInternalExam = false;
        this.hasInternalExam = false;
      }
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
  }, decls: 9, vars: 5, consts: [[1, "container", "internal-clinic-page"], ["variant", "banner", "title", "\u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629", "subtitle", "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0644\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646", "icon", "pi pi-heart"], [1, "search-panel", "mb-3"], [3, "applicantSelected"], ["class", "selected-applicant-card mb-3", 4, "ngIf"], ["class", "button-group me-3 mb-3 d-flex gap-2", 4, "ngIf"], [3, "applicantFileNumber", "examAdded", 4, "ngIf"], [3, "applicantFileNumber", 4, "ngIf"], [1, "selected-applicant-card", "mb-3"], [1, "applicant-info"], [1, "fw-semibold"], [1, "text-muted"], [1, "exam-status"], ["class", "status-chip status-chip--loading", 4, "ngIf"], ["class", "status-chip status-chip--exists", 4, "ngIf"], ["class", "status-chip status-chip--new", 4, "ngIf"], [1, "status-chip", "status-chip--loading"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "status-chip", "status-chip--exists"], [1, "pi", "pi-check-circle", "me-2"], [1, "status-chip", "status-chip--new"], [1, "pi", "pi-info-circle", "me-2"], [1, "button-group", "me-3", "mb-3", "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "action-btn", 3, "click", "disabled"], [1, "pi", "pi-plus-circle", "me-1"], [1, "pi", "pi-comments", "me-1"], [1, "pi", "pi-file-edit", "me-1"], [3, "examAdded", "applicantFileNumber"], [3, "applicantFileNumber"]], template: function InternalDoctorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-page-header", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-search-applicant", 3);
      \u0275\u0275listener("applicantSelected", function InternalDoctorComponent_Template_app_search_applicant_applicantSelected_3_listener($event) {
        return ctx.onApplicantSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, InternalDoctorComponent_div_4_Template, 10, 5, "div", 4)(5, InternalDoctorComponent_div_5_Template, 10, 3, "div", 5)(6, InternalDoctorComponent_app_internal_exam_form_6_Template, 1, 1, "app-internal-exam-form", 6)(7, InternalDoctorComponent_app_consultation_form_7_Template, 1, 1, "app-consultation-form", 7)(8, InternalDoctorComponent_app_investigation_form_8_Template, 1, 1, "app-investigation-form", 7);
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
    ReactiveFormsModule,
    PageHeaderComponent,
    SearchApplicantComponent,
    InternalExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n  max-width: 100%;\n  width: 100%;\n}\n.internal-clinic-page[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.search-panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ebeff5;\n  border-radius: 10px;\n  background: #fcfdff;\n  display: flex;\n  justify-content: center;\n}\n.search-panel[_ngcontent-%COMP%]   app-search-applicant[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]     .search-panel .search-applicant-container.container {\n  max-width: 100%;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n[_nghost-%COMP%]     .search-panel .search-applicant-container .col-md-8 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.selected-applicant-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9edf3;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #ffffff;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.status-chip--loading[_ngcontent-%COMP%] {\n  color: #6b5a00;\n  background: #fff9db;\n  border: 1px solid #f1df8a;\n}\n.status-chip--exists[_ngcontent-%COMP%] {\n  color: #0f5132;\n  background: #e9f7ef;\n  border: 1px solid #bfe7cf;\n}\n.status-chip--new[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background: #e7f8ff;\n  border: 1px solid #b8eaf7;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.action-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success[_ngcontent-%COMP%]:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=internal-doctor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalDoctorComponent, [{
    type: Component,
    args: [{ selector: "app-internal-doctor", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      PageHeaderComponent,
      SearchApplicantComponent,
      InternalExamForm,
      ConsultationFormComponent,
      InvestigationForm
    ], template: '<div class="container internal-clinic-page">\r\n  <app-page-header\r\n    variant="banner"\r\n    title="\u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629"\r\n    subtitle="\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0644\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646"\r\n    icon="pi pi-heart">\r\n  </app-page-header>\r\n\r\n  <div class="search-panel mb-3">\r\n    <app-search-applicant (applicantSelected)="onApplicantSelected($event)"></app-search-applicant>\r\n  </div>\r\n\r\n  <div *ngIf="selectedApplicant" class="selected-applicant-card mb-3">\r\n    <div class="applicant-info">\r\n      <div class="fw-semibold">{{ selectedApplicant.fullName }}</div>\r\n      <small class="text-muted">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ selectedApplicant.fileNumber }}</small>\r\n    </div>\r\n\r\n    <div class="exam-status">\r\n      <span *ngIf="checkingInternalExam" class="status-chip status-chip--loading">\r\n        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r\n        \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0648\u062C\u0648\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642...\r\n      </span>\r\n      <span *ngIf="!checkingInternalExam && hasInternalExam" class="status-chip status-chip--exists">\r\n        <i class="pi pi-check-circle me-2"></i>\r\n        \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0628\u0627\u0637\u0646\u064A \u0633\u0627\u0628\u0642\r\n      </span>\r\n      <span *ngIf="!checkingInternalExam && !hasInternalExam" class="status-chip status-chip--new">\r\n        <i class="pi pi-info-circle me-2"></i>\r\n        \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u062D\u0635 \u0633\u0627\u0628\u0642\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf="selectedApplicant" class="button-group me-3 mb-3 d-flex gap-2">\r\n    <button\r\n      class="btn btn-outline-primary action-btn"\r\n      [disabled]="checkingInternalExam || hasInternalExam"\r\n      (click)="addInternalExam()">\r\n      <i class="pi pi-plus-circle me-1"></i>\r\n      \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u062F\u0627\u062E\u0644\u064A\r\n    </button>\r\n\r\n    <button class="btn btn-outline-primary action-btn" [disabled]="checkingInternalExam" (click)="addConsultation()">\r\n      <i class="pi pi-comments me-1"></i>\r\n      \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629\r\n    </button>\r\n    <button class="btn btn-outline-primary action-btn" [disabled]="checkingInternalExam" (click)="addInvestigation()">\r\n      <i class="pi pi-file-edit me-1"></i>\r\n      \u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644\r\n    </button>\r\n  </div>\r\n\r\n  <app-internal-exam-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber"\r\n    (examAdded)="onInternalExamAdded()">\r\n  </app-internal-exam-form>\r\n\r\n  <app-consultation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-consultation-form>\r\n\r\n  <app-investigation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-investigation-form>\r\n</div>\r\n', styles: ["/* src/app/features/doctor/components/internal-doctor.component/internal-doctor.component.scss */\n.container {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n  max-width: 100%;\n  width: 100%;\n}\n.internal-clinic-page {\n  direction: rtl;\n}\n.search-panel {\n  padding: 10px;\n  border: 1px solid #ebeff5;\n  border-radius: 10px;\n  background: #fcfdff;\n  display: flex;\n  justify-content: center;\n}\n.search-panel app-search-applicant {\n  width: 50%;\n}\n:host ::ng-deep .search-panel .search-applicant-container.container {\n  max-width: 100%;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n:host ::ng-deep .search-panel .search-applicant-container .col-md-8 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.selected-applicant-card {\n  border: 1px solid #e9edf3;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #ffffff;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.status-chip--loading {\n  color: #6b5a00;\n  background: #fff9db;\n  border: 1px solid #f1df8a;\n}\n.status-chip--exists {\n  color: #0f5132;\n  background: #e9f7ef;\n  border: 1px solid #bfe7cf;\n}\n.status-chip--new {\n  color: #0c5460;\n  background: #e7f8ff;\n  border: 1px solid #b8eaf7;\n}\n.button-group {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.action-btn[disabled] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton.btn-outline-primary {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=internal-doctor.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalDoctorComponent, { className: "InternalDoctorComponent", filePath: "src/app/features/doctor/components/internal-doctor.component/internal-doctor.component.ts", lineNumber: 29 });
})();
export {
  InternalDoctorComponent
};
//# sourceMappingURL=chunk-M56YT4DX.js.map
