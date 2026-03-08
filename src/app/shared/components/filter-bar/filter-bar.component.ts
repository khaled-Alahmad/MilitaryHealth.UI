import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ResetFiltersButtonComponent } from '../reset-filters-button/reset-filters-button.component';

const DEBOUNCE_MS = 400;

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, ResetFiltersButtonComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchValue = '';
  @Input() searchPlaceholder = 'ابحث...';
  @Input() showReset = true;
  @Input() disabled = false;
  /** عرض مؤشر تحميل بجانب حقل البحث */
  @Input() loading = false;
  /** إظهار تلميح "Enter للبحث" */
  @Input() showSearchHint = true;

  @Output() searchChange = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  /** القيمة المعروضة في حقل البحث (مزامنة مع searchValue من الأب) */
  displayValue = '';

  private searchSubject = new Subject<string | null>();
  private destroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchValue']) {
      this.displayValue = this.searchValue ?? '';
      this.cdr.markForCheck();
    }
  }

  ngOnInit(): void {
    this.displayValue = this.searchValue ?? '';
    this.searchSubject
      .pipe(debounceTime(DEBOUNCE_MS), takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value !== null) {
          this.searchChange.emit(value);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.displayValue = value;
    this.searchSubject.next(value);
    this.cdr.markForCheck();
  }

  onSearchEnter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
    this.searchSubject.next(null);
  }

  clearSearch(): void {
    this.displayValue = '';
    this.searchChange.emit('');
    this.searchSubject.next(null);
    this.cdr.markForCheck();
  }
}
