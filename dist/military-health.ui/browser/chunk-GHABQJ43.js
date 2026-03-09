import {
  authGuard
} from "./chunk-4KEC4AXO.js";
import {
  UserRoles
} from "./chunk-GQ7KH2M7.js";
import "./chunk-P4WCBYBH.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import "./chunk-V2S2U4KH.js";
import "./chunk-YTJKKLZA.js";

// src/app/features/supervisor/supervisor.routes.ts
var RECEPTION_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-NV26Z7B2.js").then((m) => m.Supervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-XA5XEFSQ.js").then((m) => m.ApplicantsListSupervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "export",
    loadComponent: () => import("./chunk-BGXBFR7F.js").then((m) => m.RecruitmentExportComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "exported",
    loadComponent: () => import("./chunk-QTVJMMMU.js").then((m) => m.RecruitmentExportedComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  }
];
export {
  RECEPTION_ROUTES
};
//# sourceMappingURL=chunk-GHABQJ43.js.map
