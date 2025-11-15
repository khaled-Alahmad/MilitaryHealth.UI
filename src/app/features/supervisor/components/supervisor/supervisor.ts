import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantDetailsModel, ApplicantModel } from '../../../reception/models/applicant.model';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { LookupService } from '../../../../shared/services/lookup.service';
import { Result } from '../../../../shared/models/result.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { DecisionService } from '../../services/decision.service';
import { FinalDecisionModel } from '../../models/final-decision.model';
import { MaritalStatusService } from '../../../reception/services/marital-status.service';
import { MaritalStatus } from '../../../reception/models/marital-status.model';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Consultation } from '../../../doctor/models/consultation.model';
import { Investigation } from '../../../doctor/models/investigation.model';
import { forkJoin, of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { ApiResponse } from '../../../applicants/models/api-response.model';
import { ToastrService } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../auth/services/auth.service';

interface ClinicData {
  name: string;
  icon: string;
  exam: any;
  consultations: Consultation[];
  investigations: Investigation[];
}

@Component({
  selector: 'app-supervisor',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule, CardModule, TagModule, ButtonModule, DividerModule, DialogModule, InputTextModule],
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
  
  clinicsData: ClinicData[] = [];
  loading: boolean = false;

  // Specialization IDs
  private readonly EYE_SPECIALIZATION_ID = 1;
  private readonly INTERNAL_SPECIALIZATION_ID = 2;
  private readonly SURGICAL_SPECIALIZATION_ID = 3;
  private readonly ORTHOPEDIC_SPECIALIZATION_ID = 4;
  private readonly EAR_SPECIALIZATION_ID = 5;

  private readonly consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private readonly investigationUrl = `${environment.apiUrl}/api/Investigations`;
  private readonly fileUploadUrl = `${environment.apiUrl}/api/Files/upload`;

  // Modal states
  showConsultationModal: boolean = false;
  showInvestigationModal: boolean = false;
  selectedConsultation: Consultation | null = null;
  selectedInvestigation: Investigation | null = null;
  consultationForm!: FormGroup;
  investigationForm!: FormGroup;
  uploadedPath: string | null = null;
  previewUrl: string | null = null;
  uploadingFile: boolean = false;

  @ViewChild('decisionForm') decisionForm!: NgForm;

  constructor(
    private applicantService: ApplicantService, 
    private lookupService: LookupService,
    private decisionService: DecisionService, 
    private maritalStatusService: MaritalStatusService,
    private http: HttpClient,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // Helper method to get consultations by specialization and file number
  private getConsultationsBySpecialization(specializationId: number, fileNumber: string): Observable<Consultation[]> {
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '1000')
      .set('sortDesc', 'true')
      .set('filterDict[doctor.specializationID]', specializationId.toString())
      .set('filterDict[applicantFileNumber]', fileNumber);

    return this.http.get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => res.data?.items || []),
      catchError(() => of([]))
    );
  }

  // Helper method to get investigations by specialization and file number
  private getInvestigationsBySpecialization(specializationId: number, fileNumber: string): Observable<Investigation[]> {
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '1000')
      .set('sortDesc', 'true')
      .set('filterDict[doctor.specializationID]', specializationId.toString())
      .set('filterDict[applicantFileNumber]', fileNumber);

    return this.http.get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => res.data?.items || []),
      catchError(() => of([]))
    );
  }
  ngOnInit(): void {
    this.loadResults();
    this.loadMaritalStatuses();
  }

  loadApplicants() {
    this.applicant = undefined!;
    this.decisionModel = undefined!;
    this.responseMessage = '';
    this.responseSuccess = false;
    this.clinicsData = [];
    this.loading = true;

    if (!this.searchValue?.trim()) {
      this.responseMessage = 'يرجى إدخال رقم الملف للبحث';
      this.responseSuccess = false;
      this.loading = false;
      return;
    }
    
    this.applicantService.getApplicantByFileNumber$(this.searchValue).subscribe({
      next: (applicantDetails: ApplicantDetailsModel) => {
        if (applicantDetails) {
          this.applicant = applicantDetails;
          this.mapApplicantToDecision(applicantDetails);
          this.loadClinicsData(applicantDetails.fileNumber);
        } else {
          this.responseMessage = 'لم يتم العثور على المنتسب';
          this.responseSuccess = false;
          this.loading = false;
        }
      },
      error: () => {
      this.applicant = undefined!;
      this.decisionModel = undefined!;
      this.responseMessage = 'لم يتم العثور على المنتسب';
      this.responseSuccess = false;
      this.loading = false;
    }
    });
  }

  loadClinicsData(fileNumber: string) {
    this.loading = true;
    
    // جلب الاستشارات والتحاليل لكل عيادة باستخدام التخصص الصحيح
    const eyeConsultations$ = this.getConsultationsBySpecialization(this.EYE_SPECIALIZATION_ID, fileNumber);
    const eyeInvestigations$ = this.getInvestigationsBySpecialization(this.EYE_SPECIALIZATION_ID, fileNumber);
    
    const internalConsultations$ = this.getConsultationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, fileNumber);
    const internalInvestigations$ = this.getInvestigationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, fileNumber);
    
    const surgicalConsultations$ = this.getConsultationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, fileNumber);
    const surgicalInvestigations$ = this.getInvestigationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, fileNumber);
    
    const orthopedicConsultations$ = this.getConsultationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, fileNumber);
    const orthopedicInvestigations$ = this.getInvestigationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, fileNumber);
    
    const earConsultations$ = this.getConsultationsBySpecialization(this.EAR_SPECIALIZATION_ID, fileNumber);
    const earInvestigations$ = this.getInvestigationsBySpecialization(this.EAR_SPECIALIZATION_ID, fileNumber);

    forkJoin({
      eyeConsultations: eyeConsultations$,
      eyeInvestigations: eyeInvestigations$,
      earConsultations: earConsultations$,
      earInvestigations: earInvestigations$,
      internalConsultations: internalConsultations$,
      internalInvestigations: internalInvestigations$,
      surgicalConsultations: surgicalConsultations$,
      surgicalInvestigations: surgicalInvestigations$,
      orthopedicConsultations: orthopedicConsultations$,
      orthopedicInvestigations: orthopedicInvestigations$
    }).subscribe({
      next: (data: {
        eyeConsultations: Consultation[];
        eyeInvestigations: Investigation[];
        earConsultations: Consultation[];
        earInvestigations: Investigation[];
        internalConsultations: Consultation[];
        internalInvestigations: Investigation[];
        surgicalConsultations: Consultation[];
        surgicalInvestigations: Investigation[];
        orthopedicConsultations: Consultation[];
        orthopedicInvestigations: Investigation[];
      }) => {
        this.clinicsData = [
          {
            name: 'عيادة العيون',
            icon: 'pi pi-eye',
            exam: this.applicant.eyeExam,
            consultations: data.eyeConsultations,
            investigations: data.eyeInvestigations
          },
          {
            name: 'عيادة الباطنة',
            icon: 'pi pi-heart',
            exam: this.applicant.internalExam,
            consultations: data.internalConsultations,
            investigations: data.internalInvestigations
          },
          {
            name: 'عيادة الجراحة',
            icon: 'pi pi-briefcase',
            exam: this.applicant.surgicalExam,
            consultations: data.surgicalConsultations,
            investigations: data.surgicalInvestigations
          },
          {
            name: 'عيادة العظمية',
            icon: 'pi pi-bone',
            exam: this.applicant.orthopedicExamDto,
            consultations: data.orthopedicConsultations,
            investigations: data.orthopedicInvestigations
          },
          {
            name: 'عيادة الأذنية',
            icon: 'pi pi-volume-up',
            exam: this.applicant.earClinic,
            consultations: data.earConsultations,
            investigations: data.earInvestigations
          }
        ];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openFile(attachment: string) {
    if (!attachment) {
      return;
    }
    const url = `${environment.apiUrl}/${attachment}`;
    window.open(url, '_blank');
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
      this.toastr.warning('بيانات ناقصة: ' + missingFields.join(', '), 'تحذير');
      return;
    }
    
    console.log('✅ All required fields present');
    console.log('📤 Sending FinalDecision with earClinicID:', this.decisionModel.earClinicID);
    
    this.loading = true;
    
    // ✅ إرسال earClinicID مع البيانات (الباك إند سيصلح المشكلة)
    this.decisionService.createFinalDecision(this.decisionModel)
      .subscribe({
        next: (res) => {
          this.loading = false;
          if (res.succeeded) {
            // إظهار رسالة تأكيد
            this.toastr.success('تم إرسال القرار النهائي بنجاح', 'نجاح', {
              timeOut: 3000,
              positionClass: 'toast-top-center'
            });
            
            // إعادة تعيين النموذج بعد تأخير قصير لإظهار الرسالة
            setTimeout(() => {
              this.resetForm();
            }, 1000);
          } else {
            const errorMsg = res.message || 'حدث خطأ غير معروف';
            this.responseMessage = errorMsg;
            this.responseSuccess = false;
            this.toastr.error(errorMsg, 'خطأ');
          }
        },
        error: (err) => {
          this.loading = false;
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
          this.toastr.error(serverMsg, 'خطأ');
        }
      });
  }

  resetForm() {
    // إعادة تعيين النموذج في القالب أولاً
    if (this.decisionForm) {
      this.decisionForm.resetForm();
    }
    
    // إعادة تعيين جميع المتغيرات إلى حالتها الأولية
    this.searchValue = '';
    this.applicant = undefined!;
    this.decisionModel = undefined!;
    this.responseMessage = '';
    this.responseSuccess = false;
    this.clinicsData = [];
    this.isApproved = true;
    this.isAccept = false;
    this.loading = false;
  }
  getResultDescription(resultID: number): string {
    const result = this.results.find(r => r.resultID === resultID);
    return result ? result.description : 'غير محدد';
  }

  getResultSeverity(resultID: number): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | null {
    const result = this.results.find(r => r.resultID === resultID);
    if (!result) return 'secondary';
    
    const description = result.description.toLowerCase();
    if (description.includes('مقبول') || description.includes('قبول')) return 'success';
    if (description.includes('مرفوض') || description.includes('رفض')) return 'danger';
    if (description.includes('مؤجل') || description.includes('تأجيل')) return 'warn';
    return 'info';
  }

  getStatusSeverity(status: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | null {
    if (!status) return 'secondary';
    const statusLower = status.toLowerCase();
    if (statusLower.includes('مكتمل') || statusLower.includes('جاهز')) return 'success';
    if (statusLower.includes('قيد') || statusLower.includes('انتظار')) return 'warn';
    if (statusLower.includes('ملغي') || statusLower.includes('رفض')) return 'danger';
    return 'info';
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

  getSpecializationId(clinicName: string): number {
    switch(clinicName) {
      case 'عيادة العيون': return this.EYE_SPECIALIZATION_ID;
      case 'عيادة الباطنة': return this.INTERNAL_SPECIALIZATION_ID;
      case 'عيادة الجراحة': return this.SURGICAL_SPECIALIZATION_ID;
      case 'عيادة العظمية': return this.ORTHOPEDIC_SPECIALIZATION_ID;
      case 'عيادة الأذنية': return this.EAR_SPECIALIZATION_ID;
      default: return 0;
    }
  }

  // ==================== Consultation Methods ====================
  openEditConsultationModal(consultation: Consultation) {
    this.selectedConsultation = consultation;
    this.consultationForm = this.fb.group({
      result: [consultation.result || '', Validators.required],
      attachment: [consultation.attachment || null]
    });
    this.uploadedPath = consultation.attachment || null;
    this.previewUrl = consultation.attachment ? `${environment.apiUrl}/${consultation.attachment}` : null;
    this.showConsultationModal = true;
  }

  openAddConsultationModal(clinicName: string, specializationId: number) {
    this.selectedConsultation = {
      consultationID: 0,
      applicantFileNumber: this.applicant.fileNumber,
      consultationType: '',
      referredDoctor: '',
      result: '',
      attachment: '',
      doctorID: 0
    } as Consultation;
    this.consultationForm = this.fb.group({
      consultationType: ['', Validators.required],
      referredDoctor: ['', Validators.required],
      result: ['', Validators.required],
      attachment: [null]
    });
    this.uploadedPath = null;
    this.previewUrl = null;
    this.showConsultationModal = true;
  }

  closeConsultationModal() {
    this.showConsultationModal = false;
    this.selectedConsultation = null;
    this.consultationForm.reset();
    this.uploadedPath = null;
    this.previewUrl = null;
  }

  onConsultationFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.uploadingFile = true;
    const formData = new FormData();
    formData.append('file', file);

    const reader = new FileReader();
    reader.onload = (e: any) => this.previewUrl = e.target.result;
    reader.readAsDataURL(file);

    this.http.post<ApiResponse<string>>(this.fileUploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (response) => {
        if (response.succeeded && response.data) {
          this.uploadedPath = response.data;
          this.consultationForm.patchValue({ attachment: response.data });
          this.toastr.success('✅ تم رفع الملف بنجاح', 'نجاح');
        } else {
          this.toastr.error('❌ فشل رفع الملف', 'خطأ');
        }
        this.uploadingFile = false;
      },
      error: () => {
        this.toastr.error('❌ فشل رفع الملف', 'خطأ');
        this.uploadingFile = false;
      }
    });
  }

  saveConsultation() {
    if (this.consultationForm.invalid) {
      this.toastr.warning('❌ يرجى تعبئة جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    if (!this.selectedConsultation) return;

    const doctorID = Number(this.authService.getDoctorId()) || Number(this.authService.getUserId()) || 0;
    const formValue = this.consultationForm.value;
    const updatedConsultation: Consultation = {
      ...this.selectedConsultation,
      doctorID: doctorID || this.selectedConsultation.doctorID || 0,
      applicantFileNumber: this.applicant.fileNumber,
      consultationType: formValue.consultationType || this.selectedConsultation.consultationType,
      referredDoctor: formValue.referredDoctor || this.selectedConsultation.referredDoctor,
      result: formValue.result,
      attachment: this.uploadedPath || this.selectedConsultation.attachment || ''
    };

    this.loading = true;
    const isUpdate = this.selectedConsultation.consultationID && this.selectedConsultation.consultationID > 0;

    const request$ = isUpdate
      ? this.http.put<ApiResponse<Consultation>>(`${this.consultationUrl}/${this.selectedConsultation.consultationID}`, updatedConsultation, {
          headers: this.getAuthHeaders().set('Content-Type', 'application/json')
        })
      : this.http.post<ApiResponse<Consultation>>(this.consultationUrl, updatedConsultation, {
          headers: this.getAuthHeaders().set('Content-Type', 'application/json')
        });

    request$.subscribe({
      next: (response) => {
        if (response.succeeded) {
          this.toastr.success(isUpdate ? '✅ تم تحديث الاستشارة بنجاح' : '✅ تم إضافة الاستشارة بنجاح', 'نجاح');
          this.closeConsultationModal();
          this.loadClinicsData(this.applicant.fileNumber);
        } else {
          this.toastr.error('❌ فشل العملية', 'خطأ');
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ فشل العملية', 'خطأ');
        this.loading = false;
      }
    });
  }

  // ==================== Investigation Methods ====================
  openEditInvestigationModal(investigation: Investigation) {
    this.selectedInvestigation = investigation;
    this.investigationForm = this.fb.group({
      type: [investigation.type || ''],
      result: [investigation.result || '', Validators.required],
      status: [investigation.status || (investigation.result ? 'مكتمل' : 'مؤجل'), Validators.required],
      attachment: [investigation.attachment || null]
    });
    this.uploadedPath = investigation.attachment || null;
    this.previewUrl = investigation.attachment ? `${environment.apiUrl}/${investigation.attachment}` : null;
    this.showInvestigationModal = true;
  }

  openAddInvestigationModal(clinicName: string, specializationId: number) {
    this.selectedInvestigation = {
      investigationID: 0,
      applicantFileNumber: this.applicant.fileNumber,
      type: '',
      result: '',
      status: 'مؤجل',
      attachment: '',
      doctorID: 0
    } as Investigation;
    this.investigationForm = this.fb.group({
      type: ['', Validators.required],
      result: ['', Validators.required],
      status: ['مؤجل', Validators.required],
      attachment: [null]
    });
    this.uploadedPath = null;
    this.previewUrl = null;
    this.showInvestigationModal = true;
  }

  closeInvestigationModal() {
    this.showInvestigationModal = false;
    this.selectedInvestigation = null;
    this.investigationForm.reset();
    this.uploadedPath = null;
    this.previewUrl = null;
  }

  onInvestigationFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.uploadingFile = true;
    const formData = new FormData();
    formData.append('file', file);

    const reader = new FileReader();
    reader.onload = (e: any) => this.previewUrl = e.target.result;
    reader.readAsDataURL(file);

    this.http.post<ApiResponse<string>>(this.fileUploadUrl, formData, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (response) => {
        if (response.succeeded && response.data) {
          this.uploadedPath = response.data;
          this.investigationForm.patchValue({ attachment: response.data });
          this.toastr.success('✅ تم رفع الملف بنجاح', 'نجاح');
        } else {
          this.toastr.error('❌ فشل رفع الملف', 'خطأ');
        }
        this.uploadingFile = false;
      },
      error: () => {
        this.toastr.error('❌ فشل رفع الملف', 'خطأ');
        this.uploadingFile = false;
      }
    });
  }

  saveInvestigation() {
    if (this.investigationForm.invalid) {
      this.toastr.warning('❌ يرجى تعبئة جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    if (!this.selectedInvestigation) return;

    const doctorID = Number(this.authService.getDoctorId()) || Number(this.authService.getUserId()) || 0;
    const formValue = this.investigationForm.value;
    const updatedInvestigation: Investigation = {
      ...this.selectedInvestigation,
      doctorID: doctorID || this.selectedInvestigation.doctorID || 0,
      applicantFileNumber: this.applicant.fileNumber,
      type: formValue.type || this.selectedInvestigation.type,
      result: formValue.result,
      status: formValue.status,
      attachment: this.uploadedPath || this.selectedInvestigation.attachment || ''
    };

    this.loading = true;
    const isUpdate = this.selectedInvestigation.investigationID && this.selectedInvestigation.investigationID > 0;

    const request$ = isUpdate
      ? this.http.put<ApiResponse<Investigation>>(`${this.investigationUrl}/${this.selectedInvestigation.investigationID}`, updatedInvestigation, {
          headers: this.getAuthHeaders().set('Content-Type', 'application/json')
        })
      : this.http.post<ApiResponse<Investigation>>(this.investigationUrl, updatedInvestigation, {
          headers: this.getAuthHeaders().set('Content-Type', 'application/json')
        });

    request$.subscribe({
      next: (response) => {
        if (response.succeeded) {
          this.toastr.success(isUpdate ? '✅ تم تحديث التحليل بنجاح' : '✅ تم إضافة التحليل بنجاح', 'نجاح');
          this.closeInvestigationModal();
          this.loadClinicsData(this.applicant.fileNumber);
        } else {
          this.toastr.error('❌ فشل العملية', 'خطأ');
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error('❌ فشل العملية', 'خطأ');
        this.loading = false;
      }
    });
  }

}
