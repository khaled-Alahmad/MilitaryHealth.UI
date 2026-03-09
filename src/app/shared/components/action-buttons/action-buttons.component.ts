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
  rounded?: boolean;
  text?: boolean;
  styleClass?: string;
  visible?: boolean;
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
  @Input() iconOnly = false;
  @Input() buttonClass = '';
  @Output() actionClick = new EventEmitter<string>();

  get visibleActions(): ActionButtonConfig[] {
    return this.actions.filter((action) => action.visible !== false);
  }

  getStyleClass(action: ActionButtonConfig): string {
    return [this.buttonClass, action.styleClass].filter(Boolean).join(' ');
  }

  onActionClick(actionId: string): void {
    this.actionClick.emit(actionId);
  }
}
