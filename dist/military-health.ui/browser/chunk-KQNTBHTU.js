import {
  Toast,
  ToastModule
} from "./chunk-BY5VP2T5.js";
import {
  Card,
  CardModule
} from "./chunk-CF6VTVJ7.js";
import {
  Tag,
  TagModule
} from "./chunk-XVKMQIUI.js";
import {
  BarcodePrintService
} from "./chunk-PHTDGWVA.js";
import "./chunk-WAJQF222.js";
import {
  Button,
  ButtonModule
} from "./chunk-DYGQH52H.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-O5UBWZSW.js";
import "./chunk-2VRBHK6C.js";
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
  NgIf
} from "./chunk-7EG6WMAP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YTJKKLZA.js";

// src/app/features/reception/components/applicant-details/applicant-details.ts
function ApplicantDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...");
    \u0275\u0275elementEnd()();
  }
}
function ApplicantDetailsComponent_p_card_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "h3", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.applicant.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: ", ctx_r0.applicant.fileNumber);
  }
}
function ApplicantDetailsComponent_p_card_11_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 22);
    \u0275\u0275text(2, "\u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.applicant.tattooDescription);
  }
}
function ApplicantDetailsComponent_p_card_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 14);
    \u0275\u0275template(1, ApplicantDetailsComponent_p_card_11_ng_template_1_Template, 9, 2, "ng-template", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17)(4, "h4", 18);
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275text(6, " \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21)(9, "span", 22);
    \u0275\u0275text(10, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 23);
    \u0275\u0275element(12, "p-tag", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 21)(14, "span", 22);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21)(19, "span", 22);
    \u0275\u0275text(20, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "span", 22);
    \u0275\u0275text(25, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "gregorianDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 21)(30, "span", 22);
    \u0275\u0275text(31, "\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 23);
    \u0275\u0275element(33, "p-tag", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 21)(35, "span", 22);
    \u0275\u0275text(36, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 23);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 21)(40, "span", 22);
    \u0275\u0275text(41, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 23);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 21)(45, "span", 22);
    \u0275\u0275text(46, "\u0627\u0644\u0639\u0645\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 23);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 21)(50, "span", 22);
    \u0275\u0275text(51, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 23);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 21)(55, "span", 22);
    \u0275\u0275text(56, "\u0648\u062C\u0648\u062F \u0648\u0634\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 23);
    \u0275\u0275element(58, "p-tag", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, ApplicantDetailsComponent_p_card_11_div_59_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(60, "div", 28)(61, "span", 22);
    \u0275\u0275text(62, "\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 23);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "h4", 29);
    \u0275\u0275element(66, "i", 19);
    \u0275\u0275text(67, " \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 20)(69, "div", 21)(70, "span", 22);
    \u0275\u0275text(71, "\u0627\u0644\u0637\u0648\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 23);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 21)(75, "span", 22);
    \u0275\u0275text(76, "\u0627\u0644\u0648\u0632\u0646:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 23);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 21)(80, "span", 22);
    \u0275\u0275text(81, "BMI:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 23);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 21)(85, "span", 22);
    \u0275\u0275text(86, "\u0636\u063A\u0637 \u0627\u0644\u062F\u0645:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 23);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 21)(90, "span", 22);
    \u0275\u0275text(91, "\u0627\u0644\u0646\u0628\u0636:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 23);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("value", (ctx_r0.applicant.queueNumber == null ? null : ctx_r0.applicant.queueNumber.toString()) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.fullName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.motherName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 18, ctx_r0.applicant.dateOfBirth, "yyyy/MM/dd"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.applicant.bloodType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.recruitmentCenter || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getMaritalStatusDescription(ctx_r0.applicant.maritalStatusID) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.job || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.associateNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.applicant.tattoo ? "\u0646\u0639\u0645" : "\u0644\u0627")("severity", ctx_r0.applicant.tattoo ? "warn" : "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.applicant.tattooDescription);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.distinctiveMarks || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.applicant.height || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.weight || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.applicant.bmi == null ? null : ctx_r0.applicant.bmi.toFixed(1)) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.applicant.bloodPressure || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.applicant.pulse == null ? null : ctx_r0.applicant.pulse.toString()) || "-");
  }
}
function ApplicantDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
    \u0275\u0275elementEnd()();
  }
}
var ApplicantDetailsComponent = class _ApplicantDetailsComponent {
  route;
  router;
  applicantService;
  messageService;
  maritalStatusService;
  barcodePrintService;
  applicant = null;
  loading = false;
  fileNumber = "";
  maritalStatuses = [];
  constructor(route, router, applicantService, messageService, maritalStatusService, barcodePrintService) {
    this.route = route;
    this.router = router;
    this.applicantService = applicantService;
    this.messageService = messageService;
    this.maritalStatusService = maritalStatusService;
    this.barcodePrintService = barcodePrintService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const fileNumber = params.get("fileNumber");
      if (fileNumber) {
        this.fileNumber = fileNumber;
        this.loadApplicant(fileNumber);
      }
    });
    this.loadMaritalStatuses();
  }
  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => this.maritalStatuses = data,
      error: (err) => {
      }
    });
  }
  loadApplicant(fileNumber) {
    this.loading = true;
    this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
      next: (data) => {
        this.applicant = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: "\u062E\u0637\u0623",
          detail: "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628"
        });
      }
    });
  }
  editApplicant() {
    if (!this.applicant?.applicantID) {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u0646\u0628\u064A\u0647",
        detail: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 - \u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"
      });
      return;
    }
    this.router.navigate(["reception", "applicants", this.applicant.applicantID]);
  }
  getMaritalStatusDescription(maritalStatusID) {
    const status = this.maritalStatuses.find((s) => s.maritalStatusID === maritalStatusID);
    return status?.description || "";
  }
  goBack() {
    this.router.navigate(["reception/applicants"]);
  }
  printReceipt() {
    if (!this.applicant) {
      this.messageService.add({
        severity: "warn",
        summary: "\u062A\u062D\u0630\u064A\u0631",
        detail: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646\u062A\u0633\u0628 \u0644\u0644\u0637\u0628\u0627\u0639\u0629"
      });
      return;
    }
    if (this.applicant.applicantID) {
      this.applicantService.getApplicantById$(this.applicant.applicantID).subscribe({
        next: (fullApplicantData) => {
          this.barcodePrintService.printBarcodeReceipt(fullApplicantData).catch((error) => {
            this.messageService.add({
              severity: "error",
              summary: "\u062E\u0637\u0623",
              detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
            });
          });
        },
        error: (err) => {
          const applicantForPrint = {
            applicantID: this.applicant.applicantID,
            fileNumber: this.applicant.fileNumber,
            fullName: this.applicant.fullName,
            motherName: this.applicant.motherName,
            dateOfBirth: this.applicant.dateOfBirth,
            recruitmentCenter: this.applicant.recruitmentCenter,
            bloodType: this.applicant.bloodType,
            queueNumber: this.applicant.queueNumber,
            maritalStatusID: this.applicant.maritalStatusID,
            job: this.applicant.job,
            height: this.applicant.height,
            weight: this.applicant.weight,
            bmi: this.applicant.bmi,
            bloodPressure: this.applicant.bloodPressure,
            pulse: this.applicant.pulse,
            tattoo: this.applicant.tattoo,
            distinctiveMarks: this.applicant.distinctiveMarks,
            associateNumber: this.applicant.associateNumber || "",
            maritalStatus: { maritalStatusID: this.applicant.maritalStatusID, description: "" }
          };
          this.barcodePrintService.printBarcodeReceipt(applicantForPrint).catch((error) => {
            this.messageService.add({
              severity: "error",
              summary: "\u062E\u0637\u0623",
              detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
            });
          });
        }
      });
    } else {
      const applicantForPrint = {
        applicantID: this.applicant.applicantID,
        fileNumber: this.applicant.fileNumber,
        fullName: this.applicant.fullName,
        motherName: this.applicant.motherName,
        dateOfBirth: this.applicant.dateOfBirth,
        recruitmentCenter: this.applicant.recruitmentCenter,
        bloodType: this.applicant.bloodType,
        queueNumber: this.applicant.queueNumber,
        maritalStatusID: this.applicant.maritalStatusID,
        job: this.applicant.job,
        height: this.applicant.height,
        weight: this.applicant.weight,
        bmi: this.applicant.bmi,
        bloodPressure: this.applicant.bloodPressure,
        pulse: this.applicant.pulse,
        tattoo: this.applicant.tattoo,
        distinctiveMarks: this.applicant.distinctiveMarks,
        associateNumber: this.applicant.associateNumber || "",
        maritalStatus: { maritalStatusID: this.applicant.maritalStatusID, description: "" }
      };
      this.barcodePrintService.printBarcodeReceipt(applicantForPrint).catch((error) => {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u062E\u0637\u0623",
          detail: "\u0641\u0634\u0644 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644"
        });
      });
    }
  }
  static \u0275fac = function ApplicantDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicantDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApplicantService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(MaritalStatusService), \u0275\u0275directiveInject(BarcodePrintService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicantDetailsComponent, selectors: [["app-applicant-details"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 14, vars: 5, consts: [[1, "applicant-details-container"], [1, "container-fluid", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "page-title"], [1, "pi", "pi-user", "ms-2"], [1, "action-buttons"], ["label", "\u0631\u062C\u0648\u0639", "icon", "pi pi-arrow-right", "severity", "secondary", "styleClass", "me-2", 3, "onClick"], ["label", "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644", "icon", "pi pi-print", "severity", "info", "styleClass", "me-2", 3, "onClick", "disabled"], ["label", "\u062A\u0639\u062F\u064A\u0644", "icon", "pi pi-pencil", "severity", "success", 3, "onClick", "disabled"], ["class", "text-center py-5", 4, "ngIf"], ["styleClass", "details-card", 4, "ngIf"], [1, "text-center", "py-5"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "mt-3"], ["styleClass", "details-card"], ["pTemplate", "header"], [1, "card-body"], [1, "info-section"], [1, "section-title"], [1, "pi", "pi-id-card", "ms-2"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["severity", "info", 3, "value"], ["severity", "danger", 3, "value"], [3, "value", "severity"], ["class", "info-item full-width", 4, "ngIf"], [1, "info-item", "full-width"], [1, "section-title", "mt-4"], [1, "card-header"], [1, "header-content"], [1, "applicant-icon"], [1, "pi", "pi-user"], [1, "header-text"], [1, "applicant-name"], [1, "applicant-file-number"], [1, "pi", "pi-exclamation-triangle", "text-muted", 2, "font-size", "3rem"], [1, "mt-3", "text-muted"]], template: function ApplicantDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "p-button", 6);
      \u0275\u0275listener("onClick", function ApplicantDetailsComponent_Template_p_button_onClick_7_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-button", 7);
      \u0275\u0275listener("onClick", function ApplicantDetailsComponent_Template_p_button_onClick_8_listener() {
        return ctx.printReceipt();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-button", 8);
      \u0275\u0275listener("onClick", function ApplicantDetailsComponent_Template_p_button_onClick_9_listener() {
        return ctx.editApplicant();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ApplicantDetailsComponent_div_10_Template, 4, 0, "div", 9)(11, ApplicantDetailsComponent_p_card_11_Template, 94, 21, "p-card", 10)(12, ApplicantDetailsComponent_div_12_Template, 4, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.applicant || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.applicant || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading && !ctx.applicant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.applicant && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.applicant && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, CardModule, Card, PrimeTemplate, ButtonModule, Button, ToastModule, Toast, TagModule, Tag, GregorianDatePipe], styles: ['\n\n.applicant-details-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: "Cairo", sans-serif;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B9A779;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]     .p-button {\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]     .p-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]     .p-button.p-button-secondary {\n  background: var(--neutral-medium);\n  border-color: var(--neutral-medium);\n  color: white;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]     .p-button.p-button-secondary:hover {\n  background: var(--neutral-dark);\n  border-color: var(--neutral-dark);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]     .p-button.p-button-success {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-color: var(--primary-dark);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]     .p-button.p-button-success:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #218838 0%,\n      #1aa179 100%);\n  border-color: #218838;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  padding: 0;\n  border-radius: 0;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header {\n  padding: 2rem;\n  color: white;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header .header-content .applicant-icon {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header .header-content .applicant-icon i {\n  font-size: 2.5rem;\n  color: #B9A779;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header .header-content .header-text {\n  flex: 1;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header .header-content .header-text .applicant-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: white !important;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-header .card-header .header-content .header-text .applicant-file-number {\n  font-size: 1rem;\n  opacity: 0.9;\n  margin: 0;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]     .p-card-body {\n  padding: 2rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #054239;\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #e9ecef;\n  display: flex;\n  align-items: center;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B9A779;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(5, 66, 57, 0.1);\n  transform: translateY(-2px);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #054239;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 16px;\n  background: #B9A779;\n  border-radius: 2px;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #495057;\n  font-weight: 500;\n}\n.applicant-details-container[_ngcontent-%COMP%]     .p-dialog .p-dialog-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.applicant-details-container[_ngcontent-%COMP%]     .p-dialog .p-dialog-header .p-dialog-title {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]     .p-dialog .p-dialog-header .p-dialog-header-icon {\n  color: white;\n}\n.applicant-details-container[_ngcontent-%COMP%]     .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.applicant-details-container[_ngcontent-%COMP%]     .p-dialog .p-dialog-content {\n  padding: 2rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #054239;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B9A779;\n  margin-left: 0.25rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.p-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .p-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.85rem;\n  margin-top: 0.25rem;\n}\n.applicant-details-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e9ecef;\n}\n@media (max-width: 768px) {\n  .applicant-details-container[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .applicant-details-container[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=applicant-details.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicantDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-applicant-details", standalone: true, imports: [
      CommonModule,
      GregorianDatePipe,
      CardModule,
      ButtonModule,
      ToastModule,
      TagModule
    ], providers: [MessageService], template: `<div class="applicant-details-container">\r
  <div class="container-fluid py-4">\r
    <!-- Header -->\r
    <div class="d-flex justify-content-between align-items-center mb-4">\r
      <h2 class="page-title">\r
        <i class="pi pi-user ms-2"></i>\r
        \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\r
      </h2>\r
      <div class="action-buttons">\r
        <p-button label="\u0631\u062C\u0648\u0639" icon="pi pi-arrow-right" severity="secondary" (onClick)="goBack()" styleClass="me-2">\r
        </p-button>\r
        <p-button label="\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u064A\u0635\u0627\u0644" icon="pi pi-print" severity="info" (onClick)="printReceipt()"\r
          [disabled]="!applicant || loading" styleClass="me-2">\r
        </p-button>\r
        <p-button label="\u062A\u0639\u062F\u064A\u0644" icon="pi pi-pencil" severity="success" (onClick)="editApplicant()"\r
          [disabled]="!applicant || loading">\r
        </p-button>\r
      </div>\r
    </div>\r
\r
    <!-- Loading -->\r
    <div *ngIf="loading && !applicant" class="text-center py-5">\r
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>\r
      <p class="mt-3">\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...</p>\r
    </div>\r
\r
    <!-- Applicant Details Card -->\r
    <p-card *ngIf="applicant && !loading" styleClass="details-card">\r
      <ng-template pTemplate="header">\r
        <div class="card-header">\r
          <div class="header-content">\r
            <div class="applicant-icon">\r
              <i class="pi pi-user"></i>\r
            </div>\r
            <div class="header-text">\r
              <h3 class="applicant-name">{{ applicant.fullName }}</h3>\r
              <p class="applicant-file-number">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641: {{ applicant.fileNumber }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </ng-template>\r
\r
      <div class="card-body">\r
        <!-- Personal Information Section -->\r
        <div class="info-section">\r
          <h4 class="section-title">\r
            <i class="pi pi-id-card ms-2"></i>\r
            \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629\r
          </h4>\r
          <div class="info-grid ">\r
            <div class="info-item">\r
              <span class="info-label">\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631:</span>\r
              <span class="info-value">\r
                <p-tag [value]="applicant.queueNumber?.toString() || '-'" severity="info"></p-tag>\r
              </span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644:</span>\r
              <span class="info-value">{{ applicant.fullName || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0633\u0645 \u0627\u0644\u0623\u0645:</span>\r
              <span class="info-value">{{ applicant.motherName || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0648\u0627\u0644\u064A\u062F:</span>\r
              <span class="info-value">\r
                {{ applicant.dateOfBirth | gregorianDate:'yyyy/MM/dd' }}\r
              </span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0632\u0645\u0631\u0629 \u0627\u0644\u062F\u0645:</span>\r
              <span class="info-value">\r
                <p-tag [value]="applicant.bloodType || '-'" severity="danger"></p-tag>\r
              </span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062C\u0646\u064A\u062F:</span>\r
              <span class="info-value">{{ applicant.recruitmentCenter || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629:</span>\r
              <span class="info-value">{{ getMaritalStatusDescription(applicant.maritalStatusID) || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0644\u0639\u0645\u0644:</span>\r
              <span class="info-value">{{ applicant.job || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628:</span>\r
              <span class="info-value">{{ applicant.associateNumber || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0648\u062C\u0648\u062F \u0648\u0634\u0645:</span>\r
              <span class="info-value">\r
                <p-tag [value]="applicant.tattoo ? '\u0646\u0639\u0645' : '\u0644\u0627'" [severity]="applicant.tattoo ? 'warn' : 'success'">\r
                </p-tag>\r
              </span>\r
            </div>\r
            <div class="info-item full-width" *ngIf="applicant.tattooDescription">\r
              <span class="info-label">\u0648\u0635\u0641 \u0627\u0644\u0648\u0634\u0645:</span>\r
              <span class="info-value">{{ applicant.tattooDescription }}</span>\r
            </div>\r
            <div class="info-item full-width">\r
              <span class="info-label">\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629:</span>\r
              <span class="info-value">{{ applicant.distinctiveMarks || '-' }}</span>\r
            </div>\r
          </div>\r
          <h4 class="section-title mt-4">\r
            <i class="pi pi-id-card ms-2"></i>\r
            \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629\r
          </h4>\r
          <div class="info-grid">\r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0644\u0637\u0648\u0644:</span>\r
              <span class="info-value">{{ applicant.height || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0644\u0648\u0632\u0646:</span>\r
              <span class="info-value">{{ applicant.weight || '-' }}</span>\r
            </div>\r
         \r
            <div class="info-item">\r
              <span class="info-label">BMI:</span>\r
              <span class="info-value">{{ applicant.bmi?.toFixed(1) || '-' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\u0636\u063A\u0637 \u0627\u0644\u062F\u0645:</span>\r
              <span class="info-value">{{ applicant.bloodPressure || '-' }}</span>\r
            </div>\r
        \r
            <div class="info-item">\r
              <span class="info-label">\u0627\u0644\u0646\u0628\u0636:</span>\r
              <span class="info-value">{{ applicant.pulse?.toString() || '-' }}</span>\r
            </div>\r
\r
\r
          </div>\r
        </div>\r
      </div>\r
    </p-card>\r
\r
    <!-- No Data -->\r
    <div *ngIf="!applicant && !loading" class="text-center py-5">\r
      <i class="pi pi-exclamation-triangle text-muted" style="font-size: 3rem;"></i>\r
      <p class="mt-3 text-muted">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628</p>\r
    </div>\r
  </div>\r
\r
  <p-toast></p-toast>\r
</div>`, styles: ['/* src/app/features/reception/components/applicant-details/applicant-details.scss */\n.applicant-details-container {\n  min-height: calc(100vh - 60px);\n  background-color: var(--neutral-light);\n  font-family: "Cairo", sans-serif;\n}\n.applicant-details-container .page-title {\n  color: var(--primary-dark);\n  font-weight: 700;\n  font-size: var(--font-size-2xl);\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.applicant-details-container .page-title i {\n  color: #B9A779;\n}\n.applicant-details-container .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.applicant-details-container .action-buttons ::ng-deep .p-button {\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.applicant-details-container .action-buttons ::ng-deep .p-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.applicant-details-container .action-buttons ::ng-deep .p-button.p-button-secondary {\n  background: var(--neutral-medium);\n  border-color: var(--neutral-medium);\n  color: white;\n}\n.applicant-details-container .action-buttons ::ng-deep .p-button.p-button-secondary:hover {\n  background: var(--neutral-dark);\n  border-color: var(--neutral-dark);\n}\n.applicant-details-container .action-buttons ::ng-deep .p-button.p-button-success {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-color: var(--primary-dark);\n}\n.applicant-details-container .action-buttons ::ng-deep .p-button.p-button-success:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #218838 0%,\n      #1aa179 100%);\n  border-color: #218838;\n}\n.applicant-details-container .details-card {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  padding: 0;\n  border-radius: 0;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header {\n  padding: 2rem;\n  color: white;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header .header-content .applicant-icon {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header .header-content .applicant-icon i {\n  font-size: 2.5rem;\n  color: #B9A779;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header .header-content .header-text {\n  flex: 1;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header .header-content .header-text .applicant-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: white !important;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.applicant-details-container .details-card ::ng-deep .p-card-header .card-header .header-content .header-text .applicant-file-number {\n  font-size: 1rem;\n  opacity: 0.9;\n  margin: 0;\n}\n.applicant-details-container .details-card ::ng-deep .p-card-body {\n  padding: 2rem;\n}\n.applicant-details-container .info-section .section-title {\n  color: #054239;\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #e9ecef;\n  display: flex;\n  align-items: center;\n}\n.applicant-details-container .info-section .section-title i {\n  color: #B9A779;\n}\n.applicant-details-container .info-section .info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.applicant-details-container .info-section .info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.applicant-details-container .info-section .info-grid .info-item:hover {\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(5, 66, 57, 0.1);\n  transform: translateY(-2px);\n}\n.applicant-details-container .info-section .info-grid .info-item.full-width {\n  grid-column: 1/-1;\n}\n.applicant-details-container .info-section .info-grid .info-item .info-label {\n  font-weight: 600;\n  color: #054239;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.applicant-details-container .info-section .info-grid .info-item .info-label::before {\n  content: "";\n  width: 4px;\n  height: 16px;\n  background: #B9A779;\n  border-radius: 2px;\n}\n.applicant-details-container .info-section .info-grid .info-item .info-value {\n  font-size: 1rem;\n  color: #495057;\n  font-weight: 500;\n}\n.applicant-details-container ::ng-deep .p-dialog .p-dialog-header {\n  background:\n    linear-gradient(\n      135deg,\n      #054239 0%,\n      #428177 100%);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.applicant-details-container ::ng-deep .p-dialog .p-dialog-header .p-dialog-title {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.applicant-details-container ::ng-deep .p-dialog .p-dialog-header .p-dialog-header-icon {\n  color: white;\n}\n.applicant-details-container ::ng-deep .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.applicant-details-container ::ng-deep .p-dialog .p-dialog-content {\n  padding: 2rem;\n}\n.applicant-details-container .dialog-form .form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.applicant-details-container .dialog-form .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.applicant-details-container .dialog-form .form-group .form-label {\n  font-weight: 600;\n  color: #054239;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n}\n.applicant-details-container .dialog-form .form-group .form-label i {\n  color: #B9A779;\n  margin-left: 0.25rem;\n}\n.applicant-details-container .dialog-form .form-group .form-label .text-danger {\n  color: #dc3545;\n}\n.applicant-details-container .dialog-form .form-group .form-control {\n  padding: 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.applicant-details-container .dialog-form .form-group .form-control:focus {\n  outline: none;\n  border-color: #054239;\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.1);\n}\n.applicant-details-container .dialog-form .form-group .form-control.p-invalid {\n  border-color: #dc3545;\n}\n.applicant-details-container .dialog-form .form-group .p-error {\n  color: #dc3545;\n  font-size: 0.85rem;\n  margin-top: 0.25rem;\n}\n.applicant-details-container .dialog-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e9ecef;\n}\n@media (max-width: 768px) {\n  .applicant-details-container .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .applicant-details-container .dialog-form .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=applicant-details.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ApplicantService }, { type: MessageService }, { type: MaritalStatusService }, { type: BarcodePrintService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicantDetailsComponent, { className: "ApplicantDetailsComponent", filePath: "src/app/features/reception/components/applicant-details/applicant-details.ts", lineNumber: 36 });
})();
export {
  ApplicantDetailsComponent
};
//# sourceMappingURL=chunk-KQNTBHTU.js.map
