import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      *ngIf="showButton"
      class="scroll-to-top"
      (click)="scrollToTop()"
      [attr.aria-label]="'العودة للأعلى'"
      title="العودة للأعلى">
      <i class="pi pi-arrow-up"></i>
    </button>
  `,
  styles: [`
    .scroll-to-top {
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      width: 3rem;
      height: 3rem;
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-medium) 100%);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-lg);
      transition: all var(--transition-normal);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);

      &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-xl);
        background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-dark) 100%);
      }

      i {
        font-size: var(--font-size-xl);
      }
    }
  `]
})
export class ScrollToTopComponent implements OnInit, OnDestroy {
  showButton = false;
  private destroy$ = new Subject<void>();

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.shouldShowScrollTop()
      .pipe(takeUntil(this.destroy$))
      .subscribe(shouldShow => {
        this.showButton = shouldShow;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop(true);
  }
}

