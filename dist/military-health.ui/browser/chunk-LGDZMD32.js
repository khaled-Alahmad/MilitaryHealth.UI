import {
  NgbModal
} from "./chunk-ZUITLSD7.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/Investigations/edit-investigation/edit-investigation.ts
function EditInvestigation_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
var EditInvestigation = class _EditInvestigation {
  fb;
  service;
  authService;
  toastr;
  modalService;
  investigation;
  investigationUpdated = new EventEmitter();
  investigationForm;
  uploadedPath = null;
  previewUrl = null;
  loading = false;
  constructor(fb, service, authService, toastr, modalService) {
    this.fb = fb;
    this.service = service;
    this.authService = authService;
    this.toastr = toastr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.investigationForm = this.fb.group({
      type: [this.investigation.type],
      investigationReason: [this.investigation.investigationReason || ""],
      result: [this.investigation.result || ""],
      status: [this.investigation.result ? "\u0645\u0643\u062A\u0645\u0644" : "\u0645\u0624\u062C\u0644", Validators.required],
      attachment: [this.investigation.attachment || null]
    });
    if (this.investigation.attachment) {
      this.uploadedPath = this.investigation.attachment;
      this.previewUrl = this.uploadedPath;
    }
    this.investigationForm.get("result")?.valueChanges.subscribe((value) => {
      const statusControl = this.investigationForm.get("status");
      if (statusControl) {
        statusControl.setValue(value?.trim() ? "\u0645\u0643\u062A\u0645\u0644" : "\u0645\u0624\u062C\u0644", { emitEvent: false });
      }
    });
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
    if (!this.investigationForm.valid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const doctorID = Number(this.authService.getDoctorId());
    const updatedInv = __spreadProps(__spreadValues({}, this.investigation), {
      doctorID,
      applicantFileNumber: this.investigation.applicantFileNumber,
      type: this.investigationForm.value.type,
      investigationReason: this.investigationForm.value.investigationReason,
      result: this.investigationForm.value.result,
      status: this.investigationForm.value.status,
      attachment: this.uploadedPath ?? ""
    });
    this.loading = true;
    this.service.updateInvestigation(this.investigation.investigationID, updatedInv).subscribe({
      next: () => {
        this.toastr.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.loading = false;
        this.investigationUpdated.emit(true);
        this.cancel();
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u062F\u064A\u062B", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  cancel() {
    this.modalService.dismissAll();
  }
  static \u0275fac = function EditInvestigation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditInvestigation)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditInvestigation, selectors: [["app-edit-investigation"]], inputs: { investigation: "investigation" }, outputs: { investigationUpdated: "investigationUpdated" }, decls: 44, vars: 5, consts: [[1, "edit-dialog-root"], [1, "dialog-wrapper__header", "edit-dialog-header"], [1, "dialog-wrapper__icon", "pi", "pi-file-edit"], [1, "dialog-wrapper__title"], [1, "dialog-wrapper__subtitle"], ["type", "button", "aria-label", "\u0625\u063A\u0644\u0627\u0642", 1, "btn-close", "btn-close-dialog", 3, "click"], [1, "dialog-wrapper__content", "edit-dialog-body"], [1, "edit-dialog-form", 3, "ngSubmit", "formGroup"], ["type", "hidden", "formControlName", "type"], [1, "section-title"], [1, "row", "g-3", "mb-3"], [1, "col-12"], [1, "form-label", "mb-2"], ["formControlName", "investigationReason", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", 1, "form-control"], [1, "section-title", "mt-4"], ["formControlName", "result", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0646\u062A\u064A\u062C\u0629", 1, "form-control"], ["type", "text", "formControlName", "status", "readonly", "", 1, "form-control"], ["type", "file", 1, "form-control", 3, "change"], [1, "preview-container", "mt-3"], [1, "dialog-wrapper__footer", "dialog-actions", "edit-dialog-footer"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644", "icon", "pi pi-save", "severity", "primary", 3, "onClick", "disabled", "loading"], ["alt", "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642", 1, "img-fluid", "rounded", "preview-img", 3, "src"]], template: function EditInvestigation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "div")(4, "h3", 3);
      \u0275\u0275text(5, "\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0648\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621 \u0648\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function EditInvestigation_Template_button_click_8_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function EditInvestigation_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275elementStart(12, "h6", 9);
      \u0275\u0275text(13, "\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "label", 12);
      \u0275\u0275text(17, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "textarea", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "h6", 14);
      \u0275\u0275text(20, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "label", 12);
      \u0275\u0275text(24, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "textarea", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "h6", 14);
      \u0275\u0275text(27, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 10)(29, "div", 11)(30, "label", 12);
      \u0275\u0275text(31, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "h6", 14);
      \u0275\u0275text(34, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 10)(36, "div", 11)(37, "label", 12);
      \u0275\u0275text(38, "\u0645\u0644\u0641 \u0645\u0631\u0641\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 17);
      \u0275\u0275listener("change", function EditInvestigation_Template_input_change_39_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, EditInvestigation_Conditional_40_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 19)(42, "p-button", 20);
      \u0275\u0275listener("onClick", function EditInvestigation_Template_p_button_onClick_42_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p-button", 21);
      \u0275\u0275listener("onClick", function EditInvestigation_Template_p_button_onClick_43_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.investigationForm);
      \u0275\u0275advance(30);
      \u0275\u0275conditional(ctx.previewUrl && ctx.previewUrl.startsWith("data:") ? 40 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.investigationForm.invalid || ctx.loading)("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonModule, Button], styles: ['@charset "UTF-8";\n\n\n\n.edit-dialog-root[_ngcontent-%COMP%] {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.edit-dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-wrapper__icon[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  flex-shrink: 0;\n}\n.dialog-wrapper__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n}\n.dialog-wrapper__subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.btn-close-dialog[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.edit-dialog-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n  flex: 1;\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.edit-dialog-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.section-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  display: block;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #428177;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  cursor: default;\n}\n.preview-container[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.preview-img[_ngcontent-%COMP%] {\n  max-height: 200px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.edit-dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid #e9ecef;\n  background: #f8fafc;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  width: 100%;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=edit-investigation.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditInvestigation, [{
    type: Component,
    args: [{ selector: "app-edit-investigation", standalone: true, imports: [CommonModule, ReactiveFormsModule, ButtonModule], template: `<div class="edit-dialog-root">\r
  <div class="dialog-wrapper__header edit-dialog-header">\r
    <i class="dialog-wrapper__icon pi pi-file-edit"></i>\r
    <div>\r
      <h3 class="dialog-wrapper__title">\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621</h3>\r
      <p class="dialog-wrapper__subtitle">\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0648\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621 \u0648\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A</p>\r
    </div>\r
    <button type="button" class="btn-close btn-close-dialog" aria-label="\u0625\u063A\u0644\u0627\u0642" (click)="cancel()"></button>\r
  </div>\r
\r
  <div class="dialog-wrapper__content edit-dialog-body">\r
    <form [formGroup]="investigationForm" (ngSubmit)="onSubmit()" class="edit-dialog-form">\r
      <input type="hidden" formControlName="type" />\r
\r
      <h6 class="section-title">\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</h6>\r
      <div class="row g-3 mb-3">\r
        <div class="col-12">\r
          <label class="form-label mb-2">\u062A\u0641\u0627\u0635\u064A\u0644 \u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>\r
          <textarea\r
            class="form-control"\r
            formControlName="investigationReason"\r
            rows="3"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"></textarea>\r
        </div>\r
      </div>\r
\r
      <h6 class="section-title mt-4">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
      <div class="row g-3 mb-3">\r
        <div class="col-12">\r
          <label class="form-label mb-2">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</label>\r
          <textarea\r
            class="form-control"\r
            formControlName="result"\r
            rows="3"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0646\u062A\u064A\u062C\u0629"></textarea>\r
        </div>\r
      </div>\r
\r
      <h6 class="section-title mt-4">\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</h6>\r
      <div class="row g-3 mb-3">\r
        <div class="col-12">\r
          <label class="form-label mb-2">\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</label>\r
          <input type="text" class="form-control" formControlName="status" readonly />\r
        </div>\r
      </div>\r
\r
      <h6 class="section-title mt-4">\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642</h6>\r
      <div class="row g-3 mb-3">\r
        <div class="col-12">\r
          <label class="form-label mb-2">\u0645\u0644\u0641 \u0645\u0631\u0641\u0642</label>\r
          <input type="file" class="form-control" (change)="onFileSelected($event)" />\r
          @if (previewUrl && previewUrl.startsWith('data:')) {\r
            <div class="preview-container mt-3">\r
              <img [src]="previewUrl" alt="\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642" class="img-fluid rounded preview-img" />\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="dialog-wrapper__footer dialog-actions edit-dialog-footer">\r
    <p-button\r
      label="\u0625\u0644\u063A\u0627\u0621"\r
      icon="pi pi-times"\r
      severity="secondary"\r
      [outlined]="true"\r
      (onClick)="cancel()"></p-button>\r
    <p-button\r
      label="\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [disabled]="investigationForm.invalid || loading"\r
      [loading]="loading"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/Investigations/edit-investigation/edit-investigation.scss */\n.edit-dialog-root {\n  direction: rtl;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.edit-dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-wrapper__icon {\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  flex-shrink: 0;\n}\n.dialog-wrapper__title {\n  margin: 0;\n  color: var(--primary-dark);\n  font-size: var(--font-size-lg);\n  font-weight: 600;\n}\n.dialog-wrapper__subtitle {\n  margin: 0.25rem 0 0;\n  color: var(--neutral-medium);\n  font-size: var(--font-size-sm);\n}\n.btn-close-dialog {\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.edit-dialog-body {\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n  flex: 1;\n  color: var(--neutral-dark);\n  line-height: 1.6;\n}\n.edit-dialog-form {\n  direction: rtl;\n  overflow: visible;\n}\n.section-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.section-title:first-child {\n  margin-top: 0;\n}\n.form-label {\n  font-weight: 600;\n  color: #374151;\n  display: block;\n}\n.form-control {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #428177;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.1);\n}\ntextarea.form-control {\n  min-height: 80px;\n}\n.form-control[readonly] {\n  background-color: #f3f4f6;\n  cursor: default;\n}\n.preview-container {\n  margin-top: 0.75rem;\n}\n.preview-img {\n  max-height: 200px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.edit-dialog-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid #e9ecef;\n  background: #f8fafc;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-sm);\n  width: 100%;\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=edit-investigation.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: AuthService }, { type: ToastrService }, { type: NgbModal }], { investigation: [{
    type: Input
  }], investigationUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditInvestigation, { className: "EditInvestigation", filePath: "src/app/features/doctor/components/investigations/edit-investigation/edit-investigation.ts", lineNumber: 18 });
})();

export {
  EditInvestigation
};
//# sourceMappingURL=chunk-LGDZMD32.js.map
