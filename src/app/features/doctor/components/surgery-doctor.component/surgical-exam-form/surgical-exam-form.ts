import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { SurgicalExam } from '../../../models/surgical-exam-post.model';
import { SurgicalExamService } from '../../../services/surgical-exam.service';
import { ToastrService } from 'ngx-toastr';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-surgical-exam-form',
  imports: [ReactiveFormsModule, CommonModule, DialogWrapperComponent, ButtonModule],
  templateUrl: './surgical-exam-form.html',
  styleUrls: ['./surgical-exam-form.scss']
})
export class SurgicalExamForm implements OnInit {
 @Input() applicantFileNumber: string = '';
 @Output() examAdded = new EventEmitter<void>();
  examForm!: FormGroup;
  results: any[] = [];
  loading: boolean = false;
  showModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private examService: SurgicalExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.examForm = this.fb.group({
      generalSurgery: ['سليم', Validators.required],
      generalSurgeryOther: [''],
      urinarySurgery: ['سليم', Validators.required],
      urinarySurgeryOther: [''],
      vascularSurgery: ['سليم', Validators.required],
      vascularSurgeryOther: [''],
      thoracicSurgery: ['سليم', Validators.required],
      thoracicSurgeryOther: [''],
      resultID: [null, Validators.required],
      reason: ['']
    });

    this.examService.getResults().subscribe(res => this.results = res.data?.items || res);
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

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    if (this.examForm.invalid) return;

    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error('❌ لم يتم العثور على معرف الطبيب');
      return;
    }

    const formData = this.examForm.value;
    
    const exam: SurgicalExam = {
      applicantFileNumber: this.applicantFileNumber,
      doctorID,
      generalSurgery: formData.generalSurgery === 'غير ذلك' ? (formData.generalSurgeryOther || '') : formData.generalSurgery,
      urinarySurgery: formData.urinarySurgery === 'غير ذلك' ? (formData.urinarySurgeryOther || '') : formData.urinarySurgery,
      vascularSurgery: formData.vascularSurgery === 'غير ذلك' ? (formData.vascularSurgeryOther || '') : formData.vascularSurgery,
      thoracicSurgery: formData.thoracicSurgery === 'غير ذلك' ? (formData.thoracicSurgeryOther || '') : formData.thoracicSurgery,
      resultID: Number(formData.resultID),
      reason: formData.reason || ''
    };

    this.loading = true;
    this.examService.addSurgicalExam(exam).subscribe({
      next: () => {
        this.toastr.success('✅ تمت إضافة الفحص الجراحي بنجاح');
        this.examForm.reset();
        this.loading = false;
        this.closeModal();
        this.examAdded.emit();
      },
      error: (err: any) => {
        this.loading = false;
        if (err?.error?.errors?.detail?.includes('Applicant already registered before')) {
          this.toastr.warning('⚠️ هذا المريض مسجّل مسبقًا. لا يمكن إضافة فحص جديد لنفس الرقم.');
        } else {
          this.toastr.error('❌ حدث خطأ أثناء إضافة الفحص الجراحي');
        }
      }
    });
  }
}
