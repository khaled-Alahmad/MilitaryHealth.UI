import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantDetailsModel, ApplicantModel } from '../../../reception/models/applicant.model';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
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
import { catchError, finalize, map, take, shareReplay } from 'rxjs/operators';
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
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    CardModule,
    TagModule,
    ButtonModule,
    DividerModule,
    DialogModule,
    InputTextModule,
    SearchApplicantComponent,
    GregorianDatePipe,
  ],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.scss',
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
  isAccept: boolean = false;

  // âœ… Ù…ØªØºÙŠØ±Ø§Øª Ù„Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø¥Ù…ÙƒØ§Ù†ÙŠØ© Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©
  canEditDecision: boolean = true; // ÙŠÙ…ÙƒÙ† Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø§ÙØªØ±Ø§Ø¶ÙŠØ§Ù‹
  previousDecisionLocked: boolean = false; // Ù‡Ù„ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø© Ù…Ù‚ÙÙ„Ø© (Ù…Ù‚Ø¨ÙˆÙ„/Ù…Ø±ÙÙˆØ¶)

  clinicsData: ClinicData[] = [];
  loading: boolean = false;
  refractionTypes: RefractionType[] = [];
  private currentFileNumber: string | null = null; // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ù„Ù†ÙØ³ Ø±Ù‚Ù… Ø§Ù„Ù…Ù„Ù
  private isLoadingClinicsData: boolean = false; // âœ… Ù…Ù†Ø¹ Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ loadClinicsData Ø¹Ø¯Ø© Ù…Ø±Ø§Øª
  private lastSelectedApplicantSummary: Applicant | null = null;
  private isLoadingApplicantDetails: boolean = false; // âœ… Ù…Ù†Ø¹ Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ getApplicantByFileNumber$ Ø¹Ø¯Ø© Ù…Ø±Ø§Øª

  // Specialization IDs
  private readonly EYE_SPECIALIZATION_ID = 1;
  private readonly INTERNAL_SPECIALIZATION_ID = 2;
  private readonly SURGICAL_SPECIALIZATION_ID = 3;
  private readonly ORTHOPEDIC_SPECIALIZATION_ID = 4;
  private readonly EAR_SPECIALIZATION_ID = 5;

  private readonly consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private readonly investigationUrl = `${environment.apiUrl}/api/Investigations`;
  private readonly fileUploadUrl = `${environment.apiUrl}/api/FileUpload/upload`;

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
    private router: Router,
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // Helper method to get consultations by specialization and file number
  private getConsultationsBySpecialization(
    specializationId: number,
    fileNumber: string,
  ): Observable<Consultation[]> {
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '1000')
      .set('sortBy', 'consultationID')
      .set('sortDesc', 'true')
      .set('filterDict[doctor.specializationID]', specializationId.toString())
      .set('filterDict[applicantFileNumber]', fileNumber);

    return this.http
      .get<ApiResponse<PagedResponse<Consultation>>>(this.consultationUrl, {
        headers: this.getAuthHeaders(),
        params,
      })
      .pipe(
        map((res) => {
          const items = res.data?.items || [];
          // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ consultationID
          const uniqueItems = this.removeDuplicateConsultations(items);
          // ØªØ±ØªÙŠØ¨ Ø­Ø³Ø¨ consultationID (Ø§Ù„Ø£Ø­Ø¯Ø« Ø£ÙˆÙ„Ø§Ù‹)
          return uniqueItems.sort((a, b) => (b.consultationID || 0) - (a.consultationID || 0));
        }),
        catchError(() => {
          return of([]);
        }),
        shareReplay(1), // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ù„Ù†ÙØ³ Ø§Ù„Ø·Ù„Ø¨
      );
  }

  // Helper method to get investigations by specialization and file number
  private getInvestigationsBySpecialization(
    specializationId: number,
    fileNumber: string,
  ): Observable<Investigation[]> {
    let params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '1000')
      .set('sortBy', 'investigationID')
      .set('sortDesc', 'true')
      .set('filterDict[doctor.specializationID]', specializationId.toString())
      .set('filterDict[applicantFileNumber]', fileNumber);

    return this.http
      .get<ApiResponse<PagedResponse<Investigation>>>(this.investigationUrl, {
        headers: this.getAuthHeaders(),
        params,
      })
      .pipe(
        map((res) => {
          const items = res.data?.items || [];
          // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ investigationID
          const uniqueItems = this.removeDuplicateInvestigations(items);
          // ØªØ±ØªÙŠØ¨ Ø­Ø³Ø¨ investigationID (Ø§Ù„Ø£Ø­Ø¯Ø« Ø£ÙˆÙ„Ø§Ù‹)
          return uniqueItems.sort((a, b) => (b.investigationID || 0) - (a.investigationID || 0));
        }),
        catchError(() => {
          return of([]);
        }),
        shareReplay(1), // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ù„Ù†ÙØ³ Ø§Ù„Ø·Ù„Ø¨
      );
  }

  // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ù…Ù† Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª
  private removeDuplicateConsultations(consultations: Consultation[]): Consultation[] {
    const seen = new Set<number>();
    return consultations.filter((consultation) => {
      const id = consultation.consultationID;
      // ØªØ¬Ø§Ù‡Ù„ Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª Ø¨Ø¯ÙˆÙ† ID
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

  // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ù…Ù† Ø§Ù„ØªØ­Ø§Ù„ÙŠÙ„
  private removeDuplicateInvestigations(investigations: Investigation[]): Investigation[] {
    const seen = new Set<number>();
    return investigations.filter((investigation) => {
      const id = investigation.investigationID;
      // ØªØ¬Ø§Ù‡Ù„ Ø§Ù„ØªØ­Ø§Ù„ÙŠÙ„ Ø¨Ø¯ÙˆÙ† ID
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

  // Ø¬Ù„Ø¨ Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø§Ù†ÙƒØ³Ø§Ø±
  loadRefractionTypes() {
    const url = `${environment.apiUrl}/api/RefractionTypes?page=1&pageSize=100`;
    this.http
      .get<ApiResponse<PagedResponse<RefractionType>>>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (response) => {
          this.refractionTypes = response.data?.items || [];
        },
        error: () => {
          // Fallback Ø¥Ù„Ù‰ Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ø«Ø§Ø¨ØªØ©
          this.refractionTypes = [
            { refractionTypeID: 1, description: 'Ù‚ØµØ± Ù†Ø¸Ø±' },
            { refractionTypeID: 2, description: 'Ù…Ø¯ Ù†Ø¸Ø±' },
            { refractionTypeID: 3, description: 'Ø§Ø³ØªØ¬Ù…Ø§ØªÙŠØ²Ù…' },
            { refractionTypeID: 4, description: 'Ù‚ØµØ± Ù†Ø¸Ø± Ù…Ø¹ Ø§Ø³ØªØ¬Ù…Ø§ØªÙŠØ²Ù…' },
            { refractionTypeID: 5, description: 'Ù…Ø¯ Ù†Ø¸Ø± Ù…Ø¹ Ø§Ø³ØªØ¬Ù…Ø§ØªÙŠØ²Ù…' },
          ];
        },
      });
  }

  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø³Ù… Ù†ÙˆØ¹ Ø§Ù„Ø§Ù†ÙƒØ³Ø§Ø±
  getRefractionTypeName(refractionTypeID: number): string {
    const type = this.refractionTypes.find((rt) => rt.refractionTypeID === refractionTypeID);
    return type?.description || 'غير معروف';
  }

  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù†ÙƒØ³Ø§Ø±Ø§Øª Ø§Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰
  getRightEyeRefractions(exam: any): Refraction[] {
    if (!exam?.refractions || !Array.isArray(exam.refractions)) {
      return [];
    }
    return exam.refractions.filter((r: Refraction) => !r.isLeft);
  }

  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù†ÙƒØ³Ø§Ø±Ø§Øª Ø§Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠØ³Ø±Ù‰
  getLeftEyeRefractions(exam: any): Refraction[] {
    if (!exam?.refractions || !Array.isArray(exam.refractions)) {
      return [];
    }
    return exam.refractions.filter((r: Refraction) => r.isLeft);
  }

  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø­Ù‚Ù„ Ù…Ù† ÙØ­Øµ Ø§Ù„Ø¹ÙŠÙ† Ù…Ø¹ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„ÙØ§Ø±ØºØ©
  getEyeExamField(exam: any, fieldName: string): string {
    // Ø¥Ø°Ø§ ÙƒØ§Ù† exam ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ Ø£Ùˆ null Ø£Ùˆ undefined
    if (!exam || exam === null || exam === undefined) {
      return 'غير محدد';
    }
    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ÙˆØ¬ÙˆØ¯ Ø§Ù„Ø­Ù‚Ù„ ÙÙŠ Ø§Ù„ÙƒØ§Ø¦Ù†
    if (!(fieldName in exam)) {
      return 'غير محدد';
    }
    // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù‚ÙŠÙ…Ø©
    const value = exam[fieldName];
    // Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù‚ÙŠÙ…Ø© null Ø£Ùˆ undefinedØŒ Ù†Ø¹ÙŠØ¯ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯"
    if (value === null || value === undefined) {
      return 'غير محدد';
    }
    // ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù‚ÙŠÙ…Ø© Ø¥Ù„Ù‰ string Ùˆtrim
    const trimmedValue = String(value).trim();
    // Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù‚ÙŠÙ…Ø© ÙØ§Ø±ØºØ© Ø¨Ø¹Ø¯ trimØŒ Ù†Ø¹ÙŠØ¯ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯"
    if (trimmedValue === '') {
      return 'غير محدد';
    }
    // Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù‚ÙŠÙ…Ø© Ù…Ù† Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ Ù‡ÙŠ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯" Ø£Ùˆ Ø£ÙŠ Ù‚ÙŠÙ…Ø© Ø£Ø®Ø±Ù‰ØŒ Ù†Ø¹ÙŠØ¯Ù‡Ø§ ÙƒÙ…Ø§ Ù‡ÙŠ
    return trimmedValue;
  }

  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„Ø¨ØµØ±ÙŠØ© Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ visionRight
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ³ØªØ®Ø¯Ù… vision Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback
   */
  getVisionRight(exam: any): string {
    if (!exam) return 'غير محدد';
    // âœ… Ø£ÙˆÙ„ÙˆÙŠØ©: visionRight (Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙÙ‡ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯)
    if ('visionRight' in exam && exam.visionRight) {
      const value = String(exam.visionRight).trim();
      if (value !== '') return value;
    }
    // âš ï¸ Fallback: vision Ø§Ù„Ø¹Ø§Ù… (Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø­Ø§Ù„ÙŠØ©)
    if ('vision' in exam && exam.vision) {
      const value = String(exam.vision).trim();
      if (value !== '') return value;
    }
    return 'غير محدد';
  }

  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„Ø¨ØµØ±ÙŠØ© Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠØ³Ø±Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ visionLeft
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ¹Ø±Ø¶ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯" Ù„Ø£Ù† visionLeft ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ API
   * âŒ Ù„Ø§ Ù†Ø³ØªØ®Ø¯Ù… vision Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback Ù„Ø£Ù†Ù‡ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰ ÙÙ‚Ø·
   */
  getVisionLeft(exam: any): string {
    if (!exam) return 'غير محدد';
    // âœ… Ø£ÙˆÙ„ÙˆÙŠØ©: visionLeft (Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙÙ‡ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯)
    if ('visionLeft' in exam && exam.visionLeft) {
      const value = String(exam.visionLeft).trim();
      if (value !== '') return value;
    }
    // âŒ Ù„Ø§ Ù†Ø³ØªØ®Ø¯Ù… vision Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback Ù„Ø£Ù†Ù‡ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰ ÙÙ‚Ø·
    // âœ… Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ visionLeftØŒ Ø³ÙŠØ¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹
    return 'غير محدد';
  }

  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„Ø£Ù„ÙˆØ§Ù† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ colorTestRight
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ³ØªØ®Ø¯Ù… colorTest Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback
   */
  getColorTestRight(exam: any): string {
    if (!exam) return 'غير محدد';
    // âœ… Ø£ÙˆÙ„ÙˆÙŠØ©: colorTestRight (Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙÙ‡ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯)
    if ('colorTestRight' in exam && exam.colorTestRight) {
      const value = String(exam.colorTestRight).trim();
      if (value !== '') return value;
    }
    // âš ï¸ Fallback: colorTest Ø§Ù„Ø¹Ø§Ù… (Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø­Ø§Ù„ÙŠØ©)
    if ('colorTest' in exam && exam.colorTest) {
      const value = String(exam.colorTest).trim();
      if (value !== '') return value;
    }
    return 'غير محدد';
  }

  /**
   * Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„Ø£Ù„ÙˆØ§Ù† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠØ³Ø±Ù‰
   * âœ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ colorTestLeft
   * âš ï¸ Ø­Ø§Ù„ÙŠØ§Ù‹: ÙŠØ¹Ø±Ø¶ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯" Ù„Ø£Ù† colorTestLeft ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ API
   * âŒ Ù„Ø§ Ù†Ø³ØªØ®Ø¯Ù… colorTest Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback Ù„Ø£Ù†Ù‡ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰ ÙÙ‚Ø·
   */
  getColorTestLeft(exam: any): string {
    if (!exam) return 'غير محدد';
    // âœ… Ø£ÙˆÙ„ÙˆÙŠØ©: colorTestLeft (Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙÙ‡ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯)
    if ('colorTestLeft' in exam && exam.colorTestLeft) {
      const value = String(exam.colorTestLeft).trim();
      if (value !== '') return value;
    }
    // âŒ Ù„Ø§ Ù†Ø³ØªØ®Ø¯Ù… colorTest Ø§Ù„Ø¹Ø§Ù… ÙƒÙ€ fallback Ù„Ø£Ù†Ù‡ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ù„Ù„Ø¹ÙŠÙ† Ø§Ù„ÙŠÙ…Ù†Ù‰ ÙÙ‚Ø·
    // âœ… Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¶ÙŠÙ Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ colorTestLeftØŒ Ø³ÙŠØ¹Ù…Ù„ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹
    return 'غير محدد';
  }

  // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø­Ù‚Ù„ Ù…Ù† ÙØ­Øµ Ø§Ù„Ø£Ø°Ù† Ù…Ø¹ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„ÙØ§Ø±ØºØ©
  getEarExamField(exam: any, fieldName: string): string {
    // Ø¥Ø°Ø§ ÙƒØ§Ù† exam ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ Ø£Ùˆ null Ø£Ùˆ undefined
    if (!exam || exam === null || exam === undefined) {
      return 'غير محدد';
    }
    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ÙˆØ¬ÙˆØ¯ Ø§Ù„Ø­Ù‚Ù„ ÙÙŠ Ø§Ù„ÙƒØ§Ø¦Ù†
    if (!(fieldName in exam)) {
      return 'غير محدد';
    }
    // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù‚ÙŠÙ…Ø©
    const value = exam[fieldName];
    // Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù‚ÙŠÙ…Ø© null Ø£Ùˆ undefinedØŒ Ù†Ø¹ÙŠØ¯ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯"
    if (value === null || value === undefined) {
      return 'غير محدد';
    }
    // ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù‚ÙŠÙ…Ø© Ø¥Ù„Ù‰ string Ùˆtrim
    const trimmedValue = String(value).trim();
    // Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù‚ÙŠÙ…Ø© ÙØ§Ø±ØºØ© Ø¨Ø¹Ø¯ trimØŒ Ù†Ø¹ÙŠØ¯ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯"
    if (trimmedValue === '') {
      return 'غير محدد';
    }
    // Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù‚ÙŠÙ…Ø© Ù…Ù† Ø§Ù„Ø¨Ø§Ùƒ Ø¥Ù†Ø¯ Ù‡ÙŠ "ØºÙŠØ± Ù…Ø­Ø¯Ø¯" Ø£Ùˆ Ø£ÙŠ Ù‚ÙŠÙ…Ø© Ø£Ø®Ø±Ù‰ØŒ Ù†Ø¹ÙŠØ¯Ù‡Ø§ ÙƒÙ…Ø§ Ù‡ÙŠ
    return trimmedValue;
  }

  // âœ… Ù…Ø¹Ø§Ù„Ø¬ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…Ù†ØªØ³Ø¨ Ù…Ù† Ù…ÙƒÙˆÙ† Ø§Ù„Ø¨Ø­Ø«
  // âœ… Ø¯Ø§Ù„Ø© Ø¬Ø¯ÙŠØ¯Ø© Ù„Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ ApplicantDetailsModel Ù…Ø¨Ø§Ø´Ø±Ø© (ØªØ¬Ù†Ø¨ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø©)
  onApplicantDetailsSelected(applicantDetails: ApplicantDetailsModel) {
    if (!applicantDetails?.fileNumber) {
      this.responseMessage = 'رقم الملف غير متوفر';
      this.responseSuccess = false;
      return;
    }

    // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ù„Ù†ÙØ³ Ø±Ù‚Ù… Ø§Ù„Ù…Ù„Ù
    if (
      this.currentFileNumber === applicantDetails.fileNumber &&
      (this.loading || this.isLoadingApplicantDetails)
    ) {
      return;
    }

    // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ø¥Ø°Ø§ ÙƒØ§Ù† Ø§Ù„Ø·Ù„Ø¨ Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°
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

    // âœ… Ø§Ø³ØªØ®Ø¯Ø§Ù… ApplicantDetailsModel Ù…Ø¨Ø§Ø´Ø±Ø© Ø¨Ø¯ÙˆÙ† Ø¬Ù„Ø¨ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ù…Ø±Ø© Ø£Ø®Ø±Ù‰
    this.applicant = applicantDetails;
    this.mapApplicantToDecision(applicantDetails);
    this.checkPreviousDecisionStatus(applicantDetails); // âœ… ÙØ­Øµ Ø­Ø§Ù„Ø© Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©
    this.loadClinicsData(applicantDetails.fileNumber);
    this.loading = false;
  }

  // âœ… Ø¯Ø§Ù„Ø© Ù‚Ø¯ÙŠÙ…Ø© Ù„Ù„ØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø£Ø®Ø±Ù‰ (Ø¥Ø°Ø§ ÙƒØ§Ù†Øª ØªØ³ØªØ®Ø¯Ù… applicantSelected)
  onApplicantSelected(applicant: Applicant) {
    if (!applicant?.fileNumber) {
      this.responseMessage = 'رقم الملف غير متوفر';
      this.responseSuccess = false;
      return;
    }

    // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ù„Ù†ÙØ³ Ø±Ù‚Ù… Ø§Ù„Ù…Ù„Ù
    if (
      this.currentFileNumber === applicant.fileNumber &&
      (this.loading || this.isLoadingApplicantDetails)
    ) {
      return;
    }

    // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© Ø¥Ø°Ø§ ÙƒØ§Ù† Ø§Ù„Ø·Ù„Ø¨ Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°
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

    // âœ… Ø¬Ù„Ø¨ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ÙƒØ§Ù…Ù„Ø© Ù„Ù„Ù…Ù†ØªØ³Ø¨ - Ø§Ø³ØªØ®Ø¯Ø§Ù… take(1) Ù„Ù…Ù†Ø¹ Ø§Ù„Ø§Ø´ØªØ±Ø§ÙƒØ§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø©
    this.applicantService
      .getApplicantByFileNumber$(applicant.fileNumber)
      .pipe(
        take(1), // âœ… Ù…Ù†Ø¹ Ø§Ù„Ø§Ø´ØªØ±Ø§ÙƒØ§Øª Ø§Ù„Ù…ÙƒØ±Ø±Ø© - ÙŠØªÙ… ØªÙ†ÙÙŠØ° Ø§Ù„Ø·Ù„Ø¨ Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø© ÙÙ‚Ø·
      )
      .subscribe({
        next: (applicantDetails: ApplicantDetailsModel) => {
          this.isLoadingApplicantDetails = false;
          if (applicantDetails) {
            this.applicant = this.mergeApplicantDetailsWithBasicInfo(
              applicantDetails,
              this.lastSelectedApplicantSummary,
            );
            this.mapApplicantToDecision(applicantDetails);
            this.checkPreviousDecisionStatus(applicantDetails); // âœ… ÙØ­Øµ Ø­Ø§Ù„Ø© Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©
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
        },
      });
  }

  private mergeApplicantDetailsWithBasicInfo(
    details: ApplicantDetailsModel,
    basicInfo: Applicant | null,
  ): ApplicantDetailsModel {
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
    // âœ… Ù…Ù†Ø¹ Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ loadClinicsData Ø¹Ø¯Ø© Ù…Ø±Ø§Øª Ù„Ù†ÙØ³ Ø±Ù‚Ù… Ø§Ù„Ù…Ù„Ù
    if (this.isLoadingClinicsData && this.currentFileNumber === fileNumber) {
      return;
    }

    this.isLoadingClinicsData = true;
    this.loading = true;

    // Ø¬Ù„Ø¨ Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª ÙˆØ§Ù„ØªØ­Ø§Ù„ÙŠÙ„ Ù„ÙƒÙ„ Ø¹ÙŠØ§Ø¯Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ®ØµØµ Ø§Ù„ØµØ­ÙŠØ­
    const eyeConsultations$ = this.getConsultationsBySpecialization(
      this.EYE_SPECIALIZATION_ID,
      fileNumber,
    );
    const eyeInvestigations$ = this.getInvestigationsBySpecialization(
      this.EYE_SPECIALIZATION_ID,
      fileNumber,
    );

    const internalConsultations$ = this.getConsultationsBySpecialization(
      this.INTERNAL_SPECIALIZATION_ID,
      fileNumber,
    );
    const internalInvestigations$ = this.getInvestigationsBySpecialization(
      this.INTERNAL_SPECIALIZATION_ID,
      fileNumber,
    );

    const surgicalConsultations$ = this.getConsultationsBySpecialization(
      this.SURGICAL_SPECIALIZATION_ID,
      fileNumber,
    );
    const surgicalInvestigations$ = this.getInvestigationsBySpecialization(
      this.SURGICAL_SPECIALIZATION_ID,
      fileNumber,
    );

    const orthopedicConsultations$ = this.getConsultationsBySpecialization(
      this.ORTHOPEDIC_SPECIALIZATION_ID,
      fileNumber,
    );
    const orthopedicInvestigations$ = this.getInvestigationsBySpecialization(
      this.ORTHOPEDIC_SPECIALIZATION_ID,
      fileNumber,
    );

    const earConsultations$ = this.getConsultationsBySpecialization(
      this.EAR_SPECIALIZATION_ID,
      fileNumber,
    );
    const earInvestigations$ = this.getInvestigationsBySpecialization(
      this.EAR_SPECIALIZATION_ID,
      fileNumber,
    );

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
      orthopedicInvestigations: orthopedicInvestigations$,
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
        // âœ… Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªÙƒØ±Ø§Ø±Ø§Øª Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ© Ù„Ù„ØªØ£ÙƒØ¯
        const eyeConsultations = this.removeDuplicateConsultations(data.eyeConsultations);
        const eyeInvestigations = this.removeDuplicateInvestigations(data.eyeInvestigations);
        const earConsultations = this.removeDuplicateConsultations(data.earConsultations);
        const earInvestigations = this.removeDuplicateInvestigations(data.earInvestigations);
        const internalConsultations = this.removeDuplicateConsultations(data.internalConsultations);
        const internalInvestigations = this.removeDuplicateInvestigations(
          data.internalInvestigations,
        );
        const surgicalConsultations = this.removeDuplicateConsultations(data.surgicalConsultations);
        const surgicalInvestigations = this.removeDuplicateInvestigations(
          data.surgicalInvestigations,
        );
        const orthopedicConsultations = this.removeDuplicateConsultations(
          data.orthopedicConsultations,
        );
        const orthopedicInvestigations = this.removeDuplicateInvestigations(
          data.orthopedicInvestigations,
        );

        this.clinicsData = [
          {
            name: 'عيادة العيون',
            icon: 'pi pi-eye',
            exam: this.applicant.eyeExam,
            consultations: eyeConsultations,
            investigations: eyeInvestigations,
          },
          {
            name: 'عيادة الباطنة',
            icon: 'pi pi-heart',
            exam: this.applicant.internalExam,
            consultations: internalConsultations,
            investigations: internalInvestigations,
          },
          {
            name: 'عيادة الجراحة',
            icon: 'pi pi-briefcase',
            exam: this.applicant.surgicalExam,
            consultations: surgicalConsultations,
            investigations: surgicalInvestigations,
          },
          {
            name: 'عيادة العظمية',
            icon: 'pi pi-bone',
            exam: this.applicant.orthopedicExamDto,
            consultations: orthopedicConsultations,
            investigations: orthopedicInvestigations,
          },
          {
            name: 'عيادة الأذنية',
            icon: 'pi pi-volume-up',
            exam: this.applicant.earClinic,
            consultations: earConsultations,
            investigations: earInvestigations,
          },
        ];
        this.loading = false;
        this.isLoadingClinicsData = false;
      },
      error: (err) => {
        this.toastr.error(
          'حدث خطأ أثناء جلب بيانات العيادات',
          'خطأ',
        );
        this.loading = false;
        this.isLoadingClinicsData = false;
      },
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
      error: () => {},
    });
  }
  getMaritalStatusDescription(id: number): string {
    const status = this.maritalStatuses.find((s) => s.maritalStatusID === id);
    return status ? status.description : 'غير محدد';
  }

  loadResults() {
    this.lookupService.getResults().subscribe({
      next: (data) => {
        this.results = data;
        const rejected = this.results.find((r) => r.description == 'مرفوض');
        const postponed = this.results.find((r) => r.description == 'مؤجل');
        const approved = this.results.find((r) => r.description == 'مقبول');
        this.rejectedId = rejected ? rejected.resultID : null;
        this.postponedId = postponed ? postponed.resultID : null;
        this.acceptedId = approved ? approved.resultID : null;
      },
      error: () => {},
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
      decisionDate: new Date().toISOString().split('T')[0],
    };
  }

  /**
   * âœ… ÙØ­Øµ Ø­Ø§Ù„Ø© Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø© ÙˆØªØ­Ø¯ÙŠØ¯ Ø¥Ù…ÙƒØ§Ù†ÙŠØ© Ø§Ù„ØªØ¹Ø¯ÙŠÙ„
   * - Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ù‡Ù†Ø§Ùƒ Ø£ÙŠ Ù†ØªÙŠØ¬Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ù…ÙˆØ¬ÙˆØ¯Ø© â†’ Ù…Ù†Ø¹ Ø¥Ø¶Ø§ÙØ© Ù†ØªÙŠØ¬Ø© Ø¬Ø¯ÙŠØ¯Ø©
   * - ÙŠÙ…ÙƒÙ† ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù†ØªÙŠØ¬Ø© ÙÙ‚Ø· ÙÙŠ dialog Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ù…Ù†ØªØ³Ø¨ÙŠÙ† Ø¥Ø°Ø§ ÙƒØ§Ù†Øª "Ù…Ø¤Ø¬Ù„"
   */
  private checkPreviousDecisionStatus(applicant: ApplicantDetailsModel) {
    // Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† Ø§Ù„Ø­Ø§Ù„Ø© Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠØ©
    this.canEditDecision = true;
    this.previousDecisionLocked = false;

    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ÙˆØ¬ÙˆØ¯ Ù†ØªÙŠØ¬Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ø³Ø§Ø¨Ù‚Ø©
    if (!applicant?.finalDecision?.resultID) {
      // Ù„Ø§ ØªÙˆØ¬Ø¯ Ù†ØªÙŠØ¬Ø© Ø³Ø§Ø¨Ù‚Ø©ØŒ ÙŠÙ…ÙƒÙ† Ø§Ù„ØªØ¹Ø¯ÙŠÙ„
      return;
    }

    const previousResultID = applicant.finalDecision.resultID;

    // âœ… Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ù‡Ù†Ø§Ùƒ Ø£ÙŠ Ù†ØªÙŠØ¬Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ù…ÙˆØ¬ÙˆØ¯Ø© â†’ Ù…Ù†Ø¹ Ø¥Ø¶Ø§ÙØ© Ù†ØªÙŠØ¬Ø© Ø¬Ø¯ÙŠØ¯Ø©
    // (ÙŠÙ…ÙƒÙ† ØªØ¹Ø¯ÙŠÙ„Ù‡Ø§ ÙÙ‚Ø· ÙÙŠ dialog Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ù…Ù†ØªØ³Ø¨ÙŠÙ† Ø¥Ø°Ø§ ÙƒØ§Ù†Øª "Ù…Ø¤Ø¬Ù„")
    this.previousDecisionLocked = true;
    this.canEditDecision = false;

    // ØªØ¹ÙŠÙŠÙ† Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø© ÙÙŠ Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ù„Ù„Ø¹Ø±Ø¶ ÙÙ‚Ø·
    this.decisionModel.resultID = previousResultID;
    this.decisionModel.reason = applicant.finalDecision.reason || '';
    this.decisionModel.postponeDuration = applicant.finalDecision.postponeDuration || '';

    // ØªØ­Ø¯ÙŠØ« Ø­Ø§Ù„Ø© isApproved Ùˆ isAccept Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©
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
    // âœ… Ù…Ù†Ø¹ Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø© Ù…Ù‚ÙÙ„Ø©
    if (this.previousDecisionLocked || !this.canEditDecision) {
      return;
    }

    if (selectedId === this.postponedId) {
      this.isApproved = false;
    } else {
      this.isApproved = true;
      this.decisionModel.postponeDuration = '';
    }
    if (selectedId == this.acceptedId) {
      this.isAccept = true;
    } else {
      this.isAccept = false;
    }
  }

  submitDecision() {
    // âœ… Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¥Ù…ÙƒØ§Ù†ÙŠØ© Ø§Ù„ØªØ¹Ø¯ÙŠÙ„
    if (this.previousDecisionLocked || !this.canEditDecision) {
      this.responseMessage =
        'لا يمكن إعادة تقييم هذا المنتسب لأنه تم إصدار نتيجة نهائية سابقاً.';
      this.responseSuccess = false;
      this.toastr.warning(
        'لا يمكن إعادة تقييم هذا المنتسب لأنه تم إصدار نتيجة نهائية سابقاً.',
        'تنبيه',
      );
      return;
    }

    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ù‚Ø¨Ù„ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„
    const requiredFields = [
      'orthopedicExamID',
      'surgicalExamID',
      'internalExamID',
      'eyeExamID',
      'applicantFileNumber',
      'resultID',
      'decisionDate',
    ];
    const missingFields = requiredFields.filter(
      (field) => !this.decisionModel[field as keyof typeof this.decisionModel],
    );

    if (missingFields.length > 0) {
      this.responseMessage = 'بيانات ناقصة: ' + missingFields.join(', ');
      this.responseSuccess = false;
      this.toastr.warning('بيانات ناقصة: ' + missingFields.join(', '), 'تنبيه');
      return;
    }

    // âœ… Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ÙˆØ¬ÙˆØ¯ Ù†ØªÙŠØ¬Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ù…Ù† Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ù†ØªØ³Ø¨ Ø§Ù„Ù…Ø­Ù…Ù„Ø© (Ø¨Ø¯ÙˆÙ† Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ API Ø¥Ø¶Ø§ÙÙŠ)
    if (this.applicant?.finalDecision?.resultID) {
      this.responseMessage =
        'لا يمكن إضافة نتيجة نهائية، حيث توجد نتيجة نهائية مسجّلة مسبقاً.';
      this.responseSuccess = false;
      this.toastr.warning(
        'لا يمكن إضافة نتيجة نهائية، حيث توجد نتيجة نهائية مسجّلة مسبقاً.',
        'تنبيه',
      );
      return;
    }

    // âœ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ù‚Ø±Ø§Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠ Ù…Ø¨Ø§Ø´Ø±Ø© (Ø§Ù„Ù€ backend Ø³ÙŠØªØ­Ù‚Ù‚ Ù…Ù† ÙˆØ¬ÙˆØ¯ Ù†ØªÙŠØ¬Ø© Ù†Ù‡Ø§Ø¦ÙŠØ©)
    this.loading = true;

    this.decisionService
      .createFinalDecision(this.decisionModel)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          const isSuccessful = res?.succeeded !== false;
          if (isSuccessful) {
            this.responseMessage = 'تم رفع النتيجة بنجاح وتم تثبيت حالة الملف.';
            this.responseSuccess = true;
            this.toastr.success('تم رفع النتيجة بنجاح', 'نجاح', {
              timeOut: 2500,
              positionClass: 'toast-top-center',
            });
            this.previousDecisionLocked = true;
            this.canEditDecision = false;
            if (this.applicant) {
              const existing = this.applicant.finalDecision;
              const newDecisionId = (res?.data as { decisionID?: number })?.decisionID;
              const result = existing?.result ??
                this.results.find((r) => r.resultID === this.decisionModel.resultID) ?? {
                  resultID: this.decisionModel.resultID,
                  description: '',
                };
              this.applicant.finalDecision = {
                decisionID: newDecisionId ?? existing?.decisionID ?? 0,
                orthopedicExamID:
                  this.decisionModel.orthopedicExamID ?? existing?.orthopedicExamID ?? 0,
                surgicalExamID: this.decisionModel.surgicalExamID ?? existing?.surgicalExamID ?? 0,
                internalExamID: this.decisionModel.internalExamID ?? existing?.internalExamID ?? 0,
                eyeExamID: this.decisionModel.eyeExamID ?? existing?.eyeExamID ?? 0,
                applicantFileNumber:
                  this.decisionModel.applicantFileNumber ?? existing?.applicantFileNumber ?? '',
                resultID: this.decisionModel.resultID,
                reason: this.decisionModel.reason ?? '',
                postponeDuration: this.decisionModel.postponeDuration ?? '',
                decisionDate: this.decisionModel.decisionDate,
                result,
                supervisorAddedAt: new Date().toISOString(),
                ...(existing && {
                  receptionAddedAt: existing.receptionAddedAt,
                  supervisorLastModifiedAt: existing.supervisorLastModifiedAt,
                  isExportedToRecruitment: existing.isExportedToRecruitment,
                  exportedAt: existing.exportedAt,
                }),
              };
            }
          } else {
            const errorMsg = res?.message || 'حدث خطأ غير معروف';
            this.responseMessage = errorMsg;
            this.responseSuccess = false;
            this.toastr.error(errorMsg, 'خطأ');
          }
        },
        error: (err) => {
          let serverMsg = 'حدث خطأ أثناء الاتصال بالسيرفر';

          if (err?.status === 404) {
            serverMsg =
              'الـ endpoint غير موجود. يرجى التحقق من إعدادات الـ API أو الاتصال بالدعم الفني.';
          } else if (err?.error?.errors) {
            const errorsMap = err.error.errors;
            if (Array.isArray(errorsMap)) {
              serverMsg = errorsMap.join(', ');
            } else if (Array.isArray(errorsMap?.detail)) {
              serverMsg = errorsMap.detail.join(', ');
            } else if (errorsMap?.message) {
              serverMsg = errorsMap.message;
            }
          } else if (err?.error?.message) {
            serverMsg = err.error.message;
          }

          this.responseMessage = serverMsg;
          this.responseSuccess = false;
          this.toastr.error(serverMsg, 'خطأ');
          console.error('Error creating final decision:', err);
        },
      });
  }

  resetForm() {
    // Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ ÙÙŠ Ø§Ù„Ù‚Ø§Ù„Ø¨ Ø£ÙˆÙ„Ø§Ù‹
    if (this.decisionForm) {
      this.decisionForm.resetForm();
    }

    // Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…ØªØºÙŠØ±Ø§Øª Ø¥Ù„Ù‰ Ø­Ø§Ù„ØªÙ‡Ø§ Ø§Ù„Ø£ÙˆÙ„ÙŠØ©
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
    const result = this.results.find((r) => r.resultID === resultID);
    return result ? result.description : 'غير محدد';
  }

  getResultSeverity(
    resultID: number,
  ): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | null {
    const result = this.results.find((r) => r.resultID === resultID);
    if (!result) return 'secondary';

    const description = result.description.toLowerCase();
    if (description.includes('مقبول') || description.includes('قبول')) return 'success';
    if (description.includes('مرفوض') || description.includes('رفض')) return 'danger';
    if (description.includes('مؤجل') || description.includes('تأجيل')) return 'warn';
    return 'info';
  }

  getStatusSeverity(
    status: string,
  ): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | null {
    if (!status) return 'secondary';
    const statusLower = status.toLowerCase();
    if (statusLower.includes('مكتمل') || statusLower.includes('جاهز')) return 'success';
    if (statusLower.includes('قيد') || statusLower.includes('انتظار')) return 'warn';
    if (statusLower.includes('ملغي') || statusLower.includes('رفض')) return 'danger';
    return 'info';
  }

  /**
   * âœ… Ø­Ø³Ø§Ø¨ Ø¹Ø¯Ø¯ Ø§Ù„ØªÙˆØ§Ø±ÙŠØ® Ø§Ù„Ù…ØªØ§Ø­Ø© ÙÙŠ Ø§Ù„Ù‚Ø±Ø§Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠ
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
    switch (clinicName) {
      case 'عيادة العيون':
        return this.EYE_SPECIALIZATION_ID;
      case 'عيادة الباطنة':
        return this.INTERNAL_SPECIALIZATION_ID;
      case 'عيادة الجراحة':
        return this.SURGICAL_SPECIALIZATION_ID;
      case 'عيادة العظمية':
        return this.ORTHOPEDIC_SPECIALIZATION_ID;
      case 'عيادة الأذنية':
        return this.EAR_SPECIALIZATION_ID;
      default:
        return 0;
    }
  }

  /** يُرجع doctorID طبيب التقييم الطبي للعيادة حسب التخصص (ليظهر مع الاستشارات/التحاليل). */
  private getDoctorIdForSpecialization(specializationId: number): number | null {
    if (!this.applicant) return null;
    switch (specializationId) {
      case this.EYE_SPECIALIZATION_ID:
        return this.applicant.eyeExam?.doctorID ?? null;
      case this.INTERNAL_SPECIALIZATION_ID:
        return this.applicant.internalExam?.doctorID ?? null;
      case this.SURGICAL_SPECIALIZATION_ID:
        return this.applicant.surgicalExam?.doctorID ?? null;
      case this.ORTHOPEDIC_SPECIALIZATION_ID:
        return this.applicant.orthopedicExamDto?.doctorID ?? null;
      case this.EAR_SPECIALIZATION_ID:
        return this.applicant.earClinic?.doctorID ?? null;
      default:
        return null;
    }
  }

  // ==================== Consultation Methods ====================
  openEditConsultationModal(consultation: Consultation) {
    this.selectedConsultation = consultation;
    this.consultationForm = this.fb.group({
      result: [consultation.result || '', Validators.required],
      attachment: [consultation.attachment || null],
    });
    this.uploadedPath = consultation.attachment || null;
    this.previewUrl = consultation.attachment
      ? `${environment.apiUrl}/${consultation.attachment}`
      : null;
    this.showConsultationModal = true;
  }

  openAddConsultationModal(clinicName: string, specializationId: number) {
    const clinicDoctorId = this.getDoctorIdForSpecialization(specializationId);
    this.selectedConsultation = {
      consultationID: 0,
      applicantFileNumber: this.applicant.fileNumber,
      consultationType: '',
      referralReason: '', // ✅ جديد
      result: '',
      attachment: '',
      doctorID: clinicDoctorId ?? null,
    } as Consultation;
    this.consultationForm = this.fb.group({
      consultationType: ['', Validators.required],
      // referredDoctor: ['', Validators.required], // âŒ ØªÙ… Ø­Ø°ÙÙ‡
      referralReason: [''], // âœ… Ø¬Ø¯ÙŠØ¯ - Ø§Ø®ØªÙŠØ§Ø±ÙŠ
      result: ['', Validators.required],
      attachment: [null],
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
    reader.onload = (e: any) => (this.previewUrl = e.target.result);
    reader.readAsDataURL(file);

    this.http
      .post<{ succeeded?: boolean; path?: string }>(this.fileUploadUrl, formData, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (response) => {
          const path = response.path ?? (response as any).data;
          if (path) {
            this.uploadedPath = path;
            this.consultationForm.patchValue({ attachment: path });
            this.toastr.success('تم رفع الملف بنجاح', 'نجاح');
          } else {
            this.toastr.error('فشل رفع الملف', 'خطأ');
          }
          this.uploadingFile = false;
        },
        error: () => {
          this.toastr.error('فشل رفع الملف', 'خطأ');
          this.uploadingFile = false;
        },
      });
  }

  saveConsultation() {
    if (this.consultationForm.invalid) {
      this.toastr.warning(
        'يرجى تعبئة جميع الحقول المطلوبة',
        'تنبيه',
      );
      return;
    }

    if (!this.selectedConsultation) return;

    const formValue = this.consultationForm.value;
    const doctorID =
      this.selectedConsultation.doctorID ??
      this.authService.getDoctorId() ??
      null;
    const updatedConsultation: Consultation = {
      ...this.selectedConsultation,
      doctorID,
      applicantFileNumber: this.applicant.fileNumber,
      consultationType: formValue.consultationType || this.selectedConsultation.consultationType,
      // referredDoctor: formValue.referredDoctor || this.selectedConsultation.referredDoctor, // âŒ ØªÙ… Ø­Ø°ÙÙ‡
      referralReason: formValue.referralReason || this.selectedConsultation.referralReason || '', // âœ… Ø¬Ø¯ÙŠØ¯
      result: formValue.result,
      attachment: this.uploadedPath || this.selectedConsultation.attachment || '',
    };

    this.loading = true;
    const isUpdate =
      this.selectedConsultation.consultationID && this.selectedConsultation.consultationID > 0;

    const request$ = isUpdate
      ? this.http.put<ApiResponse<Consultation>>(
          `${this.consultationUrl}/${this.selectedConsultation.consultationID}`,
          updatedConsultation,
          {
            headers: this.getAuthHeaders().set('Content-Type', 'application/json'),
          },
        )
      : this.http.post<ApiResponse<Consultation>>(this.consultationUrl, updatedConsultation, {
          headers: this.getAuthHeaders().set('Content-Type', 'application/json'),
        });

    request$.subscribe({
      next: (response) => {
        if (response.succeeded) {
          this.toastr.success(
            isUpdate
              ? 'تم تحديث الاستشارة بنجاح'
              : 'تم إضافة الاستشارة بنجاح',
            'نجاح',
          );
          this.closeConsultationModal();
          this.loadClinicsData(this.applicant.fileNumber);
        } else {
          this.toastr.error('فشل العملية', 'خطأ');
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error('فشل العملية', 'خطأ');
        this.loading = false;
      },
    });
  }

  // ==================== Investigation Methods ====================
  openEditInvestigationModal(investigation: Investigation) {
    this.selectedInvestigation = investigation;
    this.investigationForm = this.fb.group({
      type: [investigation.type || ''],
      result: [investigation.result || '', Validators.required],
      status: [
        investigation.status || (investigation.result ? 'مكتمل' : 'مؤجل'),
        Validators.required,
      ],
      attachment: [investigation.attachment || null],
    });
    this.uploadedPath = investigation.attachment || null;
    this.previewUrl = investigation.attachment
      ? `${environment.apiUrl}/${investigation.attachment}`
      : null;
    this.showInvestigationModal = true;
  }

  openAddInvestigationModal(clinicName: string, specializationId: number) {
    const clinicDoctorId = this.getDoctorIdForSpecialization(specializationId);
    this.selectedInvestigation = {
      investigationID: 0,
      applicantFileNumber: this.applicant.fileNumber,
      type: '',
      result: '',
      status: 'مؤجل',
      attachment: '',
      doctorID: clinicDoctorId ?? 0,
    } as Investigation;
    this.investigationForm = this.fb.group({
      type: ['', Validators.required],
      result: ['', Validators.required],
      status: ['مؤجل', Validators.required],
      attachment: [null],
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
    reader.onload = (e: any) => (this.previewUrl = e.target.result);
    reader.readAsDataURL(file);

    this.http
      .post<{ succeeded?: boolean; path?: string }>(this.fileUploadUrl, formData, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (response) => {
          const path = response.path ?? (response as any).data;
          if (path) {
            this.uploadedPath = path;
            this.investigationForm.patchValue({ attachment: path });
            this.toastr.success('تم رفع الملف بنجاح', 'نجاح');
          } else {
            this.toastr.error('فشل رفع الملف', 'خطأ');
          }
          this.uploadingFile = false;
        },
        error: () => {
          this.toastr.error('فشل رفع الملف', 'خطأ');
          this.uploadingFile = false;
        },
      });
  }

  saveInvestigation() {
    if (this.investigationForm.invalid) {
      this.toastr.warning(
        'يرجى تعبئة جميع الحقول المطلوبة',
        'تنبيه',
      );
      return;
    }

    if (!this.selectedInvestigation) return;

    const doctorID =
      this.selectedInvestigation.doctorID ||
      this.authService.getDoctorId() ||
      0;
    if (!doctorID) {
      this.toastr.error(
        'لا يمكن إضافة التحليل: يجب إكمال التقييم الطبي للعيادة أولاً (لربط الطبيب بالعيادة)',
        'خطأ',
      );
      return;
    }
    const formValue = this.investigationForm.value;
    const updatedInvestigation: Investigation = {
      ...this.selectedInvestigation,
      doctorID,
      applicantFileNumber: this.applicant.fileNumber,
      type: formValue.type || this.selectedInvestigation.type,
      result: formValue.result,
      status: formValue.status,
      attachment: this.uploadedPath || this.selectedInvestigation.attachment || '',
    };

    this.loading = true;
    const isUpdate =
      this.selectedInvestigation.investigationID && this.selectedInvestigation.investigationID > 0;

    const request$ = isUpdate
      ? this.http.put<ApiResponse<Investigation>>(
          `${this.investigationUrl}/${this.selectedInvestigation.investigationID}`,
          updatedInvestigation,
          {
            headers: this.getAuthHeaders().set('Content-Type', 'application/json'),
          },
        )
      : this.http.post<ApiResponse<Investigation>>(this.investigationUrl, updatedInvestigation, {
          headers: this.getAuthHeaders().set('Content-Type', 'application/json'),
        });

    request$.subscribe({
      next: (response) => {
        if (response.succeeded) {
          this.toastr.success(
            isUpdate
              ? 'تم تحديث التحليل بنجاح'
              : 'تم إضافة التحليل بنجاح',
            'نجاح',
          );
          this.closeInvestigationModal();
          this.loadClinicsData(this.applicant.fileNumber);
        } else {
          this.toastr.error('فشل العملية', 'خطأ');
        }
        this.loading = false;
      },
      error: () => {
        this.toastr.error('فشل العملية', 'خطأ');
        this.loading = false;
      },
    });
  }
}
