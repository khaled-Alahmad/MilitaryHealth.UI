import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { Applicant } from '../../../applicants/models/applicant.model';
import { EarClinicExamForm } from './ear-clinic-exam-form/ear-clinic-exam-form';
import { ConsultationFormComponent } from '../Consultations/consultation-form.component/consultation-form.component';
import { InvestigationForm } from '../Investigations/investigation-form/investigation-form';
import { EarClinicExamService } from '../../services/ear-clinic-exam.service';
import { SearchApplicantComponent } from '../../../applicants/components/search-applican/search-applicant.component.ts/search-applicant.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-ear-doctor',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
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
  checkingEarExam = false;

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
    this.checkingEarExam = true;

    if (!applicant?.fileNumber) {
      this.hasEarClinicExam = false;
      this.checkingEarExam = false;
      return;
    }

    this.earClinicExamService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.checkingEarExam = false;
        this.hasEarClinicExam = !!(exam && exam.earClinicID);
      },
      error: () => {
        this.checkingEarExam = false;
        this.hasEarClinicExam = false;
      }
    });
  }

  onEarExamAdded() {
    this.hasEarClinicExam = true;
  }

  addEarClinicExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    if (this.hasEarClinicExam) {
      this.toastr.error('المريض لديه فحص أذني سابق ولا يمكن إضافته مرة أخرى');
      return;
    }
    this.earClinicExamForm?.addEarClinicExam();
  }

  addConsultation() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    this.consultationForm?.openModal();
  }

  addInvestigation() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    this.investigationForm?.openModal();
  }
}

