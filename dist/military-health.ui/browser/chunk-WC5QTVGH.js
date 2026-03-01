import {
  AuthService,
  UserRoles
} from "./chunk-S5S7SM6Z.js";
import "./chunk-QUV35I6O.js";
import "./chunk-2VRBHK6C.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-QLKHPIKE.js";
import "./chunk-T3CH5F3N.js";
import {
  CommonModule
} from "./chunk-7EG6WMAP.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YTJKKLZA.js";

// src/app/core/layout/topbar/topbar.ts
function Topbar_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275domElement(2, "i", 10);
    \u0275\u0275domElementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.displayName);
  }
}
var Topbar = class _Topbar {
  auth;
  router;
  toggleSidebar = new EventEmitter();
  userRole = null;
  displayName = "";
  showUserMenu = false;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.userRole = this.auth.getUserRole();
    this.displayName = this.getDisplayName();
  }
  getDisplayName() {
    const role = this.userRole;
    if (!role)
      return "";
    if (role === UserRoles.Doctor) {
      const specialtyName = this.auth.getDoctorSpecialtyName();
      if (specialtyName) {
        return specialtyName;
      }
      const specialtyId = this.auth.getSpecializationId();
      if (specialtyId) {
        this.auth.getSpecializationNameById(specialtyId).subscribe({
          next: (name) => {
            if (name && name !== "unknown") {
              localStorage.setItem("doctor_specialty_name", name);
              this.displayName = "\u0639\u064A\u0627\u062F\u0629 " + name;
            }
          }
        });
      }
    }
    const roleMap = {
      "Receptionist": "\u0623\u0645\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644",
      "Admin": "\u0627\u0644\u0645\u0633\u0624\u0648\u0644",
      "Supervisor": "\u0627\u0644\u0645\u0634\u0631\u0641",
      "Diwan": "\u0627\u0644\u062F\u064A\u0648\u0627\u0646"
    };
    return roleMap[role] || role;
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  logout() {
    this.auth.logout().subscribe({
      next: () => {
        this.auth.clearStorage();
        this.router.navigate(["/login"]);
      },
      error: () => {
        this.auth.clearStorage();
        this.router.navigate(["/login"]);
      }
    });
  }
  static \u0275fac = function Topbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Topbar)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Topbar, selectors: [["app-topbar"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 10, vars: 1, consts: [[1, "topbar"], [1, "topbar-left"], [1, "hamburger", 3, "click"], [1, "fas", "fa-bars"], [1, "ministry-title"], [1, "topbar-right"], [1, "user-info"], ["title", "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C", 1, "btn-logout", 3, "click"], [1, "pi", "pi-sign-out"], [1, "user-role-badge"], [1, "pi", "pi-id-card"], [1, "display-name"]], template: function Topbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275domListener("click", function Topbar_Template_button_click_2_listener() {
        return ctx.toggleSidebar.emit();
      });
      \u0275\u0275domElement(3, "i", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h1", 4);
      \u0275\u0275text(5, "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 5);
      \u0275\u0275conditionalCreate(7, Topbar_Conditional_7_Template, 5, 1, "div", 6);
      \u0275\u0275domElementStart(8, "button", 7);
      \u0275\u0275domListener("click", function Topbar_Template_button_click_8_listener() {
        return ctx.logout();
      });
      \u0275\u0275domElement(9, "i", 8);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.displayName ? 7 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.topbar[_ngcontent-%COMP%] {\n  background: white !important;\n  padding: var(--spacing-md) var(--spacing-xl);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 100;\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.hamburger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--primary-dark);\n}\n.ministry-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--primary-dark) !important;\n  margin: 0;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n  letter-spacing: 0.5px;\n  text-shadow: 0 1px 2px rgba(5, 66, 57, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: 1px solid #ddd;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.user-role-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      #428177 100%);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(5, 66, 57, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n.user-role-badge[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.3);\n  transform: translateY(-1px);\n}\n.user-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--accent-gold);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.user-role-badge[_ngcontent-%COMP%]   .display-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--accent-gold) !important;\n  border: 2px solid var(--accent-gold) !important;\n  padding: 0.5rem 0.875rem !important;\n  border-radius: 8px !important;\n  font-weight: 600 !important;\n  transition: all 0.3s ease !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 0.5rem !important;\n  cursor: pointer !important;\n}\n.btn-logout[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n  color: var(--accent-gold);\n  transition: all 0.3s ease;\n}\n.btn-logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--accent-gold);\n  transition: all 0.3s ease;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: var(--accent-gold) !important;\n  border-color: var(--accent-gold) !important;\n  transform: translateY(-1px);\n}\n.btn-logout[_ngcontent-%COMP%]:hover   .logout-text[_ngcontent-%COMP%], \n.btn-logout[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.btn-logout[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n@media (max-width: 768px) {\n  .topbar-right[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .user-role-badge[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.875rem;\n    gap: 0.5rem;\n  }\n  .user-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .user-role-badge[_ngcontent-%COMP%]   .display-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .btn-logout[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.875rem !important;\n    gap: 0.5rem !important;\n  }\n  .btn-logout[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    display: none;\n  }\n  .btn-logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=topbar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Topbar, [{
    type: Component,
    args: [{ selector: "app-topbar", imports: [CommonModule], template: '<header class="topbar">\r\n  <div class="topbar-left">\r\n    <button class="hamburger" (click)="toggleSidebar.emit()">\r\n      <i class="fas fa-bars"></i>\r\n    </button>\r\n    <h1 class="ministry-title">\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639</h1>\r\n  </div>\r\n\r\n  <div class="topbar-right">\r\n    @if (displayName) {\r\n      <div class="user-info">\r\n        <div class="user-role-badge">\r\n          <i class="pi pi-id-card"></i>\r\n          <span class="display-name">{{ displayName }}</span>\r\n        </div>\r\n      </div>\r\n    }\r\n    <button class="btn-logout" (click)="logout()" title="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C">\r\n      <i class="pi pi-sign-out"></i>\r\n    </button>\r\n  </div>\r\n</header>\r\n', styles: ['/* src/app/core/layout/topbar/topbar.scss */\n.topbar {\n  background: white !important;\n  padding: var(--spacing-md) var(--spacing-xl);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 100;\n}\n.topbar-left {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.hamburger {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--primary-dark);\n}\n.ministry-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--primary-dark) !important;\n  margin: 0;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n  letter-spacing: 0.5px;\n  text-shadow: 0 1px 2px rgba(5, 66, 57, 0.1);\n}\n.search-box input {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: 1px solid #ddd;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n}\n.user-role-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      #428177 100%);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(5, 66, 57, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n.user-role-badge:hover {\n  box-shadow: 0 4px 12px rgba(5, 66, 57, 0.3);\n  transform: translateY(-1px);\n}\n.user-role-badge i {\n  font-size: 1rem;\n  color: var(--accent-gold);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.user-role-badge .display-name {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n}\n.btn-logout {\n  background: transparent !important;\n  color: var(--accent-gold) !important;\n  border: 2px solid var(--accent-gold) !important;\n  padding: 0.5rem 0.875rem !important;\n  border-radius: 8px !important;\n  font-weight: 600 !important;\n  transition: all 0.3s ease !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 0.5rem !important;\n  cursor: pointer !important;\n}\n.btn-logout .logout-text {\n  font-size: 0.8rem;\n  font-family:\n    "Cairo",\n    "Segoe UI",\n    sans-serif;\n  color: var(--accent-gold);\n  transition: all 0.3s ease;\n}\n.btn-logout i {\n  font-size: 0.9rem;\n  color: var(--accent-gold);\n  transition: all 0.3s ease;\n}\n.btn-logout:hover {\n  background: var(--accent-gold) !important;\n  border-color: var(--accent-gold) !important;\n  transform: translateY(-1px);\n}\n.btn-logout:hover .logout-text,\n.btn-logout:hover i {\n  color: white;\n}\n.btn-logout:active {\n  transform: translateY(0);\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-profile img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n@media (max-width: 768px) {\n  .topbar-right {\n    gap: 0.75rem;\n  }\n  .user-role-badge {\n    padding: 0.5rem 0.875rem;\n    gap: 0.5rem;\n  }\n  .user-role-badge i {\n    font-size: 1rem;\n  }\n  .user-role-badge .display-name {\n    font-size: 0.8rem;\n  }\n  .btn-logout {\n    padding: 0.5rem 0.875rem !important;\n    gap: 0.5rem !important;\n  }\n  .btn-logout .logout-text {\n    font-size: 0.8rem;\n    display: none;\n  }\n  .btn-logout i {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=topbar.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], { toggleSidebar: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Topbar, { className: "Topbar", filePath: "src/app/core/layout/topbar/topbar.ts", lineNumber: 14 });
})();

// src/app/core/layout/sidebar/sidebar.ts
var _c0 = () => ({ exact: true });
function Sidebar_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 8);
    \u0275\u0275element(5, "i", 9);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646" : null);
  }
}
function Sidebar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 12);
    \u0275\u0275element(5, "i", 13);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646" : null);
  }
}
function Sidebar_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " \u0627\u0644\u062F\u064A\u0648\u0627\u0646");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u062F\u064A\u0648\u0627\u0646" : null);
  }
}
function Sidebar_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 17);
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 19);
    \u0275\u0275element(9, "i", 20);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 21);
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629" : null);
  }
}
function Sidebar_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 25);
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 26);
    \u0275\u0275element(9, "i", 20);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 27);
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629" : null);
  }
}
function Sidebar_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 29);
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 30);
    \u0275\u0275element(9, "i", 20);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 31);
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629" : null);
  }
}
function Sidebar_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 32);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 33);
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 34);
    \u0275\u0275element(9, "i", 20);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 35);
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629" : null);
  }
}
function Sidebar_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 36);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 37);
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 38);
    \u0275\u0275element(9, "i", 20);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 39);
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629" : null);
  }
}
function Sidebar_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 42);
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 44);
    \u0275\u0275element(9, "i", 45);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275attribute("data-tooltip", ctx_r0.collapsed ? "\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F" : null);
  }
}
var Sidebar = class _Sidebar {
  authService;
  collapsed = false;
  role = "";
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    const userRole = this.authService.getUserRole();
    const userName = this.authService.getUserName();
    const specialtyId = this.authService.getSpecializationId();
    if (userRole === "Doctor") {
      switch (userName) {
        case "eye_clinic":
          this.role = "Doctor_Eye";
          break;
        case "internal_clinic":
          this.role = "Doctor_Internal";
          break;
        case "surgery_clinic":
          this.role = "Doctor_Surgery";
          break;
        case "orthopedics_clinic":
          this.role = "Doctor_Orthopedics";
          break;
        case "ear_clinic":
          this.role = "Doctor_Ear";
          break;
        default:
          if (specialtyId) {
            switch (specialtyId) {
              case 1:
                this.role = "Doctor_Eye";
                break;
              case 2:
                this.role = "Doctor_Internal";
                break;
              case 3:
                this.role = "Doctor_Surgery";
                break;
              case 4:
                this.role = "Doctor_Orthopedics";
                break;
              case 5:
                this.role = "Doctor_Ear";
                break;
              default:
                this.role = "Doctor";
            }
          } else {
            this.role = "Doctor";
          }
      }
    } else {
      this.role = userRole;
    }
  }
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], inputs: { collapsed: "collapsed" }, decls: 14, vars: 11, consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "logo"], ["src", "assets/images/syr.svg", "alt", "Logo", 1, "logo-img"], [1, "menu"], ["routerLink", "archive", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/reception/applicants/add", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-user-plus"], ["routerLink", "/reception/applicants", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-list-check"], ["routerLink", "admin/dashboard", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-chart-bar"], ["routerLink", "admin/final", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-list"], [1, "pi", "pi-inbox"], ["routerLink", "/doctor/eye", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-file-edit"], ["routerLink", "/doctor/eye/deferred", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-clock"], ["routerLink", "/doctor/eye/consultations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-comments"], ["routerLink", "/doctor/eye/investigations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-id-card"], [1, "menu-label-investigations"], ["routerLink", "/doctor/internal", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/internal/medications", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/internal/consultations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/internal/investigations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/orthopedics", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/orthopedics/deferred", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/orthopedics/consultations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/orthopedics/investigations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/surgery", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/surgery/records", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/surgery/consultations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/surgery/investigations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/ear", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/ear/deferred", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/ear/consultations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/doctor/ear/investigations", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "supervisor", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-verified"], ["routerLink", "supervisor/list", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-users"], ["routerLink", "supervisor/export", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-file-export"]], template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ul", 4);
      \u0275\u0275conditionalCreate(5, Sidebar_Conditional_5_Template, 8, 6);
      \u0275\u0275conditionalCreate(6, Sidebar_Conditional_6_Template, 8, 6);
      \u0275\u0275conditionalCreate(7, Sidebar_Conditional_7_Template, 4, 3, "li", 5);
      \u0275\u0275conditionalCreate(8, Sidebar_Conditional_8_Template, 16, 12);
      \u0275\u0275conditionalCreate(9, Sidebar_Conditional_9_Template, 16, 12);
      \u0275\u0275conditionalCreate(10, Sidebar_Conditional_10_Template, 16, 12);
      \u0275\u0275conditionalCreate(11, Sidebar_Conditional_11_Template, 16, 12);
      \u0275\u0275conditionalCreate(12, Sidebar_Conditional_12_Template, 16, 12);
      \u0275\u0275conditionalCreate(13, Sidebar_Conditional_13_Template, 12, 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.collapsed);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.role === "Receptionist" ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Admin" ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Diwan" ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Doctor_Eye" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Doctor_Internal" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Doctor_Orthopedics" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Doctor_Surgery" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Doctor_Ear" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role === "Supervisor" ? 13 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  width: clamp(240px, 24vw, 300px);\n  min-height: 100vh;\n  height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #054239 0%,\n      #042e26 100%);\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: all var(--transition-normal);\n  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n  overflow-x: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.5rem;\n  justify-content: center;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) 0.25rem;\n  overflow-x: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem;\n  justify-content: center;\n  margin: 0 0.125rem 0.125rem 0.125rem;\n  position: relative;\n  width: calc(100% - 0.25rem);\n  min-width: auto;\n  max-width: 100%;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 2rem;\n  height: 2rem;\n  margin: 0;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--primary-dark);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--transition-fast);\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: calc(100% + 6px);\n  top: 50%;\n  transform: translateY(-50%);\n  border: 6px solid transparent;\n  border-right-color: var(--primary-dark);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--transition-fast);\n  z-index: 1001;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after, \n.sidebar.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: var(--spacing-lg);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: contain;\n  border-radius: 50%;\n  padding: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid var(--accent-gold);\n  transition: all var(--transition-normal);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: var(--spacing-sm);\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  list-style: none;\n  margin: 0;\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-sm);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--accent-gold);\n  border-radius: var(--radius-sm);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--accent-gold-dark);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  gap: 0.75rem;\n  margin-bottom: 0.125rem;\n  border: 1px solid transparent;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(255, 255, 255, 0.85) 100%) !important;\n  color: var(--primary-dark) !important;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: var(--accent-gold);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent-gold) 0%,\n      var(--primary-dark) 100%);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-dark) !important;\n  transform: scale(1.15);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(255, 255, 255, 0.85) 100%) !important;\n  color: var(--primary-dark) !important;\n  transform: translateX(-4px);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-dark) !important;\n  transform: scale(1.2);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.12) !important;\n  color: white !important;\n  transform: translateX(-4px);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(.active)   i[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  color: var(--accent-gold) !important;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: inherit;\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-badge[_ngcontent-%COMP%] {\n  background: var(--status-danger);\n  color: white;\n  border-radius: var(--radius-full);\n  padding: 2px 8px;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n}\n.menu-label-investigations[_ngcontent-%COMP%] {\n  font-size: 0.9em !important;\n}\n.invalid-role[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=sidebar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule], template: `<aside class="sidebar" [class.collapsed]="collapsed">\r
  <div class="sidebar-header">\r
    <div class="logo">\r
      <img src="assets/images/syr.svg" alt="Logo" class="logo-img">\r
    </div>\r
  </div>\r
