import {
  AuthService
} from "./chunk-GQ7KH2M7.js";
import {
  Router
} from "./chunk-DN34DSYK.js";
import {
  inject
} from "./chunk-YTJKKLZA.js";

// src/app/core/guards/auth-guard.ts
var authGuard = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const roles = route.data["roles"] || [];
  const messageError = route.data["messageError"] || "\u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0648\u0635\u0648\u0644";
  if (!auth.isAuthenticated()) {
    return router.createUrlTree(["/login"]);
  }
  if (roles.length > 0 && !auth.isAuthorizated(roles)) {
    return router.createUrlTree(["/unauthorized"]);
  }
  return true;
};

export {
  authGuard
};
//# sourceMappingURL=chunk-4KEC4AXO.js.map
