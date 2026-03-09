import {
  Textarea,
  TextareaModule
} from "./chunk-2OSA6QLT.js";
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
  DialogWrapperComponent
} from "./chunk-MH7HOQ25.js";
import {
  InputText,
  InputTextModule
} from "./chunk-7K53XEFX.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OMFZJHBV.js";
import {
  CommonModule
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/Consultations/consultation-form.component/consultation-form.component.ts
function ConsultationFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
var ConsultationFormComponent = class _ConsultationFormComponent {
  fb;
  consultationService;
  authService;
  toastr;
  applicantFileNumber = "";
  showModal = false;
  // ✅ أضفنا @Input() هنا
  close = new EventEmitter();
  // لإرسال حدث الإغلاق للأب
  consultationForm;
  uploadedPath = null;
  previewUrl = null;
  loading = false;
  constructor(fb, consultationService, authService, toastr) {
    this.fb = fb;
    this.consultationService = consultationService;
    this.authService = authService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.consultationForm = this.fb.group({
      consultationType: ["", Validators.required],
      // referredDoctor: ['', Validators.required], // ❌ تم حذفه حسب التقرير
      referralReason: [""],
      // ✅ جديد - سبب الإحالة (اختياري)
      result: [null],
      attachment: [null]
    });
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.previewUrl = null;
    this.uploadedPath = null;
    this.close.emit();
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
      this.consultationService.uploadFile(file).subscribe({
        next: (path) => {
          this.uploadedPath = path;
          this.consultationForm.patchValue({ attachment: path });
          this.toastr.success("\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        },
        error: () => {
          this.toastr.error("\u0641\u0634\u0644 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641", "\u062E\u0637\u0623");
        }
      });
    }
  }
  onSubmit() {
    if (this.consultationForm.invalid || !this.applicantFileNumber) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644", "\u062A\u062D\u0630\u064A\u0631");
      return;
    }
    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error("\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0628\u064A\u0628", "\u062E\u0637\u0623");
      return;
    }
    const consultation = {
      doctorID,
      applicantFileNumber: this.applicantFileNumber,
      consultationType: this.consultationForm.value.consultationType,
      // referredDoctor: this.consultationForm.value.referredDoctor, // ❌ تم حذفه
      referralReason: this.consultationForm.value.referralReason,
      // ✅ جديد
      result: this.consultationForm.value.result,
      attachment: this.uploadedPath ?? ""
    };
    this.loading = true;
    this.consultationService.addConsultation(consultation).subscribe({
      next: () => {
        this.toastr.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.consultationForm.reset();
        this.previewUrl = null;
        this.uploadedPath = null;
        this.loading = false;
        this.closeModal();
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ConsultationFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsultationFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsultationFormComponent, selectors: [["app-consultation-form"]], inputs: { applicantFileNumber: "applicantFileNumber", showModal: "showModal" }, outputs: { close: "close" }, decls: 16, vars: 10, consts: [["title", "\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0637\u0628\u064A\u0629", "subtitle", "\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "icon", "pi pi-comments", "width", "40rem", 3, "visibleChange", "hide", "visible", "useDefaultFooter"], [1, "consultation-form", 3, "ngSubmit", "formGroup"], [1, "form-field"], [1, "required"], ["pInputText", "", "type", "text", "formControlName", "consultationType", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629"], [1, "error-message"], ["pTextarea", "", "formControlName", "referralReason", "placeholder", "\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", "rows", "4"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-save", "severity", "primary", 3, "onClick", "label", "loading", "disabled"]], template: function ConsultationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275twoWayListener("visibleChange", function ConsultationFormComponent_Template_app_dialog_wrapper_visibleChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showModal, $event) || (ctx.showModal = $event);
        return $event;
      });
      \u0275\u0275listener("hide", function ConsultationFormComponent_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function ConsultationFormComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "label");
      \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 ");
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275conditionalCreate(8, ConsultationFormComponent_Conditional_8_Template, 2, 0, "small", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2)(10, "label");
      \u0275\u0275text(11, "\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "textarea", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "p-button", 8);
      \u0275\u0275listener("onClick", function ConsultationFormComponent_Template_p_button_onClick_14_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-button", 9);
      \u0275\u0275listener("onClick", function ConsultationFormComponent_Template_p_button_onClick_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275twoWayProperty("visible", ctx.showModal);
      \u0275\u0275property("useDefaultFooter", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.consultationForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("p-invalid", ((tmp_3_0 = ctx.consultationForm.get("consultationType")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.consultationForm.get("consultationType")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.consultationForm.get("consultationType")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.consultationForm.get("consultationType")) == null ? null : tmp_4_0.touched) ? 8 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629")("loading", ctx.loading)("disabled", ctx.loading || ctx.consultationForm.invalid);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogWrapperComponent, ButtonModule, Button, InputTextModule, InputText, TextareaModule, Textarea], styles: ["\n\n.consultation-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n}\ninput[pInputText][_ngcontent-%COMP%], \ntextarea[pTextarea][_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=consultation-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsultationFormComponent, [{
    type: Component,
    args: [{ selector: "app-consultation-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, DialogWrapperComponent, ButtonModule, InputTextModule, TextareaModule], template: `<app-dialog-wrapper\r
  [(visible)]="showModal"\r
  title="\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0637\u0628\u064A\u0629"\r
  subtitle="\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"\r
  icon="pi pi-comments"\r
  width="40rem"\r
  [useDefaultFooter]="false"\r
  (hide)="closeModal()">\r
  <form [formGroup]="consultationForm" class="consultation-form" (ngSubmit)="onSubmit()">\r
    <div class="form-field">\r
      <label>\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 <span class="required">*</span></label>\r
      <input\r
        pInputText\r
        type="text"\r
        formControlName="consultationType"\r
        placeholder="\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629"\r
        [class.p-invalid]="consultationForm.get('consultationType')?.invalid && consultationForm.get('consultationType')?.touched" />\r
      @if (consultationForm.get('consultationType')?.invalid && consultationForm.get('consultationType')?.touched) {\r
        <small class="error-message">\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u0637\u0644\u0648\u0628</small>\r
      }\r
    </div>\r
\r
    <div class="form-field">\r
      <label>\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629</label>\r
      <textarea\r
        pTextarea\r
        formControlName="referralReason"\r
        placeholder="\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"\r
        rows="4"></textarea>\r
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
      [label]="loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629'"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [loading]="loading"\r
      [disabled]="loading || consultationForm.invalid"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</app-dialog-wrapper>`, styles: ["/* src/app/features/doctor/components/Consultations/consultation-form.component/consultation-form.component.scss */\n.consultation-form {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel {\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.required {\n  color: var(--status-danger);\n}\ninput[pInputText],\ntextarea[pTextarea] {\n  width: 100%;\n}\n.error-message {\n  color: var(--status-danger);\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=consultation-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], showModal: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsultationFormComponent, { className: "ConsultationFormComponent", filePath: "src/app/features/doctor/components/consultations/consultation-form.component/consultation-form.component.ts", lineNumber: 20 });
})();

// src/app/features/doctor/components/Investigations/investigation-form/investigation-form.ts
function InvestigationForm_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
var InvestigationForm = class _InvestigationForm {
  fb;
  service;
  authService;
  toastr;
  applicantFileNumber = "";
  showModal = false;
  // 🔹 مهم جدًا
  investigationToEdit;
  close = new EventEmitter();
  investigationForm;
  uploadedPath = null;
  loading = false;
  previewUrl = null;
  constructor(fb, service, authService, toastr) {
    this.fb = fb;
    this.service = service;
    this.authService = authService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.investigationForm = this.fb.group({
      type: [this.investigationToEdit?.type || "", Validators.required],
      investigationReason: [this.investigationToEdit?.investigationReason || ""],
      // ✅ جديد - سبب التحليل
      result: [null],
      attachment: [null],
      status: [null]
    });
    if (this.investigationToEdit?.attachment) {
      this.uploadedPath = this.investigationToEdit.attachment;
      this.previewUrl = this.uploadedPath;
    }
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = e.target.result;
      reader.readAsDataURL(file);
      this.service.uploadFile(file).subscribe({
        next: (path) => {
          this.uploadedPath = path;
          this.investigationForm.patchValue({ attachment: path });
          this.toastr.success("\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        },
        error: () => this.toastr.error("\u0641\u0634\u0644 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641", "\u062E\u0637\u0623")
      });
    }
  }
  onSubmit() {
    if (!this.applicantFileNumber || this.investigationForm.invalid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error("\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0628\u064A\u0628", "\u062E\u0637\u0623");
      return;
    }
    const investigation = __spreadProps(__spreadValues({}, this.investigationToEdit), {
      doctorID,
      applicantFileNumber: this.applicantFileNumber,
      type: this.investigationForm.value.type,
      investigationReason: this.investigationForm.value.investigationReason,
      // ✅ جديد
      result: this.investigationForm.value.result,
      status: this.investigationForm.value.status,
      attachment: this.uploadedPath ?? ""
    });
    const request$ = this.investigationToEdit ? this.service.updateInvestigation(this.investigationToEdit.investigationID, investigation) : this.service.addInvestigation(investigation);
    this.loading = true;
    request$.subscribe({
      next: () => {
        this.toastr.success(this.investigationToEdit ? "\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0628\u0646\u062C\u0627\u062D" : "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.investigationForm.reset();
        this.uploadedPath = null;
        this.previewUrl = null;
        this.loading = false;
        this.closeModal();
      },
      error: () => {
        this.loading = false;
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u0639\u0645\u0644\u064A\u0629", "\u062E\u0637\u0623");
      }
    });
  }
  static \u0275fac = function InvestigationForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvestigationForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvestigationForm, selectors: [["app-investigation-form"]], inputs: { applicantFileNumber: "applicantFileNumber", showModal: "showModal", investigationToEdit: "investigationToEdit" }, outputs: { close: "close" }, decls: 16, vars: 9, consts: [["title", "\u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644 \u0637\u0628\u064A", "subtitle", "\u0625\u062F\u062E\u0627\u0644 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0648\u0633\u0628\u0628 \u0627\u0644\u0637\u0644\u0628", "icon", "pi pi-file-search", "width", "40rem", 3, "visibleChange", "hide", "visible", "useDefaultFooter"], [1, "investigation-form", 3, "ngSubmit", "formGroup"], [1, "form-field"], [1, "required"], ["pInputText", "", "type", "text", "formControlName", "type", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644"], [1, "error-message"], ["pTextarea", "", "formControlName", "investigationReason", "placeholder", "\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", "rows", "4"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "\u062D\u0641\u0638 \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644", "icon", "pi pi-save", "severity", "primary", 3, "onClick", "loading", "disabled"]], template: function InvestigationForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275twoWayListener("visibleChange", function InvestigationForm_Template_app_dialog_wrapper_visibleChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showModal, $event) || (ctx.showModal = $event);
        return $event;
      });
      \u0275\u0275listener("hide", function InvestigationForm_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function InvestigationForm_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "label");
      \u0275\u0275text(4, "\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 ");
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275conditionalCreate(8, InvestigationForm_Conditional_8_Template, 2, 0, "small", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2)(10, "label");
      \u0275\u0275text(11, "\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "textarea", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "p-button", 8);
      \u0275\u0275listener("onClick", function InvestigationForm_Template_p_button_onClick_14_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-button", 9);
      \u0275\u0275listener("onClick", function InvestigationForm_Template_p_button_onClick_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275twoWayProperty("visible", ctx.showModal);
      \u0275\u0275property("useDefaultFooter", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.investigationForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("p-invalid", ((tmp_3_0 = ctx.investigationForm.get("type")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.investigationForm.get("type")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.investigationForm.get("type")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.investigationForm.get("type")) == null ? null : tmp_4_0.touched) ? 8 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.loading || ctx.investigationForm.invalid);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DialogWrapperComponent, ButtonModule, Button, InputTextModule, InputText, TextareaModule, Textarea], styles: ["\n\n.investigation-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n}\ninput[pInputText][_ngcontent-%COMP%], \ntextarea[pTextarea][_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=investigation-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvestigationForm, [{
    type: Component,
    args: [{ selector: "app-investigation-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, DialogWrapperComponent, ButtonModule, InputTextModule, TextareaModule], template: `<app-dialog-wrapper\r
  [(visible)]="showModal"\r
  title="\u0637\u0644\u0628 \u062A\u062D\u0644\u064A\u0644 \u0637\u0628\u064A"\r
  subtitle="\u0625\u062F\u062E\u0627\u0644 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0648\u0633\u0628\u0628 \u0627\u0644\u0637\u0644\u0628"\r
  icon="pi pi-file-search"\r
  width="40rem"\r
  [useDefaultFooter]="false"\r
  (hide)="closeModal()">\r
  <form [formGroup]="investigationForm" class="investigation-form" (ngSubmit)="onSubmit()">\r
    <div class="form-field">\r
      <label>\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 <span class="required">*</span></label>\r
      <input\r
        pInputText\r
        type="text"\r
        formControlName="type"\r
        placeholder="\u0623\u062F\u062E\u0644 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644"\r
        [class.p-invalid]="investigationForm.get('type')?.invalid && investigationForm.get('type')?.touched" />\r
      @if (investigationForm.get('type')?.invalid && investigationForm.get('type')?.touched) {\r
        <small class="error-message">\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0645\u0637\u0644\u0648\u0628</small>\r
      }\r
    </div>\r
\r
    <div class="form-field">\r
      <label>\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</label>\r
      <textarea\r
        pTextarea\r
        formControlName="investigationReason"\r
        placeholder="\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"\r
        rows="4"></textarea>\r
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
      label="\u062D\u0641\u0638 \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [loading]="loading"\r
      [disabled]="loading || investigationForm.invalid"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</app-dialog-wrapper>`, styles: ["/* src/app/features/doctor/components/Investigations/investigation-form/investigation-form.scss */\n.investigation-form {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel {\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.required {\n  color: var(--status-danger);\n}\ninput[pInputText],\ntextarea[pTextarea] {\n  width: 100%;\n}\n.error-message {\n  color: var(--status-danger);\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=investigation-form.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: AuthService }, { type: ToastrService }], { applicantFileNumber: [{
    type: Input
  }], showModal: [{
    type: Input
  }], investigationToEdit: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvestigationForm, { className: "InvestigationForm", filePath: "src/app/features/doctor/components/investigations/investigation-form/investigation-form.ts", lineNumber: 20 });
})();

export {
  ConsultationFormComponent,
  InvestigationForm
};
//# sourceMappingURL=chunk-WQO5OFZX.js.map
