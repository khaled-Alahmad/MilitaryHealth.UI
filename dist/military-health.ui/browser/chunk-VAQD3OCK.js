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
    loadComponent: () => import("./chunk-CZIPYDXE.js").then((m) => m.Supervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-ZSNQU3DM.js").then((m) => m.ApplicantsListSupervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "export",
    loadComponent: () => import("./chunk-GVVYGOZZ.js").then((m) => m.RecruitmentExportComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "exported",
    loadComponent: () => import("./chunk-M42T52EQ.js").then((m) => m.RecruitmentExportedComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  }
];
export {
  RECEPTION_ROUTES
};
//# sourceMappingURL=chunk-VAQD3OCK.js.map
