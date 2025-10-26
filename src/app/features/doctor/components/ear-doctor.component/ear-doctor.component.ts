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
    this.hasEarClinicExam = false;

    if (!applicant?.fileNumber) return;

    this.earClinicExamService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.hasEarClinicExam = !!(exam && exam.earClinicID); 
      },
      error: () => this.hasEarClinicExam = false
    });
  }

  onExamSaved() {
    this.toastr.success('تم حفظ فحص الأذن والأنف والحنجرة بنجاح');
    this.hasEarClinicExam = true;
  }

  onConsultationSaved() {
    this.toastr.success('تم حفظ الاستشارة بنجاح');
  }

  onInvestigationSaved() {
    this.toastr.success('تم حفظ التحليل بنجاح');
  }

  resetForms() {
    this.earClinicExamForm?.resetForm();
    // المكونات المشتركة لا تحتاج resetForm
  }

  addEarClinicExam() {
    this.earClinicExamForm?.addEarClinicExam();
  }

  addConsultation() {
    this.consultationForm?.openModal();
  }

  addInvestigation() {
    this.investigationForm?.openModal();
  }
}
