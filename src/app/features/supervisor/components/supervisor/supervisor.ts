import { Component, OnInit } from '@angular/core';
import { ApplicantDetailsModel, ApplicantModel } from '../../../reception/models/applicant.model';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LookupService } from '../../../../shared/services/lookup.service';
import { Result } from '../../../../shared/models/result.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { DecisionService } from '../../services/decision.service';
import { FinalDecisionModel } from '../../models/final-decision.model';
import { MaritalStatusService } from '../../../reception/services/marital-status.service';
import { MaritalStatus } from '../../../reception/models/marital-status.model';
@Component({
  selector: 'app-supervisor',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.scss'
})
export class Supervisor implements OnInit {
  searchValue: string = '';
  applicant!: ApplicantDetailsModel;
  results: Result[] = [];
  decisionModel!: FinalDecisionModel;
  maritalStatuses: MaritalStatus[] = [];

  rejectedId: number | null = null;
  postponedId: number | null = null;
 acceptedId: number | null = null;
  responseMessage: string = '';
  responseSuccess: boolean = false;

  isApproved: boolean = true;
  isAccept : boolean = false;
  constructor(private applicantService: ApplicantService, private lookupService: LookupService,
    private decisionService: DecisionService, private maritalStatusService: MaritalStatusService
  ) { }
  ngOnInit(): void {
    this.loadResults();
    this.loadMaritalStatuses();
  }

  loadApplicants() {
    this.applicant = undefined!;
    this.decisionModel = undefined!;
    this.responseMessage = '';
    this.responseSuccess = false;

    if (!this.searchValue?.trim()) {
      this.responseMessage = 'يرجى إدخال رقم الملف للبحث';
      this.responseSuccess = false;
      return;
    }
    this.applicantService.getApplicantByFileNumber$(this.searchValue).subscribe({
      next: (applicantDetails: ApplicantDetailsModel) => {
        if (applicantDetails) {
          this.applicant = applicantDetails;
          this.mapApplicantToDecision(applicantDetails);

        } else {
          this.responseMessage = 'لم يتم العثور على المنتسب';
          this.responseSuccess = false;
        }
      },
      error: () => {
      this.applicant = undefined!;
      this.decisionModel = undefined!;
      this.responseMessage = 'لم يتم العثور على المنتسب';
      this.responseSuccess = false;
    }
    });
  }
   loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: (err) => console.error('Error fetching marital statuses', err)
    });
  }
  getMaritalStatusDescription(id: number): string {
  const status = this.maritalStatuses.find(s => s.maritalStatusID === id);
  return status ? status.description : 'غير محدد';
}

  loadResults() {
    this.lookupService.getResults().subscribe({
      next: (data) => {
        this.results = data;
        const rejected = this.results.find(r => r.description == 'مرفوض');
        const postponed = this.results.find(r => r.description == 'مؤجل');
        const approved = this.results.find(r => r.description == 'مقبول');
        this.rejectedId = rejected ? rejected.resultID : null;
        this.postponedId = postponed ? postponed.resultID : null;
        this.acceptedId = approved ? approved.resultID : null;
      },
      error: (err) => console.error('Error fetching results', err)
    });
  }
  private mapApplicantToDecision(applicant: ApplicantDetailsModel) {
    console.log('🔍 Mapping Applicant to Decision');
    console.log('🔍 EarClinic ID:', applicant.earClinic?.earClinicID);
    
    this.decisionModel = {
      orthopedicExamID: applicant.orthopedicExamDto?.orthopedicExamID || 0,
      surgicalExamID: applicant.surgicalExam?.surgicalExamID || 0,
      internalExamID: applicant.internalExam?.internalExamID || 0,
      eyeExamID: applicant.eyeExam?.eyeExamID || 0,
      earClinicID: applicant.earClinic?.earClinicID || 0,
      applicantFileNumber: applicant.fileNumber,
      resultID: 0,
      reason: '',
      postponeDuration: '',
      decisionDate: new Date().toISOString().split('T')[0]
    };
    
    console.log('🔍 Decision Model after mapping:', this.decisionModel);
  }
  onResultChange(selectedId: number) {
    if (selectedId === this.postponedId) {
      this.isApproved = false;
    } else {
      this.isApproved = true;
      this.decisionModel.postponeDuration = '';
    }
    if(selectedId == this.acceptedId){
      this.isAccept = true;
    }else{
      this.isAccept = false;
    }
  }

  submitDecision() {
    // 🔍 Debug: طباعة البيانات المرسلة
    console.log('🔍 Decision Model:', this.decisionModel);
    console.log('🔍 Decision Model Keys:', Object.keys(this.decisionModel));
    console.log('🔍 Decision Model Values:', Object.values(this.decisionModel));
    console.log('🔍 Applicant EarClinic:', this.applicant?.earClinic);
    
    // التحقق من وجود earClinicID في البيانات
    if ('earClinicID' in this.decisionModel) {
      console.log('✅ earClinicID exists in decisionModel:', this.decisionModel.earClinicID);
    } else {
      console.error('❌ earClinicID missing from decisionModel!');
    }
    
    // التحقق من صحة البيانات قبل الإرسال
    const requiredFields = ['orthopedicExamID', 'surgicalExamID', 'internalExamID', 'eyeExamID', 'applicantFileNumber', 'resultID', 'decisionDate'];
    const missingFields = requiredFields.filter(field => !this.decisionModel[field as keyof typeof this.decisionModel]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      this.responseMessage = 'بيانات ناقصة: ' + missingFields.join(', ');
      this.responseSuccess = false;
      return;
    }
    
    console.log('✅ All required fields present');
    console.log('📤 Sending FinalDecision with earClinicID:', this.decisionModel.earClinicID);
    
    // ✅ إرسال earClinicID مع البيانات (الباك إند سيصلح المشكلة)
    this.decisionService.createFinalDecision(this.decisionModel)
      .subscribe({
        next: (res) => {
          if (res.succeeded) {
            this.responseMessage = 'تم إرسال القرار بنجاح';
            this.responseSuccess = true;
          } else {
            //const errorMsg = res.errors?.detail?.join(', ') || res.message || 'حدث خطأ غير معروف';
            const errorMsg = "حدث خطأ غير معروف";
            this.responseMessage = errorMsg;
            this.responseSuccess = false;
          }
        },
        error: (err) => {
          console.error('🔍 Error:', err);
          console.error('🔍 Error Details:', err?.error);
          console.error('🔍 Error Message:', err?.error?.message);
          console.error('🔍 Error Errors:', err?.error?.errors);
          console.error('🔍 Full Error Response:', err);
          console.error('🔍 Error Status:', err.status);
          console.error('🔍 Error StatusText:', err.statusText);
          
          const serverMsg = err?.error?.errors?.detail?.join(', ') || err?.error?.message || 'حدث خطأ أثناء الاتصال بالسيرفر';
          this.responseMessage = serverMsg;
          this.responseSuccess = false;
        }
      });
  }
  getResultDescription(resultID: number): string {
  const result = this.results.find(r => r.resultID === resultID);
  return result ? result.description : 'غير محدد';
}
hasAllExams(): boolean {
  if (!this.applicant) return false;
  return !!(
    this.applicant.eyeExam &&
    this.applicant.surgicalExam &&
    this.applicant.orthopedicExamDto &&
    this.applicant.internalExam &&
    this.applicant.earClinic
  );
}

}
