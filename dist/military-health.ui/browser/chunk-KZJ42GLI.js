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
    loadComponent: () => import("./chunk-ZNXENXIX.js").then((m) => m.EyeDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "eye/deferred",
    loadComponent: () => import("./chunk-YYYD7CEX.js").then((m) => m.DeferredEyeExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "eye/consultations",
    loadComponent: () => import("./chunk-Q4MCHOKS.js").then((m) => m.EyeConsultations),
    canActivate: [authGuard]
  },
  {
    path: "eye/investigations",
    // ← هذا الراوت الجديد
    loadComponent: () => import("./chunk-KRNM5SJN.js").then((m) => m.EyeInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "internal",
    loadComponent: () => import("./chunk-TSK2JN55.js").then((m) => m.InternalDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "internal/medications",
    loadComponent: () => import("./chunk-5XZ3IWMN.js").then((m) => m.DeferredInternalExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "internal/consultations",
    loadComponent: () => import("./chunk-SIORUT5A.js").then((m) => m.InternalConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "internal/investigations",
    loadComponent: () => import("./chunk-EJXKNFP5.js").then((m) => m.InternalInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics",
    loadComponent: () => import("./chunk-XG2QFVYW.js").then((m) => m.OrthopedicsDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/deferred",
    loadComponent: () => import("./chunk-TINOCXZZ.js").then((m) => m.DeferredOrthopediExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/consultations",
    loadComponent: () => import("./chunk-EUNUYYKB.js").then((m) => m.OrthopedicConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/investigations",
    loadComponent: () => import("./chunk-PVGJS5AD.js").then((m) => m.OrthopedicInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "surgery",
    loadComponent: () => import("./chunk-6W2AOTZC.js").then((m) => m.SurgeryDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "surgery/records",
    loadComponent: () => import("./chunk-Q6R2YHE2.js").then((m) => m.DeferredSurgicalExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "surgery/consultations",
    loadComponent: () => import("./chunk-PACK34CR.js").then((m) => m.SurgeryConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "surgery/investigations",
    loadComponent: () => import("./chunk-RUVK6F5I.js").then((m) => m.SurgeryInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "ear",
    loadComponent: () => import("./chunk-A2KJF3MW.js").then((m) => m.EarDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "ear/deferred",
    loadComponent: () => import("./chunk-ZXMLMQVG.js").then((m) => m.DeferredEarExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "ear/consultations",
    loadComponent: () => import("./chunk-XVEHR4TH.js").then((m) => m.EarConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "ear/investigations",
    loadComponent: () => import("./chunk-JGMAFADU.js").then((m) => m.EarInvestigationsList),
    canActivate: [authGuard]
  },
  { path: "**", loadComponent: () => import("./chunk-V3W57QOB.js").then((m) => m.DoctorNotFoundComponent) }
];
export {
  Doctor_ROUTES
};
//# sourceMappingURL=chunk-KZJ42GLI.js.map
