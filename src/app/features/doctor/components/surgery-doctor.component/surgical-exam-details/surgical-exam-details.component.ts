import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurgicalExam } from '../../../models/surgical-exam-post.model';

@Component({
  selector: 'app-surgical-exam-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surgical-exam-details.component.html',
  styleUrls: ['./surgical-exam-details.component.scss']
})
export class SurgicalExamDetailsComponent {
  @Input() exam!: SurgicalExam;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
