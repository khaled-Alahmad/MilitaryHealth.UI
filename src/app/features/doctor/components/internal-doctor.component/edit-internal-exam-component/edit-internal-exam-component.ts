import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InternalExam } from '../../../models/internal-exam.model';
import { InternalExamService } from '../../../services/internal-exam.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { HEALTH_STATUS_OPTIONS, OTHER_OPTION_VALUE, normalizeHealthStatus, resolveHealthStatusValue } from '../../../constants/health-status-options';

@Component({
  selector: 'app-edit-internal-exam-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-internal-exam-component.html',
  styleUrl: './edit-internal-exam-component.scss'
})
export class EditInternalExamComponent {
  @Input() exam!: InternalExam;
  @Output() dialogClosed = new EventEmitter<boolean>();

  examForm!: FormGroup;
  results: any[] = [];
  loading: boolean = false;
  resultAccepted: number = 0;
  resultRejected: number = 0;
  resultPostponed: number = 0;
  readonly healthStatusOptions = HEALTH_STATUS_OPTIONS;
  readonly otherOptionValue = OTHER_OPTION_VALUE;
  readonly statusSections = [
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
    private toastr: ToastrService // ✅ أضفنا toastr
  ) {}

  ngOnInit(): void {
    const controlsConfig: Record<string, any> = {};
    this.statusSections.forEach(section => {
      const normalized = normalizeHealthStatus((this.exam as any)?.[section.control]);
      controlsConfig[section.control] = [normalized.status, Validators.required];
      controlsConfig[section.otherControl] = [normalized.other];
    });
    controlsConfig['resultID'] = [this.exam?.resultID || null, Validators.required];
    controlsConfig['reason'] = [this.exam?.reason || ''];

    this.examForm = this.fb.group(controlsConfig);

    this.examService.getResults().subscribe({
      next: (res: any) => {
        this.results = res.data?.items || [];
        
        // بعد تحديد IDs، قم بتحديث قيم الـ form
        if (this.exam?.resultID) {
          this.examForm.patchValue({ resultID: this.exam.resultID });
        }
      },
      error: () => this.toastr.error('❌ فشل جلب قائمة النتائج', 'خطأ')
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

  onSubmit() {
    if (!this.exam?.internalExamID) {
      this.toastr.error('❌ لا يمكن التحديث: لا يوجد ID للفحص', 'خطأ');
      return;
    }

    if (this.examForm.invalid) {
      this.toastr.warning('❌ يرجى تعبئة جميع الحقول المطلوبة', 'تنبيه');
      return;
    }

    this.loading = true;
    const updatedExam: InternalExam = {
      ...this.exam,
      ...this.buildStatusPayload(),
      resultID: Number(this.examForm.value.resultID)
    };

    const examID: number = updatedExam.internalExamID!;

    this.examService.updateInternalExam(examID, updatedExam).subscribe({
      next: () => {
        this.toastr.success('✅ تم التحديث بنجاح', 'نجاح');
        this.exam.resultID = updatedExam.resultID;
        this.dialogClosed.emit(true);
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ فشل التحديث، تحقق من ID أو الاتصال بالإنترنت', 'خطأ');
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.dialogClosed.emit(false);
  }

  trackBySection(_: number, section: { control: string }): string {
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
}
