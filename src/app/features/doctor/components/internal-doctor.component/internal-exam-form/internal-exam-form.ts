import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { InternalExam } from '../../../models/internal-exam.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { HEALTH_STATUS_OPTIONS, OTHER_OPTION_VALUE, resolveHealthStatusValue } from '../../../constants/health-status-options';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';
import { ButtonModule } from 'primeng/button';

interface StatusSection {
  control: string;
  otherControl: string;
  label: string;
}

@Component({
  selector: 'app-internal-exam-form',
  imports: [ReactiveFormsModule, CommonModule, DialogWrapperComponent, ButtonModule],
  templateUrl: './internal-exam-form.html',
  styleUrl: './internal-exam-form.scss',
})
export class InternalExamForm implements OnInit {
  @Input() applicantFileNumber: string = '';
  @Output() examAdded = new EventEmitter<void>();
  examForm!: FormGroup;
  results: any[] = [];
  showModal = false;

  loading = false;
  resultAccepted = 0;
  resultRejected = 0;
  resultPostponed = 0;

  readonly healthStatusOptions = HEALTH_STATUS_OPTIONS;
  readonly otherOptionValue = OTHER_OPTION_VALUE;
  readonly statusSections: StatusSection[] = [
    { control: 'heart', otherControl: 'heartOther', label: 'جهاز القلب والدوران' },
    { control: 'respiratory', otherControl: 'respiratoryOther', label: 'الجهاز التنفسي' },
    { control: 'digestive', otherControl: 'digestiveOther', label: 'أمراض جهاز الهضم' },
    { control: 'endocrine', otherControl: 'endocrineOther', label: 'أمراض الغدد الصم والتغذية' },
    { control: 'neurology', otherControl: 'neurologyOther', label: 'الأمراض العصبية' },
    { control: 'blood', otherControl: 'bloodOther', label: 'أمراض الدم' },
    { control: 'joints', otherControl: 'jointsOther', label: 'أمراض المفاصل' },
    { control: 'kidney', otherControl: 'kidneyOther', label: 'أمراض الكلية' },
    { control: 'skin', otherControl: 'skinOther', label: 'الأمراض الجلدية' }
  ];

  constructor(
    private fb: FormBuilder,
    private examService: InternalExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const controlsConfig: Record<string, any> = {};
    this.statusSections.forEach(section => {
      controlsConfig[section.control] = ['سليم', Validators.required];
      controlsConfig[section.otherControl] = [''];
    });
    controlsConfig['resultID'] = [null, Validators.required];
    controlsConfig['reason'] = [''];

    this.examForm = this.fb.group(controlsConfig);

    this.examService.getResults().subscribe({
      next: res => {
        this.results = res.data.items;
      },
      error: () => this.toastr.error('❌ فشل جلب النتائج', 'خطأ')
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.examForm.get(controlName);
    if (control?.invalid && control?.touched) {
      if (control.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
    }
    return '';
  }

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
    const payload: Partial<InternalExam> = {
      applicantFileNumber: this.applicantFileNumber,
      doctorID: Number(this.authService.getDoctorId()),
      ...this.buildStatusPayload(),
      resultID: Number(this.examForm.value.resultID),
      reason: this.examForm.value.reason
    };

    this.examService.addInternalExam(payload as InternalExam).subscribe({
      next: () => {
        this.toastr.success('✅ تمت إضافة الفحص بنجاح', 'نجاح');
        this.examForm.reset(this.getDefaultFormValues());
        this.closeModal();
        this.loading = false;
        this.examAdded.emit();
      },
      error: () => {
        this.toastr.error('❌ حدث خطأ أثناء إضافة الفحص', 'خطأ');
        this.loading = false;
      }
    });
  }

  trackBySection(_: number, section: StatusSection): string {
    return section.control;
  }

  trackByStatusOption(_: number, option: { value: string }): string {
    return option.value;
  }

  private buildStatusPayload(): Record<string, string> {
    return this.statusSections.reduce((acc, section) => {
      acc[section.control] = resolveHealthStatusValue(
        this.examForm.value[section.control],
        this.examForm.value[section.otherControl]
      );
      return acc;
    }, {} as Record<string, string>);
  }

  private getDefaultFormValues(): Record<string, unknown> {
    return this.statusSections.reduce((acc, section) => {
      acc[section.control] = 'سليم';
      acc[section.otherControl] = '';
      return acc;
    }, { resultID: null, reason: '' } as Record<string, unknown>);
  }
}