\r
  <ul class="menu">\r
\r
    <!-- Reception -->\r
    @if (role === 'Receptionist') {\r
      <li routerLink="/reception/applicants/add" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628' : null">\r
        <i class="pi pi-user-plus"></i>\r
        <span>\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u0633\u0628</span>\r
      </li>\r
      <li routerLink="/reception/applicants" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646' : null">\r
        <i class="pi pi-list-check"></i>\r
        <span>\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646</span>\r
      </li>\r
     \r
    }\r
\r
    <!-- Admin -->\r
    @if (role === 'Admin') {\r
      <li routerLink="admin/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A' : null">\r
        <i class="pi pi-chart-bar"></i>\r
        <span>\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A</span>\r
      </li>\r
      <li routerLink="admin/final" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646' : null">\r
        <i class="pi pi-list"></i>\r
        <span>\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646</span>\r
      </li>\r
    }\r
\r
    @if (role === 'Diwan') {\r
      <li routerLink="archive" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u062F\u064A\u0648\u0627\u0646' : null">\r
        <i class="pi pi-inbox"></i>\r
        <span> \u0627\u0644\u062F\u064A\u0648\u0627\u0646</span>\r
      </li>\r
    }\r
    <!-- Doctor Eye -->\r
    @if (role === 'Doctor_Eye') {\r
      <li routerLink="/doctor/eye" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A' : null">\r
        <i class="pi pi-file-edit"></i>\r
        <span>\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0639\u064A\u0646\u064A</span>\r
      </li>\r
      <li routerLink="/doctor/eye/deferred" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A' : null">\r
        <i class="pi pi-clock"></i>\r
        <span>\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A </span>\r
      </li>\r
       <li routerLink="/doctor/eye/consultations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629' : null">\r
        <i class="pi pi-comments"></i>\r
        <span>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629</span>\r
      </li>\r
       <li routerLink="/doctor/eye/investigations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629' : null">\r
        <i class="pi pi-id-card"></i>\r
        <span class="menu-label-investigations">\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629</span>\r
      </li>\r
    \r
    }\r
