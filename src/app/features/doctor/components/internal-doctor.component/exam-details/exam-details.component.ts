import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalExam } from '../../../models/internal-exam.model';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-internal-exam-details',
  standalone: true,
  imports: [CommonModule, DialogWrapperComponent, ButtonModule],
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss']
})
export class InternalExamDetailsComponent {
  @Input() exam!: InternalExam;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
