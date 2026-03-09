import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ResetFiltersButtonComponent } from '../reset-filters-button/reset-filters-button.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, InputTextModule, ResetFiltersButtonComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
})
export class FilterBarComponent {
  @Input() searchValue = '';
  @Input() searchPlaceholder = 'ابحث...';
  @Input() showReset = true;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() showSearchHint = true;

  @Output() searchChange = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}
