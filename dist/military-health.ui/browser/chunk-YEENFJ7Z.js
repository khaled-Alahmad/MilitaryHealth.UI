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

// src/app/features/archive/archive.routes.ts
var Archive_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-KPQQRYTW.js").then((m) => m.ArchiveList),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Diwan] }
  }
];
export {
  Archive_ROUTES
};
//# sourceMappingURL=chunk-YEENFJ7Z.js.map
