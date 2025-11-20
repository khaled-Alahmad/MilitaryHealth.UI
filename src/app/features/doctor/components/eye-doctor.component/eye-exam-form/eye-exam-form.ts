// components/eye-doctor/eye-exam-form/eye-exam-form.ts
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Refraction } from '../../../models/refraction.model';
import { RefractionType } from '../../../models/refraction-type.model';
import { Result } from '../../../models/result.model';
import { AuthService } from '../../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { EyeExamService } from '../../../services/eye-exam.service';
import { HEALTH_STATUS_OPTIONS, OTHER_OPTION_VALUE, resolveHealthStatusValue } from '../../../constants/health-status-options';

@Component({
  selector: 'app-eye-exam-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eye-exam-form.html',
  styleUrls: ['./eye-exam-form.scss']
})
export class EyeExamForm implements OnInit {
  @Input() applicantFileNumber: string = '';
  @Output() examAdded = new EventEmitter<void>(); // ✅ إشعار المكون الأب عند إضافة فحص جديد
  examForm!: FormGroup;
  refractionTypes: RefractionType[] = [];
  results: Result[] = [];
  loading = false;
  showModal = false;
  showLeftEye = false;
  readonly healthStatusOptions = HEALTH_STATUS_OPTIONS;
  readonly otherOptionValue = OTHER_OPTION_VALUE;
  private readonly colorTestFields = [
    { control: 'colorTest', otherControl: 'colorTestOther' },
    { control: 'colorTestLeft', otherControl: 'colorTestLeftOther' }
  ];

  constructor(
    private fb: FormBuilder,
    private examService: EyeExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadRefractionTypesAndResults();
  }

  // ---------------------- INIT FORM ----------------------
  private initForm() {
    this.examForm = this.fb.group({
      vision: ['', Validators.required],
      visionLeft: ['', Validators.required],
      colorTest: ['سليم', Validators.required],
      colorTestOther: [''],
      colorTestLeft: ['سليم', Validators.required],
      colorTestLeftOther: [''],
      refractiveError: [''], // حقل قديم - للتوافق مع البيانات القديمة
      worstRefractionRight: ['', Validators.required], // أسوأ انكسار العين اليمنى
      worstRefractionLeft: ['', Validators.required], // أسوأ انكسار العين اليسرى
      otherDiseases: [''],
      resultID: [null, Validators.required],
      reason: [''],
      leftEye: this.fb.group({
        refractions: this.fb.array([])
      }),
      rightEye: this.fb.group({
        refractions: this.fb.array([])
      })
    });
  }

  private loadRefractionTypesAndResults() {
    forkJoin({
      refractionTypes: this.examService.getRefractionTypes(),
      results: this.examService.getResults()
    }).subscribe({
      next: (response) => {
        this.refractionTypes = response.refractionTypes.data.items || [];
        this.results = response.results.data.items || [];
      },
      error: (error) => {
        this.toastr.error('❌ حدث خطأ أثناء تحميل البيانات', 'خطأ');
      }
    });
  }

  // ---------------------- MODAL & EYE TOGGLE ----------------------
  openModal() { this.showModal = true; }
  closeModal() { this.showModal = false; }

  toggleLeftEye() {
    this.showLeftEye = !this.showLeftEye;
    if (!this.showLeftEye) {
      const leftEyeRefractions = this.examForm.get('leftEye.refractions') as FormArray;
      while (leftEyeRefractions.length) leftEyeRefractions.removeAt(0);
    }
  }

  // ---------------------- REFRACTIONS ----------------------
  addRefraction(eye: 'rightEye' | 'leftEye') {
    const refractions = this.examForm.get(`${eye}.refractions`) as FormArray;
    const newRefraction = this.fb.group({
      refractionTypeID: [null, Validators.required],
      refractionValue: [null, Validators.required]
    });
    refractions.push(newRefraction);
  }

