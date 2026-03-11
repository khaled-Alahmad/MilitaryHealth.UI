import { Component, ViewChild } from '@angular/core';
import { SearchApplicantComponent } from '../../../applicants/components/search-applican/search-applicant.component.ts/search-applicant.component';
import { Applicant } from '../../../applicants/models/applicant.model';
import { CommonModule } from '@angular/common';
import { SurgicalExamForm } from './surgical-exam-form/surgical-exam-form';
import { InvestigationForm } from '../Investigations/investigation-form/investigation-form';
import { ConsultationFormComponent } from '../Consultations/consultation-form.component/consultation-form.component';
import { ToastrService } from 'ngx-toastr';
import { SurgicalExamService } from '../../services/surgical-exam.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-surgery-doctor.component',
  imports: [
    CommonModule,
    PageHeaderComponent,
    SearchApplicantComponent,
    SurgicalExamForm,
    ConsultationFormComponent,
    InvestigationForm
  ],
  templateUrl: './surgery-doctor.component.html',
  styleUrl: './surgery-doctor.component.scss'
})
export class SurgeryDoctorComponent {
  selectedApplicant: Applicant | null = null;
  hasSurgicalExam = false;
  checkingSurgicalExam = false;

  @ViewChild(SurgicalExamForm) surgicalExamForm!: SurgicalExamForm;
  @ViewChild(ConsultationFormComponent) consultationForm!: ConsultationFormComponent;
  @ViewChild(InvestigationForm) investigationForm!: InvestigationForm;

  constructor(
    private toastr: ToastrService,
    private surgicalService: SurgicalExamService
  ) {}

  onApplicantSelected(applicant: Applicant) {
    this.selectedApplicant = applicant;
    this.hasSurgicalExam = false;
    this.checkingSurgicalExam = true;

    if (!applicant?.fileNumber) {
      this.checkingSurgicalExam = false;
      return;
    }

    this.surgicalService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.checkingSurgicalExam = false;
        this.hasSurgicalExam = !!exam;
      },
      error: () => {
        this.checkingSurgicalExam = false;
        this.hasSurgicalExam = false;
      }
    });
  }

  addSurgicalExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    this.surgicalExamForm.openModal();
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

  onSurgicalExamAdded() {
    this.hasSurgicalExam = true;
  }
}
