import {
  SurgicalExamService
} from "./chunk-SI7PVOXL.js";
import {
  HEALTH_STATUS_VALUES
} from "./chunk-7R7W7ON6.js";
import "./chunk-S5S7SM6Z.js";
import {
  ToastrService
} from "./chunk-QUV35I6O.js";
import {
  PaginatorComponent
} from "./chunk-SYMQ7THN.js";
import {
  ResetFiltersButtonComponent,
  Table,
  TableModule,
  Tooltip,
  TooltipModule
} from "./chunk-5SMAMAOZ.js";
import "./chunk-ZBRQ7FXV.js";
import "./chunk-WAJQF222.js";
import "./chunk-BSHRCOEK.js";
import {
  ButtonModule
} from "./chunk-DYGQH52H.js";
import {
  PrimeTemplate
} from "./chunk-O5UBWZSW.js";
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
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  NgClass,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/surgery-doctor.component/edit-surgical-exam/edit-surgical-exam.ts
function EditSurgicalExam_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "input", 48);
    \u0275\u0275elementEnd();
  }
}
function EditSurgicalExam_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "input", 49);
    \u0275\u0275elementEnd();
  }
}
function EditSurgicalExam_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "input", 50);
    \u0275\u0275elementEnd();
  }
}
function EditSurgicalExam_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "input", 51);
    \u0275\u0275elementEnd();
  }
}
function EditSurgicalExam_option_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.description);
  }
}
function EditSurgicalExam_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("resultID"), " ");
  }
}
function EditSurgicalExam_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
var EditSurgicalExam = class _EditSurgicalExam {
  fb;
  examService;
  toastr;
  exam;
  dialogClosed = new EventEmitter();
  examForm;
  results = [];
  loading = false;
  constructor(fb, examService, toastr) {
    this.fb = fb;
    this.examService = examService;
    this.toastr = toastr;
  }
  ngOnInit() {
    const generalSurgery = this.parseSurgeryValue(this.exam?.generalSurgery || "");
    const urinarySurgery = this.parseSurgeryValue(this.exam?.urinarySurgery || "");
    const vascularSurgery = this.parseSurgeryValue(this.exam?.vascularSurgery || "");
    const thoracicSurgery = this.parseSurgeryValue(this.exam?.thoracicSurgery || "");
    this.examForm = this.fb.group({
      generalSurgery: [generalSurgery.displayValue, Validators.required],
      generalSurgeryOther: [generalSurgery.otherValue || ""],
      urinarySurgery: [urinarySurgery.displayValue, Validators.required],
      urinarySurgeryOther: [urinarySurgery.otherValue || ""],
      vascularSurgery: [vascularSurgery.displayValue, Validators.required],
      vascularSurgeryOther: [vascularSurgery.otherValue || ""],
      thoracicSurgery: [thoracicSurgery.displayValue, Validators.required],
      thoracicSurgeryOther: [thoracicSurgery.otherValue || ""],
      resultID: [this.exam?.resultID || null, Validators.required],
      reason: [this.exam?.reason || ""]
    });
    this.examService.getResults().subscribe({
      next: (res) => {
        this.results = res.data?.items || [];
        if (this.exam?.resultID) {
          this.examForm.patchValue({ resultID: this.exam.resultID });
        }
      },
      error: () => this.toastr.error("\u274C \u0641\u0634\u0644 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C")
    });
  }
  // Helper method to parse surgery value
  parseSurgeryValue(value) {
    if (!value || HEALTH_STATUS_VALUES.includes(value)) {
      return { displayValue: value || "\u0633\u0644\u064A\u0645", otherValue: "" };
    }
    return { displayValue: "\u063A\u064A\u0631 \u0630\u0644\u0643", otherValue: value };
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
    if (!this.exam?.surgicalExamID) {
      this.toastr.error("\u274C \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u062D\u062F\u064A\u062B: \u0644\u0627 \u064A\u0648\u062C\u062F ID \u0644\u0644\u0641\u062D\u0635");
      return;
    }
    if (this.examForm.invalid) {
      this.toastr.warning("\u274C \u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
      return;
    }
    const formData = this.examForm.value;
    const updatedExam = __spreadProps(__spreadValues({}, this.exam), {
      generalSurgery: formData.generalSurgery === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.generalSurgeryOther || "" : formData.generalSurgery,
      urinarySurgery: formData.urinarySurgery === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.urinarySurgeryOther || "" : formData.urinarySurgery,
      vascularSurgery: formData.vascularSurgery === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.vascularSurgeryOther || "" : formData.vascularSurgery,
      thoracicSurgery: formData.thoracicSurgery === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.thoracicSurgeryOther || "" : formData.thoracicSurgery,
      resultID: Number(formData.resultID),
      reason: (formData.reason || "").trim()
      // ✅ إضافة حقل السبب
    });
    const examID = updatedExam.surgicalExamID;
    this.loading = true;
    this.examService.updateSurgicalExam(examID, updatedExam).subscribe({
      next: () => {
        this.toastr.success("\u2705 \u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0628\u0646\u062C\u0627\u062D");
        this.exam.result = this.results.find((r) => r.resultID === updatedExam.resultID);
        this.exam.resultID = updatedExam.resultID;
        this.exam.reason = updatedExam.reason;
        this.dialogClosed.emit(true);
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u274C \u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u060C \u062A\u062D\u0642\u0642 \u0645\u0646 ID \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A");
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.dialogClosed.emit(false);
  }
  static \u0275fac = function EditSurgicalExam_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditSurgicalExam)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SurgicalExamService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditSurgicalExam, selectors: [["app-edit-surgical-exam"]], inputs: { exam: "exam" }, outputs: { dialogClosed: "dialogClosed" }, decls: 102, vars: 13, consts: [[1, "dialog-backdrop"], [1, "dialog-card", 3, "click"], [1, "dialog-header"], ["type", "button", 1, "btn-close", 3, "click"], [1, "dialog-form", 3, "ngSubmit", "formGroup"], [1, "medical-system-row"], [1, "system-label"], [1, "text-danger"], [1, "system-options"], [1, "form-check"], ["type", "radio", "name", "generalSurgery", "id", "generalSurgery_healthy_edit", "value", "\u0633\u0644\u064A\u0645", "formControlName", "generalSurgery", 1, "form-check-input"], ["for", "generalSurgery_healthy_edit", 1, "form-check-label"], ["type", "radio", "name", "generalSurgery", "id", "generalSurgery_unhealthy_edit", "value", "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", "formControlName", "generalSurgery", 1, "form-check-input"], ["for", "generalSurgery_unhealthy_edit", 1, "form-check-label"], ["type", "radio", "name", "generalSurgery", "id", "generalSurgery_other_edit", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "generalSurgery", 1, "form-check-input"], ["for", "generalSurgery_other_edit", 1, "form-check-label"], ["class", "other-input-row", 4, "ngIf"], ["type", "radio", "name", "urinarySurgery", "id", "urinarySurgery_healthy_edit", "value", "\u0633\u0644\u064A\u0645", "formControlName", "urinarySurgery", 1, "form-check-input"], ["for", "urinarySurgery_healthy_edit", 1, "form-check-label"], ["type", "radio", "name", "urinarySurgery", "id", "urinarySurgery_unhealthy_edit", "value", "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", "formControlName", "urinarySurgery", 1, "form-check-input"], ["for", "urinarySurgery_unhealthy_edit", 1, "form-check-label"], ["type", "radio", "name", "urinarySurgery", "id", "urinarySurgery_other_edit", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "urinarySurgery", 1, "form-check-input"], ["for", "urinarySurgery_other_edit", 1, "form-check-label"], ["type", "radio", "name", "vascularSurgery", "id", "vascularSurgery_healthy_edit", "value", "\u0633\u0644\u064A\u0645", "formControlName", "vascularSurgery", 1, "form-check-input"], ["for", "vascularSurgery_healthy_edit", 1, "form-check-label"], ["type", "radio", "name", "vascularSurgery", "id", "vascularSurgery_unhealthy_edit", "value", "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", "formControlName", "vascularSurgery", 1, "form-check-input"], ["for", "vascularSurgery_unhealthy_edit", 1, "form-check-label"], ["type", "radio", "name", "vascularSurgery", "id", "vascularSurgery_other_edit", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "vascularSurgery", 1, "form-check-input"], ["for", "vascularSurgery_other_edit", 1, "form-check-label"], ["type", "radio", "name", "thoracicSurgery", "id", "thoracicSurgery_healthy_edit", "value", "\u0633\u0644\u064A\u0645", "formControlName", "thoracicSurgery", 1, "form-check-input"], ["for", "thoracicSurgery_healthy_edit", 1, "form-check-label"], ["type", "radio", "name", "thoracicSurgery", "id", "thoracicSurgery_unhealthy_edit", "value", "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", "formControlName", "thoracicSurgery", 1, "form-check-input"], ["for", "thoracicSurgery_unhealthy_edit", 1, "form-check-label"], ["type", "radio", "name", "thoracicSurgery", "id", "thoracicSurgery_other_edit", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "thoracicSurgery", 1, "form-check-input"], ["for", "thoracicSurgery_other_edit", 1, "form-check-label"], [1, "result-section"], [1, "form-label", "mb-3"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "reason-section"], [1, "form-label"], ["formControlName", "reason", "rows", "3", "placeholder", "\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F", 1, "form-control"], [1, "modal-footer", "mt-4"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "other-input-row"], ["type", "text", "formControlName", "generalSurgeryOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "text", "formControlName", "urinarySurgeryOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "text", "formControlName", "vascularSurgeryOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "text", "formControlName", "thoracicSurgeryOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], [3, "value"], [1, "invalid-feedback"], [1, "pi", "pi-exclamation-circle"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function EditSurgicalExam_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function EditSurgicalExam_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function EditSurgicalExam_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(6, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 4);
      \u0275\u0275listener("ngSubmit", function EditSurgicalExam_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 ");
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
      \u0275\u0275element(15, "input", 10);
      \u0275\u0275elementStart(16, "label", 11);
      \u0275\u0275text(17, "\u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275element(19, "input", 12);
      \u0275\u0275elementStart(20, "label", 13);
      \u0275\u0275text(21, "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 9);
      \u0275\u0275element(23, "input", 14);
      \u0275\u0275elementStart(24, "label", 15);
      \u0275\u0275text(25, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(26, EditSurgicalExam_div_26_Template, 2, 0, "div", 16);
      \u0275\u0275elementStart(27, "div", 5)(28, "div", 6);
      \u0275\u0275text(29, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0648\u0644\u064A\u0629 ");
      \u0275\u0275elementStart(30, "span", 7);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 8)(33, "div", 9);
      \u0275\u0275element(34, "input", 17);
      \u0275\u0275elementStart(35, "label", 18);
      \u0275\u0275text(36, "\u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 9);
      \u0275\u0275element(38, "input", 19);
      \u0275\u0275elementStart(39, "label", 20);
      \u0275\u0275text(40, "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 9);
      \u0275\u0275element(42, "input", 21);
      \u0275\u0275elementStart(43, "label", 22);
      \u0275\u0275text(44, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(45, EditSurgicalExam_div_45_Template, 2, 0, "div", 16);
      \u0275\u0275elementStart(46, "div", 5)(47, "div", 6);
      \u0275\u0275text(48, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0648\u0639\u0627\u0626\u064A\u0629 ");
      \u0275\u0275elementStart(49, "span", 7);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 8)(52, "div", 9);
      \u0275\u0275element(53, "input", 23);
      \u0275\u0275elementStart(54, "label", 24);
      \u0275\u0275text(55, "\u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 9);
      \u0275\u0275element(57, "input", 25);
      \u0275\u0275elementStart(58, "label", 26);
      \u0275\u0275text(59, "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 9);
      \u0275\u0275element(61, "input", 27);
      \u0275\u0275elementStart(62, "label", 28);
      \u0275\u0275text(63, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(64, EditSurgicalExam_div_64_Template, 2, 0, "div", 16);
      \u0275\u0275elementStart(65, "div", 5)(66, "div", 6);
      \u0275\u0275text(67, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u062F\u0631\u064A\u0629 ");
      \u0275\u0275elementStart(68, "span", 7);
      \u0275\u0275text(69, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 8)(71, "div", 9);
      \u0275\u0275element(72, "input", 29);
      \u0275\u0275elementStart(73, "label", 30);
      \u0275\u0275text(74, "\u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 9);
      \u0275\u0275element(76, "input", 31);
      \u0275\u0275elementStart(77, "label", 32);
      \u0275\u0275text(78, "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 9);
      \u0275\u0275element(80, "input", 33);
      \u0275\u0275elementStart(81, "label", 34);
      \u0275\u0275text(82, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(83, EditSurgicalExam_div_83_Template, 2, 0, "div", 16);
      \u0275\u0275elementStart(84, "div", 35)(85, "label", 36);
      \u0275\u0275text(86, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
      \u0275\u0275elementStart(87, "span", 7);
      \u0275\u0275text(88, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "select", 37);
      \u0275\u0275template(90, EditSurgicalExam_option_90_Template, 2, 2, "option", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(91, EditSurgicalExam_div_91_Template, 3, 1, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 40)(93, "label", 41);
      \u0275\u0275text(94, "\u0627\u0644\u0633\u0628\u0628 (\u0625\u0646 \u0648\u062C\u062F)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "textarea", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 43)(97, "button", 44);
      \u0275\u0275listener("click", function EditSurgicalExam_Template_button_click_97_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(98, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 45);
      \u0275\u0275template(100, EditSurgicalExam_span_100_Template, 1, 0, "span", 46);
      \u0275\u0275text(101, " \u062D\u0641\u0638 ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.examForm.get("generalSurgery")) == null ? null : tmp_1_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.examForm.get("urinarySurgery")) == null ? null : tmp_2_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.examForm.get("vascularSurgery")) == null ? null : tmp_3_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.examForm.get("thoracicSurgery")) == null ? null : tmp_4_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx.examForm.get("resultID")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.examForm.get("resultID")) == null ? null : tmp_5_0.touched))("is-valid", ctx.isFieldValid("resultID"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.results);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("resultID"));
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.examForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: [`@charset "UTF-8";



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
.dialog-card[_ngcontent-%COMP%] {
  background: #EDEBE0 !important;
  max-width: 800px !important;
}
.dialog-form[_ngcontent-%COMP%] {
  padding: 2rem;
}
.medical-system-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
}
.medical-system-row[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
}
.medical-system-row[_ngcontent-%COMP%]   .system-label[_ngcontent-%COMP%] {
  flex: 1;
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
  min-width: 250px;
}
.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}
.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin: 0;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid #6b7280;
  cursor: pointer;
}
.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {
  background-color: #054239;
  border-color: #054239;
}
.medical-system-row[_ngcontent-%COMP%]   .system-options[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin: 0;
  cursor: pointer;
  font-size: 1rem;
  color: #374151;
  font-weight: 500;
}
.other-input-row[_ngcontent-%COMP%] {
  padding: 0 1.5rem 1rem 1.5rem;
  background-color: #f9fafb;
}
.other-input-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}
.other-input-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  border-color: #054239;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);
}
.result-section[_ngcontent-%COMP%] {
  padding: 1.5rem 1.5rem;
  background: #f9fafb;
  border-top: 2px solid #054239;
  border-bottom: 2px solid #054239;
  margin: 2rem 0 1rem 0;
}
.result-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  font-weight: 700;
  font-size: 1.125rem;
  color: #1f2937;
}
.result-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}
.result-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  border-color: #054239;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);
}
.reason-section[_ngcontent-%COMP%] {
  padding: 1.5rem 1.5rem;
  margin-top: 1rem;
}
.reason-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.75rem;
}
.reason-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}
.reason-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  border-color: #054239;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);
}
.modal-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
/*# sourceMappingURL=edit-surgical-exam.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditSurgicalExam, [{
    type: Component,
    args: [{ selector: "app-edit-surgical-exam", imports: [CommonModule, ReactiveFormsModule], template: `<!-- edit-surgical-exam.component.html -->\r
<div class="dialog-backdrop">\r
  <div class="dialog-card" (click)="$event.stopPropagation()">\r
    <div class="dialog-header">\r
      <h3>\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u064A</h3>\r
      <button type="button" class="btn-close" (click)="onCancel()">\r
        \xD7\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="examForm" (ngSubmit)="onSubmit()" class="dialog-form">\r
\r
      <!-- \u062C\u0631\u0627\u062D\u0629 \u0639\u0627\u0645\u0629 -->\r
      <div class="medical-system-row">\r
        <div class="system-label">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 <span class="text-danger">*</span></div>\r
        <div class="system-options">\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="generalSurgery" id="generalSurgery_healthy_edit" value="\u0633\u0644\u064A\u0645" formControlName="generalSurgery">\r
            <label class="form-check-label" for="generalSurgery_healthy_edit">\u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="generalSurgery" id="generalSurgery_unhealthy_edit" value="\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" formControlName="generalSurgery">\r
            <label class="form-check-label" for="generalSurgery_unhealthy_edit">\u063A\u064A\u0631 \u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="generalSurgery" id="generalSurgery_other_edit" value="\u063A\u064A\u0631 \u0630\u0644\u0643" formControlName="generalSurgery">\r
            <label class="form-check-label" for="generalSurgery_other_edit">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
          </div>\r
        </div>\r
      </div>\r
      <div *ngIf="examForm.get('generalSurgery')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="other-input-row">\r
        <input type="text" class="form-control" formControlName="generalSurgeryOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
      </div>\r
\r
      <!-- \u062C\u0631\u0627\u062D\u0629 \u0628\u0648\u0644\u064A\u0629 -->\r
      <div class="medical-system-row">\r
        <div class="system-label">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0648\u0644\u064A\u0629 <span class="text-danger">*</span></div>\r
        <div class="system-options">\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="urinarySurgery" id="urinarySurgery_healthy_edit" value="\u0633\u0644\u064A\u0645" formControlName="urinarySurgery">\r
            <label class="form-check-label" for="urinarySurgery_healthy_edit">\u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="urinarySurgery" id="urinarySurgery_unhealthy_edit" value="\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" formControlName="urinarySurgery">\r
            <label class="form-check-label" for="urinarySurgery_unhealthy_edit">\u063A\u064A\u0631 \u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="urinarySurgery" id="urinarySurgery_other_edit" value="\u063A\u064A\u0631 \u0630\u0644\u0643" formControlName="urinarySurgery">\r
            <label class="form-check-label" for="urinarySurgery_other_edit">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
          </div>\r
        </div>\r
      </div>\r
      <div *ngIf="examForm.get('urinarySurgery')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="other-input-row">\r
        <input type="text" class="form-control" formControlName="urinarySurgeryOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
      </div>\r
\r
      <!-- \u062C\u0631\u0627\u062D\u0629 \u0648\u0639\u0627\u0626\u064A\u0629 -->\r
      <div class="medical-system-row">\r
        <div class="system-label">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0648\u0639\u0627\u0626\u064A\u0629 <span class="text-danger">*</span></div>\r
        <div class="system-options">\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="vascularSurgery" id="vascularSurgery_healthy_edit" value="\u0633\u0644\u064A\u0645" formControlName="vascularSurgery">\r
            <label class="form-check-label" for="vascularSurgery_healthy_edit">\u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="vascularSurgery" id="vascularSurgery_unhealthy_edit" value="\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" formControlName="vascularSurgery">\r
            <label class="form-check-label" for="vascularSurgery_unhealthy_edit">\u063A\u064A\u0631 \u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="vascularSurgery" id="vascularSurgery_other_edit" value="\u063A\u064A\u0631 \u0630\u0644\u0643" formControlName="vascularSurgery">\r
            <label class="form-check-label" for="vascularSurgery_other_edit">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
          </div>\r
        </div>\r
      </div>\r
      <div *ngIf="examForm.get('vascularSurgery')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="other-input-row">\r
        <input type="text" class="form-control" formControlName="vascularSurgeryOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
      </div>\r
\r
      <!-- \u062C\u0631\u0627\u062D\u0629 \u0635\u062F\u0631\u064A\u0629 -->\r
      <div class="medical-system-row">\r
        <div class="system-label">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u062F\u0631\u064A\u0629 <span class="text-danger">*</span></div>\r
        <div class="system-options">\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="thoracicSurgery" id="thoracicSurgery_healthy_edit" value="\u0633\u0644\u064A\u0645" formControlName="thoracicSurgery">\r
            <label class="form-check-label" for="thoracicSurgery_healthy_edit">\u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="thoracicSurgery" id="thoracicSurgery_unhealthy_edit" value="\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" formControlName="thoracicSurgery">\r
            <label class="form-check-label" for="thoracicSurgery_unhealthy_edit">\u063A\u064A\u0631 \u0633\u0644\u064A\u0645</label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="radio" name="thoracicSurgery" id="thoracicSurgery_other_edit" value="\u063A\u064A\u0631 \u0630\u0644\u0643" formControlName="thoracicSurgery">\r
            <label class="form-check-label" for="thoracicSurgery_other_edit">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
          </div>\r
        </div>\r
      </div>\r
      <div *ngIf="examForm.get('thoracicSurgery')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="other-input-row">\r
        <input type="text" class="form-control" formControlName="thoracicSurgeryOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
      </div>\r
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
        <button type="button" class="btn btn-secondary" (click)="onCancel()">\u0625\u0644\u063A\u0627\u0621</button>\r
        <button type="submit" class="btn btn-success" [disabled]="examForm.invalid || loading">\r
          <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
          \u062D\u0641\u0638\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/surgery-doctor.component/edit-surgical-exam/edit-surgical-exam.scss */
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
.dialog-card {
  background: #EDEBE0 !important;
  max-width: 800px !important;
}
.dialog-form {
  padding: 2rem;
}
.medical-system-row {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
}
.medical-system-row:hover {
  background-color: #f9fafb;
}
.medical-system-row .system-label {
  flex: 1;
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
  min-width: 250px;
}
.medical-system-row .system-options {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.medical-system-row .system-options .form-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}
.medical-system-row .system-options .form-check .form-check-input {
  margin: 0;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid #6b7280;
  cursor: pointer;
}
.medical-system-row .system-options .form-check .form-check-input:checked {
  background-color: #054239;
  border-color: #054239;
}
.medical-system-row .system-options .form-check .form-check-label {
  margin: 0;
  cursor: pointer;
  font-size: 1rem;
  color: #374151;
  font-weight: 500;
}
.other-input-row {
  padding: 0 1.5rem 1rem 1.5rem;
  background-color: #f9fafb;
}
.other-input-row .form-control {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}
.other-input-row .form-control:focus {
  border-color: #054239;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);
}
.result-section {
  padding: 1.5rem 1.5rem;
  background: #f9fafb;
  border-top: 2px solid #054239;
  border-bottom: 2px solid #054239;
  margin: 2rem 0 1rem 0;
}
.result-section .form-label {
  font-weight: 700;
  font-size: 1.125rem;
  color: #1f2937;
}
.result-section .form-select {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}
.result-section .form-select:focus {
  border-color: #054239;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);
}
.reason-section {
  padding: 1.5rem 1.5rem;
  margin-top: 1rem;
}
.reason-section .form-label {
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.75rem;
}
.reason-section .form-control {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}
.reason-section .form-control:focus {
  border-color: #054239;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);
}
.modal-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
/*# sourceMappingURL=edit-surgical-exam.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: SurgicalExamService }, { type: ToastrService }], { exam: [{
    type: Input
  }], dialogClosed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditSurgicalExam, { className: "EditSurgicalExam", filePath: "src/app/features/doctor/components/surgery-doctor.component/edit-surgical-exam/edit-surgical-exam.ts", lineNumber: 15 });
})();

// src/app/features/doctor/components/surgery-doctor.component/deferred-surgical-exams.component/deferred-surgical-exams.component.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
function DeferredSurgicalExamsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u0639\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0645\u0633\u0627\u0644\u0643");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u0623\u0648\u0631\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u0635\u062F\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function DeferredSurgicalExamsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 16)(17, "button", 17);
    \u0275\u0275listener("click", function DeferredSurgicalExamsComponent_ng_template_11_Template_button_click_17_listener() {
      const exam_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditDialog(exam_r3));
    });
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.applicantFileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.generalSurgery);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.urinarySurgery);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.vascularSurgery);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.thoracicSurgery);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.reason || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.getBadgeClass(exam_r3.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(exam_r3.result == null ? null : exam_r3.result.description);
  }
}
function DeferredSurgicalExamsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635 \u062C\u0631\u0627\u062D\u064A\u0629");
    \u0275\u0275elementEnd()();
  }
}
function DeferredSurgicalExamsComponent_app_edit_surgical_exam_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-surgical-exam", 20);
    \u0275\u0275listener("dialogClosed", function DeferredSurgicalExamsComponent_app_edit_surgical_exam_14_Template_app_edit_surgical_exam_dialogClosed_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDialogClose($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("exam", ctx_r3.selectedExam);
  }
}
var DeferredSurgicalExamsComponent = class _DeferredSurgicalExamsComponent {
  examService;
  toastr;
  exams = [];
  filteredExams = [];
  loading = true;
  selectedExam = null;
  searchTerm = "";
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  table;
  searchInput;
  constructor(examService, toastr) {
    this.examService = examService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.loadExams();
  }
  loadExams() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.examService.getAllSurgicalExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (data) => {
        this.exams = data.items;
        this.filteredExams = data.items;
        this.totalRecords = data.totalCount;
        this.loading = false;
      },
      error: (err) => {
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u064A\u0629");
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
  onEnterSearch() {
    this.page = 1;
    this.loadExams();
  }
  openEditDialog(exam) {
    this.selectedExam = __spreadValues({}, exam);
  }
  onDialogClose(updated) {
    this.selectedExam = null;
    if (updated)
      this.loadExams();
  }
  getBadgeClass(result) {
    if (!result || !result.description) {
      return "badge";
    }
    switch (result.description) {
      case "\u0645\u0642\u0628\u0648\u0644":
        return "badge bg-success";
      case "\u0645\u0631\u0641\u0648\u0636":
        return "badge bg-danger";
      case "\u0645\u0624\u062C\u0644":
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
  static \u0275fac = function DeferredSurgicalExamsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredSurgicalExamsComponent)(\u0275\u0275directiveInject(SurgicalExamService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeferredSurgicalExamsComponent, selectors: [["app-deferred-surgical-exams"]], viewQuery: function DeferredSurgicalExamsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, decls: 15, vars: 8, consts: [["searchInput", ""], ["table", ""], [1, "container"], [1, "table-toolbar", "my-2"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], ["responsiveLayout", "scroll", 1, "custom-table", 3, "value", "rows", "scrollable", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [3, "exam", "dialogClosed", 4, "ngIf"], [3, "ngClass"], [1, "text-center"], ["type", "button", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-pen-to-square"], ["colspan", "8", 1, "text-center"], [3, "dialogClosed", "exam"]], template: function DeferredSurgicalExamsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "app-reset-filters-button", 5);
      \u0275\u0275listener("reset", function DeferredSurgicalExamsComponent_Template_app_reset_filters_button_reset_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "input", 7, 0);
      \u0275\u0275listener("input", function DeferredSurgicalExamsComponent_Template_input_input_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p-table", 9, 1);
      \u0275\u0275template(10, DeferredSurgicalExamsComponent_ng_template_10_Template, 17, 0, "ng-template", 10)(11, DeferredSurgicalExamsComponent_ng_template_11_Template, 19, 8, "ng-template", 11)(12, DeferredSurgicalExamsComponent_ng_template_12_Template, 3, 0, "ng-template", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-paginator", 13);
      \u0275\u0275listener("pageChange", function DeferredSurgicalExamsComponent_Template_app_paginator_pageChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function DeferredSurgicalExamsComponent_Template_app_paginator_pageSizeChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, DeferredSurgicalExamsComponent_app_edit_surgical_exam_14_Template, 1, 1, "app-edit-surgical-exam", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.filteredExams)("rows", ctx.rowsPerPage)("scrollable", true)("showCurrentPageReport", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedExam);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ButtonModule, PrimeTemplate, EditSurgicalExam, FormsModule, TableModule, Table, PaginatorComponent, TooltipModule, Tooltip, ResetFiltersButtonComponent], styles: ["\n\n.container[_ngcontent-%COMP%], \n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  margin-left: auto;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n  pointer-events: none;\n}\n  .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n  direction: rtl;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n  .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.5rem 0.875rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n  .p-datatable .p-datatable-tbody .badge:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-success {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #988561 0%,\n      #B9A779 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #4A151E 0%,\n      #6B1F2A 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #3D3A3B 0%,\n      #616161 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n  .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n.highlight-blue[_ngcontent-%COMP%] {\n  background-color: var(--primary-dark) !important;\n  color: #fff !important;\n  padding: 0 2px !important;\n  border-radius: 3px !important;\n}\n.icon[_ngcontent-%COMP%] {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary-medium) !important;\n  transform: scale(1.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=deferred-surgical-exams.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredSurgicalExamsComponent, [{
    type: Component,
    args: [{ selector: "app-deferred-surgical-exams", standalone: true, imports: [CommonModule, ButtonModule, EditSurgicalExam, FormsModule, TableModule, PaginatorComponent, TooltipModule, ResetFiltersButtonComponent], template: `<div class=" container ">\r
\r
  <!-- \u0628\u062D\u062B -->\r
  <div class="table-toolbar my-2">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
      <div class="search-wrapper">\r
        <input #searchInput type="text" class="search-input" placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645"\r
          (input)="onFilterChange($event)" />\r
        <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
\r
  <!-- \u062C\u062F\u0648\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C (PrimeNG) -->\r
  <p-table #table [value]="filteredExams" [rows]="rowsPerPage" [scrollable]="true"\r
           [showCurrentPageReport]="true" responsiveLayout="scroll" class="custom-table">\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th>\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th>\u0639\u0627\u0645</th>\r
        <th>\u0645\u0633\u0627\u0644\u0643</th>\r
        <th>\u0623\u0648\u0631\u062F\u0629</th>\r
        <th>\u0635\u062F\u0631</th>\r
        <th>\u0627\u0644\u0633\u0628\u0628</th>\r
        <th>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="body" let-exam>\r
      <tr>\r
        <td>{{ exam.applicantFileNumber }}</td>\r
        <td>{{ exam.generalSurgery }}</td>\r
        <td>{{ exam.urinarySurgery }}</td>\r
        <td>{{ exam.vascularSurgery }}</td>\r
        <td>{{ exam.thoracicSurgery }}</td>\r
        <td>{{ exam.reason || '-' }}</td>\r
        <td>\r
          <span [ngClass]="getBadgeClass(exam.result)">{{ exam.result?.description }}</span>\r
        </td>\r
        <td class="text-center">\r
          <button \r
            type="button" \r
            class="btn-icon-action" \r
            pTooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635"\r
            tooltipPosition="top"\r
            (click)="openEditDialog(exam)">\r
            <i class="pi pi-pen-to-square"></i>\r
          </button>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="8" class="text-center">\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635 \u062C\u0631\u0627\u062D\u064A\u0629</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <app-paginator [totalRecords]="totalRecords" [pageSize]="rowsPerPage" [currentPage]="page"\r
                 (pageChange)="onPageChange($event)" (pageSizeChange)="onPageSizeChange($event)">\r
  </app-paginator>\r
\r
  <!-- \u0631\u0633\u0627\u0644\u0629 \u0639\u062F\u0645 \u0648\u062C\u0648\u062F \u0628\u064A\u0627\u0646\u0627\u062A -->\r
 \r
  <!-- \u0645\u0648\u062F\u0627\u0644 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 -->\r
  <app-edit-surgical-exam\r
    *ngIf="selectedExam"\r
    [exam]="selectedExam"\r
    (dialogClosed)="onDialogClose($event)">\r
  </app-edit-surgical-exam>\r
\r
</div>\r
`, styles: ["/* src/app/features/doctor/components/surgery-doctor.component/deferred-surgical-exams.component/deferred-surgical-exams.component.scss */\n.container,\n.user-header-section {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.search-wrapper {\n  position: relative;\n  width: 400px;\n  margin-left: auto;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n  pointer-events: none;\n}\n::ng-deep .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n  direction: rtl;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.5rem 0.875rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-success {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #988561 0%,\n      #B9A779 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #4A151E 0%,\n      #6B1F2A 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #3D3A3B 0%,\n      #616161 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n.highlight-blue {\n  background-color: var(--primary-dark) !important;\n  color: #fff !important;\n  padding: 0 2px !important;\n  border-radius: 3px !important;\n}\n.icon {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon:hover {\n  color: var(--primary-medium) !important;\n  transform: scale(1.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=deferred-surgical-exams.component.css.map */\n"] }]
  }], () => [{ type: SurgicalExamService }, { type: ToastrService }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeferredSurgicalExamsComponent, { className: "DeferredSurgicalExamsComponent", filePath: "src/app/features/doctor/components/surgery-doctor.component/deferred-surgical-exams.component/deferred-surgical-exams.component.ts", lineNumber: 21 });
})();
export {
  DeferredSurgicalExamsComponent
};
//# sourceMappingURL=chunk-WEJZHEJV.js.map
