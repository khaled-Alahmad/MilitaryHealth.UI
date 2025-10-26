import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-ear-exam',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './edit-ear-exam.html',
  styleUrls: ['./edit-ear-exam.scss']
})
export class EditEarExamComponent implements OnInit {
  @Input() exam!: EarClinicExam;
  @Output() earExamUpdated = new EventEmitter<any>();
  @Output() dialogClosed = new EventEmitter<boolean>();

  examForm!: FormGroup;
  results: any[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private examService: EarClinicExamService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.loadResults();
    this.initForm();
  }

  private loadResults() {
    this.examService.getResults().subscribe({
      next: (response: any) => {
        if (response.data && response.data.items) {
          this.results = response.data.items;
        } else if (Array.isArray(response)) {
          this.results = response;
        } else if (response.items) {
          this.results = response.items;
        } else {
          this.results = [];
        }
      },
      error: (error: any) => {
        console.error('Error loading results:', error);
        this.results = [];
      }
    });
  }

  private initForm() {
    this.examForm = this.fb.group({
      rightEar: [this.exam.rightEar || '', Validators.required],
      leftEar: [this.exam.leftEar || '', Validators.required],
      rightTympanicMembrane: [this.exam.rightTympanicMembrane || '', Validators.required],
      leftTympanicMembrane: [this.exam.leftTympanicMembrane || '', Validators.required],
      rightHearing: [this.exam.rightHearing || '', Validators.required],
      leftHearing: [this.exam.leftHearing || '', Validators.required],
      resonators: [this.exam.resonators || '', Validators.required],
      rightWhisperTest: [this.exam.rightWhisperTest || '', Validators.required],
      leftWhisperTest: [this.exam.leftWhisperTest || '', Validators.required],
      rightNose: [this.exam.rightNose || '', Validators.required],
      leftNose: [this.exam.leftNose || '', Validators.required],
      isRightHugeMates: [this.exam.isRightHugeMates || false],
      isLeftHugeMates: [this.exam.isLeftHugeMates || false],
      rightString: [this.exam.rightString || '', Validators.required],
      leftString: [this.exam.leftString || '', Validators.required],
      mouth: [this.exam.mouth || '', Validators.required],
      otherDiseases: [this.exam.otherDiseases || ''],
      resultID: [this.exam.resultID || '', Validators.required],
      reason: [this.exam.reason || '']
    });
  }

  onSubmit() {
    if (this.examForm.invalid) {
      this.toastr.warning('يرجى إدخال جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    this.loading = true;

    const updatedExam: EarClinicExam = {
      ...this.exam,
      ...this.examForm.value
    };

    this.examService.updateEarClinicExam(this.exam.earClinicID!, updatedExam).subscribe({
      next: (response) => {
        this.toastr.success('تم تحديث الفحص بنجاح', 'نجاح');
        this.earExamUpdated.emit(true);
        this.activeModal.close();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error updating exam:', error);
        this.toastr.error('فشل في تحديث الفحص', 'خطأ');
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }
}
