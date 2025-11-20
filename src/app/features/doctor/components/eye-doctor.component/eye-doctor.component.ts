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
  hasEyeExam = false; // ✅ افتراضياً لا يوجد فحص حتى يتم التحقق
  checkingEyeExam = false; // ✅ حالة التحقق من وجود فحص

  @ViewChild(EyeExamForm) eyeExamForm!: EyeExamForm;
  @ViewChild(ConsultationFormComponent) consultationForm!: ConsultationFormComponent;
  @ViewChild(InvestigationForm) investigationForm!: InvestigationForm;

  constructor(
    private toastr: ToastrService,
    private eyeExamService: EyeExamService
  ) {}

   onApplicantSelected(applicant: Applicant) {
    this.selectedApplicant = applicant;
    this.hasEyeExam = false; // ✅ إعادة تعيين إلى false عند اختيار منتسب جديد
    this.checkingEyeExam = true; // ✅ بدء التحقق

    if (!applicant?.fileNumber) {
    this.hasEyeExam = false;
      this.checkingEyeExam = false;
      return;
    }

     // ✅ التحقق من وجود فحص عيني سابق
    this.eyeExamService.getByFileNumber(applicant.fileNumber).subscribe({
    next: (response) => {
         this.checkingEyeExam = false;
         
         // ✅ التحقق بشكل صريح من وجود فحص
         // يجب أن يكون succeeded = true AND data !== null AND data.eyeExamID موجود
         const hasExam = !!(response?.succeeded && 
                           response.data !== null && 
                           response.data !== undefined &&
                           response.data.eyeExamID !== null &&
                           response.data.eyeExamID !== undefined);
         
         this.hasEyeExam = hasExam;
    },
       error: () => {
         this.checkingEyeExam = false;
         this.hasEyeExam = false; // ✅ في حالة الخطأ، نفترض أنه لا يوجد فحص
       }
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

  // ✅ تحديث حالة الفحص بعد إضافة فحص جديد
  onEyeExamAdded() {
    if (this.selectedApplicant?.fileNumber) {
      this.hasEyeExam = true; // ✅ الآن يوجد فحص عيني
    }
  }
}
