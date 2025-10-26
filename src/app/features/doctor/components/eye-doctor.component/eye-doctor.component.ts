import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { Applicant } from '../../../applicants/models/applicant.model';
import { EyeExamForm } from './eye-exam-form/eye-exam-form';
import { ConsultationFormComponent } from '../Consultations/consultation-form.component/consultation-form.component';
import { InvestigationForm } from '../Investigations/investigation-form/investigation-form';
import { EyeExamService } from '../../services/eye-exam.service';
import { SearchApplicantComponent } from '../../../applicants/components/search-applican/search-applicant.component.ts/search-applicant.component';

@Component({
  selector: 'app-eye-doctor',
  standalone: true,
  imports: [
    CommonModule,
    SearchApplicantComponent,
    EyeExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ],
  templateUrl: './eye-doctor.component.html',
  styleUrls: ['./eye-doctor.component.scss']
})
export class EyeDoctorComponent {
  selectedApplicant: Applicant | null = null;
  hasEyeExam = true;

  @ViewChild(EyeExamForm) eyeExamForm!: EyeExamForm;
  @ViewChild(ConsultationFormComponent) consultationForm!: ConsultationFormComponent;
  @ViewChild(InvestigationForm) investigationForm!: InvestigationForm;

  constructor(
    private toastr: ToastrService,
    private eyeExamService: EyeExamService
  ) {}

   onApplicantSelected(applicant: Applicant) {
    this.selectedApplicant = applicant;
    this.hasEyeExam = false;

    if (!applicant?.fileNumber) return;

    this.eyeExamService.getByFileNumber(applicant.fileNumber).subscribe({
    next: (response) => {
      this.hasEyeExam = !!(response?.data && response.data.eyeExamID); 
    },
    error: () => this.hasEyeExam = false
  });
   }
  addEyeExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    if (this.hasEyeExam) {
      this.toastr.error('المريض لديه فحص عيني سابق ولا يمكن إضافته مرة أخرى');
      return;
    }
    this.eyeExamForm.openModal();
  }

  addConsultation() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    this.consultationForm.openModal();
  }

  addInvestigation() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    this.investigationForm.openModal();
  }
}
