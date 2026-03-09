import {
  EarClinicExamService
} from "./chunk-JD6L6IQM.js";
import {
  NgbActiveModal,
  NgbModal
} from "./chunk-ZUITLSD7.js";
import "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
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
  NgIf
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/ear-doctor.component/edit-ear-exam/edit-ear-exam.ts
var _forTrack0 = ($index, $item) => $item.resultID;
function EditEarExamComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "input", 112);
    \u0275\u0275elementEnd();
  }
}
function EditEarExamComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "input", 113);
    \u0275\u0275elementEnd();
  }
}
function EditEarExamComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "input", 114);
    \u0275\u0275elementEnd();
  }
}
function EditEarExamComponent_div_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "input", 115);
    \u0275\u0275elementEnd();
  }
}
function EditEarExamComponent_For_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function EditEarExamComponent_For_190_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectResonator(option_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ((tmp_10_0 = ctx_r2.examForm.get("resonators")) == null ? null : tmp_10_0.value) === option_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2, " ");
  }
}
function EditEarExamComponent_For_234_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    \u0275\u0275property("value", result_r4.resultID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r4.description);
  }
}
function EditEarExamComponent_Conditional_245_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 109);
  }
}
function EditEarExamComponent_Conditional_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 110);
  }
}
var EditEarExamComponent = class _EditEarExamComponent {
  fb;
  examService;
  toastr;
  activeModal;
  exam;
  earExamUpdated = new EventEmitter();
  dialogClosed = new EventEmitter();
  examForm;
  results = [];
  loading = false;
  // قيم الرنانات الشائعة - بأشكال أسهم
  resonatorOptions = [
    "\u2192",
    "\u2190",
    "=",
    "\u2192\u2192",
    "\u2190\u2190",
    "\u2191",
    "\u2193",
    "\u2192\u2191",
    "\u2190\u2191",
    "\u2192\u2193",
    "\u2190\u2193",
    "\u2194",
    "\u2197",
    "\u2196",
    "\u2198",
    "\u2199",
    "\u2713",
    "\u2717",
    "\u25CB",
    "\u25CF"
  ];
  currentResonatorIndex = 0;
  // خيارات الفم
  mouthOptions = ["\u0633\u0648\u064A", "\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642", "\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644", "\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A"];
  constructor(fb, examService, toastr, activeModal) {
    this.fb = fb;
    this.examService = examService;
    this.toastr = toastr;
    this.activeModal = activeModal;
  }
  ngOnInit() {
    this.loadResults();
    this.initForm();
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
      },
      error: (error) => {
        console.error("Error loading results:", error);
        this.results = [];
      }
    });
  }
  initForm() {
    const rightTympanicValue = this.exam.rightTympanicMembrane || "\u0633\u0644\u064A\u0645";
    const leftTympanicValue = this.exam.leftTympanicMembrane || "\u0633\u0644\u064A\u0645";
    const rightTympanicStatus = rightTympanicValue === "\u0633\u0644\u064A\u0645" ? "\u0633\u0644\u064A\u0645" : "\u063A\u064A\u0631 \u0630\u0644\u0643";
    const leftTympanicStatus = leftTympanicValue === "\u0633\u0644\u064A\u0645" ? "\u0633\u0644\u064A\u0645" : "\u063A\u064A\u0631 \u0630\u0644\u0643";
    const rightTympanicOther = rightTympanicValue !== "\u0633\u0644\u064A\u0645" ? rightTympanicValue : "";
    const leftTympanicOther = leftTympanicValue !== "\u0633\u0644\u064A\u0645" ? leftTympanicValue : "";
    const rightWhisperValue = this.exam.rightWhisperTest || "";
    const leftWhisperValue = this.exam.leftWhisperTest || "";
    const rightWhisperStatus = rightWhisperValue === "\u062C\u064A\u062F\u0629" ? "\u062C\u064A\u062F\u0629" : rightWhisperValue ? "\u063A\u064A\u0631 \u0630\u0644\u0643" : "";
    const leftWhisperStatus = leftWhisperValue === "\u062C\u064A\u062F\u0629" ? "\u062C\u064A\u062F\u0629" : leftWhisperValue ? "\u063A\u064A\u0631 \u0630\u0644\u0643" : "";
    const rightWhisperOther = rightWhisperStatus === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? rightWhisperValue : "";
    const leftWhisperOther = leftWhisperStatus === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? leftWhisperValue : "";
    const rightHugeMates = this.exam.isRightHugeMates ? "\u0628\u0633\u064A\u0637\u0629" : "\u0644\u0627 \u064A\u0648\u062C\u062F";
    const leftHugeMates = this.exam.isLeftHugeMates ? "\u0628\u0633\u064A\u0637\u0629" : "\u0644\u0627 \u064A\u0648\u062C\u062F";
    const rightString = this.exam.rightString || "\u0644\u0627 \u064A\u0648\u062C\u062F";
    const leftString = this.exam.leftString || "\u0644\u0627 \u064A\u0648\u062C\u062F";
    const resonatorsValue = this.exam.resonators || "";
    const resonatorIndex = this.resonatorOptions.indexOf(resonatorsValue);
    this.currentResonatorIndex = resonatorIndex !== -1 ? resonatorIndex : 0;
    const mouthValue = this.exam.mouth || "";
    this.examForm = this.fb.group({
      rightTympanicMembrane: [rightTympanicStatus, Validators.required],
      rightTympanicMembraneOther: [rightTympanicOther],
      leftTympanicMembrane: [leftTympanicStatus, Validators.required],
      leftTympanicMembraneOther: [leftTympanicOther],
      rightHearing: [this.exam.rightHearing || "", Validators.required],
      leftHearing: [this.exam.leftHearing || "", Validators.required],
      resonators: [resonatorsValue, Validators.required],
      rightWhisperTest: [rightWhisperStatus, Validators.required],
      rightWhisperTestOther: [rightWhisperOther],
      leftWhisperTest: [leftWhisperStatus, Validators.required],
      leftWhisperTestOther: [leftWhisperOther],
      rightHugeMates: [rightHugeMates],
      leftHugeMates: [leftHugeMates],
      rightString: [rightString],
      leftString: [leftString],
      mouth: [mouthValue],
      otherDiseases: [this.exam.otherDiseases || ""],
      resultID: [this.exam.resultID || "", Validators.required],
      reason: [this.exam.reason || ""]
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
  onSubmit() {
    if (this.examForm.invalid) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u062D\u0630\u064A\u0631");
      return;
    }
    this.loading = true;
    const formData = this.examForm.value;
    const rightTympanicMembrane = formData.rightTympanicMembrane === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.rightTympanicMembraneOther || "" : formData.rightTympanicMembrane;
    const leftTympanicMembrane = formData.leftTympanicMembrane === "\u063A\u064A\u0631 \u0630\u0644\u0643" ? formData.leftTympanicMembraneOther || "" : formData.leftTympanicMembrane;
    const updatedExam = __spreadProps(__spreadValues({}, this.exam), {
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
    });
    this.examService.updateEarClinicExam(this.exam.earClinicID, updatedExam).subscribe({
      next: (response) => {
        this.toastr.success("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635 \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.earExamUpdated.emit(true);
        this.activeModal.close();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error updating exam:", error);
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.activeModal.dismiss();
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
  }
  static \u0275fac = function EditEarExamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEarExamComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EarClinicExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbActiveModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEarExamComponent, selectors: [["app-edit-ear-exam"]], inputs: { exam: "exam" }, outputs: { earExamUpdated: "earExamUpdated", dialogClosed: "dialogClosed" }, decls: 248, vars: 14, consts: [[1, "professional-modal-container"], [1, "modal-header-professional"], [1, "header-content"], [1, "header-icon"], [1, "pi", "pi-pen-to-square"], [1, "header-text"], [1, "modal-title-professional"], ["type", "button", 1, "btn-close-professional", 3, "click"], [1, "pi", "pi-times"], [1, "modal-body-professional"], [3, "ngSubmit", "formGroup"], [1, "section-header"], [1, "pi", "pi-ear-silence"], [1, "form-row"], [1, "form-field"], [1, "pi", "pi-shield"], [1, "d-flex", "flex-wrap", "gap-3", "mb-2"], [1, "form-check"], ["type", "radio", "name", "rightTympanicMembrane", "id", "rightTympanicMembraneEdit_normal", "value", "\u0633\u0644\u064A\u0645", "formControlName", "rightTympanicMembrane", 1, "form-check-input"], ["for", "rightTympanicMembraneEdit_normal", 1, "form-check-label"], ["type", "radio", "name", "rightTympanicMembrane", "id", "rightTympanicMembraneEdit_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "rightTympanicMembrane", 1, "form-check-input"], ["for", "rightTympanicMembraneEdit_other", 1, "form-check-label"], ["class", "mt-2", 4, "ngIf"], ["type", "radio", "name", "leftTympanicMembrane", "id", "leftTympanicMembraneEdit_normal", "value", "\u0633\u0644\u064A\u0645", "formControlName", "leftTympanicMembrane", 1, "form-check-input"], ["for", "leftTympanicMembraneEdit_normal", 1, "form-check-label"], ["type", "radio", "name", "leftTympanicMembrane", "id", "leftTympanicMembraneEdit_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "leftTympanicMembrane", 1, "form-check-input"], ["for", "leftTympanicMembraneEdit_other", 1, "form-check-label"], [1, "pi", "pi-info-circle"], [1, "d-flex", "flex-wrap", "gap-3"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMatesEdit_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMatesEdit_none", 1, "form-check-label"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMatesEdit_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMatesEdit_simple", 1, "form-check-label"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMatesEdit_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMatesEdit_medium", 1, "form-check-label"], ["type", "radio", "name", "rightHugeMates", "id", "rightHugeMatesEdit_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "rightHugeMates", 1, "form-check-input"], ["for", "rightHugeMatesEdit_severe", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMatesEdit_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMatesEdit_none", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMatesEdit_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMatesEdit_simple", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMatesEdit_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMatesEdit_medium", 1, "form-check-label"], ["type", "radio", "name", "leftHugeMates", "id", "leftHugeMatesEdit_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "leftHugeMates", 1, "form-check-input"], ["for", "leftHugeMatesEdit_severe", 1, "form-check-label"], [1, "pi", "pi-angle-right"], ["type", "radio", "name", "rightString", "id", "rightStringEdit_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightStringEdit_none", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightStringEdit_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightStringEdit_simple", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightStringEdit_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightStringEdit_medium", 1, "form-check-label"], ["type", "radio", "name", "rightString", "id", "rightStringEdit_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "rightString", 1, "form-check-input"], ["for", "rightStringEdit_severe", 1, "form-check-label"], [1, "pi", "pi-angle-left"], ["type", "radio", "name", "leftString", "id", "leftStringEdit_none", "value", "\u0644\u0627 \u064A\u0648\u062C\u062F", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftStringEdit_none", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftStringEdit_simple", "value", "\u0628\u0633\u064A\u0637\u0629", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftStringEdit_simple", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftStringEdit_medium", "value", "\u0645\u062A\u0648\u0633\u0637\u0629", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftStringEdit_medium", 1, "form-check-label"], ["type", "radio", "name", "leftString", "id", "leftStringEdit_severe", "value", "\u0634\u062F\u064A\u062F\u0629", "formControlName", "leftString", 1, "form-check-input"], ["for", "leftStringEdit_severe", 1, "form-check-label"], [1, "pi", "pi-volume-up"], [1, "pi", "pi-hear"], ["type", "text", "formControlName", "rightHearing", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u0623\u064A\u0645\u0646", 1, "form-control"], ["type", "text", "formControlName", "leftHearing", "placeholder", "\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u0623\u064A\u0633\u0631", 1, "form-control"], [1, "pi", "pi-comment"], ["type", "radio", "name", "rightWhisperTest", "id", "rightWhisperTestEdit_good", "value", "\u062C\u064A\u062F\u0629", "formControlName", "rightWhisperTest", 1, "form-check-input"], ["for", "rightWhisperTestEdit_good", 1, "form-check-label"], ["type", "radio", "name", "rightWhisperTest", "id", "rightWhisperTestEdit_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "rightWhisperTest", 1, "form-check-input"], ["for", "rightWhisperTestEdit_other", 1, "form-check-label"], ["type", "radio", "name", "leftWhisperTest", "id", "leftWhisperTestEdit_good", "value", "\u062C\u064A\u062F\u0629", "formControlName", "leftWhisperTest", 1, "form-check-input"], ["for", "leftWhisperTestEdit_good", 1, "form-check-label"], ["type", "radio", "name", "leftWhisperTest", "id", "leftWhisperTestEdit_other", "value", "\u063A\u064A\u0631 \u0630\u0644\u0643", "formControlName", "leftWhisperTest", 1, "form-check-input"], ["for", "leftWhisperTestEdit_other", 1, "form-check-label"], [1, "pi", "pi-megaphone"], [1, "resonator-selector"], [1, "input-group"], ["type", "button", "title", "\u0627\u0644\u0633\u0627\u0628\u0642", 1, "btn", "btn-outline-secondary", "resonator-nav-btn", 3, "click"], [1, "pi", "pi-chevron-right"], ["type", "text", "formControlName", "resonators", "readonly", "", 1, "form-control", "text-center", "resonator-input", 3, "value"], ["type", "button", "title", "\u0627\u0644\u062A\u0627\u0644\u064A", 1, "btn", "btn-outline-secondary", "resonator-nav-btn", 3, "click"], [1, "pi", "pi-chevron-left"], [1, "resonator-options", "mt-2"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "resonator-option-btn", 3, "active"], [1, "pi", "pi-briefcase"], [1, "ms-3"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "mouthNormalEdit", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthNormalEdit", 1, "form-check-label"], ["type", "checkbox", "id", "mouthMalocclusionEdit", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthMalocclusionEdit", 1, "form-check-label"], ["type", "checkbox", "id", "mouthClickEdit", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthClickEdit", 1, "form-check-label"], ["type", "checkbox", "id", "mouthSubluxationEdit", 1, "form-check-input", 3, "change", "checked"], ["for", "mouthSubluxationEdit", 1, "form-check-label"], ["formControlName", "otherDiseases", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0623\u064A \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649", 1, "form-control"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-flag"], ["formControlName", "resultID", 1, "form-select"], [3, "value"], [1, "pi", "pi-file-edit"], ["formControlName", "reason", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0633\u0628\u0628 \u0625\u0630\u0627 \u0644\u0632\u0645 \u0627\u0644\u0623\u0645\u0631", 1, "form-control"], [1, "modal-footer-professional"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "pi", "pi-times", "me-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "pi", "pi-save", "me-2"], [1, "mt-2"], ["type", "text", "formControlName", "rightTympanicMembraneOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)", 1, "form-control"], ["type", "text", "formControlName", "leftTympanicMembraneOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)", 1, "form-control"], ["type", "text", "formControlName", "rightWhisperTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)", 1, "form-control"], ["type", "text", "formControlName", "leftWhisperTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)", 1, "form-control"], ["type", "button", 1, "btn", "btn-sm", "resonator-option-btn", 3, "click"]], template: function EditEarExamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h3", 6);
      \u0275\u0275text(7, "\u062A\u0639\u062F\u064A\u0644 \u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function EditEarExamComponent_Template_button_click_8_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "form", 10);
      \u0275\u0275listener("ngSubmit", function EditEarExamComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275element(13, "i", 12);
      \u0275\u0275elementStart(14, "h4");
      \u0275\u0275text(15, "\u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646\u064A\u0646");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "label");
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275text(20, " \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 16)(22, "div", 17);
      \u0275\u0275element(23, "input", 18);
      \u0275\u0275elementStart(24, "label", 19);
      \u0275\u0275text(25, "\u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275element(27, "input", 20);
      \u0275\u0275elementStart(28, "label", 21);
      \u0275\u0275text(29, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, EditEarExamComponent_div_30_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "label");
      \u0275\u0275element(33, "i", 15);
      \u0275\u0275text(34, " \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 16)(36, "div", 17);
      \u0275\u0275element(37, "input", 23);
      \u0275\u0275elementStart(38, "label", 24);
      \u0275\u0275text(39, "\u0633\u0644\u064A\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 17);
      \u0275\u0275element(41, "input", 25);
      \u0275\u0275elementStart(42, "label", 26);
      \u0275\u0275text(43, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(44, EditEarExamComponent_div_44_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 13)(46, "div", 14)(47, "label");
      \u0275\u0275element(48, "i", 27);
      \u0275\u0275text(49, " \u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0645\u064A\u0646) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 28)(51, "div", 17);
      \u0275\u0275element(52, "input", 29);
      \u0275\u0275elementStart(53, "label", 30);
      \u0275\u0275text(54, "\u0644\u0627 \u064A\u0648\u062C\u062F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 17);
      \u0275\u0275element(56, "input", 31);
      \u0275\u0275elementStart(57, "label", 32);
      \u0275\u0275text(58, "\u0628\u0633\u064A\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 17);
      \u0275\u0275element(60, "input", 33);
      \u0275\u0275elementStart(61, "label", 34);
      \u0275\u0275text(62, "\u0645\u062A\u0648\u0633\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 17);
      \u0275\u0275element(64, "input", 35);
      \u0275\u0275elementStart(65, "label", 36);
      \u0275\u0275text(66, "\u0634\u062F\u064A\u062F\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 14)(68, "label");
      \u0275\u0275element(69, "i", 27);
      \u0275\u0275text(70, " \u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0633\u0627\u0631) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 28)(72, "div", 17);
      \u0275\u0275element(73, "input", 37);
      \u0275\u0275elementStart(74, "label", 38);
      \u0275\u0275text(75, "\u0644\u0627 \u064A\u0648\u062C\u062F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 17);
      \u0275\u0275element(77, "input", 39);
      \u0275\u0275elementStart(78, "label", 40);
      \u0275\u0275text(79, "\u0628\u0633\u064A\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 17);
      \u0275\u0275element(81, "input", 41);
      \u0275\u0275elementStart(82, "label", 42);
      \u0275\u0275text(83, "\u0645\u062A\u0648\u0633\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 17);
      \u0275\u0275element(85, "input", 43);
      \u0275\u0275elementStart(86, "label", 44);
      \u0275\u0275text(87, "\u0634\u062F\u064A\u062F\u0629");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(88, "div", 13)(89, "div", 14)(90, "label");
      \u0275\u0275element(91, "i", 45);
      \u0275\u0275text(92, " \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 28)(94, "div", 17);
      \u0275\u0275element(95, "input", 46);
      \u0275\u0275elementStart(96, "label", 47);
      \u0275\u0275text(97, "\u0644\u0627 \u064A\u0648\u062C\u062F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 17);
      \u0275\u0275element(99, "input", 48);
      \u0275\u0275elementStart(100, "label", 49);
      \u0275\u0275text(101, "\u0628\u0633\u064A\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 17);
      \u0275\u0275element(103, "input", 50);
      \u0275\u0275elementStart(104, "label", 51);
      \u0275\u0275text(105, "\u0645\u062A\u0648\u0633\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 17);
      \u0275\u0275element(107, "input", 52);
      \u0275\u0275elementStart(108, "label", 53);
      \u0275\u0275text(109, "\u0634\u062F\u064A\u062F\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(110, "div", 14)(111, "label");
      \u0275\u0275element(112, "i", 54);
      \u0275\u0275text(113, " \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 28)(115, "div", 17);
      \u0275\u0275element(116, "input", 55);
      \u0275\u0275elementStart(117, "label", 56);
      \u0275\u0275text(118, "\u0644\u0627 \u064A\u0648\u062C\u062F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 17);
      \u0275\u0275element(120, "input", 57);
      \u0275\u0275elementStart(121, "label", 58);
      \u0275\u0275text(122, "\u0628\u0633\u064A\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 17);
      \u0275\u0275element(124, "input", 59);
      \u0275\u0275elementStart(125, "label", 60);
      \u0275\u0275text(126, "\u0645\u062A\u0648\u0633\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 17);
      \u0275\u0275element(128, "input", 61);
      \u0275\u0275elementStart(129, "label", 62);
      \u0275\u0275text(130, "\u0634\u062F\u064A\u062F\u0629");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(131, "div", 11);
      \u0275\u0275element(132, "i", 63);
      \u0275\u0275elementStart(133, "h4");
      \u0275\u0275text(134, "\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0645\u0639");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 13)(136, "div", 14)(137, "label");
      \u0275\u0275element(138, "i", 64);
      \u0275\u0275text(139, " \u0627\u0644\u0633\u0645\u0639 (\u064A\u0645\u064A\u0646) R ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 14)(142, "label");
      \u0275\u0275element(143, "i", 64);
      \u0275\u0275text(144, " \u0627\u0644\u0633\u0645\u0639 (\u064A\u0633\u0627\u0631) W ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(145, "input", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 13)(147, "div", 14)(148, "label");
      \u0275\u0275element(149, "i", 67);
      \u0275\u0275text(150, " \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 16)(152, "div", 17);
      \u0275\u0275element(153, "input", 68);
      \u0275\u0275elementStart(154, "label", 69);
      \u0275\u0275text(155, "\u062C\u064A\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 17);
      \u0275\u0275element(157, "input", 70);
      \u0275\u0275elementStart(158, "label", 71);
      \u0275\u0275text(159, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(160, EditEarExamComponent_div_160_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 14)(162, "label");
      \u0275\u0275element(163, "i", 67);
      \u0275\u0275text(164, " \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 16)(166, "div", 17);
      \u0275\u0275element(167, "input", 72);
      \u0275\u0275elementStart(168, "label", 73);
      \u0275\u0275text(169, "\u062C\u064A\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 17);
      \u0275\u0275element(171, "input", 74);
      \u0275\u0275elementStart(172, "label", 75);
      \u0275\u0275text(173, "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(174, EditEarExamComponent_div_174_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 13)(176, "div", 14)(177, "label");
      \u0275\u0275element(178, "i", 76);
      \u0275\u0275text(179, " \u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 77)(181, "div", 78)(182, "button", 79);
      \u0275\u0275listener("click", function EditEarExamComponent_Template_button_click_182_listener() {
        return ctx.navigateResonator("prev");
      });
      \u0275\u0275element(183, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(184, "input", 81);
      \u0275\u0275elementStart(185, "button", 82);
      \u0275\u0275listener("click", function EditEarExamComponent_Template_button_click_185_listener() {
        return ctx.navigateResonator("next");
      });
      \u0275\u0275element(186, "i", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 84)(188, "div", 85);
      \u0275\u0275repeaterCreate(189, EditEarExamComponent_For_190_Template, 2, 3, "button", 86, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(191, "div", 11);
      \u0275\u0275element(192, "i", 87);
      \u0275\u0275elementStart(193, "h4");
      \u0275\u0275text(194, "\u0627\u0644\u0641\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 13)(196, "div", 14)(197, "label");
      \u0275\u0275element(198, "i", 87);
      \u0275\u0275text(199, " \u0627\u0644\u0641\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 88)(201, "div", 89)(202, "input", 90);
      \u0275\u0275listener("change", function EditEarExamComponent_Template_input_change_202_listener($event) {
        return ctx.toggleMouthOption("\u0633\u0648\u064A", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "label", 91);
      \u0275\u0275text(204, "\u0633\u0648\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 89)(206, "input", 92);
      \u0275\u0275listener("change", function EditEarExamComponent_Template_input_change_206_listener($event) {
        return ctx.toggleMouthOption("\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "label", 93);
      \u0275\u0275text(208, "\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "div", 89)(210, "input", 94);
      \u0275\u0275listener("change", function EditEarExamComponent_Template_input_change_210_listener($event) {
        return ctx.toggleMouthOption("\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "label", 95);
      \u0275\u0275text(212, "\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 89)(214, "input", 96);
      \u0275\u0275listener("change", function EditEarExamComponent_Template_input_change_214_listener($event) {
        return ctx.toggleMouthOption("\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "label", 97);
      \u0275\u0275text(216, "\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(217, "div", 13)(218, "div", 14)(219, "label");
      \u0275\u0275element(220, "i", 27);
      \u0275\u0275text(221, " \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(222, "textarea", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "div", 11);
      \u0275\u0275element(224, "i", 99);
      \u0275\u0275elementStart(225, "h4");
      \u0275\u0275text(226, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 13)(228, "div", 14)(229, "label");
      \u0275\u0275element(230, "i", 100);
      \u0275\u0275text(231, " \u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "select", 101);
      \u0275\u0275repeaterCreate(233, EditEarExamComponent_For_234_Template, 2, 2, "option", 102, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "div", 14)(236, "label");
      \u0275\u0275element(237, "i", 103);
      \u0275\u0275text(238, " \u0627\u0644\u0633\u0628\u0628 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(239, "textarea", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(240, "div", 105)(241, "button", 106);
      \u0275\u0275listener("click", function EditEarExamComponent_Template_button_click_241_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275element(242, "i", 107);
      \u0275\u0275text(243, " \u0625\u0644\u063A\u0627\u0621 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "button", 108);
      \u0275\u0275listener("click", function EditEarExamComponent_Template_button_click_244_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(245, EditEarExamComponent_Conditional_245_Template, 1, 0, "span", 109);
      \u0275\u0275conditionalCreate(246, EditEarExamComponent_Conditional_246_Template, 1, 0, "i", 110);
      \u0275\u0275text(247);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.examForm.get("rightTympanicMembrane")) == null ? null : tmp_1_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.examForm.get("leftTympanicMembrane")) == null ? null : tmp_2_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(116);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.examForm.get("rightWhisperTest")) == null ? null : tmp_3_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.examForm.get("leftWhisperTest")) == null ? null : tmp_4_0.value) === "\u063A\u064A\u0631 \u0630\u0644\u0643");
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ((tmp_5_0 = ctx.examForm.get("resonators")) == null ? null : tmp_5_0.value) || "");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.resonatorOptions);
      \u0275\u0275advance(13);
      \u0275\u0275property("checked", ctx.isMouthOptionSelected("\u0633\u0648\u064A"));
      \u0275\u0275advance(4);
      \u0275\u0275property("checked", ctx.isMouthOptionSelected("\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642"));
      \u0275\u0275advance(4);
      \u0275\u0275property("checked", ctx.isMouthOptionSelected("\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644"));
      \u0275\u0275advance(4);
      \u0275\u0275property("checked", ctx.isMouthOptionSelected("\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A"));
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.results);
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.loading || ctx.examForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 245 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 246 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonModule], styles: [`@charset "UTF-8";



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
.professional-modal-container[_ngcontent-%COMP%] {
  background: #EDEBE0;
  border-radius: 16px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}
.modal-header-professional[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #054239 0%,
      #428177 100%);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 2px solid #B9A779;
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem;
  font-size: 1.5rem;
  color: white;
}
.modal-header-professional[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
.modal-header-professional[_ngcontent-%COMP%]   .btn-close-professional[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.modal-body-professional[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem;
  background: #EDEBE0;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 8px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 4px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #B9A779;
  border-radius: 4px;
}
.modal-body-professional[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #988561;
}
.section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.75rem;
  padding-bottom: 0.875rem;
  border-bottom: 2px solid #e9ecef;
  margin-top: 2.5rem;
}
.section-header[_ngcontent-%COMP%]:first-child {
  margin-top: 0;
}
.section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #054239;
  font-size: 1.5rem;
}
.section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #054239;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}
.form-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 600;
  color: #161616;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #054239;
  font-size: 1.1rem;
}
.form-field[_ngcontent-%COMP%]   label.checkbox-label[_ngcontent-%COMP%] {
  flex-direction: row;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
.form-field[_ngcontent-%COMP%]   label.checkbox-label[_ngcontent-%COMP%]:hover {
  border-color: #B9A779;
}
.form-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
.form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0.875rem 1.125rem;
  font-family:
    "Cairo",
    "Segoe UI",
    sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #161616;
  min-height: 48px;
  display: flex;
  align-items: center;
}
.form-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, 
.form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #054239;
  box-shadow: 0 0 0 4px rgba(5, 66, 57, 0.1);
}
.form-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder, 
.form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder {
  color: #3D3A3B;
  opacity: 0.6;
}
.form-field[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 100px;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  line-height: 1.5;
}
.form-field[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem !important;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.form-field[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.form-field[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin-right: 0;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  width: 1.15rem;
  height: 1.15rem;
  border: 2px solid #3D3A3B;
  border-radius: 4px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.form-field[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {
  background-color: #054239;
  border-color: #054239;
}
.form-field[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked::before {
  content: "\\2713";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 0.75rem;
}
.form-field[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:hover {
  border-color: #054239;
  transform: scale(1.05);
}
.form-field[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #161616;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin: 0;
  padding: 0;
}
.form-field[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {
  margin: 0 0.25rem 0 0 !important;
  width: 1.1rem !important;
  height: 1.1rem !important;
  cursor: pointer;
  border: 2px solid #3D3A3B;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.form-field[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:hover {
  border-color: #054239;
  transform: scale(1.05);
}
.form-field[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked {
  background-color: #054239;
  border-color: #054239;
}
.form-field[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.5rem !important;
  flex-wrap: wrap;
}
.form-field[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {
  margin: 0.5rem 0;
  padding: 0.5rem 0.75rem;
  background: white;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  gap: 0.5rem !important;
}
.form-field[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:hover {
  border-color: #054239;
  background: #f8f9fa;
}
.form-field[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%] {
  color: #054239;
  font-weight: 600;
}
.form-field[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin: 0 !important;
}
.form-field[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin: 0 !important;
  padding: 0 !important;
}
.modal-footer-professional[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  min-width: 150px;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
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
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
  background-color: #054239;
  border-color: #054239;
  color: white;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #428177;
  border-color: #428177;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
  background-color: #3D3A3B;
  border-color: #3D3A3B;
  color: white;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #161616;
  border-color: #161616;
}
@media (max-width: 768px) {
  .modal-header-professional[_ngcontent-%COMP%] {
    padding: 1rem 1.5rem;
  }
  .modal-header-professional[_ngcontent-%COMP%]   .modal-title-professional[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }
  .modal-body-professional[_ngcontent-%COMP%] {
    padding: 1.75rem;
  }
  .section-header[_ngcontent-%COMP%] {
    margin-top: 2rem;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
  }
  .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
    font-size: 1.125rem;
  }
  .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }
  .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
  .form-field[_ngcontent-%COMP%] {
    gap: 0.625rem;
  }
  .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
    margin-bottom: 0.5rem;
  }
  .modal-footer-professional[_ngcontent-%COMP%] {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
  .modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
    min-width: 100%;
  }
}
.spinner-border-sm[_ngcontent-%COMP%] {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: -0.125em;
  border: 0.15em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spinner-border 0.75s linear infinite;
}
.spinner-border-sm.me-2[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}
@keyframes _ngcontent-%COMP%_spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.invalid-feedback[_ngcontent-%COMP%] {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
}
.invalid-feedback[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  margin-left: 0.25rem;
}
.form-control.is-valid[_ngcontent-%COMP%], 
.form-select.is-valid[_ngcontent-%COMP%] {
  border-color: #28a745 !important;
}
.form-control.is-valid[_ngcontent-%COMP%]:focus, 
.form-select.is-valid[_ngcontent-%COMP%]:focus {
  border-color: #28a745 !important;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;
}
.me-2[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}
.form-check[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem !important;
  display: flex;
  align-items: center;
  gap: 0.5rem !important;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
}
.form-check[_ngcontent-%COMP%]:hover {
  background-color: rgba(66, 129, 119, 0.05);
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin: 0 !important;
  width: 1.25rem !important;
  height: 1.25rem !important;
  border: 2px solid var(--primary-medium) !important;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
  background-color: white;
  position: relative;
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:hover {
  border-color: var(--primary-dark) !important;
  transform: scale(1.1);
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {
  background-color: var(--primary-dark) !important;
  border-color: var(--primary-dark) !important;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.2);
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked::after {
  background-color: white;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  transform: scale(1);
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {
  border-color: var(--primary-dark) !important;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.15) !important;
  outline: none;
}
.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
  font-weight: 500;
  font-size: var(--font-size-base);
  color: var(--neutral-dark);
  flex: 0 0 auto;
  -webkit-user-select: none;
  user-select: none;
  transition: color 0.2s ease;
}
.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]:hover {
  color: var(--primary-dark);
}
.form-check[_ngcontent-%COMP%]:has(.form-check-input:checked) {
  background-color: rgba(5, 66, 57, 0.08);
}
.form-check[_ngcontent-%COMP%]:has(.form-check-input:checked)   .form-check-label[_ngcontent-%COMP%] {
  color: var(--primary-dark);
  font-weight: 600;
}
.d-flex.gap-3[_ngcontent-%COMP%] {
  gap: 0.75rem !important;
}
.d-flex.gap-3[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {
  gap: 0.5rem !important;
  margin-bottom: 0.25rem !important;
}
input[type=checkbox][_ngcontent-%COMP%] {
  margin-top: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  cursor: pointer;
  flex-shrink: 0;
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {
  display: flex;
  align-items: stretch;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%] {
  background: var(--primary-dark) !important;
  border: none !important;
  color: white !important;
  padding: 0.75rem 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--primary-medium) !important;
  transform: scale(1.05);
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: scale(0.95);
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.1rem;
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input[_ngcontent-%COMP%] {
  flex: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-dark);
  background: white;
  border: 2px solid var(--primary-medium);
  border-left: none;
  border-right: none;
  padding: 0.75rem 1rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input[_ngcontent-%COMP%]:focus {
  border-color: var(--primary-medium);
  box-shadow: none;
  outline: none;
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input.is-valid[_ngcontent-%COMP%] {
  border-color: #28a745;
  background-color: rgba(40, 167, 69, 0.05);
}
.resonator-selector[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .resonator-input.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
  background-color: rgba(220, 53, 69, 0.05);
}
.resonator-selector[_ngcontent-%COMP%]   .resonator-options[_ngcontent-%COMP%]   .resonator-option-btn[_ngcontent-%COMP%] {
  background: white;
  border: 2px solid var(--primary-medium);
  color: var(--primary-dark);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}
.resonator-selector[_ngcontent-%COMP%]   .resonator-options[_ngcontent-%COMP%]   .resonator-option-btn[_ngcontent-%COMP%]:hover:not(.active) {
  background: rgba(66, 129, 119, 0.1);
  border-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.resonator-selector[_ngcontent-%COMP%]   .resonator-options[_ngcontent-%COMP%]   .resonator-option-btn.active[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--primary-dark) 0%,
      var(--primary-medium) 100%);
  border-color: var(--primary-dark);
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(5, 66, 57, 0.3);
}
/*# sourceMappingURL=edit-ear-exam.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEarExamComponent, [{
    type: Component,
    args: [{ selector: "app-edit-ear-exam", standalone: true, imports: [CommonModule, ReactiveFormsModule, ButtonModule], template: `<div class="professional-modal-container">\r
  <!-- Modal Header with Brand Identity -->\r
  <div class="modal-header-professional">\r
    <div class="header-content">\r
      <div class="header-icon">\r
        <i class="pi pi-pen-to-square"></i>\r
      </div>\r
      <div class="header-text">\r
        <h3 class="modal-title-professional" >\u062A\u0639\u062F\u064A\u0644 \u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629</h3>\r
      </div>\r
    </div>\r
    <button type="button" class="btn-close-professional" (click)="onCancel()">\r
      <i class="pi pi-times"></i>\r
    </button>\r
  </div>\r
\r
  <div class="modal-body-professional">\r
    <form [formGroup]="examForm" (ngSubmit)="onSubmit()">\r
      \r
      <!-- Section Header -->\r
      <div class="section-header">\r
        <i class="pi pi-ear-silence"></i>\r
        <h4>\u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646\u064A\u0646</h4>\r
      </div>\r
      \r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-shield"></i>\r
            \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)\r
          </label>\r
          <div class="d-flex flex-wrap gap-3 mb-2">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightTympanicMembrane"\r
                id="rightTympanicMembraneEdit_normal"\r
                value="\u0633\u0644\u064A\u0645"\r
                formControlName="rightTympanicMembrane" />\r
              <label class="form-check-label" for="rightTympanicMembraneEdit_normal">\u0633\u0644\u064A\u0645</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightTympanicMembrane"\r
                id="rightTympanicMembraneEdit_other"\r
                value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                formControlName="rightTympanicMembrane" />\r
              <label class="form-check-label" for="rightTympanicMembraneEdit_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
            </div>\r
          </div>\r
          <div *ngIf="examForm.get('rightTympanicMembrane')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
            <input\r
              type="text"\r
              class="form-control"\r
              formControlName="rightTympanicMembraneOther"\r
              placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)" />\r
          </div>\r
        </div>\r
\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-shield"></i>\r
            \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)\r
          </label>\r
          <div class="d-flex flex-wrap gap-3 mb-2">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftTympanicMembrane"\r
                id="leftTympanicMembraneEdit_normal"\r
                value="\u0633\u0644\u064A\u0645"\r
                formControlName="leftTympanicMembrane" />\r
              <label class="form-check-label" for="leftTympanicMembraneEdit_normal">\u0633\u0644\u064A\u0645</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftTympanicMembrane"\r
                id="leftTympanicMembraneEdit_other"\r
                value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                formControlName="leftTympanicMembrane" />\r
              <label class="form-check-label" for="leftTympanicMembraneEdit_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
            </div>\r
          </div>\r
          <div *ngIf="examForm.get('leftTympanicMembrane')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
            <input\r
              type="text"\r
              class="form-control"\r
              formControlName="leftTympanicMembraneOther"\r
              placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)" />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-info-circle"></i>\r
            \u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0645\u064A\u0646)\r
          </label>\r
          <div class="d-flex flex-wrap gap-3">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightHugeMates"\r
                id="rightHugeMatesEdit_none"\r
                value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                formControlName="rightHugeMates" />\r
              <label class="form-check-label" for="rightHugeMatesEdit_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightHugeMates"\r
                id="rightHugeMatesEdit_simple"\r
                value="\u0628\u0633\u064A\u0637\u0629"\r
                formControlName="rightHugeMates" />\r
              <label class="form-check-label" for="rightHugeMatesEdit_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightHugeMates"\r
                id="rightHugeMatesEdit_medium"\r
                value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                formControlName="rightHugeMates" />\r
              <label class="form-check-label" for="rightHugeMatesEdit_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightHugeMates"\r
                id="rightHugeMatesEdit_severe"\r
                value="\u0634\u062F\u064A\u062F\u0629"\r
                formControlName="rightHugeMates" />\r
              <label class="form-check-label" for="rightHugeMatesEdit_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-info-circle"></i>\r
            \u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A (\u064A\u0633\u0627\u0631)\r
          </label>\r
          <div class="d-flex flex-wrap gap-3">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftHugeMates"\r
                id="leftHugeMatesEdit_none"\r
                value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                formControlName="leftHugeMates" />\r
              <label class="form-check-label" for="leftHugeMatesEdit_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftHugeMates"\r
                id="leftHugeMatesEdit_simple"\r
                value="\u0628\u0633\u064A\u0637\u0629"\r
                formControlName="leftHugeMates" />\r
              <label class="form-check-label" for="leftHugeMatesEdit_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftHugeMates"\r
                id="leftHugeMatesEdit_medium"\r
                value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                formControlName="leftHugeMates" />\r
              <label class="form-check-label" for="leftHugeMatesEdit_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftHugeMates"\r
                id="leftHugeMatesEdit_severe"\r
                value="\u0634\u062F\u064A\u062F\u0629"\r
                formControlName="leftHugeMates" />\r
              <label class="form-check-label" for="leftHugeMatesEdit_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-angle-right"></i>\r
            \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL\r
          </label>\r
          <div class="d-flex flex-wrap gap-3">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightString"\r
                id="rightStringEdit_none"\r
                value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                formControlName="rightString" />\r
              <label class="form-check-label" for="rightStringEdit_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightString"\r
                id="rightStringEdit_simple"\r
                value="\u0628\u0633\u064A\u0637\u0629"\r
                formControlName="rightString" />\r
              <label class="form-check-label" for="rightStringEdit_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightString"\r
                id="rightStringEdit_medium"\r
                value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                formControlName="rightString" />\r
              <label class="form-check-label" for="rightStringEdit_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightString"\r
                id="rightStringEdit_severe"\r
                value="\u0634\u062F\u064A\u062F\u0629"\r
                formControlName="rightString" />\r
              <label class="form-check-label" for="rightStringEdit_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-angle-left"></i>\r
            \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR\r
          </label>\r
          <div class="d-flex flex-wrap gap-3">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftString"\r
                id="leftStringEdit_none"\r
                value="\u0644\u0627 \u064A\u0648\u062C\u062F"\r
                formControlName="leftString" />\r
              <label class="form-check-label" for="leftStringEdit_none">\u0644\u0627 \u064A\u0648\u062C\u062F</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftString"\r
                id="leftStringEdit_simple"\r
                value="\u0628\u0633\u064A\u0637\u0629"\r
                formControlName="leftString" />\r
              <label class="form-check-label" for="leftStringEdit_simple">\u0628\u0633\u064A\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftString"\r
                id="leftStringEdit_medium"\r
                value="\u0645\u062A\u0648\u0633\u0637\u0629"\r
                formControlName="leftString" />\r
              <label class="form-check-label" for="leftStringEdit_medium">\u0645\u062A\u0648\u0633\u0637\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftString"\r
                id="leftStringEdit_severe"\r
                value="\u0634\u062F\u064A\u062F\u0629"\r
                formControlName="leftString" />\r
              <label class="form-check-label" for="leftStringEdit_severe">\u0634\u062F\u064A\u062F\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Hearing Tests Section -->\r
      <div class="section-header">\r
        <i class="pi pi-volume-up"></i>\r
        <h4>\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0645\u0639</h4>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-hear"></i>\r
            \u0627\u0644\u0633\u0645\u0639 (\u064A\u0645\u064A\u0646) R\r
          </label>\r
          <input \r
            type="text" \r
            class="form-control" \r
            formControlName="rightHearing" \r
            placeholder="\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u0623\u064A\u0645\u0646">\r
        </div>\r
\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-hear"></i>\r
            \u0627\u0644\u0633\u0645\u0639 (\u064A\u0633\u0627\u0631) W\r
          </label>\r
          <input \r
            type="text" \r
            class="form-control" \r
            formControlName="leftHearing" \r
            placeholder="\u0623\u062F\u062E\u0644 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u0623\u064A\u0633\u0631">\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-comment"></i>\r
            \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)\r
          </label>\r
          <div class="d-flex flex-wrap gap-3 mb-2">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightWhisperTest"\r
                id="rightWhisperTestEdit_good"\r
                value="\u062C\u064A\u062F\u0629"\r
                formControlName="rightWhisperTest" />\r
              <label class="form-check-label" for="rightWhisperTestEdit_good">\u062C\u064A\u062F\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="rightWhisperTest"\r
                id="rightWhisperTestEdit_other"\r
                value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                formControlName="rightWhisperTest" />\r
              <label class="form-check-label" for="rightWhisperTestEdit_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
            </div>\r
          </div>\r
          <div *ngIf="examForm.get('rightWhisperTest')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
            <input\r
              type="text"\r
              class="form-control"\r
              formControlName="rightWhisperTestOther"\r
              placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)" />\r
          </div>\r
        </div>\r
\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-comment"></i>\r
            \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)\r
          </label>\r
          <div class="d-flex flex-wrap gap-3 mb-2">\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftWhisperTest"\r
                id="leftWhisperTestEdit_good"\r
                value="\u062C\u064A\u062F\u0629"\r
                formControlName="leftWhisperTest" />\r
              <label class="form-check-label" for="leftWhisperTestEdit_good">\u062C\u064A\u062F\u0629</label>\r
            </div>\r
            <div class="form-check">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                name="leftWhisperTest"\r
                id="leftWhisperTestEdit_other"\r
                value="\u063A\u064A\u0631 \u0630\u0644\u0643"\r
                formControlName="leftWhisperTest" />\r
              <label class="form-check-label" for="leftWhisperTestEdit_other">\u063A\u064A\u0631 \u0630\u0644\u0643</label>\r
            </div>\r
          </div>\r
          <div *ngIf="examForm.get('leftWhisperTest')?.value === '\u063A\u064A\u0631 \u0630\u0644\u0643'" class="mt-2">\r
            <input\r
              type="text"\r
              class="form-control"\r
              formControlName="leftWhisperTestOther"\r
              placeholder="\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)" />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-megaphone"></i>\r
            \u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A\r
          </label>\r
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
        </div>\r
      </div>\r
\r
      <!-- Voice and Mouth Section -->\r
      <div class="section-header">\r
        <i class="pi pi-briefcase"></i>\r
        <h4>\u0627\u0644\u0641\u0645</h4>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-briefcase"></i>\r
            \u0627\u0644\u0641\u0645\r
          </label>\r
          <div class="ms-3">\r
            <div class="form-check mb-2">\r
              <input \r
                class="form-check-input" \r
                type="checkbox" \r
                id="mouthNormalEdit"\r
                [checked]="isMouthOptionSelected('\u0633\u0648\u064A')"\r
                (change)="toggleMouthOption('\u0633\u0648\u064A', $event)" />\r
              <label class="form-check-label" for="mouthNormalEdit">\u0633\u0648\u064A</label>\r
            </div>\r
            <div class="form-check mb-2">\r
              <input \r
                class="form-check-input" \r
                type="checkbox" \r
                id="mouthMalocclusionEdit"\r
                [checked]="isMouthOptionSelected('\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642')"\r
                (change)="toggleMouthOption('\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642', $event)" />\r
              <label class="form-check-label" for="mouthMalocclusionEdit">\u0633\u0648\u0621 \u0625\u0637\u0628\u0627\u0642</label>\r
            </div>\r
            <div class="form-check mb-2">\r
              <input \r
                class="form-check-input" \r
                type="checkbox" \r
                id="mouthClickEdit"\r
                [checked]="isMouthOptionSelected('\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644')"\r
                (change)="toggleMouthOption('\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644', $event)" />\r
              <label class="form-check-label" for="mouthClickEdit">\u0637\u064E\u0642\u0651\u0629 \u0645\u0641\u0635\u0644</label>\r
            </div>\r
            <div class="form-check mb-2">\r
              <input \r
                class="form-check-input" \r
                type="checkbox" \r
                id="mouthSubluxationEdit"\r
                [checked]="isMouthOptionSelected('\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A')"\r
                (change)="toggleMouthOption('\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A', $event)" />\r
              <label class="form-check-label" for="mouthSubluxationEdit">\u062A\u062D\u062A \u062E\u0644\u0639 \u0645\u0641\u0635\u0644 \u0641\u0643\u064A</label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-info-circle"></i>\r
            \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649\r
          </label>\r
          <textarea \r
            class="form-control" \r
            formControlName="otherDiseases" \r
            rows="3"\r
            placeholder="\u0623\u062F\u062E\u0644 \u0623\u064A \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649"></textarea>\r
        </div>\r
      </div>\r
\r
      <!-- Result Section -->\r
      <div class="section-header">\r
        <i class="pi pi-check-circle"></i>\r
        <h4>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h4>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-flag"></i>\r
            \u0627\u0644\u0646\u062A\u064A\u062C\u0629\r
          </label>\r
          <select class="form-select" formControlName="resultID">\r
            @for (result of results; track result.resultID) {\r
              <option [value]="result.resultID">{{ result.description }}</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <div class="form-field">\r
          <label>\r
            <i class="pi pi-file-edit"></i>\r
            \u0627\u0644\u0633\u0628\u0628 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)\r
          </label>\r
          <textarea \r
            class="form-control" \r
            formControlName="reason" \r
            rows="3" \r
            placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0633\u0628\u0628 \u0625\u0630\u0627 \u0644\u0632\u0645 \u0627\u0644\u0623\u0645\u0631"></textarea>\r
        </div>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="modal-footer-professional">\r
    <button \r
      type="button" \r
      class="btn btn-secondary" \r
      (click)="onCancel()">\r
      <i class="pi pi-times me-2"></i>\r
      \u0625\u0644\u063A\u0627\u0621\r
    </button>\r
    <button \r
      type="button" \r
      class="btn btn-primary" \r
      (click)="onSubmit()" \r
      [disabled]="loading || examForm.invalid">\r
      @if (loading) {\r
        <span class="spinner-border spinner-border-sm me-2"></span>\r
      }\r
      @if (!loading) {\r
        <i class="pi pi-save me-2"></i>\r
      }\r
      {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}\r
    </button>\r
  </div>\r
</div>\r
\r
\r
`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/ear-doctor.component/edit-ear-exam/edit-ear-exam.scss */
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
.professional-modal-container {
  background: #EDEBE0;
  border-radius: 16px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}
.modal-header-professional {
  background:
    linear-gradient(
      135deg,
      #054239 0%,
      #428177 100%);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 2px solid #B9A779;
}
.modal-header-professional .header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.modal-header-professional .header-content .header-icon {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem;
  font-size: 1.5rem;
  color: white;
}
.modal-header-professional .header-content .modal-title-professional {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}
.modal-header-professional .btn-close-professional {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.modal-header-professional .btn-close-professional:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
.modal-header-professional .btn-close-professional i {
  font-size: 1.2rem;
}
.modal-body-professional {
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem;
  background: #EDEBE0;
}
.modal-body-professional::-webkit-scrollbar {
  width: 8px;
}
.modal-body-professional::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 4px;
}
.modal-body-professional::-webkit-scrollbar-thumb {
  background: #B9A779;
  border-radius: 4px;
}
.modal-body-professional::-webkit-scrollbar-thumb:hover {
  background: #988561;
}
.section-header {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.75rem;
  padding-bottom: 0.875rem;
  border-bottom: 2px solid #e9ecef;
  margin-top: 2.5rem;
}
.section-header:first-child {
  margin-top: 0;
}
.section-header i {
  color: #054239;
  font-size: 1.5rem;
}
.section-header h4 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #054239;
}
.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.form-field label {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 600;
  color: #161616;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.form-field label i {
  color: #054239;
  font-size: 1.1rem;
}
.form-field label.checkbox-label {
  flex-direction: row;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
.form-field label.checkbox-label:hover {
  border-color: #B9A779;
}
.form-field .form-control,
.form-field .form-select {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0.875rem 1.125rem;
  font-family:
    "Cairo",
    "Segoe UI",
    sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #161616;
  min-height: 48px;
  display: flex;
  align-items: center;
}
.form-field .form-control:focus,
.form-field .form-select:focus {
  outline: none;
  border-color: #054239;
  box-shadow: 0 0 0 4px rgba(5, 66, 57, 0.1);
}
.form-field .form-control::placeholder,
.form-field .form-select::placeholder {
  color: #3D3A3B;
  opacity: 0.6;
}
.form-field textarea.form-control {
  resize: vertical;
  min-height: 100px;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  line-height: 1.5;
}
.form-field .form-check {
  display: flex;
  align-items: center;
  gap: 0.5rem !important;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.form-field .form-check label {
  margin-bottom: 0;
}
.form-field .form-check-input {
  margin-right: 0;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  width: 1.15rem;
  height: 1.15rem;
  border: 2px solid #3D3A3B;
  border-radius: 4px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.form-field .form-check-input:checked {
  background-color: #054239;
  border-color: #054239;
}
.form-field .form-check-input:checked::before {
  content: "\\2713";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 0.75rem;
}
.form-field .form-check-input:hover {
  border-color: #054239;
  transform: scale(1.05);
}
.form-field .form-check-label {
  font-weight: 500;
  color: #161616;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin: 0;
  padding: 0;
}
.form-field input[type=radio] {
  margin: 0 0.25rem 0 0 !important;
  width: 1.1rem !important;
  height: 1.1rem !important;
  cursor: pointer;
  border: 2px solid #3D3A3B;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.form-field input[type=radio]:hover {
  border-color: #054239;
  transform: scale(1.05);
}
.form-field input[type=radio]:checked {
  background-color: #054239;
  border-color: #054239;
}
.form-field .d-flex {
  display: flex;
  gap: 1.5rem !important;
  flex-wrap: wrap;
}
.form-field .d-flex .form-check {
  margin: 0.5rem 0;
  padding: 0.5rem 0.75rem;
  background: white;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  gap: 0.5rem !important;
}
.form-field .d-flex .form-check:hover {
  border-color: #054239;
  background: #f8f9fa;
}
.form-field .d-flex .form-check .form-check-input:checked ~ .form-check-label {
  color: #054239;
  font-weight: 600;
}
.form-field .d-flex .form-check .form-check-input {
  margin: 0 !important;
}
.form-field .d-flex .form-check .form-check-label {
  margin: 0 !important;
  padding: 0 !important;
}
.modal-footer-professional {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.modal-footer-professional .btn {
  min-width: 150px;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
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
}
.modal-footer-professional .btn i {
  font-size: 1rem;
}
.modal-footer-professional .btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.modal-footer-professional .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.modal-footer-professional .btn-primary {
  background-color: #054239;
  border-color: #054239;
  color: white;
}
.modal-footer-professional .btn-primary:hover:not(:disabled) {
  background-color: #428177;
  border-color: #428177;
}
.modal-footer-professional .btn-secondary {
  background-color: #3D3A3B;
  border-color: #3D3A3B;
  color: white;
}
.modal-footer-professional .btn-secondary:hover:not(:disabled) {
  background-color: #161616;
  border-color: #161616;
}
@media (max-width: 768px) {
  .modal-header-professional {
    padding: 1rem 1.5rem;
  }
  .modal-header-professional .modal-title-professional {
    font-size: 1.25rem;
  }
  .modal-body-professional {
    padding: 1.75rem;
  }
  .section-header {
    margin-top: 2rem;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
  }
  .section-header h4 {
    font-size: 1.125rem;
  }
  .section-header i {
    font-size: 1.25rem;
  }
  .form-row {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
  .form-field {
    gap: 0.625rem;
  }
  .form-field label {
    margin-bottom: 0.5rem;
  }
  .modal-footer-professional {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
  .modal-footer-professional .btn {
    width: 100%;
    min-width: 100%;
  }
}
.spinner-border-sm {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: -0.125em;
  border: 0.15em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
}
.spinner-border-sm.me-2 {
  margin-left: 0.5rem;
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.invalid-feedback {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
}
.invalid-feedback i {
  margin-left: 0.25rem;
}
.form-control.is-valid,
.form-select.is-valid {
  border-color: #28a745 !important;
}
.form-control.is-valid:focus,
.form-select.is-valid:focus {
  border-color: #28a745 !important;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;
}
.me-2 {
  margin-left: 0.5rem;
}
.form-check {
  margin-bottom: 0.5rem !important;
  display: flex;
  align-items: center;
  gap: 0.5rem !important;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
}
.form-check:hover {
  background-color: rgba(66, 129, 119, 0.05);
}
.form-check .form-check-input {
  margin: 0 !important;
  width: 1.25rem !important;
  height: 1.25rem !important;
  border: 2px solid var(--primary-medium) !important;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
  background-color: white;
  position: relative;
}
.form-check .form-check-input:hover {
  border-color: var(--primary-dark) !important;
  transform: scale(1.1);
}
.form-check .form-check-input:checked {
  background-color: var(--primary-dark) !important;
  border-color: var(--primary-dark) !important;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.2);
}
.form-check .form-check-input:checked::after {
  background-color: white;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  transform: scale(1);
}
.form-check .form-check-input:focus {
  border-color: var(--primary-dark) !important;
  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.15) !important;
  outline: none;
}
.form-check .form-check-label {
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
  font-weight: 500;
  font-size: var(--font-size-base);
  color: var(--neutral-dark);
  flex: 0 0 auto;
  -webkit-user-select: none;
  user-select: none;
  transition: color 0.2s ease;
}
.form-check .form-check-label:hover {
  color: var(--primary-dark);
}
.form-check:has(.form-check-input:checked) {
  background-color: rgba(5, 66, 57, 0.08);
}
.form-check:has(.form-check-input:checked) .form-check-label {
  color: var(--primary-dark);
  font-weight: 600;
}
.d-flex.gap-3 {
  gap: 0.75rem !important;
}
.d-flex.gap-3 .form-check {
  gap: 0.5rem !important;
  margin-bottom: 0.25rem !important;
}
input[type=checkbox] {
  margin-top: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  cursor: pointer;
  flex-shrink: 0;
}
.resonator-selector .input-group {
  display: flex;
  align-items: stretch;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.resonator-selector .input-group .resonator-nav-btn {
  background: var(--primary-dark) !important;
  border: none !important;
  color: white !important;
  padding: 0.75rem 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}
.resonator-selector .input-group .resonator-nav-btn:hover:not(:disabled) {
  background: var(--primary-medium) !important;
  transform: scale(1.05);
}
.resonator-selector .input-group .resonator-nav-btn:active:not(:disabled) {
  transform: scale(0.95);
}
.resonator-selector .input-group .resonator-nav-btn i {
  font-size: 1.1rem;
}
.resonator-selector .input-group .resonator-input {
  flex: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-dark);
  background: white;
  border: 2px solid var(--primary-medium);
  border-left: none;
  border-right: none;
  padding: 0.75rem 1rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.resonator-selector .input-group .resonator-input:focus {
  border-color: var(--primary-medium);
  box-shadow: none;
  outline: none;
}
.resonator-selector .input-group .resonator-input.is-valid {
  border-color: #28a745;
  background-color: rgba(40, 167, 69, 0.05);
}
.resonator-selector .input-group .resonator-input.is-invalid {
  border-color: #dc3545;
  background-color: rgba(220, 53, 69, 0.05);
}
.resonator-selector .resonator-options .resonator-option-btn {
  background: white;
  border: 2px solid var(--primary-medium);
  color: var(--primary-dark);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}
.resonator-selector .resonator-options .resonator-option-btn:hover:not(.active) {
  background: rgba(66, 129, 119, 0.1);
  border-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.resonator-selector .resonator-options .resonator-option-btn.active {
  background:
    linear-gradient(
      135deg,
      var(--primary-dark) 0%,
      var(--primary-medium) 100%);
  border-color: var(--primary-dark);
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(5, 66, 57, 0.3);
}
/*# sourceMappingURL=edit-ear-exam.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: EarClinicExamService }, { type: ToastrService }, { type: NgbActiveModal }], { exam: [{
    type: Input
  }], earExamUpdated: [{
    type: Output
  }], dialogClosed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEarExamComponent, { className: "EditEarExamComponent", filePath: "src/app/features/doctor/components/ear-doctor.component/edit-ear-exam/edit-ear-exam.ts", lineNumber: 17 });
})();

// src/app/features/doctor/components/ear-doctor.component/exam-details/exam-details.ts
var ExamDetailsComponent = class _ExamDetailsComponent {
  activeModal;
  exam;
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
  ngOnInit() {
    console.log("Exam Details:", this.exam);
  }
  closeModal() {
    this.activeModal.dismiss();
  }
  static \u0275fac = function ExamDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExamDetailsComponent)(\u0275\u0275directiveInject(NgbActiveModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamDetailsComponent, selectors: [["app-exam-details"]], inputs: { exam: "exam" }, decls: 129, vars: 22, consts: [[1, "professional-modal-container"], [1, "modal-header-professional"], [1, "header-content"], [1, "header-icon"], [1, "pi", "pi-file-export"], [1, "header-text"], [1, "modal-title-professional"], [1, "modal-subtitle"], ["type", "button", 1, "btn-close-professional", 3, "click"], [1, "pi", "pi-times"], [1, "modal-body-professional"], [1, "section-header"], [1, "pi", "pi-ear-silence"], [1, "form-row"], [1, "form-field"], [1, "pi", "pi-shield"], [1, "info-value"], [1, "pi", "pi-volume-up"], [1, "pi", "pi-volume-down"], [1, "pi", "pi-tag"], [1, "pi", "pi-send"], [1, "pi", "pi-angle-right"], [1, "pi", "pi-angle-left"], [1, "pi", "pi-comment"], [1, "pi", "pi-user"], [1, "pi", "pi-exclamation-triangle"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-flag"], [1, "info-value", "result-badge"], [1, "pi", "pi-file"], [1, "modal-footer-professional"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "pi", "pi-times", "me-2"]], template: function ExamDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElement(4, "i", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 5)(6, "h3", 6);
      \u0275\u0275text(7, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "button", 8);
      \u0275\u0275domListener("click", function ExamDetailsComponent_Template_button_click_10_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275domElement(11, "i", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 10)(13, "div", 11);
      \u0275\u0275domElement(14, "i", 12);
      \u0275\u0275domElementStart(15, "h4");
      \u0275\u0275text(16, "\u0627\u0644\u0623\u0630\u0646");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "div", 13)(18, "div", 14)(19, "label");
      \u0275\u0275domElement(20, "i", 15);
      \u0275\u0275text(21, " \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div", 16);
      \u0275\u0275text(23);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "div", 14)(25, "label");
      \u0275\u0275domElement(26, "i", 15);
      \u0275\u0275text(27, " \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div", 16);
      \u0275\u0275text(29);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(30, "div", 11);
      \u0275\u0275domElement(31, "i", 17);
      \u0275\u0275domElementStart(32, "h4");
      \u0275\u0275text(33, "\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0645\u0639");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "div", 13)(35, "div", 14)(36, "label");
      \u0275\u0275domElement(37, "i", 17);
      \u0275\u0275text(38, " \u0627\u0644\u0633\u0645\u0639 (\u064A\u0645\u064A\u0646) R");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "div", 16);
      \u0275\u0275text(40);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(41, "div", 14)(42, "label");
      \u0275\u0275domElement(43, "i", 17);
      \u0275\u0275text(44, " \u0627\u0644\u0633\u0645\u0639 (\u064A\u0633\u0627\u0631) W");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "div", 16);
      \u0275\u0275text(46);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(47, "div", 13)(48, "div", 14)(49, "label");
      \u0275\u0275domElement(50, "i", 17);
      \u0275\u0275text(51, " \u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "div", 16);
      \u0275\u0275text(53);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "div", 14)(55, "label");
      \u0275\u0275domElement(56, "i", 18);
      \u0275\u0275text(57, " \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(58, "div", 16);
      \u0275\u0275text(59);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(60, "div", 13)(61, "div", 14)(62, "label");
      \u0275\u0275domElement(63, "i", 18);
      \u0275\u0275text(64, " \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "div", 16);
      \u0275\u0275text(66);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(67, "div", 14)(68, "label");
      \u0275\u0275domElement(69, "i", 19);
      \u0275\u0275text(70, " \u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "div", 16);
      \u0275\u0275text(72);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(73, "div", 11);
      \u0275\u0275domElement(74, "i", 20);
      \u0275\u0275domElementStart(75, "h4");
      \u0275\u0275text(76, "\u0627\u0644\u0623\u0646\u0641");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(77, "div", 13)(78, "div", 14)(79, "label");
      \u0275\u0275domElement(80, "i", 21);
      \u0275\u0275text(81, " \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(82, "div", 16);
      \u0275\u0275text(83);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(84, "div", 14)(85, "label");
      \u0275\u0275domElement(86, "i", 22);
      \u0275\u0275text(87, " \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "div", 16);
      \u0275\u0275text(89);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(90, "div", 11);
      \u0275\u0275domElement(91, "i", 23);
      \u0275\u0275domElementStart(92, "h4");
      \u0275\u0275text(93, "\u0627\u0644\u0641\u0645");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(94, "div", 13)(95, "div", 14)(96, "label");
      \u0275\u0275domElement(97, "i", 24);
      \u0275\u0275text(98, " \u0627\u0644\u0641\u0645");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(99, "div", 16);
      \u0275\u0275text(100);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(101, "div", 13)(102, "div", 14)(103, "label");
      \u0275\u0275domElement(104, "i", 25);
      \u0275\u0275text(105, " \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "div", 16);
      \u0275\u0275text(107);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(108, "div", 11);
      \u0275\u0275domElement(109, "i", 26);
      \u0275\u0275domElementStart(110, "h4");
      \u0275\u0275text(111, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(112, "div", 13)(113, "div", 14)(114, "label");
      \u0275\u0275domElement(115, "i", 27);
      \u0275\u0275text(116, " \u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "div", 28);
      \u0275\u0275text(118);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(119, "div", 14)(120, "label");
      \u0275\u0275domElement(121, "i", 29);
      \u0275\u0275text(122, " \u0627\u0644\u0633\u0628\u0628");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "div", 16);
      \u0275\u0275text(124);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(125, "div", 30)(126, "button", 31);
      \u0275\u0275domListener("click", function ExamDetailsComponent_Template_button_click_126_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275domElement(127, "i", 32);
      \u0275\u0275text(128, " \u0625\u063A\u0644\u0627\u0642 ");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx.exam.applicantFileNumber);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.exam.rightTympanicMembrane || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.leftTympanicMembrane || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.exam.rightHearing || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.leftHearing || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.exam.resonators || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.rightWhisperTest || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.exam.leftWhisperTest || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2(" \u064A\u0645\u064A\u0646: ", ctx.exam.isRightHugeMates ? "\u0646\u0639\u0645" : "\u0644\u0627", " | \u064A\u0633\u0627\u0631: ", ctx.exam.isLeftHugeMates ? "\u0646\u0639\u0645" : "\u0644\u0627", " ");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.exam.rightString || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.leftString || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.exam.mouth || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.exam.otherDiseases || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(10);
      \u0275\u0275classProp("result-accepted", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0642\u0628\u0648\u0644")("result-rejected", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0631\u0641\u0648\u0636")("result-postponed", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u062A\u0623\u062C\u064A\u0644" || (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0624\u062C\u0644");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.exam.result == null ? null : ctx.exam.result.description) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.reason || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    }
  }, dependencies: [CommonModule], styles: [`@charset "UTF-8";



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
.professional-modal-container[_ngcontent-%COMP%] {
  max-width: 950px !important;
  width: 100% !important;
  height: auto !important;
}
[_nghost-%COMP%] {
  display: block !important;
  width: 100%;
}
  .modal-content {
  border: none !important;
  border-radius: 16px !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
}
  .modal-dialog {
  transform: none !important;
  transition: none !important;
  margin: 1.75rem auto !important;
}
  .modal.show .modal-dialog {
  transform: none !important;
  transition: none !important;
  animation: none !important;
}
  .modal.fade .modal-dialog {
  transform: none !important;
  transition: none !important;
}
  .modal.fade, 
  .modal.fade.show, 
  .modal.fade .modal-dialog, 
  .modal.show .modal-dialog {
  animation: none !important;
  transition: none !important;
  opacity: 1 !important;
}
.modal-body-professional[_ngcontent-%COMP%] {
  padding: 2rem !important;
}
.form-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.form-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #495057;
}
.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #0d6efd;
  font-size: 1rem;
}
.info-value[_ngcontent-%COMP%] {
  background: #ffffff;
  padding: 0.9375rem 1.125rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 0.95rem;
  color: #212529;
  min-height: 48px;
  display: flex;
  align-items: center;
  font-weight: 500;
  word-break: break-word;
  transition: all 0.2s ease;
}
.info-value[_ngcontent-%COMP%]:hover {
  border-color: #c0c0c0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.section-header[_ngcontent-%COMP%] {
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e9ecef;
}
.section-header[_ngcontent-%COMP%]:first-child {
  margin-top: 0;
}
.section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.15rem;
  font-weight: 700;
  color: #212529;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #0d6efd;
  font-size: 1.25rem;
}
.modal-footer-professional[_ngcontent-%COMP%] {
  padding: 1.5rem 2rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.625rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {
  background: #6c757d;
  border-color: #6c757d;
}
.modal-footer-professional[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #5a6268;
  border-color: #545b62;
  transform: translateY(-1px);
}
.result-badge[_ngcontent-%COMP%] {
  text-align: center;
  justify-content: center;
}
.result-badge.result-accepted[_ngcontent-%COMP%] {
  background: #10b981 !important;
  color: white !important;
  font-weight: 600 !important;
}
.result-badge.result-rejected[_ngcontent-%COMP%] {
  background: #dc2626 !important;
  color: white !important;
  font-weight: 600 !important;
}
.result-badge.result-postponed[_ngcontent-%COMP%] {
  background: #f59e0b !important;
  color: white !important;
  font-weight: 600 !important;
}
@media (max-width: 768px) {
  .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .modal-body-professional[_ngcontent-%COMP%] {
    padding: 1.5rem !important;
  }
}
/*# sourceMappingURL=exam-details.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-exam-details", standalone: true, imports: [CommonModule], template: `<div class="professional-modal-container">\r
  <!-- Modal Header with Brand Identity -->\r
  <div class="modal-header-professional">\r
    <div class="header-content">\r
      <div class="header-icon">\r
        <i class="pi pi-file-export"></i>\r
      </div>\r
      <div class="header-text">\r
        <h3 class="modal-title-professional">\u062A\u0641\u0627\u0635\u064A\u0644 \u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629</h3>\r
        <span class="modal-subtitle">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ exam.applicantFileNumber }}</span>\r
      </div>\r
    </div>\r
    <button type="button" class="btn-close-professional" (click)="closeModal()">\r
      <i class="pi pi-times"></i>\r
    </button>\r
  </div>\r
\r
  <div class="modal-body-professional">\r
    <!-- Section Header -->\r
    <div class="section-header">\r
      <i class="pi pi-ear-silence"></i>\r
      <h4>\u0627\u0644\u0623\u0630\u0646</h4>\r
    </div>\r
    \r
    <!-- \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 -->\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-shield"></i> \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0645\u064A\u0646)</label>\r
        <div class="info-value">{{ exam.rightTympanicMembrane || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-shield"></i> \u063A\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0644 (\u064A\u0633\u0627\u0631)</label>\r
        <div class="info-value">{{ exam.leftTympanicMembrane || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Hearing Tests Section -->\r
    <div class="section-header">\r
      <i class="pi pi-volume-up"></i>\r
      <h4>\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0645\u0639</h4>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-volume-up"></i> \u0627\u0644\u0633\u0645\u0639 (\u064A\u0645\u064A\u0646) R</label>\r
        <div class="info-value">{{ exam.rightHearing || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-volume-up"></i> \u0627\u0644\u0633\u0645\u0639 (\u064A\u0633\u0627\u0631) W</label>\r
        <div class="info-value">{{ exam.leftHearing || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-volume-up"></i> \u0627\u0644\u0631\u0646\u0627\u0646\u0627\u062A</label>\r
        <div class="info-value">{{ exam.resonators || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-volume-down"></i> \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0645\u064A\u0646)</label>\r
        <div class="info-value">{{ exam.rightWhisperTest || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-volume-down"></i> \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633 (\u064A\u0633\u0627\u0631)</label>\r
        <div class="info-value">{{ exam.leftWhisperTest || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-tag"></i> \u0636\u062E\u0627\u0645\u0629 \u0642\u0631\u064A\u0646\u0627\u062A</label>\r
        <div class="info-value">\r
          \u064A\u0645\u064A\u0646: {{ exam.isRightHugeMates ? '\u0646\u0639\u0645' : '\u0644\u0627' }} | \r
          \u064A\u0633\u0627\u0631: {{ exam.isLeftHugeMates ? '\u0646\u0639\u0645' : '\u0644\u0627' }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Nose Section -->\r
    <div class="section-header">\r
      <i class="pi pi-send"></i>\r
      <h4>\u0627\u0644\u0623\u0646\u0641</h4>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-angle-right"></i> \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OL</label>\r
        <div class="info-value">{{ exam.rightString || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-angle-left"></i> \u0627\u0644\u0648\u062A\u064A\u0631\u0629 - \u0627\u0646\u062D\u0631\u0627\u0641 OR</label>\r
        <div class="info-value">{{ exam.leftString || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Mouth Section -->\r
    <div class="section-header">\r
      <i class="pi pi-comment"></i>\r
      <h4>\u0627\u0644\u0641\u0645</h4>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-user"></i> \u0627\u0644\u0641\u0645</label>\r
        <div class="info-value">{{ exam.mouth || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-exclamation-triangle"></i> \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649</label>\r
        <div class="info-value">{{ exam.otherDiseases || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Result Section -->\r
    <div class="section-header">\r
      <i class="pi pi-check-circle"></i>\r
      <h4>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h4>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-flag"></i> \u0627\u0644\u0646\u062A\u064A\u062C\u0629</label>\r
        <div class="info-value result-badge" \r
             [class.result-accepted]="exam.result?.description === '\u0645\u0642\u0628\u0648\u0644'" \r
             [class.result-rejected]="exam.result?.description === '\u0645\u0631\u0641\u0648\u0636'"\r
             [class.result-postponed]="exam.result?.description === '\u062A\u0623\u062C\u064A\u0644' || exam.result?.description === '\u0645\u0624\u062C\u0644'">\r
          {{ exam.result?.description || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
        </div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-file"></i> \u0627\u0644\u0633\u0628\u0628</label>\r
        <div class="info-value">{{ exam.reason || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="modal-footer-professional">\r
    <button \r
      type="button" \r
      class="btn btn-secondary" \r
      (click)="closeModal()">\r
      <i class="pi pi-times me-2"></i>\r
      \u0625\u063A\u0644\u0627\u0642\r
    </button>\r
  </div>\r
</div>\r
\r
`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/ear-doctor.component/exam-details/exam-details.scss */
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
.professional-modal-container {
  max-width: 950px !important;
  width: 100% !important;
  height: auto !important;
}
:host {
  display: block !important;
  width: 100%;
}
::ng-deep .modal-content {
  border: none !important;
  border-radius: 16px !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
}
::ng-deep .modal-dialog {
  transform: none !important;
  transition: none !important;
  margin: 1.75rem auto !important;
}
::ng-deep .modal.show .modal-dialog {
  transform: none !important;
  transition: none !important;
  animation: none !important;
}
::ng-deep .modal.fade .modal-dialog {
  transform: none !important;
  transition: none !important;
}
::ng-deep .modal.fade,
::ng-deep .modal.fade.show,
::ng-deep .modal.fade .modal-dialog,
::ng-deep .modal.show .modal-dialog {
  animation: none !important;
  transition: none !important;
  opacity: 1 !important;
}
.modal-body-professional {
  padding: 2rem !important;
}
.form-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.form-row .form-field {
  flex: 1;
  min-width: 0;
}
.form-field label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #495057;
}
.form-field label i {
  color: #0d6efd;
  font-size: 1rem;
}
.info-value {
  background: #ffffff;
  padding: 0.9375rem 1.125rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 0.95rem;
  color: #212529;
  min-height: 48px;
  display: flex;
  align-items: center;
  font-weight: 500;
  word-break: break-word;
  transition: all 0.2s ease;
}
.info-value:hover {
  border-color: #c0c0c0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.section-header {
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e9ecef;
}
.section-header:first-child {
  margin-top: 0;
}
.section-header h4 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #212529;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.section-header h4 i {
  color: #0d6efd;
  font-size: 1.25rem;
}
.modal-footer-professional {
  padding: 1.5rem 2rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}
.modal-footer-professional .btn {
  padding: 0.625rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.modal-footer-professional .btn.btn-secondary {
  background: #6c757d;
  border-color: #6c757d;
}
.modal-footer-professional .btn.btn-secondary:hover {
  background: #5a6268;
  border-color: #545b62;
  transform: translateY(-1px);
}
.result-badge {
  text-align: center;
  justify-content: center;
}
.result-badge.result-accepted {
  background: #10b981 !important;
  color: white !important;
  font-weight: 600 !important;
}
.result-badge.result-rejected {
  background: #dc2626 !important;
  color: white !important;
  font-weight: 600 !important;
}
.result-badge.result-postponed {
  background: #f59e0b !important;
  color: white !important;
  font-weight: 600 !important;
}
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 1rem;
  }
  .modal-body-professional {
    padding: 1.5rem !important;
  }
}
/*# sourceMappingURL=exam-details.css.map */
`] }]
  }], () => [{ type: NgbActiveModal }], { exam: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamDetailsComponent, { className: "ExamDetailsComponent", filePath: "src/app/features/doctor/components/ear-doctor.component/exam-details/exam-details.ts", lineNumber: 13 });
})();

// src/app/features/doctor/components/ear-doctor.component/deferred-ear-exams.component/deferred-ear-exams.component.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
var _c2 = () => ({ "min-width": "50rem" });
function DeferredEarExamsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 16);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 16);
    \u0275\u0275text(4, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 16);
    \u0275\u0275text(6, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function DeferredEarExamsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 17)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 17)(8, "div", 19)(9, "button", 20);
    \u0275\u0275listener("click", function DeferredEarExamsComponent_ng_template_14_Template_button_click_9_listener() {
      const exam_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openExamDetails(exam_r3));
    });
    \u0275\u0275element(10, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 22);
    \u0275\u0275listener("click", function DeferredEarExamsComponent_ng_template_14_Template_button_click_11_listener() {
      const exam_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditExam(exam_r3));
    });
    \u0275\u0275element(12, "i", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r3.applicantFileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getBadgeClass(exam_r3.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (exam_r3.result == null ? null : exam_r3.result.description) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
  }
}
function DeferredEarExamsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A");
    \u0275\u0275elementEnd()()()();
  }
}
var DeferredEarExamsComponent = class _DeferredEarExamsComponent {
  examService;
  toastr;
  cdr;
  modalService;
  exams = [];
  filteredExams = [];
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  table;
  searchInput;
  constructor(examService, toastr, cdr, modalService) {
    this.examService = examService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadEarExams();
  }
  loadEarExams() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.examService.getDeferredEarClinicExamsPaged(this.page, this.rowsPerPage, filter).subscribe({
      next: (res) => {
        this.exams = res.items;
        this.filteredExams = res.items;
        this.totalRecords = res.totalCount;
        this.loading = false;
        if (res.items.length === 0) {
          this.toastr.warning("\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A");
        }
      },
      error: () => {
        this.toastr.error("\u274C \u0641\u0634\u0644 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onFilterChange(event) {
    this.globalFilter = event.target.value;
    this.page = 1;
    this.loadEarExams();
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadEarExams();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadEarExams();
  }
  getBadgeClass(result) {
    switch (result?.description) {
      case "\u0645\u0624\u062C\u0644":
        return "badge bg-warning text-dark";
      case "\u0645\u0642\u0628\u0648\u0644":
        return "badge bg-success";
      case "\u0645\u0631\u0641\u0648\u0636":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  openEditExam(exam) {
    const modalRef = this.modalService.open(EditEarExamComponent, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.exam = exam;
    modalRef.componentInstance.earExamUpdated.subscribe((updated) => {
      if (updated) {
        const index = this.exams.findIndex((e) => e.earClinicID === exam.earClinicID);
        if (index !== -1) {
          this.exams[index] = __spreadValues(__spreadValues({}, this.exams[index]), exam);
          this.filteredExams = [...this.exams];
        }
        this.loadEarExams();
      }
    });
  }
  openExamDetails(exam) {
    const modalRef = this.modalService.open(ExamDetailsComponent, {
      size: "lg",
      backdrop: "static",
      keyboard: true,
      centered: true
    });
    modalRef.componentInstance.exam = exam;
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
    this.loadEarExams();
  }
  static \u0275fac = function DeferredEarExamsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredEarExamsComponent)(\u0275\u0275directiveInject(EarClinicExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeferredEarExamsComponent, selectors: [["app-deferred-ear-exams"]], viewQuery: function DeferredEarExamsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, decls: 17, vars: 9, consts: [["searchInput", ""], ["table", ""], [1, "user-header-section", "p-3", "container-fluid"], [1, "mb-3"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0646\u062A\u064A\u062C\u0629", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "table-wrapper"], [1, "custom-table", "my-3", 3, "value", "rows", "totalRecords", "tableStyle", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [1, "text-center"], [1, "text-center", "align-middle"], [1, "fw-bold", "small"], [1, "d-flex", "gap-2", "justify-content-center"], ["type", "button", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-eye"], ["type", "button", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-pen-to-square"], ["colspan", "3", 1, "text-center", "py-4"], [1, "d-flex", "flex-column", "align-items-center"], [1, "pi", "pi-inbox", "text-muted", "mb-2", 2, "font-size", "2rem"], [1, "text-muted"]], template: function DeferredEarExamsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "h4", 3);
      \u0275\u0275text(2, "\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "app-reset-filters-button", 6);
      \u0275\u0275listener("reset", function DeferredEarExamsComponent_Template_app_reset_filters_button_reset_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "input", 8, 0);
      \u0275\u0275listener("input", function DeferredEarExamsComponent_Template_input_input_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 10)(11, "p-table", 11, 1);
      \u0275\u0275template(13, DeferredEarExamsComponent_ng_template_13_Template, 7, 0, "ng-template", 12)(14, DeferredEarExamsComponent_ng_template_14_Template, 13, 4, "ng-template", 13)(15, DeferredEarExamsComponent_ng_template_15_Template, 6, 0, "ng-template", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "app-paginator", 15);
      \u0275\u0275listener("pageChange", function DeferredEarExamsComponent_Template_app_paginator_pageChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function DeferredEarExamsComponent_Template_app_paginator_pageSizeChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.filteredExams)("rows", ctx.rowsPerPage)("totalRecords", ctx.totalRecords)("tableStyle", \u0275\u0275pureFunction0(8, _c2))("loading", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [CommonModule, ButtonModule, PrimeTemplate, FormsModule, TableModule, Table, PaginatorComponent, TooltipModule, Tooltip, ResetFiltersButtonComponent], styles: ["\n\n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #054239;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #428177;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n  .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n  .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.5rem 0.875rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n  .p-datatable .p-datatable-tbody .badge:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-success, \n  .p-datatable .p-datatable-tbody .badge.bg-primary, \n  .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-warning, \n  .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background:\n    linear-gradient(\n      135deg,\n      #988561 0%,\n      #B9A779 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #4A151E 0%,\n      #6B1F2A 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-secondary, \n  .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background:\n    linear-gradient(\n      135deg,\n      #3D3A3B 0%,\n      #616161 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-info {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-light) 100%) !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n  .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n.fs-8[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=deferred-ear-exams.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredEarExamsComponent, [{
    type: Component,
    args: [{ selector: "app-deferred-ear-exams", standalone: true, imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, TooltipModule, ResetFiltersButtonComponent], template: `<div class="user-header-section p-3 container-fluid">\r
  <h4 class="mb-3">\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629</h4>\r
  <div class="table-toolbar">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
    <div class="search-wrapper">\r
      <input\r
          #searchInput\r
        type="text"\r
        class="search-input"\r
        placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0646\u062A\u064A\u062C\u0629"\r
        (input)="onFilterChange($event)"\r
      />\r
      <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="table-wrapper">\r
    <p-table\r
      #table\r
      [value]="filteredExams"\r
      [rows]="rowsPerPage"\r
      [totalRecords]="totalRecords"\r
      class="custom-table my-3"\r
      [tableStyle]="{ 'min-width': '50rem' }"\r
      [loading]="loading"\r
    >\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th class="text-center">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th class="text-center">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th class="text-center">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="body" let-exam>\r
      <tr>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ exam.applicantFileNumber }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span [class]="getBadgeClass(exam.result)">\r
            {{ exam.result?.description || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
          </span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="d-flex gap-2 justify-content-center">\r
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"\r
              tooltipPosition="top"\r
              (click)="openExamDetails(exam)">\r
              <i class="pi pi-eye"></i>\r
            </button>\r
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635"\r
              tooltipPosition="top"\r
              (click)="openEditExam(exam)">\r
              <i class="pi pi-pen-to-square"></i>\r
            </button>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="3" class="text-center py-4">\r
          <div class="d-flex flex-column align-items-center">\r
            <i class="pi pi-inbox text-muted mb-2" style="font-size: 2rem;"></i>\r
            <span class="text-muted">\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A</span>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
    </p-table>\r
  </div>\r
\r
  <app-paginator\r
    [totalRecords]="totalRecords"\r
    [pageSize]="rowsPerPage"\r
    [currentPage]="page"\r
    (pageChange)="onPageChange($event)"\r
    (pageSizeChange)="onPageSizeChange($event)"\r
  ></app-paginator>\r
</div>\r
`, styles: ["/* src/app/features/doctor/components/ear-doctor.component/deferred-ear-exams.component/deferred-ear-exams.component.scss */\n.user-header-section {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-wrapper {\n  overflow-x: auto;\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n.table-wrapper::-webkit-scrollbar {\n  height: 8px;\n}\n.table-wrapper::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-wrapper::-webkit-scrollbar-thumb {\n  background: #054239;\n  border-radius: 4px;\n}\n.table-wrapper::-webkit-scrollbar-thumb:hover {\n  background: #428177;\n}\n.search-wrapper {\n  position: relative;\n  width: 400px;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n::ng-deep .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.5rem 0.875rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-success,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background:\n    linear-gradient(\n      135deg,\n      #988561 0%,\n      #B9A779 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #4A151E 0%,\n      #6B1F2A 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background:\n    linear-gradient(\n      135deg,\n      #3D3A3B 0%,\n      #616161 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-info {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-medium) 0%,\n      var(--primary-light) 100%) !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n.fs-8 {\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=deferred-ear-exams.component.css.map */\n"] }]
  }], () => [{ type: EarClinicExamService }, { type: ToastrService }, { type: ChangeDetectorRef }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeferredEarExamsComponent, { className: "DeferredEarExamsComponent", filePath: "src/app/features/doctor/components/ear-doctor.component/deferred-ear-exams.component/deferred-ear-exams.component.ts", lineNumber: 24 });
})();
export {
  DeferredEarExamsComponent
};
//# sourceMappingURL=chunk-WKO2RXVX.js.map
