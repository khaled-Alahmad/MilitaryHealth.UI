import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';

@Component({
  selector: 'app-exam-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-details.html',
  styleUrls: ['./exam-details.scss']
})
export class ExamDetailsComponent implements OnInit {
  @Input() exam!: EarClinicExam;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log('Exam Details:', this.exam);
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}

