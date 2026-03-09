import {
  OrthopedicExamService
} from "./chunk-R2N3C4MN.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/orthopedics-doctor.component/orthopedic-exam-form.component/orthopedic-exam-form.component.ts
function OrthopedicExamFormComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "input", 39);
    \u0275\u0275elementEnd();
  }
}
function OrthopedicExamFormComponent_div_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "input", 40);
    \u0275\u0275elementEnd();
  }
}
function OrthopedicExamFormComponent_div_0_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275property("value", r_r3.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.description);
  }
}
function OrthopedicExamFormComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getErrorMessage("resultID"), " ");
  }
}
function OrthopedicExamFormComponent_div_0_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function OrthopedicExamFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275listener("click", function OrthopedicExamFormComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h5", 4);
    \u0275\u0275text(4, "\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function OrthopedicExamFormComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function OrthopedicExamFormComponent_div_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
    \u0275\u0275text(11, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062D\u0631\u0643\u064A \u0648\u0627\u0644\u0647\u064A\u0643\u0644\u064A ");
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275elementStart(17, "label", 14);
    \u0275\u0275text(18, "\u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275element(20, "input", 15);
    \u0275\u0275elementStart(21, "label", 16);
    \u0275\u0275text(22, "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275element(24, "input", 17);
    \u0275\u0275elementStart(25, "label", 18);
    \u0275\u0275text(26, "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, OrthopedicExamFormComponent_div_0_div_27_Template, 2, 0, "div", 19);
    \u0275\u0275elementStart(28, "div", 8)(29, "div", 9);
    \u0275\u0275text(30, "\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0635\u0628\u064A\u0629 ");
    \u0275\u0275elementStart(31, "span", 10);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 11)(34, "div", 12);
    \u0275\u0275element(35, "input", 20);
    \u0275\u0275elementStart(36, "label", 21);
    \u0275\u0275text(37, "\u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 12);
    \u0275\u0275element(39, "input", 22);
    \u0275\u0275elementStart(40, "label", 23);
    \u0275\u0275text(41, "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 12);
    \u0275\u0275element(43, "input", 24);
    \u0275\u0275elementStart(44, "label", 25);
    \u0275\u0275text(45, "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(46, OrthopedicExamFormComponent_div_0_div_46_Template, 2, 0, "div", 19);
    \u0275\u0275elementStart(47, "div", 26)(48, "label", 27);
    \u0275\u0275text(49, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(50, "span", 10);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "select", 28);
    \u0275\u0275template(53, OrthopedicExamFormComponent_div_0_option_53_Template, 2, 2, "option", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, OrthopedicExamFormComponent_div_0_div_54_Template, 3, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 31)(56, "label", 32);
    \u0275\u0275text(57, "\u0627\u0644\u0633\u0628\u0628 (\u0625\u0646 \u0648\u062C\u062F)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "textarea", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 34)(60, "button", 35);
    \u0275\u0275listener("click", function OrthopedicExamFormComponent_div_0_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(61, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 36);
    \u0275\u0275template(63, OrthopedicExamFormComponent_div_0_span_63_Template, 1, 0, "span", 37);
    \u0275\u0275text(64, " \u062D\u0641\u0638 ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.examForm);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.examForm.get("musculoskeletal")) == null ? null : tmp_2_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.examForm.get("neurologicalSurgery")) == null ? null : tmp_3_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.examForm.get("resultID")) == null ? null : tmp_4_0.touched))("is-valid", ctx_r1.isFieldValid("resultID"));
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
var OrthopedicExamFormComponent = class _OrthopedicExamFormComponent {
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
  constructor(fb, examService, authService, toastr) {
    this.fb = fb;
    this.examService = examService;
    this.authService = authService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.examForm = this.fb.group({
      musculoskeletal: ["\u0633\u0644\u064A\u0645", Validators.required],
      musculoskeletalOther: [""],
      neurologicalSurgery: ["\u0633\u0644\u064A\u0645", Validators.required],
      neurologicalSurgeryOther: [""],
      resultID: [null, Validators.required],
      reason: [""]
    });
    this.examService.getResults().subscribe((res) => this.results = res.data?.items || res);
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
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  onSubmit() {
    if (this.examForm.invalid)
      return;
    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error("\u274C \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0628\u064A\u0628");
      return;
    }
    const formData = this.examForm.value;
    const exam = {
      applicantFileNumber: this.applicantFileNumber,
      doctorID,
      musculoskeletal: formData.musculoskeletal === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.musculoskeletalOther || "" : formData.musculoskeletal,
      neurologicalSurgery: formData.neurologicalSurgery === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.neurologicalSurgeryOther || "" : formData.neurologicalSurgery,
      resultID: Number(formData.resultID),
      reason: formData.reason || ""
    };
    this.loading = true;
    this.examService.addOrthopedicExam(exam).subscribe({
      next: () => {
        this.toastr.success("\u2705 \u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645 \u0628\u0646\u062C\u0627\u062D");
        this.examForm.reset();
        this.loading = false;
        this.closeModal();
        this.examAdded.emit();
      },
      error: (err) => {
        this.loading = false;
        if (err?.error) {
          this.toastr.error(JSON.stringify(err.error));
        } else {
          this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645");
        }
      }
    });
  }
  static \u0275fac = function OrthopedicExamFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrthopedicExamFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(OrthopedicExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrthopedicExamFormComponent, selectors: [["app-orthopedic-exam-form"]], inputs: { applicantFileNumber: "applicantFileNumber" }, outputs: { examAdded: "examAdded" }, decls: 1, vars: 1, consts: [["class", "modal-backdrop", 4, "ngIf"], [1, "modal-backdrop"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "medical-system-row"], [1, "system-label"], [1, "text-danger"], [1, "system-options"], [1, "form-check"], ["type", "radio", "name", "musculoskeletal", "id", "musculoskeletal_healthy", "value", "\u0633\u0644\u064A\u0645", "formControlName", "musculoskeletal", 1, "form-check-input"], ["for", "musculoskeletal_healthy", 1, "form-check-label"], ["type", "radio", "name", "musculoskeletal", "id", "musculoskeletal_unhealthy", "value", "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", "formControlName", "musculoskeletal", 1, "form-check-input"], ["for", "musculoskeletal_unhealthy", 1, "form-check-label"], ["type", "radio", "name", "musculoskeletal", "id", "musculoskeletal_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "musculoskeletal", 1, "form-check-input"], ["for", "musculoskeletal_other", 1, "form-check-label"], ["class", "other-input-row", 4, "ngIf"], ["type", "radio", "name", "neurologicalSurgery", "id", "neurologicalSurgery_healthy", "value", "\u0633\u0644\u064A\u0645", "formControlName", "neurologicalSurgery", 1, "form-check-input"], ["for", "neurologicalSurgery_healthy", 1, "form-check-label"], ["type", "radio", "name", "neurologicalSurgery", "id", "neurologicalSurgery_unhealthy", "value", "\u063A\u064A\u0631 \u0633\u0644\u064A\u0645", "formControlName", "neurologicalSurgery", 1, "form-check-input"], ["for", "neurologicalSurgery_unhealthy", 1, "form-check-label"], ["type", "radio", "name", "neurologicalSurgery", "id", "neurologicalSurgery_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "neurologicalSurgery", 1, "form-check-input"], ["for", "neurologicalSurgery_other", 1, "form-check-label"], [1, "result-section"], [1, "form-label", "mb-3"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "reason-section"], [1, "form-label"], ["formControlName", "reason", "rows", "3", "placeholder", "\u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0633\u0628\u0628 \u0625\u0646 \u0648\u062C\u062F", 1, "form-control"], [1, "modal-footer", "mt-4"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "other-input-row"], ["type", "text", "formControlName", "musculoskeletalOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "text", "formControlName", "neurologicalSurgeryOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], [3, "value"], [1, "invalid-feedback"], [1, "pi", "pi-exclamation-circle"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function OrthopedicExamFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrthopedicExamFormComponent_div_0_Template, 65, 11, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgForOf, NgIf], styles: [`@charset "UTF-8";



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
}
.modal-content[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  animation: _ngcontent-%COMP%_fadeIn 0.35s ease;
  border-top: 5px solid var(--primary-medium);
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  background: #f8f9fa;
  border-radius: 16px 16px 0 0;
}
.modal-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #054239 0%,
      #428177 100%) !important;
  border-bottom: 2px solid #B9A779 !important;
  border-radius: 16px 16px 0 0 !important;
  padding: 1.5rem 2rem !important;
}
.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: white !important;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.modal-body[_ngcontent-%COMP%] {
  padding: var(--spacing-xl);
  overflow-y: auto;
  max-height: calc(85vh - 100px);
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
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: var(--primary-medium) !important;
  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #054239 !important;
  border: 2px solid #054239 !important;
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #428177 !important;
  border-color: #428177 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.btn-secondary[_ngcontent-%COMP%] {
  background: #3D3A3B !important;
  border: 2px solid #3D3A3B !important;
  color: white !important;
  transition: all 0.3s ease;
}
.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #161616 !important;
  border-color: #161616 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.modal-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 16px 16px;
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
.modal-content[_ngcontent-%COMP%] {
  max-width: 800px !important;
}
.modal-body[_ngcontent-%COMP%] {
  max-height: calc(85vh - 150px) !important;
}
/*# sourceMappingURL=orthopedic-exam-form.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrthopedicExamFormComponent, [{
    type: Component,
    args: [{ selector: "app-orthopedic-exam-form", standalone: true, imports: [ReactiveFormsModule, CommonModule], template: `<!-- \u0627\u0644\u0645\u0648\u062F\u0627\u0644 -->\r
<div class="modal-backdrop" *ngIf="showModal">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    \r
    <!-- \u0627\u0644\u0647\u064A\u062F\u0631 -->\r
    <div class="modal-header">\r
      <h5 class="modal-title">\u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645</h5>\r
      <button type="button" class="btn-close" (click)="closeModal()">\xD7</button>\r
    </div>\r
\r
    <!-- \u0627\u0644\u0628\u0648\u062F\u064A -->\r
    <div class="modal-body">\r
      <form [formGroup]="examForm" (ngSubmit)="onSubmit()" novalidate>\r
        \r
        <!-- \u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062D\u0631\u0643\u064A \u0648\u0627\u0644\u0647\u064A\u0643\u0644\u064A -->\r
        <div class="medical-system-row">\r
          <div class="system-label">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062D\u0631\u0643\u064A \u0648\u0627\u0644\u0647\u064A\u0643\u0644\u064A <span class="text-danger">*</span></div>\r
          <div class="system-options">\r
            <div class="form-check">\r
              <input class="form-check-input" type="radio" name="musculoskeletal" id="musculoskeletal_healthy" value="\u0633\u0644\u064A\u0645" formControlName="musculoskeletal">\r
              <label class="form-check-label" for="musculoskeletal_healthy">\u0633\u0644\u064A\u0645</label>\r
            </div>\r
            <div class="form-check">\r
              <input class="form-check-input" type="radio" name="musculoskeletal" id="musculoskeletal_unhealthy" value="\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" formControlName="musculoskeletal">\r
              <label class="form-check-label" for="musculoskeletal_unhealthy">\u063A\u064A\u0631 \u0633\u0644\u064A\u0645</label>\r
            </div>\r
            <div class="form-check">\r
              <input class="form-check-input" type="radio" name="musculoskeletal" id="musculoskeletal_other" value="\u063A\u064A\u0631 \u0630\u0644\u0643" formControlName="musculoskeletal">\r
              <label class="form-check-label" for="musculoskeletal_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
            </div>\r
          </div>\r
        </div>\r
        <div *ngIf="examForm.get('musculoskeletal')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="other-input-row">\r
          <input type="text" class="form-control" formControlName="musculoskeletalOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
        </div>\r
\r
        <!-- \u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0635\u0628\u064A\u0629 -->\r
        <div class="medical-system-row">\r
          <div class="system-label">\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0635\u0628\u064A\u0629 <span class="text-danger">*</span></div>\r
          <div class="system-options">\r
            <div class="form-check">\r
              <input class="form-check-input" type="radio" name="neurologicalSurgery" id="neurologicalSurgery_healthy" value="\u0633\u0644\u064A\u0645" formControlName="neurologicalSurgery">\r
              <label class="form-check-label" for="neurologicalSurgery_healthy">\u0633\u0644\u064A\u0645</label>\r
            </div>\r
            <div class="form-check">\r
              <input class="form-check-input" type="radio" name="neurologicalSurgery" id="neurologicalSurgery_unhealthy" value="\u063A\u064A\u0631 \u0633\u0644\u064A\u0645" formControlName="neurologicalSurgery">\r
              <label class="form-check-label" for="neurologicalSurgery_unhealthy">\u063A\u064A\u0631 \u0633\u0644\u064A\u0645</label>\r
            </div>\r
            <div class="form-check">\r
              <input class="form-check-input" type="radio" name="neurologicalSurgery" id="neurologicalSurgery_other" value="\u063A\u064A\u0631 \u0630\u0644\u0643" formControlName="neurologicalSurgery">\r
              <label class="form-check-label" for="neurologicalSurgery_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
            </div>\r
          </div>\r
        </div>\r
        <div *ngIf="examForm.get('neurologicalSurgery')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="other-input-row">\r
          <input type="text" class="form-control" formControlName="neurologicalSurgeryOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644">\r
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
          <!-- <div class="valid-feedback" *ngIf="isFieldValid('resultID')">\r
            <i class="pi pi-check-circle"></i> \u0635\u062D\u064A\u062D\r
          </div> -->\r
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
`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/orthopedics-doctor.component/orthopedic-exam-form.component/orthopedic-exam-form.component.scss */
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
}
.modal-content {
  background: #fff;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  animation: fadeIn 0.35s ease;
  border-top: 5px solid var(--primary-medium);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  background: #f8f9fa;
  border-radius: 16px 16px 0 0;
}
.modal-header {
  background:
    linear-gradient(
      135deg,
      #054239 0%,
      #428177 100%) !important;
  border-bottom: 2px solid #B9A779 !important;
  border-radius: 16px 16px 0 0 !important;
  padding: 1.5rem 2rem !important;
}
.modal-header .modal-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: white !important;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.modal-body {
  padding: var(--spacing-xl);
  overflow-y: auto;
  max-height: calc(85vh - 100px);
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
.form-control:focus,
.form-select:focus {
  border-color: var(--primary-medium) !important;
  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1) !important;
}
.btn-primary {
  background: #054239 !important;
  border: 2px solid #054239 !important;
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-primary:hover:not(:disabled) {
  background: #428177 !important;
  border-color: #428177 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.btn-secondary {
  background: #3D3A3B !important;
  border: 2px solid #3D3A3B !important;
  color: white !important;
  transition: all 0.3s ease;
}
.btn-secondary:hover:not(:disabled) {
  background: #161616 !important;
  border-color: #161616 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.modal-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 16px 16px;
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
.modal-content {
  max-width: 800px !important;
}
.modal-body {
  max-height: calc(85vh - 150px) !important;
}
/*# sourceMappingURL=orthopedic-exam-form.component.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: OrthopedicExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], examAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrthopedicExamFormComponent, { className: "OrthopedicExamFormComponent", filePath: "src/app/features/doctor/components/orthopedics-doctor.component/orthopedic-exam-form.component/orthopedic-exam-form.component.ts", lineNumber: 16 });
})();

// src/app/features/doctor/components/orthopedics-doctor.component/orthopedics-doctor.component.ts
var _c0 = ["class", "component"];
function OrthopedicsDoctorComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function OrthopedicsDoctorComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addOrthopedicExam());
    });
    \u0275\u0275text(1, " \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645 ");
    \u0275\u0275elementEnd();
  }
}
function OrthopedicsDoctorComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function OrthopedicsDoctorComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addConsultation());
    });
    \u0275\u0275text(1, " \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function OrthopedicsDoctorComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function OrthopedicsDoctorComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addInvestigation());
    });
    \u0275\u0275text(1, " \u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644 ");
    \u0275\u0275elementEnd();
  }
}
function OrthopedicsDoctorComponent_app_orthopedic_exam_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-orthopedic-exam-form", 9);
    \u0275\u0275listener("examAdded", function OrthopedicsDoctorComponent_app_orthopedic_exam_form_7_Template_app_orthopedic_exam_form_examAdded_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOrthopedicExamAdded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r1.selectedApplicant.fileNumber);
  }
}
function OrthopedicsDoctorComponent_app_consultation_form_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-consultation-form", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r1.selectedApplicant.fileNumber);
  }
}
function OrthopedicsDoctorComponent_app_investigation_form_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-investigation-form", 10, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("applicantFileNumber", ctx_r1.selectedApplicant.fileNumber);
  }
}
var OrthopedicsDoctorComponent = class _OrthopedicsDoctorComponent {
  toastr;
  orthopedicService;
  selectedApplicant = null;
  hasOrthopedicExam = false;
  orthopedicForm;
  consultationForm;
  investigationForm;
  constructor(toastr, orthopedicService) {
    this.toastr = toastr;
    this.orthopedicService = orthopedicService;
  }
  onApplicantSelected(applicant) {
    this.selectedApplicant = applicant;
    if (applicant?.fileNumber) {
      this.orthopedicService.getByFileNumber(applicant.fileNumber).subscribe({
        next: (exam) => this.hasOrthopedicExam = !!exam,
        error: () => this.hasOrthopedicExam = false
      });
    }
  }
  addOrthopedicExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0631\u064A\u0636 \u0623\u0648\u0644\u0627\u064B");
      return;
    }
    this.orthopedicForm.openModal();
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
  onOrthopedicExamAdded() {
    this.hasOrthopedicExam = true;
  }
  static \u0275fac = function OrthopedicsDoctorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrthopedicsDoctorComponent)(\u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(OrthopedicExamService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrthopedicsDoctorComponent, selectors: [["app-orthopedics-doctor", 8, "component"]], viewQuery: function OrthopedicsDoctorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(OrthopedicExamFormComponent, 5);
      \u0275\u0275viewQuery(ConsultationFormComponent, 5);
      \u0275\u0275viewQuery(InvestigationForm, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.orthopedicForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.consultationForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.investigationForm = _t.first);
    }
  }, attrs: _c0, decls: 10, vars: 6, consts: [["investigationForm", ""], [1, "container", "mt-3"], [1, "mb-3"], [3, "applicantSelected"], [1, "button-group", "mb-3", "d-flex", "gap-2"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [3, "applicantFileNumber", "examAdded", 4, "ngIf"], [3, "applicantFileNumber", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], [3, "examAdded", "applicantFileNumber"], [3, "applicantFileNumber"]], template: function OrthopedicsDoctorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "app-search-applicant", 3);
      \u0275\u0275listener("applicantSelected", function OrthopedicsDoctorComponent_Template_app_search_applicant_applicantSelected_2_listener($event) {
        return ctx.onApplicantSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275template(4, OrthopedicsDoctorComponent_button_4_Template, 2, 0, "button", 5)(5, OrthopedicsDoctorComponent_button_5_Template, 2, 0, "button", 5)(6, OrthopedicsDoctorComponent_button_6_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, OrthopedicsDoctorComponent_app_orthopedic_exam_form_7_Template, 1, 1, "app-orthopedic-exam-form", 6)(8, OrthopedicsDoctorComponent_app_consultation_form_8_Template, 1, 1, "app-consultation-form", 7)(9, OrthopedicsDoctorComponent_app_investigation_form_9_Template, 2, 1, "app-investigation-form", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.hasOrthopedicExam && ctx.selectedApplicant);
      \u0275\u0275advance();
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
    SearchApplicantComponent,
    OrthopedicExamFormComponent,
    CommonModule,
    NgIf,
    ConsultationFormComponent,
    InvestigationForm
  ], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success[_ngcontent-%COMP%]:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=orthopedics-doctor.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrthopedicsDoctorComponent, [{
    type: Component,
    args: [{ selector: "app-orthopedics-doctor.component", standalone: true, imports: [
      SearchApplicantComponent,
      OrthopedicExamFormComponent,
      CommonModule,
      ConsultationFormComponent,
      InvestigationForm
    ], template: '<div class="container mt-3">\r\n  <!-- \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0631\u064A\u0636 -->\r\n  <div class="mb-3">\r\n    <app-search-applicant (applicantSelected)="onApplicantSelected($event)"></app-search-applicant>\r\n  </div>\r\n\r\n  <!-- \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 -->\r\n  <div class="button-group mb-3 d-flex gap-2">\r\n    <button \r\n      class="btn btn-outline-primary" \r\n      (click)="addOrthopedicExam()" \r\n      *ngIf="!hasOrthopedicExam && selectedApplicant">\r\n      \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645\r\n    </button>\r\n\r\n    <button \r\n      class="btn btn-outline-primary" \r\n      (click)="addConsultation()" \r\n      *ngIf="selectedApplicant">\r\n      \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629\r\n    </button>\r\n\r\n    <button \r\n      class="btn btn-outline-primary" \r\n      (click)="addInvestigation()" \r\n      *ngIf="selectedApplicant ">\r\n      \u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644\r\n    </button>\r\n  </div>\r\n\r\n  <!-- \u0645\u0648\u062F\u0627\u0644 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645 -->\r\n  <app-orthopedic-exam-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber"\r\n    (examAdded)="onOrthopedicExamAdded()">\r\n  </app-orthopedic-exam-form>\r\n\r\n  <!-- \u0645\u0648\u062F\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 -->\r\n  <app-consultation-form\r\n    *ngIf="selectedApplicant"\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-consultation-form>\r\n\r\n  <!-- \u0641\u0648\u0631\u0645 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 -->\r\n  <app-investigation-form\r\n    *ngIf="selectedApplicant"\r\n    #investigationForm\r\n    [applicantFileNumber]="selectedApplicant.fileNumber">\r\n  </app-investigation-form>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/orthopedics-doctor.component/orthopedics-doctor.component.scss */\n.container {\n  background: white;\n  border-radius: var(--border-radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  border: 1px solid #e9ecef;\n}\n.button-group {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\nbutton.btn-outline-primary {\n  background: transparent !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-dark) !important;\n}\nbutton.btn-outline-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%) !important;\n  color: white !important;\n  border-color: var(--primary-dark) !important;\n}\nbutton.btn-secondary {\n  background: transparent !important;\n  color: var(--neutral-dark) !important;\n  border: 2px solid var(--neutral-medium) !important;\n}\nbutton.btn-secondary:hover {\n  background: var(--neutral-light) !important;\n  color: var(--neutral-dark) !important;\n  border-color: var(--neutral-medium) !important;\n}\nbutton.btn-success {\n  background: transparent !important;\n  color: #28a745 !important;\n  border: 2px solid #28a745 !important;\n}\nbutton.btn-success:hover {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n.app-search-applicant {\n  width: 100%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=orthopedics-doctor.component.css.map */\n'] }]
  }], () => [{ type: ToastrService }, { type: OrthopedicExamService }], { orthopedicForm: [{
    type: ViewChild,
    args: [OrthopedicExamFormComponent]
  }], consultationForm: [{
    type: ViewChild,
    args: [ConsultationFormComponent]
  }], investigationForm: [{
    type: ViewChild,
    args: [InvestigationForm]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrthopedicsDoctorComponent, { className: "OrthopedicsDoctorComponent", filePath: "src/app/features/doctor/components/orthopedics-doctor.component/orthopedics-doctor.component.ts", lineNumber: 24 });
})();
export {
  OrthopedicsDoctorComponent
};
//# sourceMappingURL=chunk-XG2QFVYW.js.map
