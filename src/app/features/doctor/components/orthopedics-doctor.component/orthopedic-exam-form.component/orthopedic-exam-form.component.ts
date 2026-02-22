import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { OrthopedicExam } from '../../../models/orthopedic-exam.model';
import { OrthopedicExamService } from '../../../services/orthopedic-exam.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orthopedic-exam-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './orthopedic-exam-form.component.html',
  styleUrls: ['./orthopedic-exam-form.component.scss']
})
export class OrthopedicExamFormComponent {
 @Input() applicantFileNumber: string = '';
 @Output() examAdded = new EventEmitter<void>();
  examForm!: FormGroup;
  results: any[] = [];
  loading: boolean = false;
  showModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private examService: OrthopedicExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.examForm = this.fb.group({
      musculoskeletal: ['سليم', Validators.required],
      musculoskeletalOther: [''],
      neurologicalSurgery: ['سليم', Validators.required],
      neurologicalSurgeryOther: [''],
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

    const exam: OrthopedicExam = {
      applicantFileNumber: this.applicantFileNumber,
      doctorID: doctorID,
      musculoskeletal: formData.musculoskeletal === 'غير ذلك' ? (formData.musculoskeletalOther || '') : formData.musculoskeletal,
      neurologicalSurgery: formData.neurologicalSurgery === 'غير ذلك' ? (formData.neurologicalSurgeryOther || '') : formData.neurologicalSurgery,
      resultID: Number(formData.resultID),
      reason: formData.reason || ''
    };

    this.loading = true;

    this.examService.addOrthopedicExam(exam).subscribe({
      next: () => {
        this.toastr.success('✅ تمت إضافة فحص العظام بنجاح');
        this.examForm.reset();
        this.loading = false;
        this.closeModal();
        this.examAdded.emit();
      },
      error: (err: any) => {
        this.loading = false;
        if (err?.error) {
          this.toastr.error(JSON.stringify(err.error));
        } else {
          this.toastr.error('حدث خطأ أثناء إضافة فحص العظام');
        }
      }
    });
  }
}
