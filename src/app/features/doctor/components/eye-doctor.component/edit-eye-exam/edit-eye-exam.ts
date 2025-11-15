import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Refraction } from '../../../models/refraction.model';
import { RefractionType } from '../../../models/refraction-type.model';
import { Result } from '../../../models/result.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { EyeExam } from '../../../models/eye-exam.model';
import { EyeExamService } from '../../../services/eye-exam.service';
import { HEALTH_STATUS_OPTIONS, OTHER_OPTION_VALUE, normalizeHealthStatus, resolveHealthStatusValue } from '../../../constants/health-status-options';

@Component({
  selector: 'app-edit-eye-exam',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-eye-exam.html',
  styleUrl: './edit-eye-exam.scss'
})
export class EditEyeExam implements OnInit {
  @Output() eyeExamUpdated = new EventEmitter<any>();
  @Input() exam!: EyeExam;
  @Output() dialogClosed = new EventEmitter<boolean>();

  examForm!: FormGroup;
  refractionTypes: RefractionType[] = [];
  results: Result[] = [];
  refractions: Refraction[] = [];

  showLeftEye = false;
  showRightEye = false;
  readonly healthStatusOptions = HEALTH_STATUS_OPTIONS;
  readonly otherOptionValue = OTHER_OPTION_VALUE;
  private readonly colorTestFields = [
    { control: 'colorTest', otherControl: 'colorTestOther' },
    { control: 'colorTestLeft', otherControl: 'colorTestLeftOther' }
  ];

  constructor(
    private fb: FormBuilder,
    private examService: EyeExamService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const colorTestNormalized = normalizeHealthStatus(this.exam.colorTest);
    const colorTestLeftNormalized = normalizeHealthStatus(this.exam.colorTestLeft);

    this.examForm = this.fb.group({
      vision: [this.exam.vision, Validators.required],
      visionLeft: [this.exam.visionLeft || '', Validators.required],
      colorTest: [colorTestNormalized.status, Validators.required],
      colorTestOther: [colorTestNormalized.other],
      colorTestLeft: [colorTestLeftNormalized.status, Validators.required],
      colorTestLeftOther: [colorTestLeftNormalized.other],
      refractiveError: [(this.exam as any).refractiveError || '', Validators.required],
      otherDiseases: [this.exam.otherDiseases || ''],
      resultID: [this.exam.resultID, Validators.required],
      reason: [this.exam.reason || ''],
      leftEye: this.fb.group({
        refractions: this.fb.array([])
      }),
      rightEye: this.fb.group({
        refractions: this.fb.array([])
      })
    });

    // جلب أنواع الانكسار والنتائج
    forkJoin({
      types: this.examService.getRefractionTypes(),
      results: this.examService.getResults()
    }).subscribe({
      next: (response) => {
        this.refractionTypes = response.types.data.items || [];
        this.results = response.results.data.items || [];
      },
      error: (error) => {
        this.toastr.error('❌ حدث خطأ أثناء تحميل البيانات', 'خطأ');
        console.error('Error loading data:', error);
      }
    });

    // استخدام الانكسارات المرسلة أو جلبها من API
    if (this.exam.refractions && this.exam.refractions.length > 0) {
      // استخدام الانكسارات المرسلة
      this.refractions = this.exam.refractions;
      this.loadRefractionsIntoForm();
    } else if (this.exam.eyeExamID) {
      // جلب الانكسارات من API إذا لم تكن مرسلة
      this.examService.getRefractionsByEyeExamId(this.exam.eyeExamID).subscribe({
        next: (response) => {
          this.refractions = response.data || [];
          this.loadRefractionsIntoForm();
        },
        error: (err) => {
          this.toastr.error('❌ حدث خطأ أثناء تحميل الانكسارات', 'خطأ');
        }
      });
    }
  }