  removeRefraction(eye: 'rightEye' | 'leftEye', index: number) {
    const refractions = this.examForm.get(`${eye}.refractions`) as FormArray;
    refractions.removeAt(index);
  }

  getRefractions(eye: 'rightEye' | 'leftEye'): FormArray {
    return this.examForm.get(`${eye}.refractions`) as FormArray;
  }

  // ---------------------- SUBMIT ----------------------
onSubmit() {
  if (this.examForm.invalid) {
    this.toastr.warning('⚠️ يرجى تعبئة جميع الحقول المطلوبة', 'تنبيه');
    return;
  }

  const doctorID = Number(this.authService.getDoctorId());
  if (!doctorID) {
    this.toastr.error('❌ لم يتم العثور على معرف الطبيب', 'خطأ');
    return;
  }

  const leftEyeRefractions = (this.examForm.get('leftEye.refractions') as FormArray).value;
  const rightEyeRefractions = (this.examForm.get('rightEye.refractions') as FormArray).value;

  // جلب الفحص السابق إذا موجود
  this.examService.getByFileNumber(this.applicantFileNumber).subscribe({
    next: (res: any) => {
      const existingExamID = res.data?.eyeExamID ?? null;

      if (res.succeeded && existingExamID) {
        // تعديل فحص موجود
        this.updateEyeExam(existingExamID, doctorID, leftEyeRefractions, rightEyeRefractions);
      } else {
        // إنشاء فحص جديد
        this.createEyeExam(doctorID, leftEyeRefractions, rightEyeRefractions);
      }
    },
    error: () => {
      this.toastr.error('❌ خطأ في جلب بيانات الفحص السابق', 'خطأ');
    }
  });
}

// ---------------- CREATE & UPDATE ----------------
private createEyeExam(doctorID: number, leftEyeRefractions: any[], rightEyeRefractions: any[]) {
  const examData = this.buildExamData(doctorID);
  this.loading = true;

  this.examService.createEyeExam(examData).subscribe({
    next: (response: any) => {
      if (!response.succeeded) {
        this.loading = false;
        this.toastr.error('❌ فشل في إنشاء الفحص', 'خطأ');
        return;
      }

      const newExamID = response.data?.eyeExamID;
      if (newExamID) {
        this.handleExamResponse(response.data, leftEyeRefractions, rightEyeRefractions, false);
      } else {
        this.loading = false;
        this.toastr.error('❌ لم يتم العثور على معرف الفحص بعد الإنشاء', 'خطأ');
      }
    },
    error: (error) => this.handleExamError(error)
  });
}

private updateEyeExam(examId: number, doctorID: number, leftEyeRefractions: any[], rightEyeRefractions: any[]) {
  const examData = { ...this.buildExamData(doctorID), eyeExamID: examId };
  this.loading = true;

  this.examService.updateEyeExam(examId, examData).subscribe({
    next: (response: any) => {
      if (!response.succeeded) {
        this.loading = false;
        this.toastr.error('❌ فشل في تحديث الفحص', 'خطأ');
        return;
      }
      this.handleExamResponse({ eyeExamID: examId }, leftEyeRefractions, rightEyeRefractions, true);
    },
    error: (error) => this.handleExamError(error)
  });
}

// ---------------- BUILD EXAM DATA ----------------
private buildExamData(doctorID: number) {
  return {
    applicantFileNumber: this.applicantFileNumber,
    doctorID,
    vision: this.examForm.value.vision?.toString() || "",
    visionLeft: this.examForm.value.visionLeft?.toString() || "",
      colorTestLeft: resolveHealthStatusValue(
        this.examForm.value.colorTestLeft,
        this.examForm.value.colorTestLeftOther
      ).trim(),
      colorTest: resolveHealthStatusValue(
        this.examForm.value.colorTest,
        this.examForm.value.colorTestOther
      ).trim(),
    refractiveError: this.examForm.value.refractiveError?.trim() || "", // للتوافق مع البيانات القديمة
    worstRefractionRight: this.examForm.value.worstRefractionRight?.trim() || "",
    worstRefractionLeft: this.examForm.value.worstRefractionLeft?.trim() || "",
    otherDiseases: (this.examForm.value.otherDiseases || '').trim(),
    resultID: Number(this.examForm.value.resultID) || 0,
    reason: (this.examForm.value.reason || '').trim()
  };
}

