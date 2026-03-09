import {
  NgbModal
} from "./chunk-SHVRLNBL.js";
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
} from "./chunk-W3EN3B3V.js";
import "./chunk-B37FJDU3.js";
import {
  TooltipModule
} from "./chunk-ABC4ZTWT.js";
import "./chunk-OY2VKGI7.js";
import "./chunk-SXOA2P4M.js";
import {
  ButtonModule,
  RippleModule
} from "./chunk-R2DZOQST.js";
import {
  PrimeTemplate
} from "./chunk-N6FOUH3N.js";
import {
  FormBuilder,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-JZZQ7XWY.js";
import "./chunk-2VRBHK6C.js";
import {
  GregorianDatePipe
} from "./chunk-M5RFJNTA.js";
import {
  Router,
  RouterModule
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  HttpParams,
  NgIf,
  environment
} from "./chunk-V2S2U4KH.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  Output,
  ViewChild,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTJKKLZA.js";

// src/app/shared/services/file-upload.ts
var FileUploadService = class _FileUploadService {
  http;
  uploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;
  constructor(http) {
    this.http = http;
  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(this.uploadUrl, formData);
  }
  static \u0275fac = function FileUploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileUploadService, factory: _FileUploadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/archive/services/archive.ts
var ArchiveService = class _ArchiveService {
  http;
  apiUrl = `${environment.apiUrl}/api/Archives`;
  constructor(http) {
    this.http = http;
  }
  updateArchive(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  getArchives$(page = 1, pageSize = 10, filter = "") {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString()).set("sortDesc", "true").set("sortBy", "archiveID");
    if (filter) {
      params = params.set("filter", filter);
    }
    return this.http.get(this.apiUrl, { params }).pipe(map((res) => res.data));
  }
  static \u0275fac = function ArchiveService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArchiveService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArchiveService, factory: _ArchiveService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchiveService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/archive/components/edit-archive/edit-archive.ts
function EditArchive_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 11)(2, "div", 12)(3, "label", 13);
    \u0275\u0275text(4, "\u0627\u062E\u062A\u0631 \u0645\u0644\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 14);
    \u0275\u0275listener("change", function EditArchive_ng_container_6_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.fileForm);
  }
}
function EditArchive_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062D\u0627\u0644\u064A: ");
    \u0275\u0275elementStart(2, "a", 16);
    \u0275\u0275listener("click", function EditArchive_div_7_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.getFileUrl(ctx_r1.archive.digitalCopy), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFileName(ctx_r1.archive.digitalCopy));
  }
}
function EditArchive_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u062D\u062F\u062F: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
  }
}
function EditArchive_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h6", 18);
    \u0275\u0275text(2, "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0635\u0648\u0631\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16);
    \u0275\u0275listener("click", function EditArchive_div_9_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(4, "img", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.getFileUrl(ctx_r1.archive.digitalCopy), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function EditArchive_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function EditArchive_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(1, "\u062D\u0641\u0638");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.selectedFile && !ctx_r1.archive.digitalCopy);
  }
}
var EditArchive = class _EditArchive {
  fb;
  fileUploadService;
  archiveService;
  modalService;
  toastr;
  archive;
  archiveUpdated = new EventEmitter();
  fileForm;
  selectedFile = null;
  previewUrl = null;
  constructor(fb, fileUploadService, archiveService, modalService, toastr) {
    this.fb = fb;
    this.fileUploadService = fileUploadService;
    this.archiveService = archiveService;
    this.modalService = modalService;
    this.toastr = toastr;
    this.fileForm = this.fb.group({});
  }
  // onFileSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //   }
  // }
  ngOnInit() {
    if (this.archive?.digitalCopy && this.isImage(this.archive.digitalCopy)) {
      this.previewUrl = this.getFileUrl(this.archive.digitalCopy);
    }
  }
  isImage(filePath) {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const extension = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
    return imageExtensions.includes(extension);
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      if (this.selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewUrl = e.target?.result;
        };
        reader.readAsDataURL(this.selectedFile);
      } else {
        this.previewUrl = null;
      }
    }
  }
  save() {
    if (!this.selectedFile)
      return;
    this.fileUploadService.uploadFile(this.selectedFile).subscribe({
      next: (res) => {
        if (res.succeeded) {
          const updateData = { digitalCopy: res.path };
          this.archiveService.updateArchive(this.archive.archiveID, updateData).subscribe({
            next: (updateRes) => {
              this.toastr.success("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0623\u0631\u0634\u064A\u0641 \u0628\u0646\u062C\u0627\u062D");
              this.archiveUpdated.emit(updateRes);
              this.selectedFile = null;
              this.modalService.dismissAll();
            },
            error: (err) => {
              this.toastr.error("\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0623\u0631\u0634\u064A\u0641");
            }
          });
        } else {
          this.toastr.error("\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0623\u0631\u0634\u064A\u0641");
        }
      },
      error: (err) => {
        this.toastr.error("\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0623\u0631\u0634\u064A\u0641");
      }
    });
  }
  cancel() {
    this.selectedFile = null;
    this.previewUrl = null;
    this.modalService.dismissAll();
  }
  getFileUrl(path) {
    return `${environment.apiUrl}/${path}`;
  }
  getFileName(path) {
    return path.split("/").pop() || "\u0645\u0644\u0641";
  }
  static \u0275fac = function EditArchive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditArchive)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FileUploadService), \u0275\u0275directiveInject(ArchiveService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditArchive, selectors: [["app-edit-archive"]], inputs: { archive: "archive" }, outputs: { archiveUpdated: "archiveUpdated" }, decls: 14, vars: 6, consts: [[1, "modal-content", "modal-sm"], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-title", "text-center", "flex-grow-1"], [1, "modal-body"], [4, "ngIf"], ["class", "alert alert-secondary py-2 mt-2", 4, "ngIf"], ["class", "alert alert-info py-2 mt-2", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [3, "formGroup"], [1, "mb-3"], ["for", "digitalCopy", 1, "form-label"], ["type", "file", "id", "digitalCopy", "accept", ".pdf,.jpg,.png,.jpeg", 1, "form-control", 3, "change"], [1, "alert", "alert-secondary", "py-2", "mt-2"], ["target", "_blank", 3, "click", "href"], [1, "alert", "alert-info", "py-2", "mt-2"], [1, "mt-3"], ["alt", "Image Preview", 1, "img-thumbnail", "preview-image", 3, "src"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function EditArchive_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function EditArchive_Template_button_click_2_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h4", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275template(6, EditArchive_ng_container_6_Template, 6, 1, "ng-container", 5)(7, EditArchive_div_7_Template, 4, 2, "div", 6)(8, EditArchive_div_8_Template, 4, 1, "div", 7)(9, EditArchive_div_9_Template, 5, 2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function EditArchive_Template_button_click_11_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(12, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, EditArchive_button_13_Template, 2, 1, "button", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" \u062A\u062D\u0645\u064A\u0644 \u0646\u0633\u062E\u0629 \u0631\u0642\u0645\u064A\u0629 \u0644\u0644\u0645\u0644\u0641: ", ctx.archive.fileNumber, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !(ctx.archive == null ? null : ctx.archive.digitalCopy));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.archive == null ? null : ctx.archive.digitalCopy);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewUrl);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !(ctx.archive == null ? null : ctx.archive.digitalCopy));
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective], styles: [`@charset "UTF-8";



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
.modal-content[_ngcontent-%COMP%] {
  background: #EDEBE0 !important;
}
.preview-image[_ngcontent-%COMP%] {
  max-width: 350px;
  max-height: 250px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
}
/*# sourceMappingURL=edit-archive.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditArchive, [{
    type: Component,
    args: [{ selector: "app-edit-archive", imports: [CommonModule, ReactiveFormsModule], template: '<div class="modal-content modal-sm">\r\n  <div class="modal-header d-flex justify-content-between align-items-center">\r\n  <button type="button" class="btn-close" aria-label="Close" (click)="cancel()"></button>\r\n\r\n  <h4 class="modal-title text-center flex-grow-1">\r\n    \u062A\u062D\u0645\u064A\u0644 \u0646\u0633\u062E\u0629 \u0631\u0642\u0645\u064A\u0629 \u0644\u0644\u0645\u0644\u0641: {{ archive.fileNumber }}\r\n  </h4>\r\n</div>\r\n\r\n  <div class="modal-body">\r\n  <ng-container *ngIf="!archive?.digitalCopy">\r\n    <form [formGroup]="fileForm">\r\n      <div class="mb-3">\r\n        <label for="digitalCopy" class="form-label">\u0627\u062E\u062A\u0631 \u0645\u0644\u0641</label>\r\n        <input type="file" class="form-control" id="digitalCopy" (change)="onFileSelected($event)" accept=".pdf,.jpg,.png,.jpeg" />\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <div *ngIf="archive?.digitalCopy" class="alert alert-secondary py-2 mt-2">\r\n    \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062D\u0627\u0644\u064A:\r\n    <a [href]="getFileUrl(archive.digitalCopy)" target="_blank" (click)="cancel()">{{ getFileName(archive.digitalCopy) }}</a>\r\n  </div>\r\n\r\n  <div *ngIf="selectedFile" class="alert alert-info py-2 mt-2">\r\n    \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u062D\u062F\u062F: <strong>{{ selectedFile.name }}</strong>\r\n  </div>\r\n\r\n<div *ngIf="previewUrl">\r\n  <h6 class="mt-3">\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0635\u0648\u0631\u0629:</h6>\r\n  <a [href]="getFileUrl(archive.digitalCopy)" target="_blank" (click)="cancel()"><img [src]="previewUrl" class="img-thumbnail preview-image" alt="Image Preview" /></a>\r\n</div>\r\n\r\n</div>\r\n\r\n  <div class="modal-footer">\r\n    <button class="btn btn-secondary" (click)="cancel()">\u0625\u0644\u063A\u0627\u0621</button>\r\n    <button *ngIf="!archive?.digitalCopy" class="btn btn-primary" (click)="save()" [disabled]="!selectedFile && !archive.digitalCopy">\u062D\u0641\u0638</button>\r\n  </div>\r\n</div>', styles: [`@charset "UTF-8";

/* src/app/features/archive/components/edit-archive/edit-archive.scss */
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
.modal-content {
  background: #EDEBE0 !important;
}
.preview-image {
  max-width: 350px;
  max-height: 250px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
}
/*# sourceMappingURL=edit-archive.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: FileUploadService }, { type: ArchiveService }, { type: NgbModal }, { type: ToastrService }], { archive: [{
    type: Input
  }], archiveUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditArchive, { className: "EditArchive", filePath: "src/app/features/archive/components/edit-archive/edit-archive.ts", lineNumber: 16 });
})();

// src/app/shared/services/data-sharing.ts
var DataSharingService = class _DataSharingService {
  archiveData;
  constructor() {
  }
  setArchiveData(archive) {
    this.archiveData = archive;
  }
  getArchiveData() {
    return this.archiveData;
  }
  static \u0275fac = function DataSharingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataSharingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataSharingService, factory: _DataSharingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataSharingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/archive/components/archive-list/archive-list.ts
var _c0 = ["table"];
var _c1 = ["searchInput"];
function ArchiveList_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u0631\u0642\u0645 \u0627\u0644\u0623\u0631\u0634\u064A\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u0627\u0644\u0627\u0633\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u0627\u0644\u0648\u0638\u064A\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u0627\u0644\u0637\u0648\u0644 / \u0627\u0644\u0648\u0632\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0636\u063A\u0637 \u0627\u0644\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0623\u0631\u0634\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function ArchiveList_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "gregorianDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 21)(21, "button", 22);
    \u0275\u0275listener("click", function ArchiveList_ng_template_31_Template_button_click_21_listener() {
      const archive_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openArchiveDetails(archive_r3));
    });
    \u0275\u0275element(22, "i", 23);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const archive_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((archive_r3.applicant == null ? null : archive_r3.applicant.queueNumber) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(archive_r3.fileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(archive_r3.applicant == null ? null : archive_r3.applicant.fileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(archive_r3.applicant == null ? null : archive_r3.applicant.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((archive_r3.applicant == null ? null : archive_r3.applicant.job) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (archive_r3.applicant == null ? null : archive_r3.applicant.height) || "-", " \u0633\u0645 / ", (archive_r3.applicant == null ? null : archive_r3.applicant.weight) || "-", " \u0643\u062C\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((archive_r3.applicant == null ? null : archive_r3.applicant.bloodPressure) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 9, archive_r3.archiveDate, "yyyy/MM/dd"));
  }
}
var ArchiveList = class _ArchiveList {
  archiveService;
  cdr;
  router;
  modalService;
  dataSharingService;
  archives = [];
  loading = true;
  globalFilter = "";
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  tableHeight = "300px";
  table;
  searchInput;
  constructor(archiveService, cdr, router, modalService, dataSharingService) {
    this.archiveService = archiveService;
    this.cdr = cdr;
    this.router = router;
    this.modalService = modalService;
    this.dataSharingService = dataSharingService;
  }
  ngOnInit() {
    this.loadArchives();
  }
  loadArchives() {
    this.archiveService.getArchives$(this.page, this.rowsPerPage, this.globalFilter).subscribe({
      next: (res) => {
        const sortedItems = [...res.items].sort((a, b) => {
          return b.archiveID - a.archiveID;
        });
        this.archives = sortedItems;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching archives", err);
        this.loading = false;
      }
    });
  }
  openArchiveDetails(archive) {
    this.router.navigate(["/applicants", archive.applicantFileNumber], { state: { archive } });
  }
  onPageChange(newPage) {
    this.page = newPage;
    this.loadArchives();
  }
  onPageSizeChange(newSize) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadArchives();
  }
  onFilterChange(event) {
    const value = event.target.value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadArchives();
  }
  openEditArchive(archive) {
    const modalRef = this.modalService.open(EditArchive, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    modalRef.componentInstance.archive = archive;
    modalRef.componentInstance.archiveUpdated.subscribe(() => {
      this.loadArchives();
    });
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
    this.tableHeight = screenHeight - reservedSpace + "px";
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
    this.loadArchives();
  }
  static \u0275fac = function ArchiveList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArchiveList)(\u0275\u0275directiveInject(ArchiveService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(DataSharingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArchiveList, selectors: [["app-archive-list"]], viewQuery: function ArchiveList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, hostBindings: function ArchiveList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ArchiveList_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 34, vars: 12, consts: [["searchInput", ""], ["table", ""], [1, "archive-page", "container-fluid"], [1, "archive-hero"], [1, "hero-content"], [1, "hero-stats"], [1, "stat-card"], [1, "table-toolbar", "toolbar-card"], [1, "filter-reset-wrapper"], [3, "reset"], [1, "search-wrapper"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645", 1, "search-input", 3, "input"], [1, "fas", "fa-search", "search-icon"], [1, "table-card"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords} \u0645\u0644\u0641", 1, "archive-table", 3, "value", "rows", "sortMode", "scrollable", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "archive-paginator"], [3, "pageChange", "pageSizeChange", "totalRecords", "pageSize", "currentPage"], [1, "queue-tag"], [1, "text-strong"], [1, "text-center"], ["title", "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628", 1, "btn", "btn-sm", "btn-modern-view", 3, "click"], [1, "fas", "fa-eye"]], template: function ArchiveList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "div", 4)(3, "div")(4, "h2");
      \u0275\u0275text(5, "\u062F\u064A\u0648\u0627\u0646 \u0627\u0644\u0623\u0631\u0634\u064A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "\u0645\u062A\u0627\u0628\u0639\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0624\u0631\u0634\u0641\u0629.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span");
      \u0275\u0275text(11, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "strong");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 6)(16, "span");
      \u0275\u0275text(17, "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "strong");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "app-reset-filters-button", 9);
      \u0275\u0275listener("reset", function ArchiveList_Template_app_reset_filters_button_reset_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 10)(24, "input", 11, 0);
      \u0275\u0275listener("input", function ArchiveList_Template_input_input_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 13)(28, "p-table", 14, 1);
      \u0275\u0275template(30, ArchiveList_ng_template_30_Template, 19, 0, "ng-template", 15)(31, ArchiveList_ng_template_31_Template, 25, 12, "ng-template", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 17)(33, "app-paginator", 18);
      \u0275\u0275listener("pageChange", function ArchiveList_Template_app_paginator_pageChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("pageSizeChange", function ArchiveList_Template_app_paginator_pageSizeChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange($event));
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, ctx.totalRecords));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.archives.length || 0);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.archives)("rows", 10)("sortMode", "multiple")("scrollable", true)("showCurrentPageReport", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("totalRecords", ctx.totalRecords)("pageSize", ctx.rowsPerPage)("currentPage", ctx.page);
    }
  }, dependencies: [PaginatorComponent, TableModule, Table, PrimeTemplate, ButtonModule, TooltipModule, RippleModule, CommonModule, RouterModule, ResetFiltersButtonComponent, DecimalPipe, GregorianDatePipe], styles: ['\n\n.archive-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xl);\n  padding-bottom: var(--spacing-2xl);\n}\n.archive-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  color: white;\n  margin-bottom: var(--spacing-2xl);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-xl);\n  position: relative;\n  overflow: hidden;\n}\n.archive-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.9) 0%,\n      rgba(66, 129, 119, 0.9) 100%);\n  z-index: 0;\n}\n.archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--accent-gold);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  color: var(--accent-gold);\n}\n.archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  margin: var(--spacing-sm) 0 0 0;\n  opacity: 0.9;\n  font-size: var(--font-size-base);\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 400;\n}\n.archive-hero[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  max-width: 100%;\n  z-index: 1;\n}\n.archive-hero[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--spacing-md);\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--accent-gold);\n  font-size: var(--font-size-base);\n  pointer-events: none;\n  z-index: 2;\n}\n.archive-hero[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-sm) 2.5rem var(--spacing-sm) var(--spacing-lg);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background-color: rgba(255, 255, 255, 0.95);\n  color: var(--neutral-dark);\n}\n.archive-hero[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--neutral-medium);\n}\n.archive-hero[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent-gold);\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.2);\n  outline: none;\n  background-color: white;\n}\n@media (max-width: 768px) {\n  .archive-hero[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n    gap: var(--spacing-lg);\n  }\n  .archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    gap: var(--spacing-lg);\n  }\n  .archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .archive-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .archive-hero[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: var(--spacing-md);\n  }\n}\n.archive-hero[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl) var(--spacing-xl);\n  color: #fff;\n  position: relative;\n  z-index: 0;\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: var(--spacing-xl);\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff !important;\n  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n  font-size: var(--font-size-base);\n  color: #fff !important;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-md) var(--spacing-lg);\n  min-width: 180px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 0.3rem;\n}\n.archive-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #fff;\n}\n.toolbar-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl);\n  background: #fff;\n  box-shadow: 0 8px 26px rgba(5, 66, 57, 0.12);\n  border: 1px solid rgba(5, 66, 57, 0.08);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 0;\n}\n[_nghost-%COMP%]     .archive-table {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  font-size: 0.75rem;\n  background: #fff;\n}\n[_nghost-%COMP%]     .archive-table .p-datatable-thead > tr > th {\n  background: var(--primary-dark) !important;\n  color: #fff !important;\n  font-weight: 600;\n  padding: 0.5rem 0.6rem;\n  text-align: center;\n  font-size: 0.68rem;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n}\n[_nghost-%COMP%]     .archive-table .p-datatable-thead > tr > th:last-child {\n  border-right: none;\n}\n[_nghost-%COMP%]     .archive-table .p-datatable-tbody > tr {\n  transition: transform 0.1s ease, box-shadow 0.1s ease;\n}\n[_nghost-%COMP%]     .archive-table .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.05);\n  transform: scale(1.005);\n  box-shadow: 0 8px 16px rgba(5, 66, 57, 0.09);\n}\n[_nghost-%COMP%]     .archive-table .p-datatable-tbody > tr > td {\n  padding: 0.45rem 0.6rem;\n  font-size: 0.68rem;\n  text-align: center;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.08);\n  border-right: 1px solid rgba(5, 66, 57, 0.08);\n  color: #2f3d4c;\n}\n[_nghost-%COMP%]     .archive-table .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.queue-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.25rem;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  background: rgba(5, 66, 57, 0.12);\n  color: #054239;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.text-strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f2f2f;\n}\n.btn-modern-view[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 1.1rem;\n  border-radius: var(--radius-lg);\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #054239,\n      #1f6b61);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  box-shadow: 0 6px 14px rgba(5, 66, 57, 0.2);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.btn-modern-view[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(5, 66, 57, 0.25);\n  color: #fff;\n}\n.archive-paginator[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  background: #fff;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 320px;\n  max-width: 100%;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 2.4rem 0.55rem 0.8rem;\n  border: 1.5px solid rgba(5, 66, 57, 0.25);\n  border-radius: var(--radius-lg);\n  font-size: 0.85rem;\n  background: #fff;\n  transition: border 0.2s ease, box-shadow 0.2s ease;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.12);\n  outline: none;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.85rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-medium);\n}\n@media (max-width: 768px) {\n  .archive-hero[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n  .table-card[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .table-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=archive-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchiveList, [{
    type: Component,
    args: [{ selector: "app-archive-list", imports: [PaginatorComponent, TableModule, ButtonModule, TooltipModule, RippleModule, CommonModule, RouterModule, GregorianDatePipe, ResetFiltersButtonComponent], template: `<div class="archive-page container-fluid">\r
  <section class="archive-hero">\r
    <div class="hero-content">\r
      <div>\r
        <h2>\u062F\u064A\u0648\u0627\u0646 \u0627\u0644\u0623\u0631\u0634\u064A\u0641</h2>\r
        <p>\u0645\u062A\u0627\u0628\u0639\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0624\u0631\u0634\u0641\u0629.</p>\r
      </div>\r
      <div class="hero-stats">\r
        <div class="stat-card">\r
          <span>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0644\u0641\u0627\u062A</span>\r
          <strong>{{ totalRecords | number }}</strong>\r
        </div>\r
        <div class="stat-card">\r
          <span>\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629</span>\r
          <strong>{{ archives.length || 0 }}</strong>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="table-toolbar toolbar-card">\r
    <div class="filter-reset-wrapper">\r
      <app-reset-filters-button (reset)="resetFilters()"></app-reset-filters-button>\r
      <div class="search-wrapper">\r
        <input #searchInput type="text" class="search-input" placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648 \u0627\u0644\u0627\u0633\u0645" (input)="onFilterChange($event)" />\r
        <i class="fas fa-search search-icon"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="table-card">\r
    <p-table\r
      class="archive-table"\r
      #table\r
      [value]="archives"\r
      [rows]="10"\r
      [sortMode]="'multiple'"\r
      [scrollable]="true"\r
      [showCurrentPageReport]="true"\r
      responsiveLayout="scroll"\r
      currentPageReportTemplate="\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords} \u0645\u0644\u0641">\r
      <ng-template pTemplate="header">\r
        <tr>\r
          <th>\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631</th>\r
          <th>\u0631\u0642\u0645 \u0627\u0644\u0623\u0631\u0634\u064A\u0641</th>\r
          <th>\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0645\u0646\u062A\u0633\u0628</th>\r
          <th>\u0627\u0644\u0627\u0633\u0645</th>\r
          <th>\u0627\u0644\u0648\u0638\u064A\u0641\u0629</th>\r
          <th>\u0627\u0644\u0637\u0648\u0644 / \u0627\u0644\u0648\u0632\u0646</th>\r
          <th>\u0636\u063A\u0637 \u0627\u0644\u062F\u0645</th>\r
          <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0623\u0631\u0634\u0641\u0629</th>\r
          <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template pTemplate="body" let-archive>\r
        <tr>\r
          <td><span class="queue-tag">{{ archive.applicant?.queueNumber || '-' }}</span></td>\r
          <td><span class="text-strong">{{ archive.fileNumber }}</span></td>\r
          <td>{{ archive.applicant?.fileNumber }}</td>\r
          <td>{{ archive.applicant?.fullName }}</td>\r
          <td>{{ archive.applicant?.job || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</td>\r
          <td>{{ archive.applicant?.height || '-' }} \u0633\u0645 / {{ archive.applicant?.weight || '-' }} \u0643\u062C\u0645</td>\r
          <td>{{ archive.applicant?.bloodPressure || '-' }}</td>\r
          <td>{{ archive.archiveDate | gregorianDate:'yyyy/MM/dd' }}</td>\r
          <td class="text-center">\r
            <button title="\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0633\u0628" class="btn btn-sm btn-modern-view" (click)="openArchiveDetails(archive)">\r
              <i class="fas fa-eye"></i>\r
              <span>\u0639\u0631\u0636</span>\r
            </button>\r
          </td>\r
        </tr>\r
      </ng-template>\r
    </p-table>\r
  </div>\r
\r
  <div class="archive-paginator">\r
    <app-paginator\r
      [totalRecords]="totalRecords"\r
      [pageSize]="rowsPerPage"\r
      [currentPage]="page"\r
      (pageChange)="onPageChange($event)"\r
      (pageSizeChange)="onPageSizeChange($event)">\r
    </app-paginator>\r
  </div>\r
</div>`, styles: ['/* src/app/features/archive/components/archive-list/archive-list.scss */\n.archive-page {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xl);\n  padding-bottom: var(--spacing-2xl);\n}\n.archive-hero {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary-medium) 100%);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  color: white;\n  margin-bottom: var(--spacing-2xl);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-xl);\n  position: relative;\n  overflow: hidden;\n}\n.archive-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 66, 57, 0.9) 0%,\n      rgba(66, 129, 119, 0.9) 100%);\n  z-index: 0;\n}\n.archive-hero .header-content {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xl);\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.archive-hero .header-content .header-icon {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--accent-gold);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.archive-hero .header-content .header-icon i {\n  font-size: var(--font-size-2xl);\n  color: var(--accent-gold);\n}\n.archive-hero .header-content .header-text .page-title {\n  margin: 0;\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.archive-hero .header-content .header-text .page-subtitle {\n  margin: var(--spacing-sm) 0 0 0;\n  opacity: 0.9;\n  font-size: var(--font-size-base);\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 400;\n}\n.archive-hero .search-wrapper {\n  position: relative;\n  width: 400px;\n  max-width: 100%;\n  z-index: 1;\n}\n.archive-hero .search-wrapper .search-icon {\n  position: absolute;\n  right: var(--spacing-md);\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--accent-gold);\n  font-size: var(--font-size-base);\n  pointer-events: none;\n  z-index: 2;\n}\n.archive-hero .search-wrapper .search-input {\n  width: 100%;\n  padding: var(--spacing-sm) 2.5rem var(--spacing-sm) var(--spacing-lg);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n  font-family: var(--font-family-primary);\n  transition: all var(--transition-fast);\n  background-color: rgba(255, 255, 255, 0.95);\n  color: var(--neutral-dark);\n}\n.archive-hero .search-wrapper .search-input::placeholder {\n  color: var(--neutral-medium);\n}\n.archive-hero .search-wrapper .search-input:focus {\n  border-color: var(--accent-gold);\n  box-shadow: 0 0 0 3px rgba(185, 167, 121, 0.2);\n  outline: none;\n  background-color: white;\n}\n@media (max-width: 768px) {\n  .archive-hero {\n    padding: var(--spacing-xl);\n    gap: var(--spacing-lg);\n  }\n  .archive-hero .header-content {\n    gap: var(--spacing-lg);\n  }\n  .archive-hero .header-content .header-icon {\n    width: 50px;\n    height: 50px;\n  }\n  .archive-hero .header-content .header-icon i {\n    font-size: var(--font-size-xl);\n  }\n  .archive-hero .header-content .header-text .page-title {\n    font-size: var(--font-size-xl);\n  }\n  .archive-hero .search-wrapper {\n    width: 100%;\n    margin-top: var(--spacing-md);\n  }\n}\n.archive-hero {\n  padding: var(--spacing-2xl) var(--spacing-xl);\n  color: #fff;\n  position: relative;\n  z-index: 0;\n}\n.archive-hero .hero-content {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: var(--spacing-xl);\n}\n.archive-hero .hero-content h2 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff !important;\n  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);\n}\n.archive-hero .hero-content p {\n  margin-top: var(--spacing-sm);\n  font-size: var(--font-size-base);\n  color: #fff !important;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n}\n.archive-hero .hero-stats {\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.archive-hero .hero-stats .stat-card {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-md) var(--spacing-lg);\n  min-width: 180px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.archive-hero .hero-stats .stat-card span {\n  display: block;\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 0.3rem;\n}\n.archive-hero .hero-stats .stat-card strong {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #fff;\n}\n.toolbar-card {\n  border-radius: var(--radius-xl);\n  background: #fff;\n  box-shadow: 0 8px 26px rgba(5, 66, 57, 0.12);\n  border: 1px solid rgba(5, 66, 57, 0.08);\n}\n.table-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 0;\n}\n:host ::ng-deep .archive-table {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  font-size: 0.75rem;\n  background: #fff;\n}\n:host ::ng-deep .archive-table .p-datatable-thead > tr > th {\n  background: var(--primary-dark) !important;\n  color: #fff !important;\n  font-weight: 600;\n  padding: 0.5rem 0.6rem;\n  text-align: center;\n  font-size: 0.68rem;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n}\n:host ::ng-deep .archive-table .p-datatable-thead > tr > th:last-child {\n  border-right: none;\n}\n:host ::ng-deep .archive-table .p-datatable-tbody > tr {\n  transition: transform 0.1s ease, box-shadow 0.1s ease;\n}\n:host ::ng-deep .archive-table .p-datatable-tbody > tr:hover {\n  background: rgba(5, 66, 57, 0.05);\n  transform: scale(1.005);\n  box-shadow: 0 8px 16px rgba(5, 66, 57, 0.09);\n}\n:host ::ng-deep .archive-table .p-datatable-tbody > tr > td {\n  padding: 0.45rem 0.6rem;\n  font-size: 0.68rem;\n  text-align: center;\n  border-bottom: 1px solid rgba(5, 66, 57, 0.08);\n  border-right: 1px solid rgba(5, 66, 57, 0.08);\n  color: #2f3d4c;\n}\n:host ::ng-deep .archive-table .p-datatable-tbody > tr > td:last-child {\n  border-right: none;\n}\n.queue-tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.25rem;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  background: rgba(5, 66, 57, 0.12);\n  color: #054239;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.text-strong {\n  font-weight: 600;\n  color: #0f2f2f;\n}\n.btn-modern-view {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 1.1rem;\n  border-radius: var(--radius-lg);\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #054239,\n      #1f6b61);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  box-shadow: 0 6px 14px rgba(5, 66, 57, 0.2);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.btn-modern-view:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(5, 66, 57, 0.25);\n  color: #fff;\n}\n.archive-paginator {\n  margin-top: var(--spacing-md);\n  background: #fff;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: var(--spacing-md);\n}\n.search-wrapper {\n  position: relative;\n  width: 320px;\n  max-width: 100%;\n}\n.search-wrapper .search-input {\n  width: 100%;\n  padding: 0.55rem 2.4rem 0.55rem 0.8rem;\n  border: 1.5px solid rgba(5, 66, 57, 0.25);\n  border-radius: var(--radius-lg);\n  font-size: 0.85rem;\n  background: #fff;\n  transition: border 0.2s ease, box-shadow 0.2s ease;\n}\n.search-wrapper .search-input:focus {\n  border-color: var(--primary-medium);\n  box-shadow: 0 0 0 3px rgba(5, 66, 57, 0.12);\n  outline: none;\n}\n.search-wrapper .search-icon {\n  position: absolute;\n  right: 0.85rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--primary-medium);\n}\n@media (max-width: 768px) {\n  .archive-hero {\n    padding: var(--spacing-xl);\n  }\n  .table-card {\n    padding: 0;\n  }\n  .table-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=archive-list.css.map */\n'] }]
  }], () => [{ type: ArchiveService }, { type: ChangeDetectorRef }, { type: Router }, { type: NgbModal }, { type: DataSharingService }], { table: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArchiveList, { className: "ArchiveList", filePath: "src/app/features/archive/components/archive-list/archive-list.ts", lineNumber: 25 });
})();
export {
  ArchiveList
};
//# sourceMappingURL=chunk-KPQQRYTW.js.map
