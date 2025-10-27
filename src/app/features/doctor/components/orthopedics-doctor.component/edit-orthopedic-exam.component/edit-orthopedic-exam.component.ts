import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrthopedicExam } from '../../../models/orthopedic-exam.model';
import { OrthopedicExamService } from '../../../services/orthopedic-exam.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-orthopedic-exam',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './edit-orthopedic-exam.component.html',
  styleUrl: './edit-orthopedic-exam.component.scss'
})
export class EditOrthopedicExamComponent implements OnInit {
  @Input() exam!: OrthopedicExam;
  @Output() OrthopedicExamUpdated = new EventEmitter<any>();
  @Output() dialogClosed = new EventEmitter<boolean>();

  examForm!: FormGroup;
  results: any[] = [];
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private examService: OrthopedicExamService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    // Parse existing values for "غير ذلك" option
    const musculoskeletal = this.parseValue(this.exam?.musculoskeletal || '');
    const neurologicalSurgery = this.parseValue(this.exam?.neurologicalSurgery || '');

    this.examForm = this.fb.group({
      musculoskeletal: [musculoskeletal.displayValue, Validators.required],
      musculoskeletalOther: [musculoskeletal.otherValue || ''],
      neurologicalSurgery: [neurologicalSurgery.displayValue, Validators.required],
      neurologicalSurgeryOther: [neurologicalSurgery.otherValue || ''],
      resultID: [this.exam?.resultID || null, Validators.required],
      reason: [this.exam?.reason || '']
    });

    this.examService.getResults().subscribe({
      next: (res: any) => {
        this.results = res.data?.items || [];
        if (this.exam?.resultID) {
          this.examForm.patchValue({ resultID: this.exam.resultID });
        }
      },
      error: err => this.toastr.error('❌ فشل جلب النتائج', 'خطأ')
    });
  }

  // Helper method to parse value
  parseValue(value: string): { displayValue: string; otherValue: string } {
    if (!value || value === 'سليم' || value === 'غير سليم') {
      return { displayValue: value || 'سليم', otherValue: '' };
    }
    return { displayValue: 'غير ذلك', otherValue: value };
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

  onSubmit() {
    if (!this.exam?.orthopedicExamID) {
      this.toastr.error('❌ لا يمكن التحديث: لا يوجد ID للفحص', 'خطأ');
      return;
    }

    if (this.examForm.invalid) {
      this.toastr.warning('يرجى تعبئة جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    const formData = this.examForm.value;

    const updatedExam: OrthopedicExam = {
      ...this.exam,
      musculoskeletal: formData.musculoskeletal === 'غير ذلك' ? (formData.musculoskeletalOther || '') : formData.musculoskeletal,
      neurologicalSurgery: formData.neurologicalSurgery === 'غير ذلك' ? (formData.neurologicalSurgeryOther || '') : formData.neurologicalSurgery,
      resultID: Number(formData.resultID)
    };

    this.loading = true;
    this.examService.updateOrthopedicExam(this.exam.orthopedicExamID, updatedExam).subscribe({
      next: () => {
        this.toastr.success('✅ تم التحديث بنجاح', 'نجاح');
        this.exam.resultID = updatedExam.resultID;
        this.exam.result = this.results.find(r => r.resultID === updatedExam.resultID);
        this.loading = false;
        this.close();
      },
      error: err => {
        this.toastr.error('❌ فشل التحديث', 'خطأ');
        this.loading = false;
      }
    });
  }

  close() {
    this.activeModal.dismiss();
  }
}
