import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Refraction } from '../../../models/refraction.model';
import { RefractionType } from '../../../models/refraction-type.model';
import { Result } from '../../../models/result.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, of, Observable } from 'rxjs';
import { EyeExam } from '../../../models/eye-exam.model';
import { EyeExamService } from '../../../services/eye-exam.service';
import { HEALTH_STATUS_OPTIONS, OTHER_OPTION_VALUE, normalizeHealthStatus, resolveHealthStatusValue } from '../../../constants/health-status-options';
import { ApiResponse } from '../../../../applicants/models/api-response.model';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';

@Component({
  selector: 'app-edit-eye-exam',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-eye-exam.html',
  styleUrl: './edit-eye-exam.scss'
})
export class EditEyeExam implements OnInit {
  @Output() eyeExamUpdated = new EventEmitter<any>();
  @Output() dialogClosed = new EventEmitter<boolean>();

  private _exam!: EyeExam;
  private formInitialized = false;

  @Input() 
  set exam(value: EyeExam) {
    this._exam = value;
    // ✅ تهيئة النموذج عند تعيين exam
    if (value && !this.formInitialized) {
      this.initializeForm();
    }
  }
  
  get exam(): EyeExam {
    return this._exam;
  }

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
    // ✅ إذا كان exam محملاً بالفعل، قم بتهيئة النموذج
    if (this.exam && !this.formInitialized) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    if (!this.exam) {
      return;
    }

    this.formInitialized = true;
    const colorTestNormalized = normalizeHealthStatus(this.exam.colorTest || '');
    const colorTestLeftNormalized = normalizeHealthStatus(this.exam.colorTestLeft || '');

    // ✅ تنظيف البيانات من المسافات الزائدة
    const vision = (this.exam.vision || '').toString().trim();
    const visionLeft = (this.exam.visionLeft || '').toString().trim();
    
    // ✅ الحصول على أسوأ الانكسار - محاولة من الحقول الجديدة أولاً، ثم القديمة
    let worstRefractionRight = '';
    let worstRefractionLeft = '';
    
    if (this.exam.worstRefractionRight) {
      worstRefractionRight = this.exam.worstRefractionRight.toString().trim();
    } else if ((this.exam as any).refractiveError) {
      worstRefractionRight = (this.exam as any).refractiveError.toString().trim();
    }
    
    if (this.exam.worstRefractionLeft) {
      worstRefractionLeft = this.exam.worstRefractionLeft.toString().trim();
    } else if ((this.exam as any).refractiveError) {
      worstRefractionLeft = (this.exam as any).refractiveError.toString().trim();
    }

    this.examForm = this.fb.group({
      vision: [vision, Validators.required],
      visionLeft: [visionLeft, Validators.required],
      colorTest: [colorTestNormalized.status, Validators.required],
      colorTestOther: [colorTestNormalized.other],
      colorTestLeft: [colorTestLeftNormalized.status, Validators.required],
      colorTestLeftOther: [colorTestLeftNormalized.other],
      refractiveError: [(this.exam as any).refractiveError || ''], // حقل قديم - للتوافق
      worstRefractionRight: [worstRefractionRight || '', Validators.required],
      worstRefractionLeft: [worstRefractionLeft || '', Validators.required],
      otherDiseases: [(this.exam.otherDiseases || '').trim()],
      resultID: [this.exam.resultID, Validators.required],
      reason: [(this.exam.reason || '').trim()],
      leftEye: this.fb.group({
        refractions: this.fb.array([])
      }),
      rightEye: this.fb.group({
        refractions: this.fb.array([])
      })
    });

    // ✅ تحميل الانكسارات أولاً من exam إذا كانت موجودة
    const hasRefractionsInExam = this.exam.refractions && this.exam.refractions.length > 0;
    if (hasRefractionsInExam) {
      this.refractions = [...(this.exam.refractions || [])];
    } else {
      this.refractions = [];
    }

    // جلب أنواع الانكسار والنتائج والانكسارات معاً
    const requests: {
      types: Observable<ApiResponse<PagedResponse<RefractionType>>>;
      results: Observable<ApiResponse<PagedResponse<Result>>>;
      refractions: Observable<ApiResponse<Refraction[]>>;
    } = {
      types: this.examService.getRefractionTypes(),
      results: this.examService.getResults(),
      refractions: !hasRefractionsInExam && this.exam.eyeExamID
        ? this.examService.getRefractionsByEyeExamId(this.exam.eyeExamID)
        : of({ succeeded: true, status: 200, message: '', data: (this.refractions || []) as Refraction[], traceId: '' } as ApiResponse<Refraction[]>)
    };

