import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog-wrapper',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './dialog-wrapper.component.html',
  styleUrl: './dialog-wrapper.component.scss'
})
export class DialogWrapperComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';

  @Input() width = '32rem';
  @Input() modal = true;
  @Input() closable = true;
  @Input() dismissableMask = true;
  @Input() closeOnEscape = true;
  @Input() blockScroll = true;

  @Input() useDefaultFooter = true;
  @Input() cancelLabel = 'إلغاء';
  @Input() confirmLabel = 'تأكيد';
  @Input() confirmSeverity: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'help' | 'contrast' = 'primary';
  @Input() confirmDisabled = false;
  @Input() confirmLoading = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() hide = new EventEmitter<void>();

  get iconClass(): string {
    if (!this.icon) {
      return '';
    }
    return this.icon.includes('pi ') ? this.icon : `pi ${this.icon}`;
  }

  onVisibleChange(value: boolean): void {
    this.visible = value;
    this.visibleChange.emit(value);
  }

  onHide(): void {
    this.hide.emit();
  }

  onCancel(): void {
    this.cancel.emit();
    this.onVisibleChange(false);
  }

  onConfirm(): void {
    this.confirm.emit();
  }
}
