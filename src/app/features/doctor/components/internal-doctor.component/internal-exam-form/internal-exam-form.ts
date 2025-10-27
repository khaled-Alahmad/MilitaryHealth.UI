import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { InternalExam } from '../../../models/internal-exam.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-internal-exam-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './internal-exam-form.html',
  styleUrl: './internal-exam-form.scss'
})
export class InternalExamForm implements OnInit {
  @Input() applicantFileNumber: string = '';
  examForm!: FormGroup;
  results: any[] = [];
  showModal: boolean = false;

  loading: boolean = false;
  resultAccepted: number = 0;
  resultRejected: number = 0;
  resultPostponed: number = 0;

  constructor(
    private fb: FormBuilder,
    private examService: InternalExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.examForm = this.fb.group({
      heart: ['سليم', Validators.required],
      respiratory: ['سليم', Validators.required],
      digestive: ['سليم', Validators.required],
      endocrine: ['سليم', Validators.required],
      neurology: ['سليم', Validators.required],
      blood: ['سليم', Validators.required],
      joints: ['سليم', Validators.required],
      kidney: ['سليم', Validators.required],
      hearing: ['سليم', Validators.required],
      skin: ['سليم', Validators.required],
      resultID: [null, Validators.required],
      reason: ['']
    });

    this.examService.getResults().subscribe({
      next: res => {
        this.results = res.data.items;
      },
      error: () => this.toastr.error('❌ فشل جلب النتائج', 'خطأ')
    });
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
    if (this.examForm.invalid) {
      this.toastr.warning('يرجى تعبئة جميع الحقول المطلوبة', 'تنبيه');
      return;
    }

    this.loading = true;
    const payload: InternalExam = {
      applicantFileNumber: this.applicantFileNumber,
      doctorID: Number(this.authService.getDoctorId()),
      ...this.examForm.value,
      resultID: Number(this.examForm.value.resultID)
    };

    this.examService.addInternalExam(payload).subscribe({
      next: () => {
        this.toastr.success('✅ تمت إضافة الفحص بنجاح', 'نجاح');
        this.examForm.reset();
        this.closeModal();
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ حدث خطأ أثناء إضافة الفحص', 'خطأ');
        this.loading = false;
      }
    });
  }
}