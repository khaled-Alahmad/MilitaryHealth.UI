import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ToastrService } from 'ngx-toastr';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { ApplicantModel, ApplicantDetailsModel } from '../../../reception/models/applicant.model';
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ApiResponse } from '../../../applicants/models/api-response.model';
import { Consultation } from '../../../doctor/models/consultation.model';
import { Investigation } from '../../../doctor/models/investigation.model';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { DecisionService, FinalDecisionHistoryItem } from '../../services/decision.service';
import { LookupService } from '../../../../shared/services/lookup.service';
import { Result } from '../../../../shared/models/result.model';
import { FinalDecisionModel } from '../../models/final-decision.model';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextareaModule } from 'primeng/textarea';
import { Table } from 'primeng/table';
import { ResetFiltersButtonComponent } from '../../../../shared/components/reset-filters-button/reset-filters-button.component';
import { DatePickerModule } from 'primeng/datepicker';

interface ApplicantTimeline {
  event: string;
  date: Date | string | null;
  description: string;
  type: 'entry' | 'exam' | 'consultation' | 'investigation' | 'decision' | 'exit';
}

@Component({
  selector: 'app-applicants-list-supervisor',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    DialogModule,
    CardModule,
    DividerModule,
    GregorianDatePipe,
    FormsModule,
    NgSelectModule,
    ResetFiltersButtonComponent,
    DatePickerModule
  ],
  templateUrl: './applicants-list-supervisor.html',
  styleUrl: './applicants-list-supervisor.scss'
})
export class ApplicantsListSupervisor implements OnInit {
  applicants: ApplicantModel[] = [];
  loading = false;
  totalRecords = 0;
  page = 1;
  pageSize = 20;
  globalFilter = '';
  tableHeight = '600px';

  /** فلاتر التاريخ (مختار بشكل تلقائي اليوم الحالي) */
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  maxDate: Date = new Date();
  /** خريطة رقم الملف -> وصف النتيجة النهائية */
  finalResultByFile: Map<string, string> = new Map();

  // تفاصيل المنتسب
  selectedApplicant: ApplicantDetailsModel | null = null;
  showDetailsDialog = false;
  detailsLoading = false;
  applicantTimeline: ApplicantTimeline[] = [];

  // حوار الاستشارات والتحاليل
  showRequestsDialog = false;
  requestsLoading = false;
  selectedApplicantSummary: ApplicantModel | null = null;
  applicantConsultations: Consultation[] = [];
  applicantInvestigations: Investigation[] = [];

  // Specialization IDs
  private readonly EYE_SPECIALIZATION_ID = 1;
  private readonly INTERNAL_SPECIALIZATION_ID = 2;
  private readonly SURGICAL_SPECIALIZATION_ID = 3;
  private readonly ORTHOPEDIC_SPECIALIZATION_ID = 4;
  private readonly EAR_SPECIALIZATION_ID = 5;

  private readonly consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private readonly investigationUrl = `${environment.apiUrl}/api/Investigations`;

  // Cache لتجنب الطلبات المكررة
  private consultationsCache: Map<string, Consultation[]> = new Map();
  private investigationsCache: Map<string, Investigation[]> = new Map();
  private currentFileNumber: string | null = null;
  private isLoadingConsultations: boolean = false;
  
  // ✅ منع الطلبات المكررة لقائمة المنتسبين
  private isLoadingApplicants: boolean = false;

  // ✅ متغيرات لتعديل القرار النهائي
  results: Result[] = [];
  editDecisionModel: Partial<FinalDecisionModel> = {};
  isEditingDecision: boolean = false;
  updatingDecision: boolean = false;
  readonly POSTPONED_RESULT_ID = 3; // ID للنتيجة "مؤجل"
  /** سجل تغيير النتيجة النهائية (كان مرفوض → صار مقبول) */
  decisionHistory: FinalDecisionHistoryItem[] = [];
  @ViewChild('table') table?: Table;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private applicantService: ApplicantService,
    private http: HttpClient,
    private toastr: ToastrService,
    private authService: AuthService,
    private decisionService: DecisionService,
    private lookupService: LookupService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // ✅ لا نستدعي loadApplicants هنا لأن PrimeNG Table مع lazy="true" 
    // سيقوم تلقائياً بإرسال onLazyLoad event عند التحميل
    
