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

// src/app/features/reception/reception.routes.ts
var RECEPTION_ROUTES = [
  {
    path: "applicants",
    loadComponent: () => import("./chunk-EPVMOKA2.js").then((m) => m.ApplicantsList),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist, UserRoles.Supervisor] }
  },
  {
    path: "applicants/add",
    loadComponent: () => import("./chunk-3E43OSFT.js").then((m) => m.AddEditApplicant),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist] }
  },
  {
    path: "applicants/details/:fileNumber",
    loadComponent: () => import("./chunk-KQNTBHTU.js").then((m) => m.ApplicantDetailsComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist, UserRoles.Supervisor] }
  },
  {
    path: "applicants/:id",
    loadComponent: () => import("./chunk-3E43OSFT.js").then((m) => m.AddEditApplicant),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Receptionist, UserRoles.Supervisor] }
  }
];
export {
  RECEPTION_ROUTES
};
//# sourceMappingURL=chunk-OEAT4AO6.js.map
