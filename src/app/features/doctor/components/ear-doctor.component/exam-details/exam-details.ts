import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-exam-details',
  standalone: true,
  imports: [CommonModule, DialogWrapperComponent, ButtonModule],
  templateUrl: './exam-details.html',
  styleUrls: ['./exam-details.scss']
})
export class ExamDetailsComponent {
  @Input() exam!: EarClinicExam;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  /** عرض ضخامة القرينات: نفس نصوص الفورم (لا يوجد | بسيطة | متوسطة | شديدة) أو — */
  getHugeMatesLabel(value: boolean | string | undefined): string {
    if (value === undefined || value === null) return '—';
    if (typeof value === 'string' && value.trim()) return value;
    if (typeof value === 'boolean') return value ? 'بسيطة' : 'لا يوجد';
    return '—';
  }
}

