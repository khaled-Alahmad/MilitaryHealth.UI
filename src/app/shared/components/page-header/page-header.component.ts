import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
  /** 'default' | 'banner' — banner shows gradient background and white text */
  @Input() variant: 'default' | 'banner' = 'default';

  get iconClass(): string {
    if (!this.icon) {
      return '';
    }
    return this.icon.includes('pi ') ? this.icon : `pi ${this.icon}`;
  }
}
