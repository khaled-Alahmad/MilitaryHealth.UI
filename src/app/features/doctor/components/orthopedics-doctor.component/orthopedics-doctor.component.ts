import { Component, ViewChild } from '@angular/core';
import { SearchApplicantComponent } from '../../../applicants/components/search-applican/search-applicant.component.ts/search-applicant.component';
import { Applicant } from '../../../applicants/models/applicant.model';
import { CommonModule } from '@angular/common';
import { OrthopedicExamFormComponent } from './orthopedic-exam-form.component/orthopedic-exam-form.component';
import { ConsultationFormComponent } from '../Consultations/consultation-form.component/consultation-form.component';
import { InvestigationForm } from '../Investigations/investigation-form/investigation-form';
import { ToastrService } from 'ngx-toastr';
import { OrthopedicExamService } from '../../services/orthopedic-exam.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-orthopedics-doctor.component',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    SearchApplicantComponent,
    OrthopedicExamFormComponent,
    ConsultationFormComponent,
    InvestigationForm
  ],
  templateUrl: './orthopedics-doctor.component.html',
  styleUrls: ['./orthopedics-doctor.component.scss']
})
export class OrthopedicsDoctorComponent {
  selectedApplicant: Applicant | null = null;
  hasOrthopedicExam = false;
  checkingOrthopedicExam = false;

  @ViewChild(OrthopedicExamFormComponent) orthopedicForm!: OrthopedicExamFormComponent;
  @ViewChild(ConsultationFormComponent) consultationForm!: ConsultationFormComponent;
  @ViewChild(InvestigationForm) investigationForm!: InvestigationForm;

  constructor(
    private toastr: ToastrService,
    private orthopedicService: OrthopedicExamService
  ) {}

  onApplicantSelected(applicant: Applicant) {
    this.selectedApplicant = applicant;
    this.hasOrthopedicExam = false;
    this.checkingOrthopedicExam = true;

    if (!applicant?.fileNumber) {
      this.checkingOrthopedicExam = false;
      return;
    }

    this.orthopedicService.getByFileNumber(applicant.fileNumber).subscribe({
      next: (exam) => {
        this.checkingOrthopedicExam = false;
        this.hasOrthopedicExam = !!exam;
      },
      error: () => {
        this.checkingOrthopedicExam = false;
        this.hasOrthopedicExam = false;
      }
    });
  }

  addOrthopedicExam() {
    if (!this.selectedApplicant) {
      this.toastr.warning('يرجى البحث عن مريض أولاً');
      return;
    }
    this.orthopedicForm.openModal();
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

  onOrthopedicExamAdded() {
    this.hasOrthopedicExam = true;
  }
}
