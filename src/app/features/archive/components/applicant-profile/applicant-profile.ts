import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { LookupService } from '../../../../shared/services/lookup.service';
import { Result } from '../../../doctor/models/internal-exam.model';
import { ApplicantDetailsModel } from '../../../reception/models/applicant.model';
import { MaritalStatus } from '../../../reception/models/marital-status.model';
import { ApplicantService } from '../../../reception/services/applicant.service';
import { MaritalStatusService } from '../../../reception/services/marital-status.service';
import { ArchiveModel } from '../../models/archive.model';
import { environment } from '../../../../../environments/environment';
import { Subject } from 'rxjs';
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
  notes: NotesItem[] = [];
  private destroy$ = new Subject<void>();
  date: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private applicantService: ApplicantService,
    private lookupService: LookupService,
    private maritalStatusService: MaritalStatusService,
    private router: Router
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
        this.buildAttachmentList(data);
        this.collectNotes(data);
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
    window.print();
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

  private buildAttachmentList(applicant: ApplicantDetailsModel) {
    const items: AttachmentItem[] = [];
    const addItem = (label: string, source: string, path?: string | null) => {
      if (!path) {
        return;
      }
      items.push({
        label,
        source,
        path: path.trim()
      });
    };

    addItem('النسخة الرقمية للملف', 'الأرشيف', this.archive?.digitalCopy);
    addItem('مرفق الاستشارة الطبية', 'الاستشارات', applicant.consultation?.attachment);
    addItem('مرفق التحاليل المخبرية', 'المخبر', applicant.investigation?.attachment);

    this.attachments = items;
  }

  private collectNotes(applicant: ApplicantDetailsModel) {
    const notes: NotesItem[] = [];

    if (applicant.consultation?.result) {
      notes.push({
        title: 'ملاحظات الاستشارة',
        value: applicant.consultation.result
      });
    }

    if (applicant.investigation?.result) {
      notes.push({
        title: 'نتيجة التحليل المخبري',
        value: applicant.investigation.result
      });
    }

    if (applicant.finalDecision?.reason) {
      notes.push({
        title: 'توصية المشرف / سبب القرار',
        value: applicant.finalDecision.reason
      });
    }

    if (applicant.orthopedicExamDto?.reason) {
      notes.push({
        title: 'سبب قرار فحص العظام',
        value: applicant.orthopedicExamDto.reason
      });
    }

    if (applicant.eyeExam?.reason) {
      notes.push({
        title: 'سبب قرار فحص العيون',
        value: applicant.eyeExam.reason
      });
    }

    if (applicant.eyeExam?.otherDiseases) {
      notes.push({
        title: 'أمراض أخرى (فحص العيون)',
        value: applicant.eyeExam.otherDiseases
      });
    }

    if (applicant.earClinic?.otherDiseases) {
      notes.push({
        title: 'ملاحظات اختصاص الأذن والأنف والحنجرة',
        value: applicant.earClinic.otherDiseases
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
}

interface AttachmentItem {
  label: string;
  source: string;
  path: string;
}

interface NotesItem {
  title: string;
  value: string;
}
