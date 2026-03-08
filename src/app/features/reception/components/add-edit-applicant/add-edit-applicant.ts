import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, switchMap, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import localAr from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';

// PrimeNG
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';

// Shared
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';

// Models and Services
import { MaritalStatus } from '../../models/marital-status.model';
import { MaritalStatusService } from '../../services/marital-status.service';
import { ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { BarcodePrintService } from '../../services/barcode-print.service';
import { ApiResponse } from '../../../../shared/models/paged-response.model';

registerLocaleData(localAr);

@Component({
  selector: 'app-add-edit-applicant',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    DatePickerModule,
    InputNumberModule,
    TextareaModule,
    ToastModule,
    PageHeaderComponent
  ],
  templateUrl: './add-edit-applicant.html',
  styleUrl: './add-edit-applicant.scss',
  providers: [MessageService]
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
  minDate: Date;
  maxDate: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private maritalStatusService: MaritalStatusService,
    private applicantService: ApplicantService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private messageService: MessageService,
    private barcodePrintService: BarcodePrintService,
    private cdr: ChangeDetectorRef,
  ) {
    const today = new Date();
    this.minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  }

  ngOnInit(): void {
    this.loadForm();
    this.loadMaritalStatuses();

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.applicantId = +id;
        this.loadApplicant(this.applicantId);
      }
    });
  }

  private getFormDefaults() {
    return {
      fullName: '',
      motherName: '',
      dateOfBirth: null as Date | null,
      recruitmentCenter: '',
      bloodType: '',
      maritalStatusID: null as number | null,
      job: '',
      height: null as number | null,
      weight: null as number | null,
      bmi: null as number | null,
      bloodPressure: '',
      pulse: null as number | null,
      tattoo: false,
      tattooDescription: '',
      distinctiveMarks: '',
      associateNumber: '',
    };
  }

  loadForm() {
    const defaults = this.getFormDefaults();
    this.applicantForm = this.fb.group({
      fullName: [defaults.fullName, Validators.required],
      motherName: [defaults.motherName],
      dateOfBirth: [defaults.dateOfBirth],
      recruitmentCenter: [defaults.recruitmentCenter],
      bloodType: [defaults.bloodType],
      maritalStatusID: [defaults.maritalStatusID, Validators.required],
      job: [defaults.job, Validators.required],
      height: [defaults.height],
      weight: [defaults.weight],
      bmi: [defaults.bmi],
      bloodPressure: [defaults.bloodPressure],
      pulse: [defaults.pulse],
      tattoo: [defaults.tattoo],
      tattooDescription: [defaults.tattooDescription],
      distinctiveMarks: [defaults.distinctiveMarks],
      associateNumber: [defaults.associateNumber, Validators.required],
    });
  }

  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: (err) => {
        this.toastr.error('فشل في تحميل الحالات الاجتماعية', 'خطأ');
      },
    });
  }

  loadApplicant(id: number) {
    this.applicantService.getApplicantById$(id).subscribe({
      next: (applicant: ApplicantModel) => {
        const dateOfBirth = this.toDateOnly(applicant.dateOfBirth);
        this.applicantForm.patchValue({
          fullName: applicant.fullName ?? '',
          motherName: applicant.motherName ?? '',
          dateOfBirth,
          recruitmentCenter: applicant.recruitmentCenter ?? '',
          bloodType: applicant.bloodType ?? '',
          maritalStatusID: applicant.maritalStatusID ?? null,
          job: applicant.job ?? '',
          height: applicant.height ?? null,
          weight: applicant.weight ?? null,
          bmi: applicant.bmi ?? null,
          bloodPressure: applicant.bloodPressure ?? '',
          pulse: applicant.pulse ?? null,
          tattoo: applicant.tattoo ?? false,
          tattooDescription: applicant.tattooDescription ?? '',
          distinctiveMarks: applicant.distinctiveMarks ?? '',
          associateNumber: applicant.associateNumber ?? '',
        });
        this.fileNumber = applicant.fileNumber;
        this.cdr.detectChanges();
      },
      error: () => {
        this.toastr.error('فشل في تحميل بيانات المنتسب', 'خطأ');
      },
    });
  }

  preventMinus(event: KeyboardEvent) {
    if (event.key === '-' || event.key === 'e') {
      event.preventDefault();
    }
  }

  resetForm(showMessage: boolean = true) {
    this.applicantForm.reset(this.getFormDefaults());
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
      recruitmentCenter: formValue.recruitmentCenter
        ? (formValue.recruitmentCenter as string).trim()
        : null,
      bloodType: formValue.bloodType ? (formValue.bloodType as string).trim() : null,
      maritalStatusID: Number(formValue.maritalStatusID), // ✅ تحويل إلى رقم
      job: (formValue.job || '').trim(),
      height: formValue.height ? Number(formValue.height) : null,
      weight: formValue.weight ? Number(formValue.weight) : null,
      bmi: formValue.bmi ? Number(formValue.bmi) : null,
      bloodPressure: formValue.bloodPressure ? (formValue.bloodPressure as string).trim() : null,
      pulse: formValue.pulse ? Number(formValue.pulse) : null,
      tattoo: Boolean(formValue.tattoo) || false,
      tattooDescription: formValue.tattooDescription 
        ? (formValue.tattooDescription as string).trim() 
        : null, // ✅ وصف الوشم
      distinctiveMarks: formValue.distinctiveMarks
        ? (formValue.distinctiveMarks as string).trim()
        : null,
      associateNumber: (formValue.associateNumber || '').trim(),
      // ❌ لا نرسل maritalStatus - الـ backend يحتاج فقط maritalStatusID
    };

    this.loading = true;

    if (!this.applicantId) {
      this.applicantService
        .createApplicant(applicantModel as ApplicantModel)
        .pipe(
          // ✅ جلب بيانات المنتسب الكاملة بعد الإنشاء
          switchMap((res: ApiResponse<ApplicantModel>) => {
            this.toastr.success('تمت إضافة منتسب بنجاح', 'نجاح', {
              timeOut: 3000,
              positionClass: 'toast-top-center',
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
          }),
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
          },
        });
    } else {
      this.applicantService.updateApplicant(this.applicantId, applicantModel).subscribe({
        next: () => {
          this.loading = false;
          this.success = true;
          this.messageService.add({
            severity: 'success',
            summary: 'نجاح',
            detail: 'تم تحديث بيانات المنتسب بنجاح',
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
              : (typeof err.error?.errors === 'string' ? err.error.errors : JSON.stringify(err.error?.errors));
          }
          this.toastr.error(errorMsg, 'خطأ');
        },
      });
    }
  }

  get f() {
    return this.applicantForm.controls;
  }

  get hasTattoo(): boolean {
    return !!this.applicantForm.get('tattoo')?.value;
  }

  setTattooChoice(value: boolean): void {
    const tattooControl = this.applicantForm.get('tattoo');
    if (!tattooControl) {
      return;
    }
    tattooControl.setValue(value);
    tattooControl.markAsDirty();
    tattooControl.markAsTouched();
    if (!value) {
      this.applicantForm.get('tattooDescription')?.reset('');
    }
  }

  private toDateOnly(value: Date | string | null | undefined): Date | null {
    if (!value) {
      return null;
    }
    const parsed = typeof value === 'string' ? new Date(value) : new Date(value.getTime());
    if (isNaN(parsed.getTime())) {
      return null;
    }

    return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
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

  printBarcode() {
    if (this.applicantId && this.fileNumber) {
      this.applicantService.getApplicantById$(this.applicantId).subscribe({
        next: (applicant: ApplicantModel) => {
          try {
            this.barcodePrintService.printBarcodeReceipt(applicant);
            this.toastr.success('تمت طباعة الباركود بنجاح', 'نجاح');
          } catch (error) {
            this.toastr.error('فشل في طباعة الباركود', 'خطأ');
          }
        },
        error: () => {
          this.toastr.error('فشل في جلب بيانات المنتسب', 'خطأ');
        },
      });
    }
  }
}
