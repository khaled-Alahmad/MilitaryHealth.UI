import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import "./chunk-P4WCBYBH.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-JZZQ7XWY.js";
import "./chunk-2VRBHK6C.js";
import {
  Router,
  RouterModule
} from "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import {
  CommonModule,
  NgIf
} from "./chunk-V2S2U4KH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YTJKKLZA.js";

// src/app/features/auth/components/login/login.ts
function Login_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, " \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628! ");
    \u0275\u0275elementEnd();
  }
}
function Login_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629! ");
    \u0275\u0275elementEnd();
  }
}
function Login_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 ", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"] == null ? null : tmp_1_0.errors["minlength"].requiredLength, " \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ");
  }
}
var Login = class _Login {
  authService;
  fb;
  router;
  loginForm;
  roleWithSpecialty = "";
  showPassword = false;
  constructor(authService, fb, router) {
    this.authService = authService;
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  submitted = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  loging() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const loginData = this.loginForm.value;
    this.authService.login(loginData).subscribe({
      next: () => {
        const role = this.authService.getUserRole();
        if (role === "Admin") {
          this.router.navigate(["/admin/dashboard"]);
        } else if (role === "Receptionist") {
          this.router.navigate(["/reception/applicants/add"]);
        } else if (role === "Diwan") {
          this.router.navigate(["/archive"]);
        } else if (role === "Doctor") {
          const specializationID = this.authService.getSpecializationId();
          if (specializationID) {
            this.authService.getSpecializationNameById(specializationID).subscribe({
              next: (specialtyName) => {
                const specialty = specialtyName.toLowerCase();
                this.roleWithSpecialty = `Doctor_${specialty.charAt(0).toUpperCase() + specialty.slice(1)}`;
                switch (specialty) {
                  case "\u0639\u064A\u0648\u0646":
                  case "eye":
                    this.router.navigate(["/doctor/eye"]);
                    break;
                  case "\u0628\u0627\u0637\u0646\u0629":
                  case "internal":
                    this.router.navigate(["/doctor/internal"]);
                    break;
                  case "\u0639\u0638\u0645\u064A\u0629":
                  case "orthopedics":
                    this.router.navigate(["/doctor/orthopedics"]);
                    break;
                  case "\u062C\u0631\u0627\u062D\u0629":
                  case "surgery":
                    this.router.navigate(["/doctor/surgery"]);
                    break;
                  case "\u0623\u0630\u0646":
                  case "\u0627\u0630\u0646":
                  case "\u0627\u0630\u0646\u064A\u0629":
                  case "\u0623\u0630\u0646\u064A\u0629":
                  case "ear":
                  case "\u0627\u0646\u0641 \u0648\u0627\u0630\u0646":
                  case "\u0623\u0646\u0641 \u0648\u0623\u0630\u0646":
                  case "\u0623\u0646\u0641 \u0648\u0623\u0630\u0646 \u0648\u062D\u0646\u062C\u0631\u0629":
                  case "\u0627\u0646\u0633 \u0641 \u0648 \u0627\u0630\u0646":
                  case "ears":
                  case "otolaryngology":
                  case "ent":
                    this.router.navigate(["/doctor/ear"]);
                    break;
                  default:
                    this.router.navigate(["/doctor/"]);
                }
              },
              error: () => {
                this.router.navigate(["/doctor"]);
              }
            });
          } else {
            this.router.navigate(["/doctor"]);
          }
        } else if (role === "Supervisor") {
          this.router.navigate(["/supervisor"]);
        } else {
          this.router.navigate(["/unauthorized"]);
        }
      },
      error: () => {
      }
    });
  }
  getFieldError(fieldName) {
    const control = this.loginForm.get(fieldName);
    if (control && control.touched && control.invalid) {
      if (control.errors?.["required"]) {
        return "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
      }
      if (control.errors?.["email"]) {
        return "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D";
      }
      if (control.errors?.["minlength"]) {
        const requiredLength = control.errors["minlength"].requiredLength;
        return `\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 ${requiredLength} \u062D\u0631\u0648\u0641`;
      }
      if (control.errors?.["maxlength"]) {
        const maxLength = control.errors["maxlength"].requiredLength;
        return `\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 ${maxLength} \u062D\u0631\u0648\u0641`;
      }
      if (control.errors?.["pattern"]) {
        return "\u0627\u0644\u0642\u064A\u0645\u0629 \u063A\u064A\u0631 \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0646\u0645\u0637 \u0627\u0644\u0645\u0637\u0644\u0648\u0628";
      }
    }
    return null;
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 30, vars: 15, consts: [[3, "ngSubmit", "formGroup"], [1, "container", "forms"], [1, "form", "login"], [1, "form-header"], ["src", "assets/images/syr.svg", "alt", "Logo", "width", "100"], [1, "field", "input-field"], ["for", "username"], [1, "input-container"], ["type", "text", "id", "username", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "formControlName", "username", 1, "input", 3, "blur"], [1, "bx", "bx-user", "input-icon"], [1, "error-container"], ["class", "error-message", 4, "ngIf"], ["for", "password"], ["id", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "formControlName", "password", 1, "password", 3, "blur", "type"], [1, "bx", 3, "click"], [1, "field", "button-field"], ["type", "submit"], [1, "error-message"], [1, "bx", "bx-error-circle"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_0_listener() {
        return ctx.loging();
      });
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u0645\u0631\u062D\u0628\u064B\u0627! \u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u064A\u0627\u0646\u0627\u062A\u0643");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
      \u0275\u0275text(11, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "input", 8);
      \u0275\u0275listener("blur", function Login_Template_input_blur_13_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.loginForm.get("username")) == null ? null : tmp_0_0.markAsTouched();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275template(16, Login_div_16_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 5)(18, "label", 12);
      \u0275\u0275text(19, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "input", 13);
      \u0275\u0275listener("blur", function Login_Template_input_blur_21_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.loginForm.get("password")) == null ? null : tmp_0_0.markAsTouched();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "i", 14);
      \u0275\u0275listener("click", function Login_Template_i_click_22_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 10);
      \u0275\u0275template(24, Login_div_24_Template, 3, 0, "div", 11)(25, Login_div_25_Template, 3, 1, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "button", 16)(28, "span");
      \u0275\u0275text(29, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_6_0;
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.touched) || ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid) && ctx.submitted);
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.loginForm.get("username")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && (((tmp_3_0 = ctx.loginForm.get("username")) == null ? null : tmp_3_0.touched) || ctx.submitted));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched) || ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ctx.submitted);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275attribute("aria-invalid", ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance();
      \u0275\u0275classProp("bx-hide", !ctx.showPassword)("bx-show", ctx.showPassword);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]) && (((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.touched) || ctx.submitted));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.loginForm.get("password")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["minlength"]);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, CommonModule, NgIf, RouterModule], styles: ['@charset "UTF-8";\n@import "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-image:\n    linear-gradient(\n      to top,\n      rgb(0, 38, 35) 30%,\n      rgba(0, 38, 35, 0.8) 100%),\n    url("./media/pattern.svg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  z-index: 0;\n  direction: rtl;\n}\n.container.forms[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.form[_ngcontent-%COMP%] {\n  max-width: 450px;\n  width: 100%;\n  padding: 40px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.form-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n  margin-bottom: 15px;\n}\n.form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  position: relative;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  font-weight: 500;\n}\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input[_ngcontent-%COMP%], \n.password[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0 10px 0 15px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.input[_ngcontent-%COMP%]:focus, \n.password[_ngcontent-%COMP%]:focus {\n  border-color: #14b8a6;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.2);\n  outline: none;\n}\n.input[_ngcontent-%COMP%]::placeholder, \n.password[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n  opacity: 0.6;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 20px;\n  pointer-events: none;\n}\n.bx-hide[_ngcontent-%COMP%], \n.bx-show[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  z-index: 2;\n}\n.bx-hide[_ngcontent-%COMP%]:hover, \n.bx-show[_ngcontent-%COMP%]:hover {\n  color: #14b8a6;\n}\n.field.invalid[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], \n.field.invalid[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.field.invalid[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus, \n.field.invalid[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 18px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.button-field[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.button-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      to right,\n      #54a092,\n      #2a6b5f);\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.button-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      to right,\n      #76c4b8,\n      #14b8a6);\n  box-shadow: 0 5px 15px rgba(66, 129, 119, 0.2);\n}\n.button-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: #e5e7eb;\n  cursor: not-allowed;\n  color: #6b7280;\n}\n.button-field[_ngcontent-%COMP%]   button.loading[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n}\n.bx-loader-alt[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule], template: `<form [formGroup]="loginForm" (ngSubmit)="loging()">\r
  <section class="container forms">\r
    <div class="form login">\r
      <div class="form-header">\r
        <img src="assets/images/syr.svg" alt="Logo" width="100" />\r
        <h1>\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</h1>\r
        <p>\u0645\u0631\u062D\u0628\u064B\u0627! \u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u064A\u0627\u0646\u0627\u062A\u0643</p>\r
      </div>\r
\r
      <!-- \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062E\u0637\u0623 \u0648\u0627\u0644\u0646\u062C\u0627\u062D \u0647\u0646\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u0645\u0628\u0648\u0646\u0646\u062A -->\r
\r
      <!-- \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 -->\r
      <div class="field input-field"\r
        [class.invalid]="(loginForm.get('username')?.invalid && loginForm.get('username')?.touched) || (loginForm.get('username')?.invalid && submitted)">\r
        <label for="username">\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645:</label>\r
        <div class="input-container">\r
          <input\r
            type="text"\r
            id="username"\r
            placeholder="\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"\r
            formControlName="username"\r
            class="input"\r
            [attr.aria-invalid]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched"\r
            (blur)="loginForm.get('username')?.markAsTouched()"\r
          />\r
          <i class="bx bx-user input-icon"></i>\r
        </div>\r
        <div class="error-container">\r
          <div *ngIf="loginForm.get('username')?.errors?.['required'] && (loginForm.get('username')?.touched || submitted)"\r
            class="error-message">\r
            <i class="bx bx-error-circle"></i> \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628!\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 -->\r
      <div class="field input-field"\r
        [class.invalid]="(loginForm.get('password')?.invalid && loginForm.get('password')?.touched) || (loginForm.get('password')?.invalid && submitted)">\r
        <label for="password">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631:</label>\r
        <div class="input-container">\r
          <input\r
            [type]="showPassword ? 'text' : 'password'"\r
            id="password"\r
            placeholder="\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"\r
            formControlName="password"\r
            class="password"\r
            [attr.aria-invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"\r
            (blur)="loginForm.get('password')?.markAsTouched()"\r
          />\r
          <i\r
            class="bx"\r
            [class.bx-hide]="!showPassword"\r
            [class.bx-show]="showPassword"\r
            (click)="togglePassword()"\r
          ></i>\r
        </div>\r
        <div class="error-container">\r
          <div *ngIf="loginForm.get('password')?.errors?.['required'] && (loginForm.get('password')?.touched || submitted)"\r
            class="error-message">\r
            <i class="bx bx-error-circle"></i> \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629!\r
          </div>\r
          <div *ngIf="loginForm.get('password')?.errors?.['minlength']" class="error-message">\r
            <i class="bx bx-error-circle"></i> \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 {{ loginForm.get('password')?.errors?.['minlength']?.requiredLength }} \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="field button-field">\r
        <button\r
          type="submit"\r
\r
        >\r
          <span >\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</span>\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
</form>`, styles: ['@charset "UTF-8";\n@import "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";\n\n/* src/app/features/auth/components/login/login.scss */\n:host {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-image:\n    linear-gradient(\n      to top,\n      rgb(0, 38, 35) 30%,\n      rgba(0, 38, 35, 0.8) 100%),\n    url("./media/pattern.svg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  z-index: 0;\n  direction: rtl;\n}\n.container.forms {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.form {\n  max-width: 450px;\n  width: 100%;\n  padding: 40px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  animation: fadeIn 0.5s ease;\n}\n.form-header {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.form-header img {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n  margin-bottom: 15px;\n}\n.form-header h1 {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n}\n.form-header p {\n  color: #6b7280;\n  font-size: 14px;\n}\n.field {\n  margin-bottom: 20px;\n  position: relative;\n}\n.field label {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  font-weight: 500;\n}\n.input-container {\n  position: relative;\n}\n.input,\n.password {\n  width: 100%;\n  height: 50px;\n  padding: 0 10px 0 15px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.input:focus,\n.password:focus {\n  border-color: #14b8a6;\n  box-shadow: 0 0 0 3px rgba(66, 129, 119, 0.2);\n  outline: none;\n}\n.input::placeholder,\n.password::placeholder {\n  color: #6b7280;\n  opacity: 0.6;\n}\n.input-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 20px;\n  pointer-events: none;\n}\n.bx-hide,\n.bx-show {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  z-index: 2;\n}\n.bx-hide:hover,\n.bx-show:hover {\n  color: #14b8a6;\n}\n.field.invalid .input,\n.field.invalid .password {\n  border-color: #ef4444;\n}\n.field.invalid .input:focus,\n.field.invalid .password:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);\n}\n.error-message {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 18px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.error-message i {\n  font-size: 14px;\n}\n.button-field {\n  margin-top: 25px;\n}\n.button-field button {\n  width: 100%;\n  height: 50px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      to right,\n      #54a092,\n      #2a6b5f);\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.button-field button:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      to right,\n      #76c4b8,\n      #14b8a6);\n  box-shadow: 0 5px 15px rgba(66, 129, 119, 0.2);\n}\n.button-field button:disabled {\n  background: #e5e7eb;\n  cursor: not-allowed;\n  color: #6b7280;\n}\n.button-field button.loading {\n  background: #e5e7eb;\n}\n.bx-loader-alt {\n  font-size: 20px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/features/auth/components/login/login.ts", lineNumber: 13 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-XDCN3V5U.js.map
