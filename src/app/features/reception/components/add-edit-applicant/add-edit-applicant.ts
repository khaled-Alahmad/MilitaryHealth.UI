import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, switchMap, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

// PrimeNG Components
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
// import { Calendar } from 'primeng/calendar'; // TODO: PrimeNG 20 Calendar - سيتم إضافته لاحقاً

// Models and Services
import { MaritalStatus } from '../../models/marital-status.model';
import { MaritalStatusService } from '../../services/marital-status.service';
import { ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { BarcodePrintService } from '../../services/barcode-print.service';
import { ApiResponse } from '../../../../shared/models/paged-response.model';

@Component({
  selector: 'app-add-edit-applicant',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    // Calendar // TODO: PrimeNG 20 Calendar
  ],
  templateUrl: './add-edit-applicant.html',
  styleUrl: './add-edit-applicant.scss'
})
export class AddEditApplicant implements OnInit {
    applicantForm!: FormGroup;
  maritalStatuses: MaritalStatus[] = [];
  applicantId!: number;
  fileNumber: string = '';
  submitted = false;
  loading = false;
  message = '';
  success = false;

  constructor(
    private fb: FormBuilder,
    private maritalStatusService: MaritalStatusService,
    private applicantService: ApplicantService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private barcodePrintService: BarcodePrintService
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.loadMaritalStatuses();

    this.route.paramMap.subscribe(params => {
  const id = params.get('id');
  if (id) {
    this.applicantId = +id;
    this.loadApplicant(this.applicantId);
  }
});
  }

  loadForm() {
    this.applicantForm = this.fb.group({
      fullName: ['', Validators.required],
      motherName: [''], // ✅ جديد - اختياري
      dateOfBirth: [null], // ✅ جديد - اختياري
      recruitmentCenter: [''], // ✅ جديد - اختياري
      bloodType: [''], // ✅ جديد - اختياري
      maritalStatusID: [null, Validators.required],
      job: ['', Validators.required],
      // ✅ البيانات الطبية غير مطلوبة
      height: [null], // تم إزالة Validators.required
      weight: [null], // تم إزالة Validators.required
      bmi: [null], // تم إزالة Validators.required
      bloodPressure: [''], // تم إزالة Validators.required
      pulse: [null], // تم إزالة Validators.required
      tattoo: [false], // تم إزالة Validators.required
      distinctiveMarks: [''], // ✅ تم إزالة Validators.required
      associateNumber: ['', Validators.required]
    });
  }

  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: (err) => {
        this.toastr.error('فشل في تحميل الحالات الاجتماعية', 'خطأ');
      }
    });
  }

  loadApplicant(id: number) {
    this.applicantService.getApplicantById$(id).subscribe({
      next: (applicant: ApplicantModel) => {
        this.applicantForm.patchValue(applicant); 
        this.fileNumber = applicant.fileNumber;
      },
      error: () => {
        this.toastr.error('فشل في تحميل بيانات المنتسب', 'خطأ');
      }
    });
  }

preventMinus(event: KeyboardEvent) {
  if (event.key === '-' || event.key === 'e') {
    event.preventDefault();
  }
}

