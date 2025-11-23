import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { LookupService } from '../../../../shared/services/lookup.service';
import { Result } from '../../../doctor/models/internal-exam.model';
import { ApplicantDetailsModel, Consultation, Investigation } from '../../../reception/models/applicant.model';
import { MaritalStatus } from '../../../reception/models/marital-status.model';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { MaritalStatusService } from '../../../reception/services/marital-status.service';
import { ArchiveModel } from '../../models/archive.model';
import { environment } from '../../../../../environments/environment';
import { Subject, forkJoin, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { ApiResponse, PagedResponse } from '../../../applicants/models/api-response.model';
declare const printJS: any;
declare const html2pdf: any;

@Component({
  selector: 'app-applicant-profile',
  imports: [CommonModule, GregorianDatePipe],
  templateUrl: './applicant-profile.html',
  styleUrl: './applicant-profile.scss'
})
export class ApplicantProfile implements OnInit, OnDestroy {
  applicant?: ApplicantDetailsModel;
  results: Result[] = [];
  maritalStatuses: MaritalStatus[] = [];
  archive: ArchiveModel | null = null;
  attachments: AttachmentItem[] = [];
  attachmentsByClinic: Map<string, AttachmentItem[]> = new Map();
  notes: NotesItem[] = [];
  clinicConsultations: Map<string, Consultation[]> = new Map();
  clinicInvestigations: Map<string, Investigation[]> = new Map();
  private destroy$ = new Subject<void>();
  date: Date = new Date();

  // Specialization IDs
  private readonly EYE_SPECIALIZATION_ID = 1;
  private readonly INTERNAL_SPECIALIZATION_ID = 2;
  private readonly SURGICAL_SPECIALIZATION_ID = 3;
  private readonly ORTHOPEDIC_SPECIALIZATION_ID = 4;
  private readonly EAR_SPECIALIZATION_ID = 5;

  private readonly consultationUrl = `${environment.apiUrl}/api/Consultations`;
  private readonly investigationUrl = `${environment.apiUrl}/api/Investigations`;

  constructor(
    private route: ActivatedRoute,
    private applicantService: ApplicantService,
    private lookupService: LookupService,
    private maritalStatusService: MaritalStatusService,
    private router: Router,
    private http: HttpClient
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state: any = navigation?.extras?.state ?? history.state ?? {};
    this.archive = state['archive'] ?? state['archiveData'] ?? null;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    const state: any = history.state ?? {};
    if (!this.archive && (state.archive || state.archiveData)) {
      this.archive = state.archive ?? state.archiveData;
    }
    const fileNumber = this.route.snapshot.paramMap.get('fileNumber')!;
    this.loadApplicant(fileNumber);
    this.loadResults();
    this.loadMaritalStatuses();

  }

  private loadApplicant(fileNumber: string) {
    this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
      next: (data) => {
        this.applicant = data;
        this.loadAllClinicAttachments(fileNumber, data);
      },
      error: () => {
        console.error('فشل في تحميل بيانات المنتسب');
      }
    });
  }

  private loadResults() {
    this.lookupService.getResults().subscribe({
      next: (data) => (this.results = data),
      error: (err) => console.error('فشل في تحميل النتائج', err)
    });
  }

  private loadMaritalStatuses() {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: (err) => console.error('فشل في تحميل الحالات الاجتماعية', err)
    });
  }


  getMaritalStatusDescription(id: number): string {
    const status = this.maritalStatuses.find(s => s.maritalStatusID === id);
    return status ? status.description : 'غير محدد';
  }

  getResultDescription(resultID?: number): string {
    if (!resultID) return 'غير محدد';
    const result = this.results.find(r => r.resultID === resultID);
    return result ? result.description : 'غير محدد';
  }

  printProfile() {
    // حفظ العنوان الأصلي
    const originalTitle = document.title;
    // إزالة العنوان قبل الطباعة لتجنب طباعته في الهيدر
    document.title = '';
    
    // إزالة أي معلومات من URL
    const originalUrl = window.location.href;
    
    window.print();
    
    // استعادة العنوان بعد الطباعة
    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  }

  openAttachment(path: string) {
    if (!path) {
      return;
    }
    const url = this.resolveAttachmentUrl(path);
    window.open(url, '_blank');
  }

  hasAttachments(): boolean {
    return this.attachments.length > 0;
  }

  private loadAllClinicAttachments(fileNumber: string, applicant: ApplicantDetailsModel) {
    const items: AttachmentItem[] = [];

    // جلب المرفقات من كل العيادات
    const specializations = [
      { id: this.EYE_SPECIALIZATION_ID, name: 'عيادة العيون' },
      { id: this.INTERNAL_SPECIALIZATION_ID, name: 'عيادة الباطنة' },
      { id: this.SURGICAL_SPECIALIZATION_ID, name: 'عيادة الجراحة' },
      { id: this.ORTHOPEDIC_SPECIALIZATION_ID, name: 'عيادة العظمية' },
      { id: this.EAR_SPECIALIZATION_ID, name: 'عيادة الأذنية' }
    ];

    const consultations$ = specializations.map(spec =>
      this.getConsultationsBySpecialization(spec.id, fileNumber).pipe(
        map(consultations => ({ consultations, clinicName: spec.name }))
      )
    );

    const investigations$ = specializations.map(spec =>
      this.getInvestigationsBySpecialization(spec.id, fileNumber).pipe(
        map(investigations => ({ investigations, clinicName: spec.name }))
      )
    );

    forkJoin([...consultations$, ...investigations$]).subscribe({
      next: (results) => {
        // استخدام Map لتجميع المرفقات حسب المسار + العيادة + النوع لتجنب التكرار
        // المفتاح: path + clinicName + source + ID
        const attachmentsMap = new Map<string, AttachmentItem>();
        const seenConsultationIds = new Set<number>();
        const seenInvestigationIds = new Set<number>();
        
        // معالجة الاستشارات (النتائج من 0 إلى 4)
        results.slice(0, 5).forEach((result: any, index: number) => {
          // استخدام اسم العيادة من المصفوفة مباشرة لضمان الدقة
          const clinicName = specializations[index]?.name || result.clinicName || '';
          
          if (result && result.consultations && Array.isArray(result.consultations) && result.consultations.length > 0) {
            result.consultations.forEach((consultation: Consultation) => {
              // تجنب معالجة نفس الاستشارة مرتين
              if (consultation && consultation.consultationID && !seenConsultationIds.has(consultation.consultationID)) {
                seenConsultationIds.add(consultation.consultationID);
                
                if (consultation.attachment) {
                  const trimmedPath = consultation.attachment.trim();
                  if (trimmedPath) {
                    // استخدام مفتاح فريد: path + clinicName + source + consultationID
                    const uniqueKey = `${trimmedPath}|${clinicName}|الاستشارات|${consultation.consultationID}`;
                    
                    if (!attachmentsMap.has(uniqueKey)) {
                      attachmentsMap.set(uniqueKey, {
                        label: 'مرفق الاستشارة الطبية',
                        source: 'نتيجة الاستشارة ',
                        clinicName: clinicName,
                        diagnosis: consultation.result || 'لا يوجد تشخيص',
                        path: trimmedPath
                      });
                    }
                  }
                }
              }
            });
          }
        });

        // معالجة التحاليل (النتائج من 5 إلى 9)
        results.slice(5, 10).forEach((result: any, index: number) => {
          // استخدام اسم العيادة من المصفوفة مباشرة لضمان الدقة
          const clinicName = specializations[index]?.name || result.clinicName || '';
          
          if (result && result.investigations && Array.isArray(result.investigations) && result.investigations.length > 0) {
            result.investigations.forEach((investigation: Investigation) => {
              // تجنب معالجة نفس التحليل مرتين
              if (investigation && investigation.investigationID && !seenInvestigationIds.has(investigation.investigationID)) {
                seenInvestigationIds.add(investigation.investigationID);
                
                if (investigation.attachment) {
                  const trimmedPath = investigation.attachment.trim();
                  if (trimmedPath) {
                    // استخدام مفتاح فريد: path + clinicName + source + investigationID
                    const uniqueKey = `${trimmedPath}|${clinicName}|المخبر|${investigation.investigationID}`;
                    
                    if (!attachmentsMap.has(uniqueKey)) {
                      attachmentsMap.set(uniqueKey, {
                        label: 'مرفق التحاليل المخبرية',
                        source: 'نتائج المخبر ',
                        clinicName: clinicName,
                        diagnosis: investigation.result || 'لا يوجد نتيجة',
                        path: trimmedPath
                      });
                    }
                  }
                }
              }
            });
          }
        });

        // تحويل Map إلى مصفوفة
        this.attachments = Array.from(attachmentsMap.values());
        
        // إضافة النسخة الرقمية في النهاية إذا كانت موجودة
        if (this.archive?.digitalCopy) {
          const digitalCopyItem: AttachmentItem = {
            label: 'النسخة الرقمية للملف',
            source: 'الأرشيف',
            clinicName: '',
            diagnosis: '',
            path: this.archive.digitalCopy.trim()
          };
          this.attachments.push(digitalCopyItem);
        }
        
        // تجميع المرفقات حسب العيادة (بعد إضافة النسخة الرقمية)
        this.groupAttachmentsByClinic();
        
        // تجميع الاستشارات والتحاليل حسب العيادة للملاحظات
        this.collectClinicData(results, specializations);
        
        // جمع الملاحظات والتوصيات
        if (this.applicant) {
          this.collectNotes(this.applicant);
        }
      },
      error: (err) => {
        console.error('خطأ في جلب المرفقات من العيادات', err);
        // في حالة الخطأ، نستخدم المرفقات الأساسية فقط
        this.buildBasicAttachmentList(applicant);
      }
    });
  }

  private buildBasicAttachmentList(applicant: ApplicantDetailsModel) {
    const items: AttachmentItem[] = [];
    const addItem = (label: string, source: string, clinicName: string, diagnosis: string, path?: string | null) => {
      if (!path) {
        return;
      }
      items.push({
        label,
        source,
        clinicName,
        diagnosis,
        path: path.trim()
      });
    };

    addItem('النسخة الرقمية للملف', 'الأرشيف', '', '', this.archive?.digitalCopy);
    addItem('مرفق الاستشارة الطبية', 'الاستشارات', '', applicant.consultation?.result || '', applicant.consultation?.attachment);
    addItem('مرفق التحاليل المخبرية', 'المخبر', '', applicant.investigation?.result || '', applicant.investigation?.attachment);

    this.attachments = items;
  }

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
        return this.removeDuplicateConsultations(items);
      }),
      catchError(() => {
        return of([]);
      })
    );
  }

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
        return this.removeDuplicateInvestigations(items);
      }),
      catchError(() => {
        return of([]);
      })
    );
  }

  private removeDuplicateConsultations(consultations: Consultation[]): Consultation[] {
    if (!consultations || consultations.length === 0) {
      return [];
    }
    const seen = new Set<number>();
    return consultations.filter(consultation => {
      if (!consultation || !consultation.consultationID) {
        return false;
      }
      const id = consultation.consultationID;
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }

  private removeDuplicateInvestigations(investigations: Investigation[]): Investigation[] {
    if (!investigations || investigations.length === 0) {
      return [];
    }
    const seen = new Set<number>();
    return investigations.filter(investigation => {
      if (!investigation || !investigation.investigationID) {
        return false;
      }
      const id = investigation.investigationID;
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  private collectClinicData(results: any[], specializations: any[]) {
    this.clinicConsultations.clear();
    this.clinicInvestigations.clear();
    
    // استخدام Set عام لتجنب التكرار على مستوى جميع العيادات
    const globalSeenConsultationIds = new Set<number>();
    const globalSeenInvestigationIds = new Set<number>();
    
    // معالجة الاستشارات (النتائج من 0 إلى 4)
    results.slice(0, 5).forEach((result: any, index: number) => {
      const clinicName = specializations[index]?.name || result.clinicName || '';
      if (result && result.consultations && Array.isArray(result.consultations) && result.consultations.length > 0) {
        const uniqueConsultations = result.consultations.filter((c: Consultation) => {
          if (c && c.consultationID && !globalSeenConsultationIds.has(c.consultationID)) {
            globalSeenConsultationIds.add(c.consultationID);
            return true;
          }
          return false;
        });
        if (uniqueConsultations.length > 0) {
          this.clinicConsultations.set(clinicName, uniqueConsultations);
        }
      }
    });

    // معالجة التحاليل (النتائج من 5 إلى 9)
    results.slice(5, 10).forEach((result: any, index: number) => {
      const clinicName = specializations[index]?.name || result.clinicName || '';
      if (result && result.investigations && Array.isArray(result.investigations) && result.investigations.length > 0) {
        const uniqueInvestigations = result.investigations.filter((i: Investigation) => {
          if (i && i.investigationID && !globalSeenInvestigationIds.has(i.investigationID)) {
            globalSeenInvestigationIds.add(i.investigationID);
            return true;
          }
          return false;
        });
        if (uniqueInvestigations.length > 0) {
          this.clinicInvestigations.set(clinicName, uniqueInvestigations);
        }
      }
    });
  }

  private collectNotes(applicant: ApplicantDetailsModel) {
    const notes: NotesItem[] = [];
    const seenConsultationIds = new Set<number>();
    const seenInvestigationIds = new Set<number>();

    // إضافة نتائج الاستشارات من كل عيادة (بدون تكرار)
    this.clinicConsultations.forEach((consultations, clinicName) => {
      consultations.forEach((consultation, index) => {
        // تجنب عرض نفس الاستشارة مرتين
        if (consultation && consultation.consultationID && !seenConsultationIds.has(consultation.consultationID)) {
          seenConsultationIds.add(consultation.consultationID);
          
          const title = consultations.length > 1 
            ? `نتيجة الاستشارة ${index + 1} - ${clinicName}`
            : `نتيجة الاستشارة - ${clinicName}`;
          
          // بناء النص بشكل شامل: السبب + النتيجة
          let valueParts: string[] = [];
          
          if (consultation.referralReason && consultation.referralReason.trim()) {
            valueParts.push(`سبب الاستشارة: ${consultation.referralReason.trim()}`);
          }
          
          if (consultation.result && consultation.result.trim()) {
            valueParts.push(`النتيجة: ${consultation.result.trim()}`);
          }
          
          // إضافة الملاحظة فقط إذا كان هناك محتوى
          if (valueParts.length > 0) {
            notes.push({
              title: title,
              value: valueParts.join('\n'),
              type: 'consultation'
            });
          }
        }
      });
    });

    // إضافة نتائج التحاليل من كل عيادة (بدون تكرار)
    this.clinicInvestigations.forEach((investigations, clinicName) => {
      investigations.forEach((investigation, index) => {
        // تجنب عرض نفس التحليل مرتين
        if (investigation && investigation.investigationID && !seenInvestigationIds.has(investigation.investigationID)) {
          seenInvestigationIds.add(investigation.investigationID);
          
          const title = investigations.length > 1 
            ? `نتيجة التحليل ${index + 1} - ${clinicName}`
            : `نتيجة التحليل - ${clinicName}`;
          
          // بناء النص بشكل شامل: السبب + النتيجة
          let valueParts: string[] = [];
          
          if (investigation.investigationReason && investigation.investigationReason.trim()) {
            valueParts.push(`سبب التحليل: ${investigation.investigationReason.trim()}`);
          }
          
          if (investigation.result && investigation.result.trim()) {
            valueParts.push(`النتيجة: ${investigation.result.trim()}`);
          }
          
          // إضافة الملاحظة فقط إذا كان هناك محتوى
          if (valueParts.length > 0) {
            notes.push({
              title: title,
              value: valueParts.join('\n'),
              type: 'investigation'
            });
          }
        }
      });
    });

    // إضافة ملاحظات الفحوصات الطبية
    if (applicant.finalDecision?.reason) {
      notes.push({
        title: 'توصية المشرف / سبب القرار',
        value: applicant.finalDecision.reason,
        type: 'other'
      });
    }

    if (applicant.orthopedicExamDto?.reason) {
      notes.push({
        title: 'سبب قرار فحص العظام',
        value: applicant.orthopedicExamDto.reason,
        type: 'other'
      });
    }

    if (applicant.eyeExam?.reason) {
      notes.push({
        title: 'سبب قرار فحص العيون',
        value: applicant.eyeExam.reason,
        type: 'other'
      });
    }

    if (applicant.eyeExam?.otherDiseases) {
      notes.push({
        title: 'أمراض أخرى (فحص العيون)',
        value: applicant.eyeExam.otherDiseases,
        type: 'other'
      });
    }

    if (applicant.earClinic?.otherDiseases) {
      notes.push({
        title: 'ملاحظات اختصاص الأذن والأنف والحنجرة',
        value: applicant.earClinic.otherDiseases,
        type: 'other'
      });
    }

    this.notes = notes;
  }

  private resolveAttachmentUrl(path: string): string {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    const normalized = path.replace(/^\/+/, '');
    return `${environment.apiUrl}/${normalized}`;
  }

  getAttachmentUrl(path: string): string {
    return this.resolveAttachmentUrl(path);
  }

  isImageFile(path: string): boolean {
    if (!path) return false;
    const ext = path.toLowerCase().split('.').pop() || '';
    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'].includes(ext);
  }

  isPdfFile(path: string): boolean {
    if (!path) return false;
    const ext = path.toLowerCase().split('.').pop() || '';
    return ext === 'pdf';
  }

  getFileType(path: string): 'image' | 'pdf' | 'other' {
    if (this.isImageFile(path)) return 'image';
    if (this.isPdfFile(path)) return 'pdf';
    return 'other';
  }

  private groupAttachmentsByClinic(): void {
    this.attachmentsByClinic.clear();
    
    this.attachments.forEach(attachment => {
      const clinicName = attachment.clinicName || 'أخرى';
      if (!this.attachmentsByClinic.has(clinicName)) {
        this.attachmentsByClinic.set(clinicName, []);
      }
      this.attachmentsByClinic.get(clinicName)!.push(attachment);
    });
  }

  getClinicNames(): string[] {
    return Array.from(this.attachmentsByClinic.keys()).filter(name => name !== '');
  }

  getAttachmentsByClinic(clinicName: string): AttachmentItem[] {
    return this.attachmentsByClinic.get(clinicName) || [];
  }
}

interface AttachmentItem {
  label: string;
  source: string;
  clinicName: string;
  diagnosis: string;
  path: string;
}

interface NotesItem {
  title: string;
  value: string;
  type?: 'consultation' | 'investigation' | 'other';
}
