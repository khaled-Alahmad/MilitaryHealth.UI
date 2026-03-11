import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SurgicalExam } from '../../../models/surgical-exam-post.model';
import { CommonModule } from '@angular/common';
import { SurgicalExamService } from '../../../services/surgical-exam.service';
import { ToastrService } from 'ngx-toastr';
import { HEALTH_STATUS_VALUES } from '../../../constants/health-status-options';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-surgical-exam',
  imports: [CommonModule, ReactiveFormsModule, DialogWrapperComponent, ButtonModule],
  templateUrl: './edit-surgical-exam.html',
  styleUrls: ['./edit-surgical-exam.scss']
})
export class EditSurgicalExam implements OnInit {
  @Input() exam!: SurgicalExam;  
  @Output() dialogClosed = new EventEmitter<boolean>(); 

  examForm!: FormGroup;
  results: any[] = [];
  loading: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private examService: SurgicalExamService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Parse existing values for "غير ذلك" option
    const generalSurgery = this.parseSurgeryValue(this.exam?.generalSurgery || '');
    const urinarySurgery = this.parseSurgeryValue(this.exam?.urinarySurgery || '');
    const vascularSurgery = this.parseSurgeryValue(this.exam?.vascularSurgery || '');
    const thoracicSurgery = this.parseSurgeryValue(this.exam?.thoracicSurgery || '');

    this.examForm = this.fb.group({
      generalSurgery: [generalSurgery.displayValue, Validators.required],
      generalSurgeryOther: [generalSurgery.otherValue || ''],
      urinarySurgery: [urinarySurgery.displayValue, Validators.required],
      urinarySurgeryOther: [urinarySurgery.otherValue || ''],
      vascularSurgery: [vascularSurgery.displayValue, Validators.required],
      vascularSurgeryOther: [vascularSurgery.otherValue || ''],
      thoracicSurgery: [thoracicSurgery.displayValue, Validators.required],
      thoracicSurgeryOther: [thoracicSurgery.otherValue || ''],
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
      error: () => this.toastr.error('❌ فشل تحميل النتائج')
    });
  }

  // Helper method to parse surgery value
  parseSurgeryValue(value: string): { displayValue: string; otherValue: string } {
    if (!value || HEALTH_STATUS_VALUES.includes(value)) {
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
    if (!this.exam?.surgicalExamID) {
      this.toastr.error('❌ لا يمكن التحديث: لا يوجد ID للفحص');
      return;
    }

    if (this.examForm.invalid) {
      this.toastr.warning('❌ يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }

    const formData = this.examForm.value;
    
    const updatedExam: SurgicalExam = {
      ...this.exam,
      generalSurgery: formData.generalSurgery === 'غير ذلك' ? (formData.generalSurgeryOther || '') : formData.generalSurgery,
      urinarySurgery: formData.urinarySurgery === 'غير ذلك' ? (formData.urinarySurgeryOther || '') : formData.urinarySurgery,
      vascularSurgery: formData.vascularSurgery === 'غير ذلك' ? (formData.vascularSurgeryOther || '') : formData.vascularSurgery,
      thoracicSurgery: formData.thoracicSurgery === 'غير ذلك' ? (formData.thoracicSurgeryOther || '') : formData.thoracicSurgery,
      resultID: Number(formData.resultID),
      reason: (formData.reason || '').trim() // ✅ إضافة حقل السبب
    };

    const examID: number = updatedExam.surgicalExamID!;

    this.loading = true;
    this.examService.updateSurgicalExam(examID, updatedExam).subscribe({
      next: () => {
        this.toastr.success('✅ تم التحديث بنجاح');
        this.exam.result = this.results.find(r => r.resultID === updatedExam.resultID);
        this.exam.resultID = updatedExam.resultID; 
        this.exam.reason = updatedExam.reason; // ✅ تحديث حقل السبب
        this.dialogClosed.emit(true);
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ فشل التحديث، تحقق من ID أو الاتصال بالإنترنت');
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.dialogClosed.emit(false);
  }
}
