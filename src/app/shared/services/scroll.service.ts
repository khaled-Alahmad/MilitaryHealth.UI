import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPosition$ = new BehaviorSubject<number>(0);
  private showScrollTop$ = new BehaviorSubject<boolean>(false);

  constructor() {
    // ✅ مراقبة موضع التمرير
    if (typeof window !== 'undefined') {
      fromEvent(window, 'scroll')
        .pipe(
          debounceTime(100),
          map(() => window.scrollY || window.pageYOffset || document.documentElement.scrollTop)
        )
        .subscribe(position => {
          this.scrollPosition$.next(position);
          this.showScrollTop$.next(position > 300); // ✅ إظهار الزر بعد 300px
        });
    }
  }

  getScrollPosition(): Observable<number> {
    return this.scrollPosition$.asObservable();
  }

  shouldShowScrollTop(): Observable<boolean> {
    return this.showScrollTop$.asObservable();
  }

  scrollToTop(smooth: boolean = true): void {
    if (typeof window !== 'undefined') {
      if (smooth) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  scrollToElement(elementId: string, smooth: boolean = true): void {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        if (smooth) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          element.scrollIntoView();
        }
      }
    }
  }
}