\r
    <!-- Doctor Internal -->\r
    @if (role === 'Doctor_Internal') {\r
      <li routerLink="/doctor/internal" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629' : null">\r
        <i class="pi pi-file-edit"></i>\r
        <span>\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0628\u0627\u0637\u0646\u064A\u0629</span>\r
      </li>\r
      <li routerLink="/doctor/internal/medications" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A' : null">\r
        <i class="pi pi-clock"></i>\r
        <span>\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A </span>\r
      </li>\r
       <li routerLink="/doctor/internal/consultations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629' : null">\r
    <i class="pi pi-comments"></i>\r
    <span>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629</span>\r
  </li>\r
  <li routerLink="/doctor/internal/investigations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629' : null">\r
    <i class="pi pi-id-card"></i>\r
    <span class="menu-label-investigations">\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629</span>\r
  </li>\r
    }\r
\r
   <!-- Doctor Orthopedics -->\r
@if (role === 'Doctor_Orthopedics') {\r
  <li routerLink="/doctor/orthopedics" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629' : null">\r
    <i class="pi pi-file-edit"></i>\r
    <span>\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0638\u0645\u064A\u0629</span>\r
  </li>\r
  <li routerLink="/doctor/orthopedics/deferred" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A' : null">\r
    <i class="pi pi-clock"></i>\r
    <span>\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A </span>\r
  </li>\r
  <li routerLink="/doctor/orthopedics/consultations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629' : null">\r
    <i class="pi pi-comments"></i>\r
    <span>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629</span>\r
  </li>\r
  <li routerLink="/doctor/orthopedics/investigations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629' : null">\r
    <i class="pi pi-id-card"></i>\r
    <span class="menu-label-investigations">\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629</span>\r
  </li>\r
}\r
\r
\r
<!-- Doctor Surgery -->\r
@if (role === 'Doctor_Surgery') {\r
  <li routerLink="/doctor/surgery" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u064A\u0629' : null">\r
    <i class="pi pi-file-edit"></i>\r
    <span>\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0631\u0627\u062D\u064A\u0629</span>\r
  </li>\r
  <li routerLink="/doctor/surgery/records" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A' : null">\r
    <i class="pi pi-clock"></i>\r
    <span>\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A </span>\r
  </li>\r
  <li routerLink="/doctor/surgery/consultations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629' : null">\r
    <i class="pi pi-comments"></i>\r
    <span>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629</span>\r
  </li>\r
  <li routerLink="/doctor/surgery/investigations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629' : null">\r
    <i class="pi pi-id-card"></i>\r
    <span class="menu-label-investigations">\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629</span>\r
  </li>\r
}\r
\r
<!-- Doctor Ear -->\r
@if (role === 'Doctor_Ear') {\r
  <li routerLink="/doctor/ear" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635' : null">\r
    <i class="pi pi-file-edit"></i>\r
    <span>\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u062D\u0635</span>\r
  </li>\r
  <li routerLink="/doctor/ear/deferred" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A' : null">\r
    <i class="pi pi-clock"></i>\r
    <span>\u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A</span>\r
  </li>\r
  <li routerLink="/doctor/ear/consultations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629' : null">\r
    <i class="pi pi-comments"></i>\r
    <span>\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629</span>\r
  </li>\r
  <li routerLink="/doctor/ear/investigations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629' : null">\r
    <i class="pi pi-id-card"></i>\r
    <span class="menu-label-investigations">\u0627\u0644\u0627\u0633\u062A\u0642\u0635\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0639\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0628\u0631\u064A\u0629</span>\r
  </li>\r
}\r
\r
\r
    <!-- Supervisor -->\r
    @if (role === 'Supervisor') {\r
      \r
      <li routerLink="supervisor" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628' : null">\r
        <i class="pi pi-verified"></i>\r
        <span>\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0646\u062A\u0633\u0628</span>\r
      </li>\r
       <li routerLink="supervisor/list" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646' : null">\r
        <i class="pi pi-users"></i>\r
        <span>\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u0633\u0628\u064A\u0646</span>\r
      </li>\r
      <li routerLink="supervisor/export" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" [attr.data-tooltip]="collapsed ? '\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F' : null">\r
        <i class="pi pi-file-export"></i>\r
        <span>\u062A\u0635\u062F\u064A\u0631 \u0644\u0644\u062A\u062C\u0646\u064A\u062F</span>\r
      </li>\r
     \r
    }\r
