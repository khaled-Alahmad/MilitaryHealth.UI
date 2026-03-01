import {
  ToastrService
} from "./chunk-QUV35I6O.js";
import {
  HttpClient,
  environment
} from "./chunk-7EG6WMAP.js";
import {
  Injectable,
  catchError,
  map,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTJKKLZA.js";

// src/app/core/models/enums/user-roles.enum.ts
var UserRoles;
(function(UserRoles2) {
  UserRoles2["Admin"] = "Admin";
  UserRoles2["Receptionist"] = "Receptionist";
  UserRoles2["Doctor"] = "Doctor";
  UserRoles2["Supervisor"] = "Supervisor";
  UserRoles2["Diwan"] = "Diwan";
})(UserRoles || (UserRoles = {}));

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/features/auth/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  toastr;
  TOKEN_KEY = "access_token";
  REFRESH_KEY = "refresh_token";
  SPECIALTY_KEY = "doctor_specialty";
  DOCTOR_ID_KEY = "doctorId";
  SPECIALTY_NAME_KEY = "doctor_specialty_name";
  constructor(http, toastr) {
    this.http = http;
    this.toastr = toastr;
  }
  login(userDto) {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, userDto).pipe(tap((response) => {
      if (response?.succeeded && response.data?.accessToken) {
        this.setToken(response.data.accessToken, response.data.refreshToken);
        const role = this.getUserRole();
        if (role === UserRoles.Doctor && response.data.doctor) {
          const { specializationID, doctorID } = response.data.doctor;
          if (specializationID) {
            localStorage.setItem(this.SPECIALTY_KEY, specializationID.toString());
          }
          if (doctorID) {
            localStorage.setItem(this.DOCTOR_ID_KEY, doctorID.toString());
          }
          if (specializationID) {
            this.getSpecializationNameById(specializationID).subscribe({
              next: (name) => {
                if (name && name !== "unknown") {
                  localStorage.setItem(this.SPECIALTY_NAME_KEY, name);
                }
              }
            });
          }
        }
      }
    }), map((response) => {
      if (!response.succeeded || response.errors) {
        const msg = response.errors?.detail?.join(", ") || response.message || "Login failed";
        throw new Error(msg);
      }
      return response;
    }), catchError((err) => {
      this.toastr.error(err?.error?.errors?.detail[0] || "Login failed");
      return throwError(() => err);
    }));
  }
  getDoctorId() {
    const doctorId = localStorage.getItem(this.DOCTOR_ID_KEY);
    return doctorId ? +doctorId : null;
  }
  getSpecializationId() {
    const specId = localStorage.getItem(this.SPECIALTY_KEY);
    return specId ? +specId : null;
  }
  getSpecializationNameById(id) {
    return this.http.get(`${environment.apiUrl}/api/Specializations?page=1&pageSize=100`).pipe(map((res) => {
      const item = res.data.items.find((s) => s.specializationID === id);
      return item ? item.description : "unknown";
    }));
  }
  setToken(accessToken, refreshToken) {
    localStorage.setItem(this.TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_KEY, refreshToken);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_KEY);
  }
  logout() {
    const refreshToken = this.getRefreshToken();
    this.clearStorage();
    return this.http.post(`${environment.apiUrl}/api/auth/logout`, { refreshToken });
  }
  clearStorage() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    localStorage.removeItem(this.SPECIALTY_KEY);
    localStorage.removeItem(this.DOCTOR_ID_KEY);
    localStorage.removeItem(this.SPECIALTY_NAME_KEY);
    localStorage.clear();
  }
  getDoctorSpecialtyName() {
    return localStorage.getItem(this.SPECIALTY_NAME_KEY);
  }
  getDecodedToken() {
    const token = this.getToken();
    if (!token)
      return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  }
  isAuthenticated() {
    const payload = this.getDecodedToken();
    if (!payload) {
      this.clearStorage();
      return false;
    }
    const now = Math.floor(Date.now() / 1e3);
    const isValid = payload.exp ? payload.exp > now : false;
    if (!isValid) {
      this.clearStorage();
      window.location.href = "/login";
    }
    return isValid;
  }
  isAuthorizated(roles) {
    const payload = this.getDecodedToken();
    if (!payload)
      return false;
    const roleClaim = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    return roles.includes(roleClaim);
  }
  getUserRole() {
    const payload = this.getDecodedToken();
    return payload ? payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] : null;
  }
  getUserId() {
    const payload = this.getDecodedToken();
    return payload ? payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] : null;
  }
  getUserName() {
    const payload = this.getDecodedToken();
    return payload ? payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] : null;
  }
  setDoctorSpecialty(specialty) {
    localStorage.setItem(this.SPECIALTY_KEY, specialty);
  }
  getDoctorSpecialty() {
    return localStorage.getItem(this.SPECIALTY_KEY);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ToastrService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: ToastrService }], null);
})();

export {
  UserRoles,
  AuthService
};
//# sourceMappingURL=chunk-S5S7SM6Z.js.map
