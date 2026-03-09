import {
  NgbActiveModal,
  NgbModal
} from "./chunk-ZUITLSD7.js";
import {
  HEALTH_STATUS_OPTIONS,
  OTHER_OPTION_VALUE,
  normalizeHealthStatus,
  resolveHealthStatusValue
} from "./chunk-7R7W7ON6.js";
import {
  EyeExamService
} from "./chunk-T2JR7AGY.js";
import "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
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
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import {
  ApplicantService
} from "./chunk-LBNMWMAA.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-V2S2U4KH.js";
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
  ɵɵclassMap,
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
function EditEyeExam_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("vision"), " ");
  }
}
function EditEyeExam_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("visionLeft"), " ");
  }
}
function EditEyeExam_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 41);
    \u0275\u0275elementStart(2, "label", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const \u0275$index_60_r3 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTestEdit_" + \u0275$index_60_r3)("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTestEdit_" + \u0275$index_60_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.label);
  }
}
function EditEyeExam_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "input", 43);
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 44);
    \u0275\u0275elementStart(2, "label", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const \u0275$index_80_r5 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "colorTestLeftEdit_" + \u0275$index_80_r5)("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "colorTestLeftEdit_" + \u0275$index_80_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function EditEyeExam_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "input", 45);
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_div_77_div_9_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.refractionTypeID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.description, " ");
  }
}
function EditEyeExam_div_77_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 3)(3, "div", 57)(4, "label", 5);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 58);
    \u0275\u0275template(7, EditEyeExam_div_77_div_9_option_7_Template, 2, 2, "option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 57)(9, "label", 5);
    \u0275\u0275text(10, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 60)(13, "button", 61);
    \u0275\u0275listener("click", function EditEyeExam_div_77_div_9_Template_button_click_13_listener() {
      const i_r9 = \u0275\u0275restoreView(_r7).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeRefraction("rightEye", i_r9));
    });
    \u0275\u0275element(14, "i", 62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r9);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.refractionTypes);
  }
}
function EditEyeExam_div_77_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "h6", 48);
    \u0275\u0275text(3, "\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function EditEyeExam_div_77_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRefraction("rightEye"));
    });
    \u0275\u0275element(5, "i", 50);
    \u0275\u0275text(6, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "div", 52);
    \u0275\u0275template(9, EditEyeExam_div_77_div_9_Template, 15, 2, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EditEyeExam_div_77_div_10_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.getRefractions("rightEye").controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getRefractions("rightEye").length);
  }
}
function EditEyeExam_div_78_div_9_option_9_Template(rf, ctx) {
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
function EditEyeExam_div_78_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 3)(3, "div", 57)(4, "label", 5);
    \u0275\u0275text(5, "\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 58)(7, "option", 66);
    \u0275\u0275text(8, "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EditEyeExam_div_78_div_9_option_9_Template, 2, 2, "option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 57)(11, "label", 5);
    \u0275\u0275text(12, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 60)(15, "button", 61);
    \u0275\u0275listener("click", function EditEyeExam_div_78_div_9_Template_button_click_15_listener() {
      const i_r13 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeRefraction("leftEye", i_r13));
    });
    \u0275\u0275element(16, "i", 62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r13);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.refractionTypes);
  }
}
function EditEyeExam_div_78_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, ' \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0645\u0636\u0627\u0641\u0629. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 "\u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631" \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0646\u0643\u0633\u0627\u0631. ');
    \u0275\u0275elementEnd();
  }
}
function EditEyeExam_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "h6", 48);
    \u0275\u0275text(3, "\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function EditEyeExam_div_78_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRefraction("leftEye"));
    });
    \u0275\u0275element(5, "i", 50);
    \u0275\u0275text(6, " \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "div", 52);
    \u0275\u0275template(9, EditEyeExam_div_78_div_9_Template, 17, 2, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EditEyeExam_div_78_div_10_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.getRefractions("leftEye").controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getRefractions("leftEye").length);
  }
}
function EditEyeExam_option_88_Template(rf, ctx) {
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
function EditEyeExam_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getErrorMessage("resultID"), " ");
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
      vision: [vision, [Validators.required, Validators.min(0), Validators.max(10)]],
      visionLeft: [visionLeft, [Validators.required, Validators.min(0), Validators.max(10)]],
      colorTest: [colorTestNormalized.status, Validators.required],
      colorTestOther: [colorTestNormalized.other],
      colorTestLeft: [colorTestLeftNormalized.status, Validators.required],
      colorTestLeftOther: [colorTestLeftNormalized.other],
      refractiveError: [this.exam.refractiveError || ""],
      // حقل قديم - للتوافق
      worstRefractionRight: [worstRefractionRight || ""],
      worstRefractionLeft: [worstRefractionLeft || ""],
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
          refractionTypeID: [refraction.refractionTypeID],
          refractionValue: [refraction.refractionValue]
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
          refractionTypeID: [refraction.refractionTypeID],
          refractionValue: [refraction.refractionValue]
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
      refractionTypeID: [null],
      refractionValue: [null]
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
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629", "\u062A\u0646\u0628\u064A\u0647");
      return;
    }
    const leftEyeRefractions = this.examForm.get("leftEye.refractions").value;
    const rightEyeRefractions = this.examForm.get("rightEye.refractions").value;
    const v = this.examForm.value;
    const updatedExam = {
      eyeExamID: this.exam.eyeExamID,
      applicantFileNumber: this.exam.applicantFileNumber,
      doctorID: this.exam.doctorID,
      vision: v.vision != null && v.vision !== "" ? String(v.vision).trim() : this.exam.vision || "",
      visionLeft: v.visionLeft != null && v.visionLeft !== "" ? String(v.visionLeft).trim() : this.exam.visionLeft || "",
      colorTest: resolveHealthStatusValue(v.colorTest, v.colorTestOther),
      colorTestLeft: resolveHealthStatusValue(v.colorTestLeft, v.colorTestLeftOther),
      refractiveError: ((v.refractiveError != null ? String(v.refractiveError) : "") || "").trim(),
      worstRefractionRight: ((v.worstRefractionRight != null ? String(v.worstRefractionRight) : "") || "").trim() || (this.exam.worstRefractionRight ?? ""),
      worstRefractionLeft: ((v.worstRefractionLeft != null ? String(v.worstRefractionLeft) : "") || "").trim() || (this.exam.worstRefractionLeft ?? ""),
      otherDiseases: ((v.otherDiseases != null ? String(v.otherDiseases) : "") || "").trim(),
      resultID: Number(v.resultID) || this.exam.resultID,
      reason: ((v.reason != null ? String(v.reason) : "") || "").trim()
    };
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
  // ---------------------- VALIDATION HELPERS ----------------------
  getErrorMessage(controlName) {
    const control = this.examForm.get(controlName);
    if (control?.invalid && control?.touched) {
      if (control.errors?.["required"]) {
        return "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
      }
      if (controlName === "vision" || controlName === "visionLeft") {
        if (control.errors?.["min"] || control.errors?.["max"]) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u064A\u0646 0 \u0648 10";
        }
      }
    }
    return "";
  }
  isFieldValid(controlName) {
    const control = this.examForm.get(controlName);
    return !!(control?.valid && control?.touched);
  }
  isFieldInvalid(controlName) {
    const control = this.examForm.get(controlName);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function EditEyeExam_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEyeExam)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EyeExamService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEyeExam, selectors: [["app-edit-eye-exam"]], inputs: { exam: "exam" }, outputs: { eyeExamUpdated: "eyeExamUpdated", dialogClosed: "dialogClosed" }, decls: 97, vars: 31, consts: [["title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A", "subtitle", "\u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A", "icon", "pi pi-pencil", "width", "90rem", 3, "hide", "visible", "useDefaultFooter"], [1, "exam-form", 3, "ngSubmit", "formGroup"], [1, "section-title"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "input-group-q"], [1, "input-group-text"], ["type", "number", "formControlName", "vision", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "number", "formControlName", "visionLeft", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645", 1, "form-control"], [1, "section-title", "mt-4"], [1, "form-label", "mb-2"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "form-check", "form-check-inline"], [1, "mt-2"], [1, "text-danger"], [1, "refraction-choice-group"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightNotImportantEdit", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightNotImportantEdit", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionRight", "id", "worstRefractionRightImportantEdit", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionRightImportantEdit", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftNotImportantEdit", "value", "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftNotImportantEdit", 1, "form-check-label"], ["type", "radio", "formControlName", "worstRefractionLeft", "id", "worstRefractionLeftImportantEdit", "value", "\u0645\u0647\u0645\u0629", 1, "form-check-input"], ["for", "worstRefractionLeftImportantEdit", 1, "form-check-label"], [1, "eye-toggle-actions", "mt-2", "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "refraction-sections"], ["class", "card mb-3", 4, "ngIf"], [1, "mb-3"], ["formControlName", "otherDiseases", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0623\u062E\u0631\u0649 \u0625\u0646 \u0648\u062C\u062F\u062A", 1, "form-control"], [1, "row", "mb-3"], ["formControlName", "resultID", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "reason", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0633\u0628\u0628 \u0625\u0630\u0627 \u0648\u062C\u062F", 1, "form-control"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A", "icon", "pi pi-save", "severity", "primary", 3, "onClick", "disabled"], [1, "invalid-feedback", "d-block"], [1, "pi", "pi-exclamation-circle", "me-1"], ["type", "radio", "formControlName", "colorTest", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], ["type", "text", "formControlName", "colorTestOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], ["type", "radio", "formControlName", "colorTestLeft", 1, "form-check-input", 3, "id", "value"], ["type", "text", "formControlName", "colorTestLeftOther", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", 1, "form-control"], [1, "card", "mb-3"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "pi", "pi-plus", "me-1"], ["formGroupName", "rightEye", 1, "card-body"], ["formArrayName", "refractions"], ["class", "card mb-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "text-muted small", 4, "ngIf"], [1, "card", "mb-3", 3, "formGroupName"], [1, "card-body"], [1, "col-md-5"], ["formControlName", "refractionTypeID", 1, "form-select"], ["type", "number", "formControlName", "refractionValue", 1, "form-control"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-danger", "mt-4", 3, "click"], [1, "pi", "pi-trash"], [3, "value"], [1, "text-muted", "small"], ["formGroupName", "leftEye", 1, "card-body"], ["value", ""]], template: function EditEyeExam_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 0);
      \u0275\u0275listener("hide", function EditEyeExam_Template_app_dialog_wrapper_hide_0_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function EditEyeExam_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "h6", 2);
      \u0275\u0275text(3, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
      \u0275\u0275text(7, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 R:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10, "/10");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, EditEyeExam_div_12_Template, 3, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 4)(14, "label", 5);
      \u0275\u0275text(15, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 L:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 6)(17, "span", 7);
      \u0275\u0275text(18, "/10");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, EditEyeExam_div_20_Template, 3, 1, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "h6", 11);
      \u0275\u0275text(22, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 3)(24, "div", 4)(25, "label", 12);
      \u0275\u0275text(26, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 R:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13);
      \u0275\u0275repeaterCreate(28, EditEyeExam_For_29_Template, 4, 4, "div", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, EditEyeExam_Conditional_30_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 4)(32, "label", 12);
      \u0275\u0275text(33, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 L:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 13);
      \u0275\u0275repeaterCreate(35, EditEyeExam_For_36_Template, 4, 4, "div", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(37, EditEyeExam_Conditional_37_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "h6", 11);
      \u0275\u0275text(39, "\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 3)(41, "div", 4)(42, "label", 12);
      \u0275\u0275text(43, "R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
      \u0275\u0275elementStart(44, "span", 16);
      \u0275\u0275text(45, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 17)(47, "div", 14);
      \u0275\u0275element(48, "input", 18);
      \u0275\u0275elementStart(49, "label", 19);
      \u0275\u0275text(50, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 14);
      \u0275\u0275element(52, "input", 20);
      \u0275\u0275elementStart(53, "label", 21);
      \u0275\u0275text(54, "\u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 4)(56, "label", 12);
      \u0275\u0275text(57, "L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 ");
      \u0275\u0275elementStart(58, "span", 16);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 17)(61, "div", 14);
      \u0275\u0275element(62, "input", 22);
      \u0275\u0275elementStart(63, "label", 23);
      \u0275\u0275text(64, "\u063A\u064A\u0631 \u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 14);
      \u0275\u0275element(66, "input", 24);
      \u0275\u0275elementStart(67, "label", 25);
      \u0275\u0275text(68, "\u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "div", 26)(70, "button", 27);
      \u0275\u0275listener("click", function EditEyeExam_Template_button_click_70_listener() {
        return ctx.toggleRightEye();
      });
      \u0275\u0275element(71, "i");
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 27);
      \u0275\u0275listener("click", function EditEyeExam_Template_button_click_73_listener() {
        return ctx.toggleLeftEye();
      });
      \u0275\u0275element(74, "i");
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 28);
      \u0275\u0275template(77, EditEyeExam_div_77_Template, 11, 2, "div", 29)(78, EditEyeExam_div_78_Template, 11, 2, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 30)(80, "label", 5);
      \u0275\u0275text(81, "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "textarea", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 32)(84, "div", 4)(85, "label", 5);
      \u0275\u0275text(86, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "select", 33);
      \u0275\u0275template(88, EditEyeExam_option_88_Template, 2, 2, "option", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(89, EditEyeExam_div_89_Template, 3, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 4)(91, "label", 5);
      \u0275\u0275text(92, "\u0627\u0644\u0633\u0628\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "textarea", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 36)(95, "p-button", 37);
      \u0275\u0275listener("onClick", function EditEyeExam_Template_p_button_onClick_95_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p-button", 38);
      \u0275\u0275listener("onClick", function EditEyeExam_Template_p_button_onClick_96_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_12_0;
      \u0275\u0275property("visible", true)("useDefaultFooter", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.examForm);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("vision"))("is-valid", ctx.isFieldValid("vision"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("vision"));
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("visionLeft"))("is-valid", ctx.isFieldValid("visionLeft"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("visionLeft"));
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.healthStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_10_0 = ctx.examForm.get("colorTest")) == null ? null : tmp_10_0.value) === ctx.otherOptionValue ? 30 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.healthStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_12_0 = ctx.examForm.get("colorTestLeft")) == null ? null : tmp_12_0.value) === ctx.otherOptionValue ? 37 : -1);
      \u0275\u0275advance(34);
      \u0275\u0275classMap(ctx.showRightEye ? "pi pi-eye-slash" : "pi pi-eye");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showRightEye ? "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649" : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649", " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.showLeftEye ? "pi pi-eye-slash" : "pi pi-eye");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showLeftEye ? "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649" : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showRightEye);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLeftEye);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("resultID"))("is-valid", ctx.isFieldValid("resultID"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.results);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getErrorMessage("resultID"));
      \u0275\u0275advance(6);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.examForm.invalid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, DialogWrapperComponent, ButtonModule, Button], styles: ["\n\n.exam-form[_ngcontent-%COMP%] {\n  direction: rtl;\n  overflow: visible;\n}\n.input-group-q[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  flex-direction: row-reverse;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.form-check[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 1.1rem;\n  height: 1.1rem;\n  flex-shrink: 0;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  font-weight: 500;\n}\n.form-check-inline[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  margin-inline-end: 1rem;\n}\n.form-check-inline[_ngcontent-%COMP%]:last-child {\n  margin-inline-end: 0;\n}\n.refraction-choice-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.eye-toggle-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(5, 66, 57, 0.14);\n  border-radius: 12px;\n  box-shadow: none;\n}\n.card-header[_ngcontent-%COMP%] {\n  background: rgba(5, 66, 57, 0.05);\n  border-bottom: 1px solid rgba(5, 66, 57, 0.1);\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=edit-eye-exam.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEyeExam, [{
    type: Component,
    args: [{ selector: "app-edit-eye-exam", imports: [CommonModule, ReactiveFormsModule, DialogWrapperComponent, ButtonModule], template: `<app-dialog-wrapper\r
  [visible]="true"\r
  title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A"\r
  subtitle="\u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A"\r
  icon="pi pi-pencil"\r
  width="90rem"\r
  [useDefaultFooter]="false"\r
  (hide)="cancel()">\r
  <form [formGroup]="examForm" (ngSubmit)="onSubmit()" class="exam-form">\r
\r
      <!-- \u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 -->\r
      <h6 class="section-title">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629</h6>\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 R:</label>\r
          <div class="input-group-q">\r
            <span class="input-group-text">/10</span>\r
            <input\r
              type="number"\r
              class="form-control"\r
              formControlName="vision"\r
              placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645"\r
              [class.is-invalid]="isFieldInvalid('vision')"\r
              [class.is-valid]="isFieldValid('vision')" />\r
          </div>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('vision')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('vision') }}\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 L:</label>\r
          <div class="input-group-q">\r
            <span class="input-group-text">/10</span>\r
            <input\r
              type="number"\r
              class="form-control"\r
              formControlName="visionLeft"\r
              placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645"\r
              [class.is-invalid]="isFieldInvalid('visionLeft')"\r
              [class.is-valid]="isFieldValid('visionLeft')" />\r
          </div>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('visionLeft')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('visionLeft') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 -->\r
      <h6 class="section-title mt-4">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646</h6>\r
      <div class="row g-3">\r
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
      <!-- \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 -->\r
      <h6 class="section-title mt-4">\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</h6>\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">R: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="refraction-choice-group">\r
            <div class="form-check form-check-inline">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                formControlName="worstRefractionRight"\r
                id="worstRefractionRightNotImportantEdit"\r
                value="\u063A\u064A\u0631 \u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionRightNotImportantEdit">\u063A\u064A\u0631 \u0645\u0647\u0645\u0629</label>\r
            </div>\r
            <div class="form-check form-check-inline">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                formControlName="worstRefractionRight"\r
                id="worstRefractionRightImportantEdit"\r
                value="\u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionRightImportantEdit">\u0645\u0647\u0645\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label mb-2">L: \u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 <span class="text-danger">*</span></label>\r
          <div class="refraction-choice-group">\r
            <div class="form-check form-check-inline">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                formControlName="worstRefractionLeft"\r
                id="worstRefractionLeftNotImportantEdit"\r
                value="\u063A\u064A\u0631 \u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionLeftNotImportantEdit">\u063A\u064A\u0631 \u0645\u0647\u0645\u0629</label>\r
            </div>\r
            <div class="form-check form-check-inline">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                formControlName="worstRefractionLeft"\r
                id="worstRefractionLeftImportantEdit"\r
                value="\u0645\u0647\u0645\u0629" />\r
              <label class="form-check-label" for="worstRefractionLeftImportantEdit">\u0645\u0647\u0645\u0629</label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u0623\u0632\u0631\u0627\u0631 \u0625\u0638\u0647\u0627\u0631/\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0648\u0646 -->\r
      <div class="eye-toggle-actions mt-2 mb-3">\r
        <button type="button" class="btn btn-outline-primary" (click)="toggleRightEye()">\r
          <i [class]="showRightEye ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>\r
          {{ showRightEye ? '\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649' }}\r
        </button>\r
        <button type="button" class="btn btn-outline-primary" (click)="toggleLeftEye()">\r
          <i [class]="showLeftEye ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>\r
          {{ showLeftEye ? '\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649' }}\r
        </button>\r
      </div>\r
\r
      <!-- \u0642\u0633\u0645 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 -->\r
      <div class="refraction-sections">\r
        <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649 -->\r
        <div class="card mb-3" *ngIf="showRightEye">\r
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
                      <label class="form-label">\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</label>\r
                      <select class="form-select" formControlName="refractionTypeID">\r
                        <option *ngFor="let type of refractionTypes" [value]="type.refractionTypeID">\r
                          {{ type.description }}\r
                        </option>\r
                      </select>\r
                    </div>\r
\r
                    <div class="col-md-5">\r
                      <label class="form-label">\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</label>\r
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
        <!-- \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649 -->\r
        <div class="card mb-3" *ngIf="showLeftEye">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">\u0641\u062D\u0635 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631 - \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</h6>\r
            <button type="button" class="btn btn-sm btn-primary" (click)="addRefraction('leftEye')">\r
              <i class="pi pi-plus me-1"></i>\r
              \u0625\u0636\u0627\u0641\u0629 \u0627\u0646\u0643\u0633\u0627\u0631\r
            </button>\r
          </div>\r
          <div class="card-body" formGroupName="leftEye">\r
            <div formArrayName="refractions">\r
              <div class="card mb-3" *ngFor="let refraction of getRefractions('leftEye').controls; let i=index"\r
                [formGroupName]="i">\r
                <div class="card-body">\r
                  <div class="row g-3">\r
                    <div class="col-md-5">\r
                      <label class="form-label">\u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</label>\r
                      <select class="form-select" formControlName="refractionTypeID">\r
                        <option value="">\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</option>\r
                        <option *ngFor="let type of refractionTypes" [value]="type.refractionTypeID">\r
                          {{ type.description }}\r
                        </option>\r
                      </select>\r
                    </div>\r
\r
                    <div class="col-md-5">\r
                      <label class="form-label">\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</label>\r
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
          <select\r
            class="form-select"\r
            formControlName="resultID"\r
            [class.is-invalid]="isFieldInvalid('resultID')"\r
            [class.is-valid]="isFieldValid('resultID')">\r
            <option *ngFor="let r of results" [value]="r.resultID">\r
              {{ r.description }}\r
            </option>\r
          </select>\r
          <div class="invalid-feedback d-block" *ngIf="getErrorMessage('resultID')">\r
            <i class="pi pi-exclamation-circle me-1"></i>{{ getErrorMessage('resultID') }}\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label">\u0627\u0644\u0633\u0628\u0628</label>\r
          <textarea class="form-control" formControlName="reason" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u0633\u0628\u0628 \u0625\u0630\u0627 \u0648\u062C\u062F"></textarea>\r
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
      (onClick)="cancel()"></p-button>\r
    <p-button\r
      label="\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A"\r
      icon="pi pi-save"\r
      severity="primary"\r
      [disabled]="examForm.invalid"\r
      (onClick)="onSubmit()"></p-button>\r
  </div>\r
</app-dialog-wrapper>`, styles: ["/* src/app/features/doctor/components/eye-doctor.component/edit-eye-exam/edit-eye-exam.scss */\n.exam-form {\n  direction: rtl;\n  overflow: visible;\n}\n.input-group-q {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  flex-direction: row-reverse;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.form-check {\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.form-check-input {\n  margin: 0;\n  width: 1.1rem;\n  height: 1.1rem;\n  flex-shrink: 0;\n}\n.form-check-label {\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  font-weight: 500;\n}\n.form-check-inline {\n  margin-inline-start: 0;\n  margin-inline-end: 1rem;\n}\n.form-check-inline:last-child {\n  margin-inline-end: 0;\n}\n.refraction-choice-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.eye-toggle-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.section-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  margin: 1.25rem 0 0.9rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.15);\n}\n.card {\n  border: 1px solid rgba(5, 66, 57, 0.14);\n  border-radius: 12px;\n  box-shadow: none;\n}\n.card-header {\n  background: rgba(5, 66, 57, 0.05);\n  border-bottom: 1px solid rgba(5, 66, 57, 0.1);\n}\n.form-control,\n.form-select {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=edit-eye-exam.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EyeExamService }, { type: ToastrService }, { type: NgbModal }], { eyeExamUpdated: [{
    type: Output
  }], dialogClosed: [{
    type: Output
  }], exam: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEyeExam, { className: "EditEyeExam", filePath: "src/app/features/doctor/components/eye-doctor.component/edit-eye-exam/edit-eye-exam.ts", lineNumber: 24 });
})();

