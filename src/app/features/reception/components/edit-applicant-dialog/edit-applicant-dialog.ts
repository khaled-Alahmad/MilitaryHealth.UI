import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// PrimeNG Components
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

// Models and Services
import { ApplicantModel, ApplicantDetailsModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { MaritalStatusService } from '../../services/marital-status.service';
import { MaritalStatus } from '../../models/marital-status.model';

@Component({
  selector: 'app-edit-applicant-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ToastModule
  ],
  templateUrl: './edit-applicant-dialog.html',
  styleUrl: './edit-applicant-dialog.scss',
  providers: [MessageService]
})
export class EditApplicantDialogComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() applicant: ApplicantModel | ApplicantDetailsModel | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<void>();

  editForm!: FormGroup;
  maritalStatuses: MaritalStatus[] = [];
  loading = false;
  today = new Date().toISOString().split('T')[0]; // ✅ للحد الأقصى لتاريخ المواليد

  constructor(
    private fb: FormBuilder,
    private applicantService: ApplicantService,
    private maritalStatusService: MaritalStatusService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initEditForm();
    this.loadMaritalStatuses();
  }

  ngOnChanges(): void {
    if (this.visible && this.applicant) {
      this.loadApplicantData();
    }
  }

  initEditForm(): void {
    this.editForm = this.fb.group({
      fullName: ['', Validators.required],
      motherName: [''],
      dateOfBirth: [null],
      recruitmentCenter: [''],
      bloodType: [''],
      maritalStatusID: [null, Validators.required],
      job: ['', Validators.required],
      associateNumber: ['', Validators.required],
      // ✅ الحقول الطبية
      height: [null],
      weight: [null],
      bmi: [null],
      bloodPressure: [''],
      pulse: [null],
      tattoo: [false],
      distinctiveMarks: ['']
    });
  }

  loadMaritalStatuses(): void {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: (err) => {
      }
    });
  }

  loadApplicantData(): void {
    if (this.applicant) {
      const dateOfBirth = this.applicant.dateOfBirth 
        ? (typeof this.applicant.dateOfBirth === 'string' 
            ? new Date(this.applicant.dateOfBirth).toISOString().split('T')[0]
            : new Date(this.applicant.dateOfBirth).toISOString().split('T')[0])
        : null;

      this.editForm.patchValue({
        fullName: this.applicant.fullName,
        motherName: this.applicant.motherName || '',
        dateOfBirth: dateOfBirth,
        recruitmentCenter: this.applicant.recruitmentCenter || '',
        bloodType: this.applicant.bloodType || '',
        maritalStatusID: this.applicant.maritalStatusID,
        job: this.applicant.job,
        associateNumber: this.applicant.associateNumber || '',
        // ✅ الحقول الطبية
        height: (this.applicant as any).height || null,
        weight: (this.applicant as any).weight || null,
        bmi: (this.applicant as any).bmi || null,
        bloodPressure: (this.applicant as any).bloodPressure || '',
        pulse: (this.applicant as any).pulse || null,
        tattoo: (this.applicant as any).tattoo || false,
        distinctiveMarks: (this.applicant as any).distinctiveMarks || ''
      });
    }
  }

  closeDialog(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.editForm.reset();
  }

  onSubmit(): void {
    if (this.editForm.invalid || !this.applicant) {
      return;
    }

    this.loading = true;
    const formValue = this.editForm.getRawValue();
    
    // إنشاء كائن للـ API - لا نرسل maritalStatus ككائن، فقط maritalStatusID
    const updatedApplicant = {
      applicantID: this.applicant.applicantID,
      fileNumber: this.applicant.fileNumber,
      fullName: formValue.fullName,
      motherName: formValue.motherName || null,
      dateOfBirth: formValue.dateOfBirth || null,
      recruitmentCenter: formValue.recruitmentCenter || null,
      bloodType: formValue.bloodType || null,
      queueNumber: (this.applicant as any).queueNumber,
      maritalStatusID: formValue.maritalStatusID,
      job: formValue.job,
      height: formValue.height || null,
      weight: formValue.weight || null,
      bmi: formValue.bmi || null,
      bloodPressure: formValue.bloodPressure || '',
      pulse: formValue.pulse || null,
      tattoo: formValue.tattoo || false,
      distinctiveMarks: formValue.distinctiveMarks || '',
      associateNumber: formValue.associateNumber
      // ❌ لا نرسل maritalStatus - الـ backend يحتاج فقط maritalStatusID
    };

    this.applicantService.updateApplicant(this.applicant.applicantID, updatedApplicant as any).subscribe({
      next: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'نجح',
          detail: 'تم تحديث بيانات المنتسب بنجاح'
        });
        this.closeDialog();
        this.onSave.emit();
      },
      error: (err) => {
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