  // ---------------------- HANDLE RESPONSE ----------------------
  private handleExamResponse(examData: any, leftEyeRefractions: any[], rightEyeRefractions: any[], isUpdate: boolean) {
    const examId = examData.eyeExamID;
    const newRefractions: Refraction[] = [];

    const validLeft = leftEyeRefractions.filter(r => r.refractionTypeID && r.refractionValue !== null);
    const validRight = rightEyeRefractions.filter(r => r.refractionTypeID && r.refractionValue !== null);

    validLeft.forEach(r => newRefractions.push({ refractionTypeID: +r.refractionTypeID, refractionValue: +r.refractionValue, isLeft: true, eyeExamID: examId }));
    validRight.forEach(r => newRefractions.push({ refractionTypeID: +r.refractionTypeID, refractionValue: +r.refractionValue, isLeft: false, eyeExamID: examId }));

    if (newRefractions.length === 0) {
      this.toastr.success(isUpdate ? '✅ تم تحديث الفحص بنجاح' : '✅ تمت إضافة الفحص بنجاح');
      this.resetForm();
      // ✅ إشعار المكون الأب عند إضافة فحص جديد (وليس تحديث)
      if (!isUpdate) {
        this.examAdded.emit();
      }
      return;
    }

    forkJoin(newRefractions.map(r => this.examService.addRefraction(r))).subscribe({
      next: (responses: any[]) => {
        const failed = responses.filter(r => !r.succeeded);
        if (failed.length) {
          this.toastr.error(`❌ فشل في إضافة ${failed.length} انكسار`, 'خطأ');
        } else {
          this.toastr.success(isUpdate ? '✅ تم تحديث الفحص والانكسارات بنجاح' : '✅ تمت إضافة الفحص والانكسارات بنجاح');
          // ✅ إشعار المكون الأب عند إضافة فحص جديد (وليس تحديث)
          if (!isUpdate) {
            this.examAdded.emit();
          }
        }
        this.resetForm();
      },
      error: () => {
        this.toastr.error('❌ خطأ أثناء إضافة الانكسارات', 'خطأ');
      },
      complete: () => { this.loading = false; }
    });
  }

  private handleExamError(error: any) {
    this.loading = false;
    let errorMessage = 'حدث خطأ أثناء حفظ الفحص';
    if (error.error?.errors?.detail) {
      const details = error.error.errors.detail;
      errorMessage = Array.isArray(details) ? details.join(', ') : details;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }
    this.toastr.error(`❌ ${errorMessage}`, 'خطأ');
  }

  // ---------------------- RESET ----------------------
  private resetForm() {
    this.examForm.reset({
      vision: '',
      visionLeft: '',
      colorTest: 'سليم',
      colorTestOther: '',
      colorTestLeft: 'سليم',
      colorTestLeftOther: '',
      refractiveError: '',
      worstRefractionRight: '',
      worstRefractionLeft: '',
      otherDiseases: '',
      resultID: null,
      reason: ''
    });

    const leftEyeRefractions = this.examForm.get('leftEye.refractions') as FormArray;
    const rightEyeRefractions = this.examForm.get('rightEye.refractions') as FormArray;
    while (leftEyeRefractions.length) {
      leftEyeRefractions.removeAt(0);
    }
    while (rightEyeRefractions.length) {
      rightEyeRefractions.removeAt(0);
    }

    this.showLeftEye = false;
    this.loading = false;
    this.closeModal();
  }

  // ---------------------- VALIDATION HELPERS ----------------------
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

  isFieldInvalid(controlName: string): boolean {
    const control = this.examForm.get(controlName);
    return !!(control?.invalid && control?.touched);
  }
}