// src/app/features/doctor/components/eye-doctor.component/eye-exam-details/eye-exam-details.ts
function EyeExamDetails_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refraction_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getRefractionTypeName(refraction_r2.refractionTypeID));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(refraction_r2.refractionValue || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function EyeExamDetails_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, EyeExamDetails_div_34_div_1_Template, 5, 2, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.rightEyeRefractions);
  }
}
function EyeExamDetails_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
    \u0275\u0275elementEnd();
  }
}
function EyeExamDetails_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refraction_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getRefractionTypeName(refraction_r4.refractionTypeID));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(refraction_r4.refractionValue || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function EyeExamDetails_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, EyeExamDetails_div_39_div_1_Template, 5, 2, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.leftEyeRefractions);
  }
}
function EyeExamDetails_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd();
  }
}
function EyeExamDetails_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.exam.reason);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EyeExamDetails, selectors: [["app-eye-exam-details"]], inputs: { exam: "exam", showRefractionsOnly: "showRefractionsOnly" }, decls: 49, vars: 23, consts: [["noRight", ""], ["noLeft", ""], ["title", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A", "icon", "pi pi-eye", "width", "70rem", 3, "hide", "visible", "subtitle", "useDefaultFooter"], [1, "eye-exam-details-body"], [1, "details-grid"], [1, "info-card"], [1, "details-section-title"], [1, "inline-values"], [1, "info-chip"], [1, "info-value", "result-badge"], ["class", "refraction-list", 4, "ngIf", "ngIfElse"], [1, "info-value"], [1, "info-value", "mt-2"], ["dialog-footer", "", 1, "dialog-actions"], ["label", "\u0625\u063A\u0644\u0627\u0642", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], [1, "refraction-list"], ["class", "refraction-item", 4, "ngFor", "ngForOf"], [1, "refraction-item"], [1, "no-data-message"]], template: function EyeExamDetails_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-dialog-wrapper", 2);
      \u0275\u0275listener("hide", function EyeExamDetails_Template_app_dialog_wrapper_hide_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h6", 6);
      \u0275\u0275text(5, "\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "span", 8);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 5)(12, "h6", 6);
      \u0275\u0275text(13, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "span", 8);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 8);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 5)(20, "h6", 6);
      \u0275\u0275text(21, "\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7)(23, "span", 8);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 8);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 5)(28, "h6", 6);
      \u0275\u0275text(29, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 9);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "h6", 6);
      \u0275\u0275text(33, "\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, EyeExamDetails_div_34_Template, 2, 1, "div", 10)(35, EyeExamDetails_ng_template_35_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(37, "h6", 6);
      \u0275\u0275text(38, "\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, EyeExamDetails_div_39_Template, 2, 1, "div", 10)(40, EyeExamDetails_ng_template_40_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(42, "h6", 6);
      \u0275\u0275text(43, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 11);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(46, EyeExamDetails_Conditional_46_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 13)(48, "p-button", 14);
      \u0275\u0275listener("onClick", function EyeExamDetails_Template_p_button_onClick_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const noRight_r5 = \u0275\u0275reference(36);
      const noLeft_r6 = \u0275\u0275reference(41);
      \u0275\u0275property("visible", true)("subtitle", "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: " + ctx.exam.applicantFileNumber + " - " + ctx.getApplicantName())("useDefaultFooter", false);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("R: ", ctx.exam.vision || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " /10");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("L: ", ctx.exam.visionLeft || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " /10");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("R: ", ctx.exam.colorTest || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("L: ", ctx.exam.colorTestLeft || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("R: ", ctx.exam.worstRefractionRight || "-");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("L: ", ctx.exam.worstRefractionLeft || "-");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("result-accepted", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0642\u0628\u0648\u0644")("result-rejected", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0631\u0641\u0648\u0636")("result-postponed", (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u062A\u0623\u062C\u064A\u0644" || (ctx.exam.result == null ? null : ctx.exam.result.description) === "\u0645\u0624\u062C\u0644");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getResultName(ctx.exam.resultID), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.rightEyeRefractions.length > 0)("ngIfElse", noRight_r5);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.leftEyeRefractions.length > 0)("ngIfElse", noLeft_r6);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.exam.otherDiseases || "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649 \u0645\u0633\u062C\u0644\u0629");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.exam.reason ? 46 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DialogWrapperComponent, ButtonModule, Button], styles: ["\n\n.eye-exam-details-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.info-card[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.details-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f3f35;\n}\n.inline-values[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.info-chip[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border-radius: 999px;\n  padding: 0.3rem 0.75rem;\n  font-size: 0.85rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  font-size: 0.9rem;\n  color: #212529;\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  word-break: break-word;\n}\n.refraction-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.refraction-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 0.65rem 0.8rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.no-data-message[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  padding: 0.9rem;\n  text-align: center;\n  color: #334155;\n  font-size: 0.9rem;\n}\n.result-badge[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n}\n.result-badge.result-accepted[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-rejected[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-postponed[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #ffffff;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .eye-exam-details-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=eye-exam-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeExamDetails, [{
    type: Component,
    args: [{ selector: "app-eye-exam-details", standalone: true, imports: [CommonModule, DialogWrapperComponent, ButtonModule], template: `<app-dialog-wrapper\r
  [visible]="true"\r
  title="\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A"\r
  [subtitle]="'\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ' + exam.applicantFileNumber + ' - ' + getApplicantName()"\r
  icon="pi pi-eye"\r
  width="70rem"\r
  [useDefaultFooter]="false"\r
  (hide)="close()">\r
  <div class="eye-exam-details-body">\r
    <div class="details-grid">\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629</h6>\r
        <div class="inline-values">\r
          <span class="info-chip">R: {{ exam.vision || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }} /10</span>\r
          <span class="info-chip">L: {{ exam.visionLeft || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }} /10</span>\r
        </div>\r
      </div>\r
\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646</h6>\r
        <div class="inline-values">\r
          <span class="info-chip">R: {{ exam.colorTest || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>\r
          <span class="info-chip">L: {{ exam.colorTestLeft || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0623\u0633\u0648\u0623 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</h6>\r
        <div class="inline-values">\r
          <span class="info-chip">R: {{ exam.worstRefractionRight || '-' }}</span>\r
          <span class="info-chip">L: {{ exam.worstRefractionLeft || '-' }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="info-card">\r
        <h6 class="details-section-title">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</h6>\r
        <div\r
          class="info-value result-badge"\r
          [class.result-accepted]="exam.result?.description === '\u0645\u0642\u0628\u0648\u0644'"\r
          [class.result-rejected]="exam.result?.description === '\u0645\u0631\u0641\u0648\u0636'"\r
          [class.result-postponed]="exam.result?.description === '\u062A\u0623\u062C\u064A\u0644' || exam.result?.description === '\u0645\u0624\u062C\u0644'">\r
          {{ getResultName(exam.resultID) }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <h6 class="details-section-title">\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</h6>\r
    <div class="refraction-list" *ngIf="rightEyeRefractions.length > 0; else noRight">\r
      <div class="refraction-item" *ngFor="let refraction of rightEyeRefractions">\r
        <span>{{ getRefractionTypeName(refraction.refractionTypeID) }}</span>\r
        <strong>{{ refraction.refractionValue || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>\r
      </div>\r
    </div>\r
    <ng-template #noRight>\r
      <div class="no-data-message">\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</div>\r
    </ng-template>\r
\r
    <h6 class="details-section-title">\u0627\u0646\u0643\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</h6>\r
    <div class="refraction-list" *ngIf="leftEyeRefractions.length > 0; else noLeft">\r
      <div class="refraction-item" *ngFor="let refraction of leftEyeRefractions">\r
        <span>{{ getRefractionTypeName(refraction.refractionTypeID) }}</span>\r
        <strong>{{ refraction.refractionValue || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>\r
      </div>\r
    </div>\r
    <ng-template #noLeft>\r
      <div class="no-data-message">\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0627\u0646\u0643\u0633\u0627\u0631 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</div>\r
    </ng-template>\r
\r
    <h6 class="details-section-title">\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629</h6>\r
    <div class="info-value">{{ exam.otherDiseases || '\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649 \u0645\u0633\u062C\u0644\u0629' }}</div>\r
    @if (exam.reason) {\r
      <div class="info-value mt-2">{{ exam.reason }}</div>\r
    }\r
  </div>\r
\r
  <div dialog-footer class="dialog-actions">\r
    <p-button\r
      label="\u0625\u063A\u0644\u0627\u0642"\r
      icon="pi pi-times"\r
      severity="secondary"\r
      [outlined]="true"\r
      (onClick)="close()"></p-button>\r
  </div>\r
</app-dialog-wrapper>`, styles: ["/* src/app/features/doctor/components/eye-doctor.component/eye-exam-details/eye-exam-details.scss */\n.eye-exam-details-body {\n  padding: 1.5rem;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.info-card {\n  padding: 0.9rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.details-section-title {\n  margin: 0 0 0.6rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f3f35;\n}\n.inline-values {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.info-chip {\n  background: #f3f4f6;\n  border-radius: 999px;\n  padding: 0.3rem 0.75rem;\n  font-size: 0.85rem;\n}\n.info-value {\n  background: #ffffff;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  font-size: 0.9rem;\n  color: #212529;\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  word-break: break-word;\n}\n.refraction-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.refraction-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 0.65rem 0.8rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.no-data-message {\n  background: #f8fafc;\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  padding: 0.9rem;\n  text-align: center;\n  color: #334155;\n  font-size: 0.9rem;\n}\n.result-badge {\n  text-align: center;\n  justify-content: center;\n}\n.result-badge.result-accepted {\n  background: #10b981;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-rejected {\n  background: #dc2626;\n  color: #ffffff;\n  font-weight: 600;\n}\n.result-badge.result-postponed {\n  background: #f59e0b;\n  color: #ffffff;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .details-grid {\n    grid-template-columns: 1fr;\n  }\n  .eye-exam-details-body {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=eye-exam-details.css.map */\n"] }]
  }], () => [{ type: NgbActiveModal }, { type: ApplicantService }], { exam: [{
    type: Input
  }], showRefractionsOnly: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeExamDetails, { className: "EyeExamDetails", filePath: "src/app/features/doctor/components/eye-doctor.component/eye-exam-details/eye-exam-details.ts", lineNumber: 18 });
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
    \u0275\u0275elementStart(0, "span", 37);
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
    \u0275\u0275elementStart(0, "div", 34)(1, "strong", 35);
    \u0275\u0275text(2, "\u064A\u0645\u064A\u0646:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeferredEyeExamsComponent_ng_template_11_div_17_div_1_span_3_Template, 2, 2, "span", 36);
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
    \u0275\u0275elementStart(0, "span", 40);
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
    \u0275\u0275elementStart(0, "div", 38)(1, "strong", 35);
    \u0275\u0275text(2, "\u064A\u0633\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeferredEyeExamsComponent_ng_template_11_div_17_div_2_span_3_Template, 2, 2, "span", 39);
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
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, DeferredEyeExamsComponent_ng_template_11_div_17_div_1_Template, 4, 1, "div", 32)(2, DeferredEyeExamsComponent_ng_template_11_div_17_div_2_Template, 4, 1, "div", 33);
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
    \u0275\u0275elementStart(0, "div", 41);
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
      return \u0275\u0275resetView(ctx_r3.showDetails(exam_r5));
    });
    \u0275\u0275element(26, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 29);
    \u0275\u0275listener("click", function DeferredEyeExamsComponent_ng_template_11_Template_button_click_27_listener() {
      const exam_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditExam(exam_r5));
    });
    \u0275\u0275element(28, "i", 30);
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
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
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = "400px";
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
          modalRef.componentInstance.eyeExamUpdated.subscribe(() => {
            this.loadEyeExams();
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
  }, decls: 14, vars: 8, consts: [["searchInput", ""], ["table", ""], ["noRefractions", ""], [1, "user-header-section", "p-3", "container-fluid"], [1, "table-toolbar"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "custom-table", "my-3", 3, "value", "rows", "totalRecords", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [1, "text-center", 2, "min-width", "100px"], [1, "text-center", 2, "min-width", "120px"], [1, "text-center", 2, "min-width", "180px"], [1, "text-center", 2, "min-width", "80px"], [1, "text-center", "align-middle"], [1, "fw-bold", "small"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-1"], [1, "badge", "bg-primary-subtle", "text-primary-emphasis", "fs-8"], [1, "badge", "bg-secondary-subtle", "text-secondary-emphasis", "fs-8"], ["class", "refractions-display small d-flex flex-column justify-content-center align-items-center", 4, "ngIf", "ngIfElse"], [1, "small", "d-inline-block", 3, "ngClass"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center", "gap-2"], ["type", "button", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-eye"], ["type", "button", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u062D\u0635", "tooltipPosition", "top", 1, "btn-icon-action", 3, "click"], [1, "pi", "pi-pen-to-square"], [1, "refractions-display", "small", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["class", "d-flex flex-wrap justify-content-center align-items-center gap-1 mb-1", 4, "ngIf"], ["class", "d-flex flex-wrap justify-content-center align-items-center gap-1", 4, "ngIf"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-1", "mb-1"], [1, "text-muted", "fs-9"], ["class", "badge bg-info text-dark fs-8", 4, "ngFor", "ngForOf"], [1, "badge", "bg-info", "text-dark", "fs-8"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-1"], ["class", "badge bg-secondary fs-8", 4, "ngFor", "ngForOf"], [1, "badge", "bg-secondary", "fs-8"], [1, "text-muted", "fs-9", "text-center"], ["colspan", "6", 1, "text-center", "py-3", "align-middle"]], template: function DeferredEyeExamsComponent_Template(rf, ctx) {
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
      \u0275\u0275template(10, DeferredEyeExamsComponent_ng_template_10_Template, 13, 0, "ng-template", 11)(11, DeferredEyeExamsComponent_ng_template_11_Template, 29, 9, "ng-template", 12)(12, DeferredEyeExamsComponent_ng_template_12_Template, 3, 0, "ng-template", 13);
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
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ButtonModule, PrimeTemplate, FormsModule, TableModule, Table, PaginatorComponent, TooltipModule, Tooltip, ResetFiltersButtonComponent], styles: ['@charset "UTF-8";\n\n\n\n.user-header-section[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.filter-reset-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n[_nghost-%COMP%]     .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-success, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-primary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-warning, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #b9a779 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6b1f2a !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-secondary, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3d3a3b !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge .text-primary-emphasis, \n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n[_nghost-%COMP%]     .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n@media (max-width: 768px) {\n  .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n  .refractions-display .badge {\n  background-color: white !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-medium) !important;\n  font-weight: 600 !important;\n  margin: 0.125rem !important;\n}\n.fs-8[_ngcontent-%COMP%], \n.fs-9[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=deferred-eye-exams.component.css.map */'] });
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
    [tableStyle]="{ 'min-width': '50rem' }">\r
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
    <ng-template pTemplate="body" let-exam>\r
      <tr>\r
        <td class="text-center align-middle">\r
          <span class="fw-bold small">{{ exam.applicantFileNumber }}</span>\r
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
            <button\r
              type="button"\r
              class="btn-icon-action"\r
              pTooltip="\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"\r
              tooltipPosition="top"\r
              (click)="showDetails(exam)">\r
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
    <ng-template pTemplate="emptymessage">\r
      <tr>\r
        <td colspan="6" class="text-center py-3 align-middle">\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u062D\u0648\u0635\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.</td>\r
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
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/doctor/components/eye-doctor.component/deferred-eye-exams.component/deferred-eye-exams.component.scss */\n.user-header-section {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n  padding: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n.table-toolbar {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  justify-content: flex-end;\n  direction: rtl;\n}\n.filter-reset-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrapper {\n  position: relative;\n  width: 400px;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 2.5rem 0.625rem 1rem;\n  border: 2px solid rgba(0, 0, 0, 0.1) !important;\n  border-radius: var(--radius-md) !important;\n  font-size: var(--font-size-sm) !important;\n  font-family: var(--font-family-primary) !important;\n  transition: all var(--transition-fast) !important;\n}\n.search-input:focus {\n  border-color: var(--primary-medium) !important;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1) !important;\n  outline: none !important;\n}\n.search-icon {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-dark) !important;\n  font-size: var(--font-size-base) !important;\n}\n:host ::ng-deep .p-datatable {\n  background: white !important;\n  border-radius: var(--radius-lg) !important;\n  overflow: hidden !important;\n  box-shadow: var(--shadow-xl) !important;\n  border: 1px solid rgba(0, 0, 0, 0.05) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.75rem !important;\n  font-weight: 700 !important;\n  padding: 0.75rem 1rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  white-space: nowrap;\n  vertical-align: middle !important;\n  border-bottom: 2px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.5 !important;\n  color: #34495e !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: 1px solid #e0e0e0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td .fw-bold {\n  color: #054239 !important;\n  font-weight: 600 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td small {\n  color: #7f8c8d !important;\n  font-size: 0.7rem !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px !important;\n  border-radius: var(--radius-full) !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;\n  transition: all var(--transition-fast) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-success,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-primary-subtle {\n  background: #054239 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-warning-subtle {\n  background: #b9a779 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-danger {\n  background: #6b1f2a !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-secondary-subtle {\n  background: #3d3a3b !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge.bg-info {\n  background: #428177 !important;\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge .text-primary-emphasis,\n:host ::ng-deep .p-datatable .p-datatable-tbody .badge .text-secondary-emphasis {\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action {\n  width: 2rem !important;\n  height: 2rem !important;\n  border-radius: 50% !important;\n  border: 2px solid #ddd !important;\n  background: white !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  transition: all 0.2s ease !important;\n  cursor: pointer !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action i {\n  font-size: 0.875rem !important;\n  color: #054239 !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover {\n  background: #054239 !important;\n  border-color: #054239 !important;\n  transform: scale(1.1) !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:hover i {\n  color: white !important;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody .btn-icon-action:active {\n  transform: scale(0.95) !important;\n}\n:host ::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 0.7rem !important;\n  padding: 0.375rem 0.5rem !important;\n  font-weight: 500 !important;\n}\n@media (max-width: 768px) {\n  .search-wrapper {\n    width: 100%;\n  }\n}\n:host {\n  display: block;\n}\n::ng-deep .refractions-display .badge {\n  background-color: white !important;\n  color: var(--primary-dark) !important;\n  border: 2px solid var(--primary-medium) !important;\n  font-weight: 600 !important;\n  margin: 0.125rem !important;\n}\n.fs-8,\n.fs-9 {\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=deferred-eye-exams.component.css.map */\n'] }]
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
//# sourceMappingURL=chunk-S3A75MCU.js.map
