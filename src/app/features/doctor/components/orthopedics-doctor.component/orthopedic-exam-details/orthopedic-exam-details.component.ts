import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrthopedicExam } from '../../../models/orthopedic-exam.model';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-orthopedic-exam-details',
  standalone: true,
  imports: [CommonModule, DialogWrapperComponent, ButtonModule],
  templateUrl: './orthopedic-exam-details.component.html',
  styleUrls: ['./orthopedic-exam-details.component.scss']
})
export class OrthopedicExamDetailsComponent {
  @Input() exam!: OrthopedicExam;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
