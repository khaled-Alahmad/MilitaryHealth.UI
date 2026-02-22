import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { Applicant } from '../../../applicants/models/applicant.model';
import { EarClinicExamForm } from './ear-clinic-exam-form/ear-clinic-exam-form';
import { ConsultationFormComponent } from '../Consultations/consultation-form.component/consultation-form.component';
import { InvestigationForm } from '../Investigations/investigation-form/investigation-form';
import { EarClinicExamService } from '../../services/ear-clinic-exam.service';
import { SearchApplicantComponent } from '../../../applicants/components/search-applican/search-applicant.component.ts/search-applicant.component';

@Component({
  selector: 'app-ear-doctor',
  standalone: true,
  imports: [
    CommonModule,
    SearchApplicantComponent,
    EarClinicExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ],
  templateUrl: './ear-doctor.component.html',
  styleUrls: ['./ear-doctor.component.scss']
})
export class EarDoctorComponent {
  selectedApplicant: Applicant | null = null;
  hasEarClinicExam = false;

  @ViewChild(EarClinicExamForm) earClinicExamForm!: EarClinicExamForm;
  @ViewChild(ConsultationFormComponent) consultationForm!: ConsultationFormComponent;
  @ViewChild(InvestigationForm) investigationForm!: InvestigationForm;

  constructor(
    private toastr: ToastrService,
    private earClinicExamService: EarClinicExamService
  ) {}

  onApplicantSelected(applicant: Applicant) {
    this.selectedApplicant = applicant;

    if (!applicant?.fileNumber) {
      this.hasEarClinicExam = false;
      return;
    }

    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ÙˆØ¬ÙˆØ¯ ÙØ­Øµ Ø³Ø§Ø¨Ù‚
    this.earClinicExamService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.hasEarClinicExam = !!(exam && exam.earClinicID); 
      },
      error: () => this.hasEarClinicExam = false
    });
  }

  onEarExamAdded() {
    this.hasEarClinicExam = true;
  }

  onConsultationSaved() {
    this.toastr.success('ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø© Ø¨Ù†Ø¬Ø§Ø­');
  }

  onInvestigationSaved() {
    this.toastr.success('ØªÙ… Ø­ÙØ¸ Ø§Ù„ØªØ­Ù„ÙŠÙ„ Ø¨Ù†Ø¬Ø§Ø­');
  }

  resetForms() {
    this.earClinicExamForm?.resetForm();
    // Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ù„Ø§ ØªØ­ØªØ§Ø¬ resetForm
  }

  addEarClinicExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning('ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ù…Ø±ÙŠØ¶ Ø£ÙˆÙ„Ø§Ù‹');
      return;
    }
    this.earClinicExamForm?.addEarClinicExam();
  }

  addConsultation() {
    if (!this.selectedApplicant) {
      this.toastr.warning('ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ù…Ø±ÙŠØ¶ Ø£ÙˆÙ„Ø§Ù‹');
      return;
    }
    this.consultationForm?.openModal();
  }

  addInvestigation() {
    if (!this.selectedApplicant) {
      this.toastr.warning('ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ù…Ø±ÙŠØ¶ Ø£ÙˆÙ„Ø§Ù‹');
      return;
    }
    this.investigationForm?.openModal();
  }
}

