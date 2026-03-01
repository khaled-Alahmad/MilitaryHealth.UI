import {
  NgbActiveModal,
  NgbModal
} from "./chunk-TGQW4JXT.js";
import {
  HEALTH_STATUS_OPTIONS,
  OTHER_OPTION_VALUE,
  normalizeHealthStatus,
  resolveHealthStatusValue
} from "./chunk-7R7W7ON6.js";
import {
  EyeExamService
} from "./chunk-KGX6SBXR.js";
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
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
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
} from "./chunk-WG7664WM.js";
import "./chunk-2VRBHK6C.js";
import {
  ApplicantService
} from "./chunk-HQAVTYQP.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-7EG6WMAP.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  forkJoin,
  map,
  of,
  setClassMetadata,
  switchMap,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/doctor/components/eye-doctor.component/edit-eye-exam/edit-eye-exam.ts
var _forTrack0 = ($index, $item) => $item.value;
function EditEyeExam_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "input", 49);
    \u0275\u0275elementStart(2, "label", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const \u0275$index_51_r2 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTestEdit_" + \u0275$index_51_r2)("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTestEdit_" + \u0275$index_51_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.label);
  }
}
function EditEyeExam_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "input", 51);
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "input", 52);
    \u0275\u0275elementStart(2, "label", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const \u0275$index_71_r4 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTestLeftEdit_" + \u0275$index_71_r4)("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTestLeftEdit_" + \u0275$index_71_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
function EditEyeExam_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "input", 53);
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_div_77_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    \u0275\u0275property("value", type_r6.refractionTypeID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r6.description, " ");
  }
}
function EditEyeExam_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56)(3, "div", 57)(4, "label", 9);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 58);
    \u0275\u0275template(9, EditEyeExam_div_77_option_9_Template, 2, 2, "option", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 57)(11, "label", 9);
    \u0275\u0275text(12, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(13, "span", 18);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 60)(17, "button", 61);
    \u0275\u0275listener("click", function EditEyeExam_div_77_Template_button_click_17_listener() {
      const i_r7 = \u0275\u0275restoreView(_r5).index;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.removeRefraction("rightEye", i_r7));
    });
    \u0275\u0275element(18, "i", 62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r7);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r7.refractionTypes);
  }
}
function EditEyeExam_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "button", 66);
    \u0275\u0275listener("click", function EditEyeExam_div_79_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.toggleLeftEye());
    });
    \u0275\u0275element(2, "i", 67);
    \u0275\u0275text(3, " \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 ");
    \u0275\u0275elementEnd()();
  }
}
function EditEyeExam_div_80_div_11_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
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
function EditEyeExam_div_80_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56)(3, "div", 57)(4, "label", 9);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 58)(9, "option", 71);
    \u0275\u0275text(10, "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EditEyeExam_div_80_div_11_option_11_Template, 2, 2, "option", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 57)(13, "label", 9);
    \u0275\u0275text(14, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementStart(15, "span", 18);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 60)(19, "button", 61);
    \u0275\u0275listener("click", function EditEyeExam_div_80_div_11_Template_button_click_19_listener() {
      const i_r13 = \u0275\u0275restoreView(_r11).index;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.removeRefraction("leftEye", i_r13));
    });
    \u0275\u0275element(20, "i", 62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r13);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r7.refractionTypes);
  }
}
function EditEyeExam_div_80_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "h6", 32);
    \u0275\u0275text(3, "\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "button", 68);
    \u0275\u0275listener("click", function EditEyeExam_div_80_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.addRefraction("leftEye"));
    });
    \u0275\u0275element(6, "i", 34);
    \u0275\u0275text(7, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 69);
    \u0275\u0275listener("click", function EditEyeExam_div_80_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.toggleLeftEye());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 70)(10, "div", 36);
    \u0275\u0275template(11, EditEyeExam_div_80_div_11_Template, 21, 2, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EditEyeExam_div_80_div_12_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r7.getRefractions("leftEye").controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r7.getRefractions("leftEye").length);
  }
}
function EditEyeExam_option_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
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
var EditEyeExam = class _EditEyeExam {
  fb;
  examService;
  toastr;
  modalService;
  eyeExamUpdated = new EventEmitter();
  dialogClosed = new EventEmitter();
  _exam;
  formInitialized = false;
  set exam(value) {
    this._exam = value;
    if (value && !this.formInitialized) {
      this.initializeForm();
    }
  }
  get exam() {
    return this._exam;
  }
  examForm;
  refractionTypes = [];
  results = [];
  refractions = [];
  showLeftEye = false;
  showRightEye = false;
  healthStatusOptions = HEALTH_STATUS_OPTIONS;
  otherOptionValue = OTHER_OPTION_VALUE;
  colorTestFields = [
    { control: "colorTest", otherControl: "colorTestOther" },
    { control: "colorTestLeft", otherControl: "colorTestLeftOther" }
  ];
  constructor(fb, examService, toastr, modalService) {
    this.fb = fb;
    this.examService = examService;
    this.toastr = toastr;
    this.modalService = modalService;
  }
  ngOnInit() {
    if (this.exam && !this.formInitialized) {
      this.initializeForm();
    }
  }
  initializeForm() {
    if (!this.exam) {
      return;
    }
    this.formInitialized = true;
    const colorTestNormalized = normalizeHealthStatus(this.exam.colorTest || "");
    const colorTestLeftNormalized = normalizeHealthStatus(this.exam.colorTestLeft || "");
    const vision = (this.exam.vision || "").toString().trim();
    const visionLeft = (this.exam.visionLeft || "").toString().trim();
    let worstRefractionRight = "";
    let worstRefractionLeft = "";
    if (this.exam.worstRefractionRight) {
      worstRefractionRight = this.exam.worstRefractionRight.toString().trim();
    } else if (this.exam.refractiveError) {
      worstRefractionRight = this.exam.refractiveError.toString().trim();
    }
    if (this.exam.worstRefractionLeft) {
      worstRefractionLeft = this.exam.worstRefractionLeft.toString().trim();
    } else if (this.exam.refractiveError) {
      worstRefractionLeft = this.exam.refractiveError.toString().trim();
    }
    this.examForm = this.fb.group({
      vision: [vision, Validators.required],
      visionLeft: [visionLeft, Validators.required],
      colorTest: [colorTestNormalized.status, Validators.required],
      colorTestOther: [colorTestNormalized.other],
      colorTestLeft: [colorTestLeftNormalized.status, Validators.required],
      colorTestLeftOther: [colorTestLeftNormalized.other],
      refractiveError: [this.exam.refractiveError || ""],
      // حقل قديم - للتوافق
      worstRefractionRight: [worstRefractionRight || "", Validators.required],
      worstRefractionLeft: [worstRefractionLeft || "", Validators.required],
      otherDiseases: [(this.exam.otherDiseases || "").trim()],
      resultID: [this.exam.resultID, Validators.required],
      reason: [(this.exam.reason || "").trim()],
      leftEye: this.fb.group({
        refractions: this.fb.array([])
      }),
      rightEye: this.fb.group({
        refractions: this.fb.array([])
      })
    });
    const hasRefractionsInExam = this.exam.refractions && this.exam.refractions.length > 0;
    if (hasRefractionsInExam) {
      this.refractions = [...this.exam.refractions || []];
    } else {
      this.refractions = [];
    }
    const requests = {
      types: this.examService.getRefractionTypes(),
      results: this.examService.getResults(),
      refractions: !hasRefractionsInExam && this.exam.eyeExamID ? this.examService.getRefractionsByEyeExamId(this.exam.eyeExamID) : of({ succeeded: true, status: 200, message: "", data: this.refractions || [], traceId: "" })
    };
    forkJoin(requests).subscribe({
      next: (response) => {
        this.refractionTypes = response.types.data?.items || [];
        this.results = response.results.data?.items || [];
        if (!hasRefractionsInExam && response.refractions) {
          if (response.refractions.succeeded && response.refractions.data && response.refractions.data.length > 0) {
            this.refractions = response.refractions.data;
          } else {
            this.refractions = this.exam.refractions || [];
          }
        }
        setTimeout(() => {
          this.loadRefractionsIntoForm();
        }, 100);
      },
      error: () => {
        this.toastr.error("\u274C \u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "\u062E\u0637\u0623");
        this.refractions = this.exam.refractions || [];
        setTimeout(() => {
          this.loadRefractionsIntoForm();
        }, 100);
      }
    });
  }
  // دالة لتحميل الانكسارات في النموذج
  loadRefractionsIntoForm() {
    if (!this.examForm) {
      return;
    }
    const leftEyeFormArray = this.examForm.get("leftEye.refractions");
    const rightEyeFormArray = this.examForm.get("rightEye.refractions");
    if (!leftEyeFormArray || !rightEyeFormArray) {
      return;
    }
    while (leftEyeFormArray.length !== 0) {
      leftEyeFormArray.removeAt(0);
    }
    while (rightEyeFormArray.length !== 0) {
      rightEyeFormArray.removeAt(0);
    }
    const leftEyeRefractions = (this.refractions || []).filter((r) => r.isLeft === true);
    const rightEyeRefractions = (this.refractions || []).filter((r) => r.isLeft === false);
    leftEyeRefractions.forEach((refraction) => {
      if (refraction.refractionTypeID && refraction.refractionValue !== null && refraction.refractionValue !== void 0) {
        const refractionGroup = this.fb.group({
          refractionTypeID: [refraction.refractionTypeID, Validators.required],
          refractionValue: [refraction.refractionValue, Validators.required]
        });
        leftEyeFormArray.push(refractionGroup);
      }
    });
    if (leftEyeRefractions.length > 0) {
      this.showLeftEye = true;
    }
    rightEyeRefractions.forEach((refraction) => {
      if (refraction.refractionTypeID && refraction.refractionValue !== null && refraction.refractionValue !== void 0) {
        const refractionGroup = this.fb.group({
          refractionTypeID: [refraction.refractionTypeID, Validators.required],
          refractionValue: [refraction.refractionValue, Validators.required]
        });
        rightEyeFormArray.push(refractionGroup);
      }
    });
    if (rightEyeRefractions.length > 0) {
      this.showRightEye = true;
    }
  }
  // دالة إضافة انكسار جديد
  addRefraction(eye) {
    const refractions = this.examForm.get(`${eye}.refractions`);
    refractions.push(this.fb.group({
      refractionTypeID: [null, Validators.required],
      refractionValue: [null, Validators.required]
    }));
  }
  // دالة حذف انكسار
  removeRefraction(eye, index) {
    const refractions = this.examForm.get(`${eye}.refractions`);
    refractions.removeAt(index);
  }
  // دالة للحصول على مصفوفة الانكسارات لعين معينة
  getRefractions(eye) {
    return this.examForm.get(`${eye}.refractions`);
  }
  onSubmit() {
    if (!this.exam || this.examForm.invalid) {
      this.toastr.warning("\u274C \u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u062D\u0630\u064A\u0631");
      return;
    }
    const leftEyeRefractions = this.examForm.get("leftEye.refractions").value;
    const rightEyeRefractions = this.examForm.get("rightEye.refractions").value;
    if (!leftEyeRefractions.length && !rightEyeRefractions.length) {
      this.toastr.warning("\u26A0\uFE0F \u064A\u062C\u0628 \u0625\u062F\u062E\u0627\u0644 \u0642\u064A\u0627\u0633 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 \u0644\u0639\u064A\u0646 \u0648\u0627\u062D\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const updatedExam = __spreadProps(__spreadValues({}, this.exam), {
      vision: this.examForm.value.vision,
      visionLeft: this.examForm.value.visionLeft || "",
      colorTest: resolveHealthStatusValue(this.examForm.value.colorTest, this.examForm.value.colorTestOther),
      colorTestLeft: resolveHealthStatusValue(this.examForm.value.colorTestLeft, this.examForm.value.colorTestLeftOther),
      refractiveError: this.examForm.value.refractiveError || "",
      // للتوافق مع البيانات القديمة
      worstRefractionRight: this.examForm.value.worstRefractionRight || "",
      worstRefractionLeft: this.examForm.value.worstRefractionLeft || "",
      otherDiseases: this.examForm.value.otherDiseases || "",
      resultID: Number(this.examForm.value.resultID),
      reason: this.examForm.value.reason || ""
    });
    this.examService.updateEyeExam(this.exam.eyeExamID, updatedExam).subscribe({
      next: () => {
        this.updateRefractions(leftEyeRefractions, rightEyeRefractions, updatedExam);
      },
      error: () => {
        this.toastr.error("\u274C \u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
      }
    });
  }
  updateRefractions(leftEyeRefractions, rightEyeRefractions, updatedExam) {
    const allCurrentRefractions = [...this.refractions];
    const allNewRefractions = [];
    const validLeftRefractions = leftEyeRefractions.filter((r) => r.refractionTypeID && r.refractionValue !== null && r.refractionValue !== void 0 && r.refractionValue !== "");
    const validRightRefractions = rightEyeRefractions.filter((r) => r.refractionTypeID && r.refractionValue !== null && r.refractionValue !== void 0 && r.refractionValue !== "");
    validLeftRefractions.forEach((refraction) => {
      allNewRefractions.push({
        refractionID: 0,
        refractionTypeID: Number(refraction.refractionTypeID),
        refractionValue: Number(refraction.refractionValue),
        isLeft: true,
        eyeExamID: this.exam.eyeExamID
      });
    });
    validRightRefractions.forEach((refraction) => {
      allNewRefractions.push({
        refractionID: 0,
        refractionTypeID: Number(refraction.refractionTypeID),
        refractionValue: Number(refraction.refractionValue),
        isLeft: false,
        eyeExamID: this.exam.eyeExamID
      });
    });
    const refractionsToDelete = [];
    const refractionsToUpdate = [];
    const refractionsToAdd = [];
    allCurrentRefractions.forEach((oldRefraction) => {
      const matchingNewRefraction = allNewRefractions.find((newRefraction) => newRefraction.refractionTypeID === oldRefraction.refractionTypeID && newRefraction.isLeft === oldRefraction.isLeft);
      if (matchingNewRefraction) {
        if (matchingNewRefraction.refractionValue !== oldRefraction.refractionValue) {
          refractionsToUpdate.push({
            old: oldRefraction,
            new: __spreadProps(__spreadValues({}, matchingNewRefraction), { refractionID: oldRefraction.refractionID })
          });
        }
        const index = allNewRefractions.indexOf(matchingNewRefraction);
        allNewRefractions.splice(index, 1);
      } else {
        refractionsToDelete.push(oldRefraction);
      }
    });
    refractionsToAdd.push(...allNewRefractions);
    const operations = [];
    refractionsToDelete.forEach((refraction) => {
      operations.push(this.examService.deleteRefraction(refraction.refractionID));
    });
    refractionsToUpdate.forEach(({ old, new: updated }) => {
      operations.push(this.examService.updateRefraction(old.refractionID, updated));
    });
    refractionsToAdd.forEach((refraction) => {
      operations.push(this.examService.addRefraction(refraction));
    });
    if (operations.length === 0) {
      this.toastr.success("\u2705 \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
      this.eyeExamUpdated.emit(updatedExam);
      this.modalService.dismissAll();
      return;
    }
    forkJoin(operations).subscribe({
      next: (responses) => {
        const failedOperations = responses.filter((r) => !r.succeeded);
        if (failedOperations.length > 0) {
          this.toastr.error(`\u274C \u0641\u0634\u0644 \u0641\u064A ${failedOperations.length} \u0639\u0645\u0644\u064A\u0629 \u0645\u0646 \u0623\u0635\u0644 ${responses.length}`, "\u062E\u0637\u0623");
          return;
        }
        this.toastr.success("\u2705 \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D", "\u0646\u062C\u0627\u062D");
        this.eyeExamUpdated.emit(updatedExam);
        this.modalService.dismissAll();
      },
      error: (error) => {
        this.toastr.error("\u274C \u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A", "\u062E\u0637\u0623");
      }
    });
  }
  cancel() {
    this.modalService.dismissAll();
  }
  toggleLeftEye() {
    this.showLeftEye = !this.showLeftEye;
    if (!this.showLeftEye) {
      const leftEyeArray = this.examForm.get("leftEye.refractions");
      leftEyeArray.clear();
    }
  }
  toggleRightEye() {
    this.showRightEye = !this.showRightEye;
    if (!this.showRightEye) {
      const rightEyeArray = this.examForm.get("rightEye.refractions");
      rightEyeArray.clear();
    }
  }
  static \u0275fac = function EditEyeExam_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEyeExam)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEyeExam, selectors: [["app-edit-eye-exam"]], inputs: { exam: "exam" }, outputs: { eyeExamUpdated: "eyeExamUpdated", dialogClosed: "dialogClosed" }, decls: 100, vars: 9, consts: [[1, "modal-content", "modal-lg"], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-black", 3, "click"], [1, "modal-title", "text-center", "flex-grow-1"], [1, "invisible", 2, "width", "1.5rem"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "form-label"], [1, "input-group-q"], [1, "input-group-text"], ["type", "number", "formControlName", "vision", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645", 1, "form-control"], ["type", "number", "formControlName", "visionLeft", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645", 1, "form-control"], [1, "form-label", "mb-2"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "form-check", "form-check-inline"], [1, "mt-2"], [1, "text-danger"], [1, "d-flex", "flex-wrap", "gap-3", "ms-3"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightNotImportantEdit", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightNotImportantEdit", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightImportantEdit", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightImportantEdit", 1, "form-check-label"], [1, "ms-3", "d-flex", "flex-wrap", "gap-3"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftNotImportantEdit", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftNotImportantEdit", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftImportantEdit", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftImportantEdit", 1, "form-check-label"], [1, "refraction-sections"], [1, "card", "mb-3"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "pi", "pi-plus", "me-1"], ["formGroupName", "rightEye", 1, "card-body"], ["formArrayName", "refractions"], ["class", "card mb-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "text-muted small", 4, "ngIf"], ["class", "text-center mb-3", 4, "ngIf"], ["class", "card mb-3", 4, "ngIf"], [1, "mb-3"], ["formControlName", "otherDiseases", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0623\u062E\u0631\u0649 \u0625\u0646 \u0648\u062C\u062F\u062A", 1, "form-control"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "reason", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0633\u0628\u0628 \u0625\u0630\u0627 \u0648\u062C\u062F", 1, "form-control"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "radio", "formControlName", "colorTest", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], ["type", "text", "formControlName", "colorTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "radio", "formControlName", "colorTestLeft", 1, "form-check-input", 3, "id", "value"], ["type", "text", "formControlName", "colorTestLeftOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], [1, "card", "mb-3", 3, "formGroupName"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-5"], ["formControlName", "refractionTypeID", 1, "form-select"], ["type", "number", "formControlName", "refractionValue", 1, "form-control"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-danger", "mt-4", 3, "click"], [1, "pi", "pi-trash"], [3, "value"], [1, "text-muted", "small"], [1, "text-center", "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-plus-circle"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "me-2", 3, "click"], ["type", "button", 1, "btn-close", 3, "click"], ["formGroupName", "leftEye", 1, "card-body"], ["value", ""]], template: function EditEyeExam_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function EditEyeExam_Template_button_click_2_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h4", 3);
      \u0275\u0275text(4, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "form", 6);
      \u0275\u0275listener("ngSubmit", function EditEyeExam_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "label", 9);
      \u0275\u0275text(11, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 R:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14, "/10");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
      \u0275\u0275text(18, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 L:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10)(20, "span", 11);
      \u0275\u0275text(21, "/10");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 7)(24, "div", 8)(25, "label", 14);
      \u0275\u0275text(26, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 R:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15);
      \u0275\u0275repeaterCreate(28, EditEyeExam_For_29_Template, 4, 4, "div", 16, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, EditEyeExam_Conditional_30_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 8)(32, "label", 14);
      \u0275\u0275text(33, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 L:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 15);
      \u0275\u0275repeaterCreate(35, EditEyeExam_For_36_Template, 4, 4, "div", 16, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(37, EditEyeExam_Conditional_37_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 7)(39, "div", 8)(40, "label", 14);
      \u0275\u0275text(41, "R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
      \u0275\u0275elementStart(42, "span", 18);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 19)(45, "div", 16);
      \u0275\u0275element(46, "input", 20);
      \u0275\u0275elementStart(47, "label", 21);
      \u0275\u0275text(48, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 16);
      \u0275\u0275element(50, "input", 22);
      \u0275\u0275elementStart(51, "label", 23);
      \u0275\u0275text(52, "\u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 8)(54, "label", 14);
      \u0275\u0275text(55, "L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
      \u0275\u0275elementStart(56, "span", 18);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 24)(59, "div", 16);
      \u0275\u0275element(60, "input", 25);
      \u0275\u0275elementStart(61, "label", 26);
      \u0275\u0275text(62, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 16);
      \u0275\u0275element(64, "input", 27);
      \u0275\u0275elementStart(65, "label", 28);
      \u0275\u0275text(66, "\u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 29)(68, "div", 30)(69, "div", 31)(70, "h6", 32);
      \u0275\u0275text(71, "\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 33);
      \u0275\u0275listener("click", function EditEyeExam_Template_button_click_72_listener() {
        return ctx.addRefraction("rightEye");
      });
      \u0275\u0275element(73, "i", 34);
      \u0275\u0275text(74, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 35)(76, "div", 36);
      \u0275\u0275template(77, EditEyeExam_div_77_Template, 19, 2, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(78, EditEyeExam_div_78_Template, 2, 0, "div", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(79, EditEyeExam_div_79_Template, 4, 0, "div", 39)(80, EditEyeExam_div_80_Template, 13, 2, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 41)(82, "label", 9);
      \u0275\u0275text(83, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "textarea", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 7)(86, "div", 8)(87, "label", 9);
      \u0275\u0275text(88, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "select", 43);
      \u0275\u0275template(90, EditEyeExam_option_90_Template, 2, 2, "option", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 8)(92, "label", 9);
      \u0275\u0275text(93, "\u0627\u0644\u0633\u0628\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "textarea", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "div", 46)(96, "button", 47);
      \u0275\u0275listener("click", function EditEyeExam_Template_button_click_96_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(97, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "button", 48);
      \u0275\u0275listener("click", function EditEyeExam_Template_button_click_98_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(99, "\u062D\u0641\u0638");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_4_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(21);
      \u0275\u0275repeater(ctx.healthStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_2_0 = ctx.examForm.get("colorTest")) == null ? null : tmp_2_0.value) === ctx.otherOptionValue ? 30 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.healthStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_4_0 = ctx.examForm.get("colorTestLeft")) == null ? null : tmp_4_0.value) === ctx.otherOptionValue ? 37 : -1);
      \u0275\u0275advance(40);
      \u0275\u0275property("ngForOf", ctx.getRefractions("rightEye").controls);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.getRefractions("rightEye").length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showLeftEye);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLeftEye);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.results);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.examForm.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: [`@charset "UTF-8";



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
  background: #edebe0 !important;
}
.dialog-form[_ngcontent-%COMP%] {
  padding: 2rem;
}
.input-group-q[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-direction: row-reverse;
}
.form-check[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem !important;
  display: flex;
  align-items: center;
  gap: 0.4rem !important;
}
.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin-top: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  margin-bottom: 0 !important;
  width: 1.1rem !important;
  height: 1.1rem !important;
  flex-shrink: 0;
}
.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
  font-weight: 500;
}
.form-check-inline[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: 1rem;
}
.form-check-inline[_ngcontent-%COMP%]:last-child {
  margin-right: 0;
}
/*# sourceMappingURL=edit-eye-exam.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEyeExam, [{
    type: Component,
    args: [{ selector: "app-edit-eye-exam", imports: [CommonModule, ReactiveFormsModule], template: `<div class="modal-content modal-lg">\r
  <div class="modal-header d-flex justify-content-between align-items-center">\r
    <button type="button" class="btn-close btn-close-black" aria-label="Close" (click)="cancel()"></button>\r
    <h4 class="modal-title text-center flex-grow-1">\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635</h4>\r
    <div class="invisible" style="width: 1.5rem;"></div> <!-- \u0639\u0646\u0635\u0631 \u062A\u0648\u0627\u0632\u0646 \u063A\u064A\u0631 \u0645\u0631\u0626\u064A -->\r
  </div>\r
\r
  <div class="modal-body">\r
    <form [formGroup]="examForm" (ngSubmit)="onSubmit()">\r
\r
      <div class="row mb-3">\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 R:</label>\r
          <div class="input-group-q ">\r
            <span class="input-group-text">/10</span>\r
            <input type="number" class="form-control" formControlName="vision" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645" />\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 L:</label>\r
          <div class="input-group-q">\r
            <span class="input-group-text">/10</span>\r
            <input type="number" class="form-control" formControlName="visionLeft" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645" />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="row mb-3">\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 R:</label>\r
          <div class="d-flex flex-wrap gap-3">\r
            @for (option of healthStatusOptions; track option.value; let i = $index) {\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="colorTest" [id]="'colorTestEdit_' + i"\r
                [value]="option.value" />\r
              <label class="form-check-label" [for]="'colorTestEdit_' + i">{{ option.label }}</label>\r
            </div>\r
            }\r
          </div>\r
          @if (examForm.get('colorTest')?.value === otherOptionValue) {\r
          <div class="mt-2">\r
            <input type="text" class="form-control" formControlName="colorTestOther" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644" />\r
          </div>\r
          }\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 L:</label>\r
          <div class="d-flex flex-wrap gap-3">\r
            @for (option of healthStatusOptions; track option.value; let i = $index) {\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="colorTestLeft"\r
                [id]="'colorTestLeftEdit_' + i" [value]="option.value" />\r
              <label class="form-check-label" [for]="'colorTestLeftEdit_' + i">{{ option.label }}</label>\r
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
      <div class="row mb-3">\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="d-flex flex-wrap gap-3 ms-3">\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionRight"\r
                id="worstRefractionRightNotImportantEdit" value="\u063A\u064A\u0631 \u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionRightNotImportantEdit">\u063A\u064A\u0631 \u0645\u0647\u0645\u0629</label>\r
            </div>\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionRight"\r
                id="worstRefractionRightImportantEdit" value="\u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionRightImportantEdit">\u0645\u0647\u0645\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="ms-3 d-flex flex-wrap gap-3">\r
\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionLeft"\r
                id="worstRefractionLeftNotImportantEdit" value="\u063A\u064A\u0631 \u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionLeftNotImportantEdit">\u063A\u064A\u0631 \u0645\u0647\u0645\u0629</label>\r
            </div>\r
            <div class="form-check form-check-inline">\r
              <input class="form-check-input" type="radio" formControlName="worstRefractionLeft"\r
                id="worstRefractionLeftImportantEdit" value="\u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionLeftImportantEdit">\u0645\u0647\u0645\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u0642\u0633\u0645 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 -->\r
      <div class="refraction-sections">\r
        <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 -->\r
        <div class="card mb-3">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</h6>\r
            <button type="button" class="btn btn-sm btn-primary" (click)="addRefraction('rightEye')">\r
              <i class="pi pi-plus me-1"></i>\r
              \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631\r
            </button>\r
          </div>\r
          <div class="card-body" formGroupName="rightEye">\r
            <div formArrayName="refractions">\r
              <div class="card mb-3" *ngFor="let refraction of getRefractions('rightEye').controls; let i=index"\r
                [formGroupName]="i">\r
                <div class="card-body">\r
                  <div class="row g-3">\r
                    <div class="col-md-5">\r
                      <label class="form-label">\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
                      <select class="form-select" formControlName="refractionTypeID">\r
                        <option *ngFor="let type of refractionTypes" [value]="type.refractionTypeID">\r
                          {{ type.description }}\r
                        </option>\r
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
            </div>\r
\r
            <div class="text-muted small" *ngIf="!getRefractions('rightEye').length">\r
              \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631.\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u0632\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
        <div class="text-center mb-3" *ngIf="!showLeftEye">\r
          <button type="button" class="btn btn-outline-primary" (click)="toggleLeftEye()">\r
            <i class="fas fa-plus-circle"></i>\r
            \u0625\u0636\u0627\u0641\u0629 \u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649\r
          </button>\r
        </div>\r
\r
        <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
        <div class="card mb-3" *ngIf="showLeftEye">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</h6>\r
            <div>\r
              <button type="button" class="btn btn-sm btn-primary me-2" (click)="addRefraction('leftEye')">\r
                <i class="pi pi-plus me-1"></i>\r
                \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631\r
              </button>\r
              <button type="button" class="btn-close" (click)="toggleLeftEye()"></button>\r
            </div>\r
          </div>\r
          <div class="card-body" formGroupName="leftEye">\r
            <div formArrayName="refractions">\r
              <div class="card mb-3" *ngFor="let refraction of getRefractions('leftEye').controls; let i=index"\r
                [formGroupName]="i">\r
                <div class="card-body">\r
                  <div class="row g-3">\r
                    <div class="col-md-5">\r
                      <label class="form-label">\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
                      <select class="form-select" formControlName="refractionTypeID">\r
                        <option value="">\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</option>\r
                        <option *ngFor="let type of refractionTypes" [value]="type.refractionTypeID">\r
                          {{ type.description }}\r
                        </option>\r
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
            </div>\r
\r
            <div class="text-muted small" *ngIf="!getRefractions('leftEye').length">\r
              \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631.\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0623\u062E\u0631\u0649 -->\r
      <div class="mb-3">\r
        <label class="form-label">\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649</label>\r
        <textarea class="form-control" formControlName="otherDiseases" rows="3"\r
          placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0623\u062E\u0631\u0649 \u0625\u0646 \u0648\u062C\u062F\u062A"></textarea>\r
      </div>\r
\r
      <!-- \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0648\u0627\u0644\u0633\u0628\u0628 -->\r
      <div class="row mb-3">\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</label>\r
          <select class="form-select" formControlName="resultID">\r
            <option *ngFor="let r of results" [value]="r.resultID">\r
              {{ r.description }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0633\u0628\u0628</label>\r
          <textarea class="form-control" formControlName="reason" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0633\u0628\u0628 \u0625\u0630\u0627 \u0648\u062C\u062F"></textarea>\r
        </div>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="modal-footer">\r
    <button class="btn btn-secondary" (click)="cancel()">\u0625\u0644\u063A\u0627\u0621</button>\r
    <button type="submit" class="btn btn-primary" [disabled]="!examForm.valid" (click)="onSubmit()">\u062D\u0641\u0638</button>\r
  </div>\r
</div>`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/eye-doctor.component/edit-eye-exam/edit-eye-exam.scss */
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
  background: #edebe0 !important;
}
.dialog-form {
  padding: 2rem;
}
.input-group-q {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-direction: row-reverse;
}
.form-check {
  margin-bottom: 0.5rem !important;
  display: flex;
  align-items: center;
  gap: 0.4rem !important;
}
.form-check .form-check-input {
  margin-top: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  margin-bottom: 0 !important;
  width: 1.1rem !important;
  height: 1.1rem !important;
  flex-shrink: 0;
}
.form-check .form-check-label {
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
  font-weight: 500;
}
.form-check-inline {
  margin-left: 0;
  margin-right: 1rem;
}
.form-check-inline:last-child {
  margin-right: 0;
}
/*# sourceMappingURL=edit-eye-exam.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: ToastrService }, { type: NgbModal }], { eyeExamUpdated: [{
    type: Output
  }], dialogClosed: [{
    type: Output
  }], exam: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEyeExam, { className: "EditEyeExam", filePath: "src/app/features/doctor/components/eye-doctor.component/edit-eye-exam/edit-eye-exam.ts", lineNumber: 22 });
})();

// src/app/features/doctor/components/eye-doctor.component/eye-exam-details/eye-exam-details.ts
function EyeExamDetails_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "label");
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275text(4, " \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "label");
    \u0275\u0275element(9, "i", 34);
    \u0275\u0275text(10, " \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const refraction_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getRefractionTypeName(refraction_r1.refractionTypeID));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refraction_r1.refractionValue || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function EyeExamDetails_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, EyeExamDetails_div_62_div_1_Template, 13, 2, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.rightEyeRefractions);
  }
}
function EyeExamDetails_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 ");
    \u0275\u0275elementEnd();
  }
}
function EyeExamDetails_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "label");
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275text(4, " \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "label");
    \u0275\u0275element(9, "i", 34);
    \u0275\u0275text(10, " \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const refraction_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getRefractionTypeName(refraction_r3.refractionTypeID));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refraction_r3.refractionValue || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function EyeExamDetails_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, EyeExamDetails_div_68_div_1_Template, 13, 2, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.leftEyeRefractions);
  }
}
function EyeExamDetails_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 ");
    \u0275\u0275elementEnd();
  }
}
function EyeExamDetails_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label");
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275text(3, " \u0627\u0644\u0633\u0628\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.exam.reason || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
var EyeExamDetails = class _EyeExamDetails {
  activeModal;
  applicantService;
  exam;
  showRefractionsOnly = false;
  leftEyeRefractions = [];
  rightEyeRefractions = [];
  applicantInfo = null;
  // ✅ تعريف أنواع الانكسار بشكل ثابت (تكتبهن هون مرة وحدة)
  refractionTypes = [
    { refractionTypeID: 1, description: "\u0642\u0635\u0631 \u0646\u0638\u0631" },
    { refractionTypeID: 2, description: "\u0645\u062F \u0646\u0638\u0631" },
    { refractionTypeID: 3, description: "\u0627\u0633\u062A\u062C\u0645\u0627\u062A\u064A\u0632\u0645" },
    { refractionTypeID: 4, description: "\u0642\u0635\u0631 \u0646\u0638\u0631 \u0645\u0639 \u0627\u0633\u062A\u062C\u0645\u0627\u062A\u064A\u0632\u0645" },
    { refractionTypeID: 5, description: "\u0645\u062F \u0646\u0638\u0631 \u0645\u0639 \u0627\u0633\u062A\u062C\u0645\u0627\u062A\u064A\u0632\u0645" }
    // ↩️ فيك تكمل الباقي حسب الموجود عندك بقاعدة البيانات
  ];
  constructor(activeModal, applicantService) {
    this.activeModal = activeModal;
    this.applicantService = applicantService;
  }
  ngOnInit() {
    if (this.exam.refractions) {
      this.leftEyeRefractions = this.exam.refractions.filter((r) => r.isLeft);
      this.rightEyeRefractions = this.exam.refractions.filter((r) => !r.isLeft);
    }
    this.loadApplicantInfo();
  }
  loadApplicantInfo() {
    if (this.exam.applicantFileNumber) {
      this.applicantService.getApplicantByFileNumber$(this.exam.applicantFileNumber).subscribe({
        next: (applicant) => {
          this.applicantInfo = applicant;
        },
        error: () => {
          this.applicantInfo = { fullName: "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631", job: "" };
        }
      });
    }
  }
  close() {
    this.activeModal.dismiss();
  }
  // ✅ تجيب اسم نوع الانكسار بالاعتماد على ID
  getRefractionTypeName(refractionTypeID) {
    const type = this.refractionTypes.find((rt) => rt.refractionTypeID === refractionTypeID);
    return type?.description || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
  }
  // ✅ جلب نتيجة الفحص
  getResultName(resultID) {
    if (this.exam.result && this.exam.result.resultID === resultID) {
      return this.exam.result.description;
    }
    return "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
  }
  // ✅ تحديد لون البادج حسب النتيجة
  getResultBadgeClass() {
    if (!this.exam.result || !this.exam.result.description)
      return "badge bg-secondary";
    switch (this.exam.result.description) {
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
  // ✅ جلب اسم المنتسب
  getApplicantName() {
    return this.applicantInfo?.fullName || "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...";
  }
  // ✅ جلب وظيفة المنتسب
  getApplicantJob() {
    return this.applicantInfo?.job || "";
  }
  static \u0275fac = function EyeExamDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeExamDetails)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(ApplicantService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeExamDetails, selectors: [["app-eye-exam-details"]], inputs: { exam: "exam", showRefractionsOnly: "showRefractionsOnly" }, decls: 97, vars: 19, consts: [[1, "professional-modal-container"], [1, "modal-header-professional"], [1, "header-content"], [1, "header-icon"], [1, "pi", "pi-eye"], [1, "header-text"], [1, "modal-title-professional"], [1, "modal-subtitle"], ["type", "button", 1, "btn-close-professional", 3, "click"], [1, "pi", "pi-times"], [1, "modal-body-professional"], [1, "section-header"], [1, "form-row"], [1, "form-field"], [1, "info-value"], [1, "pi", "pi-palette"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-sync"], [1, "pi", "pi-info-circle"], ["class", "refraction-list", 4, "ngIf"], ["class", "no-data-message", 4, "ngIf"], [1, "pi", "pi-exclamation-triangle"], [1, "pi", "pi-file-edit"], [1, "pi", "pi-flag"], [1, "info-value", "result-badge"], ["class", "form-field", 4, "ngIf"], [1, "modal-footer-professional"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "pi", "pi-times", "me-2"], [1, "refraction-list"], ["class", "refraction-item", 4, "ngFor", "ngForOf"], [1, "refraction-item"], [1, "refraction-info"], [1, "pi", "pi-circle"], [1, "pi", "pi-chart-line"], [1, "no-data-message"], [1, "pi", "pi-file"]], template: function EyeExamDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h3", 6);
      \u0275\u0275text(7, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function EyeExamDetails_Template_button_click_10_listener() {
        return ctx.close();
      });
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
      \u0275\u0275element(14, "i", 4);
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "label");
      \u0275\u0275element(20, "i", 4);
      \u0275\u0275text(21, " R:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 13)(25, "label");
      \u0275\u0275element(26, "i", 4);
      \u0275\u0275text(27, " L:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275element(31, "i", 15);
      \u0275\u0275elementStart(32, "h4");
      \u0275\u0275text(33, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12)(35, "div", 13)(36, "label");
      \u0275\u0275element(37, "i", 16);
      \u0275\u0275text(38, " R:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 13)(42, "label");
      \u0275\u0275element(43, "i", 16);
      \u0275\u0275text(44, " L:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 14);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 11);
      \u0275\u0275element(48, "i", 17);
      \u0275\u0275elementStart(49, "h4");
      \u0275\u0275text(50, "\u0623\u0633\u0648\u0627\u0621 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 12)(52, "div", 13)(53, "label");
      \u0275\u0275element(54, "i", 18);
      \u0275\u0275text(55, " \u0623\u0633\u0648\u0627\u0621 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 14);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 11);
      \u0275\u0275element(59, "i", 4);
      \u0275\u0275elementStart(60, "h4");
      \u0275\u0275text(61, "\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(62, EyeExamDetails_div_62_Template, 2, 1, "div", 19)(63, EyeExamDetails_div_63_Template, 3, 0, "div", 20);
      \u0275\u0275elementStart(64, "div", 11);
      \u0275\u0275element(65, "i", 4);
      \u0275\u0275elementStart(66, "h4");
      \u0275\u0275text(67, "\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(68, EyeExamDetails_div_68_Template, 2, 1, "div", 19)(69, EyeExamDetails_div_69_Template, 3, 0, "div", 20);
      \u0275\u0275elementStart(70, "div", 11);
      \u0275\u0275element(71, "i", 21);
      \u0275\u0275elementStart(72, "h4");
      \u0275\u0275text(73, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 12)(75, "div", 13)(76, "label");
      \u0275\u0275element(77, "i", 22);
      \u0275\u0275text(78, " \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 14);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 11);
      \u0275\u0275element(82, "i", 16);
      \u0275\u0275elementStart(83, "h4");
      \u0275\u0275text(84, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 12)(86, "div", 13)(87, "label");
      \u0275\u0275element(88, "i", 23);
      \u0275\u0275text(89, " \u0627\u0644\u0646\u062A\u064A\u062C\u0629:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 24);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(92, EyeExamDetails_div_92_Template, 6, 1, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 26)(94, "button", 27);
      \u0275\u0275listener("click", function EyeExamDetails_Template_button_click_94_listener() {
        return ctx.close();
      });
      \u0275\u0275element(95, "i", 28);
      \u0275\u0275text(96, " \u0625\u063A\u0644\u0627\u0642 ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx.exam.applicantFileNumber);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1("", ctx.exam.vision || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " /10");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.exam.visionLeft || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " /10");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.exam.colorTest || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.colorTestLeft || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.exam["refractiveError"] || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.rightEyeRefractions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.rightEyeRefractions || ctx.rightEyeRefractions.length === 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.leftEyeRefractions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.leftEyeRefractions || ctx.leftEyeRefractions.length === 0);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.exam.otherDiseases || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(10);
      \u0275\u0275classProp("result-accepted", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0642\u0628\u0648\u0644")("result-rejected", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0631\u0641\u0648\u0636")("result-postponed", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u062A\u0623\u062C\u064A\u0644" || (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0624\u062C\u0644");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getResultName(ctx.exam.resultID), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.exam.reason);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: [`@charset "UTF-8";



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
.refraction-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.refraction-item[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.refraction-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.refraction-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #495057;
  min-width: 140px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.refraction-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #0d6efd;
}
.refraction-info[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {
  flex: 1;
  margin: 0;
}
.no-data-message[_ngcontent-%COMP%] {
  background: #e7f3ff;
  border: 1px solid #b8daff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  color: #004085;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
}
.no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
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
  text-align: center !important;
  justify-content: center !important;
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
/*# sourceMappingURL=eye-exam-details.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeExamDetails, [{
    type: Component,
    args: [{ selector: "app-eye-exam-details", standalone: true, imports: [CommonModule], template: `<div class="professional-modal-container">\r
  <!-- Modal Header -->\r
  <div class="modal-header-professional">\r
    <div class="header-content">\r
      <div class="header-icon">\r
        <i class="pi pi-eye"></i>\r
      </div>\r
      <div class="header-text">\r
        <h3 class="modal-title-professional">\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A</h3>\r
        <span class="modal-subtitle">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ exam.applicantFileNumber }}</span>\r
      </div>\r
    </div>\r
    <button type="button" class="btn-close-professional" (click)="close()">\r
      <i class="pi pi-times"></i>\r
    </button>\r
  </div>\r
\r
  <div class="modal-body-professional">\r
    <!-- \u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 -->\r
    <div class="section-header">\r
      <i class="pi pi-eye"></i>\r
      <h4>\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629</h4>\r
    </div>\r
    \r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-eye"></i> R:</label>\r
        <div class="info-value">{{ exam.vision || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }} /10</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-eye"></i> L:</label>\r
        <div class="info-value">{{ exam.visionLeft || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }} /10</div>\r
      </div>\r
    </div>\r
\r
    <!-- \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 -->\r
    <div class="section-header">\r
      <i class="pi pi-palette"></i>\r
      <h4>\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646</h4>\r
    </div>\r
    \r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-check-circle"></i> R:</label>\r
        <div class="info-value">{{ exam.colorTest || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
      <div class="form-field">\r
        <label><i class="pi pi-check-circle"></i> L:</label>\r
        <div class="info-value">{{ exam.colorTestLeft || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- \u0623\u0633\u0648\u0627\u0621 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 -->\r
    <div class="section-header">\r
      <i class="pi pi-sync"></i>\r
      <h4>\u0623\u0633\u0648\u0627\u0621 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</h4>\r
    </div>\r
    \r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-info-circle"></i> \u0623\u0633\u0648\u0627\u0621 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:</label>\r
        <div class="info-value">{{ exam['refractiveError'] || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- \u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 -->\r
    <div class="section-header">\r
      <i class="pi pi-eye"></i>\r
      <h4>\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</h4>\r
    </div>\r
    \r
    <div class="refraction-list" *ngIf="rightEyeRefractions.length > 0">\r
      <div class="refraction-item" *ngFor="let refraction of rightEyeRefractions">\r
        <div class="refraction-info">\r
          <label><i class="pi pi-circle"></i> \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:</label>\r
          <div class="info-value">{{ getRefractionTypeName(refraction.refractionTypeID) }}</div>\r
        </div>\r
        <div class="refraction-info">\r
          <label><i class="pi pi-chart-line"></i> \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:</label>\r
          <div class="info-value">{{ refraction.refractionValue || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="no-data-message" *ngIf="!rightEyeRefractions || rightEyeRefractions.length === 0">\r
      <i class="pi pi-info-circle"></i>\r
      \u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649\r
    </div>\r
\r
    <!-- \u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
    <div class="section-header">\r
      <i class="pi pi-eye"></i>\r
      <h4>\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</h4>\r
    </div>\r
    \r
    <div class="refraction-list" *ngIf="leftEyeRefractions.length > 0">\r
      <div class="refraction-item" *ngFor="let refraction of leftEyeRefractions">\r
        <div class="refraction-info">\r
          <label><i class="pi pi-circle"></i> \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:</label>\r
          <div class="info-value">{{ getRefractionTypeName(refraction.refractionTypeID) }}</div>\r
        </div>\r
        <div class="refraction-info">\r
          <label><i class="pi pi-chart-line"></i> \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631:</label>\r
          <div class="info-value">{{ refraction.refractionValue || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="no-data-message" *ngIf="!leftEyeRefractions || leftEyeRefractions.length === 0">\r
      <i class="pi pi-info-circle"></i>\r
      \u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649\r
    </div>\r
\r
    <!-- \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649 -->\r
    <div class="section-header">\r
      <i class="pi pi-exclamation-triangle"></i>\r
      <h4>\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649</h4>\r
    </div>\r
    \r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-file-edit"></i> \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649:</label>\r
        <div class="info-value">{{ exam.otherDiseases || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- \u0627\u0644\u0646\u062A\u064A\u062C\u0629 -->\r
    <div class="section-header">\r
      <i class="pi pi-check-circle"></i>\r
      <h4>\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h4>\r
    </div>\r
    \r
    <div class="form-row">\r
      <div class="form-field">\r
        <label><i class="pi pi-flag"></i> \u0627\u0644\u0646\u062A\u064A\u062C\u0629:</label>\r
        <div class="info-value result-badge" \r
             [class.result-accepted]="exam.result?.description === '\u0645\u0642\u0628\u0648\u0644'" \r
             [class.result-rejected]="exam.result?.description === '\u0645\u0631\u0641\u0648\u0636'"\r
             [class.result-postponed]="exam.result?.description === '\u062A\u0623\u062C\u064A\u0644' || exam.result?.description === '\u0645\u0624\u062C\u0644'">\r
          {{ getResultName(exam.resultID) }}\r
        </div>\r
      </div>\r
      <div class="form-field" *ngIf="exam.reason">\r
        <label><i class="pi pi-file"></i> \u0627\u0644\u0633\u0628\u0628:</label>\r
        <div class="info-value">{{ exam.reason || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <div class="modal-footer-professional">\r
    <button type="button" class="btn btn-secondary" (click)="close()">\r
      <i class="pi pi-times me-2"></i> \u0625\u063A\u0644\u0627\u0642\r
    </button>\r
  </div>\r
</div>`, styles: [`@charset "UTF-8";

/* src/app/features/doctor/components/eye-doctor.component/eye-exam-details/eye-exam-details.scss */
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
.refraction-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.refraction-item {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.refraction-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.refraction-info label {
  font-weight: 600;
  color: #495057;
  min-width: 140px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.refraction-info label i {
  color: #0d6efd;
}
.refraction-info .info-value {
  flex: 1;
  margin: 0;
}
.no-data-message {
  background: #e7f3ff;
  border: 1px solid #b8daff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  color: #004085;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
}
.no-data-message i {
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
  text-align: center !important;
  justify-content: center !important;
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
/*# sourceMappingURL=eye-exam-details.css.map */
`] }]
  }], () => [{ type: NgbActiveModal }, { type: ApplicantService }], { exam: [{
    type: Input
  }], showRefractionsOnly: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeExamDetails, { className: "EyeExamDetails", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-exam-details/eye-exam-details.ts", lineNumber: 16 });
})();

// src/app/features/doctor/components/eye-doctor.component/deferred-eye-exams.component/deferred-eye-exams.component.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
var _c2 = () => ({ "min-width": "50rem" });
function DeferredEyeExamsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 16);
    \u0275\u0275text(4, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 16);
    \u0275\u0275text(6, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 17);
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 18);
    \u0275\u0275text(10, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 18);
    \u0275\u0275text(12, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function DeferredEyeExamsComponent_ng_template_11_div_17_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.getRefractionTypeName(ref_r3.refractionTypeID), ": ", ref_r3.refractionValue, " ");
  }
}
function DeferredEyeExamsComponent_ng_template_11_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "strong", 33);
    \u0275\u0275text(2, "\u064A\u0645\u064A\u0646:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeferredEyeExamsComponent_ng_template_11_div_17_div_1_span_3_Template, 2, 2, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exam_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getRightEyeRefractions(exam_r5));
  }
}
function DeferredEyeExamsComponent_ng_template_11_div_17_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.getRefractionTypeName(ref_r6.refractionTypeID), ": ", ref_r6.refractionValue, " ");
  }
}
function DeferredEyeExamsComponent_ng_template_11_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "strong", 33);
    \u0275\u0275text(2, "\u064A\u0633\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeferredEyeExamsComponent_ng_template_11_div_17_div_2_span_3_Template, 2, 2, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exam_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getLeftEyeRefractions(exam_r5));
  }
}
function DeferredEyeExamsComponent_ng_template_11_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, DeferredEyeExamsComponent_ng_template_11_div_17_div_1_Template, 4, 1, "div", 30)(2, DeferredEyeExamsComponent_ng_template_11_div_17_div_2_Template, 4, 1, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exam_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getRightEyeRefractions(exam_r5).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getLeftEyeRefractions(exam_r5).length);
  }
}
function DeferredEyeExamsComponent_ng_template_11_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
  }
}
function DeferredEyeExamsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 19)(5, "div", 21)(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 19)(11, "div", 21)(12, "span", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td", 19);
    \u0275\u0275template(17, DeferredEyeExamsComponent_ng_template_11_div_17_Template, 3, 2, "div", 24)(18, DeferredEyeExamsComponent_ng_template_11_ng_template_18_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 19)(21, "span", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 19)(24, "div", 26)(25, "button", 27);
    \u0275\u0275listener("click", function DeferredEyeExamsComponent_ng_template_11_Template_button_click_25_listener() {
      const exam_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditExam(exam_r5));
    });
    \u0275\u0275element(26, "i", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const exam_r5 = ctx.$implicit;
    const noRefractions_r7 = \u0275\u0275reference(19);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r5.applicantFileNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u064A\u0645\u064A\u0646: ", exam_r5.vision);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u064A\u0633\u0627\u0631: ", exam_r5.visionLeft);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u064A\u0645\u064A\u0646: ", exam_r5.colorTest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u064A\u0633\u0627\u0631: ", exam_r5.colorTestLeft);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", exam_r5.refractions == null ? null : exam_r5.refractions.length)("ngIfElse", noRefractions_r7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r3.getBadgeClass(exam_r5.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (exam_r5.result == null ? null : exam_r5.result.description) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
  }
}
function DeferredEyeExamsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.");
    \u0275\u0275elementEnd()();
  }
}
var DeferredEyeExamsComponent = class _DeferredEyeExamsComponent {
  examService;
  applicantService;
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
  tableHeight = "400px";
  selectedExam = null;
  applicantsCache = /* @__PURE__ */ new Map();
  refractionTypes = [];
  table;
  searchInput;
  constructor(examService, applicantService, toastr, cdr, modalService) {
    this.examService = examService;
    this.applicantService = applicantService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.loadEyeExams();
    this.loadRefractionTypes();
  }
  loadEyeExams() {
    this.loading = true;
    const filter = this.globalFilter || "";
    this.examService.getAllEyeExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (data) => {
        this.exams = data.items.sort((a, b) => (b.eyeExamID || 0) - (a.eyeExamID || 0));
        this.filteredExams = [...this.exams];
        this.totalRecords = data.totalCount;
        this.loading = false;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0639\u064A\u0648\u0646", "\u062E\u0637\u0623");
        this.loading = false;
      }
    });
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadEyeExams();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadEyeExams();
  }
  onFilterChange(event) {
    const value = event.target.value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadEyeExams();
  }
  ngAfterViewInit() {
    this.tableHeight = this.calculateTableHeight();
    this.cdr.detectChanges();
  }
  calculateTableHeight() {
    return window.innerHeight - 200 + "px";
  }
  onResize() {
    this.setTableHeight();
  }
  setTableHeight() {
    const screenHeight = window.innerHeight;
    const reservedSpace = 220;
    this.tableHeight = `${screenHeight - reservedSpace}px`;
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
    this.loadEyeExams();
  }
  getBadgeClass(result) {
    if (!result || !result.description)
      return "badge bg-secondary";
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
  // فتح نافذة تعديل الفحص عند الطلب فقط
  openEditExam(eyeExam) {
    if (!eyeExam.eyeExamID) {
      this.toastr.error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631", "\u062E\u0637\u0623");
      return;
    }
    this.loading = true;
    forkJoin({
      exam: this.examService.getEyeExamById(eyeExam.eyeExamID),
      refractions: this.examService.getRefractionsByEyeExamId(eyeExam.eyeExamID)
    }).subscribe({
      next: (responses) => {
        if (responses.exam.succeeded && responses.exam.data) {
          const refractionsFromExam = responses.exam.data.refractions || [];
          const refractionsFromAPI = responses.refractions.succeeded && responses.refractions.data ? responses.refractions.data : [];
          const examWithRefractions = __spreadProps(__spreadValues({}, responses.exam.data), {
            refractions: refractionsFromExam.length > 0 ? refractionsFromExam : refractionsFromAPI
          });
          const modalRef = this.modalService.open(EditEyeExam, {
            size: "lg",
            backdrop: "static",
            keyboard: false,
            centered: true
          });
          modalRef.componentInstance.exam = examWithRefractions;
          this.loading = false;
          modalRef.componentInstance.eyeExamUpdated.subscribe((updatedExam) => {
            if (updatedExam) {
              const index = this.exams.findIndex((e) => e.eyeExamID === updatedExam.eyeExamID);
              this.loadEyeExams();
            }
          });
        } else {
          this.loading = false;
          this.toastr.error(`\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0641\u062D\u0635: ${responses.exam.message}`, "\u062E\u0637\u0623");
        }
      },
      error: () => {
        this.loading = false;
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
      }
    });
  }
  // فتح تفاصيل الفحص عند الطلب فقط
  showDetails(eyeExam) {
    if (!eyeExam.eyeExamID) {
      this.toastr.error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u062D\u0635 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631", "\u062E\u0637\u0623");
      return;
    }
    this.loading = true;
    const applicantId$ = eyeExam.applicantId ? of(eyeExam.applicantId) : this.applicantService.getApplicantByFileNumber$(eyeExam.applicantFileNumber).pipe(map((applicant) => applicant.applicantID));
    applicantId$.pipe(switchMap((applicantId) => applicantId && eyeExam.eyeExamID ? forkJoin({
      exam: this.examService.getEyeExamById(eyeExam.eyeExamID),
      patientRefractions: this.examService.getRefractionsByApplicantId(applicantId)
    }) : of({ exam: { data: null }, patientRefractions: [] }))).subscribe({
      next: ({ exam, patientRefractions }) => {
        const modalRef = this.modalService.open(EyeExamDetails, { size: "lg", centered: true });
        modalRef.componentInstance.exam = exam.data;
        modalRef.componentInstance.refractions = patientRefractions;
        modalRef.componentInstance.showRefractionsOnly = false;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "\u062E\u0637\u0623");
      }
    });
  }
  // مساعدة لعرض معلومات المنتسب
  getApplicantName(exam) {
    const cached = this.applicantsCache.get(exam.applicantFileNumber);
    return cached?.fullName || "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...";
  }
  getApplicantJob(exam) {
    const cached = this.applicantsCache.get(exam.applicantFileNumber);
    return cached?.job || "";
  }
  loadApplicantsInfo() {
    const fileNumbers = [...new Set(this.exams.map((exam) => exam.applicantFileNumber))];
    fileNumbers.forEach((fileNumber) => {
      if (!fileNumber)
        return;
      if (!this.applicantsCache.has(fileNumber)) {
        this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
          next: (applicant) => this.applicantsCache.set(fileNumber, applicant),
          error: () => this.applicantsCache.set(fileNumber, { fullName: "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631", job: "" })
        });
      }
    });
  }
  getRightEyeRefractions(exam) {
    return exam.refractions?.filter((r) => !r.isLeft) || [];
  }
  getLeftEyeRefractions(exam) {
    return exam.refractions?.filter((r) => r.isLeft) || [];
  }
  getRefractionTypeName(refractionTypeID) {
    const type = this.refractionTypes.find((t) => t.refractionTypeID === refractionTypeID);
    return type?.description || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
  }
  loadRefractionTypes() {
    this.examService.getRefractionTypes().subscribe({
      next: (response) => {
        if (response.succeeded && response.data?.items) {
          this.refractionTypes = response.data.items;
        }
      },
      error: () => {
        this.refractionTypes = [
          { refractionTypeID: 1, description: "\u0642\u0635\u0631 \u0646\u0638\u0631" },
          { refractionTypeID: 2, description: "\u0637\u0648\u0644 \u0646\u0638\u0631" },
          { refractionTypeID: 3, description: "\u0627\u0633\u062A\u062C\u0645\u0627\u062A\u064A\u0632\u0645" }
        ];
      }
    });
  }
  static \u0275fac = function DeferredEyeExamsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredEyeExamsComponent)(\u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeferredEyeExamsComponent, selectors: [["app-deferred-eye-exams"]], viewQuery: function DeferredEyeExamsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, hostBindings: function DeferredEyeExamsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function DeferredEyeExamsComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 14, vars: 8, consts: [["searchInput", ""], ["table", ""], ["noRefractions", ""], [1, "user-header-section", "p-3", "container-fluid"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "custom-table", "my-3", 3, "value", "rows", "totalRecords", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [1, "text-center", 2, "min-width", "100px"], [1, "text-center", 2, "min-width", "120px"], [1, "text-center", 2, "min-width", "180px"], [1, "text-center", 2, "min-width", "80px"], [1, "text-center", "align-middle"], [1, "fw-bold", "small"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-1"], [1, "badge", "bg-primary-subtle", "text-primary-emphasis", "fs-8"], [1, "badge", "bg-secondary-subtle", "text-secondary-emphasis", "fs-8"], ["class", "refractions-display small d-flex flex-column justify-content-center align-items-center", 4, "ngIf", "ngIfElse"], [1, "small", "d-inline-block", 3, "ngClass"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center", "gap-2"], ["type", "button", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-pen-to-square"], [1, "refractions-display", "small", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["class", "d-flex flex-wrap justify-content-center align-items-center gap-1 mb-1", 4, "ngIf"], ["class", "d-flex flex-wrap justify-content-center align-items-center gap-1", 4, "ngIf"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-1", "mb-1"], [1, "text-muted", "fs-9"], ["class", "badge bg-info text-dark fs-8", 4, "ngFor", "ngForOf"], [1, "badge", "bg-info", "text-dark", "fs-8"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-1"], ["class", "badge bg-secondary fs-8", 4, "ngFor", "ngForOf"], [1, "badge", "bg-secondary", "fs-8"], [1, "text-muted", "fs-9", "text-center"], ["colspan", "8", 1, "text-center", "py-3", "align-middle"]], template: function DeferredEyeExamsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "app-reset-filters-button", 6);
      \u0275\u0275listener("reset", function DeferredEyeExamsComponent_Template_app_reset_filters_button_reset_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 7)(5, "input", 8, 0);
      \u0275\u0275listener("input", function DeferredEyeExamsComponent_Template_input_input_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p-table", 10, 1);
      \u0275\u0275template(10, DeferredEyeExamsComponent_ng_template_10_Template, 13, 0, "ng-template", 11)(11, DeferredEyeExamsComponent_ng_template_11_Template, 27, 9, "ng-template", 12)(12, DeferredEyeExamsComponent_ng_template_12_Template, 3, 0, "ng-template", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-paginator", 14);
      \u0275\u0275listener("pageChange", function DeferredEyeExamsComponent_Template_app_paginator_pageChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function DeferredEyeExamsComponent_Template_app_paginator_pageSizeChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.exams)("rows", ctx.rowsPerPage)("totalRecords", ctx.totalRecords)("tableStyle", \u0275\u0275pureFunction0(7, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ButtonModule, PrimeTemplate, FormsModule, TableModule, Table, PaginatorComponent, TooltipModule, Tooltip, ResetFiltersButtonComponent], styles: ["\n\n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n  .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n  .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n  .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n  .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n  .p-datatable .p-datatable-tbody .badge:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-success, \n  .p-datatable .p-datatable-tbody .badge.bg-primary, \n  .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-warning, \n  .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #B9A779 !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6B1F2A !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-secondary, \n  .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3D3A3B !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge .text-primary-emphasis {\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n  .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n  .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n  .refractions-display .badge {\n  background-color: white !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-medium) !important;\n  font-weight: 600 !important;\n  margin: 0.125rem !important;\n}\n.fs-8[_ngcontent-%COMP%], \n.fs-9[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n}\n.highlight-blue[_ngcontent-%COMP%] {\n  background-color: var(--primary-dark) !important;\n  color: #fff !important;\n  padding: 0 2px !important;\n  border-radius: 3px !important;\n}\n.icon[_ngcontent-%COMP%] {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary-medium) !important;\n  transform: scale(1.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=deferred-eye-exams.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredEyeExamsComponent, [{
    type: Component,
    args: [{ selector: "app-deferred-eye-exams", standalone: true, imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, TooltipModule, ResetFiltersButtonComponent], template: `<div class="user-header-section p-3 container-fluid">\r
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
    [rows]="rowsPerPage"\r
    [totalRecords]="totalRecords"\r
    class="custom-table my-3"\r
    [tableStyle]="{ 'min-width': '50rem' }"\r
  >\r
    <ng-template pTemplate="header">\r
      <tr>\r
        <th style="min-width:100px" class="text-center">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</th>\r
        <th style="min-width:120px" class="text-center">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629</th>\r
        <th style="min-width:120px" class="text-center">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646</th>\r
        <th style="min-width:180px" class="text-center">\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A</th>\r
        <th style="min-width:80px" class="text-center">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</th>\r
        <th style="min-width:80px" class="text-center">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template pTemplate="body" let-exam>\r
      <tr>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small ">{{ exam.applicantFileNumber }}</span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="d-flex flex-column justify-content-center align-items-center gap-1">\r
            <span class="badge bg-primary-subtle text-primary-emphasis fs-8">\u064A\u0645\u064A\u0646: {{ exam.vision }}</span>\r
            <span class="badge bg-secondary-subtle text-secondary-emphasis fs-8">\u064A\u0633\u0627\u0631: {{ exam.visionLeft }}</span>\r
          </div>\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="d-flex flex-column justify-content-center align-items-center gap-1">\r
            <span class="badge bg-primary-subtle text-primary-emphasis fs-8">\u064A\u0645\u064A\u0646: {{ exam.colorTest }}</span>\r
            <span class="badge bg-secondary-subtle text-secondary-emphasis fs-8">\u064A\u0633\u0627\u0631: {{ exam.colorTestLeft }}</span>\r
          </div>\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="refractions-display small d-flex flex-column justify-content-center align-items-center" *ngIf="exam.refractions?.length; else noRefractions">\r
            <div *ngIf="getRightEyeRefractions(exam).length" class="d-flex flex-wrap justify-content-center align-items-center gap-1 mb-1">\r
              <strong class="text-muted fs-9">\u064A\u0645\u064A\u0646:</strong>\r
              <span *ngFor="let ref of getRightEyeRefractions(exam)" class="badge bg-info text-dark fs-8">\r
                {{ getRefractionTypeName(ref.refractionTypeID) }}: {{ ref.refractionValue }}\r
              </span>\r
            </div>\r
            <div *ngIf="getLeftEyeRefractions(exam).length" class="d-flex flex-wrap justify-content-center align-items-center gap-1">\r
              <strong class="text-muted fs-9">\u064A\u0633\u0627\u0631:</strong>\r
              <span *ngFor="let ref of getLeftEyeRefractions(exam)" class="badge bg-secondary fs-8">\r
                {{ getRefractionTypeName(ref.refractionTypeID) }}: {{ ref.refractionValue }}\r
              </span>\r
            </div>\r
          </div>\r
          <ng-template #noRefractions>\r
            <div class="text-muted fs-9 text-center">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A</div>\r
          </ng-template>\r
        </td>\r
        <td class="text-center align-middle">\r
          <span [ngClass]="getBadgeClass(exam.result)" class="small d-inline-block">\r
            {{ exam.result?.description || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
          </span>\r
        </td>\r
        <td class="text-center align-middle">\r
          <div class="d-flex flex-row justify-content-center align-items-center gap-2">\r
            <!-- \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0645\u0639\u0637\u0644\u0629 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A -->\r
            <button \r
              type="button" \r
              class="btn-icon-action" \r
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
        <td colspan="8" class="text-center py-3 align-middle">\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.</td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
\r
  <app-paginator\r
    [totalRecords]="totalRecords"\r
    [pageSize]="rowsPerPage"\r
    [currentPage]="page"\r
    (pageChange)="onPageChange($event)"\r
    (pageSizeChange)="onPageSizeChange($event)"\r
  ></app-paginator>\r
</div>`, styles: ["/* src/app/features/doctor/components/eye-doctor.component/deferred-eye-exams.component/deferred-eye-exams.component.scss */\n.user-header-section {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.search-wrapper {\n  position: relative;\n  width: 400px;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n::ng-deep .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  position: relative !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge:hover {\n  transform: translateY(-1px) !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-success,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #B9A779 !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6B1F2A !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary,\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3D3A3B !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge .text-primary-emphasis {\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n::ng-deep .refractions-display .badge {\n  background-color: white !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-medium) !important;\n  font-weight: 600 !important;\n  margin: 0.125rem !important;\n}\n.fs-8,\n.fs-9 {\n  font-size: 0.75rem !important;\n}\n.highlight-blue {\n  background-color: var(--primary-dark) !important;\n  color: #fff !important;\n  padding: 0 2px !important;\n  border-radius: 3px !important;\n}\n.icon {\n  transition: color 0.3s, transform 0.2s;\n}\n.icon:hover {\n  color: var(--primary-medium) !important;\n  transform: scale(1.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=deferred-eye-exams.component.css.map */\n"] }]
  }], () => [{ type: EyeExamService }, { type: ApplicantService }, { type: ToastrService }, { type: ChangeDetectorRef }, { type: NgbModal }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeferredEyeExamsComponent, { className: "DeferredEyeExamsComponent", filePath: "src/app/features/doctor/components/eye-doctor.component/deferred-eye-exams.component/deferred-eye-exams.component.ts", lineNumber: 27 });
})();
export {
  DeferredEyeExamsComponent
};
//# sourceMappingURL=chunk-K7VIPGZI.js.map
