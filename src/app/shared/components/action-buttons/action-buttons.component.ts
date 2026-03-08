import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export interface ActionButtonConfig {
  id: string;
  label: string;
  icon: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'help' | 'contrast';
  outlined?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss',
})
export class ActionButtonsComponent {
  @Input() actions: ActionButtonConfig[] = [];
  @Input() size: 'small' | 'large' = 'small';
  @Output() actionClick = new EventEmitter<string>();

  onActionClick(actionId: string): void {
    this.actionClick.emit(actionId);
  }
}
