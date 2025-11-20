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
import { catchError, map, take, shareReplay } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { ApiResponse } from '../../../applicants/models/api-response.model';
import { ToastrService } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../auth/services/auth.service';
import { SearchApplicantComponent } from '../../../applicants/components/search-applican/search-applicant.component.ts/search-applicant.component';
import { Applicant } from '../../../applicants/models/applicant.model';
import { Refraction } from '../../../doctor/models/refraction.model';
import { RefractionType } from '../../../doctor/models/refraction-type.model';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { Router } from '@angular/router';

interface ClinicData {
  name: string;
  icon: string;
  exam: any;
  consultations: Consultation[];
  investigations: Investigation[];
}

@Component({
  selector: 'app-supervisor',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule, CardModule, TagModule, ButtonModule, DividerModule, DialogModule, InputTextModule, SearchApplicantComponent, GregorianDatePipe],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.scss'
})
export class Supervisor implements OnInit {
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
  
  // ✅ متغيرات للتحكم في إمكانية التعديل بناءً على النتيجة السابقة
  canEditDecision: boolean = true; // يمكن التعديل افتراضياً
  previousDecisionLocked: boolean = false; // هل النتيجة السابقة مقفلة (مقبول/مرفوض)
  
  clinicsData: ClinicData[] = [];
  loading: boolean = false;
  refractionTypes: RefractionType[] = [];
  private currentFileNumber: string | null = null; // ✅ منع الطلبات المكررة لنفس رقم الملف
  private isLoadingClinicsData: boolean = false; // ✅ منع استدعاء loadClinicsData عدة مرات
  private lastSelectedApplicantSummary: Applicant | null = null;
  private isLoadingApplicantDetails: boolean = false; // ✅ منع استدعاء getApplicantByFileNumber$ عدة مرات

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
    private authService: AuthService,
    private router: Router
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
      .set('sortBy', 'consultationID')
      .set('sortDesc', 'true')
      .set('filterDict[doctor.specializationID]', specializationId.toString())
      .set('filterDict[applicantFileNumber]', fileNumber);

