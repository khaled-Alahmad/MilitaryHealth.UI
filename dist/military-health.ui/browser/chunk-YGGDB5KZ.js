import {
  authGuard
} from "./chunk-4KEC4AXO.js";
import "./chunk-GQ7KH2M7.js";
import "./chunk-P4WCBYBH.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-DN34DSYK.js";
import "./chunk-EI7VAPZL.js";
import "./chunk-V2S2U4KH.js";
import "./chunk-YTJKKLZA.js";

// src/app/features/doctor/doctor.routes.ts
var Doctor_ROUTES = [
  {
    path: "eye",
    loadComponent: () => import("./chunk-KVO7MMXD.js").then((m) => m.EyeDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "eye/deferred",
    loadComponent: () => import("./chunk-CYGK2QQR.js").then((m) => m.DeferredEyeExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "eye/consultations",
    loadComponent: () => import("./chunk-XG4MJOVI.js").then((m) => m.EyeConsultations),
    canActivate: [authGuard]
  },
  {
    path: "eye/investigations",
    // ← هذا الراوت الجديد
    loadComponent: () => import("./chunk-MLBCXCW7.js").then((m) => m.EyeInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "internal",
    loadComponent: () => import("./chunk-R7KFE32E.js").then((m) => m.InternalDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "internal/medications",
    loadComponent: () => import("./chunk-TXOXCPYD.js").then((m) => m.DeferredInternalExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "internal/consultations",
    loadComponent: () => import("./chunk-R72UDFCU.js").then((m) => m.InternalConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "internal/investigations",
    loadComponent: () => import("./chunk-ZGI5DH4R.js").then((m) => m.InternalInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics",
    loadComponent: () => import("./chunk-OC3QPEKZ.js").then((m) => m.OrthopedicsDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/deferred",
    loadComponent: () => import("./chunk-TZSWDKCO.js").then((m) => m.DeferredOrthopediExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/consultations",
    loadComponent: () => import("./chunk-MM75ZANE.js").then((m) => m.OrthopedicConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/investigations",
    loadComponent: () => import("./chunk-G7QZ47DQ.js").then((m) => m.OrthopedicInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "surgery",
    loadComponent: () => import("./chunk-2ZVNBZTX.js").then((m) => m.SurgeryDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "surgery/records",
    loadComponent: () => import("./chunk-OGJZDCCT.js").then((m) => m.DeferredSurgicalExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "surgery/consultations",
    loadComponent: () => import("./chunk-CKNEPO7C.js").then((m) => m.SurgeryConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "surgery/investigations",
    loadComponent: () => import("./chunk-W2QIIFAC.js").then((m) => m.SurgeryInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "ear",
    loadComponent: () => import("./chunk-HMG77R2R.js").then((m) => m.EarDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "ear/deferred",
    loadComponent: () => import("./chunk-WKO2RXVX.js").then((m) => m.DeferredEarExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "ear/consultations",
    loadComponent: () => import("./chunk-3HABTXKV.js").then((m) => m.EarConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "ear/investigations",
    loadComponent: () => import("./chunk-S2CY5RDQ.js").then((m) => m.EarInvestigationsList),
    canActivate: [authGuard]
  },
  { path: "**", loadComponent: () => import("./chunk-V3W57QOB.js").then((m) => m.DoctorNotFoundComponent) }
];
export {
  Doctor_ROUTES
};
//# sourceMappingURL=chunk-YGGDB5KZ.js.map
