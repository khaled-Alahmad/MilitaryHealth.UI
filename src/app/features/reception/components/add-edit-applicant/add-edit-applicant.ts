import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

// PrimeNG Components
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

// Models and Services
import { MaritalStatus } from '../../models/marital-status.model';
import { MaritalStatusService } from '../../services/marital-status.service';
import { ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
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
    ToastModule
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

  constructor(
    private fb: FormBuilder,
    private maritalStatusService: MaritalStatusService,
    private applicantService: ApplicantService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
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
      maritalStatusID: [null, Validators.required],
      job: ['', Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      bmi: [null, Validators.required],
      bloodPressure: ['', Validators.required],
      pulse: [null, Validators.required],
      tattoo: [false, Validators.required],
      distinctiveMarks: ['', Validators.required],
      associateNumber: ['', Validators.required]
    });
  }

  loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: (err) => {
        console.error('Error fetching marital statuses', err);
        this.messageService.add({
          severity: 'error',
          summary: 'خطأ',
          detail: 'فشل في تحميل الحالات الاجتماعية'
        });
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
        console.error('Error fetching applicant data');
        this.messageService.add({
          severity: 'error',
          summary: 'خطأ',
          detail: 'فشل في تحميل بيانات المنتسب'
        });
      }
    });
  }

preventMinus(event: KeyboardEvent) {
  if (event.key === '-' || event.key === 'e') {
    event.preventDefault();
  }
}

resetForm() {
  this.applicantForm.reset();
  this.submitted = false;
  this.messageService.add({
    severity: 'info',
    summary: 'تم',
    detail: 'تم إعادة تعيين النموذج'
  });
}

  onSubmit() {
    this.submitted = true;

    const applicantModel: ApplicantModel = this.applicantForm.getRawValue();
    this.loading = true;

    if (!this.applicantId) {
      this.applicantService.createApplicant(applicantModel)
        .pipe(
          tap((res: ApiResponse<ApplicantModel>) => {
            this.messageService.add({
              severity: 'success',
              summary: 'نجح',
              detail: 'تمت إضافة منتسب بنجاح'
            });
            this.success = true;
            this.loading = false;
            this.resetForm();
            this.router.navigate(['reception/applicants/add']);
          })
        )
        .subscribe({
          error: (err) => {
            this.success = false;
            this.loading = false;
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في إضافة المنتسب'
            });
          }
        });
    } else {
      this.applicantService.updateApplicant(this.applicantId, applicantModel).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'نجح',
            detail: 'تم تحديث بيانات المنتسب بنجاح'
          });
        },
        error: (err) => {
          this.success = false;
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'خطأ',
            detail: 'فشل في تحديث بيانات المنتسب'
          });
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