    forkJoin(requests).subscribe({
      next: (response: {
        types: ApiResponse<PagedResponse<RefractionType>>;
        results: ApiResponse<PagedResponse<Result>>;
        refractions: ApiResponse<Refraction[]>;
      }) => {
        this.refractionTypes = response.types.data?.items || [];
        this.results = response.results.data?.items || [];
        
        // ✅ تحميل الانكسارات - استخدام البيانات من exam أولاً، ثم من API إذا لم تكن موجودة
        if (!hasRefractionsInExam && response.refractions) {
          if (response.refractions.succeeded && response.refractions.data && response.refractions.data.length > 0) {
            this.refractions = response.refractions.data;
          } else {
            this.refractions = this.exam.refractions || [];
          }
        }
        
        // ✅ تحميل الانكسارات في النموذج بعد تحميل أنواع الانكسار
        // استخدام setTimeout لضمان أن النموذج جاهز
        setTimeout(() => {
          this.loadRefractionsIntoForm();
        }, 100);
      },
      error: () => {
        this.toastr.error('❌ حدث خطأ أثناء تحميل البيانات', 'خطأ');
        // ✅ محاولة تحميل الانكسارات من exam مباشرة
        this.refractions = this.exam.refractions || [];
        setTimeout(() => {
          this.loadRefractionsIntoForm();
        }, 100);
        }
      });
  }

  // دالة لتحميل الانكسارات في النموذج
  private loadRefractionsIntoForm() {
    if (!this.examForm) {
      return;
    }

    // ✅ مسح المصفوفات الموجودة أولاً
    const leftEyeFormArray = this.examForm.get('leftEye.refractions') as FormArray;
    const rightEyeFormArray = this.examForm.get('rightEye.refractions') as FormArray;
    
    if (!leftEyeFormArray || !rightEyeFormArray) {
      return;
    }
    
    while (leftEyeFormArray.length !== 0) {
      leftEyeFormArray.removeAt(0);
    }
    while (rightEyeFormArray.length !== 0) {
      rightEyeFormArray.removeAt(0);
    }

    // تصنيف الانكسارات حسب العين
    const leftEyeRefractions = (this.refractions || []).filter((r: Refraction) => r.isLeft === true);
    const rightEyeRefractions = (this.refractions || []).filter((r: Refraction) => r.isLeft === false);

    // تعبئة نموذج الانكسارات للعين اليسرى
    leftEyeRefractions.forEach((refraction) => {
      if (refraction.refractionTypeID && refraction.refractionValue !== null && refraction.refractionValue !== undefined) {
        const refractionGroup = this.fb.group({
        refractionTypeID: [refraction.refractionTypeID, Validators.required],
        refractionValue: [refraction.refractionValue, Validators.required]
        });
        leftEyeFormArray.push(refractionGroup);
      }
    });

    if (leftEyeRefractions.length > 0) {
      this.showLeftEye = true;
    }

    // تعبئة نموذج الانكسارات للعين اليمنى
    rightEyeRefractions.forEach((refraction) => {
      if (refraction.refractionTypeID && refraction.refractionValue !== null && refraction.refractionValue !== undefined) {
        const refractionGroup = this.fb.group({
        refractionTypeID: [refraction.refractionTypeID, Validators.required],
        refractionValue: [refraction.refractionValue, Validators.required]
        });
        rightEyeFormArray.push(refractionGroup);
      }
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
    this.toastr.warning('يرجى تعبئة جميع الحقول المطلوبة', 'تنبيه');
    return;
  }

  const leftEyeRefractions = (this.examForm.get('leftEye.refractions') as FormArray).value;
  const rightEyeRefractions = (this.examForm.get('rightEye.refractions') as FormArray).value;

  if (!leftEyeRefractions.length && !rightEyeRefractions.length) {
    this.toastr.warning('يجب إدخال قياس الانكسار لعين واحدة على الأقل', 'تنبيه');
    return;
  }

  const v = this.examForm.value;
  // تحويل كل القيم بشكل صريح لضمان إرسالها بالشكل الذي يتوقعه الـ API
  const updatedExam: EyeExam = {
    eyeExamID: this.exam.eyeExamID,
    applicantFileNumber: this.exam.applicantFileNumber,
    doctorID: this.exam.doctorID,
    vision: v.vision != null && v.vision !== '' ? String(v.vision).trim() : (this.exam.vision || ''),
    visionLeft: v.visionLeft != null && v.visionLeft !== '' ? String(v.visionLeft).trim() : (this.exam.visionLeft || ''),
    colorTest: resolveHealthStatusValue(v.colorTest, v.colorTestOther),
    colorTestLeft: resolveHealthStatusValue(v.colorTestLeft, v.colorTestLeftOther),
    refractiveError: ((v.refractiveError != null ? String(v.refractiveError) : '') || '').trim(),
    worstRefractionRight: ((v.worstRefractionRight != null ? String(v.worstRefractionRight) : '') || '').trim() || (this.exam.worstRefractionRight ?? ''),
    worstRefractionLeft: ((v.worstRefractionLeft != null ? String(v.worstRefractionLeft) : '') || '').trim() || (this.exam.worstRefractionLeft ?? ''),
    otherDiseases: ((v.otherDiseases != null ? String(v.otherDiseases) : '') || '').trim(),
    resultID: Number(v.resultID) || this.exam.resultID,
    reason: ((v.reason != null ? String(v.reason) : '') || '').trim()
  };

  // تحديث الفحص أولاً (بدون إرسال مصفوفة الانكسارات؛ تُحدَّث لاحقاً عبر updateRefractions)
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
