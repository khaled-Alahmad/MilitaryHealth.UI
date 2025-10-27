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
    // Handle mouth parsing if it contains "أخرى:"
    const mouthValue = this.exam.mouth || '';
    const isOtherMouth = mouthValue.startsWith('أخرى');
    const displayMouth = isOtherMouth ? 'أخرى' : mouthValue;
    const mouthOther = isOtherMouth && mouthValue.includes(':') ? mouthValue.split(':')[1].trim() : '';

    this.examForm = this.fb.group({
      rightTympanicMembrane: [this.exam.rightTympanicMembrane || '', Validators.required],
      leftTympanicMembrane: [this.exam.leftTympanicMembrane || '', Validators.required],
      rightHearing: [this.exam.rightHearing || '', Validators.required],
      leftHearing: [this.exam.leftHearing || '', Validators.required],
      resonators: [this.exam.resonators || '', Validators.required],
      rightWhisperTest: [this.exam.rightWhisperTest || '', Validators.required],
      leftWhisperTest: [this.exam.leftWhisperTest || '', Validators.required],
      isRightHugeMates: [this.exam.isRightHugeMates || false],
      isLeftHugeMates: [this.exam.isLeftHugeMates || false],
      rightString: [this.exam.rightString || ''],
      leftString: [this.exam.leftString || ''],
      mouth: [displayMouth, Validators.required],
      mouthOther: [mouthOther],
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

    const formData = this.examForm.value;
    const updatedExam: EarClinicExam = {
      ...this.exam,
      rightTympanicMembrane: formData.rightTympanicMembrane,
      leftTympanicMembrane: formData.leftTympanicMembrane,
      rightHearing: formData.rightHearing,
      leftHearing: formData.leftHearing,
      resonators: formData.resonators,
      rightWhisperTest: formData.rightWhisperTest,
      leftWhisperTest: formData.leftWhisperTest,
      isRightHugeMates: formData.isRightHugeMates,
      isLeftHugeMates: formData.isLeftHugeMates,
      rightString: formData.rightString || '',
      leftString: formData.leftString || '',
      mouth: formData.mouth === 'أخرى' ? (formData.mouthOther || '') : formData.mouth,
      mouthOther: formData.mouth === 'أخرى' ? formData.mouthOther : '',
      otherDiseases: formData.otherDiseases || '',
      resultID: formData.resultID,
      reason: formData.reason || ''
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

  // Helper method لتحديد رسالة الخطأ
  getErrorMessage(controlName: string): string {
    const control = this.examForm.get(controlName);
    if (control?.invalid && control?.touched) {
      if (control.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
    }
    return '';
  }

  // Helper method للتحقق من صلاحية الحقل
  isFieldValid(controlName: string): boolean {
    const control = this.examForm.get(controlName);
    return !!(control?.valid && control?.touched);
  }

  // Helper method للتحقق من عدم صلاحية الحقل
  isFieldInvalid(controlName: string): boolean {
    const control = this.examForm.get(controlName);
    return !!(control?.invalid && control?.touched);
  }
}
