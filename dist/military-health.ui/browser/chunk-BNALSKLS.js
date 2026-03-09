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

// src/app/features/admin/admin.routes.ts
var ADMIN_ROUTES = [
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-G54HBRQU.js").then((m) => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: "final",
    loadComponent: () => import("./chunk-C5THJVK2.js").then((m) => m.FinalApplicantList),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Admin] }
  }
];
export {
  ADMIN_ROUTES
};
//# sourceMappingURL=chunk-BNALSKLS.js.map
