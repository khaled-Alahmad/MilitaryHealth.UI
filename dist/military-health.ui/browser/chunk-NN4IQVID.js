import {
  DecisionService,
  DividerModule,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-TJK6RMDX.js";
import {
  CardModule
} from "./chunk-MSHWPF4R.js";
import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  ToastrService
} from "./chunk-P4WCBYBH.js";
import {
  Tag,
  TagModule
} from "./chunk-NJ7ILR2W.js";
import {
  Dialog,
  DialogModule
} from "./chunk-5TBOZ7YP.js";
import {
  ResetFiltersButtonComponent
} from "./chunk-3GLFOEUA.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-H3VVC3HM.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-QKQWARGJ.js";
import "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import {
  InputTextModule
} from "./chunk-7K53XEFX.js";
import {
  Button,
  ButtonModule
} from "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-OMFZJHBV.js";
import "./chunk-2VRBHK6C.js";
import {
  LookupService
} from "./chunk-BJUGQXZ4.js";
import {
  ApplicantService
} from "./chunk-LBNMWMAA.js";
import {
  GregorianDatePipe
} from "./chunk-M5RFJNTA.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  __spreadProps,
  __spreadValues,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/features/supervisor/components/applicants-list-supervisor/applicants-list-supervisor.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
var _c2 = () => [10, 20, 50, 100];
var _c3 = () => ["fileNumber", "fullName"];
var _c4 = () => ({ width: "70rem", minWidth: "70rem" });
var _c5 = () => ({ width: "40rem", minWidth: "40rem" });
function ApplicantsListSupervisor_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 34);
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631 ");
    \u0275\u0275element(3, "p-sortIcon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 36);
    \u0275\u0275text(5, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 ");
    \u0275\u0275element(6, "p-sortIcon", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 38);
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
    \u0275\u0275element(9, "p-sortIcon", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 ");
    \u0275\u0275element(12, "p-sortIcon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 42);
    \u0275\u0275text(20, "\u0627\u0644\u0637\u0648\u0644 ");
    \u0275\u0275element(21, "p-sortIcon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 44);
    \u0275\u0275text(23, "\u0627\u0644\u0648\u0632\u0646 ");
    \u0275\u0275element(24, "p-sortIcon", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantsListSupervisor_ng_template_31_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "gregorianDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const applicant_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, applicant_r3.createdAt, "yyyy/MM/dd"), " ");
  }
}
function ApplicantsListSupervisor_ng_template_31_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_ng_template_31_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const applicant_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", applicant_r3.maritalStatus.description, " ");
  }
}
function ApplicantsListSupervisor_ng_template_31_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_ng_template_31_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const applicant_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", applicant_r3.bloodType, " ");
  }
}
function ApplicantsListSupervisor_ng_template_31_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 46)(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 46)(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275template(11, ApplicantsListSupervisor_ng_template_31_span_11_Template, 3, 4, "span", 50)(12, ApplicantsListSupervisor_ng_template_31_span_12_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 46)(14, "span", 51);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 46);
    \u0275\u0275template(17, ApplicantsListSupervisor_ng_template_31_span_17_Template, 2, 1, "span", 50)(18, ApplicantsListSupervisor_ng_template_31_span_18_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 46);
    \u0275\u0275template(20, ApplicantsListSupervisor_ng_template_31_span_20_Template, 2, 1, "span", 52)(21, ApplicantsListSupervisor_ng_template_31_span_21_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 46)(23, "span", 49);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 46)(26, "span", 49);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 46)(29, "div", 53)(30, "p-button", 54);
    \u0275\u0275listener("click", function ApplicantsListSupervisor_ng_template_31_Template_p_button_click_30_listener() {
      const applicant_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewDetails(applicant_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p-button", 55);
    \u0275\u0275listener("click", function ApplicantsListSupervisor_ng_template_31_Template_p_button_click_31_listener() {
      const applicant_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openRequestsDialog(applicant_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const applicant_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.queueNumber || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.fileNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", applicant_r3.createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !applicant_r3.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.getBadgeClass(ctx_r3.getFinalResult(applicant_r3.fileNumber)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getFinalResult(applicant_r3.fileNumber), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", applicant_r3.maritalStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !applicant_r3.maritalStatus);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", applicant_r3.bloodType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !applicant_r3.bloodType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.height ? applicant_r3.height + " \u0633\u0645" : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(applicant_r3.weight ? applicant_r3.weight + " \u0643\u063A" : "-");
  }
}
function ApplicantsListSupervisor_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57)(2, "div", 58);
    \u0275\u0275element(3, "i", 59);
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u0633\u0628\u064A\u0646");
    \u0275\u0275elementEnd()()()();
  }
}
function ApplicantsListSupervisor_div_34_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "gregorianDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.selectedApplicant.dateOfBirth, "yyyy/MM/dd"), " ");
  }
}
function ApplicantsListSupervisor_div_34_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_div_34_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedApplicant.bloodType, " ");
  }
}
function ApplicantsListSupervisor_div_34_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_div_34_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedApplicant.queueNumber, " ");
  }
}
function ApplicantsListSupervisor_div_34_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_div_34_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "gregorianDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.selectedApplicant.createdAt, "yyyy/MM/dd"), " ");
  }
}
function ApplicantsListSupervisor_div_34_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_div_34_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedApplicant.maritalStatus.description, " ");
  }
}
function ApplicantsListSupervisor_div_34_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275elementEnd();
  }
}
function ApplicantsListSupervisor_div_34_div_111_p_tag_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 100);
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r3.getFormattedDate(event_r5.date))("severity", ctx_r3.getTimelineSeverity(event_r5.type));
  }
}
function ApplicantsListSupervisor_div_34_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95)(4, "div", 96)(5, "h6", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ApplicantsListSupervisor_div_34_div_111_p_tag_7_Template, 1, 2, "p-tag", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "marker-" + event_r5.type);
    \u0275\u0275advance();
    \u0275\u0275classMap("pi " + ctx_r3.getTimelineIcon(event_r5.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r5.event);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r5.description);
  }
}
function ApplicantsListSupervisor_div_34_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062D\u062F\u0627\u062B \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantsListSupervisor_div_34_div_113_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", item_r6.changedBy);
  }
}
function ApplicantsListSupervisor_div_34_div_113_div_10_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.reason);
  }
}
function ApplicantsListSupervisor_div_34_div_113_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span", 109);
    \u0275\u0275text(2, " \u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u0628\u0644 \u0645\u0646 ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 110);
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 111);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "gregorianDate");
    \u0275\u0275template(11, ApplicantsListSupervisor_div_34_div_113_div_10_span_11_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ApplicantsListSupervisor_div_34_div_113_div_10_p_12_Template, 2, 1, "p", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.previousResultDescription || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.newResultDescription || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 5, item_r6.changedAt, "yyyy/MM/dd HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r6.changedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.reason);
  }
}
function ApplicantsListSupervisor_div_34_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 63)(2, "div", 64);
    \u0275\u0275element(3, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 104)(5, "h3", 66);
    \u0275\u0275text(6, "\u0633\u062C\u0644 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 105);
    \u0275\u0275text(8, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0646 \u0646\u062A\u064A\u062C\u0629 \u0625\u0644\u0649 \u0623\u062E\u0631\u0649");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 106);
    \u0275\u0275template(10, ApplicantsListSupervisor_div_34_div_113_div_10_Template, 13, 8, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r3.decisionHistory);
  }
}
function ApplicantsListSupervisor_div_34_div_114_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 121)(2, "div", 122);
    \u0275\u0275element(3, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 123)(5, "h6", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 125);
    \u0275\u0275text(8, "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0625\u0644\u0649 \u0623\u064A \u0645\u0646 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A (\u0645\u0642\u0628\u0648\u0644\u060C \u0645\u0631\u0641\u0648\u0636\u060C \u0645\u0624\u062C\u0644) \u0648\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629. \u0628\u0639\u062F \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u062A\u062C\u0646\u064A\u062F.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 126)(10, "p-button", 127);
    \u0275\u0275listener("onClick", function ApplicantsListSupervisor_div_34_div_114_div_9_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.initEditDecision());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629: ", ctx_r3.getFinalResultDescription(ctx_r3.selectedApplicant.finalDecision == null ? null : ctx_r3.selectedApplicant.finalDecision.resultID));
  }
}
function ApplicantsListSupervisor_div_34_div_114_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 129)(2, "div", 130)(3, "label", 131);
    \u0275\u0275element(4, "i", 132);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 ");
    \u0275\u0275elementStart(7, "span", 133);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ng-select", 134);
    \u0275\u0275twoWayListener("ngModelChange", function ApplicantsListSupervisor_div_34_div_114_div_10_Template_ng_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.editDecisionModel.resultID, $event) || (ctx_r3.editDecisionModel.resultID = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 130)(11, "label", 131);
    \u0275\u0275element(12, "i", 135);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u0627\u0644\u062A\u0648\u0635\u064A\u0629 / \u0627\u0644\u0633\u0628\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "textarea", 136);
    \u0275\u0275twoWayListener("ngModelChange", function ApplicantsListSupervisor_div_34_div_114_div_10_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.editDecisionModel.reason, $event) || (ctx_r3.editDecisionModel.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(16, "              ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small", 137);
    \u0275\u0275element(18, "i", 102);
    \u0275\u0275text(19, " \u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0623\u0648 \u0627\u0644\u0633\u0628\u0628 \u062D\u0633\u0628 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 138)(21, "p-button", 139);
    \u0275\u0275listener("onClick", function ApplicantsListSupervisor_div_34_div_114_div_10_Template_p_button_onClick_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateFinalDecision());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-button", 140);
    \u0275\u0275listener("onClick", function ApplicantsListSupervisor_div_34_div_114_div_10_Template_p_button_onClick_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.cancelEditDecision());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("items", ctx_r3.results);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editDecisionModel.resultID);
    \u0275\u0275property("clearable", false)("searchable", false);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editDecisionModel.reason);
    \u0275\u0275advance(6);
    \u0275\u0275property("loading", ctx_r3.updatingDecision)("disabled", ctx_r3.updatingDecision || !ctx_r3.editDecisionModel.resultID);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.updatingDecision);
  }
}
function ApplicantsListSupervisor_div_34_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "div", 116);
    \u0275\u0275element(3, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 104)(5, "h3", 66);
    \u0275\u0275text(6, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 105);
    \u0275\u0275text(8, "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 (\u0645\u0642\u0628\u0648\u0644 / \u0645\u0631\u0641\u0648\u0636 / \u0645\u0624\u062C\u0644) \u0648\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629. \u0628\u0639\u062F \u0627\u0644\u062D\u0641\u0638 \u064A\u064F\u0633\u0645\u062D \u0628\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, ApplicantsListSupervisor_div_34_div_114_div_9_Template, 11, 1, "div", 118)(10, ApplicantsListSupervisor_div_34_div_114_div_10_Template, 23, 8, "div", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r3.isEditingDecision);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isEditingDecision);
  }
}
function ApplicantsListSupervisor_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64);
    \u0275\u0275element(4, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 66);
    \u0275\u0275text(6, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 67)(8, "div", 68)(9, "div", 69);
    \u0275\u0275element(10, "i", 70);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 71);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 68)(16, "div", 69);
    \u0275\u0275element(17, "i", 65);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 71);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 68)(23, "div", 69);
    \u0275\u0275element(24, "i", 8);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 71);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 68)(30, "div", 69);
    \u0275\u0275element(31, "i", 72);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 71);
    \u0275\u0275template(35, ApplicantsListSupervisor_div_34_span_35_Template, 3, 4, "span", 73)(36, ApplicantsListSupervisor_div_34_span_36_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 68)(38, "div", 69);
    \u0275\u0275element(39, "i", 74);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 71);
    \u0275\u0275template(43, ApplicantsListSupervisor_div_34_span_43_Template, 2, 1, "span", 75)(44, ApplicantsListSupervisor_div_34_span_44_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 68)(46, "div", 69);
    \u0275\u0275element(47, "i", 76);
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 71);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 68)(53, "div", 69);
    \u0275\u0275element(54, "i", 77);
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 71);
    \u0275\u0275template(58, ApplicantsListSupervisor_div_34_span_58_Template, 2, 1, "span", 78)(59, ApplicantsListSupervisor_div_34_span_59_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 68)(61, "div", 69);
    \u0275\u0275element(62, "i", 79);
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 71);
    \u0275\u0275template(66, ApplicantsListSupervisor_div_34_span_66_Template, 3, 4, "span", 73)(67, ApplicantsListSupervisor_div_34_span_67_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 68)(69, "div", 69);
    \u0275\u0275element(70, "i", 80);
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72, "\u0627\u0644\u0639\u0645\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 71);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 68)(76, "div", 69);
    \u0275\u0275element(77, "i", 74);
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 71);
    \u0275\u0275template(81, ApplicantsListSupervisor_div_34_span_81_Template, 2, 1, "span", 73)(82, ApplicantsListSupervisor_div_34_span_82_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 68)(84, "div", 69);
    \u0275\u0275element(85, "i", 81);
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87, "\u0627\u0644\u0637\u0648\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 71);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 68)(91, "div", 69);
    \u0275\u0275element(92, "i", 82);
    \u0275\u0275elementStart(93, "span");
    \u0275\u0275text(94, "\u0627\u0644\u0648\u0632\u0646");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 71);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 68)(98, "div", 69);
    \u0275\u0275element(99, "i", 83);
    \u0275\u0275elementStart(100, "span");
    \u0275\u0275text(101, "BMI");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 71);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(104, "div", 84)(105, "div", 63)(106, "div", 64);
    \u0275\u0275element(107, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "h3", 66);
    \u0275\u0275text(109, "\u0633\u062C\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0645\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0631\u0648\u062C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 86);
    \u0275\u0275template(111, ApplicantsListSupervisor_div_34_div_111_Template, 10, 6, "div", 87)(112, ApplicantsListSupervisor_div_34_div_112_Template, 4, 0, "div", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(113, ApplicantsListSupervisor_div_34_div_113_Template, 11, 1, "div", 89)(114, ApplicantsListSupervisor_div_34_div_114_Template, 11, 2, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r3.selectedApplicant.fileNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.selectedApplicant.fullName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.selectedApplicant.motherName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedApplicant.dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedApplicant.dateOfBirth);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedApplicant.bloodType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedApplicant.bloodType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.selectedApplicant.recruitmentCenter || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedApplicant.queueNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedApplicant.queueNumber);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedApplicant.createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedApplicant.createdAt);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.selectedApplicant.job || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedApplicant.maritalStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedApplicant.maritalStatus);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.selectedApplicant.height ? ctx_r3.selectedApplicant.height + " \u0633\u0645" : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.selectedApplicant.weight ? ctx_r3.selectedApplicant.weight + " \u0643\u063A" : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.selectedApplicant.bmi ? ctx_r3.selectedApplicant.bmi.toFixed(1) : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.applicantTimeline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.applicantTimeline.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.decisionHistory.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canEditFinalDecision());
  }
}
function ApplicantsListSupervisor_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 141);
  }
}
function ApplicantsListSupervisor_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150)(1, "div")(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "p-tag", 151);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u0646\u062A\u0633\u0628: ", ctx_r3.selectedApplicantSummary.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx_r3.selectedApplicantSummary.fileNumber);
  }
}
function ApplicantsListSupervisor_div_37_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 154)(2, "span", 155);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 156)(6, "p")(7, "strong");
    \u0275\u0275text(8, "\u0627\u0644\u0633\u0628\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "\u0627\u0644\u0637\u0628\u064A\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const consultation_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(consultation_r9.consultationType);
    \u0275\u0275advance();
    \u0275\u0275property("value", consultation_r9.result || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", consultation_r9.referralReason || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (consultation_r9.doctor == null ? null : consultation_r9.doctor.fullName) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function ApplicantsListSupervisor_div_37_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ApplicantsListSupervisor_div_37_ng_container_10_div_1_Template, 14, 4, "div", 152);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.applicantConsultations);
  }
}
function ApplicantsListSupervisor_div_37_ng_container_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 154)(2, "span", 155);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 156)(6, "p")(7, "strong");
    \u0275\u0275text(8, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "\u0627\u0644\u0633\u0628\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const investigation_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(investigation_r10.type);
    \u0275\u0275advance();
    \u0275\u0275property("value", investigation_r10.status || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", investigation_r10.result || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", investigation_r10.investigationReason || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
  }
}
function ApplicantsListSupervisor_div_37_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ApplicantsListSupervisor_div_37_ng_container_18_div_1_Template, 14, 4, "div", 152);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.applicantInvestigations);
  }
}
function ApplicantsListSupervisor_div_37_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantsListSupervisor_div_37_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644 \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantsListSupervisor_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275template(1, ApplicantsListSupervisor_div_37_div_1_Template, 7, 2, "div", 143);
    \u0275\u0275elementStart(2, "div", 144)(3, "div", 145)(4, "div", 63)(5, "div", 64);
    \u0275\u0275element(6, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-tag", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ApplicantsListSupervisor_div_37_ng_container_10_Template, 2, 1, "ng-container", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 145)(12, "div", 63)(13, "div", 64);
    \u0275\u0275element(14, "i", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h3");
    \u0275\u0275text(16, "\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "p-tag", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ApplicantsListSupervisor_div_37_ng_container_18_Template, 2, 1, "ng-container", 148);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ApplicantsListSupervisor_div_37_ng_template_19_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(21, ApplicantsListSupervisor_div_37_ng_template_21_Template, 4, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noConsultations_r11 = \u0275\u0275reference(20);
    const noInvestigations_r12 = \u0275\u0275reference(22);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedApplicantSummary);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r3.applicantConsultations.length + "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.applicantConsultations.length)("ngIfElse", noConsultations_r11);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r3.applicantInvestigations.length + "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.applicantInvestigations.length)("ngIfElse", noInvestigations_r12);
  }
}
var ApplicantsListSupervisor = class _ApplicantsListSupervisor {
  applicantService;
  http;
  toastr;
  authService;
  decisionService;
  lookupService;
  cdr;
  applicants = [];
  loading = false;
  totalRecords = 0;
  page = 1;
  pageSize = 20;
  globalFilter = "";
  tableHeight = "600px";
  /** فلاتر التاريخ (مختار بشكل تلقائي اليوم الحالي) */
  dateFrom = /* @__PURE__ */ new Date();
  dateTo = /* @__PURE__ */ new Date();
  maxDate = /* @__PURE__ */ new Date();
  /** خريطة رقم الملف -> وصف النتيجة النهائية */
  finalResultByFile = /* @__PURE__ */ new Map();
  // تفاصيل المنتسب
  selectedApplicant = null;
  showDetailsDialog = false;
  detailsLoading = false;
  applicantTimeline = [];
  // حوار الاستشارات والتحاليل
  showRequestsDialog = false;
  requestsLoading = false;
  selectedApplicantSummary = null;
  applicantConsultations = [];
  applicantInvestigations = [];
  // Specialization IDs
  EYE_SPECIALIZATION_ID = 1;
  INTERNAL_SPECIALIZATION_ID = 2;
  SURGICAL_SPECIALIZATION_ID = 3;
  ORTHOPEDIC_SPECIALIZATION_ID = 4;
  EAR_SPECIALIZATION_ID = 5;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  // Cache لتجنب الطلبات المكررة
  consultationsCache = /* @__PURE__ */ new Map();
  investigationsCache = /* @__PURE__ */ new Map();
  currentFileNumber = null;
  isLoadingConsultations = false;
  // ✅ منع الطلبات المكررة لقائمة المنتسبين
  isLoadingApplicants = false;
  // ✅ متغيرات لتعديل القرار النهائي
  results = [];
  editDecisionModel = {};
  isEditingDecision = false;
  updatingDecision = false;
  POSTPONED_RESULT_ID = 3;
  // ID للنتيجة "مؤجل"
  /** سجل تغيير النتيجة النهائية (كان مرفوض → صار مقبول) */
  decisionHistory = [];
  table;
  searchInput;
  constructor(applicantService, http, toastr, authService, decisionService, lookupService, cdr) {
    this.applicantService = applicantService;
    this.http = http;
    this.toastr = toastr;
    this.authService = authService;
    this.decisionService = decisionService;
    this.lookupService = lookupService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadResults();
  }
  loadResults() {
    this.lookupService.getResults().subscribe({
      next: (data) => {
        this.results = data;
      },
      error: () => {
        this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C", "\u062E\u0637\u0623");
      }
    });
  }
  loadApplicants() {
    if (this.isLoadingApplicants) {
      return;
    }
    this.isLoadingApplicants = true;
    this.loading = true;
    this.applicantService.getApplicants$(this.page, this.pageSize, this.globalFilter, this.dateFrom, this.dateTo).subscribe({
      next: (response) => {
        this.applicants = response.items;
        this.totalRecords = response.totalCount;
        this.loading = false;
        this.isLoadingApplicants = false;
        this.loadFinalResultsForCurrentPage();
      },
      error: () => {
        this.loading = false;
        this.isLoadingApplicants = false;
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646", "\u062E\u0637\u0623");
      }
    });
  }
  loadFinalResultsForCurrentPage() {
    const fileNumbers = this.applicants.map((a) => a.fileNumber).filter(Boolean);
    if (fileNumbers.length === 0) {
      this.finalResultByFile.clear();
      return;
    }
    this.decisionService.getDecisionsByFileNumbers(fileNumbers).subscribe({
      next: (items) => {
        this.finalResultByFile.clear();
        items.forEach((item) => {
          const desc = item.result?.description;
          if (desc) {
            this.finalResultByFile.set(item.applicantFileNumber, desc);
          }
        });
        this.cdr.markForCheck();
      }
    });
  }
  getFinalResult(fileNumber) {
    return this.finalResultByFile.get(fileNumber) ?? "-";
  }
  getBadgeClass(resultDescription) {
    if (!resultDescription || resultDescription === "-") {
      return "badge bg-secondary";
    }
    switch (resultDescription) {
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
    this.dateFrom = /* @__PURE__ */ new Date();
    this.dateTo = /* @__PURE__ */ new Date();
    this.page = 1;
    if (this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadApplicants();
  }
  onDateFilterChange() {
    this.page = 1;
    this.loadApplicants();
  }
  onPageChange(event) {
    const rows = event.rows ?? this.pageSize;
    const first = event.first ?? (this.page - 1) * rows;
    this.page = Math.floor(first / rows) + 1;
    this.pageSize = rows;
    this.loadApplicants();
  }
  onFilterChange(event) {
    this.globalFilter = event.target.value;
    this.page = 1;
    this.loadApplicants();
  }
  viewDetails(applicant) {
    if (this.currentFileNumber === applicant.fileNumber && this.isLoadingConsultations) {
      return;
    }
    this.currentFileNumber = applicant.fileNumber;
    this.selectedApplicant = null;
    this.applicantTimeline = [];
    this.showDetailsDialog = true;
    this.detailsLoading = true;
    this.applicantService.getApplicantByFileNumber$(applicant.fileNumber).subscribe({
      next: (details) => {
        this.selectedApplicant = this.mergeApplicantDetailsWithBasicInfo(details, applicant);
        this.buildTimeline(this.selectedApplicant, applicant.fileNumber);
        this.loadDecisionHistory(applicant.fileNumber);
        this.detailsLoading = false;
      },
      error: () => {
        this.detailsLoading = false;
        this.currentFileNumber = null;
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628", "\u062E\u0637\u0623");
      }
    });
  }
  /**
   * دمج البيانات الأساسية من القائمة مع التفاصيل الكاملة
   * لضمان عرض جميع البيانات المطلوبة
   */
  mergeApplicantDetailsWithBasicInfo(details, basicInfo) {
    return __spreadProps(__spreadValues({}, details), {
      // استخدام البيانات الأساسية إذا كانت غير موجودة في التفاصيل
      motherName: details.motherName || basicInfo.motherName,
      dateOfBirth: details.dateOfBirth || basicInfo.dateOfBirth,
      recruitmentCenter: details.recruitmentCenter || basicInfo.recruitmentCenter,
      bloodType: details.bloodType || basicInfo.bloodType,
      queueNumber: details.queueNumber || basicInfo.queueNumber,
      associateNumber: details.associateNumber || basicInfo.associateNumber,
      // التأكد من وجود الحقول الأساسية
      fullName: details.fullName || basicInfo.fullName,
      fileNumber: details.fileNumber || basicInfo.fileNumber,
      job: details.job || basicInfo.job,
      height: details.height ?? basicInfo.height,
      weight: details.weight ?? basicInfo.weight,
      bmi: details.bmi ?? basicInfo.bmi,
      bloodPressure: details.bloodPressure || basicInfo.bloodPressure,
      pulse: details.pulse ?? basicInfo.pulse,
      tattoo: details.tattoo ?? basicInfo.tattoo,
      distinctiveMarks: details.distinctiveMarks || basicInfo.distinctiveMarks,
      maritalStatusID: details.maritalStatusID || basicInfo.maritalStatusID,
      createdAt: details.createdAt || basicInfo.createdAt,
      // دمج الحالة الاجتماعية (ككائن)
      maritalStatus: details.maritalStatus || basicInfo.maritalStatus
    });
  }
  openRequestsDialog(applicant) {
    this.selectedApplicantSummary = applicant;
    this.showRequestsDialog = true;
    this.requestsLoading = true;
    this.applicantConsultations = [];
    this.applicantInvestigations = [];
    const consultations$ = [
      this.getConsultationsBySpecialization(this.EYE_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.EAR_SPECIALIZATION_ID, applicant.fileNumber)
    ];
    const investigations$ = [
      this.getInvestigationsBySpecialization(this.EYE_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.EAR_SPECIALIZATION_ID, applicant.fileNumber)
    ];
    forkJoin([...consultations$, ...investigations$]).subscribe({
      next: (results) => {
        this.applicantConsultations = [];
        this.applicantInvestigations = [];
        for (let i = 0; i < 5; i++) {
          this.applicantConsultations.push(...results[i]);
        }
        for (let i = 5; i < 10; i++) {
          this.applicantInvestigations.push(...results[i]);
        }
        this.applicantConsultations = this.applicantConsultations.sort((a, b) => (b.consultationID || 0) - (a.consultationID || 0));
        this.applicantInvestigations = this.applicantInvestigations.sort((a, b) => (b.investigationID || 0) - (a.investigationID || 0));
        this.requestsLoading = false;
      },
      error: () => {
        this.requestsLoading = false;
        this.toastr.error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644", "\u062E\u0637\u0623");
      }
    });
  }
  closeRequestsDialog() {
    this.showRequestsDialog = false;
    this.selectedApplicantSummary = null;
    this.applicantConsultations = [];
    this.applicantInvestigations = [];
  }
  buildTimeline(details, fileNumber) {
    this.applicantTimeline = [];
    if (details.createdAt) {
      this.applicantTimeline.push({
        event: "\u062F\u062E\u0648\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u0643\u0632",
        date: details.createdAt,
        description: `\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0628\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ${details.fileNumber}`,
        type: "entry"
      });
    }
    if (details.eyeExam) {
      this.applicantTimeline.push({
        event: "\u0641\u062D\u0635 \u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0648\u0646",
        date: null,
        description: `\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646 - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${this.getResultDescription(details.eyeExam.resultID)}`,
        type: "exam"
      });
    }
    if (details.internalExam) {
      this.applicantTimeline.push({
        event: "\u0641\u062D\u0635 \u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u0629",
        date: null,
        description: `\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0641\u062D\u0635 \u0627\u0644\u0628\u0627\u0637\u0646\u0629 - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${this.getResultDescription(details.internalExam.resultID)}`,
        type: "exam"
      });
    }
    if (details.surgicalExam) {
      this.applicantTimeline.push({
        event: "\u0641\u062D\u0635 \u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062C\u0631\u0627\u062D\u0629",
        date: null,
        description: `\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u0629 - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${this.getResultDescription(details.surgicalExam.resultID)}`,
        type: "exam"
      });
    }
    if (details.orthopedicExamDto) {
      this.applicantTimeline.push({
        event: "\u0641\u062D\u0635 \u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629",
        date: null,
        description: `\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0645\u064A\u0629 - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${this.getResultDescription(details.orthopedicExamDto.resultID)}`,
        type: "exam"
      });
    }
    if (details.earClinic) {
      this.applicantTimeline.push({
        event: "\u0641\u062D\u0635 \u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0630\u0646\u064A\u0629",
        date: null,
        description: `\u062A\u0645 \u0625\u062C\u0631\u0627\u0621 \u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646\u064A\u0629 - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${this.getResultDescription(details.earClinic.resultID)}`,
        type: "exam"
      });
    }
    this.loadConsultationsAndInvestigations(fileNumber);
  }
  loadConsultationsAndInvestigations(fileNumber) {
    if (this.isLoadingConsultations && this.currentFileNumber === fileNumber) {
      return;
    }
    const cacheKey = fileNumber;
    const cachedConsultations = this.consultationsCache.get(cacheKey);
    const cachedInvestigations = this.investigationsCache.get(cacheKey);
    if (cachedConsultations && cachedInvestigations) {
      this.addConsultationsToTimeline(cachedConsultations);
      this.addInvestigationsToTimeline(cachedInvestigations);
      this.addFinalDecisionToTimeline();
      this.sortTimeline();
      return;
    }
    this.isLoadingConsultations = true;
    const specializations = [
      this.EYE_SPECIALIZATION_ID,
      this.INTERNAL_SPECIALIZATION_ID,
      this.SURGICAL_SPECIALIZATION_ID,
      this.ORTHOPEDIC_SPECIALIZATION_ID,
      this.EAR_SPECIALIZATION_ID
    ];
    const consultations$ = specializations.map((specId) => this.getConsultationsBySpecialization(specId, fileNumber));
    const investigations$ = specializations.map((specId) => this.getInvestigationsBySpecialization(specId, fileNumber));
    forkJoin([...consultations$, ...investigations$]).subscribe({
      next: (results) => {
        const allConsultations = [];
        const allInvestigations = [];
        for (let i = 0; i < 5; i++) {
          allConsultations.push(...results[i]);
        }
        for (let i = 5; i < 10; i++) {
          allInvestigations.push(...results[i]);
        }
        this.consultationsCache.set(cacheKey, allConsultations);
        this.investigationsCache.set(cacheKey, allInvestigations);
        this.addConsultationsToTimeline(allConsultations);
        this.addInvestigationsToTimeline(allInvestigations);
        this.addFinalDecisionToTimeline();
        this.sortTimeline();
        this.isLoadingConsultations = false;
      },
      error: () => {
        this.isLoadingConsultations = false;
      }
    });
  }
  addConsultationsToTimeline(consultations) {
    consultations.forEach((consultation) => {
      this.applicantTimeline.push({
        event: "\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u062E\u0627\u0631\u062C\u064A\u0629",
        date: consultation.createdAt || null,
        description: `\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629: ${consultation.consultationType} - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${consultation.result}`,
        type: "consultation"
      });
    });
  }
  addInvestigationsToTimeline(investigations) {
    investigations.forEach((investigation) => {
      this.applicantTimeline.push({
        event: "\u062A\u062D\u0644\u064A\u0644 \u0637\u0628\u064A",
        date: investigation.createdAt || null,
        description: `\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644: ${investigation.type} - \u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${investigation.result} - \u0627\u0644\u062D\u0627\u0644\u0629: ${investigation.status}`,
        type: "investigation"
      });
    });
  }
  addFinalDecisionToTimeline() {
    if (this.selectedApplicant?.finalDecision) {
      this.applicantTimeline.push({
        event: "\u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A",
        date: this.selectedApplicant.finalDecision.decisionDate || this.selectedApplicant.createdAt || null,
        description: `\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${this.getResultDescription(this.selectedApplicant.finalDecision.resultID)} - \u0627\u0644\u0633\u0628\u0628: ${this.selectedApplicant.finalDecision.reason || "\u0644\u0627 \u064A\u0648\u062C\u062F"}`,
        type: "decision"
      });
    }
  }
  sortTimeline() {
    this.applicantTimeline.sort((a, b) => {
      if (a.type === "entry")
        return -1;
      if (b.type === "entry")
        return 1;
      const dateA = a.date ? new Date(a.date).getTime() : Number.MAX_SAFE_INTEGER;
      const dateB = b.date ? new Date(b.date).getTime() : Number.MAX_SAFE_INTEGER;
      return dateA - dateB;
    });
  }
  getConsultationsBySpecialization(specializationId, fileNumber) {
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortBy", "consultationID").set("sortDesc", "true").set("filterDict[doctor.specializationID]", specializationId.toString()).set("filterDict[applicantFileNumber]", fileNumber);
    return this.http.get(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => res.data?.items || []), catchError(() => of([])));
  }
  getInvestigationsBySpecialization(specializationId, fileNumber) {
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortBy", "investigationID").set("sortDesc", "true").set("filterDict[doctor.specializationID]", specializationId.toString()).set("filterDict[applicantFileNumber]", fileNumber);
    return this.http.get(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => res.data?.items || []), catchError(() => of([])));
  }
  getAuthHeaders() {
    const token = localStorage.getItem("access_token") || "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  getResultDescription(resultID) {
    const results = {
      1: "\u0645\u0642\u0628\u0648\u0644",
      2: "\u0645\u0631\u0641\u0648\u0636",
      3: "\u0645\u0624\u062C\u0644"
    };
    return results[resultID] || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  /** وصف النتيجة الحالية لعرضها في قسم تعديل القرار */
  getFinalResultDescription(resultID) {
    return resultID != null ? this.getResultDescription(resultID) : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  getTimelineIcon(type) {
    const icons = {
      "entry": "pi pi-sign-in",
      "exam": "pi pi-file-medical",
      "consultation": "pi pi-comments",
      "investigation": "pi pi-flask",
      "decision": "pi pi-check-circle",
      "exit": "pi pi-sign-out"
    };
    return icons[type] || "pi pi-circle";
  }
  getTimelineSeverity(type) {
    const severities = {
      "entry": "info",
      "exam": "warn",
      "consultation": "secondary",
      "investigation": "info",
      "decision": "success",
      "exit": "danger"
    };
    return severities[type] || "info";
  }
  getFormattedDate(date) {
    if (!date)
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime()))
        return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
      return dateObj.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    }
  }
  closeDetailsDialog() {
    this.showDetailsDialog = false;
    this.selectedApplicant = null;
    this.applicantTimeline = [];
    this.decisionHistory = [];
    this.currentFileNumber = null;
    this.isLoadingConsultations = false;
    this.isEditingDecision = false;
    this.editDecisionModel = {};
  }
  // ✅ التحقق من إمكانية تعديل القرار النهائي (لأي قرار موجود - مقبول / مرفوض / مؤجل)
  canEditFinalDecision() {
    return !!this.selectedApplicant?.finalDecision;
  }
  // ✅ تهيئة نموذج التعديل
  initEditDecision() {
    if (!this.selectedApplicant?.finalDecision) {
      return;
    }
    this.editDecisionModel = {
      resultID: this.selectedApplicant.finalDecision.resultID,
      reason: this.selectedApplicant.finalDecision.reason || "",
      decisionDate: this.selectedApplicant.finalDecision.decisionDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    this.isEditingDecision = true;
  }
  // ✅ إلغاء التعديل
  cancelEditDecision() {
    this.isEditingDecision = false;
    this.editDecisionModel = {};
  }
  loadDecisionHistory(fileNumber) {
    this.decisionHistory = [];
    this.decisionService.getDecisionHistory(fileNumber).subscribe({
      next: (list) => {
        this.decisionHistory = list ?? [];
        this.cdr.markForCheck();
      }
    });
  }
  // ✅ تحديث القرار النهائي باستخدام PUT API
  updateFinalDecision() {
    if (!this.selectedApplicant?.finalDecision || !this.selectedApplicant.fileNumber) {
      this.toastr.error("\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629", "\u062E\u0637\u0623");
      return;
    }
    const decisionId = this.selectedApplicant.finalDecision.decisionID;
    if (!decisionId) {
      this.toastr.error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", "\u062E\u0637\u0623");
      console.error("FinalDecision object:", this.selectedApplicant.finalDecision);
      return;
    }
    if (!this.selectedApplicant || !this.selectedApplicant.fileNumber) {
      this.toastr.error("\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", "\u062E\u0637\u0623");
      return;
    }
    if (!this.editDecisionModel.resultID) {
      this.toastr.warning("\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629", "\u062A\u062D\u0630\u064A\u0631");
      return;
    }
    this.updatingDecision = true;
    const updateModel = {
      orthopedicExamID: this.selectedApplicant.orthopedicExamDto?.orthopedicExamID || 0,
      surgicalExamID: this.selectedApplicant.surgicalExam?.surgicalExamID || 0,
      internalExamID: this.selectedApplicant.internalExam?.internalExamID || 0,
      eyeExamID: this.selectedApplicant.eyeExam?.eyeExamID || 0,
      earClinicID: this.selectedApplicant.earClinic?.earClinicID || 0,
      applicantFileNumber: this.selectedApplicant.fileNumber,
      resultID: this.editDecisionModel.resultID,
      reason: this.editDecisionModel.reason || "",
      decisionDate: this.editDecisionModel.decisionDate || this.selectedApplicant.finalDecision.decisionDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      // ✅ الحفاظ على التواريخ الأصلية
      receptionAddedAt: this.selectedApplicant.finalDecision.receptionAddedAt,
      supervisorAddedAt: this.selectedApplicant.finalDecision.supervisorAddedAt
      // ✅ supervisorLastModifiedAt سيتم إضافته تلقائياً في الـ service
    };
    const currentFileNumber = this.selectedApplicant.fileNumber;
    console.log("Updating Final Decision:", {
      decisionId,
      fileNumber: currentFileNumber,
      updateModel,
      finalDecision: this.selectedApplicant.finalDecision
    });
    this.decisionService.updateFinalDecision(decisionId, updateModel).subscribe({
      next: (response) => {
        this.updatingDecision = false;
        if (response.succeeded) {
          this.toastr.success("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0628\u0646\u062C\u0627\u062D. \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F \u0645\u0646 \u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631.", "\u0646\u062C\u0627\u062D");
          const fileNumber = this.selectedApplicant.fileNumber;
          this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
            next: (details) => {
              this.selectedApplicant = details;
              this.buildTimeline(details, fileNumber);
              this.isEditingDecision = false;
              this.editDecisionModel = {};
              const desc = details.finalDecision?.result?.description ?? (details.finalDecision?.resultID != null ? this.getResultDescription(details.finalDecision.resultID) : null);
              if (desc)
                this.finalResultByFile.set(fileNumber, desc);
              this.loadDecisionHistory(fileNumber);
              this.cdr.markForCheck();
            },
            error: () => {
              this.toastr.error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "\u062E\u0637\u0623");
            }
          });
        } else {
          this.toastr.error(response.message || "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A", "\u062E\u0637\u0623");
        }
      },
      error: (err) => {
        this.updatingDecision = false;
        let errorMsg = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A";
        if (err?.error?.message) {
          errorMsg = err.error.message;
        } else if (err?.error?.errors) {
          errorMsg = err.error.errors.detail?.join(", ") || err.error.errors.join(", ") || errorMsg;
        }
        this.toastr.error(errorMsg, "\u062E\u0637\u0623");
        console.error("Error updating final decision:", {
          error: err,
          decisionId,
          updateModel,
          finalDecision: this.selectedApplicant?.finalDecision
        });
      }
    });
  }
  static \u0275fac = function ApplicantsListSupervisor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicantsListSupervisor)(\u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DecisionService), \u0275\u0275directiveInject(LookupService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicantsListSupervisor, selectors: [["app-applicants-list-supervisor"]], viewQuery: function ApplicantsListSupervisor_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, decls: 38, vars: 46, consts: [["searchInput", ""], ["table", ""], ["noConsultations", ""], ["noInvestigations", ""], [1, "applicants-list-supervisor", "container-fluid"], [1, "page-header", "applicants-list-header"], [1, "header-content"], [1, "header-icon"], [1, "pi", "pi-users"], [1, "header-text"], [1, "page-title"], [1, "page-subtitle"], [1, "table-toolbar"], [1, "toolbar-filters"], [1, "filter-reset-wrap"], [3, "reset"], [1, "date-filters-wrapper"], [1, "date-field"], [1, "date-label"], ["dateFormat", "dd/mm/yy", "styleClass", "date-picker-toolbar", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "maxDate", "appendTo"], ["dateFormat", "dd/mm/yy", "styleClass", "date-picker-toolbar", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "minDate", "maxDate", "appendTo"], [1, "search-wrapper"], [1, "pi", "pi-search", "search-icon"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645...", 1, "search-input", 3, "input", "value"], [1, "table-container"], ["currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords} \u0633\u062C\u0644", "responsiveLayout", "scroll", 1, "custom-table", 3, "onLazyLoad", "value", "loading", "paginator", "rows", "totalRecords", "lazy", "rowsPerPageOptions", "showCurrentPageReport", "scrollable", "scrollHeight", "globalFilterFields"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0627\u0644\u0643\u0627\u0645\u0644\u0629", 3, "visibleChange", "onHide", "visible", "modal", "dismissableMask", "closeOnEscape", "closable", "draggable", "resizable"], ["class", "applicant-details", 4, "ngIf"], ["header", "\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", 3, "visibleChange", "onHide", "visible", "modal", "dismissableMask", "closeOnEscape", "closable", "draggable", "resizable"], ["class", "text-center py-5", 4, "ngIf"], ["class", "requests-dialog", 4, "ngIf"], ["pSortableColumn", "queueNumber"], ["field", "queueNumber"], ["pSortableColumn", "fileNumber"], ["field", "fileNumber"], ["pSortableColumn", "fullName"], ["field", "fullName"], ["pSortableColumn", "createdAt"], ["field", "createdAt"], ["pSortableColumn", "height"], ["field", "height"], ["pSortableColumn", "weight"], ["field", "weight"], [1, "text-center", "align-middle"], [1, "fw-bold", "badge", "bg-primary", "text-white", 2, "font-size", "0.65rem", "padding", "0.25rem 0.5rem"], [1, "fw-bold", "text-primary", 2, "font-size", "0.65rem"], [2, "font-size", "0.65rem"], ["style", "font-size: 0.65rem;", 4, "ngIf"], [2, "font-size", "0.65rem", 3, "ngClass"], ["class", "badge bg-info text-white", "style", "font-size: 0.65rem; padding: 0.25rem 0.5rem;", 4, "ngIf"], [1, "d-flex", "gap-1", "justify-content-center"], ["icon", "pi pi-eye", "label", "", "styleClass", "p-button-sm p-button-outlined", "title", "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644\u0629", 3, "click"], ["icon", "pi pi-list", "label", "", "styleClass", "p-button-sm p-button-primary", "title", "\u0639\u0631\u0636 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", 3, "click"], [1, "badge", "bg-info", "text-white", 2, "font-size", "0.65rem", "padding", "0.25rem 0.5rem"], ["colspan", "10", 1, "text-center", "py-4"], [1, "d-flex", "flex-column", "align-items-center"], [1, "fas", "fa-users", "text-muted", "mb-2", 2, "font-size", "2rem"], [1, "text-muted"], [1, "applicant-details"], [1, "details-section", "personal-info-section"], [1, "section-header"], [1, "section-icon"], [1, "pi", "pi-user"], [1, "section-title"], [1, "details-grid"], [1, "detail-item"], [1, "detail-label"], [1, "pi", "pi-id-card"], [1, "detail-value"], [1, "pi", "pi-calendar-minus"], [4, "ngIf"], [1, "pi", "pi-heart"], ["class", "badge bg-info text-white", 4, "ngIf"], [1, "pi", "pi-building"], [1, "pi", "pi-sort-numeric-up"], ["class", "badge bg-primary text-white", 4, "ngIf"], [1, "pi", "pi-calendar"], [1, "pi", "pi-briefcase"], [1, "pi", "pi-ruler"], [1, "pi", "pi-chart-line"], [1, "pi", "pi-calculator"], [1, "details-section", "timeline-section"], [1, "pi", "pi-history"], [1, "timeline-container"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["class", "timeline-empty", 4, "ngIf"], ["class", "details-section decision-history-section", 4, "ngIf"], ["class", "details-section edit-decision-section", 4, "ngIf"], [1, "badge", "bg-info", "text-white"], [1, "badge", "bg-primary", "text-white"], [1, "timeline-item"], [1, "timeline-marker", 3, "ngClass"], [1, "timeline-content"], [1, "timeline-header"], [1, "timeline-event-title"], ["styleClass", "timeline-date", 3, "value", "severity", 4, "ngIf"], [1, "timeline-description"], ["styleClass", "timeline-date", 3, "value", "severity"], [1, "timeline-empty"], [1, "pi", "pi-info-circle"], [1, "details-section", "decision-history-section"], [1, "section-title-wrapper"], [1, "section-subtitle"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-change"], [1, "pi", "pi-arrow-left", "mx-2"], [1, "history-meta"], ["class", "history-reason", 4, "ngIf"], [1, "history-reason"], [1, "details-section", "edit-decision-section"], [1, "section-header", "edit-section-header"], [1, "section-icon", "edit-section-icon"], [1, "pi", "pi-pencil"], ["class", "edit-decision-info", 4, "ngIf"], ["class", "edit-decision-form", 4, "ngIf"], [1, "edit-decision-info"], [1, "info-card"], [1, "info-icon"], [1, "info-content"], [1, "info-title"], [1, "info-text"], [1, "edit-action-wrapper"], ["label", "\u0628\u062F\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644", "icon", "pi pi-pencil", "severity", "warn", "styleClass", "edit-start-btn", 3, "onClick"], [1, "edit-decision-form"], [1, "form-card"], [1, "form-group"], [1, "form-label-enhanced"], [1, "pi", "pi-list"], [1, "required-star"], ["bindLabel", "description", "bindValue", "resultID", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629", 1, "enhanced-select", 3, "ngModelChange", "items", "ngModel", "clearable", "searchable"], [1, "pi", "pi-comment"], ["rows", "4", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0623\u0648 \u0627\u0644\u0633\u0628\u0628...", "maxlength", "500", 1, "form-control-enhanced", 3, "ngModelChange", "ngModel"], [1, "form-hint"], [1, "form-actions"], ["label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A", "icon", "pi pi-check", "severity", "success", "styleClass", "save-btn enhanced-save-btn", 3, "onClick", "loading", "disabled"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", "styleClass", "cancel-btn enhanced-cancel-btn", 3, "onClick", "disabled"], [1, "text-center", "py-5"], [1, "requests-dialog"], ["class", "requests-header", 4, "ngIf"], [1, "requests-grid"], [1, "requests-section"], [1, "pi", "pi-comments"], ["severity", "secondary", 3, "value"], [4, "ngIf", "ngIfElse"], [1, "pi", "pi-flask"], [1, "requests-header"], ["value", "\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", "severity", "info"], ["class", "request-card", 4, "ngFor", "ngForOf"], [1, "request-card"], [1, "card-header"], [1, "request-title"], [1, "card-body"], ["severity", "info", 3, "value"], [1, "empty-state"]], template: function ApplicantsListSupervisor_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
      \u0275\u0275element(4, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "h2", 10);
      \u0275\u0275text(7, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 11);
      \u0275\u0275text(9, "\u0639\u0631\u0636 \u0648\u0625\u062F\u0627\u0631\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 12)(11, "div", 13)(12, "div", 14)(13, "app-reset-filters-button", 15);
      \u0275\u0275listener("reset", function ApplicantsListSupervisor_Template_app_reset_filters_button_reset_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 16)(15, "div", 17)(16, "span", 18);
      \u0275\u0275text(17, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-datepicker", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ApplicantsListSupervisor_Template_p_datepicker_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onSelect", function ApplicantsListSupervisor_Template_p_datepicker_onSelect_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDateFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 17)(20, "span", 18);
      \u0275\u0275text(21, "\u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p-datepicker", 20);
      \u0275\u0275twoWayListener("ngModelChange", function ApplicantsListSupervisor_Template_p_datepicker_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onSelect", function ApplicantsListSupervisor_Template_p_datepicker_onSelect_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDateFilterChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 21);
      \u0275\u0275element(24, "i", 22);
      \u0275\u0275elementStart(25, "input", 23, 0);
      \u0275\u0275listener("input", function ApplicantsListSupervisor_Template_input_input_25_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 24)(28, "p-table", 25, 1);
      \u0275\u0275listener("onLazyLoad", function ApplicantsListSupervisor_Template_p_table_onLazyLoad_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275template(30, ApplicantsListSupervisor_ng_template_30_Template, 27, 0, "ng-template", 26)(31, ApplicantsListSupervisor_ng_template_31_Template, 32, 13, "ng-template", 27)(32, ApplicantsListSupervisor_ng_template_32_Template, 6, 0, "ng-template", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "p-dialog", 29);
      \u0275\u0275twoWayListener("visibleChange", function ApplicantsListSupervisor_Template_p_dialog_visibleChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showDetailsDialog, $event) || (ctx.showDetailsDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function ApplicantsListSupervisor_Template_p_dialog_onHide_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDetailsDialog());
      });
      \u0275\u0275template(34, ApplicantsListSupervisor_div_34_Template, 115, 22, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p-dialog", 31);
      \u0275\u0275twoWayListener("visibleChange", function ApplicantsListSupervisor_Template_p_dialog_visibleChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showRequestsDialog, $event) || (ctx.showRequestsDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function ApplicantsListSupervisor_Template_p_dialog_onHide_35_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeRequestsDialog());
      });
      \u0275\u0275template(36, ApplicantsListSupervisor_div_36_Template, 1, 0, "div", 32)(37, ApplicantsListSupervisor_div_37_Template, 23, 7, "div", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
      \u0275\u0275property("showIcon", true)("maxDate", ctx.dateTo)("appendTo", "body");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
      \u0275\u0275property("showIcon", true)("minDate", ctx.dateFrom)("maxDate", ctx.maxDate)("appendTo", "body");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.globalFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.applicants)("loading", ctx.loading)("paginator", true)("rows", ctx.pageSize)("totalRecords", ctx.totalRecords)("lazy", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(42, _c2))("showCurrentPageReport", true)("scrollable", true)("scrollHeight", ctx.tableHeight)("globalFilterFields", \u0275\u0275pureFunction0(43, _c3));
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.showDetailsDialog);
      \u0275\u0275property("modal", true)("dismissableMask", false)("closeOnEscape", true)("closable", true)("draggable", false)("resizable", false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.detailsLoading && ctx.selectedApplicant);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c5));
      \u0275\u0275twoWayProperty("visible", ctx.showRequestsDialog);
      \u0275\u0275property("modal", true)("dismissableMask", false)("closeOnEscape", true)("closable", true)("draggable", false)("resizable", false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.requestsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.requestsLoading);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    TagModule,
    Tag,
    InputTextModule,
    DialogModule,
    Dialog,
    CardModule,
    DividerModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    MaxLengthValidator,
    NgModel,
    NgSelectModule,
    NgSelectComponent,
    ResetFiltersButtonComponent,
    DatePickerModule,
    DatePicker,
    GregorianDatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.applicants-list-supervisor[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  min-height: calc(100vh - 200px);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  color: white;\n  margin-bottom: var(--spacing-2xl);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-xl);\n  position: relative;\n  overflow: hidden;\n  margin-bottom: var(--spacing-2xl);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.9) 0%,\n      rgba(66, 129, 119, 0.9) 100%);\n  z-index: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--accent-gold);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  color: var(--accent-gold);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  margin: var(--spacing-sm) 0 0 0;\n  opacity: 0.9;\n  font-size: var(--font-size-base);\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 400;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  max-width: 100%;\n  z-index: 1;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--spacing-md);\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--accent-gold);\n  font-size: var(--font-size-base);\n  pointer-events: none;\n  z-index: 2;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-sm) 2.5rem var(--spacing-sm) var(--spacing-lg);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background-color: rgba(255, 255, 255, 0.95);\n  color: var(--neutral-dark);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--neutral-medium);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent-gold);\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.2);\n  outline: none;\n  background-color: white;\n}\n@media (max-width: 768px) {\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n    gap: var(--spacing-lg);\n  }\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    gap: var(--spacing-lg);\n  }\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: var(--spacing-md);\n  }\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: var(--spacing-lg);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .table-toolbar[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .toolbar-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: var(--spacing-lg);\n  width: 100%;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .filter-reset-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .date-filters-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.95);\n  margin: 0;\n  letter-spacing: 0.02em;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  max-width: 360px;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]     .date-picker-toolbar.p-datepicker .p-inputtext, \n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]     p-datepicker.date-picker-toolbar .p-inputtext {\n  background: rgba(255, 255, 255, 0.98);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  min-width: 140px;\n  font-size: 0.9rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]     .date-picker-toolbar.p-datepicker .p-datepicker-trigger, \n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]     p-datepicker.date-picker-toolbar .p-datepicker-trigger {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: white;\n}\n@media (max-width: 768px) {\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .toolbar-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .applicants-list-supervisor[_ngcontent-%COMP%]   .applicants-list-header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-first, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-next, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n.requests-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid #e9ecef;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(5, 66, 57, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #054239;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: var(--radius-md);\n  padding: 1rem;\n  background: #fdfdfd;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]:hover {\n  border-color: #B9A779;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .request-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #054239;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  color: #5c636a;\n  font-size: 0.95rem;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.requests-dialog[_ngcontent-%COMP%]   .requests-section[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #054239;\n}\n.requests-dialog[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6c757d;\n  border: 1px dashed #ced4da;\n  border-radius: var(--radius-md);\n}\n.requests-dialog[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #B9A779;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-first, \n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-next, \n.requests-dialog[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n  .p-datatable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable-table-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .p-datatable-scrollable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n  .applicants-list-supervisor .p-datatable {\n  width: 100%;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  font-family: var(--font-family-primary);\n  direction: rtl;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.65rem !important;\n  font-weight: 700 !important;\n  padding: 0.5rem 0.6rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n  position: relative !important;\n  line-height: 1.4 !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th .p-sortable-column-icon {\n  font-size: 0.65rem !important;\n  margin-right: 0.25rem !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.4rem 0.6rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 400 !important;\n  white-space: normal !important;\n  word-wrap: break-word !important;\n  max-width: 150px !important;\n  vertical-align: middle !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.4 !important;\n  color: #34495e !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n  font-size: 0.65rem !important;\n  line-height: 1.4 !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n  padding: 0.25rem 0.5rem !important;\n  font-weight: 600 !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 4px;\n  padding: 0.35rem 0.6rem;\n  font-size: 0.65rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  min-width: auto;\n  border: 1px solid;\n  cursor: pointer;\n  font-family: var(--font-family-primary);\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button i, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .pi {\n  font-size: 0.7rem;\n  margin: 0;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator .p-paginator-first, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator .p-paginator-next, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm {\n  padding: 0.3rem 0.5rem;\n  font-size: 0.65rem;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm i, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm .pi {\n  font-size: 0.7rem;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator .p-paginator-first, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator .p-paginator-next, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined {\n  border-color: #3D3A3B;\n  color: #3D3A3B;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:hover:not(:disabled) {\n  background-color: #3D3A3B;\n  color: white;\n  border-color: #3D3A3B;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator .p-paginator-first, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator .p-paginator-next, \n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .p-button-label {\n  font-weight: 500;\n  margin: 0;\n}\n[_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .p-button-icon {\n  margin: 0;\n  margin-left: 0.25rem;\n}\n  .applicants-list-supervisor .p-paginator {\n  padding: 1rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border-top: 2px solid #e9ecef;\n  border-radius: 0 0 var(--radius-lg) var(--radius-lg);\n  font-size: 0.75rem;\n  font-family: var(--font-family-primary);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-current {\n  color: var(--neutral-dark);\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: white;\n  border-radius: var(--radius-md);\n  border: 1px solid #e9ecef;\n  box-shadow: var(--shadow-sm);\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown {\n  border-radius: var(--radius-md);\n  border: 1px solid #ced4da;\n  font-size: 0.75rem;\n  min-width: 80px;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown .p-inputtext {\n  padding: 0.4rem 0.75rem;\n  font-size: 0.75rem;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown:hover {\n  border-color: var(--primary-medium);\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown.p-focus {\n  border-color: var(--primary-dark);\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages, \n  .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-paginator .p-paginator-last {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2.25rem;\n  height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: var(--radius-md);\n  border: 1px solid #d1d9e0;\n  color: var(--primary-dark);\n  margin: 0 0.15rem;\n  background: white;\n  transition: all var(--transition-fast);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page:hover:not(.p-disabled):not(.p-highlight), \n  .applicants-list-supervisor .p-paginator .p-paginator-first:hover:not(.p-disabled):not(.p-highlight), \n  .applicants-list-supervisor .p-paginator .p-paginator-prev:hover:not(.p-disabled):not(.p-highlight), \n  .applicants-list-supervisor .p-paginator .p-paginator-next:hover:not(.p-disabled):not(.p-highlight), \n  .applicants-list-supervisor .p-paginator .p-paginator-last:hover:not(.p-disabled):not(.p-highlight) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page.p-disabled, \n  .applicants-list-supervisor .p-paginator .p-paginator-first.p-disabled, \n  .applicants-list-supervisor .p-paginator .p-paginator-prev.p-disabled, \n  .applicants-list-supervisor .p-paginator .p-paginator-next.p-disabled, \n  .applicants-list-supervisor .p-paginator .p-paginator-last.p-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: #f8f9fa;\n  color: #adb5bd;\n  border-color: #e9ecef;\n}\n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-paginator   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page {\n  border-radius: var(--radius-md);\n  min-width: 2.25rem;\n  height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border-color: var(--primary-dark);\n  box-shadow: 0 2px 4px rgba(5, 66, 57, 0.2);\n  transform: scale(1.05);\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-emptymessage {\n  padding: 2rem !important;\n  text-align: center !important;\n  color: var(--neutral-medium) !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-emptymessage td {\n  border: none !important;\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-loading-overlay {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n  .applicants-list-supervisor .p-datatable .p-datatable-loading-icon {\n  color: var(--primary-dark);\n  font-size: 2rem;\n}\n  .applicants-list-supervisor .p-dialog-mask {\n  background: rgba(0, 0, 0, 0.6) !important;\n  -webkit-backdrop-filter: none !important;\n  backdrop-filter: none !important;\n}\n  .applicants-list-supervisor .p-dialog {\n  background: white !important;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;\n}\n  .applicants-list-supervisor .p-dialog .p-dialog-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n  .applicants-list-supervisor .p-dialog .p-dialog-header .p-dialog-title {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n  .applicants-list-supervisor .p-dialog .p-dialog-header .p-dialog-header-icon {\n  color: white;\n}\n  .applicants-list-supervisor .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n  .applicants-list-supervisor .p-dialog .p-dialog-content {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n  background: white !important;\n}\n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator .p-paginator-first, \n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator .p-paginator-prev, \n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator .p-paginator-next, \n  .applicants-list-supervisor .p-dialog   .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid #e9ecef;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%] {\n  border: 1px solid rgba(5, 66, 57, 0.15);\n  padding: var(--spacing-lg, 1rem);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%]   .history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.9rem;\n  background: #f8fbfa;\n  border-radius: 8px;\n  border-right: 3px solid var(--primary-dark, #054239);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-change[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  margin-bottom: 0.25rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-change[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-dark, #054239);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.decision-history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-reason[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0 0;\n  font-size: 0.85rem;\n  color: #495057;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border: 2px solid var(--accent-gold, #d4af37);\n  border-radius: var(--radius-xl, 12px);\n  padding: var(--spacing-xl, 1.5rem);\n  margin-top: var(--spacing-xl, 1.5rem);\n  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-lg, 1rem);\n  margin-bottom: var(--spacing-lg, 1rem);\n  padding-bottom: var(--spacing-md, 1rem);\n  border-bottom: 2px solid rgba(212, 175, 55, 0.2);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-section-header[_ngcontent-%COMP%]   .edit-section-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold, #d4af37) 0%,\n      #b8941f 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-section-header[_ngcontent-%COMP%]   .edit-section-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-section-header[_ngcontent-%COMP%]   .section-title-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-section-header[_ngcontent-%COMP%]   .section-title-wrapper[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--primary-dark, #054239);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-section-header[_ngcontent-%COMP%]   .section-title-wrapper[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: var(--radius-lg, 8px);\n  padding: var(--spacing-lg, 1rem);\n  margin-bottom: var(--spacing-lg, 1rem);\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing-md, 0.75rem);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #e3f2fd;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #2196f3;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--primary-dark, #054239);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.5;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-info[_ngcontent-%COMP%]   .edit-action-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: var(--spacing-md, 1rem);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: var(--radius-lg, 8px);\n  padding: var(--spacing-xl, 1.5rem);\n  margin-bottom: var(--spacing-lg, 1rem);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg, 1.5rem);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  color: var(--primary-dark, #054239);\n  margin-bottom: 0.5rem;\n  font-size: 0.95rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-gold, #d4af37);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label-enhanced[_ngcontent-%COMP%]   .required-star[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ced4da;\n  border-radius: var(--radius-md, 6px);\n  transition: all 0.3s ease;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold, #d4af37);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .enhanced-select[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--accent-gold, #d4af37);\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: var(--radius-md, 6px);\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  resize: vertical;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control-enhanced[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-gold, #d4af37);\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: 0.5rem;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]   .edit-decision-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md, 0.75rem);\n  justify-content: flex-end;\n  padding-top: var(--spacing-lg, 1.5rem);\n  border-top: 2px solid rgba(212, 175, 55, 0.15);\n  margin-top: var(--spacing-md, 1rem);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .edit-start-btn {\n  min-width: 160px;\n  font-weight: 600;\n  padding: 0.75rem 1.5rem;\n  border-radius: var(--radius-lg, 8px);\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .edit-start-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-save-btn {\n  min-width: 180px;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.875rem 2rem;\n  border-radius: var(--radius-lg, 8px);\n  background:\n    linear-gradient(\n      135deg,\n      #28a745 0%,\n      #20c997 100%) !important;\n  border: none !important;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n  transition: all 0.3s ease;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-save-btn .p-button-label {\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-save-btn .p-button-icon {\n  font-size: 1.1rem;\n  margin-left: 0.5rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-save-btn:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #218838 0%,\n      #1ea080 100%) !important;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-save-btn:active:not(:disabled) {\n  transform: translateY(-1px);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-save-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-cancel-btn {\n  min-width: 160px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  padding: 0.875rem 1.75rem;\n  border-radius: var(--radius-lg, 8px);\n  background: #ffffff !important;\n  color: #6c757d !important;\n  border: 2px solid #dee2e6 !important;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-cancel-btn .p-button-label {\n  font-weight: 600;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-cancel-btn .p-button-icon {\n  font-size: 1rem;\n  margin-left: 0.5rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-cancel-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  background: #f8f9fa !important;\n  border-color: #adb5bd !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  color: #495057 !important;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-cancel-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.edit-decision-section[_ngcontent-%COMP%]     .enhanced-cancel-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.25rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.personal-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.personal-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: var(--radius-md);\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.personal-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.personal-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  color: #054239;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.personal-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B9A779;\n  font-size: 1rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.personal-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #34495e;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem 0 0 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 20px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      #054239 0%,\n      #428177 50%,\n      #B9A779 100%);\n  border-radius: 2px;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 60px;\n  margin-bottom: 2rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 0;\n  width: 28px;\n  height: 28px;\n  background: white;\n  border: 3px solid #054239;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #054239;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-entry[_ngcontent-%COMP%] {\n  border-color: #428177;\n  background: #428177;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-entry[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-exam[_ngcontent-%COMP%] {\n  border-color: #B9A779;\n  background: #B9A779;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-exam[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-consultation[_ngcontent-%COMP%] {\n  border-color: #66b5a8;\n  background: #66b5a8;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-consultation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-investigation[_ngcontent-%COMP%] {\n  border-color: #428177;\n  background: #428177;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-investigation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-decision[_ngcontent-%COMP%] {\n  border-color: #054239;\n  background: #054239;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-decision[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-exit[_ngcontent-%COMP%] {\n  border-color: #6B1F2A;\n  background: #6B1F2A;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.marker-exit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.25rem;\n  border-radius: var(--radius-md);\n  border: 1px solid #e9ecef;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.2s ease;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateX(-4px);\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-event-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-description[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  display: block;\n  color: #B9A779;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]   .applicant-details[_ngcontent-%COMP%]   .details-section.timeline-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-first, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-next, \n.applicants-list-supervisor[_ngcontent-%COMP%]     .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n@media (max-width: 1200px) {\n    .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.6rem !important;\n    padding: 0.45rem 0.5rem !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n    font-size: 0.6rem !important;\n    padding: 0.35rem 0.5rem !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span, \n     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small, \n     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    font-size: 0.6rem !important;\n  }\n    .applicants-list-supervisor .p-paginator {\n    padding: 0.75rem 0.5rem !important;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.65rem !important;\n    padding: 0.4rem 0.75rem !important;\n    width: 100%;\n    text-align: center;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n     .applicants-list-supervisor .p-paginator .p-paginator-first, \n     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n     .applicants-list-supervisor .p-paginator .p-paginator-next, \n     .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2rem !important;\n    height: 2rem !important;\n    font-size: 0.65rem !important;\n  }\n}\n@media (max-width: 768px) {\n    .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.55rem !important;\n    padding: 0.4rem 0.4rem !important;\n    letter-spacing: 0.2px !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n    font-size: 0.55rem !important;\n    padding: 0.3rem 0.4rem !important;\n    max-width: 120px !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span, \n     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small, \n     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    font-size: 0.55rem !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    padding: 0.2rem 0.4rem !important;\n  }\n  [_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button {\n    padding: 0.25rem 0.4rem;\n    font-size: 0.55rem;\n  }\n  [_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button i, \n   [_nghost-%COMP%]     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .pi {\n    font-size: 0.6rem;\n  }\n    .applicants-list-supervisor .p-paginator {\n    padding: 0.875rem 1rem !important;\n    font-size: 0.7rem !important;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.7rem !important;\n    padding: 0.45rem 0.875rem !important;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n     .applicants-list-supervisor .p-paginator .p-paginator-first, \n     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n     .applicants-list-supervisor .p-paginator .p-paginator-next, \n     .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2.1rem !important;\n    height: 2.1rem !important;\n    font-size: 0.7rem !important;\n  }\n    .applicants-list-supervisor .p-paginator {\n    padding: 0.75rem 0.5rem !important;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.65rem !important;\n    padding: 0.4rem 0.75rem !important;\n    width: 100%;\n    text-align: center;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n     .applicants-list-supervisor .p-paginator .p-paginator-first, \n     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n     .applicants-list-supervisor .p-paginator .p-paginator-next, \n     .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2rem !important;\n    height: 2rem !important;\n    font-size: 0.65rem !important;\n  }\n}\n@media (max-width: 480px) {\n    .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.5rem !important;\n    padding: 0.35rem 0.3rem !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n    font-size: 0.5rem !important;\n    padding: 0.25rem 0.3rem !important;\n    max-width: 100px !important;\n  }\n    .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span, \n     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small, \n     .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    font-size: 0.5rem !important;\n  }\n    .applicants-list-supervisor .p-paginator {\n    padding: 0.75rem 0.5rem !important;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.65rem !important;\n    padding: 0.4rem 0.75rem !important;\n    width: 100%;\n    text-align: center;\n  }\n    .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page, \n     .applicants-list-supervisor .p-paginator .p-paginator-first, \n     .applicants-list-supervisor .p-paginator .p-paginator-prev, \n     .applicants-list-supervisor .p-paginator .p-paginator-next, \n     .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2rem !important;\n    height: 2rem !important;\n    font-size: 0.65rem !important;\n  }\n}\n/*# sourceMappingURL=applicants-list-supervisor.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicantsListSupervisor, [{
    type: Component,
    args: [{ selector: "app-applicants-list-supervisor", standalone: true, imports: [
      CommonModule,
      TableModule,
      ButtonModule,
      TagModule,
      InputTextModule,
      DialogModule,
      CardModule,
      DividerModule,
      GregorianDatePipe,
      FormsModule,
      NgSelectModule,
      ResetFiltersButtonComponent,
      DatePickerModule
    ], template: `<div class="applicants-list-supervisor container-fluid">\r
  <!-- Header Section -->\r
  <div class="page-header applicants-list-header">\r
    <div class="header-content">\r
      <div class="header-icon">\r
        <i class="pi pi-users"></i>\r
      </div>\r
      <div class="header-text">\r
        <h2 class="page-title">\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646</h2>\r
        <p class="page-subtitle">\u0639\u0631\u0636 \u0648\u0625\u062F\u0627\u0631\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645</p>\r
      </div>\r
    </div>\r
    <div class="table-toolbar">\r
      <div class="toolbar-filters">\r
        <div class="filter-reset-wrap">\r
          <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
        </div>\r
        <div class="date-filters-wrapper">\r
          <div class="date-field">\r
            <span class="date-label">\u0645\u0646 \u062A\u0627\u0631\u064A\u062E</span>\r
            <p-datepicker [(ngModel)]="dateFrom" [showIcon]="true" dateFormat="dd/mm/yy" [maxDate]="dateTo"\r
              (onSelect)="onDateFilterChange()" [appendTo]="'body'" styleClass="date-picker-toolbar"></p-datepicker>\r
          </div>\r
          <div class="date-field">\r
            <span class="date-label">\u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E</span>\r
            <p-datepicker [(ngModel)]="dateTo" [showIcon]="true" dateFormat="dd/mm/yy" [minDate]="dateFrom"\r
              [maxDate]="maxDate" (onSelect)="onDateFilterChange()" [appendTo]="'body'"\r
              styleClass="date-picker-toolbar"></p-datepicker>\r
          </div>\r
        </div>\r
        <div class="search-wrapper">\r
          <i class="pi pi-search search-icon"></i>\r
          <input #searchInput type="text" class="search-input" placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645..."\r
            (input)="onFilterChange($event)" [value]="globalFilter">\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table Section -->\r
  <div class="table-container">\r
    <p-table #table [value]="applicants" [loading]="loading" [paginator]="true" [rows]="pageSize"\r
      [totalRecords]="totalRecords" [lazy]="true" (onLazyLoad)="onPageChange($event)"\r
      [rowsPerPageOptions]="[10, 20, 50, 100]" [showCurrentPageReport]="true"\r
      currentPageReportTemplate="\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords} \u0633\u062C\u0644" [scrollable]="true"\r
      [scrollHeight]="tableHeight" [globalFilterFields]="['fileNumber', 'fullName']" responsiveLayout="scroll"\r
      class="custom-table">\r
\r
      <ng-template pTemplate="header">\r
        <tr>\r
          <th pSortableColumn="queueNumber">\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631 <p-sortIcon field="queueNumber"></p-sortIcon></th>\r
          <th pSortableColumn="fileNumber">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 <p-sortIcon field="fileNumber"></p-sortIcon></th>\r
          <th pSortableColumn="fullName">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 <p-sortIcon field="fullName"></p-sortIcon></th>\r
          <th pSortableColumn="createdAt">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629 <p-sortIcon field="createdAt"></p-sortIcon></th>\r
          <th>\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629</th>\r
          <th>\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</th>\r
          <th>\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645</th>\r
          <th pSortableColumn="height">\u0627\u0644\u0637\u0648\u0644 <p-sortIcon field="height"></p-sortIcon></th>\r
          <th pSortableColumn="weight">\u0627\u0644\u0648\u0632\u0646 <p-sortIcon field="weight"></p-sortIcon></th>\r
          <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template pTemplate="body" let-applicant>\r
        <tr>\r
          <td class="text-center align-middle">\r
            <span class="fw-bold badge bg-primary text-white" style="font-size: 0.65rem; padding: 0.25rem 0.5rem;">{{\r
              applicant.queueNumber || '-' }}</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span class="fw-bold text-primary" style="font-size: 0.65rem;">{{ applicant.fileNumber }}</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span style="font-size: 0.65rem;">{{ applicant.fullName }}</span>\r
          </td>\r
\r
          <td class="text-center align-middle">\r
            <span *ngIf="applicant.createdAt" style="font-size: 0.65rem;">\r
              {{ applicant.createdAt | gregorianDate:'yyyy/MM/dd' }}\r
            </span>\r
            <span *ngIf="!applicant.createdAt" style="font-size: 0.65rem;">-</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span [ngClass]="getBadgeClass(getFinalResult(applicant.fileNumber))" style="font-size: 0.65rem;">\r
              {{ getFinalResult(applicant.fileNumber) }}\r
            </span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span *ngIf="applicant.maritalStatus" style="font-size: 0.65rem;">\r
              {{ applicant.maritalStatus.description }}\r
            </span>\r
            <span *ngIf="!applicant.maritalStatus" style="font-size: 0.65rem;">-</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span *ngIf="applicant.bloodType" class="badge bg-info text-white"\r
              style="font-size: 0.65rem; padding: 0.25rem 0.5rem;">\r
              {{ applicant.bloodType }}\r
            </span>\r
            <span *ngIf="!applicant.bloodType" style="font-size: 0.65rem;">-</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span style="font-size: 0.65rem;">{{ applicant.height ? applicant.height + ' \u0633\u0645' : '-' }}</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <span style="font-size: 0.65rem;">{{ applicant.weight ? applicant.weight + ' \u0643\u063A' : '-' }}</span>\r
          </td>\r
          <td class="text-center align-middle">\r
            <div class="d-flex gap-1 justify-content-center">\r
              <p-button icon="pi pi-eye" label="" styleClass="p-button-sm p-button-outlined"\r
                (click)="viewDetails(applicant)" title="\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644\u0629">\r
              </p-button>\r
              <p-button icon="pi pi-list" label="" styleClass="p-button-sm p-button-primary"\r
                (click)="openRequestsDialog(applicant)" title="\u0639\u0631\u0636 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A">\r
              </p-button>\r
            </div>\r
          </td>\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template pTemplate="emptymessage">\r
        <tr>\r
          <td colspan="10" class="text-center py-4">\r
            <div class="d-flex flex-column align-items-center">\r
              <i class="fas fa-users text-muted mb-2" style="font-size: 2rem;"></i>\r
              <span class="text-muted">\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u0633\u0628\u064A\u0646</span>\r
            </div>\r
          </td>\r
        </tr>\r
      </ng-template>\r
    </p-table>\r
  </div>\r
\r
  <!-- Details Dialog: \u0646\u0641\u0633 \u0622\u0644\u064A\u0629 \u0648\u062D\u062C\u0645 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A 70rem -->\r
  <p-dialog [(visible)]="showDetailsDialog" [modal]="true" [dismissableMask]="false" [closeOnEscape]="true"\r
    [style]="{width: '70rem', minWidth: '70rem'}"\r
    [closable]="true" [draggable]="false" [resizable]="false" header="\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0627\u0644\u0643\u0627\u0645\u0644\u0629"\r
    (onHide)="closeDetailsDialog()">\r
\r
\r
\r
    <div *ngIf="!detailsLoading && selectedApplicant" class="applicant-details">\r
      <!-- \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 -->\r
      <div class="details-section personal-info-section">\r
        <div class="section-header">\r
          <div class="section-icon">\r
            <i class="pi pi-user"></i>\r
          </div>\r
          <h3 class="section-title">\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629</h3>\r
        </div>\r
        <div class="details-grid">\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-id-card"></i>\r
              <span>\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.fileNumber }}</div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-user"></i>\r
              <span>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.fullName }}</div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-users"></i>\r
              <span>\u0627\u0633\u0645 \u0627\u0644\u0623\u0645</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.motherName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-calendar-minus"></i>\r
              <span>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F</span>\r
            </div>\r
            <div class="detail-value">\r
              <span *ngIf="selectedApplicant.dateOfBirth">\r
                {{ selectedApplicant.dateOfBirth | gregorianDate:'yyyy/MM/dd' }}\r
              </span>\r
              <span *ngIf="!selectedApplicant.dateOfBirth">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-heart"></i>\r
              <span>\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645</span>\r
            </div>\r
            <div class="detail-value">\r
              <span *ngIf="selectedApplicant.bloodType" class="badge bg-info text-white">\r
                {{ selectedApplicant.bloodType }}\r
              </span>\r
              <span *ngIf="!selectedApplicant.bloodType">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-building"></i>\r
              <span>\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.recruitmentCenter || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-sort-numeric-up"></i>\r
              <span>\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631</span>\r
            </div>\r
            <div class="detail-value">\r
              <span *ngIf="selectedApplicant.queueNumber" class="badge bg-primary text-white">\r
                {{ selectedApplicant.queueNumber }}\r
              </span>\r
              <span *ngIf="!selectedApplicant.queueNumber">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-calendar"></i>\r
              <span>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629</span>\r
            </div>\r
            <div class="detail-value">\r
              <span *ngIf="selectedApplicant.createdAt">\r
                {{ selectedApplicant.createdAt | gregorianDate:'yyyy/MM/dd' }}\r
              </span>\r
              <span *ngIf="!selectedApplicant.createdAt">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-briefcase"></i>\r
              <span>\u0627\u0644\u0639\u0645\u0644</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.job || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-heart"></i>\r
              <span>\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</span>\r
            </div>\r
            <div class="detail-value">\r
              <span *ngIf="selectedApplicant.maritalStatus">\r
                {{ selectedApplicant.maritalStatus.description }}\r
              </span>\r
              <span *ngIf="!selectedApplicant.maritalStatus">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</span>\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-ruler"></i>\r
              <span>\u0627\u0644\u0637\u0648\u0644</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.height ? selectedApplicant.height + ' \u0633\u0645' : '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-chart-line"></i>\r
              <span>\u0627\u0644\u0648\u0632\u0646</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.weight ? selectedApplicant.weight + ' \u0643\u063A' : '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}\r
            </div>\r
          </div>\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <i class="pi pi-calculator"></i>\r
              <span>BMI</span>\r
            </div>\r
            <div class="detail-value">{{ selectedApplicant.bmi ? selectedApplicant.bmi.toFixed(1) : '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Timeline -->\r
      <div class="details-section timeline-section">\r
        <div class="section-header">\r
          <div class="section-icon">\r
            <i class="pi pi-history"></i>\r
          </div>\r
          <h3 class="section-title">\u0633\u062C\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 \u0645\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0631\u0648\u062C</h3>\r
        </div>\r
        <div class="timeline-container">\r
          <div *ngFor="let event of applicantTimeline; let i = index" class="timeline-item">\r
            <div class="timeline-marker" [ngClass]="'marker-' + event.type">\r
              <i [class]="'pi ' + getTimelineIcon(event.type)"></i>\r
            </div>\r
            <div class="timeline-content">\r
              <div class="timeline-header">\r
                <h6 class="timeline-event-title">{{ event.event }}</h6>\r
                <p-tag *ngIf="event.date" [value]="getFormattedDate(event.date)"\r
                  [severity]="getTimelineSeverity(event.type)" styleClass="timeline-date">\r
                </p-tag>\r
              </div>\r
              <p class="timeline-description">{{ event.description }}</p>\r
            </div>\r
          </div>\r
          <div *ngIf="applicantTimeline.length === 0" class="timeline-empty">\r
            <i class="pi pi-info-circle"></i>\r
            <span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062D\u062F\u0627\u062B \u0645\u0633\u062C\u0644\u0629</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u2705 \u0633\u062C\u0644 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 (\u0643\u0627\u0646 \u0645\u0631\u0641\u0648\u0636 \u2192 \u0635\u0627\u0631 \u0645\u0642\u0628\u0648\u0644) -->\r
      <div *ngIf="decisionHistory.length > 0" class="details-section decision-history-section">\r
        <div class="section-header">\r
          <div class="section-icon"><i class="pi pi-history"></i></div>\r
          <div class="section-title-wrapper">\r
            <h3 class="section-title">\u0633\u062C\u0644 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629</h3>\r
            <p class="section-subtitle">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0646 \u0646\u062A\u064A\u062C\u0629 \u0625\u0644\u0649 \u0623\u062E\u0631\u0649</p>\r
          </div>\r
        </div>\r
        <div class="history-list">\r
          <div *ngFor="let item of decisionHistory" class="history-item">\r
            <span class="history-change">\r
              \u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u0628\u0644 \u0645\u0646 <strong>{{ item.previousResultDescription || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>\r
\r
              <i class="pi pi-arrow-left mx-2"></i>\r
              <strong>{{ item.newResultDescription || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>\r
            </span>\r
            <span class="history-meta">\r
              {{ item.changedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}\r
              <span *ngIf="item.changedBy"> \u2014 {{ item.changedBy }}</span>\r
            </span>\r
            <p *ngIf="item.reason" class="history-reason">{{ item.reason }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u2705 \u0642\u0633\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A (\u0644\u0623\u064A \u0642\u0631\u0627\u0631: \u0645\u0642\u0628\u0648\u0644 / \u0645\u0631\u0641\u0648\u0636 / \u0645\u0624\u062C\u0644) -->\r
      <div *ngIf="canEditFinalDecision()" class="details-section edit-decision-section">\r
        <div class="section-header edit-section-header">\r
          <div class="section-icon edit-section-icon">\r
            <i class="pi pi-pencil"></i>\r
          </div>\r
          <div class="section-title-wrapper">\r
            <h3 class="section-title">\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A</h3>\r
            <p class="section-subtitle">\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 (\u0645\u0642\u0628\u0648\u0644 / \u0645\u0631\u0641\u0648\u0636 / \u0645\u0624\u062C\u0644) \u0648\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629. \u0628\u0639\u062F \u0627\u0644\u062D\u0641\u0638 \u064A\u064F\u0633\u0645\u062D\r
              \u0628\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F.</p>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="!isEditingDecision" class="edit-decision-info">\r
          <div class="info-card">\r
            <div class="info-icon">\r
              <i class="pi pi-info-circle"></i>\r
            </div>\r
            <div class="info-content">\r
              <h6 class="info-title">\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629: {{\r
                getFinalResultDescription(selectedApplicant!.finalDecision?.resultID) }}</h6>\r
              <p class="info-text">\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0625\u0644\u0649 \u0623\u064A \u0645\u0646 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A (\u0645\u0642\u0628\u0648\u0644\u060C \u0645\u0631\u0641\u0648\u0636\u060C \u0645\u0624\u062C\u0644) \u0648\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629. \u0628\u0639\u062F\r
                \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u062A\u062C\u0646\u064A\u062F.</p>\r
            </div>\r
          </div>\r
          <div class="edit-action-wrapper">\r
            <p-button label="\u0628\u062F\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644" icon="pi pi-pencil" severity="warn" (onClick)="initEditDecision()"\r
              styleClass="edit-start-btn">\r
            </p-button>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="isEditingDecision" class="edit-decision-form">\r
          <div class="form-card">\r
            <div class="form-group">\r
              <label class="form-label-enhanced">\r
                <i class="pi pi-list"></i>\r
                <span>\u0627\u0644\u0646\u062A\u064A\u062C\u0629 <span class="required-star">*</span></span>\r
              </label>\r
              <ng-select [items]="results" bindLabel="description" bindValue="resultID"\r
                [(ngModel)]="editDecisionModel.resultID" placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629" [clearable]="false"\r
                [searchable]="false" class="enhanced-select">\r
              </ng-select>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label-enhanced">\r
                <i class="pi pi-comment"></i>\r
                <span>\u0627\u0644\u062A\u0648\u0635\u064A\u0629 / \u0627\u0644\u0633\u0628\u0628</span>\r
              </label>\r
              <textarea class="form-control-enhanced" [(ngModel)]="editDecisionModel.reason" rows="4"\r
                placeholder="\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0623\u0648 \u0627\u0644\u0633\u0628\u0628..." maxlength="500">\r
              </textarea>\r
              <small class="form-hint">\r
                <i class="pi pi-info-circle"></i>\r
                \u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0623\u0648 \u0627\u0644\u0633\u0628\u0628 \u062D\u0633\u0628 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629\r
              </small>\r
            </div>\r
          </div>\r
\r
          <div class="form-actions">\r
            <p-button label="\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A" icon="pi pi-check" severity="success" (onClick)="updateFinalDecision()"\r
              [loading]="updatingDecision" [disabled]="updatingDecision || !editDecisionModel.resultID"\r
              styleClass="save-btn enhanced-save-btn">\r
            </p-button>\r
            <p-button label="\u0625\u0644\u063A\u0627\u0621" icon="pi pi-times" severity="secondary" (onClick)="cancelEditDecision()"\r
              [disabled]="updatingDecision" styleClass="cancel-btn enhanced-cancel-btn">\r
            </p-button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </p-dialog>\r
\r
  <!-- Requests Dialog: \u0646\u0641\u0633 \u062D\u062C\u0645 \u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629/\u062A\u062D\u0644\u064A\u0644 40rem -->\r
  <p-dialog [(visible)]="showRequestsDialog" [modal]="true" [dismissableMask]="false" [closeOnEscape]="true"\r
    [style]="{width: '40rem', minWidth: '40rem'}"\r
    [closable]="true" [draggable]="false" [resizable]="false" header="\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A"\r
    (onHide)="closeRequestsDialog()">\r
\r
    <div *ngIf="requestsLoading" class="text-center py-5">\r
\r
    </div>\r
\r
    <div *ngIf="!requestsLoading" class="requests-dialog">\r
      <div class="requests-header" *ngIf="selectedApplicantSummary">\r
        <div>\r
          <h5>\u0627\u0644\u0645\u0646\u062A\u0633\u0628: {{ selectedApplicantSummary.fullName }}</h5>\r
          <p>\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ selectedApplicantSummary.fileNumber }}</p>\r
        </div>\r
        <p-tag value="\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A" severity="info"></p-tag>\r
      </div>\r
\r
      <div class="requests-grid">\r
        <div class="requests-section">\r
          <div class="section-header">\r
            <div class="section-icon">\r
              <i class="pi pi-comments"></i>\r
            </div>\r
            <h3>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</h3>\r
            <p-tag [value]="applicantConsultations.length + ''" severity="secondary"></p-tag>\r
          </div>\r
\r
          <ng-container *ngIf="applicantConsultations.length; else noConsultations">\r
            <div class="request-card" *ngFor="let consultation of applicantConsultations">\r
              <div class="card-header">\r
                <span class="request-title">{{ consultation.consultationType }}</span>\r
                <p-tag [value]="consultation.result || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'" severity="secondary">\r
                </p-tag>\r
              </div>\r
              <div class="card-body">\r
                <p><strong>\u0627\u0644\u0633\u0628\u0628:</strong> {{ consultation.referralReason || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</p>\r
                <p><strong>\u0627\u0644\u0637\u0628\u064A\u0628:</strong> {{ consultation.doctor?.fullName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</p>\r
              </div>\r
            </div>\r
          </ng-container>\r
        </div>\r
\r
        <div class="requests-section">\r
          <div class="section-header">\r
            <div class="section-icon">\r
              <i class="pi pi-flask"></i>\r
            </div>\r
            <h3>\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644</h3>\r
            <p-tag [value]="applicantInvestigations.length + ''" severity="secondary"></p-tag>\r
          </div>\r
\r
          <ng-container *ngIf="applicantInvestigations.length; else noInvestigations">\r
            <div class="request-card" *ngFor="let investigation of applicantInvestigations">\r
              <div class="card-header">\r
                <span class="request-title">{{ investigation.type }}</span>\r
                <p-tag [value]="investigation.status || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'" severity="info">\r
                </p-tag>\r
              </div>\r
              <div class="card-body">\r
                <p><strong>\u0627\u0644\u0646\u062A\u064A\u062C\u0629:</strong> {{ investigation.result || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</p>\r
                <p><strong>\u0627\u0644\u0633\u0628\u0628:</strong> {{ investigation.investigationReason || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</p>\r
              </div>\r
            </div>\r
          </ng-container>\r
        </div>\r
      </div>\r
\r
      <ng-template #noConsultations>\r
        <div class="empty-state">\r
          <i class="pi pi-info-circle"></i>\r
          <span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0645\u0633\u062C\u0644\u0629</span>\r
        </div>\r
      </ng-template>\r
\r
      <ng-template #noInvestigations>\r
        <div class="empty-state">\r
          <i class="pi pi-info-circle"></i>\r
          <span>\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644 \u0645\u0633\u062C\u0644\u0629</span>\r
        </div>\r
      </ng-template>\r
    </div>\r
  </p-dialog>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/supervisor/components/applicants-list-supervisor/applicants-list-supervisor.scss */\n.applicants-list-supervisor {\n  background: white;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n  margin: 0 auto var(--spacing-md);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  min-height: calc(100vh - 200px);\n}\n.applicants-list-supervisor .page-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  color: white;\n  margin-bottom: var(--spacing-2xl);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-xl);\n  position: relative;\n  overflow: hidden;\n  margin-bottom: var(--spacing-2xl);\n}\n.applicants-list-supervisor .page-header::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.9) 0%,\n      rgba(66, 129, 119, 0.9) 100%);\n  z-index: 0;\n}\n.applicants-list-supervisor .page-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.applicants-list-supervisor .page-header .header-content .header-icon {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--accent-gold);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.applicants-list-supervisor .page-header .header-content .header-icon i {\n  font-size: var(--font-size-2xl);\n  color: var(--accent-gold);\n}\n.applicants-list-supervisor .page-header .header-content .header-text .page-title {\n  margin: 0;\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.applicants-list-supervisor .page-header .header-content .header-text .page-subtitle {\n  margin: var(--spacing-sm) 0 0 0;\n  opacity: 0.9;\n  font-size: var(--font-size-base);\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 400;\n}\n.applicants-list-supervisor .page-header .search-wrapper {\n  position: relative;\n  width: 400px;\n  max-width: 100%;\n  z-index: 1;\n}\n.applicants-list-supervisor .page-header .search-wrapper .search-icon {\n  position: absolute;\n  right: var(--spacing-md);\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--accent-gold);\n  font-size: var(--font-size-base);\n  pointer-events: none;\n  z-index: 2;\n}\n.applicants-list-supervisor .page-header .search-wrapper .search-input {\n  width: 100%;\n  padding: var(--spacing-sm) 2.5rem var(--spacing-sm) var(--spacing-lg);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background-color: rgba(255, 255, 255, 0.95);\n  color: var(--neutral-dark);\n}\n.applicants-list-supervisor .page-header .search-wrapper .search-input::placeholder {\n  color: var(--neutral-medium);\n}\n.applicants-list-supervisor .page-header .search-wrapper .search-input:focus {\n  border-color: var(--accent-gold);\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.2);\n  outline: none;\n  background-color: white;\n}\n@media (max-width: 768px) {\n  .applicants-list-supervisor .page-header {\n    padding: var(--spacing-xl);\n    gap: var(--spacing-lg);\n  }\n  .applicants-list-supervisor .page-header .header-content {\n    gap: var(--spacing-lg);\n  }\n  .applicants-list-supervisor .page-header .header-content .header-icon {\n    width: 50px;\n    height: 50px;\n  }\n  .applicants-list-supervisor .page-header .header-content .header-icon i {\n    font-size: var(--font-size-xl);\n  }\n  .applicants-list-supervisor .page-header .header-content .header-text .page-title {\n    font-size: var(--font-size-xl);\n  }\n  .applicants-list-supervisor .page-header .search-wrapper {\n    width: 100%;\n    margin-top: var(--spacing-md);\n  }\n}\n.applicants-list-supervisor .applicants-list-header {\n  flex-direction: column;\n  align-items: stretch;\n  gap: var(--spacing-lg);\n}\n.applicants-list-supervisor .applicants-list-header .header-content {\n  flex: 0 0 auto;\n}\n.applicants-list-supervisor .applicants-list-header .table-toolbar {\n  flex: 0 0 auto;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.applicants-list-supervisor .applicants-list-header .toolbar-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: var(--spacing-lg);\n  width: 100%;\n}\n.applicants-list-supervisor .applicants-list-header .filter-reset-wrap {\n  flex-shrink: 0;\n}\n.applicants-list-supervisor .applicants-list-header .date-filters-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.applicants-list-supervisor .applicants-list-header .date-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.applicants-list-supervisor .applicants-list-header .date-field .date-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.95);\n  margin: 0;\n  letter-spacing: 0.02em;\n}\n.applicants-list-supervisor .applicants-list-header .search-wrapper {\n  flex: 1;\n  min-width: 200px;\n  max-width: 360px;\n}\n.applicants-list-supervisor .applicants-list-header ::ng-deep .date-picker-toolbar.p-datepicker .p-inputtext,\n.applicants-list-supervisor .applicants-list-header ::ng-deep p-datepicker.date-picker-toolbar .p-inputtext {\n  background: rgba(255, 255, 255, 0.98);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  min-width: 140px;\n  font-size: 0.9rem;\n}\n.applicants-list-supervisor .applicants-list-header ::ng-deep .date-picker-toolbar.p-datepicker .p-datepicker-trigger,\n.applicants-list-supervisor .applicants-list-header ::ng-deep p-datepicker.date-picker-toolbar .p-datepicker-trigger {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: white;\n}\n@media (max-width: 768px) {\n  .applicants-list-supervisor .applicants-list-header .toolbar-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .applicants-list-supervisor .applicants-list-header .search-wrapper {\n    max-width: none;\n  }\n}\n.applicants-list-supervisor .table-container {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n}\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n.requests-dialog {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.requests-dialog .requests-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n.requests-dialog .requests-header h5 {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n}\n.requests-dialog .requests-header p {\n  margin: 0.25rem 0 0 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.requests-dialog .requests-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.requests-dialog .requests-section {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid #e9ecef;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.requests-dialog .requests-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.requests-dialog .requests-section .section-header .section-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(5, 66, 57, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.requests-dialog .requests-section .section-header .section-icon i {\n  color: #054239;\n}\n.requests-dialog .requests-section .section-header h3 {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.requests-dialog .requests-section .request-card {\n  border: 1px solid #e9ecef;\n  border-radius: var(--radius-md);\n  padding: 1rem;\n  background: #fdfdfd;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n}\n.requests-dialog .requests-section .request-card:hover {\n  border-color: #B9A779;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.requests-dialog .requests-section .request-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.requests-dialog .requests-section .request-card .card-header .request-title {\n  font-weight: 600;\n  color: #054239;\n}\n.requests-dialog .requests-section .request-card .card-body {\n  color: #5c636a;\n  font-size: 0.95rem;\n}\n.requests-dialog .requests-section .request-card .card-body p {\n  margin: 0.25rem 0;\n}\n.requests-dialog .requests-section .request-card .card-body p strong {\n  color: #054239;\n}\n.requests-dialog .empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: #6c757d;\n  border: 1px dashed #ced4da;\n  border-radius: var(--radius-md);\n}\n.requests-dialog .empty-state i {\n  font-size: 2rem;\n  color: #B9A779;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n.requests-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n::ng-deep .p-datatable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable-table-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .p-datatable-scrollable-wrapper {\n  overflow-x: auto !important;\n  max-width: 100% !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable {\n  width: 100%;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  font-family: var(--font-family-primary);\n  direction: rtl;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n  background: #054239 !important;\n  color: #ffffff !important;\n  font-size: 0.65rem !important;\n  font-weight: 700 !important;\n  padding: 0.5rem 0.6rem !important;\n  text-align: center !important;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n  position: relative !important;\n  line-height: 1.4 !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th:first-child {\n  border-top-right-radius: 15px !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-top-left-radius: 15px !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th .p-sortable-column-icon {\n  font-size: 0.65rem !important;\n  margin-right: 0.25rem !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr {\n  background: #ffffff !important;\n  transition: all 0.2s ease !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr:nth-child(even) {\n  background: #f8f9fa !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr:hover {\n  background: #e8ecef !important;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr:hover td {\n  font-weight: 500 !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.4rem 0.6rem !important;\n  font-size: 0.65rem !important;\n  font-weight: 400 !important;\n  white-space: normal !important;\n  word-wrap: break-word !important;\n  max-width: 150px !important;\n  vertical-align: middle !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n  border-right: 1px solid #e0e0e0 !important;\n  text-align: center !important;\n  line-height: 1.4 !important;\n  color: #34495e !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td:last-child {\n  border-right: none !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n  font-size: 0.65rem !important;\n  line-height: 1.4 !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n  padding: 0.25rem 0.5rem !important;\n  font-weight: 600 !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 4px;\n  padding: 0.35rem 0.6rem;\n  font-size: 0.65rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  min-width: auto;\n  border: 1px solid;\n  cursor: pointer;\n  font-family: var(--font-family-primary);\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button i,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .pi {\n  font-size: 0.7rem;\n  margin: 0;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm {\n  padding: 0.3rem 0.5rem;\n  font-size: 0.65rem;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm i,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm .pi {\n  font-size: 0.7rem;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-sm ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined {\n  border-color: #3D3A3B;\n  color: #3D3A3B;\n  background-color: transparent;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:hover:not(:disabled) {\n  background-color: #3D3A3B;\n  color: white;\n  border-color: #3D3A3B;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button-outlined ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .p-button-label {\n  font-weight: 500;\n  margin: 0;\n}\n:host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .p-button-icon {\n  margin: 0;\n  margin-left: 0.25rem;\n}\n::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 1rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border-top: 2px solid #e9ecef;\n  border-radius: 0 0 var(--radius-lg) var(--radius-lg);\n  font-size: 0.75rem;\n  font-family: var(--font-family-primary);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  color: var(--neutral-dark);\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: white;\n  border-radius: var(--radius-md);\n  border: 1px solid #e9ecef;\n  box-shadow: var(--shadow-sm);\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown {\n  border-radius: var(--radius-md);\n  border: 1px solid #ced4da;\n  font-size: 0.75rem;\n  min-width: 80px;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown .p-inputtext {\n  padding: 0.4rem 0.75rem;\n  font-size: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown:hover {\n  border-color: var(--primary-medium);\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-rpp-options .p-dropdown.p-focus {\n  border-color: var(--primary-dark);\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2.25rem;\n  height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: var(--radius-md);\n  border: 1px solid #d1d9e0;\n  color: var(--primary-dark);\n  margin: 0 0.15rem;\n  background: white;\n  transition: all var(--transition-fast);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page:hover:not(.p-disabled):not(.p-highlight),\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first:hover:not(.p-disabled):not(.p-highlight),\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev:hover:not(.p-disabled):not(.p-highlight),\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next:hover:not(.p-disabled):not(.p-highlight),\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last:hover:not(.p-disabled):not(.p-highlight) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page.p-disabled,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first.p-disabled,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev.p-disabled,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next.p-disabled,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last.p-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: #f8f9fa;\n  color: #adb5bd;\n  border-color: #e9ecef;\n}\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-paginator ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page {\n  border-radius: var(--radius-md);\n  min-width: 2.25rem;\n  height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  color: white;\n  border-color: var(--primary-dark);\n  box-shadow: 0 2px 4px rgba(5, 66, 57, 0.2);\n  transform: scale(1.05);\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-emptymessage {\n  padding: 2rem !important;\n  text-align: center !important;\n  color: var(--neutral-medium) !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-emptymessage td {\n  border: none !important;\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-loading-overlay {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-loading-icon {\n  color: var(--primary-dark);\n  font-size: 2rem;\n}\n::ng-deep .applicants-list-supervisor .p-dialog-mask {\n  background: rgba(0, 0, 0, 0.6) !important;\n  -webkit-backdrop-filter: none !important;\n  backdrop-filter: none !important;\n}\n::ng-deep .applicants-list-supervisor .p-dialog {\n  background: white !important;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;\n}\n::ng-deep .applicants-list-supervisor .p-dialog .p-dialog-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n::ng-deep .applicants-list-supervisor .p-dialog .p-dialog-header .p-dialog-title {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n::ng-deep .applicants-list-supervisor .p-dialog .p-dialog-header .p-dialog-header-icon {\n  color: white;\n}\n::ng-deep .applicants-list-supervisor .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n::ng-deep .applicants-list-supervisor .p-dialog .p-dialog-content {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n  background: white !important;\n}\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n::ng-deep .applicants-list-supervisor .p-dialog ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n.applicants-list-supervisor .applicant-details {\n  padding: 0;\n}\n.applicants-list-supervisor .applicant-details .details-section {\n  margin-bottom: 2rem;\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid #e9ecef;\n}\n.applicants-list-supervisor .applicant-details .details-section:last-child {\n  margin-bottom: 0;\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section {\n  border: 1px solid rgba(5, 66, 57, 0.15);\n  padding: var(--spacing-lg, 1rem);\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section .history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section .history-item {\n  padding: 0.6rem 0.9rem;\n  background: #f8fbfa;\n  border-radius: 8px;\n  border-right: 3px solid var(--primary-dark, #054239);\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section .history-item .history-change {\n  display: block;\n  font-size: 0.95rem;\n  margin-bottom: 0.25rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section .history-item .history-change strong {\n  color: var(--primary-dark, #054239);\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section .history-item .history-meta {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor .applicant-details .details-section.decision-history-section .history-item .history-reason {\n  margin: 0.35rem 0 0 0;\n  font-size: 0.85rem;\n  color: #495057;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border: 2px solid var(--accent-gold, #d4af37);\n  border-radius: var(--radius-xl, 12px);\n  padding: var(--spacing-xl, 1.5rem);\n  margin-top: var(--spacing-xl, 1.5rem);\n  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-section-header {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-lg, 1rem);\n  margin-bottom: var(--spacing-lg, 1rem);\n  padding-bottom: var(--spacing-md, 1rem);\n  border-bottom: 2px solid rgba(212, 175, 55, 0.2);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-section-header .edit-section-icon {\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-gold, #d4af37) 0%,\n      #b8941f 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-section-header .edit-section-icon i {\n  font-size: 1.5rem;\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-section-header .section-title-wrapper {\n  flex: 1;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-section-header .section-title-wrapper .section-title {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--primary-dark, #054239);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-section-header .section-title-wrapper .section-subtitle {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .info-card {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: var(--radius-lg, 8px);\n  padding: var(--spacing-lg, 1rem);\n  margin-bottom: var(--spacing-lg, 1rem);\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing-md, 0.75rem);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .info-card .info-icon {\n  width: 40px;\n  height: 40px;\n  background: #e3f2fd;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .info-card .info-icon i {\n  font-size: 1.25rem;\n  color: #2196f3;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .info-card .info-content {\n  flex: 1;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .info-card .info-content .info-title {\n  margin: 0 0 0.5rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--primary-dark, #054239);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .info-card .info-content .info-text {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.5;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-info .edit-action-wrapper {\n  display: flex;\n  justify-content: center;\n  margin-top: var(--spacing-md, 1rem);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: var(--radius-lg, 8px);\n  padding: var(--spacing-xl, 1.5rem);\n  margin-bottom: var(--spacing-lg, 1rem);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group {\n  margin-bottom: var(--spacing-lg, 1.5rem);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group:last-child {\n  margin-bottom: 0;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-label-enhanced {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  color: var(--primary-dark, #054239);\n  margin-bottom: 0.5rem;\n  font-size: 0.95rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-label-enhanced i {\n  color: var(--accent-gold, #d4af37);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-label-enhanced .required-star {\n  color: #dc3545;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .enhanced-select {\n  width: 100%;\n  border: 1px solid #ced4da;\n  border-radius: var(--radius-md, 6px);\n  transition: all 0.3s ease;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .enhanced-select:hover {\n  border-color: var(--accent-gold, #d4af37);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .enhanced-select:focus-within {\n  border-color: var(--accent-gold, #d4af37);\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-control-enhanced {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: var(--radius-md, 6px);\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  resize: vertical;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-control-enhanced:focus {\n  outline: none;\n  border-color: var(--accent-gold, #d4af37);\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-hint {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: 0.5rem;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-card .form-group .form-hint i {\n  font-size: 0.75rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section .edit-decision-form .form-actions {\n  display: flex;\n  gap: var(--spacing-md, 0.75rem);\n  justify-content: flex-end;\n  padding-top: var(--spacing-lg, 1.5rem);\n  border-top: 2px solid rgba(212, 175, 55, 0.15);\n  margin-top: var(--spacing-md, 1rem);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .edit-start-btn {\n  min-width: 160px;\n  font-weight: 600;\n  padding: 0.75rem 1.5rem;\n  border-radius: var(--radius-lg, 8px);\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .edit-start-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-save-btn {\n  min-width: 180px;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.875rem 2rem;\n  border-radius: var(--radius-lg, 8px);\n  background:\n    linear-gradient(\n      135deg,\n      #28a745 0%,\n      #20c997 100%) !important;\n  border: none !important;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n  transition: all 0.3s ease;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-save-btn .p-button-label {\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-save-btn .p-button-icon {\n  font-size: 1.1rem;\n  margin-left: 0.5rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-save-btn:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #218838 0%,\n      #1ea080 100%) !important;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-save-btn:active:not(:disabled) {\n  transform: translateY(-1px);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-save-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-cancel-btn {\n  min-width: 160px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  padding: 0.875rem 1.75rem;\n  border-radius: var(--radius-lg, 8px);\n  background: #ffffff !important;\n  color: #6c757d !important;\n  border: 2px solid #dee2e6 !important;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-cancel-btn .p-button-label {\n  font-weight: 600;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-cancel-btn .p-button-icon {\n  font-size: 1rem;\n  margin-left: 0.5rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-cancel-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  background: #f8f9fa !important;\n  border-color: #adb5bd !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  color: #495057 !important;\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-cancel-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n.applicants-list-supervisor .applicant-details .details-section.edit-decision-section ::ng-deep .enhanced-cancel-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.applicants-list-supervisor .applicant-details .details-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.applicants-list-supervisor .applicant-details .details-section .section-header .section-icon {\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n}\n.applicants-list-supervisor .applicant-details .details-section .section-header .section-icon i {\n  color: white;\n  font-size: 1.25rem;\n}\n.applicants-list-supervisor .applicant-details .details-section .section-header .section-title {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.personal-info-section .details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.personal-info-section .details-grid .detail-item {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: var(--radius-md);\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.applicants-list-supervisor .applicant-details .details-section.personal-info-section .details-grid .detail-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.applicants-list-supervisor .applicant-details .details-section.personal-info-section .details-grid .detail-item .detail-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  color: #054239;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.personal-info-section .details-grid .detail-item .detail-label i {\n  color: #B9A779;\n  font-size: 1rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.personal-info-section .details-grid .detail-item .detail-value {\n  color: #34495e;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container {\n  position: relative;\n  padding: 1rem 0 0 0;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container::before {\n  content: "";\n  position: absolute;\n  right: 20px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      #054239 0%,\n      #428177 50%,\n      #B9A779 100%);\n  border-radius: 2px;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item {\n  position: relative;\n  padding-right: 60px;\n  margin-bottom: 2rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item:last-child {\n  margin-bottom: 0;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker {\n  position: absolute;\n  right: 8px;\n  top: 0;\n  width: 28px;\n  height: 28px;\n  background: white;\n  border: 3px solid #054239;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker i {\n  font-size: 0.875rem;\n  color: #054239;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-entry {\n  border-color: #428177;\n  background: #428177;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-entry i {\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-exam {\n  border-color: #B9A779;\n  background: #B9A779;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-exam i {\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-consultation {\n  border-color: #66b5a8;\n  background: #66b5a8;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-consultation i {\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-investigation {\n  border-color: #428177;\n  background: #428177;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-investigation i {\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-decision {\n  border-color: #054239;\n  background: #054239;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-decision i {\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-exit {\n  border-color: #6B1F2A;\n  background: #6B1F2A;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-marker.marker-exit i {\n  color: white;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-content {\n  background: white;\n  padding: 1.25rem;\n  border-radius: var(--radius-md);\n  border: 1px solid #e9ecef;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.2s ease;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-content:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateX(-4px);\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-content .timeline-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-content .timeline-header .timeline-event-title {\n  margin: 0;\n  color: #054239;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-content .timeline-header .timeline-date {\n  font-size: 0.75rem;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-item .timeline-content .timeline-description {\n  color: #6c757d;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-empty {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #6c757d;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-empty i {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  display: block;\n  color: #B9A779;\n}\n.applicants-list-supervisor .applicant-details .details-section.timeline-section .timeline-container .timeline-empty span {\n  display: block;\n  font-size: 1rem;\n}\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator {\n  padding: 0.75rem 0.5rem !important;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n  font-size: 0.65rem !important;\n  padding: 0.4rem 0.75rem !important;\n  width: 100%;\n  text-align: center;\n}\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n.applicants-list-supervisor ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n  min-width: 2rem !important;\n  height: 2rem !important;\n  font-size: 0.65rem !important;\n}\n@media (max-width: 1200px) {\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.6rem !important;\n    padding: 0.45rem 0.5rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n    font-size: 0.6rem !important;\n    padding: 0.35rem 0.5rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span,\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small,\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    font-size: 0.6rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator {\n    padding: 0.75rem 0.5rem !important;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.65rem !important;\n    padding: 0.4rem 0.75rem !important;\n    width: 100%;\n    text-align: center;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2rem !important;\n    height: 2rem !important;\n    font-size: 0.65rem !important;\n  }\n}\n@media (max-width: 768px) {\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.55rem !important;\n    padding: 0.4rem 0.4rem !important;\n    letter-spacing: 0.2px !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n    font-size: 0.55rem !important;\n    padding: 0.3rem 0.4rem !important;\n    max-width: 120px !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span,\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small,\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    font-size: 0.55rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    padding: 0.2rem 0.4rem !important;\n  }\n  :host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button {\n    padding: 0.25rem 0.4rem;\n    font-size: 0.55rem;\n  }\n  :host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button i,\n  :host ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .p-button .pi {\n    font-size: 0.6rem;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator {\n    padding: 0.875rem 1rem !important;\n    font-size: 0.7rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.7rem !important;\n    padding: 0.45rem 0.875rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2.1rem !important;\n    height: 2.1rem !important;\n    font-size: 0.7rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator {\n    padding: 0.75rem 0.5rem !important;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.65rem !important;\n    padding: 0.4rem 0.75rem !important;\n    width: 100%;\n    text-align: center;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2rem !important;\n    height: 2rem !important;\n    font-size: 0.65rem !important;\n  }\n}\n@media (max-width: 480px) {\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.5rem !important;\n    padding: 0.35rem 0.3rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td {\n    font-size: 0.5rem !important;\n    padding: 0.25rem 0.3rem !important;\n    max-width: 100px !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td span,\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .small,\n  ::ng-deep .applicants-list-supervisor .p-datatable .p-datatable-tbody > tr > td .badge {\n    font-size: 0.5rem !important;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator {\n    padding: 0.75rem 0.5rem !important;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-current {\n    font-size: 0.65rem !important;\n    padding: 0.4rem 0.75rem !important;\n    width: 100%;\n    text-align: center;\n  }\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-pages .p-paginator-page,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-first,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-prev,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-next,\n  ::ng-deep .applicants-list-supervisor .p-paginator .p-paginator-last {\n    min-width: 2rem !important;\n    height: 2rem !important;\n    font-size: 0.65rem !important;\n  }\n}\n/*# sourceMappingURL=applicants-list-supervisor.css.map */\n'] }]
  }], () => [{ type: ApplicantService }, { type: HttpClient }, { type: ToastrService }, { type: AuthService }, { type: DecisionService }, { type: LookupService }, { type: ChangeDetectorRef }], { table: [{
    type: ViewChild,
    args: ["table"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicantsListSupervisor, { className: "ApplicantsListSupervisor", filePath: "src/app/features/supervisor/components/applicants-list-supervisor/applicants-list-supervisor.ts", lineNumber: 63 });
})();
export {
  ApplicantsListSupervisor
};
//# sourceMappingURL=chunk-NN4IQVID.js.map
