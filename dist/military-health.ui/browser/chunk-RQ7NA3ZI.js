import {
  BehaviorSubject,
  Injectable,
  debounceTime,
  fromEvent,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YTJKKLZA.js";

// src/app/shared/services/scroll.service.ts
var ScrollService = class _ScrollService {
  scrollPosition$ = new BehaviorSubject(0);
  showScrollTop$ = new BehaviorSubject(false);
  constructor() {
    if (typeof window !== "undefined") {
      fromEvent(window, "scroll").pipe(debounceTime(100), map(() => window.scrollY || window.pageYOffset || document.documentElement.scrollTop)).subscribe((position) => {
        this.scrollPosition$.next(position);
        this.showScrollTop$.next(position > 300);
      });
    }
  }
  getScrollPosition() {
    return this.scrollPosition$.asObservable();
  }
  shouldShowScrollTop() {
    return this.showScrollTop$.asObservable();
  }
  scrollToTop(smooth = true) {
    if (typeof window !== "undefined") {
      if (smooth) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
  scrollToElement(elementId, smooth = true) {
    if (typeof document !== "undefined") {
      const element = document.getElementById(elementId);
      if (element) {
        if (smooth) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } else {
          element.scrollIntoView();
        }
      }
    }
  }
  static \u0275fac = function ScrollService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollService, factory: _ScrollService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ScrollService
};
//# sourceMappingURL=chunk-RQ7NA3ZI.js.map
