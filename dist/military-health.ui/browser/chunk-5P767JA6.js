import {
  authGuard
} from "./chunk-3QGVQE3H.js";
import {
  UserRoles
} from "./chunk-S5S7SM6Z.js";
import "./chunk-QUV35I6O.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-QLKHPIKE.js";
import "./chunk-T3CH5F3N.js";
import "./chunk-7EG6WMAP.js";
import "./chunk-YTJKKLZA.js";

// src/app/features/supervisor/supervisor.routes.ts
var RECEPTION_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-BH3X54ZV.js").then((m) => m.Supervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-FUEZANEH.js").then((m) => m.ApplicantsListSupervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: "export",
    loadComponent: () => import("./chunk-SAPBOURJ.js").then((m) => m.RecruitmentExportComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  }
];
export {
  RECEPTION_ROUTES
};
//# sourceMappingURL=chunk-5P767JA6.js.map