resetForm(showMessage: boolean = true) {
  this.applicantForm.reset();
  this.submitted = false;
  if (showMessage) {
    this.toastr.info('تم إعادة تعيين النموذج', 'تم');
  }
}

  onSubmit() {
    this.submitted = true;

    if (this.applicantForm.invalid) {
      this.toastr.warning('يرجى ملء جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    const formValue = this.applicantForm.getRawValue();
    
    // ✅ تحويل البيانات إلى الأنواع الصحيحة قبل الإرسال
    // ملاحظة: لا نرسل maritalStatus ككائن، فقط maritalStatusID
    const applicantModel: any = {
      applicantID: 0,
      fileNumber: '',
      fullName: (formValue.fullName || '').trim(),
      motherName: formValue.motherName ? (formValue.motherName as string).trim() : null,
      dateOfBirth: formValue.dateOfBirth ? new Date(formValue.dateOfBirth).toISOString() : null,
      recruitmentCenter: formValue.recruitmentCenter ? (formValue.recruitmentCenter as string).trim() : null,
      bloodType: formValue.bloodType ? (formValue.bloodType as string).trim() : null,
      maritalStatusID: Number(formValue.maritalStatusID), // ✅ تحويل إلى رقم
      job: (formValue.job || '').trim(),
      height: formValue.height ? Number(formValue.height) : null,
      weight: formValue.weight ? Number(formValue.weight) : null,
      bmi: formValue.bmi ? Number(formValue.bmi) : null,
      bloodPressure: formValue.bloodPressure ? (formValue.bloodPressure as string).trim() : null,
      pulse: formValue.pulse ? Number(formValue.pulse) : null,
      tattoo: Boolean(formValue.tattoo) || false,
      distinctiveMarks: formValue.distinctiveMarks ? (formValue.distinctiveMarks as string).trim() : null,
      associateNumber: (formValue.associateNumber || '').trim()
      // ❌ لا نرسل maritalStatus - الـ backend يحتاج فقط maritalStatusID
    };
    
    this.loading = true;

    if (!this.applicantId) {
      this.applicantService.createApplicant(applicantModel as ApplicantModel)
        .pipe(
          // ✅ جلب بيانات المنتسب الكاملة بعد الإنشاء
          switchMap((res: ApiResponse<ApplicantModel>) => {
            this.toastr.success('تمت إضافة منتسب بنجاح', 'نجاح', {
              timeOut: 3000,
              positionClass: 'toast-top-center'
            });
            this.success = true;
            this.loading = false;
            
            // جلب البيانات الكاملة إذا كان applicantID موجوداً
            if (res.data && res.data.applicantID) {
              return this.applicantService.getApplicantById$(res.data.applicantID);
            } else {
              // إرجاع البيانات المتوفرة
              return of(res.data!);
            }
          }),
          tap(async (fullApplicantData: ApplicantModel) => {
            
            // ✅ طباعة الباركود تلقائياً بعد إنشاء المنتسب
            if (fullApplicantData) {
              try {
                await this.barcodePrintService.printBarcodeReceipt(fullApplicantData);
              } catch (error) {
                this.toastr.warning('تمت إضافة المنتسب بنجاح، لكن فشلت طباعة الباركود', 'تحذير');
              }
            }
            
            this.resetForm(false); // ✅ إعادة تعيين النموذج بدون رسالة
            // ✅ البقاء في نفس الصفحة لإضافة منتسب جديد
          })
        )
        .subscribe({
          error: (err) => {
            this.success = false;
            this.loading = false;
            let errorMsg = 'فشل في إضافة المنتسب';
            if (err?.error?.message) {
              errorMsg = err.error.message;
            } else if (err?.error?.errors) {
              errorMsg = Array.isArray(err.error.errors) 
                ? err.error.errors.join(', ') 
                : err.error.errors;
            }
            this.toastr.error(errorMsg, 'خطأ');
          }
        });
    } else {
      this.applicantService.updateApplicant(this.applicantId, applicantModel).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.toastr.success('تم تحديث بيانات المنتسب بنجاح', 'نجاح', {
            timeOut: 3000,
            positionClass: 'toast-top-center'
          });
        },
        error: (err) => {
          this.success = false;
          this.loading = false;
          let errorMsg = 'فشل في تحديث بيانات المنتسب';
          if (err?.error?.message) {
            errorMsg = err.error.message;
          } else if (err?.error?.errors) {
            errorMsg = Array.isArray(err.error.errors) 
              ? err.error.errors.join(', ') 
              : err.error.errors;
          }
          this.toastr.error(errorMsg, 'خطأ');
        }
      });
    }
  }

  get f() {
    return this.applicantForm.controls;
  }

  isControlValid(controlName: string): boolean {
    const control = this.f[controlName];
    return control.valid && (control.dirty || control.touched || this.submitted);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.f[controlName];
    return control.invalid && (control.dirty || control.touched || this.submitted);
  }

  controlHasError(validation: string, controlName: string): boolean {
    const control = this.f[controlName];
    return control.hasError(validation) && (control.dirty || control.touched || this.submitted);
  }

  isControlTouched(controlName: string): boolean {
    const control = this.f[controlName];
    return control.dirty || control.touched || this.submitted;
  }
}