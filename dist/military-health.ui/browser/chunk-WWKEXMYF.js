import {
  LookupService
} from "./chunk-S3S6BTPD.js";
import {
  MaritalStatusService
} from "./chunk-ZLDVKVU5.js";
import {
  ApplicantService
} from "./chunk-HQAVTYQP.js";
import {
  GregorianDatePipe
} from "./chunk-Q6W3HPVX.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-QLKHPIKE.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
  NgForOf,
  NgIf,
  environment
} from "./chunk-7EG6WMAP.js";
import {
  Component,
  Subject,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YTJKKLZA.js";

// src/app/features/archive/components/applicant-profile/applicant-profile.ts
function ApplicantProfile_ng_container_46_section_114_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66)(1, "strong");
    \u0275\u0275text(2, "\u0627\u0644\u0639\u064A\u0627\u062F\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attachment_r3.clinicName, " ");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67)(1, "strong");
    \u0275\u0275text(2, "\u0627\u0644\u062A\u0634\u062E\u064A\u0635 / \u0627\u0644\u0646\u062A\u064A\u062C\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attachment_r3.diagnosis, " ");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_13_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0639\u0644\u0649 ", attachment_r3.clinicName, ":");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_13_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "strong");
    \u0275\u0275text(2, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attachment_r3.diagnosis, " ");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, ApplicantProfile_ng_container_46_section_114_div_4_div_13_div_1_div_1_Template, 3, 1, "div", 72)(2, ApplicantProfile_ng_container_46_section_114_div_4_div_13_div_1_div_2_Template, 4, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.diagnosis);
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, ApplicantProfile_ng_container_46_section_114_div_4_div_13_div_1_Template, 3, 2, "div", 69);
    \u0275\u0275element(2, "img", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName || attachment_r3.diagnosis);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getAttachmentUrl(attachment_r3.path), \u0275\u0275sanitizeUrl)("alt", attachment_r3.label);
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_14_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0639\u0644\u0649 ", attachment_r3.clinicName, ":");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_14_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "strong");
    \u0275\u0275text(2, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attachment_r3.diagnosis, " ");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, ApplicantProfile_ng_container_46_section_114_div_4_div_14_div_1_div_1_Template, 3, 1, "div", 72)(2, ApplicantProfile_ng_container_46_section_114_div_4_div_14_div_1_div_2_Template, 4, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.diagnosis);
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, ApplicantProfile_ng_container_46_section_114_div_4_div_14_div_1_Template, 3, 2, "div", 69);
    \u0275\u0275element(2, "iframe", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName || attachment_r3.diagnosis);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getAttachmentUrl(attachment_r3.path), \u0275\u0275sanitizeResourceUrl);
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_15_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0639\u0644\u0649 ", attachment_r3.clinicName, ":");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_15_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "strong");
    \u0275\u0275text(2, "\u0627\u0644\u062A\u0634\u062E\u064A\u0635:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attachment_r3.diagnosis, " ");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, ApplicantProfile_ng_container_46_section_114_div_4_div_15_div_1_div_1_Template, 3, 1, "div", 72)(2, ApplicantProfile_ng_container_46_section_114_div_4_div_15_div_1_div_2_Template, 4, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.diagnosis);
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, ApplicantProfile_ng_container_46_section_114_div_4_div_15_div_1_Template, 3, 2, "div", 69);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0644\u0641:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName || attachment_r3.diagnosis);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attachment_r3.path, " ");
  }
}
function ApplicantProfile_ng_container_46_section_114_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ApplicantProfile_ng_container_46_section_114_div_4_span_7_Template, 4, 1, "span", 60)(8, ApplicantProfile_ng_container_46_section_114_div_4_span_8_Template, 4, 1, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function ApplicantProfile_ng_container_46_section_114_div_4_Template_button_click_9_listener() {
      const attachment_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openAttachment(attachment_r3.path));
    });
    \u0275\u0275element(10, "i", 63);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u0639\u0631\u0636 / \u0637\u0628\u0627\u0639\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ApplicantProfile_ng_container_46_section_114_div_4_div_13_Template, 3, 3, "div", 64)(14, ApplicantProfile_ng_container_46_section_114_div_4_div_14_Template, 3, 2, "div", 64)(15, ApplicantProfile_ng_container_46_section_114_div_4_div_15_Template, 5, 2, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r3.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attachment_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.clinicName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.diagnosis);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.getFileType(attachment_r3.path) === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getFileType(attachment_r3.path) === "pdf");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getFileType(attachment_r3.path) === "other");
  }
}
function ApplicantProfile_ng_container_46_section_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 52)(1, "h5", 29);
    \u0275\u0275text(2, "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0648\u062B\u0627\u0626\u0642 \u0627\u0644\u0645\u0631\u0641\u0648\u0639\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53);
    \u0275\u0275template(4, ApplicantProfile_ng_container_46_section_114_div_4_Template, 16, 7, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.attachments);
  }
}
function ApplicantProfile_ng_container_46_Conditional_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 11);
    \u0275\u0275text(2, "\u0627\u0644\u0646\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 31)(6, "span", 11);
    \u0275\u0275text(7, "\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35)(11, "span", 11);
    \u0275\u0275text(12, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r5.consultation.consultationType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.consultation.referralReason || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.consultation.result || "-");
  }
}
function ApplicantProfile_ng_container_46_Conditional_279_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 11);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantProfile_ng_container_46_Conditional_284_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 11);
    \u0275\u0275text(2, "\u0627\u0644\u0646\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 31)(6, "span", 11);
    \u0275\u0275text(7, "\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 31)(11, "span", 11);
    \u0275\u0275text(12, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "span", 11);
    \u0275\u0275text(17, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r5.investigation.type || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.investigation.investigationReason || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.investigation.status || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.investigation.result || "-");
  }
}
function ApplicantProfile_ng_container_46_Conditional_285_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 11);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantProfile_ng_container_46_Conditional_290_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78);
    \u0275\u0275text(2, "\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.eyeExam == null ? null : a_r5.eyeExam.resultID));
  }
}
function ApplicantProfile_ng_container_46_Conditional_291_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78);
    \u0275\u0275text(2, "\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u064A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.surgicalExam == null ? null : a_r5.surgicalExam.resultID));
  }
}
function ApplicantProfile_ng_container_46_Conditional_292_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78);
    \u0275\u0275text(2, "\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0628\u0627\u0637\u0646\u064A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.internalExam == null ? null : a_r5.internalExam.resultID));
  }
}
function ApplicantProfile_ng_container_46_Conditional_293_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u0627\u0644\u0633\u0628\u0628: ", a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.reason);
  }
}
function ApplicantProfile_ng_container_46_Conditional_293_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78);
    \u0275\u0275text(2, "\u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ApplicantProfile_ng_container_46_Conditional_293_Conditional_5_Template, 2, 1, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.resultID));
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.reason) ? 5 : -1);
  }
}
function ApplicantProfile_ng_container_46_Conditional_294_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u0627\u0644\u0633\u0628\u0628: ", a_r5.earClinic == null ? null : a_r5.earClinic.reason);
  }
}
function ApplicantProfile_ng_container_46_Conditional_294_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78);
    \u0275\u0275text(2, "\u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ApplicantProfile_ng_container_46_Conditional_294_Conditional_5_Template, 2, 1, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.earClinic == null ? null : a_r5.earClinic.resultID));
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.earClinic == null ? null : a_r5.earClinic.reason) ? 5 : -1);
  }
}
function ApplicantProfile_ng_container_46_Conditional_305_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "\u0627\u0644\u062A\u0648\u0635\u064A\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((a_r5.finalDecision == null ? null : a_r5.finalDecision.reason) || "\u0644\u0627 \u064A\u0648\u062C\u062F");
  }
}
function ApplicantProfile_ng_container_46_Conditional_306_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r5.finalDecision == null ? null : a_r5.finalDecision.postponeDuration);
  }
}
function ApplicantProfile_ng_container_46_Conditional_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "\u0627\u0644\u0633\u0628\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ApplicantProfile_ng_container_46_Conditional_306_Conditional_5_Template, 5, 1, "div", 48);
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((a_r5.finalDecision == null ? null : a_r5.finalDecision.reason) || "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.finalDecision == null ? null : a_r5.finalDecision.postponeDuration) ? 5 : -1);
  }
}
function ApplicantProfile_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27)(2, "section", 28)(3, "h5", 29);
    \u0275\u0275text(4, "\u0645\u0644\u062E\u0635 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u064A\u0648\u0627\u0646 \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "div", 31)(7, "span", 11);
    \u0275\u0275text(8, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062F\u062E\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 31)(13, "span", 11);
    \u0275\u0275text(14, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0623\u0631\u0634\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 31)(19, "span", 11);
    \u0275\u0275text(20, " \u0642\u0631\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 31)(24, "span", 11);
    \u0275\u0275text(25, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 32);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 31)(29, "span", 11);
    \u0275\u0275text(30, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0635\u062F\u064A\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 14);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "gregorianDate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "section", 33)(35, "h5", 29);
    \u0275\u0275text(36, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 34)(38, "div", 31)(39, "span", 11);
    \u0275\u0275text(40, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 14);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 31)(44, "span", 11);
    \u0275\u0275text(45, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 14);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 31)(49, "span", 11);
    \u0275\u0275text(50, "\u0627\u0644\u0627\u0633\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 14);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 31)(54, "span", 11);
    \u0275\u0275text(55, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 14);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 31)(59, "span", 11);
    \u0275\u0275text(60, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 14);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 31)(65, "span", 11);
    \u0275\u0275text(66, "\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 14);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 31)(70, "span", 11);
    \u0275\u0275text(71, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 14);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 31)(75, "span", 11);
    \u0275\u0275text(76, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 14);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 31)(80, "span", 11);
    \u0275\u0275text(81, "\u0627\u0644\u0648\u0638\u064A\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 14);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 31)(85, "span", 11);
    \u0275\u0275text(86, "\u0627\u0644\u0637\u0648\u0644 / \u0627\u0644\u0648\u0632\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 14);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 31)(90, "span", 11);
    \u0275\u0275text(91, "BMI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 14);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 31)(95, "span", 11);
    \u0275\u0275text(96, "\u0636\u063A\u0637 \u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 14);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 31)(100, "span", 11);
    \u0275\u0275text(101, "\u0627\u0644\u0646\u0628\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 14);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 31)(105, "span", 11);
    \u0275\u0275text(106, "\u0648\u0634\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 14);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 35)(110, "span", 11);
    \u0275\u0275text(111, "\u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 14);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(114, ApplicantProfile_ng_container_46_section_114_Template, 5, 1, "section", 36);
    \u0275\u0275elementStart(115, "section", 33)(116, "h5", 29);
    \u0275\u0275text(117, "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 37)(119, "div", 38)(120, "div", 39);
    \u0275\u0275text(121, "\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 40)(123, "div", 31)(124, "span", 11);
    \u0275\u0275text(125, "\u0627\u0644\u0646\u0638\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 14);
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 31)(129, "span", 11);
    \u0275\u0275text(130, "\u0627\u0644\u0623\u0644\u0648\u0627\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "span", 14);
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 31)(134, "span", 11);
    \u0275\u0275text(135, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span", 14);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 31)(139, "span", 11);
    \u0275\u0275text(140, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "span", 14);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(143, "div", 38)(144, "div", 39);
    \u0275\u0275text(145, "\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div", 40)(147, "div", 31)(148, "span", 11);
    \u0275\u0275text(149, "\u0639\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "span", 14);
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 31)(153, "span", 11);
    \u0275\u0275text(154, "\u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span", 14);
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 31)(158, "span", 11);
    \u0275\u0275text(159, "\u0627\u0644\u0623\u0648\u0639\u064A\u0629 \u0627\u0644\u062F\u0645\u0648\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "span", 14);
    \u0275\u0275text(161);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 31)(163, "span", 11);
    \u0275\u0275text(164, "\u0627\u0644\u0635\u062F\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "span", 14);
    \u0275\u0275text(166);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(167, "div", 31)(168, "span", 11);
    \u0275\u0275text(169, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "span", 14);
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(172, "div", 38)(173, "div", 39);
    \u0275\u0275text(174, "\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0628\u0627\u0637\u0646\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "div", 40)(176, "div", 31)(177, "span", 11);
    \u0275\u0275text(178, "\u0627\u0644\u0642\u0644\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "span", 14);
    \u0275\u0275text(180);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "div", 31)(182, "span", 11);
    \u0275\u0275text(183, "\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "span", 14);
    \u0275\u0275text(185);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "div", 31)(187, "span", 11);
    \u0275\u0275text(188, "\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "span", 14);
    \u0275\u0275text(190);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "div", 31)(192, "span", 11);
    \u0275\u0275text(193, "\u0627\u0644\u0623\u0639\u0635\u0627\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "span", 14);
    \u0275\u0275text(195);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 31)(197, "span", 11);
    \u0275\u0275text(198, "\u0627\u0644\u062C\u0644\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "span", 14);
    \u0275\u0275text(200);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "div", 31)(202, "span", 11);
    \u0275\u0275text(203, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "span", 14);
    \u0275\u0275text(205);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(206, "div", 38)(207, "div", 39);
    \u0275\u0275text(208, "\u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "div", 40)(210, "div", 31)(211, "span", 11);
    \u0275\u0275text(212, "\u0639\u0636\u0644\u064A \u0647\u064A\u0643\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "span", 14);
    \u0275\u0275text(214);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(215, "div", 31)(216, "span", 11);
    \u0275\u0275text(217, "\u062C\u0631\u0627\u062D\u0629 \u0639\u0635\u0628\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "span", 14);
    \u0275\u0275text(219);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "div", 31)(221, "span", 11);
    \u0275\u0275text(222, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "span", 14);
    \u0275\u0275text(224);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(225, "div", 38)(226, "div", 39);
    \u0275\u0275text(227, "\u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "div", 40)(229, "div", 31)(230, "span", 11);
    \u0275\u0275text(231, "\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "span", 14);
    \u0275\u0275text(233);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "div", 31)(235, "span", 11);
    \u0275\u0275text(236, "\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "span", 14);
    \u0275\u0275text(238);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "div", 31)(240, "span", 11);
    \u0275\u0275text(241, "\u0637\u0628\u0644\u0629 \u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0645\u0646\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "span", 14);
    \u0275\u0275text(243);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(244, "div", 31)(245, "span", 11);
    \u0275\u0275text(246, "\u0637\u0628\u0644\u0629 \u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "span", 14);
    \u0275\u0275text(248);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(249, "div", 31)(250, "span", 11);
    \u0275\u0275text(251, "\u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u064A\u0645\u0646\u0649/\u0627\u0644\u064A\u0633\u0631\u0649");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "span", 14);
    \u0275\u0275text(253);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(254, "div", 31)(255, "span", 11);
    \u0275\u0275text(256, "\u0627\u0644\u0631\u0646\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "span", 14);
    \u0275\u0275text(258);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "div", 31)(260, "span", 11);
    \u0275\u0275text(261, "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "span", 14);
    \u0275\u0275text(263);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(264, "div", 31)(265, "span", 11);
    \u0275\u0275text(266, "\u0627\u0644\u0641\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "span", 14);
    \u0275\u0275text(268);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(269, "div", 31)(270, "span", 11);
    \u0275\u0275text(271, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(272, "span", 14);
    \u0275\u0275text(273);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(274, "div", 38)(275, "div", 39);
    \u0275\u0275text(276, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(277, "div", 40);
    \u0275\u0275conditionalCreate(278, ApplicantProfile_ng_container_46_Conditional_278_Template, 15, 3)(279, ApplicantProfile_ng_container_46_Conditional_279_Template, 3, 0, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(280, "div", 38)(281, "div", 39);
    \u0275\u0275text(282, "\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "div", 40);
    \u0275\u0275conditionalCreate(284, ApplicantProfile_ng_container_46_Conditional_284_Template, 20, 4)(285, ApplicantProfile_ng_container_46_Conditional_285_Template, 3, 0, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(286, "div", 41)(287, "div", 39);
    \u0275\u0275text(288, "\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0623\u0633\u0628\u0627\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "div", 42);
    \u0275\u0275conditionalCreate(290, ApplicantProfile_ng_container_46_Conditional_290_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(291, ApplicantProfile_ng_container_46_Conditional_291_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(292, ApplicantProfile_ng_container_46_Conditional_292_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(293, ApplicantProfile_ng_container_46_Conditional_293_Template, 6, 2, "div", 43);
    \u0275\u0275conditionalCreate(294, ApplicantProfile_ng_container_46_Conditional_294_Template, 6, 2, "div", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(295, "section", 44)(296, "h5", 45);
    \u0275\u0275text(297, "\u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "div", 46)(299, "div", 47)(300, "div", 48)(301, "span", 49);
    \u0275\u0275text(302, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(303, "span", 50);
    \u0275\u0275text(304);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(305, ApplicantProfile_ng_container_46_Conditional_305_Template, 5, 1, "div", 48)(306, ApplicantProfile_ng_container_46_Conditional_306_Template, 6, 2);
    \u0275\u0275elementStart(307, "div", 48)(308, "span", 49);
    \u0275\u0275text(309, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u0631\u0627\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(310, "span", 51);
    \u0275\u0275text(311);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 65, a_r5.createdAt, "yyyy/MM/dd"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 68, ctx_r3.archive == null ? null : ctx_r3.archive.archiveDate, "yyyy/MM/dd"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((a_r5.finalDecision == null ? null : a_r5.finalDecision.result == null ? null : a_r5.finalDecision.result.description) || "-");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-success", a_r5.finalDecision == null ? null : a_r5.finalDecision.isExportedToRecruitment)("badge-muted", !(a_r5.finalDecision == null ? null : a_r5.finalDecision.isExportedToRecruitment));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (a_r5.finalDecision == null ? null : a_r5.finalDecision.isExportedToRecruitment) ? "\u0645\u0635\u062F\u0651\u0631" : "\u063A\u064A\u0631 \u0645\u0635\u062F\u0651\u0631");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 71, a_r5.finalDecision == null ? null : a_r5.finalDecision.exportedAt, "yyyy/MM/dd"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(a_r5.fileNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.queueNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.fullName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.motherName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 74, a_r5.dateOfBirth, "yyyy/MM/dd"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r5.bloodType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.recruitmentCenter || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getMaritalStatusDescription(a_r5.maritalStatusID));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.job || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", a_r5.height || "-", " \u0633\u0645 / ", a_r5.weight || "-", " \u0643\u062C\u0645");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.bmi || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.bloodPressure || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.pulse || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.tattoo ? "\u064A\u0648\u062C\u062F" : "\u0644\u0627 \u064A\u0648\u062C\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r5.distinctiveMarks || "\u0644\u0627 \u062A\u0648\u062C\u062F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasAttachments());
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((a_r5.eyeExam == null ? null : a_r5.eyeExam.vision) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.eyeExam == null ? null : a_r5.eyeExam.colorTest) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.eyeExam == null ? null : a_r5.eyeExam.refractionValue) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.eyeExam == null ? null : a_r5.eyeExam.resultID));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((a_r5.surgicalExam == null ? null : a_r5.surgicalExam.generalSurgery) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.surgicalExam == null ? null : a_r5.surgicalExam.urinarySurgery) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.surgicalExam == null ? null : a_r5.surgicalExam.vascularSurgery) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.surgicalExam == null ? null : a_r5.surgicalExam.thoracicSurgery) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.surgicalExam == null ? null : a_r5.surgicalExam.resultID));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((a_r5.internalExam == null ? null : a_r5.internalExam.heart) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.internalExam == null ? null : a_r5.internalExam.respiratory) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.internalExam == null ? null : a_r5.internalExam.digestive) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.internalExam == null ? null : a_r5.internalExam.neurology) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.internalExam == null ? null : a_r5.internalExam.skin) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.internalExam == null ? null : a_r5.internalExam.resultID));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.musculoskeletal) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.neurologicalSurgery) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.resultID));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((a_r5.earClinic == null ? null : a_r5.earClinic.rightEar) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.earClinic == null ? null : a_r5.earClinic.leftEar) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.earClinic == null ? null : a_r5.earClinic.rightTympanicMembrane) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.earClinic == null ? null : a_r5.earClinic.leftTympanicMembrane) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (a_r5.earClinic == null ? null : a_r5.earClinic.rightHearing) || "-", " / ", (a_r5.earClinic == null ? null : a_r5.earClinic.leftHearing) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.earClinic == null ? null : a_r5.earClinic.resonators) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (a_r5.earClinic == null ? null : a_r5.earClinic.rightWhisperTest) || "-", " / ", (a_r5.earClinic == null ? null : a_r5.earClinic.leftWhisperTest) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((a_r5.earClinic == null ? null : a_r5.earClinic.mouth) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getResultDescription(a_r5.earClinic == null ? null : a_r5.earClinic.resultID));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(a_r5.consultation ? 278 : 279);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(a_r5.investigation ? 284 : 285);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((a_r5.eyeExam == null ? null : a_r5.eyeExam.resultID) ? 290 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.surgicalExam == null ? null : a_r5.surgicalExam.resultID) ? 291 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.internalExam == null ? null : a_r5.internalExam.resultID) ? 292 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.orthopedicExamDto == null ? null : a_r5.orthopedicExamDto.resultID) ? 293 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.earClinic == null ? null : a_r5.earClinic.resultID) ? 294 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((a_r5.finalDecision == null ? null : a_r5.finalDecision.result == null ? null : a_r5.finalDecision.result.description) || ctx_r3.getResultDescription(a_r5.finalDecision == null ? null : a_r5.finalDecision.resultID) || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r5.finalDecision == null ? null : a_r5.finalDecision.resultID) == 1 ? 305 : 306);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((a_r5.finalDecision == null ? null : a_r5.finalDecision.decisionDate) || "-");
  }
}
function ApplicantProfile_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 37);
    \u0275\u0275text(2, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 ...");
    \u0275\u0275elementEnd()();
  }
}
var ApplicantProfile = class _ApplicantProfile {
  route;
  applicantService;
  lookupService;
  maritalStatusService;
  router;
  http;
  applicant;
  results = [];
  maritalStatuses = [];
  archive = null;
  attachments = [];
  attachmentsByClinic = /* @__PURE__ */ new Map();
  notes = [];
  clinicConsultations = /* @__PURE__ */ new Map();
  clinicInvestigations = /* @__PURE__ */ new Map();
  destroy$ = new Subject();
  date = /* @__PURE__ */ new Date();
  // Specialization IDs
  EYE_SPECIALIZATION_ID = 1;
  INTERNAL_SPECIALIZATION_ID = 2;
  SURGICAL_SPECIALIZATION_ID = 3;
  ORTHOPEDIC_SPECIALIZATION_ID = 4;
  EAR_SPECIALIZATION_ID = 5;
  consultationUrl = `${environment.apiUrl}/api/Consultations`;
  investigationUrl = `${environment.apiUrl}/api/Investigations`;
  constructor(route, applicantService, lookupService, maritalStatusService, router, http) {
    this.route = route;
    this.applicantService = applicantService;
    this.lookupService = lookupService;
    this.maritalStatusService = maritalStatusService;
    this.router = router;
    this.http = http;
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state ?? history.state ?? {};
    this.archive = state["archive"] ?? state["archiveData"] ?? null;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit() {
    const state = history.state ?? {};
    if (!this.archive && (state.archive || state.archiveData)) {
      this.archive = state.archive ?? state.archiveData;
    }
    const fileNumber = this.route.snapshot.paramMap.get("fileNumber");
    this.loadApplicant(fileNumber);
    this.loadResults();
    this.loadMaritalStatuses();
  }
  loadApplicant(fileNumber) {
    this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
      next: (data) => {
        this.applicant = data;
        this.loadAllClinicAttachments(fileNumber, data);
      },
      error: () => {
        console.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
      }
    });
  }
  loadResults() {
    this.lookupService.getResults().subscribe({
      next: (data) => this.results = data,
      error: (err) => console.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C", err)
    });
  }
  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => this.maritalStatuses = data,
      error: (err) => console.error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629", err)
    });
  }
  getMaritalStatusDescription(id) {
    const status = this.maritalStatuses.find((s) => s.maritalStatusID === id);
    return status ? status.description : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  getResultDescription(resultID) {
    if (!resultID)
      return "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
    const result = this.results.find((r) => r.resultID === resultID);
    return result ? result.description : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
  }
  printProfile() {
    const originalTitle = document.title;
    document.title = "";
    const originalUrl = window.location.href;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  }
  openAttachment(path) {
    if (!path) {
      return;
    }
    const url = this.resolveAttachmentUrl(path);
    window.open(url, "_blank");
  }
  hasAttachments() {
    return this.attachments.length > 0;
  }
  loadAllClinicAttachments(fileNumber, applicant) {
    const items = [];
    const specializations = [
      { id: this.EYE_SPECIALIZATION_ID, name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u064A\u0648\u0646" },
      { id: this.INTERNAL_SPECIALIZATION_ID, name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0628\u0627\u0637\u0646\u0629" },
      { id: this.SURGICAL_SPECIALIZATION_ID, name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u062C\u0631\u0627\u062D\u0629" },
      { id: this.ORTHOPEDIC_SPECIALIZATION_ID, name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629" },
      { id: this.EAR_SPECIALIZATION_ID, name: "\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0630\u0646\u064A\u0629" }
    ];
    const consultations$ = specializations.map((spec) => this.getConsultationsBySpecialization(spec.id, fileNumber).pipe(map((consultations) => ({ consultations, clinicName: spec.name }))));
    const investigations$ = specializations.map((spec) => this.getInvestigationsBySpecialization(spec.id, fileNumber).pipe(map((investigations) => ({ investigations, clinicName: spec.name }))));
    forkJoin([...consultations$, ...investigations$]).subscribe({
      next: (results) => {
        const attachmentsMap = /* @__PURE__ */ new Map();
        const seenConsultationIds = /* @__PURE__ */ new Set();
        const seenInvestigationIds = /* @__PURE__ */ new Set();
        results.slice(0, 5).forEach((result, index) => {
          const clinicName = specializations[index]?.name || result.clinicName || "";
          if (result && result.consultations && Array.isArray(result.consultations) && result.consultations.length > 0) {
            result.consultations.forEach((consultation) => {
              if (consultation && consultation.consultationID && !seenConsultationIds.has(consultation.consultationID)) {
                seenConsultationIds.add(consultation.consultationID);
                if (consultation.attachment) {
                  const trimmedPath = consultation.attachment.trim();
                  if (trimmedPath) {
                    const uniqueKey = `${trimmedPath}|${clinicName}|\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A|${consultation.consultationID}`;
                    if (!attachmentsMap.has(uniqueKey)) {
                      attachmentsMap.set(uniqueKey, {
                        label: "\u0645\u0631\u0641\u0642 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064A\u0629",
                        source: "\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 ",
                        clinicName,
                        diagnosis: consultation.result || "\u0644\u0627 \u064A\u0648\u062C\u062F \u062A\u0634\u062E\u064A\u0635",
                        path: trimmedPath
                      });
                    }
                  }
                }
              }
            });
          }
        });
        results.slice(5, 10).forEach((result, index) => {
          const clinicName = specializations[index]?.name || result.clinicName || "";
          if (result && result.investigations && Array.isArray(result.investigations) && result.investigations.length > 0) {
            result.investigations.forEach((investigation) => {
              if (investigation && investigation.investigationID && !seenInvestigationIds.has(investigation.investigationID)) {
                seenInvestigationIds.add(investigation.investigationID);
                if (investigation.attachment) {
                  const trimmedPath = investigation.attachment.trim();
                  if (trimmedPath) {
                    const uniqueKey = `${trimmedPath}|${clinicName}|\u0627\u0644\u0645\u062E\u0628\u0631|${investigation.investigationID}`;
                    if (!attachmentsMap.has(uniqueKey)) {
                      attachmentsMap.set(uniqueKey, {
                        label: "\u0645\u0631\u0641\u0642 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629",
                        source: "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0645\u062E\u0628\u0631 ",
                        clinicName,
                        diagnosis: investigation.result || "\u0644\u0627 \u064A\u0648\u062C\u062F \u0646\u062A\u064A\u062C\u0629",
                        path: trimmedPath
                      });
                    }
                  }
                }
              }
            });
          }
        });
        this.attachments = Array.from(attachmentsMap.values());
        if (this.archive?.digitalCopy) {
          const digitalCopyItem = {
            label: "\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0644\u0644\u0645\u0644\u0641",
            source: "\u0627\u0644\u0623\u0631\u0634\u064A\u0641",
            clinicName: "",
            diagnosis: "",
            path: this.archive.digitalCopy.trim()
          };
          this.attachments.push(digitalCopyItem);
        }
        this.groupAttachmentsByClinic();
        this.collectClinicData(results, specializations);
        if (this.applicant) {
          this.collectNotes(this.applicant);
        }
      },
      error: (err) => {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0645\u0646 \u0627\u0644\u0639\u064A\u0627\u062F\u0627\u062A", err);
        this.buildBasicAttachmentList(applicant);
      }
    });
  }
  buildBasicAttachmentList(applicant) {
    const items = [];
    const addItem = (label, source, clinicName, diagnosis, path) => {
      if (!path) {
        return;
      }
      items.push({
        label,
        source,
        clinicName,
        diagnosis,
        path: path.trim()
      });
    };
    addItem("\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0644\u0644\u0645\u0644\u0641", "\u0627\u0644\u0623\u0631\u0634\u064A\u0641", "", "", this.archive?.digitalCopy);
    addItem("\u0645\u0631\u0641\u0642 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064A\u0629", "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", "", applicant.consultation?.result || "", applicant.consultation?.attachment);
    addItem("\u0645\u0631\u0641\u0642 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629", "\u0627\u0644\u0645\u062E\u0628\u0631", "", applicant.investigation?.result || "", applicant.investigation?.attachment);
    this.attachments = items;
  }
  getConsultationsBySpecialization(specializationId, fileNumber) {
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortBy", "consultationID").set("sortDesc", "true").set("filterDict[doctor.specializationID]", specializationId.toString()).set("filterDict[applicantFileNumber]", fileNumber);
    return this.http.get(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => {
      const items = res.data?.items || [];
      return this.removeDuplicateConsultations(items);
    }), catchError(() => {
      return of([]);
    }));
  }
  getInvestigationsBySpecialization(specializationId, fileNumber) {
    let params = new HttpParams().set("page", "1").set("pageSize", "1000").set("sortBy", "investigationID").set("sortDesc", "true").set("filterDict[doctor.specializationID]", specializationId.toString()).set("filterDict[applicantFileNumber]", fileNumber);
    return this.http.get(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(map((res) => {
      const items = res.data?.items || [];
      return this.removeDuplicateInvestigations(items);
    }), catchError(() => {
      return of([]);
    }));
  }
  removeDuplicateConsultations(consultations) {
    if (!consultations || consultations.length === 0) {
      return [];
    }
    const seen = /* @__PURE__ */ new Set();
    return consultations.filter((consultation) => {
      if (!consultation || !consultation.consultationID) {
        return false;
      }
      const id = consultation.consultationID;
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }
  removeDuplicateInvestigations(investigations) {
    if (!investigations || investigations.length === 0) {
      return [];
    }
    const seen = /* @__PURE__ */ new Set();
    return investigations.filter((investigation) => {
      if (!investigation || !investigation.investigationID) {
        return false;
      }
      const id = investigation.investigationID;
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  collectClinicData(results, specializations) {
    this.clinicConsultations.clear();
    this.clinicInvestigations.clear();
    const globalSeenConsultationIds = /* @__PURE__ */ new Set();
    const globalSeenInvestigationIds = /* @__PURE__ */ new Set();
    results.slice(0, 5).forEach((result, index) => {
      const clinicName = specializations[index]?.name || result.clinicName || "";
      if (result && result.consultations && Array.isArray(result.consultations) && result.consultations.length > 0) {
        const uniqueConsultations = result.consultations.filter((c) => {
          if (c && c.consultationID && !globalSeenConsultationIds.has(c.consultationID)) {
            globalSeenConsultationIds.add(c.consultationID);
            return true;
          }
          return false;
        });
        if (uniqueConsultations.length > 0) {
          this.clinicConsultations.set(clinicName, uniqueConsultations);
        }
      }
    });
    results.slice(5, 10).forEach((result, index) => {
      const clinicName = specializations[index]?.name || result.clinicName || "";
      if (result && result.investigations && Array.isArray(result.investigations) && result.investigations.length > 0) {
        const uniqueInvestigations = result.investigations.filter((i) => {
          if (i && i.investigationID && !globalSeenInvestigationIds.has(i.investigationID)) {
            globalSeenInvestigationIds.add(i.investigationID);
            return true;
          }
          return false;
        });
        if (uniqueInvestigations.length > 0) {
          this.clinicInvestigations.set(clinicName, uniqueInvestigations);
        }
      }
    });
  }
  collectNotes(applicant) {
    const notes = [];
    const seenConsultationIds = /* @__PURE__ */ new Set();
    const seenInvestigationIds = /* @__PURE__ */ new Set();
    this.clinicConsultations.forEach((consultations, clinicName) => {
      consultations.forEach((consultation, index) => {
        if (consultation && consultation.consultationID && !seenConsultationIds.has(consultation.consultationID)) {
          seenConsultationIds.add(consultation.consultationID);
          const title = consultations.length > 1 ? `\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 ${index + 1} - ${clinicName}` : `\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 - ${clinicName}`;
          let valueParts = [];
          if (consultation.referralReason && consultation.referralReason.trim()) {
            valueParts.push(`\u0633\u0628\u0628 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629: ${consultation.referralReason.trim()}`);
          }
          if (consultation.result && consultation.result.trim()) {
            valueParts.push(`\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${consultation.result.trim()}`);
          }
          if (valueParts.length > 0) {
            notes.push({
              title,
              value: valueParts.join("\n"),
              type: "consultation"
            });
          }
        }
      });
    });
    this.clinicInvestigations.forEach((investigations, clinicName) => {
      investigations.forEach((investigation, index) => {
        if (investigation && investigation.investigationID && !seenInvestigationIds.has(investigation.investigationID)) {
          seenInvestigationIds.add(investigation.investigationID);
          const title = investigations.length > 1 ? `\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 ${index + 1} - ${clinicName}` : `\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 - ${clinicName}`;
          let valueParts = [];
          if (investigation.investigationReason && investigation.investigationReason.trim()) {
            valueParts.push(`\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644: ${investigation.investigationReason.trim()}`);
          }
          if (investigation.result && investigation.result.trim()) {
            valueParts.push(`\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ${investigation.result.trim()}`);
          }
          if (valueParts.length > 0) {
            notes.push({
              title,
              value: valueParts.join("\n"),
              type: "investigation"
            });
          }
        }
      });
    });
    if (applicant.finalDecision?.reason) {
      notes.push({
        title: "\u062A\u0648\u0635\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0641 / \u0633\u0628\u0628 \u0627\u0644\u0642\u0631\u0627\u0631",
        value: applicant.finalDecision.reason,
        type: "other"
      });
    }
    if (applicant.orthopedicExamDto?.reason) {
      notes.push({
        title: "\u0633\u0628\u0628 \u0642\u0631\u0627\u0631 \u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645",
        value: applicant.orthopedicExamDto.reason,
        type: "other"
      });
    }
    if (applicant.eyeExam?.reason) {
      notes.push({
        title: "\u0633\u0628\u0628 \u0642\u0631\u0627\u0631 \u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646",
        value: applicant.eyeExam.reason,
        type: "other"
      });
    }
    if (applicant.eyeExam?.otherDiseases) {
      notes.push({
        title: "\u0623\u0645\u0631\u0627\u0636 \u0623\u062E\u0631\u0649 (\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646)",
        value: applicant.eyeExam.otherDiseases,
        type: "other"
      });
    }
    if (applicant.earClinic?.otherDiseases) {
      notes.push({
        title: "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u062E\u062A\u0635\u0627\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629",
        value: applicant.earClinic.otherDiseases,
        type: "other"
      });
    }
    this.notes = notes;
  }
  resolveAttachmentUrl(path) {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    const normalized = path.replace(/^\/+/, "");
    return `${environment.apiUrl}/${normalized}`;
  }
  getAttachmentUrl(path) {
    return this.resolveAttachmentUrl(path);
  }
  isImageFile(path) {
    if (!path)
      return false;
    const ext = path.toLowerCase().split(".").pop() || "";
    return ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"].includes(ext);
  }
  isPdfFile(path) {
    if (!path)
      return false;
    const ext = path.toLowerCase().split(".").pop() || "";
    return ext === "pdf";
  }
  getFileType(path) {
    if (this.isImageFile(path))
      return "image";
    if (this.isPdfFile(path))
      return "pdf";
    return "other";
  }
  groupAttachmentsByClinic() {
    this.attachmentsByClinic.clear();
    this.attachments.forEach((attachment) => {
      const clinicName = attachment.clinicName || "\u0623\u062E\u0631\u0649";
      if (!this.attachmentsByClinic.has(clinicName)) {
        this.attachmentsByClinic.set(clinicName, []);
      }
      this.attachmentsByClinic.get(clinicName).push(attachment);
    });
  }
  getClinicNames() {
    return Array.from(this.attachmentsByClinic.keys()).filter((name) => name !== "");
  }
  getAttachmentsByClinic(clinicName) {
    return this.attachmentsByClinic.get(clinicName) || [];
  }
  static \u0275fac = function ApplicantProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicantProfile)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(LookupService), \u0275\u0275directiveInject(MaritalStatusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicantProfile, selectors: [["app-applicant-profile"]], decls: 54, vars: 13, consts: [["loadingTpl", ""], ["id", "applicant-report", 1, "report-container"], [1, "report-header"], [1, "header-top"], [1, "branding"], ["src", "assets/images/syr.svg", "alt", "Logo", 1, "logo"], [1, "branding-text"], [1, "org-name"], [1, "report-title"], [1, "ids"], [1, "id"], [1, "label"], [1, "value", "accent", "fw-bold"], [1, "id", "date"], [1, "value"], [1, "print-banner", "only-print"], [1, "official-heading"], [1, "official-line"], [1, "official-line", "highlight"], [1, "banner-divider"], [1, "banner-title"], [1, "banner-name"], [1, "banner-meta"], [4, "ngIf", "ngIfElse"], [1, "actions", "no-print"], [1, "btn-print-professional", 3, "click"], [1, "pi", "pi-print"], [1, "grid"], [1, "card", "avoid-break", "archive-summary"], [1, "card-title"], [1, "card-body", "three-col"], [1, "field"], [1, "value", "badge"], [1, "card", "avoid-break"], [1, "card-body", "two-col"], [1, "field", "full"], ["class", "card avoid-break attachments-card", 4, "ngIf"], [1, "card-body"], [1, "subcard", "avoid-break"], [1, "subcard-title"], [1, "two-col"], [1, "subcard", "avoid-break", "print-results-section"], [1, "results-reasons-grid"], [1, "result-item"], [1, "card", "avoid-break", "final-decision-section"], [1, "card-title", "decision-title"], [1, "card-body", "decision-body"], [1, "decision-content"], [1, "decision-field"], [1, "decision-label"], [1, "decision-value", "highlight"], [1, "decision-value"], [1, "card", "avoid-break", "attachments-card"], [1, "card-body", "attachments-list"], ["class", "attachment-item", 4, "ngFor", "ngForOf"], [1, "attachment-item"], [1, "attachment-header"], [1, "attachment-info"], [1, "attachment-source"], [1, "attachment-label"], ["class", "attachment-clinic", 4, "ngIf"], ["class", "attachment-diagnosis", 4, "ngIf"], ["type", "button", 1, "attachment-action", "no-print", 3, "click"], [1, "pi", "pi-external-link"], ["class", "attachment-preview only-print", 4, "ngIf"], ["class", "attachment-path only-print", 4, "ngIf"], [1, "attachment-clinic"], [1, "attachment-diagnosis"], [1, "attachment-preview", "only-print"], ["class", "attachment-print-header", 4, "ngIf"], [1, "print-image", 3, "src", "alt"], [1, "attachment-print-header"], ["class", "print-clinic-name", 4, "ngIf"], ["class", "print-diagnosis", 4, "ngIf"], [1, "print-clinic-name"], [1, "print-diagnosis"], ["frameborder", "0", 1, "print-pdf", 3, "src"], [1, "attachment-path", "only-print"], [1, "result-label"], [1, "result-value"], [1, "reason-value"], [1, "card"]], template: function ApplicantProfile_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "img", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7);
      \u0275\u0275text(7, " \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639 - \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275text(9, "\u062A\u0642\u0631\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "span", 11);
      \u0275\u0275text(13, "\u0631\u0642\u0645 \u0627\u0644\u062F\u064A\u0648\u0627\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13)(17, "span", 11);
      \u0275\u0275text(18, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "gregorianDate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "div", 17);
      \u0275\u0275text(25, "\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275text(27, "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639 \u2013 \u0645\u062F\u064A\u0631\u064A\u0629 \u0627\u0644\u0635\u062D\u0629 \u0627\u0644\u0639\u0633\u0643\u0631\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18);
      \u0275\u0275text(29, "\u062F\u064A\u0648\u0627\u0646 \u0627\u0644\u0623\u0631\u0634\u064A\u0641 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "div", 19);
      \u0275\u0275elementStart(31, "div", 20);
      \u0275\u0275text(32, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628 ");
      \u0275\u0275elementStart(33, "span", 21);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " \u0625\u0644\u0649 \u0627\u0644\u062A\u062C\u0646\u064A\u062F ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 22)(37, "span");
      \u0275\u0275text(38, "\u0631\u0642\u0645 \u0627\u0644\u062F\u064A\u0648\u0627\u0646: ");
      \u0275\u0275elementStart(39, "strong");
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629: ");
      \u0275\u0275elementStart(43, "strong");
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "gregorianDate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(46, ApplicantProfile_ng_container_46_Template, 312, 77, "ng-container", 23)(47, ApplicantProfile_ng_template_47_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(49, "div", 24)(50, "button", 25);
      \u0275\u0275listener("click", function ApplicantProfile_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.printProfile());
      });
      \u0275\u0275element(51, "i", 26);
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0631");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const loadingTpl_r6 = \u0275\u0275reference(48);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate((ctx.archive == null ? null : ctx.archive.applicantFileNumber) || "-");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 7, ctx.date, "yyyy/MM/dd"));
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate((ctx.applicant == null ? null : ctx.applicant.fullName) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((ctx.archive == null ? null : ctx.archive.applicantFileNumber) || "-");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 10, ctx.date, "yyyy/MM/dd"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.applicant)("ngIfElse", loadingTpl_r6);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, GregorianDatePipe], styles: ['\n\n.report-container[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  font-family: "Tahoma", sans-serif;\n  line-height: 1.55;\n  color: #0f172a;\n}\n.report-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.branding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.branding-text[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.report-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #334155;\n}\n.print-banner[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 20px;\n  padding: 16px 20px;\n  border: 2px solid rgba(5, 66, 57, 0.2);\n  border-radius: 12px;\n  background: rgba(248, 250, 252, 0.95);\n  box-shadow: 0 8px 24px rgba(5, 66, 57, 0.08);\n}\n.print-banner[_ngcontent-%COMP%]   .official-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  line-height: 1.4;\n  font-size: 1.05rem;\n}\n.print-banner[_ngcontent-%COMP%]   .official-heading[_ngcontent-%COMP%]   .official-line[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n.print-banner[_ngcontent-%COMP%]   .official-heading[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #054239;\n}\n.print-banner[_ngcontent-%COMP%]   .banner-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(5, 66, 57, 0.2);\n  margin: 10px 0;\n}\n.print-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  letter-spacing: 0.08em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 6px;\n}\n.print-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]   .banner-name[_ngcontent-%COMP%] {\n  color: #054239;\n}\n.print-banner[_ngcontent-%COMP%]   .banner-meta[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px 18px;\n  font-size: 0.85rem;\n}\n.print-banner[_ngcontent-%COMP%]   .banner-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  align-items: baseline;\n}\n.ids[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 16px;\n}\n.id[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 6px;\n  align-items: baseline;\n}\n.accent[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.three-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 12px 18px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 14px;\n  font-size: 15px;\n  font-weight: 600;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  align-items: center;\n  gap: 8px;\n}\n.field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.label[_ngcontent-%COMP%] {\n  color: #475569;\n  font-weight: 500;\n}\n.value[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.subcard[_ngcontent-%COMP%] {\n  border: 1px dashed #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-bottom: 12px;\n}\n.subcard-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #0f172a;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px 0;\n}\n.btn-print-professional[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  border: 2px solid #054239;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.2);\n}\n.btn-print-professional[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.btn-print-professional[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(5, 66, 57, 0.3);\n}\n.btn-print-professional[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(5, 66, 57, 0.2);\n}\n.only-print[_ngcontent-%COMP%] {\n  display: none;\n}\n.avoid-break[_ngcontent-%COMP%] {\n  break-inside: avoid;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-item[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  background: #f8fafc;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-source[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-label[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.82rem;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-clinic[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.85rem;\n  margin-top: 4px;\n  font-weight: 500;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-diagnosis[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.8rem;\n  margin-top: 4px;\n  font-style: italic;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #054239,\n      #428177);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 16px rgba(5, 66, 57, 0.2);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(5, 66, 57, 0.25);\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-preview[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  page-break-inside: avoid;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-print-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 8px 12px;\n  background: #f1f5f9;\n  border-right: 3px solid var(--primary-dark);\n  border-radius: 4px;\n  page-break-inside: avoid;\n}\n.attachments-card[_ngcontent-%COMP%]   .print-clinic-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #0f172a;\n  margin-bottom: 4px;\n  font-weight: 600;\n}\n.attachments-card[_ngcontent-%COMP%]   .print-diagnosis[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #475569;\n  font-style: italic;\n}\n.attachments-card[_ngcontent-%COMP%]   .print-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  display: block;\n  margin: 0 auto;\n  page-break-inside: avoid;\n}\n.attachments-card[_ngcontent-%COMP%]   .print-pdf[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 400px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  page-break-inside: avoid;\n}\n.attachments-card[_ngcontent-%COMP%]   .attachment-path[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #475569;\n  width: 100%;\n  border-top: 1px dashed #cbd5f5;\n  padding-top: 8px;\n  margin-top: 8px;\n}\n.timeline-card[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n.timeline-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.notes-card[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px 16px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-consultation[_ngcontent-%COMP%] {\n  border: 2px solid rgba(185, 167, 121, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 250, 240, 0.9),\n      rgba(255, 245, 230, 0.7));\n  border-right: 4px solid var(--accent-gold);\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-consultation[_ngcontent-%COMP%]   .note-title[_ngcontent-%COMP%] {\n  color: var(--accent-gold-dark);\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-consultation[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-investigation[_ngcontent-%COMP%] {\n  border: 2px solid rgba(16, 185, 129, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 253, 245, 0.9),\n      rgba(209, 250, 229, 0.7));\n  border-right: 4px solid #10b981;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-investigation[_ngcontent-%COMP%]   .note-title[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-investigation[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-other[_ngcontent-%COMP%] {\n  border: 1px dashed rgba(5, 66, 57, 0.3);\n  background: #fbfdfa;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-other[_ngcontent-%COMP%]   .note-title[_ngcontent-%COMP%] {\n  color: #054239;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item.note-other[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.notes-card[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.notes-card[_ngcontent-%COMP%]   .note-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.notes-card[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.notes-card[_ngcontent-%COMP%]   .note-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.notes-card[_ngcontent-%COMP%]   .note-value[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  line-height: 1.6;\n  white-space: pre-line;\n  font-size: 0.85rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: rgba(5, 66, 57, 0.15);\n  color: #054239;\n}\n.badge-muted[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.2);\n  color: #475569;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 14px;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 160px;\n}\n@media (max-width: 992px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .field[_ngcontent-%COMP%] {\n    grid-template-columns: 120px 1fr;\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    background: #fff;\n    font-family: "Tahoma", sans-serif;\n    line-height: 1.6;\n    color: #0f172a;\n  }\n  @page {\n    size: A4;\n    margin: 15mm 10mm;\n    @top-center {\n      content: "" !important;\n    }\n    @top-left {\n      content: "" !important;\n    }\n    @top-right {\n      content: "" !important;\n    }\n    @bottom-center {\n      content: "" !important;\n    }\n    @bottom-left {\n      content: "" !important;\n    }\n    @bottom-right {\n      content: "" !important;\n    }\n  }\n  footer[_ngcontent-%COMP%], \n   .footer[_ngcontent-%COMP%], \n   app-footer[_ngcontent-%COMP%], \n   .layout-footer[_ngcontent-%COMP%], \n   .page-footer[_ngcontent-%COMP%], \n   .print-footer[_ngcontent-%COMP%], \n   header[_ngcontent-%COMP%]:not(.print-banner), \n   .header[_ngcontent-%COMP%]:not(.print-banner), \n   .report-header[_ngcontent-%COMP%] {\n    display: none !important;\n    visibility: hidden !important;\n  }\n  .only-print[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .print-banner[_ngcontent-%COMP%] {\n    display: block;\n    border-color: #000;\n    background: #fff;\n    box-shadow: none;\n    page-break-inside: avoid;\n  }\n  .banner-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n  }\n  .report-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .report-container[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 11px !important;\n    background: #fff;\n    max-width: 100%;\n  }\n  .print-header[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n  .print-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n  .print-header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 13px !important;\n  }\n  .print-header[_ngcontent-%COMP%]   .report-title[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n    color: #111;\n  }\n  .report-header[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .header-top[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .grid[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border-color: #bbb;\n    background: #fff;\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    background: #fff;\n    border-bottom-color: #bbb;\n    padding: 6px 10px;\n    font-size: 12px !important;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 4px 10px;\n  }\n  .field[_ngcontent-%COMP%] {\n    grid-template-columns: 120px 1fr;\n    gap: 4px;\n  }\n  .label[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .value[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n    word-break: break-word;\n    overflow-wrap: break-word;\n  }\n  .subcard[_ngcontent-%COMP%] {\n    border-color: #ccc;\n    padding: 8px;\n    margin-bottom: 8px;\n  }\n  .subcard-title[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n    margin-bottom: 4px;\n  }\n  .ids[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .id[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n    gap: 4px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    width: 35px !important;\n    height: 35px !important;\n  }\n  .org-name[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .final-decision-section[_ngcontent-%COMP%] {\n    border: 3px solid #000;\n    background: #fff;\n    margin-top: 20px;\n    page-break-inside: avoid;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-title[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        to bottom,\n        #e8e8e8,\n        #d0d0d0);\n    border-bottom: 3px solid #000;\n    font-weight: 700;\n    text-align: center;\n    padding: 14px;\n    font-size: 15px !important;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-body[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: #fff;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-field[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    padding: 10px 0;\n    border-bottom: 2px dotted #666;\n    min-height: 30px;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-field[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-label[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: #000;\n    min-width: 140px;\n    font-size: 12px !important;\n    text-align: right;\n    padding-right: 8px;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-value[_ngcontent-%COMP%] {\n    flex: 1;\n    color: #000;\n    font-size: 12px !important;\n    line-height: 1.8;\n    padding-right: 8px;\n    border-right: 1px solid #ddd;\n  }\n  .final-decision-section[_ngcontent-%COMP%]   .decision-value.highlight[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 14px !important;\n    color: #054239;\n    text-decoration: underline;\n  }\n  .print-results-section[_ngcontent-%COMP%] {\n    border: 1px solid #000;\n    background: #fafafa;\n  }\n  .print-results-section[_ngcontent-%COMP%]   .subcard-title[_ngcontent-%COMP%] {\n    background: #e8e8e8;\n    padding: 8px 12px;\n    border-bottom: 1px solid #000;\n    font-weight: 700;\n    font-size: 12px !important;\n  }\n  .print-results-section[_ngcontent-%COMP%]   .results-reasons-grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 8px 0;\n  }\n  .print-results-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    border-left: 3px solid #054239;\n    background: #fff;\n    margin-bottom: 4px;\n  }\n  .print-results-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-label[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: #000;\n    font-size: 10px !important;\n    margin-bottom: 4px;\n  }\n  .print-results-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-value[_ngcontent-%COMP%] {\n    color: #054239;\n    font-weight: 600;\n    font-size: 10px !important;\n    margin-bottom: 4px;\n  }\n  .print-results-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .reason-value[_ngcontent-%COMP%] {\n    color: #333;\n    font-size: 9px !important;\n    padding-right: 8px;\n    font-style: italic;\n  }\n  .subcard[_ngcontent-%COMP%] {\n    border: 1px solid #000;\n    background: #fff;\n  }\n  .subcard[_ngcontent-%COMP%]   .subcard-title[_ngcontent-%COMP%] {\n    background: #f5f5f5;\n    border-bottom: 1px solid #000;\n    padding: 8px 12px;\n    font-weight: 700;\n    font-size: 11px !important;\n  }\n  .subcard[_ngcontent-%COMP%]   .field.full[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    padding-top: 8px;\n    border-top: 1px dotted #ccc;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .attachment-item[_ngcontent-%COMP%] {\n    border: 1px solid #000;\n    background: #fff;\n    page-break-inside: avoid;\n    margin-bottom: 12px;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .attachment-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .attachment-info[_ngcontent-%COMP%]   .attachment-source[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n    font-weight: 700;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .attachment-info[_ngcontent-%COMP%]   .attachment-label[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .attachment-preview[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    page-break-inside: avoid;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .print-image[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    border: 1px solid #000;\n    border-radius: 4px;\n    display: block;\n    margin: 8px auto;\n    page-break-inside: avoid;\n    page-break-after: auto;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .print-pdf[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 500px;\n    max-height: 800px;\n    border: 1px solid #000;\n    border-radius: 4px;\n    page-break-inside: avoid;\n    page-break-after: auto;\n  }\n  .attachments-card[_ngcontent-%COMP%]   .attachment-path[_ngcontent-%COMP%] {\n    font-size: 9px !important;\n    color: #000;\n    border-top: 1px dashed #999;\n    padding-top: 8px;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=applicant-profile.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicantProfile, [{
    type: Component,
    args: [{ selector: "app-applicant-profile", imports: [CommonModule, GregorianDatePipe], template: `<div class="report-container" id="applicant-report">\r
  <div class="report-header">\r
    <div class="header-top">\r
      <div class="branding">\r
        <img src="assets/images/syr.svg" alt="Logo" class="logo" />\r
        <div class="branding-text">\r
          <div class="org-name"> \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639 - \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629</div>\r
          <div class="report-title">\u062A\u0642\u0631\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628</div>\r
        </div>\r
      </div>\r
      <div class="ids">\r
        <div class="id"><span class="label">\u0631\u0642\u0645 \u0627\u0644\u062F\u064A\u0648\u0627\u0646</span><span class="value accent fw-bold">{{\r
            archive?.applicantFileNumber || '-' }}</span></div>\r
        <!-- <div class="id"><span class="label">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</span><span class="value">{{ applicant?.fileNumber }}</span></div> -->\r
        <div class="id date"><span class="label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629</span><span class="value">{{ date |\r
            gregorianDate:'yyyy/MM/dd' }}</span></div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="print-banner only-print">\r
    <div class="official-heading">\r
      <div class="official-line">\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629</div>\r
      <div class="official-line">\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639 \u2013 \u0645\u062F\u064A\u0631\u064A\u0629 \u0627\u0644\u0635\u062D\u0629 \u0627\u0644\u0639\u0633\u0643\u0631\u064A\u0629</div>\r
      <div class="official-line highlight">\u062F\u064A\u0648\u0627\u0646 \u0627\u0644\u0623\u0631\u0634\u064A\u0641 </div>\r
    </div>\r
    <div class="banner-divider"></div>\r
    <div class="banner-title">\r
      \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628\r
      <span class="banner-name">{{ applicant?.fullName || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>\r
      \u0625\u0644\u0649 \u0627\u0644\u062A\u062C\u0646\u064A\u062F\r
    </div>\r
    <div class="banner-meta">\r
      <span>\u0631\u0642\u0645 \u0627\u0644\u062F\u064A\u0648\u0627\u0646: <strong>{{ archive?.applicantFileNumber || '-' }}</strong></span>\r
      <!-- <span>\u0631\u0642\u0645 \u0627\u0644\u062A\u062C\u0646\u064A\u062F: <strong>{{ applicant?.associateNumber || '-' }}</strong></span> -->\r
      <span>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629: <strong>{{ date | gregorianDate:'yyyy/MM/dd' }}</strong></span>\r
    </div>\r
  </div>\r
\r
  <ng-container *ngIf="applicant as a; else loadingTpl">\r
    <div class="grid">\r
      <section class="card avoid-break archive-summary">\r
        <h5 class="card-title">\u0645\u0644\u062E\u0635 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u064A\u0648\u0627\u0646 \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629</h5>\r
        <div class="card-body three-col">\r
          <div class="field"><span class="label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062F\u062E\u0627\u0644</span><span class="value">{{ a.createdAt |\r
              gregorianDate:'yyyy/MM/dd' }}</span></div>\r
          <!-- <div class="field"><span class="label">\u0631\u0642\u0645 \u0627\u0644\u062A\u062C\u0646\u064A\u062F</span><span class="value">{{ a.associateNumber || '-' }}</span></div> -->\r
          <div class="field"><span class="label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0623\u0631\u0634\u0641\u0629</span><span class="value">{{ archive?.archiveDate |\r
              gregorianDate:'yyyy/MM/dd' }}</span></div>\r
          <div class="field"><span class="label"> \u0642\u0631\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0641</span><span class="value">{{\r
              a.finalDecision?.result?.description || '-' }}</span></div>\r
          <div class="field"><span class="label">\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F</span><span class="value badge"\r
              [class.badge-success]="a.finalDecision?.isExportedToRecruitment"\r
              [class.badge-muted]="!a.finalDecision?.isExportedToRecruitment">\r
              {{ a.finalDecision?.isExportedToRecruitment ? '\u0645\u0635\u062F\u0651\u0631' : '\u063A\u064A\u0631 \u0645\u0635\u062F\u0651\u0631' }}</span></div>\r
          <div class="field"><span class="label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0635\u062F\u064A\u0631</span><span class="value">{{ a.finalDecision?.exportedAt\r
              | gregorianDate:'yyyy/MM/dd' }}</span></div>\r
        </div>\r
      </section>\r
\r
      <section class="card avoid-break">\r
        <h5 class="card-title">\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629</h5>\r
        <div class="card-body two-col">\r
          <div class="field"><span class="label">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641</span><span class="value">{{ a.fileNumber || '-' }}</span>\r
          </div>\r
          <div class="field"><span class="label">\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631</span><span class="value">{{ a.queueNumber || '-' }}</span>\r
          </div>\r
          <div class="field"><span class="label">\u0627\u0644\u0627\u0633\u0645</span><span class="value">{{ a.fullName || '-' }}</span></div>\r
          <div class="field"><span class="label">\u0627\u0633\u0645 \u0627\u0644\u0623\u0645</span><span class="value">{{ a.motherName || '-' }}</span>\r
          </div>\r
          <div class="field"><span class="label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F</span><span class="value">{{ a.dateOfBirth |\r
              gregorianDate:'yyyy/MM/dd' }}</span></div>\r
          <div class="field"><span class="label">\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645</span><span class="value">{{ a.bloodType || '-' }}</span>\r
          </div>\r
          <div class="field"><span class="label">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F</span><span class="value">{{ a.recruitmentCenter || '-'\r
              }}</span></div>\r
          <div class="field"><span class="label">\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</span><span class="value">{{\r
              getMaritalStatusDescription(a.maritalStatusID) }}</span></div>\r
          <div class="field"><span class="label">\u0627\u0644\u0648\u0638\u064A\u0641\u0629</span><span class="value">{{ a.job || '-' }}</span></div>\r
          <div class="field"><span class="label">\u0627\u0644\u0637\u0648\u0644 / \u0627\u0644\u0648\u0632\u0646</span><span class="value">{{ a.height || '-' }} \u0633\u0645 / {{\r
              a.weight || '-' }} \u0643\u062C\u0645</span></div>\r
          <div class="field"><span class="label">BMI</span><span class="value">{{ a.bmi || '-' }}</span></div>\r
          <div class="field"><span class="label">\u0636\u063A\u0637 \u0627\u0644\u062F\u0645</span><span class="value">{{ a.bloodPressure || '-' }}</span>\r
          </div>\r
          <div class="field"><span class="label">\u0627\u0644\u0646\u0628\u0636</span><span class="value">{{ a.pulse || '-' }}</span></div>\r
          <div class="field"><span class="label">\u0648\u0634\u0645</span><span class="value">{{ a.tattoo ? '\u064A\u0648\u062C\u062F' : '\u0644\u0627 \u064A\u0648\u062C\u062F'\r
              }}</span></div>\r
          <div class="field full"><span class="label">\u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629</span><span class="value">{{ a.distinctiveMarks ||\r
              '\u0644\u0627 \u062A\u0648\u062C\u062F' }}</span></div>\r
        </div>\r
      </section>\r
\r
      <section class="card avoid-break attachments-card" *ngIf="hasAttachments()">\r
        <h5 class="card-title">\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0648\u062B\u0627\u0626\u0642 \u0627\u0644\u0645\u0631\u0641\u0648\u0639\u0629</h5>\r
        <div class="card-body attachments-list">\r
          <div class="attachment-item" *ngFor="let attachment of attachments">\r
            <div class="attachment-header">\r
              <div class="attachment-info">\r
                <span class="attachment-source">{{ attachment.source }}</span>\r
                <span class="attachment-label">{{ attachment.label }}</span>\r
                <span class="attachment-clinic" *ngIf="attachment.clinicName">\r
                  <strong>\u0627\u0644\u0639\u064A\u0627\u062F\u0629:</strong> {{ attachment.clinicName }}\r
                </span>\r
                <span class="attachment-diagnosis" *ngIf="attachment.diagnosis">\r
                  <strong>\u0627\u0644\u062A\u0634\u062E\u064A\u0635 / \u0627\u0644\u0646\u062A\u064A\u062C\u0629:</strong> {{ attachment.diagnosis }}\r
                </span>\r
              </div>\r
              <button class="attachment-action no-print" type="button" (click)="openAttachment(attachment.path)">\r
                <i class="pi pi-external-link"></i>\r
                <span>\u0639\u0631\u0636 / \u0637\u0628\u0627\u0639\u0629</span>\r
              </button>\r
            </div>\r
\r
            <!-- \u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0646\u062F \u0627\u0644\u0637\u0628\u0627\u0639\u0629 -->\r
            <div class="attachment-preview only-print" *ngIf="getFileType(attachment.path) === 'image'">\r
              <div class="attachment-print-header" *ngIf="attachment.clinicName || attachment.diagnosis">\r
                <div *ngIf="attachment.clinicName" class="print-clinic-name">\r
                  <strong>\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0639\u0644\u0649 {{ attachment.clinicName }}:</strong>\r
                </div>\r
                <div *ngIf="attachment.diagnosis" class="print-diagnosis">\r
                  <strong>\u0627\u0644\u0646\u062A\u064A\u062C\u0629 :</strong> {{ attachment.diagnosis }}\r
                </div>\r
              </div>\r
              <img [src]="getAttachmentUrl(attachment.path)" [alt]="attachment.label" class="print-image" />\r
            </div>\r
\r
            <!-- \u0639\u0631\u0636 PDFs \u0639\u0646\u062F \u0627\u0644\u0637\u0628\u0627\u0639\u0629 -->\r
            <div class="attachment-preview only-print" *ngIf="getFileType(attachment.path) === 'pdf'">\r
              <div class="attachment-print-header" *ngIf="attachment.clinicName || attachment.diagnosis">\r
                <div *ngIf="attachment.clinicName" class="print-clinic-name">\r
                  <strong>\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0639\u0644\u0649 {{ attachment.clinicName }}:</strong>\r
                </div>\r
                <div *ngIf="attachment.diagnosis" class="print-diagnosis">\r
                  <strong>\u0627\u0644\u0646\u062A\u064A\u062C\u0629:</strong> {{ attachment.diagnosis }}\r
                </div>\r
              </div>\r
              <iframe [src]="getAttachmentUrl(attachment.path)" class="print-pdf" frameborder="0"></iframe>\r
            </div>\r
\r
            <!-- \u0644\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649\u060C \u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u0627\u0631 \u0641\u0642\u0637 \u0639\u0646\u062F \u0627\u0644\u0637\u0628\u0627\u0639\u0629 -->\r
            <div class="attachment-path only-print" *ngIf="getFileType(attachment.path) === 'other'">\r
              <div class="attachment-print-header" *ngIf="attachment.clinicName || attachment.diagnosis">\r
                <div *ngIf="attachment.clinicName" class="print-clinic-name">\r
                  <strong>\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0639\u0644\u0649 {{ attachment.clinicName }}:</strong>\r
                </div>\r
                <div *ngIf="attachment.diagnosis" class="print-diagnosis">\r
                  <strong>\u0627\u0644\u062A\u0634\u062E\u064A\u0635:</strong> {{ attachment.diagnosis }}\r
                </div>\r
              </div>\r
              <strong>\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0644\u0641:</strong> {{ attachment.path }}\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section class="card avoid-break">\r
        <h5 class="card-title">\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629</h5>\r
        <div class="card-body">\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646</div>\r
            <div class="two-col">\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u0638\u0631</span><span class="value">{{ a.eyeExam?.vision || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0623\u0644\u0648\u0627\u0646</span><span class="value">{{ a.eyeExam?.colorTest || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0646\u0643\u0633\u0627\u0631</span><span class="value">{{\r
                  a.eyeExam?.refractionValue || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{\r
                  getResultDescription(a.eyeExam?.resultID) }}</span></div>\r
            </div>\r
          </div>\r
\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u064A</div>\r
            <div class="two-col">\r
              <div class="field"><span class="label">\u0639\u0627\u0645</span><span class="value">{{ a.surgicalExam?.generalSurgery ||\r
                  '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629</span><span class="value">{{\r
                  a.surgicalExam?.urinarySurgery || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0623\u0648\u0639\u064A\u0629 \u0627\u0644\u062F\u0645\u0648\u064A\u0629</span><span class="value">{{\r
                  a.surgicalExam?.vascularSurgery || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0635\u062F\u0631</span><span class="value">{{ a.surgicalExam?.thoracicSurgery\r
                  || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{\r
                  getResultDescription(a.surgicalExam?.resultID) }}</span></div>\r
            </div>\r
          </div>\r
\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0628\u0627\u0637\u0646\u064A</div>\r
            <div class="two-col">\r
              <div class="field"><span class="label">\u0627\u0644\u0642\u0644\u0628</span><span class="value">{{ a.internalExam?.heart || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A</span><span class="value">{{\r
                  a.internalExam?.respiratory || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645\u064A</span><span class="value">{{\r
                  a.internalExam?.digestive || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0623\u0639\u0635\u0627\u0628</span><span class="value">{{ a.internalExam?.neurology ||\r
                  '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u062C\u0644\u062F</span><span class="value">{{ a.internalExam?.skin || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{\r
                  getResultDescription(a.internalExam?.resultID) }}</span></div>\r
            </div>\r
          </div>\r
\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645</div>\r
            <div class="two-col">\r
              <div class="field"><span class="label">\u0639\u0636\u0644\u064A \u0647\u064A\u0643\u0644\u064A</span><span class="value">{{\r
                  a.orthopedicExamDto?.musculoskeletal || '-' }}</span></div>\r
              <div class="field"><span class="label">\u062C\u0631\u0627\u062D\u0629 \u0639\u0635\u0628\u064A\u0629</span><span class="value">{{\r
                  a.orthopedicExamDto?.neurologicalSurgery || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{\r
                  getResultDescription(a.orthopedicExamDto?.resultID) }}</span></div>\r
            </div>\r
          </div>\r
\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629</div>\r
            <div class="two-col">\r
              <div class="field"><span class="label">\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</span><span class="value">{{ a.earClinic?.rightEar ||\r
                  '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</span><span class="value">{{ a.earClinic?.leftEar ||\r
                  '-' }}</span></div>\r
              <div class="field"><span class="label">\u0637\u0628\u0644\u0629 \u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0645\u0646\u0649</span><span class="value">{{\r
                  a.earClinic?.rightTympanicMembrane || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0637\u0628\u0644\u0629 \u0627\u0644\u0623\u0630\u0646 \u0627\u0644\u064A\u0633\u0631\u0649</span><span class="value">{{\r
                  a.earClinic?.leftTympanicMembrane || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0633\u0645\u0639 \u0627\u0644\u064A\u0645\u0646\u0649/\u0627\u0644\u064A\u0633\u0631\u0649</span><span class="value">{{\r
                  a.earClinic?.rightHearing || '-' }} / {{ a.earClinic?.leftHearing || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0631\u0646\u064A\u0646</span><span class="value">{{ a.earClinic?.resonators || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0647\u0645\u0633</span><span class="value">{{\r
                  a.earClinic?.rightWhisperTest || '-' }} / {{ a.earClinic?.leftWhisperTest || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0641\u0645</span><span class="value">{{ a.earClinic?.mouth || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{\r
                  getResultDescription(a.earClinic?.resultID) }}</span></div>\r
            </div>\r
          </div>\r
\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629</div>\r
            <div class="two-col">\r
              @if(a.consultation){\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u0648\u0639</span><span class="value">{{ a.consultation.consultationType\r
                  || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0633\u0628\u0628 \u0627\u0644\u0625\u062D\u0627\u0644\u0629</span><span class="value">{{\r
                  a.consultation.referralReason || '-' }}</span></div>\r
              <div class="field full"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{ a.consultation.result ||\r
                  '-' }}</span></div>\r
              }@else {\r
              <div class="field full"><span class="label">\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A</span></div>\r
              }\r
            </div>\r
          </div>\r
\r
          <div class="subcard avoid-break">\r
            <div class="subcard-title">\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644</div>\r
            <div class="two-col">\r
              @if(a.investigation){\r
              <div class="field"><span class="label">\u0627\u0644\u0646\u0648\u0639</span><span class="value">{{ a.investigation.type || '-'\r
                  }}</span></div>\r
              <div class="field"><span class="label">\u0633\u0628\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644</span><span class="value">{{\r
                  a.investigation.investigationReason || '-' }}</span></div>\r
              <div class="field"><span class="label">\u0627\u0644\u062D\u0627\u0644\u0629</span><span class="value">{{ a.investigation.status || '-'\r
                  }}</span></div>\r
              <div class="field full"><span class="label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629</span><span class="value">{{ a.investigation.result ||\r
                  '-' }}</span></div>\r
              }@else {\r
              <div class="field full"><span class="label">\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0627\u0644\u064A\u0644</span></div>\r
              }\r
            </div>\r
          </div>\r
\r
          <!-- \u0639\u0631\u0636 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0623\u0633\u0628\u0627\u0628 \u0644\u0643\u0644 \u0641\u062D\u0635 -->\r
          <div class="subcard avoid-break print-results-section">\r
            <div class="subcard-title">\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0623\u0633\u0628\u0627\u0628</div>\r
            <div class="results-reasons-grid">\r
              @if(a.eyeExam?.resultID){\r
              <div class="result-item">\r
                <div class="result-label">\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0648\u0646:</div>\r
                <div class="result-value">{{ getResultDescription(a.eyeExam?.resultID) }}</div>\r
              </div>\r
              }\r
              @if(a.surgicalExam?.resultID){\r
              <div class="result-item">\r
                <div class="result-label">\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u062C\u0631\u0627\u062D\u064A:</div>\r
                <div class="result-value">{{ getResultDescription(a.surgicalExam?.resultID) }}</div>\r
              </div>\r
              }\r
              @if(a.internalExam?.resultID){\r
              <div class="result-item">\r
                <div class="result-label">\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0628\u0627\u0637\u0646\u064A:</div>\r
                <div class="result-value">{{ getResultDescription(a.internalExam?.resultID) }}</div>\r
              </div>\r
              }\r
              @if(a.orthopedicExamDto?.resultID){\r
              <div class="result-item">\r
                <div class="result-label">\u0641\u062D\u0635 \u0627\u0644\u0639\u0638\u0627\u0645:</div>\r
                <div class="result-value">{{ getResultDescription(a.orthopedicExamDto?.resultID) }}</div>\r
                @if(a.orthopedicExamDto?.reason){\r
                <div class="reason-value">\u0627\u0644\u0633\u0628\u0628: {{ a.orthopedicExamDto?.reason }}</div>\r
                }\r
              </div>\r
              }\r
              @if(a.earClinic?.resultID){\r
              <div class="result-item">\r
                <div class="result-label">\u0641\u062D\u0635 \u0627\u0644\u0623\u0630\u0646 \u0648\u0627\u0644\u0623\u0646\u0641 \u0648\u0627\u0644\u062D\u0646\u062C\u0631\u0629:</div>\r
                <div class="result-value">{{ getResultDescription(a.earClinic?.resultID) }}</div>\r
                @if(a.earClinic?.reason){\r
                <div class="reason-value">\u0627\u0644\u0633\u0628\u0628: {{ a.earClinic?.reason }}</div>\r
                }\r
              </div>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <!-- <section class="card avoid-break timeline-card" *ngIf="a.finalDecision">\r
        <h5 class="card-title">\u062E\u0637 \u0632\u0645\u0646\u064A \u0644\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0641</h5>\r
        <div class="card-body timeline-grid">\r
          <div class="timeline-item">\r
            <span class="label">\u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644</span>\r
            <span class="value">{{ a.finalDecision.receptionAddedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
          </div>\r
          <div class="timeline-item">\r
            <span class="label">\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0645\u0634\u0631\u0641</span>\r
            <span class="value">{{ a.finalDecision.supervisorAddedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
          </div>\r
          <div class="timeline-item">\r
            <span class="label">\u0622\u062E\u0631 \u062A\u0639\u062F\u064A\u0644 \u0644\u0644\u0645\u0634\u0631\u0641</span>\r
            <span class="value">{{ a.finalDecision.supervisorLastModifiedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
          </div>\r
          <div class="timeline-item">\r
            <span class="label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0635\u062F\u064A\u0631</span>\r
            <span class="value">{{ a.finalDecision.exportedAt | gregorianDate:'yyyy/MM/dd HH:mm' }}</span>\r
          </div>\r
        </div>\r
      </section> -->\r
\r
      <section class="card avoid-break final-decision-section">\r
        <h5 class="card-title decision-title">\u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A</h5>\r
        <div class="card-body decision-body">\r
          <div class="decision-content">\r
            <div class="decision-field">\r
              <span class="decision-label">\u0627\u0644\u0646\u062A\u064A\u062C\u0629:</span>\r
              <span class="decision-value highlight">{{ a.finalDecision?.result?.description ||\r
                getResultDescription(a.finalDecision?.resultID) || '-' }}</span>\r
            </div>\r
            @if(a.finalDecision?.resultID == 1){\r
            <div class="decision-field">\r
              <span class="decision-label">\u0627\u0644\u062A\u0648\u0635\u064A\u0629:</span>\r
              <span class="decision-value">{{ a.finalDecision?.reason || '\u0644\u0627 \u064A\u0648\u062C\u062F' }}</span>\r
            </div>\r
            }@else{\r
            <div class="decision-field">\r
              <span class="decision-label">\u0627\u0644\u0633\u0628\u0628:</span>\r
              <span class="decision-value">{{ a.finalDecision?.reason || '\u0644\u0627 \u064A\u0648\u062C\u062F' }}</span>\r
            </div>\r
            @if(a.finalDecision?.postponeDuration){\r
            <div class="decision-field">\r
              <span class="decision-label">\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0644:</span>\r
              <span class="decision-value">{{ a.finalDecision?.postponeDuration }}</span>\r
            </div>\r
            }\r
            }\r
            <div class="decision-field">\r
              <span class="decision-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u0631\u0627\u0631:</span>\r
              <span class="decision-value">{{ a.finalDecision?.decisionDate || '-' }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <!-- <section class="card avoid-break notes-card" *ngIf="notes.length">\r
      <h5 class="card-title">\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0627\u062A</h5>\r
      <div class="card-body notes-grid">\r
        <div class="note-item" \r
             [class.note-consultation]="note.type === 'consultation'"\r
             [class.note-investigation]="note.type === 'investigation'"\r
             [class.note-other]="note.type === 'other' || !note.type"\r
             *ngFor="let note of notes">\r
          <div class="note-header">\r
            <i class="note-icon" \r
               [class.pi-comments]="note.type === 'consultation'"\r
               [class.pi-flask]="note.type === 'investigation'"\r
               [class.pi-info-circle]="note.type === 'other' || !note.type"></i>\r
            <span class="note-title">{{ note.title }}</span>\r
          </div>\r
          <p class="note-value">{{ note.value }}</p>\r
        </div>\r
      </div>\r
    </section> -->\r
    </div>\r
  </ng-container>\r
\r
  <ng-template #loadingTpl>\r
    <div class="card">\r
      <div class="card-body">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 ...</div>\r
    </div>\r
  </ng-template>\r
\r
  <div class="actions no-print">\r
    <button class="btn-print-professional" (click)="printProfile()">\r
      <i class="pi pi-print"></i>\r
      <span>\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0631</span>\r
    </button>\r
  </div>\r
</div>`, styles: ['/* src/app/features/archive/components/applicant-profile/applicant-profile.scss */\n.report-container {\n  background: #fff;\n  padding: 20px;\n  font-family: "Tahoma", sans-serif;\n  line-height: 1.55;\n  color: #0f172a;\n}\n.report-header {\n  margin-bottom: 12px;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.branding {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo {\n  width: 40px;\n  height: 40px;\n}\n.branding-text .org-name {\n  font-weight: 600;\n  color: #0f172a;\n}\n.report-title {\n  font-size: 14px;\n  color: #334155;\n}\n.print-banner {\n  display: none;\n  margin-bottom: 20px;\n  padding: 16px 20px;\n  border: 2px solid rgba(5, 66, 57, 0.2);\n  border-radius: 12px;\n  background: rgba(248, 250, 252, 0.95);\n  box-shadow: 0 8px 24px rgba(5, 66, 57, 0.08);\n}\n.print-banner .official-heading {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  line-height: 1.4;\n  font-size: 1.05rem;\n}\n.print-banner .official-heading .official-line {\n  margin: 2px 0;\n}\n.print-banner .official-heading .highlight {\n  color: #054239;\n}\n.print-banner .banner-divider {\n  height: 1px;\n  background: rgba(5, 66, 57, 0.2);\n  margin: 10px 0;\n}\n.print-banner .banner-title {\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  letter-spacing: 0.08em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 6px;\n}\n.print-banner .banner-title .banner-name {\n  color: #054239;\n}\n.print-banner .banner-meta {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px 18px;\n  font-size: 0.85rem;\n}\n.print-banner .banner-meta span {\n  display: inline-flex;\n  gap: 4px;\n  align-items: baseline;\n}\n.ids {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 16px;\n}\n.id {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 6px;\n  align-items: baseline;\n}\n.accent {\n  color: #0ea5e9;\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.three-col {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 12px 18px;\n}\n.card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.card-title {\n  margin: 0;\n  padding: 10px 14px;\n  font-size: 15px;\n  font-weight: 600;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-body {\n  padding: 12px 16px;\n}\n.two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px 16px;\n}\n.field {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  align-items: center;\n  gap: 8px;\n}\n.field.full {\n  grid-column: 1/-1;\n}\n.label {\n  color: #475569;\n  font-weight: 500;\n}\n.value {\n  color: #111827;\n}\n.subcard {\n  border: 1px dashed #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-bottom: 12px;\n}\n.subcard-title {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #0f172a;\n}\n.actions {\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px 0;\n}\n.btn-print-professional {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  border: 2px solid #054239;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.2);\n}\n.btn-print-professional i {\n  font-size: 1.25rem;\n}\n.btn-print-professional:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #428177 0%,\n      #054239 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(5, 66, 57, 0.3);\n}\n.btn-print-professional:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(5, 66, 57, 0.2);\n}\n.only-print {\n  display: none;\n}\n.avoid-break {\n  break-inside: avoid;\n}\n.attachments-card .attachments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.attachments-card .attachment-item {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  background: #f8fafc;\n}\n.attachments-card .attachment-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.attachments-card .attachment-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n.attachments-card .attachment-source {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.attachments-card .attachment-label {\n  color: #475569;\n  font-size: 0.82rem;\n}\n.attachments-card .attachment-clinic {\n  color: #0f172a;\n  font-size: 0.85rem;\n  margin-top: 4px;\n  font-weight: 500;\n}\n.attachments-card .attachment-diagnosis {\n  color: #475569;\n  font-size: 0.8rem;\n  margin-top: 4px;\n  font-style: italic;\n}\n.attachments-card .attachment-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #054239,\n      #428177);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 16px rgba(5, 66, 57, 0.2);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.attachments-card .attachment-action:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(5, 66, 57, 0.25);\n}\n.attachments-card .attachment-preview {\n  margin-top: 12px;\n  page-break-inside: avoid;\n}\n.attachments-card .attachment-print-header {\n  margin-bottom: 12px;\n  padding: 8px 12px;\n  background: #f1f5f9;\n  border-right: 3px solid var(--primary-dark);\n  border-radius: 4px;\n  page-break-inside: avoid;\n}\n.attachments-card .print-clinic-name {\n  font-size: 0.9rem;\n  color: #0f172a;\n  margin-bottom: 4px;\n  font-weight: 600;\n}\n.attachments-card .print-diagnosis {\n  font-size: 0.85rem;\n  color: #475569;\n  font-style: italic;\n}\n.attachments-card .print-image {\n  max-width: 100%;\n  height: auto;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  display: block;\n  margin: 0 auto;\n  page-break-inside: avoid;\n}\n.attachments-card .print-pdf {\n  width: 100%;\n  min-height: 400px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  page-break-inside: avoid;\n}\n.attachments-card .attachment-path {\n  font-size: 0.75rem;\n  color: #475569;\n  width: 100%;\n  border-top: 1px dashed #cbd5f5;\n  padding-top: 8px;\n  margin-top: 8px;\n}\n.timeline-card .timeline-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n.timeline-card .timeline-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.notes-card .notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n.notes-card .note-item {\n  border-radius: 10px;\n  padding: 14px 16px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-card .note-item.note-consultation {\n  border: 2px solid rgba(185, 167, 121, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 250, 240, 0.9),\n      rgba(255, 245, 230, 0.7));\n  border-right: 4px solid var(--accent-gold);\n}\n.notes-card .note-item.note-consultation .note-title {\n  color: var(--accent-gold-dark);\n}\n.notes-card .note-item.note-consultation .note-icon {\n  color: var(--accent-gold);\n}\n.notes-card .note-item.note-investigation {\n  border: 2px solid rgba(16, 185, 129, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 253, 245, 0.9),\n      rgba(209, 250, 229, 0.7));\n  border-right: 4px solid #10b981;\n}\n.notes-card .note-item.note-investigation .note-title {\n  color: #065f46;\n}\n.notes-card .note-item.note-investigation .note-icon {\n  color: #10b981;\n}\n.notes-card .note-item.note-other {\n  border: 1px dashed rgba(5, 66, 57, 0.3);\n  background: #fbfdfa;\n}\n.notes-card .note-item.note-other .note-title {\n  color: #054239;\n}\n.notes-card .note-item.note-other .note-icon {\n  color: #6b7280;\n}\n.notes-card .note-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.notes-card .note-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.notes-card .note-icon {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.notes-card .note-title {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.notes-card .note-value {\n  margin: 0;\n  color: #1f2937;\n  line-height: 1.6;\n  white-space: pre-line;\n  font-size: 0.85rem;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-success {\n  background: rgba(5, 66, 57, 0.15);\n  color: #054239;\n}\n.badge-muted {\n  background: rgba(148, 163, 184, 0.2);\n  color: #475569;\n}\n.table {\n  width: 100%;\n  font-size: 14px;\n}\nhtml[dir=rtl] .field {\n  grid-template-columns: 1fr 160px;\n}\n@media (max-width: 992px) {\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n  .field {\n    grid-template-columns: 120px 1fr;\n  }\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  body {\n    margin: 0;\n    background: #fff;\n    font-family: "Tahoma", sans-serif;\n    line-height: 1.6;\n    color: #0f172a;\n  }\n  @page {\n    size: A4;\n    margin: 15mm 10mm;\n    @top-center {\n      content: "" !important;\n    }\n    @top-left {\n      content: "" !important;\n    }\n    @top-right {\n      content: "" !important;\n    }\n    @bottom-center {\n      content: "" !important;\n    }\n    @bottom-left {\n      content: "" !important;\n    }\n    @bottom-right {\n      content: "" !important;\n    }\n  }\n  footer,\n  .footer,\n  app-footer,\n  .layout-footer,\n  .page-footer,\n  .print-footer,\n  header:not(.print-banner),\n  .header:not(.print-banner),\n  .report-header {\n    display: none !important;\n    visibility: hidden !important;\n  }\n  .only-print {\n    display: block;\n  }\n  .print-banner {\n    display: block;\n    border-color: #000;\n    background: #fff;\n    box-shadow: none;\n    page-break-inside: avoid;\n  }\n  .banner-title {\n    font-size: 1.1rem !important;\n  }\n  .report-header {\n    display: none;\n  }\n  .report-container {\n    padding: 0;\n    font-size: 11px !important;\n    background: #fff;\n    max-width: 100%;\n  }\n  .print-header .org {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n  .print-header .logo {\n    width: 35px;\n    height: 35px;\n  }\n  .print-header .meta .org-name {\n    font-weight: 700;\n    font-size: 13px !important;\n  }\n  .print-header .report-title {\n    font-size: 12px !important;\n    color: #111;\n  }\n  .report-header {\n    margin-bottom: 8px;\n  }\n  .header-top {\n    gap: 8px;\n  }\n  .grid {\n    gap: 6px;\n  }\n  .card {\n    box-shadow: none;\n    border-color: #bbb;\n    background: #fff;\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .card-title {\n    background: #fff;\n    border-bottom-color: #bbb;\n    padding: 6px 10px;\n    font-size: 12px !important;\n  }\n  .card-body {\n    padding: 8px 10px;\n  }\n  .two-col {\n    grid-template-columns: 1fr 1fr;\n    gap: 4px 10px;\n  }\n  .field {\n    grid-template-columns: 120px 1fr;\n    gap: 4px;\n  }\n  .label {\n    font-size: 10px !important;\n  }\n  .value {\n    font-size: 10px !important;\n    word-break: break-word;\n    overflow-wrap: break-word;\n  }\n  .subcard {\n    border-color: #ccc;\n    padding: 8px;\n    margin-bottom: 8px;\n  }\n  .subcard-title {\n    font-size: 11px !important;\n    margin-bottom: 4px;\n  }\n  .ids {\n    gap: 10px;\n  }\n  .id {\n    font-size: 10px !important;\n    gap: 4px;\n  }\n  .logo {\n    width: 35px !important;\n    height: 35px !important;\n  }\n  .org-name {\n    font-size: 12px !important;\n  }\n  .final-decision-section {\n    border: 3px solid #000;\n    background: #fff;\n    margin-top: 20px;\n    page-break-inside: avoid;\n  }\n  .final-decision-section .decision-title {\n    background:\n      linear-gradient(\n        to bottom,\n        #e8e8e8,\n        #d0d0d0);\n    border-bottom: 3px solid #000;\n    font-weight: 700;\n    text-align: center;\n    padding: 14px;\n    font-size: 15px !important;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  .final-decision-section .decision-body {\n    padding: 20px;\n    background: #fff;\n  }\n  .final-decision-section .decision-content {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .final-decision-section .decision-field {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    padding: 10px 0;\n    border-bottom: 2px dotted #666;\n    min-height: 30px;\n  }\n  .final-decision-section .decision-field:last-child {\n    border-bottom: none;\n  }\n  .final-decision-section .decision-label {\n    font-weight: 700;\n    color: #000;\n    min-width: 140px;\n    font-size: 12px !important;\n    text-align: right;\n    padding-right: 8px;\n  }\n  .final-decision-section .decision-value {\n    flex: 1;\n    color: #000;\n    font-size: 12px !important;\n    line-height: 1.8;\n    padding-right: 8px;\n    border-right: 1px solid #ddd;\n  }\n  .final-decision-section .decision-value.highlight {\n    font-weight: 700;\n    font-size: 14px !important;\n    color: #054239;\n    text-decoration: underline;\n  }\n  .print-results-section {\n    border: 1px solid #000;\n    background: #fafafa;\n  }\n  .print-results-section .subcard-title {\n    background: #e8e8e8;\n    padding: 8px 12px;\n    border-bottom: 1px solid #000;\n    font-weight: 700;\n    font-size: 12px !important;\n  }\n  .print-results-section .results-reasons-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 8px 0;\n  }\n  .print-results-section .result-item {\n    padding: 8px 12px;\n    border-left: 3px solid #054239;\n    background: #fff;\n    margin-bottom: 4px;\n  }\n  .print-results-section .result-item .result-label {\n    font-weight: 600;\n    color: #000;\n    font-size: 10px !important;\n    margin-bottom: 4px;\n  }\n  .print-results-section .result-item .result-value {\n    color: #054239;\n    font-weight: 600;\n    font-size: 10px !important;\n    margin-bottom: 4px;\n  }\n  .print-results-section .result-item .reason-value {\n    color: #333;\n    font-size: 9px !important;\n    padding-right: 8px;\n    font-style: italic;\n  }\n  .subcard {\n    border: 1px solid #000;\n    background: #fff;\n  }\n  .subcard .subcard-title {\n    background: #f5f5f5;\n    border-bottom: 1px solid #000;\n    padding: 8px 12px;\n    font-weight: 700;\n    font-size: 11px !important;\n  }\n  .subcard .field.full {\n    margin-top: 8px;\n    padding-top: 8px;\n    border-top: 1px dotted #ccc;\n  }\n  .attachments-card .attachment-item {\n    border: 1px solid #000;\n    background: #fff;\n    page-break-inside: avoid;\n    margin-bottom: 12px;\n  }\n  .attachments-card .attachment-header {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .attachments-card .attachment-info .attachment-source {\n    font-size: 11px !important;\n    font-weight: 700;\n  }\n  .attachments-card .attachment-info .attachment-label {\n    font-size: 10px !important;\n  }\n  .attachments-card .attachment-preview {\n    margin-top: 12px;\n    page-break-inside: avoid;\n  }\n  .attachments-card .print-image {\n    max-width: 100%;\n    height: auto;\n    border: 1px solid #000;\n    border-radius: 4px;\n    display: block;\n    margin: 8px auto;\n    page-break-inside: avoid;\n    page-break-after: auto;\n  }\n  .attachments-card .print-pdf {\n    width: 100%;\n    min-height: 500px;\n    max-height: 800px;\n    border: 1px solid #000;\n    border-radius: 4px;\n    page-break-inside: avoid;\n    page-break-after: auto;\n  }\n  .attachments-card .attachment-path {\n    font-size: 9px !important;\n    color: #000;\n    border-top: 1px dashed #999;\n    padding-top: 8px;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=applicant-profile.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: ApplicantService }, { type: LookupService }, { type: MaritalStatusService }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicantProfile, { className: "ApplicantProfile", filePath: "src/app/features/archive/components/applicant-profile/applicant-profile.ts", lineNumber: 26 });
})();
export {
  ApplicantProfile
};
//# sourceMappingURL=chunk-WWKEXMYF.js.map
