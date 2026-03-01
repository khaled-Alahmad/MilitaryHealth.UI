import {
  authGuard
} from "./chunk-3QGVQE3H.js";
import "./chunk-S5S7SM6Z.js";
import "./chunk-QUV35I6O.js";
import "./chunk-2VRBHK6C.js";
import "./chunk-QLKHPIKE.js";
import "./chunk-T3CH5F3N.js";
import "./chunk-7EG6WMAP.js";
import "./chunk-YTJKKLZA.js";

// src/app/features/doctor/doctor.routes.ts
var Doctor_ROUTES = [
  {
    path: "eye",
    loadComponent: () => import("./chunk-M4ZSVGMG.js").then((m) => m.EyeDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "eye/deferred",
    loadComponent: () => import("./chunk-K7VIPGZI.js").then((m) => m.DeferredEyeExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "eye/consultations",
    loadComponent: () => import("./chunk-BIRCJD7G.js").then((m) => m.EyeConsultations),
    canActivate: [authGuard]
  },
  {
    path: "eye/investigations",
    // ← هذا الراوت الجديد
    loadComponent: () => import("./chunk-ZWVBJ6RB.js").then((m) => m.EyeInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "internal",
    loadComponent: () => import("./chunk-A4O6VEKX.js").then((m) => m.InternalDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "internal/medications",
    loadComponent: () => import("./chunk-L2U7Z2WF.js").then((m) => m.DeferredInternalExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "internal/consultations",
    loadComponent: () => import("./chunk-BDPINEWF.js").then((m) => m.InternalConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "internal/investigations",
    loadComponent: () => import("./chunk-VEEQMJJK.js").then((m) => m.InternalInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics",
    loadComponent: () => import("./chunk-BR72TKYV.js").then((m) => m.OrthopedicsDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/deferred",
    loadComponent: () => import("./chunk-5ZMUVVQG.js").then((m) => m.DeferredOrthopediExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/consultations",
    loadComponent: () => import("./chunk-C5K227ZV.js").then((m) => m.OrthopedicConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "orthopedics/investigations",
    loadComponent: () => import("./chunk-ZZJZTED7.js").then((m) => m.OrthopedicInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "surgery",
    loadComponent: () => import("./chunk-YCPGJN7Z.js").then((m) => m.SurgeryDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "surgery/records",
    loadComponent: () => import("./chunk-WEJZHEJV.js").then((m) => m.DeferredSurgicalExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "surgery/consultations",
    loadComponent: () => import("./chunk-W3IKHQWZ.js").then((m) => m.SurgeryConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "surgery/investigations",
    loadComponent: () => import("./chunk-EZBHTMLS.js").then((m) => m.SurgeryInvestigationsList),
    canActivate: [authGuard]
  },
  {
    path: "ear",
    loadComponent: () => import("./chunk-CWWP2MT4.js").then((m) => m.EarDoctorComponent),
    canActivate: [authGuard]
  },
  {
    path: "ear/deferred",
    loadComponent: () => import("./chunk-QSHPSGYO.js").then((m) => m.DeferredEarExamsComponent),
    canActivate: [authGuard]
  },
  {
    path: "ear/consultations",
    loadComponent: () => import("./chunk-GXLOY75W.js").then((m) => m.EarConsultationsList),
    canActivate: [authGuard]
  },
  {
    path: "ear/investigations",
    loadComponent: () => import("./chunk-4IYJ7M6N.js").then((m) => m.EarInvestigationsList),
    canActivate: [authGuard]
  },
  { path: "**", loadComponent: () => import("./chunk-V3W57QOB.js").then((m) => m.DoctorNotFoundComponent) }
];
export {
  Doctor_ROUTES
};
//# sourceMappingURL=chunk-PC25SIBD.js.map
