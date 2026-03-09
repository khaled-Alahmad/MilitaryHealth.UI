import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-section-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './section-card.component.html',
  styleUrl: './section-card.component.scss'
})
export class SectionCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
  @Input() headerVariant: 'brand' | 'neutral' = 'brand';
  @Input() contentPadding: 'md' | 'lg' = 'lg';
  @Input() customClass = '';

  get cardClass(): string {
    return ['section-card', this.customClass].filter(Boolean).join(' ');
  }
}
