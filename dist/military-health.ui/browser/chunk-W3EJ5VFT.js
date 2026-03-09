import {
  NgbModal
} from "./chunk-ZUITLSD7.js";
import {
  InternalExamService
} from "./chunk-MG5AQLBH.js";
import {
  HEALTH_STATUS_OPTIONS,
  OTHER_OPTION_VALUE,
  normalizeHealthStatus,
  resolveHealthStatusValue
} from "./chunk-7R7W7ON6.js";
import "./chunk-GQ7KH2M7.js";
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
import {
  PaginatorComponent
} from "./chunk-MFLEARHA.js";
import {
  ResetFiltersButtonComponent
} from "./chunk-3GLFOEUA.js";
import {
  Table,
  TableModule
} from "./chunk-H3VVC3HM.js";
import "./chunk-QKQWARGJ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import "./chunk-7K53XEFX.js";
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
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  NgClass,
  NgForOf
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
  ɵɵpureFunction0,
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

// src/app/features/doctor/components/internal-doctor.component/edit-internal-exam-component/edit-internal-exam-component.ts
var _forTrack0 = ($index, $item) => $item.control;
var _forTrack1 = ($index, $item) => $item.value;
function EditInternalExamComponent_For_5_For_5_Template(rf, ctx) {
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
    \u0275\u0275property("name", section_r3.control)("id", section_r3.control + "_edit_" + \u0275$index_16_r2)("value", option_r1.value)("formControlName", section_r3.control);
    \u0275\u0275advance();
    \u0275\u0275property("for", section_r3.control + "_edit_" + \u0275$index_16_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.label, " ");
  }
}
function EditInternalExamComponent_For_5_Conditional_6_Template(rf, ctx) {
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
function EditInternalExamComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, EditInternalExamComponent_For_5_For_5_Template, 4, 6, "div", 18, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, EditInternalExamComponent_For_5_Conditional_6_Template, 2, 1, "div", 19);
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
function EditInternalExamComponent_option_15_Template(rf, ctx) {
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
function EditInternalExamComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.getErrorMessage("resultID"), " ");
  }
}
var EditInternalExamComponent = class _EditInternalExamComponent {
  fb;
  examService;
  toastr;
  exam;
  dialogClosed = new EventEmitter();
  examForm;
  results = [];
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
  constructor(fb, examService, toastr) {
    this.fb = fb;
    this.examService = examService;
    this.toastr = toastr;
  }
  ngOnInit() {
    const controlsConfig = {};
    this.statusSections.forEach((section) => {
      const normalized = normalizeHealthStatus(this.exam?.[section.control]);
      controlsConfig[section.control] = [normalized.status, Validators.required];
      controlsConfig[section.otherControl] = [normalized.other];
    });
    controlsConfig["resultID"] = [this.exam?.resultID || null, Validators.required];
    controlsConfig["reason"] = [this.exam?.reason || ""];
    this.examForm = this.fb.group(controlsConfig);
    this.examService.getResults().subscribe({
      next: (res) => {
        this.results = res.data?.items || [];
        if (this.exam?.resultID) {
          this.examForm.patchValue({ resultID: this.exam.resultID });
        }
      },
      error: () => this.toastr.error("\u274C \u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C", "\u062E\u0637\u0623")
    });
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
  onSubmit() {
    if (!this.exam?.internalExamID) {
      this.toastr.error("\u274C \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u062D\u062F\u064A\u062B: \u0644\u0627 \u064A\u0648\u062C\u062F ID \u0644\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
      return;
    }
    if (this.examForm.invalid) {
      this.toastr.warning("\u274C \u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    this.loading = true;
    const updatedExam = __spreadProps(__spreadValues(__spreadValues({}, this.exam), this.buildStatusPayload()), {
      resultID: Number(this.examForm.value.resultID),
      reason: this.examForm.value.reason ?? this.exam.reason
    });
    const examID = updatedExam.internalExamID;
    this.examService.updateInternalExam(examID, updatedExam).subscribe({
      next: () => {
        this.toastr.success("\u2705 \u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.exam.resultID = updatedExam.resultID;
        this.dialogClosed.emit(true);
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u274C \u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u060C \u062A\u062D\u0642\u0642 \u0645\u0646 ID \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.dialogClosed.emit(false);
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
  static \u0275fac = function EditInternalExamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditInternalExamComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InternalExamService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditInternalExamComponent, selectors: [["app-edit-internal-exam-component"]], inputs: { exam: "exam" }, outputs: { dialogClosed: "dialogClosed" }, decls: 27, vars: 12, consts: [["title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A", "subtitle", "\u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0637\u0628\u064A\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629", "icon", "pi pi-pencil", "width", "90rem", 3, "hide", "visible", "useDefaultFooter"], [1, "exam-form", 3, "ngSubmit", "formGroup"], [1, "section-title"], [1, "section-title", "mt-4"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label", "mb-2"], [1, "text-danger"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "d-block"], ["formControlName", "reason", "rows", "3", "placeholder", "\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F", 1, "form-control"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A", "icon", "pi pi-save", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "medical-system-row"], [1, "system-label"], [1, "system-options"], [1, "form-check"], [1, "other-input-row"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "value", "formControlName"], [1, "form-check-label", 3, "for"], ["type", "text", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control", 3, "formControlName"], [3, "value"], [1, "pi", "pi-exclamation-circle", "me-1"]], template: function EditInternalExamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275listener("hide", function EditInternalExamComponent_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function EditInternalExamComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "h6", 2);
      \u0275\u0275text(3, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0637\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(4, EditInternalExamComponent_For_5_Template, 7, 2, null, null, _forTrack0);
      \u0275\u0275elementStart(6, "h6", 3);
      \u0275\u0275text(7, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
      \u0275\u0275text(11, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275template(15, EditInternalExamComponent_option_15_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, EditInternalExamComponent_Conditional_16_Template, 3, 1, "div", 10);
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
      \u0275\u0275listener("onClick", function EditInternalExamComponent_Template_p_button_onClick_25_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-button", 14);
      \u0275\u0275listener("onClick", function EditInternalExamComponent_Template_p_button_onClick_26_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275property("visible", true)("useDefaultFooter", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.statusSections);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx.examForm.get("resultID")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.examForm.get("resultID")) == null ? null : tmp_4_0.touched))("is-valid", ctx.isFieldValid("resultID"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.results);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getErrorMessage("resultID") ? 16 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.examForm.invalid || ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogWrapperComponent, ButtonModule, Button], styles: ['@charset "UTF-8";\n\n\n\n.edit-dialog-root[_ngcontent-%COMP%] {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.edit-dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-wrapper__icon[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  flex-shrink: 0;\n}\n.dialog-wrapper__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n}\n.dialog-wrapper__subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.btn-close-dialog[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.edit-dialog-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n  flex: 1;\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.edit-dialog-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.section-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  display: block;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #428177;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  cursor: default;\n}\n.preview-container[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.preview-img[_ngcontent-%COMP%] {\n  max-height: 200px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.edit-dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid #e9ecef;\n  background: #f8fafc;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  width: 100%;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.medical-system-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #1f2937;\n  min-width: 220px;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 1.1rem;\n  height: 1.1rem;\n  cursor: pointer;\n}\n.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: #374151;\n}\n.other-input-row[_ngcontent-%COMP%] {\n  padding: 0 0 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=edit-internal-exam-component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditInternalExamComponent, [{
    type: Component,
    args: [{ selector: "app-edit-internal-exam-component", imports: [CommonModule, ReactiveFormsModule, DialogWrapperComponent, ButtonModule], template: `<app-dialog-wrapper\r
  [visible]="true"\r
  title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A"\r
  subtitle="\u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0637\u0628\u064A\u0629 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629"\r
  icon="pi pi-pencil"\r
  width="90rem"\r
  [useDefaultFooter]="false"\r
  (hide)="onCancel()">\r
  <form [formGroup]="examForm" (ngSubmit)="onSubmit()" class="exam-form">\r
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
                [id]="section.control + '_edit_' + optionIndex"\r
                [value]="option.value"\r
                [formControlName]="section.control" />\r
              <label class="form-check-label" [for]="section.control + '_edit_' + optionIndex">\r
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
        @if (getErrorMessage('resultID')) {\r
          <div class="invalid-feedback d-block">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('resultID') }}\r
          </div>\r
        }\r
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
      (onClick)="onCancel()"></p-button>\r
    <p-button\r
      label="\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [loading]="loading"\r
      [disabled]="examForm.invalid || loading"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</app-dialog-wrapper>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/edit-internal-exam-component/edit-internal-exam-component.scss */\n.edit-dialog-root {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.edit-dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-wrapper__icon {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  flex-shrink: 0;\n}\n.dialog-wrapper__title {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n}\n.dialog-wrapper__subtitle {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.btn-close-dialog {\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.edit-dialog-body {\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n  flex: 1;\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.edit-dialog-form {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.section-title:first-child {\n  margin-top: 0;\n}\n.form-label {\n  font-weight: 600;\n  color: #374151;\n  display: block;\n}\n.form-control {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #428177;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\ntextarea.form-control {\n  min-height: 80px;\n}\n.form-control[readonly] {\n  background-color: #f3f4f6;\n  cursor: default;\n}\n.preview-container {\n  margin-top: 0.75rem;\n}\n.preview-img {\n  max-height: 200px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.edit-dialog-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid #e9ecef;\n  background: #f8fafc;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  width: 100%;\n}\n:host {\n  display: block;\n}\n.medical-system-row {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.medical-system-row .system-label {\n  flex: 1;\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #1f2937;\n  min-width: 220px;\n}\n.medical-system-row .system-options {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.medical-system-row .system-options .form-check {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n}\n.medical-system-row .system-options .form-check .form-check-input {\n  margin: 0;\n  width: 1.1rem;\n  height: 1.1rem;\n  cursor: pointer;\n}\n.medical-system-row .system-options .form-check .form-check-label {\n  margin: 0;\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: #374151;\n}\n.other-input-row {\n  padding: 0 0 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=edit-internal-exam-component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: InternalExamService }, { type: ToastrService }], { exam: [{
    type: Input
  }], dialogClosed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditInternalExamComponent, { className: "EditInternalExamComponent", filePath: "src/app/features/doctor/components/internal-doctor.component/edit-internal-exam-component/edit-internal-exam-component.ts", lineNumber: 17 });
})();

// src/app/features/doctor/components/internal-doctor.component/exam-details/exam-details.component.ts
function InternalExamDetailsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 4);
    \u0275\u0275text(1, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.exam.reason);
  }
}
var InternalExamDetailsComponent = class _InternalExamDetailsComponent {
  exam;
  close = new EventEmitter();
  closeModal() {
    this.close.emit();
  }
  static \u0275fac = function InternalExamDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalExamDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalExamDetailsComponent, selectors: [["app-internal-exam-details"]], inputs: { exam: "exam" }, outputs: { close: "close" }, decls: 56, vars: 21, consts: [["title", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A", "icon", "pi pi-heart", "width", "70rem", 3, "hide", "visible", "subtitle", "useDefaultFooter"], [1, "internal-exam-details-body"], [1, "details-grid"], [1, "info-card"], [1, "details-section-title"], [1, "info-value"], [1, "info-value", "result-badge"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u063A\u0644\u0627\u0642", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"]], template: function InternalExamDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275listener("hide", function InternalExamDetailsComponent_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      \u0275\u0275text(5, "\u0627\u0644\u0642\u0644\u0628 \u0648\u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u062F\u0645\u0648\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "h6", 4);
      \u0275\u0275text(10, "\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 3)(14, "h6", 4);
      \u0275\u0275text(15, "\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 5);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 3)(19, "h6", 4);
      \u0275\u0275text(20, "\u0627\u0644\u063A\u062F\u062F \u0627\u0644\u0635\u0645 \u0648\u0627\u0644\u062A\u063A\u0630\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 5);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 3)(24, "h6", 4);
      \u0275\u0275text(25, "\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0639\u0635\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 5);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 3)(29, "h6", 4);
      \u0275\u0275text(30, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062F\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 5);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 3)(34, "h6", 4);
      \u0275\u0275text(35, "\u0627\u0644\u0645\u0641\u0627\u0635\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 5);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 3)(39, "h6", 4);
      \u0275\u0275text(40, "\u0627\u0644\u0643\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 5);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 3)(44, "h6", 4);
      \u0275\u0275text(45, "\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0644\u062F\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 5);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 3)(49, "h6", 4);
      \u0275\u0275text(50, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 6);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(53, InternalExamDetailsComponent_Conditional_53_Template, 4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 7)(55, "p-button", 8);
      \u0275\u0275listener("onClick", function InternalExamDetailsComponent_Template_p_button_onClick_55_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", true)("subtitle", "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: " + (ctx.exam.applicantFileNumber || ""))("useDefaultFooter", false);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.exam.heart || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.respiratory || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.digestive || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.endocrine || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.neurology || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.blood || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.joints || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.kidney || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.exam.skin || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("result-accepted", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0642\u0628\u0648\u0644")("result-rejected", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0631\u0641\u0648\u0636")("result-postponed", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u062A\u0623\u062C\u064A\u0644" || (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0624\u062C\u0644");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.exam.result == null ? null : ctx.exam.result.description) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.exam.reason ? 53 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
    }
  }, dependencies: [CommonModule, DialogWrapperComponent, ButtonModule, Button], styles: ['@charset "UTF-8";\n\n\n\n.internal-exam-details-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.info-card[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.details-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f3f35;\n}\n.info-value[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  font-size: 0.9rem;\n  color: #212529;\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  word-break: break-word;\n}\n.result-badge[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n}\n.result-badge.result-accepted[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-rejected[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-postponed[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #ffffff;\n  font-weight: 600;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .internal-exam-details-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=exam-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalExamDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-internal-exam-details", standalone: true, imports: [CommonModule, DialogWrapperComponent, ButtonModule], template: `<app-dialog-wrapper\r
  [visible]="true"\r
  title="\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062F\u0627\u062E\u0644\u064A"\r
  [subtitle]="'\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ' + (exam.applicantFileNumber || '')"\r
  icon="pi pi-heart"\r
  width="70rem"\r
  [useDefaultFooter]="false"\r
  (hide)="closeModal()">\r
  <div class="internal-exam-details-body">\r
    <div class="details-grid">\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0642\u0644\u0628 \u0648\u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u062F\u0645\u0648\u064A\u0629</h6>\r
        <div class="info-value">{{ exam.heart || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A</h6>\r
        <div class="info-value">{{ exam.respiratory || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645</h6>\r
        <div class="info-value">{{ exam.digestive || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u063A\u062F\u062F \u0627\u0644\u0635\u0645 \u0648\u0627\u0644\u062A\u063A\u0630\u064A\u0629</h6>\r
        <div class="info-value">{{ exam.endocrine || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0639\u0635\u0628\u064A\u0629</h6>\r
        <div class="info-value">{{ exam.neurology || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062F\u0645</h6>\r
        <div class="info-value">{{ exam.blood || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0645\u0641\u0627\u0635\u0644</h6>\r
        <div class="info-value">{{ exam.joints || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0643\u0644\u064A\u0629</h6>\r
        <div class="info-value">{{ exam.kidney || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0644\u062F\u064A\u0629</h6>\r
        <div class="info-value">{{ exam.skin || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
        <div\r
          class="info-value result-badge"\r
          [class.result-accepted]="exam.result?.description === '\u0645\u0642\u0628\u0648\u0644'"\r
          [class.result-rejected]="exam.result?.description === '\u0645\u0631\u0641\u0648\u0636'"\r
          [class.result-postponed]="exam.result?.description === '\u062A\u0623\u062C\u064A\u0644' || exam.result?.description === '\u0645\u0624\u062C\u0644'">\r
          {{ exam.result?.description || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    @if (exam.reason) {\r
      <h6 class="details-section-title">\u0627\u0644\u0633\u0628\u0628</h6>\r
      <div class="info-value">{{ exam.reason }}</div>\r
    }\r
  </div>\r
\r
  <div dialog-footer class="dialog-actions">\r
    <p-button\r
      label="\u0625\u063A\u0644\u0627\u0642"\r
      icon="pi pi-times"\r
      severity="secondary"\r
      [outlined]="true"\r
      (onClick)="closeModal()"></p-button>\r
  </div>\r
</app-dialog-wrapper>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/exam-details/exam-details.component.scss */\n.internal-exam-details-body {\n  padding: 1.5rem;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.info-card {\n  padding: 0.9rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.details-section-title {\n  margin: 0 0 0.6rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f3f35;\n}\n.info-value {\n  background: #ffffff;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  font-size: 0.9rem;\n  color: #212529;\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  word-break: break-word;\n}\n.result-badge {\n  text-align: center;\n  justify-content: center;\n}\n.result-badge.result-accepted {\n  background: #10b981;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-rejected {\n  background: #dc2626;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-postponed {\n  background: #f59e0b;\n  color: #ffffff;\n  font-weight: 600;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  .details-grid {\n    grid-template-columns: 1fr;\n  }\n  .internal-exam-details-body {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=exam-details.component.css.map */\n'] }]
  }], null, { exam: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalExamDetailsComponent, { className: "InternalExamDetailsComponent", filePath: "src/app/features/doctor/components/internal-doctor.component/exam-details/exam-details.component.ts", lineNumber: 14 });
})();

// src/app/features/doctor/components/internal-doctor.component/deferred-internal-exams.component/deferred-internal-exams.component.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
var _c2 = ["class", "component"];
var _c3 = () => ({ "min-width": "50rem" });
function DeferredInternalExamsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 16);
    \u0275\u0275text(4, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 17);
    \u0275\u0275text(6, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 15);
    \u0275\u0275text(8, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function DeferredInternalExamsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 18)(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 18)(8, "span", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 18)(11, "div", 22)(12, "button", 23);
    \u0275\u0275listener("click", function DeferredInternalExamsComponent_ng_template_12_Template_button_click_12_listener() {
      const exam_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewDetails(exam_r3));
    });
    \u0275\u0275element(13, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function DeferredInternalExamsComponent_ng_template_12_Template_button_click_14_listener() {
      const exam_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditDialog(exam_r3));
    });
    \u0275\u0275element(15, "i", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r3.applicantFileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.getBadgeClass(exam_r3.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (exam_r3.result == null ? null : exam_r3.result.description) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r3.reason || "-");
  }
}
function DeferredInternalExamsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629.");
    \u0275\u0275elementEnd()();
  }
}
var DeferredInternalExamsComponent = class _DeferredInternalExamsComponent {
  examService;
  toastr;
  modalService;
  exams = [];
  globalFilter = "";
  loading = true;
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  table;
  searchInput;
  constructor(examService, toastr, modalService) {
    this.examService = examService;
    this.toastr = toastr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadExams();
  }
  loadExams() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.examService.getAllInternalExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (data) => {
        this.exams = data.items || [];
        this.totalRecords = data.totalCount || 0;
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadExams();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadExams();
  }
  onFilterChange(event) {
    const value = event.target.value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadExams();
  }
  openEditDialog(exam) {
    const modalRef = this.modalService.open(EditInternalExamComponent, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.exam = __spreadValues({}, exam);
    modalRef.componentInstance.dialogClosed.subscribe((updated) => {
      modalRef.close();
      if (updated) {
        this.toastr.success("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.loadExams();
      }
    });
  }
  viewDetails(exam) {
    const modalRef = this.modalService.open(InternalExamDetailsComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.exam = exam;
    modalRef.componentInstance.close.subscribe(() => modalRef.close());
  }
  getBadgeClass(result) {
    if (!result || !result.description) {
      return "badge bg-secondary";
    }
    switch (result.description) {
      case "\u0645\u0642\u0628\u0648\u0644":
        return "badge bg-success";
      case "\u0645\u0631\u0641\u0648\u0636":
        return "badge bg-danger";
      case "\u0645\u0624\u062C\u0644":
      case "\u062A\u0623\u062C\u064A\u0644":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  }
  resetFilters() {
    this.globalFilter = "";
    this.page = 1;
    if (this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadExams();
  }
  static \u0275fac = function DeferredInternalExamsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredInternalExamsComponent)(\u0275\u0275directiveInject(InternalExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeferredInternalExamsComponent, selectors: [["app-deferred-internal-exams", 8, "component"]], viewQuery: function DeferredInternalExamsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, attrs: _c2, decls: 15, vars: 9, consts: [["searchInput", ""], ["table", ""], [1, "user-header-section", "p-3", "container-fluid"], ["variant", "banner", "title", "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0627\u0644\u0645\u0624\u062C\u0644\u0629", "subtitle", "\u0639\u0631\u0636 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629", "icon", "pi pi-clock"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "custom-table", "my-3", 3, "value", "loading", "rows", "totalRecords", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [1, "text-center", 2, "min-width", "100px"], [1, "text-center", 2, "min-width", "120px"], [1, "text-center", 2, "min-width", "160px"], [1, "text-center", "align-middle"], [1, "fw-bold", "small"], [1, "small", "d-inline-block", 3, "ngClass"], [1, "small"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center", "gap-2"], ["type", "button", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-eye"], ["type", "button", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-pen-to-square"], ["colspan", "4", 1, "text-center", "py-3", "align-middle", "small"]], template: function DeferredInternalExamsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "app-page-header", 3);
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "app-reset-filters-button", 6);
      \u0275\u0275listener("reset", function DeferredInternalExamsComponent_Template_app_reset_filters_button_reset_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "input", 8, 0);
      \u0275\u0275listener("input", function DeferredInternalExamsComponent_Template_input_input_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p-table", 10, 1);
      \u0275\u0275template(11, DeferredInternalExamsComponent_ng_template_11_Template, 9, 0, "ng-template", 11)(12, DeferredInternalExamsComponent_ng_template_12_Template, 16, 4, "ng-template", 12)(13, DeferredInternalExamsComponent_ng_template_13_Template, 3, 0, "ng-template", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-paginator", 14);
      \u0275\u0275listener("pageChange", function DeferredInternalExamsComponent_Template_app_paginator_pageChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function DeferredInternalExamsComponent_Template_app_paginator_pageSizeChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.exams)("loading", ctx.loading)("rows", ctx.rowsPerPage)("totalRecords", ctx.totalRecords)("tableStyle", \u0275\u0275pureFunction0(8, _c3));
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    ButtonModule,
    PrimeTemplate,
    TableModule,
    Table,
    TooltipModule,
    Tooltip,
    PaginatorComponent,
    ResetFiltersButtonComponent,
    PageHeaderComponent
  ], styles: ['@charset "UTF-8";\n\n\n\n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.filter-reset-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n[_nghost-%COMP%]     .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-success, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-primary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-warning, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #b9a779 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6b1f2a !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-secondary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3d3a3b !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge .text-primary-emphasis, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n[_nghost-%COMP%]     .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n@media (max-width: 768px) {\n  .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=deferred-internal-exams.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredInternalExamsComponent, [{
    type: Component,
    args: [{ selector: "app-deferred-internal-exams.component", imports: [
      CommonModule,
      FormsModule,
      ButtonModule,
      TableModule,
      TooltipModule,
      PaginatorComponent,
      ResetFiltersButtonComponent,
      PageHeaderComponent
    ], template: `<div class="user-header-section p-3 container-fluid">\r
  <app-page-header\r
    variant="banner"\r
    title="\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0627\u0644\u0645\u0624\u062C\u0644\u0629"\r
    subtitle="\u0639\u0631\u0636 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629"\r
    icon="pi pi-clock">\r
  </app-page-header>\r
\r
  <div class="table-toolbar">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
      <div class="search-wrapper">\r
        <input\r
          #searchInput\r
          type="text"\r
          class="search-input"\r
          placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645"\r
          (input)="onFilterChange($event)"\r
        />\r
        <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <p-table\r
    #table\r
    [value]="exams"\r
    [loading]="loading"\r
    [rows]="rowsPerPage"\r
    [totalRecords]="totalRecords"\r
    class="custom-table my-3"\r
    [tableStyle]="{ 'min-width': '50rem' }">\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th style="min-width: 100px" class="text-center">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th style="min-width: 120px" class="text-center">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th style="min-width: 160px" class="text-center">\u0627\u0644\u0633\u0628\u0628</th>\r
        <th style="min-width: 100px" class="text-center">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="body" let-exam>\r
      <tr>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ exam.applicantFileNumber }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span [ngClass]="getBadgeClass(exam.result)" class="small d-inline-block">\r
            {{ exam.result?.description || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
          </span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span class="small">{{ exam.reason || '-' }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="d-flex flex-row justify-content-center align-items-center gap-2">\r
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"\r
              tooltipPosition="top"\r
              (click)="viewDetails(exam)">\r
              <i class="pi pi-eye"></i>\r
            </button>\r
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635"\r
              tooltipPosition="top"\r
              (click)="openEditDialog(exam)">\r
              <i class="pi pi-pen-to-square"></i>\r
            </button>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="4" class="text-center py-3 align-middle small">\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629.</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <app-paginator\r
    [totalRecords]="totalRecords"\r
    [pageSize]="rowsPerPage"\r
    [currentPage]="page"\r
    (pageChange)="onPageChange($event)"\r
    (pageSizeChange)="onPageSizeChange($event)">\r
  </app-paginator>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/internal-doctor.component/deferred-internal-exams.component/deferred-internal-exams.component.scss */\n.user-header-section {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-toolbar {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.filter-reset-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrapper {\n  position: relative;\n  width: 400px;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n:host ::ng-deep .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-success,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #b9a779 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6b1f2a !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3d3a3b !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge .text-primary-emphasis,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n:host ::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n@media (max-width: 768px) {\n  .search-wrapper {\n    width: 100%;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=deferred-internal-exams.component.css.map */\n'] }]
  }], () => [{ type: InternalExamService }, { type: ToastrService }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeferredInternalExamsComponent, { className: "DeferredInternalExamsComponent", filePath: "src/app/features/doctor/components/internal-doctor.component/deferred-internal-exams.component/deferred-internal-exams.component.ts", lineNumber: 32 });
})();
export {
  DeferredInternalExamsComponent
};
//# sourceMappingURL=chunk-W3EJ5VFT.js.map