  // دالة لتحميل الانكسارات في النموذج
  private loadRefractionsIntoForm() {
    // تصنيف الانكسارات حسب العين
    const leftEyeRefractions = this.refractions.filter((r: Refraction) => r.isLeft);
    const rightEyeRefractions = this.refractions.filter((r: Refraction) => !r.isLeft);

    // تعبئة نموذج الانكسارات للعين اليسرى
    const leftEyeFormArray = this.examForm.get('leftEye.refractions') as FormArray;
    leftEyeRefractions.forEach(refraction => {
      leftEyeFormArray.push(this.fb.group({
        refractionTypeID: [refraction.refractionTypeID, Validators.required],
        refractionValue: [refraction.refractionValue, Validators.required]
      }));
    });

    if (leftEyeRefractions.length > 0) {
      this.showLeftEye = true;
    }

    // تعبئة نموذج الانكسارات للعين اليمنى
    const rightEyeFormArray = this.examForm.get('rightEye.refractions') as FormArray;
    rightEyeRefractions.forEach(refraction => {
      rightEyeFormArray.push(this.fb.group({
        refractionTypeID: [refraction.refractionTypeID, Validators.required],
        refractionValue: [refraction.refractionValue, Validators.required]
      }));
    });

    if (rightEyeRefractions.length > 0) {
      this.showRightEye = true;
    }

    
  }

  // دالة إضافة انكسار جديد
  addRefraction(eye: 'rightEye' | 'leftEye') {
    const refractions = this.examForm.get(`${eye}.refractions`) as FormArray;
    refractions.push(this.fb.group({
      refractionTypeID: [null, Validators.required],
      refractionValue: [null, Validators.required]
    }));
  }

  // دالة حذف انكسار
  removeRefraction(eye: 'rightEye' | 'leftEye', index: number) {
    const refractions = this.examForm.get(`${eye}.refractions`) as FormArray;
    refractions.removeAt(index);
  }

  // دالة للحصول على مصفوفة الانكسارات لعين معينة
  getRefractions(eye: 'rightEye' | 'leftEye'): FormArray {
    return this.examForm.get(`${eye}.refractions`) as FormArray;
  }