    // ✅ جلب قائمة النتائج
    this.loadResults();
  }

  loadResults(): void {
    this.lookupService.getResults().subscribe({
      next: (data) => {
        this.results = data;
      },
      error: () => {
        this.toastr.error('فشل في جلب قائمة النتائج', 'خطأ');
      }
    });
  }

  loadApplicants(): void {
    if (this.isLoadingApplicants) {
      return;
    }
    this.isLoadingApplicants = true;
    this.loading = true;
    this.applicantService
      .getApplicants$(this.page, this.pageSize, this.globalFilter, this.dateFrom, this.dateTo)
      .subscribe({
        next: (response: PagedResponse<ApplicantModel>) => {
          this.applicants = response.items;
          this.totalRecords = response.totalCount;
          this.loading = false;
          this.isLoadingApplicants = false;
          this.loadFinalResultsForCurrentPage();
        },
        error: () => {
          this.loading = false;
          this.isLoadingApplicants = false;
          this.toastr.error('حدث خطأ أثناء جلب قائمة المنتسبين', 'خطأ');
        }
      });
  }

  private loadFinalResultsForCurrentPage(): void {
    const fileNumbers = this.applicants.map(a => a.fileNumber).filter(Boolean);
    if (fileNumbers.length === 0) {
      this.finalResultByFile.clear();
      return;
    }
    this.decisionService.getDecisionsByFileNumbers(fileNumbers).subscribe({
      next: (items) => {
        this.finalResultByFile.clear();
        items.forEach(item => {
          const desc = item.result?.description;
          if (desc) {
            this.finalResultByFile.set(item.applicantFileNumber, desc);
          }
        });
        this.cdr.markForCheck();
      }
    });
  }

  getFinalResult(fileNumber: string): string {
    return this.finalResultByFile.get(fileNumber) ?? '-';
  }

  getBadgeClass(resultDescription: string): string {
    if (!resultDescription || resultDescription === '-') {
      return 'badge bg-secondary';
    }
    switch (resultDescription) {
      case 'مقبول':
        return 'badge bg-success';
      case 'مرفوض':
        return 'badge bg-danger';
      case 'مؤجل':
      case 'تأجيل':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  }

  resetFilters(): void {
    this.globalFilter = '';
    this.dateFrom = new Date();
    this.dateTo = new Date();
    this.page = 1;
    if (this.searchInput) {
      this.searchInput.nativeElement.value = '';
    }
    if (this.table) {
      this.table.first = 0;
      this.table.clear();
    }
    this.loadApplicants();
  }

  onDateFilterChange(): void {
    this.page = 1;
    this.loadApplicants();
  }

  onPageChange(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize;
    const first = event.first ?? (this.page - 1) * rows;
    this.page = Math.floor(first / rows) + 1;
    this.pageSize = rows;
    this.loadApplicants();
  }

  onFilterChange(event: any): void {
    this.globalFilter = event.target.value;
    this.page = 1;
    this.loadApplicants();
  }

  viewDetails(applicant: ApplicantModel): void {
    // منع الطلبات المكررة لنفس المنتسب
    if (this.currentFileNumber === applicant.fileNumber && this.isLoadingConsultations) {
      return;
    }

    this.currentFileNumber = applicant.fileNumber;
    this.selectedApplicant = null;
    this.applicantTimeline = [];
    this.showDetailsDialog = true;
    this.detailsLoading = true;

    // جلب التفاصيل الكاملة للمنتسب
    this.applicantService.getApplicantByFileNumber$(applicant.fileNumber).subscribe({
      next: (details: ApplicantDetailsModel) => {
        // دمج البيانات الأساسية من القائمة مع التفاصيل الكاملة
        this.selectedApplicant = this.mergeApplicantDetailsWithBasicInfo(details, applicant);
        this.buildTimeline(this.selectedApplicant, applicant.fileNumber);
        this.loadDecisionHistory(applicant.fileNumber);
        this.detailsLoading = false;
      },
      error: () => {
        this.detailsLoading = false;
        this.currentFileNumber = null;
        this.toastr.error('حدث خطأ أثناء جلب تفاصيل المنتسب', 'خطأ');
      }
    });
  }

  /**
   * دمج البيانات الأساسية من القائمة مع التفاصيل الكاملة
   * لضمان عرض جميع البيانات المطلوبة
   */
  private mergeApplicantDetailsWithBasicInfo(
    details: ApplicantDetailsModel,
    basicInfo: ApplicantModel
  ): ApplicantDetailsModel {
    return {
      ...details,
      // استخدام البيانات الأساسية إذا كانت غير موجودة في التفاصيل
      motherName: details.motherName || basicInfo.motherName,
      dateOfBirth: details.dateOfBirth || basicInfo.dateOfBirth,
      recruitmentCenter: details.recruitmentCenter || basicInfo.recruitmentCenter,
      bloodType: details.bloodType || basicInfo.bloodType,
      queueNumber: details.queueNumber || basicInfo.queueNumber,
      associateNumber: details.associateNumber || basicInfo.associateNumber,
      // التأكد من وجود الحقول الأساسية
      fullName: details.fullName || basicInfo.fullName,
      fileNumber: details.fileNumber || basicInfo.fileNumber,
      job: details.job || basicInfo.job,
      height: details.height ?? basicInfo.height,
      weight: details.weight ?? basicInfo.weight,
      bmi: details.bmi ?? basicInfo.bmi,
      bloodPressure: details.bloodPressure || basicInfo.bloodPressure,
      pulse: details.pulse ?? basicInfo.pulse,
      tattoo: details.tattoo ?? basicInfo.tattoo,
      distinctiveMarks: details.distinctiveMarks || basicInfo.distinctiveMarks,
      maritalStatusID: details.maritalStatusID || basicInfo.maritalStatusID,
      createdAt: details.createdAt || basicInfo.createdAt,
      // دمج الحالة الاجتماعية (ككائن)
      maritalStatus: details.maritalStatus || basicInfo.maritalStatus
    } as ApplicantDetailsModel;
  }

  openRequestsDialog(applicant: ApplicantModel): void {
    this.selectedApplicantSummary = applicant;
    this.showRequestsDialog = true;
    this.requestsLoading = true;
    this.applicantConsultations = [];
    this.applicantInvestigations = [];

    const consultations$ = [
      this.getConsultationsBySpecialization(this.EYE_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, applicant.fileNumber),
      this.getConsultationsBySpecialization(this.EAR_SPECIALIZATION_ID, applicant.fileNumber)
    ];

    const investigations$ = [
      this.getInvestigationsBySpecialization(this.EYE_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.INTERNAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.SURGICAL_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.ORTHOPEDIC_SPECIALIZATION_ID, applicant.fileNumber),
      this.getInvestigationsBySpecialization(this.EAR_SPECIALIZATION_ID, applicant.fileNumber)
    ];

    forkJoin([...consultations$, ...investigations$]).subscribe({
      next: (results) => {
        this.applicantConsultations = [];
        this.applicantInvestigations = [];

        for (let i = 0; i < 5; i++) {
          this.applicantConsultations.push(...(results[i] as Consultation[]));
        }

        for (let i = 5; i < 10; i++) {
          this.applicantInvestigations.push(...(results[i] as Investigation[]));
        }

        this.applicantConsultations = this.applicantConsultations.sort((a, b) => (b.consultationID || 0) - (a.consultationID || 0));
        this.applicantInvestigations = this.applicantInvestigations.sort((a, b) => (b.investigationID || 0) - (a.investigationID || 0));

        this.requestsLoading = false;
      },
      error: () => {
        this.requestsLoading = false;
        this.toastr.error('حدث خطأ أثناء جلب الاستشارات والتحاليل', 'خطأ');
      }
    });
  }

  closeRequestsDialog(): void {
    this.showRequestsDialog = false;
    this.selectedApplicantSummary = null;
    this.applicantConsultations = [];
    this.applicantInvestigations = [];
  }

  private buildTimeline(details: ApplicantDetailsModel, fileNumber: string): void {
    this.applicantTimeline = [];

    // 1. تاريخ الدخول (تاريخ الإنشاء)
    if (details.createdAt) {
      this.applicantTimeline.push({
        event: 'دخول المنتسب إلى المركز',
        date: details.createdAt,
        description: `تم تسجيل المنتسب برقم الملف: ${details.fileNumber}`,
        type: 'entry'
      });
    }

    // 2. الفحوصات الطبية - لا نعرض التاريخ
    if (details.eyeExam) {
      this.applicantTimeline.push({
        event: 'فحص عيادة العيون',
        date: null,
        description: `تم إجراء فحص العيون - النتيجة: ${this.getResultDescription(details.eyeExam.resultID)}`,
        type: 'exam'
      });
    }

    if (details.internalExam) {
      this.applicantTimeline.push({
        event: 'فحص عيادة الباطنة',
        date: null,
        description: `تم إجراء فحص الباطنة - النتيجة: ${this.getResultDescription(details.internalExam.resultID)}`,
        type: 'exam'
      });
    }

    if (details.surgicalExam) {
      this.applicantTimeline.push({
        event: 'فحص عيادة الجراحة',
        date: null,
        description: `تم إجراء فحص الجراحة - النتيجة: ${this.getResultDescription(details.surgicalExam.resultID)}`,
        type: 'exam'
      });
    }

    if (details.orthopedicExamDto) {
      this.applicantTimeline.push({
        event: 'فحص عيادة العظمية',
        date: null,
        description: `تم إجراء فحص العظمية - النتيجة: ${this.getResultDescription(details.orthopedicExamDto.resultID)}`,
        type: 'exam'
      });
    }

    if (details.earClinic) {
      this.applicantTimeline.push({
        event: 'فحص عيادة الأذنية',
        date: null,
        description: `تم إجراء فحص الأذنية - النتيجة: ${this.getResultDescription(details.earClinic.resultID)}`,
        type: 'exam'
      });
    }

    // 3. جلب الاستشارات والتحاليل
    this.loadConsultationsAndInvestigations(fileNumber);
  }

  private loadConsultationsAndInvestigations(fileNumber: string): void {
    // منع الطلبات المكررة لنفس المنتسب
    if (this.isLoadingConsultations && this.currentFileNumber === fileNumber) {
      return;
    }

    // التحقق من الـ Cache
    const cacheKey = fileNumber;
    const cachedConsultations = this.consultationsCache.get(cacheKey);
    const cachedInvestigations = this.investigationsCache.get(cacheKey);

    if (cachedConsultations && cachedInvestigations) {
      // استخدام البيانات من الـ Cache
      this.addConsultationsToTimeline(cachedConsultations);
      this.addInvestigationsToTimeline(cachedInvestigations);
      this.addFinalDecisionToTimeline();
      this.sortTimeline();
      return;
    }

    // جلب البيانات من API
    this.isLoadingConsultations = true;
    const specializations = [
      this.EYE_SPECIALIZATION_ID,
      this.INTERNAL_SPECIALIZATION_ID,
      this.SURGICAL_SPECIALIZATION_ID,
      this.ORTHOPEDIC_SPECIALIZATION_ID,
      this.EAR_SPECIALIZATION_ID
    ];

    const consultations$ = specializations.map(specId =>
      this.getConsultationsBySpecialization(specId, fileNumber)
    );

    const investigations$ = specializations.map(specId =>
      this.getInvestigationsBySpecialization(specId, fileNumber)
    );

    forkJoin([...consultations$, ...investigations$]).subscribe({
      next: (results) => {
        const allConsultations: Consultation[] = [];
        const allInvestigations: Investigation[] = [];

        // جمع الاستشارات
        for (let i = 0; i < 5; i++) {
          allConsultations.push(...(results[i] as Consultation[]));
        }

        // جمع التحاليل
        for (let i = 5; i < 10; i++) {
          allInvestigations.push(...(results[i] as Investigation[]));
        }

        // حفظ في الـ Cache
        this.consultationsCache.set(cacheKey, allConsultations);
        this.investigationsCache.set(cacheKey, allInvestigations);

        // إضافة إلى Timeline
        this.addConsultationsToTimeline(allConsultations);
        this.addInvestigationsToTimeline(allInvestigations);
        this.addFinalDecisionToTimeline();
        this.sortTimeline();

        this.isLoadingConsultations = false;
      },
      error: () => {
        // في حالة الخطأ، نعرض Timeline بدون الاستشارات والتحاليل
        this.isLoadingConsultations = false;
      }
    });
  }

  private addConsultationsToTimeline(consultations: Consultation[]): void {
    consultations.forEach(consultation => {
          this.applicantTimeline.push({
            event: 'استشارة خارجية',
            date: (consultation as any).createdAt || null,
            description: `نوع الاستشارة: ${consultation.consultationType} - النتيجة: ${consultation.result}`,
            type: 'consultation'
          });
        });
  }

  private addInvestigationsToTimeline(investigations: Investigation[]): void {
    investigations.forEach(investigation => {
          this.applicantTimeline.push({
            event: 'تحليل طبي',
            date: (investigation as any).createdAt || null,
            description: `نوع التحليل: ${investigation.type} - النتيجة: ${investigation.result} - الحالة: ${investigation.status}`,
            type: 'investigation'
          });
        });
  }

  private addFinalDecisionToTimeline(): void {
        if (this.selectedApplicant?.finalDecision) {
          this.applicantTimeline.push({
            event: 'القرار النهائي',
            date: this.selectedApplicant.finalDecision.decisionDate || this.selectedApplicant.createdAt || null,
            description: `النتيجة: ${this.getResultDescription(this.selectedApplicant.finalDecision.resultID)} - السبب: ${this.selectedApplicant.finalDecision.reason || 'لا يوجد'}`,
            type: 'decision'
          });
    }
        }

  private sortTimeline(): void {
        // ترتيب Timeline - دخول المنتسب أولاً، ثم باقي الأحداث حسب التاريخ
        this.applicantTimeline.sort((a, b) => {
          // دخول المنتسب دائماً أولاً
          if (a.type === 'entry') return -1;
          if (b.type === 'entry') return 1;
          
          // ترتيب باقي الأحداث حسب التاريخ
          const dateA = a.date ? new Date(a.date).getTime() : Number.MAX_SAFE_INTEGER;
          const dateB = b.date ? new Date(b.date).getTime() : Number.MAX_SAFE_INTEGER;
          return dateA - dateB;
    });
  }

  private getConsultationsBySpecialization(specializationId: number, fileNumber: string) {
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
      map(res => res.data?.items || []),
      catchError(() => of([]))
    );
  }

  private getInvestigationsBySpecialization(specializationId: number, fileNumber: string) {
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
      map(res => res.data?.items || []),
      catchError(() => of([]))
    );
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  private getResultDescription(resultID: number): string {
    const results: { [key: number]: string } = {
      1: 'مقبول',
      2: 'مرفوض',
      3: 'مؤجل'
    };
    return results[resultID] || 'غير محدد';
  }

  /** وصف النتيجة الحالية لعرضها في قسم تعديل القرار */
  getFinalResultDescription(resultID: number | undefined): string {
    return resultID != null ? this.getResultDescription(resultID) : 'غير محدد';
  }

  getTimelineIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'entry': 'pi pi-sign-in',
      'exam': 'pi pi-file-medical',
      'consultation': 'pi pi-comments',
      'investigation': 'pi pi-flask',
      'decision': 'pi pi-check-circle',
      'exit': 'pi pi-sign-out'
    };
    return icons[type] || 'pi pi-circle';
  }

  getTimelineSeverity(type: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | null {
    const severities: { [key: string]: 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | null } = {
      'entry': 'info',
      'exam': 'warn',
      'consultation': 'secondary',
      'investigation': 'info',
      'decision': 'success',
      'exit': 'danger'
    };
    return severities[type] || 'info';
  }

  getFormattedDate(date: Date | string | null | undefined): string {
    if (!date) return 'غير محدد';
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return 'غير محدد';
      // استخدام locale إنجليزي لضمان عرض التقويم الميلادي
      return dateObj.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'غير محدد';
    }
  }

  closeDetailsDialog(): void {
    this.showDetailsDialog = false;
    this.selectedApplicant = null;
    this.applicantTimeline = [];
    this.decisionHistory = [];
    // مسح الحالة عند إغلاق Dialog
    this.currentFileNumber = null;
    this.isLoadingConsultations = false;
    // ✅ إعادة تعيين نموذج التعديل
    this.isEditingDecision = false;
    this.editDecisionModel = {};
  }

  // ✅ التحقق من إمكانية تعديل القرار النهائي (لأي قرار موجود - مقبول / مرفوض / مؤجل)
  canEditFinalDecision(): boolean {
    return !!this.selectedApplicant?.finalDecision;
  }

  // ✅ تهيئة نموذج التعديل
  initEditDecision(): void {
    if (!this.selectedApplicant?.finalDecision) {
      return;
    }
    this.editDecisionModel = {
      resultID: this.selectedApplicant.finalDecision.resultID,
      reason: this.selectedApplicant.finalDecision.reason || '',
      decisionDate: this.selectedApplicant.finalDecision.decisionDate || new Date().toISOString().split('T')[0]
    };
    this.isEditingDecision = true;
  }

  // ✅ إلغاء التعديل
  cancelEditDecision(): void {
    this.isEditingDecision = false;
    this.editDecisionModel = {};
  }

  loadDecisionHistory(fileNumber: string): void {
    this.decisionHistory = [];
    this.decisionService.getDecisionHistory(fileNumber).subscribe({
      next: (list) => {
        this.decisionHistory = list ?? [];
        this.cdr.markForCheck();
      }
    });
  }

  // ✅ تحديث القرار النهائي باستخدام PUT API
  updateFinalDecision(): void {
    if (!this.selectedApplicant?.finalDecision || !this.selectedApplicant.fileNumber) {
      this.toastr.error('بيانات ناقصة', 'خطأ');
      return;
    }

    // ✅ التحقق من وجود معرف القرار
    // الـ backend يتوقع FinalDecisionID كمعرف واحد
    // استخدام decisionID من الـ model (هو المعرف الصحيح)
    const decisionId = this.selectedApplicant.finalDecision.decisionID;
    
    if (!decisionId) {
      this.toastr.error('معرف القرار النهائي غير موجود', 'خطأ');
      console.error('FinalDecision object:', this.selectedApplicant.finalDecision);
      return;
    }

    // ✅ التأكد من أن التعديل يتم فقط للمنتسب المعروض حالياً
    if (!this.selectedApplicant || !this.selectedApplicant.fileNumber) {
      this.toastr.error('بيانات المنتسب غير موجودة', 'خطأ');
      return;
    }

    if (!this.editDecisionModel.resultID) {
      this.toastr.warning('يرجى اختيار النتيجة', 'تحذير');
      return;
    }

    this.updatingDecision = true;

    // ✅ بناء نموذج التحديث مع الحفاظ على البيانات الأصلية
    const updateModel: FinalDecisionModel = {
      orthopedicExamID: this.selectedApplicant.orthopedicExamDto?.orthopedicExamID || 0,
      surgicalExamID: this.selectedApplicant.surgicalExam?.surgicalExamID || 0,
      internalExamID: this.selectedApplicant.internalExam?.internalExamID || 0,
      eyeExamID: this.selectedApplicant.eyeExam?.eyeExamID || 0,
      earClinicID: this.selectedApplicant.earClinic?.earClinicID || 0,
      applicantFileNumber: this.selectedApplicant.fileNumber,
      resultID: this.editDecisionModel.resultID!,
      reason: this.editDecisionModel.reason || '',
      decisionDate: this.editDecisionModel.decisionDate || this.selectedApplicant.finalDecision.decisionDate || new Date().toISOString().split('T')[0],
      // ✅ الحفاظ على التواريخ الأصلية
      receptionAddedAt: this.selectedApplicant.finalDecision.receptionAddedAt,
      supervisorAddedAt: this.selectedApplicant.finalDecision.supervisorAddedAt
      // ✅ supervisorLastModifiedAt سيتم إضافته تلقائياً في الـ service
    };

    // ✅ إرسال طلب التحديث باستخدام PUT API
    // التأكد من أن التعديل يتم فقط للمنتسب المعروض حالياً
    const currentFileNumber = this.selectedApplicant.fileNumber;
    
    // تسجيل البيانات للمساعدة في التشخيص
    console.log('Updating Final Decision:', {
      decisionId: decisionId,
      fileNumber: currentFileNumber,
      updateModel: updateModel,
      finalDecision: this.selectedApplicant.finalDecision
    });
    
    this.decisionService.updateFinalDecision(
      decisionId,
      updateModel
    ).subscribe({
      next: (response) => {
        this.updatingDecision = false;
        if (response.succeeded) {
          this.toastr.success('تم تحديث القرار النهائي بنجاح. يمكن إعادة التصدير للتجنيد من صفحة التصدير.', 'نجاح');
          const fileNumber = this.selectedApplicant!.fileNumber;
          this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
            next: (details: ApplicantDetailsModel) => {
              this.selectedApplicant = details;
              this.buildTimeline(details, fileNumber);
              this.isEditingDecision = false;
              this.editDecisionModel = {};
              // تحديث عمود النتيجة النهائية في الجدول
              const desc = details.finalDecision?.result?.description ?? (details.finalDecision?.resultID != null ? this.getResultDescription(details.finalDecision.resultID) : null);
              if (desc) this.finalResultByFile.set(fileNumber, desc);
              this.loadDecisionHistory(fileNumber);
              this.cdr.markForCheck();
            },
            error: () => {
              this.toastr.error('فشل في إعادة تحميل البيانات', 'خطأ');
            }
          });
        } else {
          this.toastr.error(response.message || 'فشل في تحديث القرار النهائي', 'خطأ');
        }
      },
      error: (err) => {
        this.updatingDecision = false;
        let errorMsg = 'حدث خطأ أثناء تحديث القرار النهائي';
        if (err?.error?.message) {
          errorMsg = err.error.message;
        } else if (err?.error?.errors) {
          errorMsg = err.error.errors.detail?.join(', ') || err.error.errors.join(', ') || errorMsg;
        }
        this.toastr.error(errorMsg, 'خطأ');
        console.error('Error updating final decision:', {
          error: err,
          decisionId: decisionId,
          updateModel: updateModel,
          finalDecision: this.selectedApplicant?.finalDecision
        });
      }
    });
  }
}

