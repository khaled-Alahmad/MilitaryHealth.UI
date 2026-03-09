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

// src/app/features/reception/reception.routes.ts
var RECEPTION_ROUTES = [
  {
    path: "applicants",
    loadComponent: () => import("./chunk-DCNSOQNS.js").then((m) => m.ApplicantsList),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist, UserRoles.Supervisor] }
  },
  {
    path: "applicants/add",
    loadComponent: () => import("./chunk-DD3BPN5M.js").then((m) => m.AddEditApplicant),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist] }
  },
  {
    path: "applicants/details/:fileNumber",
    loadComponent: () => import("./chunk-75E6HGZM.js").then((m) => m.ApplicantDetailsComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist, UserRoles.Supervisor] }
  },
  {
    path: "applicants/:id",
    loadComponent: () => import("./chunk-DD3BPN5M.js").then((m) => m.AddEditApplicant),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist, UserRoles.Supervisor] }
  }
];
export {
  RECEPTION_ROUTES
};
//# sourceMappingURL=chunk-R2BAWSBO.js.map
