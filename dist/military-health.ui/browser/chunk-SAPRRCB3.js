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

// src/app/features/admin/admin.routes.ts
var ADMIN_ROUTES = [
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-CB4CCSDM.js").then((m) => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: "final",
    loadComponent: () => import("./chunk-N3P4QHGN.js").then((m) => m.FinalApplicantList),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Admin] }
  }
];
export {
  ADMIN_ROUTES
};
//# sourceMappingURL=chunk-SAPRRCB3.js.map