\r
  </ul>\r
</aside>\r
`, styles: ['/* src/app/core/layout/sidebar/sidebar.scss */\n.sidebar {\n  width: clamp(240px, 24vw, 300px);\n  min-height: 100vh;\n  height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #054239 0%,\n      #042e26 100%);\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: all var(--transition-normal);\n  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n}\n.sidebar.collapsed {\n  width: 70px;\n  overflow-x: hidden;\n}\n.sidebar.collapsed .sidebar-header {\n  padding: 0.75rem 0.5rem;\n  justify-content: center;\n}\n.sidebar.collapsed .sidebar-header .logo-img {\n  width: 40px;\n  height: 40px;\n}\n.sidebar.collapsed .menu {\n  padding: var(--spacing-xs) 0.25rem;\n  overflow-x: hidden;\n}\n.sidebar.collapsed .menu li {\n  padding: 0.5rem 0.25rem;\n  justify-content: center;\n  margin: 0 0.125rem 0.125rem 0.125rem;\n  position: relative;\n  width: calc(100% - 0.25rem);\n  min-width: auto;\n  max-width: 100%;\n}\n.sidebar.collapsed .menu li span {\n  display: none;\n}\n.sidebar.collapsed .menu li i {\n  font-size: 1.25rem;\n  width: 2rem;\n  height: 2rem;\n  margin: 0;\n}\n.sidebar.collapsed .menu li::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--primary-dark);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--transition-fast);\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.sidebar.collapsed .menu li::before {\n  content: "";\n  position: absolute;\n  right: calc(100% + 6px);\n  top: 50%;\n  transform: translateY(-50%);\n  border: 6px solid transparent;\n  border-right-color: var(--primary-dark);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--transition-fast);\n  z-index: 1001;\n}\n.sidebar.collapsed .menu li:hover::after,\n.sidebar.collapsed .menu li:hover::before {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .sidebar.collapsed {\n    display: none;\n  }\n}\n.sidebar .sidebar-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: var(--spacing-lg);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar .sidebar-header .logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.sidebar .sidebar-header .logo .logo-img {\n  width: 56px;\n  height: 56px;\n  object-fit: contain;\n  border-radius: 50%;\n  padding: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid var(--accent-gold);\n  transition: all var(--transition-normal);\n}\n.sidebar .sidebar-header .logo .logo-img:hover {\n  transform: scale(1.05);\n}\n.sidebar .menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: var(--spacing-sm);\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  list-style: none;\n  margin: 0;\n  width: 100%;\n}\n.sidebar .menu::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar .menu::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-sm);\n}\n.sidebar .menu::-webkit-scrollbar-thumb {\n  background: var(--accent-gold);\n  border-radius: var(--radius-sm);\n}\n.sidebar .menu::-webkit-scrollbar-thumb:hover {\n  background: var(--accent-gold-dark);\n}\n.sidebar .menu li {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  gap: 0.75rem;\n  margin-bottom: 0.125rem;\n  border: 1px solid transparent;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.sidebar .menu li.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(255, 255, 255, 0.85) 100%) !important;\n  color: var(--primary-dark) !important;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: var(--accent-gold);\n}\n.sidebar .menu li.active::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent-gold) 0%,\n      var(--primary-dark) 100%);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n}\n.sidebar .menu li.active i {\n  color: var(--primary-dark) !important;\n  transform: scale(1.15);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.sidebar .menu li.active:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(255, 255, 255, 0.85) 100%) !important;\n  color: var(--primary-dark) !important;\n  transform: translateX(-4px);\n}\n.sidebar .menu li.active:hover i {\n  color: var(--primary-dark) !important;\n  transform: scale(1.2);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.sidebar .menu li:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.12) !important;\n  color: white !important;\n  transform: translateX(-4px);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.sidebar .menu li:hover:not(.active) i {\n  transform: scale(1.2);\n  color: var(--accent-gold) !important;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.sidebar .menu li i {\n  font-size: 1.25rem;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: inherit;\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sidebar .menu li span {\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar .menu li .menu-badge {\n  background: var(--status-danger);\n  color: white;\n  border-radius: var(--radius-full);\n  padding: 2px 8px;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n}\n.menu-label-investigations {\n  font-size: 0.9em !important;\n}\n.invalid-role {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=sidebar.css.map */\n'] }]
  }], () => [{ type: AuthService }], { collapsed: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/core/layout/sidebar/sidebar.ts", lineNumber: 13 });
})();

// src/app/core/layout/layout.ts
var Layout = class _Layout {
  isSidebarCollapsed = false;
  static \u0275fac = function Layout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Layout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Layout, selectors: [["app-layout"]], decls: 6, vars: 3, consts: [[1, "app-layout", "rtl-layout"], [3, "collapsed"], [1, "main-section"], [3, "toggleSidebar"], [1, "content", "px-2"]], template: function Layout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-topbar", 3);
      \u0275\u0275listener("toggleSidebar", function Layout_Template_app_topbar_toggleSidebar_3_listener() {
        return ctx.isSidebarCollapsed = !ctx.isSidebarCollapsed;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "main", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("collapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-collapsed", ctx.isSidebarCollapsed);
    }
  }, dependencies: [RouterOutlet, Topbar, Sidebar], styles: ["\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  direction: rtl;\n  text-align: right;\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.main-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--neutral-light);\n  transition: all var(--transition-normal);\n}\n.main-section.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-sm);\n  background-color: var(--neutral-light);\n  min-height: calc(100vh - 80px);\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n}\n@media (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n}\n.main-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Layout, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [RouterOutlet, Topbar, Sidebar], template: '<div class="app-layout rtl-layout" >\r\n  <app-sidebar [collapsed]="isSidebarCollapsed"></app-sidebar>\r\n\r\n  <div class="main-section" [class.sidebar-collapsed]="isSidebarCollapsed">\r\n    <app-topbar (toggleSidebar)="isSidebarCollapsed = !isSidebarCollapsed"></app-topbar>\r\n\r\n    <main class="content px-2">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/core/layout/layout.scss */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  direction: rtl;\n  text-align: right;\n  background-color: var(--neutral-light);\n  font-family: var(--font-family-primary);\n}\n.main-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--neutral-light);\n  transition: all var(--transition-normal);\n}\n.main-section.sidebar-collapsed {\n  margin-left: 0;\n}\n.content {\n  flex: 1;\n  padding: var(--spacing-sm);\n  background-color: var(--neutral-light);\n  min-height: calc(100vh - 80px);\n}\n@media (max-width: 768px) {\n  .content {\n    padding: var(--spacing-md);\n  }\n}\n@media (max-width: 480px) {\n  .content {\n    padding: var(--spacing-sm);\n  }\n}\n.main-section {\n  animation: fadeIn 0.3s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Layout, { className: "Layout", filePath: "src/app/core/layout/layout.ts", lineNumber: 12 });
})();
export {
  Layout
};
//# sourceMappingURL=chunk-WC5QTVGH.js.map
