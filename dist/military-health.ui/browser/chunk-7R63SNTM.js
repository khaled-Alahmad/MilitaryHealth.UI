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

// src/app/features/archive/archive.routes.ts
var Archive_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-SGYRBKN4.js").then((m) => m.ArchiveList),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Diwan] }
  }
];
export {
  Archive_ROUTES
};
//# sourceMappingURL=chunk-7R63SNTM.js.map
