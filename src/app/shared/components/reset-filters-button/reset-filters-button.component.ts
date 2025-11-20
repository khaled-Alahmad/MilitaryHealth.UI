import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reset-filters-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <button
      type="button"
      pButton
      pRipple
      class="p-button-outlined p-button-secondary p-button-sm filter-reset-btn"
      [disabled]="disabled"
      (click)="onReset()"
    >
      <i class="pi pi-filter-slash" aria-hidden="true"></i>
      <span class="filter-reset-label">{{ label }}</span>
    </button>
  `,
  styleUrl: './reset-filters-button.component.scss'
})
export class ResetFiltersButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Output() reset = new EventEmitter<void>();

  onReset(): void {
    if (!this.disabled) {
      this.reset.emit();
    }
  }
}