 onSubmit() {
  if (!this.exam || this.examForm.invalid) {
    this.toastr.warning('❌ يرجى تعبئة جميع الحقول المطلوبة', 'تحذير');
    return;
  }

  const leftEyeRefractions = (this.examForm.get('leftEye.refractions') as FormArray).value;
  const rightEyeRefractions = (this.examForm.get('rightEye.refractions') as FormArray).value;

  if (!leftEyeRefractions.length && !rightEyeRefractions.length) {
    this.toastr.warning('⚠️ يجب إدخال قياس الانكسار لعين واحدة على الأقل', 'تنبيه');
    return;
  }

  const updatedExam: EyeExam = {
    ...this.exam,
    vision: this.examForm.value.vision,
    visionLeft: this.examForm.value.visionLeft || '',
    colorTest: resolveHealthStatusValue(
      this.examForm.value.colorTest,
      this.examForm.value.colorTestOther
    ),
    colorTestLeft: resolveHealthStatusValue(
      this.examForm.value.colorTestLeft,
      this.examForm.value.colorTestLeftOther
    ),
    refractiveError: this.examForm.value.refractiveError || '',
    otherDiseases: this.examForm.value.otherDiseases || '',
    resultID: Number(this.examForm.value.resultID),
    reason: this.examForm.value.reason || ''
  };

  // تحديث الفحص أولاً
  this.examService.updateEyeExam(this.exam.eyeExamID!, updatedExam).subscribe({
    next: () => {
      this.updateRefractions(leftEyeRefractions, rightEyeRefractions, updatedExam);
    },
    error: () => {
      this.toastr.error('❌ حدث خطأ أثناء تحديث الفحص', 'خطأ');
    }
  });
}

private updateRefractions(
  leftEyeRefractions: any[],
  rightEyeRefractions: any[],
  updatedExam: EyeExam
) {
  const allCurrentRefractions = [...this.refractions];
  const allNewRefractions: Refraction[] = [];

  // ✅ تصفية الانكسارات للعين اليسرى
  const validLeftRefractions = leftEyeRefractions.filter((r: any) =>
    r.refractionTypeID && r.refractionValue !== null && r.refractionValue !== undefined && r.refractionValue !== ''
  );

  // ✅ تصفية الانكسارات للعين اليمنى
  const validRightRefractions = rightEyeRefractions.filter((r: any) =>
    r.refractionTypeID && r.refractionValue !== null && r.refractionValue !== undefined && r.refractionValue !== ''
  );

  // ✅ تجميع الانكسارات الجديدة
  validLeftRefractions.forEach((refraction: any) => {
    allNewRefractions.push({
      refractionID: 0,
      refractionTypeID: Number(refraction.refractionTypeID),
      refractionValue: Number(refraction.refractionValue),
      isLeft: true,
      eyeExamID: this.exam.eyeExamID!
    });
  });

  validRightRefractions.forEach((refraction: any) => {
    allNewRefractions.push({
      refractionID: 0,
      refractionTypeID: Number(refraction.refractionTypeID),
      refractionValue: Number(refraction.refractionValue),
      isLeft: false,
      eyeExamID: this.exam.eyeExamID!
    });
  });

  // ✅ تحديد ما يجب حذفه وتحديثه وإضافته
  const refractionsToDelete: Refraction[] = [];
  const refractionsToUpdate: { old: Refraction, new: Refraction }[] = [];
  const refractionsToAdd: Refraction[] = [];

  allCurrentRefractions.forEach(oldRefraction => {
    const matchingNewRefraction = allNewRefractions.find(newRefraction =>
      newRefraction.refractionTypeID === oldRefraction.refractionTypeID &&
      newRefraction.isLeft === oldRefraction.isLeft
    );

    if (matchingNewRefraction) {
      if (matchingNewRefraction.refractionValue !== oldRefraction.refractionValue) {
        refractionsToUpdate.push({
          old: oldRefraction,
          new: { ...matchingNewRefraction, refractionID: oldRefraction.refractionID }
        });
      }
      const index = allNewRefractions.indexOf(matchingNewRefraction);
      allNewRefractions.splice(index, 1);
    } else {
      refractionsToDelete.push(oldRefraction);
    }
  });

  refractionsToAdd.push(...allNewRefractions);

  // ✅ تنفيذ العمليات
  const operations: any[] = [];

  refractionsToDelete.forEach(refraction => {
    operations.push(this.examService.deleteRefraction(refraction.refractionID!));
  });

  refractionsToUpdate.forEach(({ old, new: updated }) => {
    operations.push(this.examService.updateRefraction(old.refractionID!, updated));
  });

  refractionsToAdd.forEach(refraction => {
    operations.push(this.examService.addRefraction(refraction));
  });

  if (operations.length === 0) {
    this.toastr.success('✅ تم تحديث الفحص والانكسارات بنجاح', 'نجاح');
    this.eyeExamUpdated.emit(updatedExam);
    this.modalService.dismissAll();
    return;
  }

  forkJoin(operations).subscribe({
    next: (responses: any[]) => {
      const failedOperations = responses.filter(r => !r.succeeded);

      if (failedOperations.length > 0) {
        this.toastr.error(`❌ فشل في ${failedOperations.length} عملية من أصل ${responses.length}`, 'خطأ');
        return;
      }

      this.toastr.success('✅ تم تحديث الفحص والانكسارات بنجاح', 'نجاح');
      this.eyeExamUpdated.emit(updatedExam);
      this.modalService.dismissAll();
    },
    error: (error) => {
      this.toastr.error('❌ حدث خطأ أثناء تحديث الانكسارات', 'خطأ');
      console.error('Error updating refractions:', error);
    }
  });
}


  cancel() {
    this.modalService.dismissAll();
  }

  toggleLeftEye() {
    this.showLeftEye = !this.showLeftEye;
    if (!this.showLeftEye) {
      const leftEyeArray = this.examForm.get('leftEye.refractions') as FormArray;
      leftEyeArray.clear(); // مسح المصفوفة بدل patchValue
    }
  }

  toggleRightEye() {
    this.showRightEye = !this.showRightEye;
    if (!this.showRightEye) {
      const rightEyeArray = this.examForm.get('rightEye.refractions') as FormArray;
      rightEyeArray.clear();
    }
  }
}