    return this.http.get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => {
        const items = res.data?.items || [];
        // إزالة التكرارات بناءً على consultationID
        const uniqueItems = this.removeDuplicateConsultations(items);
        // ترتيب حسب consultationID (الأحدث أولاً)
        return uniqueItems.sort((a, b) => (b.consultationID || 0) - (a.consultationID || 0));
      }),
      catchError(() => {
        return of([]);
      }),
      shareReplay(1) // ✅ منع الطلبات المكررة لنفس الطلب
    );
  }

  // Helper method to get investigations by specialization and file number
  private getInvestigationsBySpecialization(specializationId: number, fileNumber: string): Observable<Investigation[]> {
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '1000')
      .set('sortBy', 'investigationID')
      .set('sortDesc', 'true')
      .set('filterDict[doctor.specializationID]', specializationId.toString())
      .set('filterDict[applicantFileNumber]', fileNumber);

    return this.http.get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
      headers: this.getAuthHeaders(),
      params
    }).pipe(
      map(res => {
        const items = res.data?.items || [];
        // إزالة التكرارات بناءً على investigationID
        const uniqueItems = this.removeDuplicateInvestigations(items);
        // ترتيب حسب investigationID (الأحدث أولاً)
        return uniqueItems.sort((a, b) => (b.investigationID || 0) - (a.investigationID || 0));
      }),
      catchError(() => {
        return of([]);
      }),
      shareReplay(1) // ✅ منع الطلبات المكررة لنفس الطلب
    );
  }

  // إزالة التكرارات من الاستشارات
  private removeDuplicateConsultations(consultations: Consultation[]): Consultation[] {
    const seen = new Set<number>();
    return consultations.filter(consultation => {
      const id = consultation.consultationID;
      // تجاهل الاستشارات بدون ID
      if (!id || id === 0) {
        return false;
      }
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }

  // إزالة التكرارات من التحاليل
  private removeDuplicateInvestigations(investigations: Investigation[]): Investigation[] {
    const seen = new Set<number>();
    return investigations.filter(investigation => {
      const id = investigation.investigationID;
      // تجاهل التحاليل بدون ID
      if (!id || id === 0) {
        return false;
      }
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }
  ngOnInit(): void {
    this.loadResults();
    this.loadMaritalStatuses();
    this.loadRefractionTypes();
  }

  // جلب أنواع الانكسار
  loadRefractionTypes() {
    const url = `${environment.apiUrl}/api/RefractionTypes?page=1&pageSize=100`;
    this.http.get<ApiResponse<PagedResponse<RefractionType>>>(url, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (response) => {
        this.refractionTypes = response.data?.items || [];
      },
      error: () => {
        // Fallback إلى القيم الثابتة
        this.refractionTypes = [
          { refractionTypeID: 1, description: 'قصر نظر' },
          { refractionTypeID: 2, description: 'مد نظر' },
          { refractionTypeID: 3, description: 'استجماتيزم' },
          { refractionTypeID: 4, description: 'قصر نظر مع استجماتيزم' },
          { refractionTypeID: 5, description: 'مد نظر مع استجماتيزم' }
        ];
      }
    });
  }

  // الحصول على اسم نوع الانكسار
  getRefractionTypeName(refractionTypeID: number): string {
    const type = this.refractionTypes.find(rt => rt.refractionTypeID === refractionTypeID);
    return type?.description || 'غير معروف';
  }

  // الحصول على انكسارات العين اليمنى
  getRightEyeRefractions(exam: any): Refraction[] {
    if (!exam?.refractions || !Array.isArray(exam.refractions)) {
      return [];
    }
    return exam.refractions.filter((r: Refraction) => !r.isLeft);
  }

  // الحصول على انكسارات العين اليسرى
  getLeftEyeRefractions(exam: any): Refraction[] {
    if (!exam?.refractions || !Array.isArray(exam.refractions)) {
      return [];
    }
    return exam.refractions.filter((r: Refraction) => r.isLeft);
  }

  // الحصول على حقل من فحص العين مع معالجة القيم الفارغة
  getEyeExamField(exam: any, fieldName: string): string {
    // إذا كان exam غير موجود أو null أو undefined
    if (!exam || exam === null || exam === undefined) {
      return 'غير محدد';
    }
    // التحقق من وجود الحقل في الكائن
    if (!(fieldName in exam)) {
      return 'غير محدد';
    }
    // الحصول على القيمة
    const value = exam[fieldName];
    // إذا كانت القيمة null أو undefined، نعيد "غير محدد"
    if (value === null || value === undefined) {
      return 'غير محدد';
    }
    // تحويل القيمة إلى string وtrim
    const trimmedValue = String(value).trim();
    // إذا كانت القيمة فارغة بعد trim، نعيد "غير محدد"
    if (trimmedValue === '') {
      return 'غير محدد';
    }
    // إذا كانت القيمة من الباك إند هي "غير محدد" أو أي قيمة أخرى، نعيدها كما هي
    return trimmedValue;
  }

  /**
   * الحصول على القدرة البصرية للعين اليمنى
   * ✅ جاهز للعمل تلقائياً عندما يضيف الباك إند visionRight
   * ⚠️ حالياً: يستخدم vision العام كـ fallback
   */
  getVisionRight(exam: any): string {
    if (!exam) return 'غير محدد';
    // ✅ أولوية: visionRight (عندما يضيفه الباك إند)
    if ('visionRight' in exam && exam.visionRight) {
      const value = String(exam.visionRight).trim();
      if (value !== '') return value;
    }
    // ⚠️ Fallback: vision العام (البيانات الحالية)
    if ('vision' in exam && exam.vision) {
      const value = String(exam.vision).trim();
      if (value !== '') return value;
    }
    return 'غير محدد';
  }

  /**
   * الحصول على القدرة البصرية للعين اليسرى
   * ✅ جاهز للعمل تلقائياً عندما يضيف الباك إند visionLeft
   * ⚠️ حالياً: يعرض "غير محدد" لأن visionLeft غير موجود في API
   * ❌ لا نستخدم vision العام كـ fallback لأنه قد يكون للعين اليمنى فقط
   */
  getVisionLeft(exam: any): string {
    if (!exam) return 'غير محدد';
    // ✅ أولوية: visionLeft (عندما يضيفه الباك إند)
    if ('visionLeft' in exam && exam.visionLeft) {
      const value = String(exam.visionLeft).trim();
      if (value !== '') return value;
    }
    // ❌ لا نستخدم vision العام كـ fallback لأنه قد يكون للعين اليمنى فقط
    // ✅ عندما يضيف الباك إند visionLeft، سيعمل تلقائياً
    return 'غير محدد';
  }

  /**
   * الحصول على اختبار الألوان للعين اليمنى
   * ✅ جاهز للعمل تلقائياً عندما يضيف الباك إند colorTestRight
   * ⚠️ حالياً: يستخدم colorTest العام كـ fallback
   */
  getColorTestRight(exam: any): string {
    if (!exam) return 'غير محدد';
    // ✅ أولوية: colorTestRight (عندما يضيفه الباك إند)
    if ('colorTestRight' in exam && exam.colorTestRight) {
      const value = String(exam.colorTestRight).trim();
      if (value !== '') return value;
    }
    // ⚠️ Fallback: colorTest العام (البيانات الحالية)
    if ('colorTest' in exam && exam.colorTest) {
      const value = String(exam.colorTest).trim();
      if (value !== '') return value;
    }
    return 'غير محدد';
  }

  /**
   * الحصول على اختبار الألوان للعين اليسرى
   * ✅ جاهز للعمل تلقائياً عندما يضيف الباك إند colorTestLeft
   * ⚠️ حالياً: يعرض "غير محدد" لأن colorTestLeft غير موجود في API
   * ❌ لا نستخدم colorTest العام كـ fallback لأنه قد يكون للعين اليمنى فقط
   */
  getColorTestLeft(exam: any): string {
    if (!exam) return 'غير محدد';
    // ✅ أولوية: colorTestLeft (عندما يضيفه الباك إند)
    if ('colorTestLeft' in exam && exam.colorTestLeft) {
      const value = String(exam.colorTestLeft).trim();
      if (value !== '') return value;
    }
    // ❌ لا نستخدم colorTest العام كـ fallback لأنه قد يكون للعين اليمنى فقط
    // ✅ عندما يضيف الباك إند colorTestLeft، سيعمل تلقائياً
    return 'غير محدد';
  }

  // الحصول على حقل من فحص الأذن مع معالجة القيم الفارغة
  getEarExamField(exam: any, fieldName: string): string {
    // إذا كان exam غير موجود أو null أو undefined
    if (!exam || exam === null || exam === undefined) {
      return 'غير محدد';
    }
    // التحقق من وجود الحقل في الكائن
    if (!(fieldName in exam)) {
      return 'غير محدد';
    }
    // الحصول على القيمة
    const value = exam[fieldName];
    // إذا كانت القيمة null أو undefined، نعيد "غير محدد"
    if (value === null || value === undefined) {
      return 'غير محدد';
    }
    // تحويل القيمة إلى string وtrim
    const trimmedValue = String(value).trim();
    // إذا كانت القيمة فارغة بعد trim، نعيد "غير محدد"
    if (trimmedValue === '') {
      return 'غير محدد';
    }
    // إذا كانت القيمة من الباك إند هي "غير محدد" أو أي قيمة أخرى، نعيدها كما هي
    return trimmedValue;
  }

  // ✅ معالج اختيار المنتسب من مكون البحث
  // ✅ دالة جديدة لاستقبال ApplicantDetailsModel مباشرة (تجنب الطلبات المكررة)
  onApplicantDetailsSelected(applicantDetails: ApplicantDetailsModel) {
    if (!applicantDetails?.fileNumber) {
      this.responseMessage = 'رقم الملف غير متوفر';
      this.responseSuccess = false;
      return;
    }

    // ✅ منع الطلبات المكررة لنفس رقم الملف
    if (this.currentFileNumber === applicantDetails.fileNumber && (this.loading || this.isLoadingApplicantDetails)) {
      return;
    }

    // ✅ منع الطلبات المكررة إذا كان الطلب قيد التنفيذ
    if (this.isLoadingApplicantDetails) {
      return;
    }

    this.currentFileNumber = applicantDetails.fileNumber;
    this.applicant = undefined!;
    this.decisionModel = undefined!;
    this.responseMessage = '';
    this.responseSuccess = false;
    this.clinicsData = [];
    this.loading = true;

    // ✅ استخدام ApplicantDetailsModel مباشرة بدون جلب البيانات مرة أخرى
    this.applicant = applicantDetails;
    this.mapApplicantToDecision(applicantDetails);
    this.checkPreviousDecisionStatus(applicantDetails); // ✅ فحص حالة النتيجة السابقة
    this.loadClinicsData(applicantDetails.fileNumber);
    this.loading = false;
  }

  // ✅ دالة قديمة للتوافق مع المكونات الأخرى (إذا كانت تستخدم applicantSelected)
  onApplicantSelected(applicant: Applicant) {
    if (!applicant?.fileNumber) {
      this.responseMessage = 'رقم الملف غير متوفر';
      this.responseSuccess = false;
      return;
    }

    // ✅ منع الطلبات المكررة لنفس رقم الملف
    if (this.currentFileNumber === applicant.fileNumber && (this.loading || this.isLoadingApplicantDetails)) {
      return;
    }

    // ✅ منع الطلبات المكررة إذا كان الطلب قيد التنفيذ
    if (this.isLoadingApplicantDetails) {
      return;
    }

    this.currentFileNumber = applicant.fileNumber;
    this.lastSelectedApplicantSummary = applicant;
    this.applicant = undefined!;
    this.decisionModel = undefined!;
    this.responseMessage = '';
    this.responseSuccess = false;
    this.clinicsData = [];
    this.loading = true;
    this.isLoadingApplicantDetails = true;

    // ✅ جلب البيانات الكاملة للمنتسب - استخدام take(1) لمنع الاشتراكات المكررة
    this.applicantService.getApplicantByFileNumber$(applicant.fileNumber).pipe(
      take(1) // ✅ منع الاشتراكات المكررة - يتم تنفيذ الطلب مرة واحدة فقط
    ).subscribe({
      next: (applicantDetails: ApplicantDetailsModel) => {
        this.isLoadingApplicantDetails = false;
        if (applicantDetails) {
          this.applicant = this.mergeApplicantDetailsWithBasicInfo(applicantDetails, this.lastSelectedApplicantSummary);
          this.mapApplicantToDecision(applicantDetails);
          this.checkPreviousDecisionStatus(applicantDetails); // ✅ فحص حالة النتيجة السابقة
          this.loadClinicsData(applicantDetails.fileNumber);
        } else {
          this.responseMessage = 'لم يتم العثور على المنتسب';
          this.responseSuccess = false;
          this.loading = false;
          this.currentFileNumber = null;
        }
      },
      error: () => {
        this.isLoadingApplicantDetails = false;
        this.applicant = undefined!;
        this.decisionModel = undefined!;
        this.responseMessage = 'لم يتم العثور على المنتسب';
        this.responseSuccess = false;
        this.loading = false;
        this.currentFileNumber = null;
        this.lastSelectedApplicantSummary = null;
    }
    });
  }

  private mergeApplicantDetailsWithBasicInfo(details: ApplicantDetailsModel, basicInfo: Applicant | null): ApplicantDetailsModel {
    if (!basicInfo) {
      return details;
    }

    const mergedDetails: ApplicantDetailsModel = { ...details };

    if (!mergedDetails.motherName && basicInfo.motherName) {
      mergedDetails.motherName = basicInfo.motherName;
    }

    if (!mergedDetails.dateOfBirth && basicInfo.dateOfBirth) {
      mergedDetails.dateOfBirth = basicInfo.dateOfBirth;
    }

    if (!mergedDetails.bloodType && basicInfo.bloodType) {
      mergedDetails.bloodType = basicInfo.bloodType;
    }

    if (!mergedDetails.recruitmentCenter && basicInfo.recruitmentCenter) {
      mergedDetails.recruitmentCenter = basicInfo.recruitmentCenter;
    }

    if (!mergedDetails.queueNumber && basicInfo.queueNumber) {
      mergedDetails.queueNumber = basicInfo.queueNumber;
    }

    if (!mergedDetails.job && basicInfo.job) {
      mergedDetails.job = basicInfo.job;
    }

    if (!mergedDetails.height && basicInfo.height) {
      mergedDetails.height = basicInfo.height;
    }

    if (!mergedDetails.weight && basicInfo.weight) {
      mergedDetails.weight = basicInfo.weight;
    }

    if (!mergedDetails.bmi && basicInfo.bmi) {
      mergedDetails.bmi = basicInfo.bmi;
    }

    if (!mergedDetails.bloodPressure && basicInfo.bloodPressure) {
      mergedDetails.bloodPressure = basicInfo.bloodPressure;
    }

    if (!mergedDetails.pulse && basicInfo.pulse) {
      mergedDetails.pulse = basicInfo.pulse;
    }

    if (mergedDetails.tattoo === undefined && basicInfo.tattoo !== undefined) {
      mergedDetails.tattoo = basicInfo.tattoo;
    }

    if (!mergedDetails.distinctiveMarks && basicInfo.distinctiveMarks) {
      mergedDetails.distinctiveMarks = basicInfo.distinctiveMarks;
    }

    return mergedDetails;
  }

  loadClinicsData(fileNumber: string) {
    // ✅ منع استدعاء loadClinicsData عدة مرات لنفس رقم الملف
    if (this.isLoadingClinicsData && this.currentFileNumber === fileNumber) {
      return;
    }

    this.isLoadingClinicsData = true;
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
        // ✅ إزالة التكرارات النهائية للتأكد
        const eyeConsultations = this.removeDuplicateConsultations(data.eyeConsultations);
        const eyeInvestigations = this.removeDuplicateInvestigations(data.eyeInvestigations);
        const earConsultations = this.removeDuplicateConsultations(data.earConsultations);
        const earInvestigations = this.removeDuplicateInvestigations(data.earInvestigations);
        const internalConsultations = this.removeDuplicateConsultations(data.internalConsultations);
        const internalInvestigations = this.removeDuplicateInvestigations(data.internalInvestigations);
        const surgicalConsultations = this.removeDuplicateConsultations(data.surgicalConsultations);
        const surgicalInvestigations = this.removeDuplicateInvestigations(data.surgicalInvestigations);
        const orthopedicConsultations = this.removeDuplicateConsultations(data.orthopedicConsultations);
        const orthopedicInvestigations = this.removeDuplicateInvestigations(data.orthopedicInvestigations);

        this.clinicsData = [
          {
            name: 'عيادة العيون',
            icon: 'pi pi-eye',
            exam: this.applicant.eyeExam,
            consultations: eyeConsultations,
            investigations: eyeInvestigations
          },
          {
            name: 'عيادة الباطنة',
            icon: 'pi pi-heart',
            exam: this.applicant.internalExam,
            consultations: internalConsultations,
            investigations: internalInvestigations
          },
          {
            name: 'عيادة الجراحة',
            icon: 'pi pi-briefcase',
            exam: this.applicant.surgicalExam,
            consultations: surgicalConsultations,
            investigations: surgicalInvestigations
          },
          {
            name: 'عيادة العظمية',
            icon: 'pi pi-bone',
            exam: this.applicant.orthopedicExamDto,
            consultations: orthopedicConsultations,
            investigations: orthopedicInvestigations
          },
          {
            name: 'عيادة الأذنية',
            icon: 'pi pi-volume-up',
            exam: this.applicant.earClinic,
            consultations: earConsultations,
            investigations: earInvestigations
          }
        ];
        this.loading = false;
        this.isLoadingClinicsData = false;
      },
      error: (err) => {
        this.toastr.error('حدث خطأ أثناء جلب بيانات العيادات', 'خطأ');
        this.loading = false;
        this.isLoadingClinicsData = false;
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
      error: () => {}
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
      error: () => {}
    });
  }
  private mapApplicantToDecision(applicant: ApplicantDetailsModel) {
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
  }

  /**
   * ✅ فحص حالة النتيجة السابقة وتحديد إمكانية التعديل
   * - إذا كانت هناك أي نتيجة نهائية موجودة → منع إضافة نتيجة جديدة
   * - يمكن تعديل النتيجة فقط في dialog قائمة المنتسبين إذا كانت "مؤجل"
   */
  private checkPreviousDecisionStatus(applicant: ApplicantDetailsModel) {
    // إعادة تعيين الحالة الافتراضية
    this.canEditDecision = true;
    this.previousDecisionLocked = false;

    // التحقق من وجود نتيجة نهائية سابقة
    if (!applicant?.finalDecision?.resultID) {
      // لا توجد نتيجة سابقة، يمكن التعديل
      return;
    }

    const previousResultID = applicant.finalDecision.resultID;

    // ✅ إذا كانت هناك أي نتيجة نهائية موجودة → منع إضافة نتيجة جديدة
    // (يمكن تعديلها فقط في dialog قائمة المنتسبين إذا كانت "مؤجل")
    this.previousDecisionLocked = true;
    this.canEditDecision = false;

    // تعيين النتيجة السابقة في النموذج للعرض فقط
    this.decisionModel.resultID = previousResultID;
    this.decisionModel.reason = applicant.finalDecision.reason || '';
    this.decisionModel.postponeDuration = applicant.finalDecision.postponeDuration || '';
    
    // تحديث حالة isApproved و isAccept بناءً على النتيجة السابقة
    if (previousResultID === this.acceptedId) {
      this.isAccept = true;
      this.isApproved = true;
    } else if (previousResultID === this.rejectedId) {
      this.isAccept = false;
      this.isApproved = true;
    } else if (previousResultID === this.postponedId) {
      this.isApproved = false;
      this.isAccept = false;
    }
  }
  onResultChange(selectedId: number) {
    // ✅ منع التعديل إذا كانت النتيجة السابقة مقفلة
    if (this.previousDecisionLocked || !this.canEditDecision) {
      return;
    }

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
    // ✅ التحقق من إمكانية التعديل
    if (this.previousDecisionLocked || !this.canEditDecision) {
      this.responseMessage = 'لا يمكن إعادة تقييم هذا المنتسب لأنه تم إصدار نتيجة نهائية سابقاً.';
      this.responseSuccess = false;
      this.toastr.warning('لا يمكن إعادة تقييم هذا المنتسب لأنه تم إصدار نتيجة نهائية سابقاً.', 'تحذير');
      return;
    }

    // التحقق من صحة البيانات قبل الإرسال
    const requiredFields = ['orthopedicExamID', 'surgicalExamID', 'internalExamID', 'eyeExamID', 'applicantFileNumber', 'resultID', 'decisionDate'];
    const missingFields = requiredFields.filter(field => !this.decisionModel[field as keyof typeof this.decisionModel]);
    
    if (missingFields.length > 0) {
      this.responseMessage = 'بيانات ناقصة: ' + missingFields.join(', ');
      this.responseSuccess = false;
      this.toastr.warning('بيانات ناقصة: ' + missingFields.join(', '), 'تحذير');
      return;
    }
    
    // ✅ التحقق من وجود نتيجة نهائية من بيانات المنتسب المحملة (بدون استدعاء API إضافي)
    if (this.applicant?.finalDecision?.resultID) {
      this.responseMessage = 'لا يمكن إضافة نتيجة نهائية، حيث توجد نتيجة نهائية مسجّلة مسبقًا.';
      this.responseSuccess = false;
      this.toastr.warning('لا يمكن إضافة نتيجة نهائية، حيث توجد نتيجة نهائية مسجّلة مسبقًا.', 'تحذير');
      return;
    }
    
    // ✅ إرسال القرار النهائي مباشرة (الـ backend سيتحقق من وجود نتيجة نهائية)
    this.loading = true;
    
    this.decisionService.createFinalDecision(this.decisionModel)
      .subscribe({
        next: (res) => {
          this.loading = false;
          if (res.succeeded) {
            // ✅ إظهار رسالة تأكيد باستخدام Toastr
            this.toastr.success('تم رفع النتيجة بنجاح', 'نجاح', {
              timeOut: 2000,
              positionClass: 'toast-top-center'
            });
            
            // ✅ إعادة تحميل الصفحة بالكامل بعد تأخير قصير لإظهار الرسالة
            // هذا سيضمن أن الصفحة مصفرة تماماً بدون أي بيانات أو طلبات API
            setTimeout(() => {
              window.location.href = '/supervisor';
            }, 2000);
          } else {
            const errorMsg = res.message || 'حدث خطأ غير معروف';
            this.responseMessage = errorMsg;
            this.responseSuccess = false;
            this.toastr.error(errorMsg, 'خطأ');
          }
        },
        error: (err) => {
          this.loading = false;
          let serverMsg = 'حدث خطأ أثناء الاتصال بالسيرفر';
          
          if (err?.status === 404) {
            serverMsg = 'الـ endpoint غير موجود. يرجى التحقق من إعدادات الـ API أو الاتصال بالدعم الفني.';
          } else if (err?.error?.errors) {
            serverMsg = err.error.errors.detail?.join(', ') || err.error.errors.join(', ') || err.error.message || serverMsg;
          } else if (err?.error?.message) {
            serverMsg = err.error.message;
          }
          
          this.responseMessage = serverMsg;
          this.responseSuccess = false;
          this.toastr.error(serverMsg, 'خطأ');
          console.error('Error creating final decision:', err);
        }
      });
  }

  resetForm() {
    // إعادة تعيين النموذج في القالب أولاً
    if (this.decisionForm) {
      this.decisionForm.resetForm();
    }
    
    // إعادة تعيين جميع المتغيرات إلى حالتها الأولية
    this.applicant = undefined!;
    this.decisionModel = undefined!;
    this.responseMessage = '';
    this.responseSuccess = false;
    this.clinicsData = [];
    this.isApproved = true;
    this.isAccept = false;
    this.loading = false;
    this.canEditDecision = true;
    this.previousDecisionLocked = false;
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

  /**
   * ✅ حساب عدد التواريخ المتاحة في القرار النهائي
   */
  getDatesCount(finalDecision: any): number {
    if (!finalDecision) return 0;
    let count = 0;
    if (finalDecision.receptionAddedAt) count++;
    if (finalDecision.supervisorAddedAt) count++;
    if (finalDecision.supervisorLastModifiedAt) count++;
    if (finalDecision.decisionDate) count++;
    if (finalDecision.exportedAt) count++;
    return count;
  }

  // TrackBy functions for better performance
  trackByConsultationId(index: number, consultation: Consultation): number {
    return consultation.consultationID || index;
  }

  trackByInvestigationId(index: number, investigation: Investigation): number {
    return investigation.investigationID || index;
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
      referralReason: '', // ✅ جديد
      result: '',
      attachment: '',
      doctorID: 0
    } as Consultation;
    this.consultationForm = this.fb.group({
      consultationType: ['', Validators.required],
      // referredDoctor: ['', Validators.required], // ❌ تم حذفه
      referralReason: [''], // ✅ جديد - اختياري
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
      // referredDoctor: formValue.referredDoctor || this.selectedConsultation.referredDoctor, // ❌ تم حذفه
      referralReason: formValue.referralReason || this.selectedConsultation.referralReason || '', // ✅ جديد
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
