// components/deferred-eye-exams/deferred-eye-exams.component.ts
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { EyeExam } from '../../../models/eye-exam.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditEyeExam } from '../edit-eye-exam/edit-eye-exam';
import { EyeExamDetails } from '../eye-exam-details/eye-exam-details';
import { ToastrService } from 'ngx-toastr';
import { forkJoin, of, switchMap, map } from 'rxjs';
import { TableModule } from 'primeng/table';
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicantService } from '../../../../reception/services/applicant.service';
import { EyeExamService } from '../../../services/eye-exam.service';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
import { Loading } from "../../../../../shared/components/loading/loading";

@Component({
  selector: 'app-deferred-eye-exams',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, TableModule, PaginatorComponent, Loading],
  templateUrl: './deferred-eye-exams.component.html',
  styleUrls: ['./deferred-eye-exams.component.scss']
})
export class DeferredEyeExamsComponent implements OnInit {
  exams: EyeExam[] = [];
  filteredExams: EyeExam[] = [];
  globalFilter: string = '';
  page = 1;
  rowsPerPage = 10;
  totalRecords = 0;
  loading = false;
  tableHeight = '400px';
  selectedExam: EyeExam | null = null;
  applicantsCache: Map<string, any> = new Map();
  refractionTypes: any[] = [];

  constructor(
    private examService: EyeExamService,
    private applicantService: ApplicantService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadEyeExams();
    this.loadRefractionTypes();
  }

  loadEyeExams() {
    this.loading = true;
    const filter = this.globalFilter || '';
    this.examService.getAllEyeExams(this.page, this.rowsPerPage, filter).subscribe({
      next: (data: PagedResponse<EyeExam>) => {
        // فرز الفحوصات حسب آخر معرف فحص مضاف
        this.exams = data.items.sort((a, b) => (b.eyeExamID || 0) - (a.eyeExamID || 0));
        this.filteredExams = [...this.exams];
  
        this.totalRecords = data.totalCount;
        this.loading = false;
  
        //this.loadApplicantsInfo(); // تحميل معلومات المنتسبين بشكل آمن
      },
      error: () => {
        this.toastr.error('فشل في جلب بيانات فحوصات العيون', 'خطأ');
        this.loading = false;
      }
    });
  }
  

  onPageChange(newPage: number) { this.page = newPage; this.loadEyeExams(); }

  onPageSizeChange(newSize: number) {
    this.rowsPerPage = newSize;
    this.page = 1;
    this.loadEyeExams();
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.globalFilter = value;
    this.page = 1;
    this.loadEyeExams();
  }

  ngAfterViewInit() {
    this.tableHeight = this.calculateTableHeight();
    this.cdr.detectChanges();
  }

  calculateTableHeight(): string { return window.innerHeight - 200 + 'px'; }

  @HostListener('window:resize')
  onResize() { this.setTableHeight(); }

  private setTableHeight(): void {
    const screenHeight = window.innerHeight;
    const reservedSpace = 220;
    this.tableHeight = `${screenHeight - reservedSpace}px`;
  }

  getBadgeClass(result: any): string {
    if (!result || !result.description) return 'badge bg-secondary';
    switch (result.description) {
      case 'مقبول': return 'badge bg-success';
      case 'مرفوض': return 'badge bg-danger';
      case 'مؤجل': return 'badge bg-warning text-dark';
      default: return 'badge bg-secondary';
    }
  }

  // فتح نافذة تعديل الفحص عند الطلب فقط
openEditExam(eyeExam: EyeExam): void {
  if (!eyeExam.eyeExamID) {
    this.toastr.error('معرف الفحص غير متوفر', 'خطأ');
    return;
  }

  this.loading = true;

  forkJoin({
    exam: this.examService.getEyeExamById(eyeExam.eyeExamID),
    refractions: this.examService.getRefractionsByEyeExamId(eyeExam.eyeExamID)
  }).subscribe({
    next: (responses) => {
      if (responses.exam.succeeded && responses.exam.data) {
        const fetchedRefs = responses.refractions.succeeded ? (responses.refractions.data || []) : [];
        const examWithRefractions = {
          ...responses.exam.data,
          // fallback إلى الانكسارات الموجودة في الصف إذا لم يرجع الـ API شيئًا
          refractions: fetchedRefs.length ? fetchedRefs : (eyeExam.refractions || [])
        };

        const modalRef = this.modalService.open(EditEyeExam, {
          size: 'lg',
          backdrop: 'static',
          keyboard: false,
          centered: true
        });

        modalRef.componentInstance.exam = examWithRefractions;
        this.loading = false;

        // ✅ تحديث لحظي للجدول
        modalRef.componentInstance.eyeExamUpdated.subscribe((updatedExam: EyeExam) => {
          if (updatedExam) {
            const index = this.exams.findIndex(e => e.eyeExamID === updatedExam.eyeExamID);
        
                    this.loadEyeExams();

           }
        });

      } else {
        this.loading = false;
        this.toastr.error(`لم يتم العثور على الفحص: ${responses.exam.message}`, 'خطأ');
      }
    },
    error: () => {
      this.loading = false;
      this.toastr.error('حدث خطأ أثناء جلب تفاصيل الفحص', 'خطأ');
    }
  });
}


  // فتح تفاصيل الفحص عند الطلب فقط
  showDetails(eyeExam: EyeExam): void {
    if (!eyeExam.eyeExamID) {
      this.toastr.error('معرف الفحص غير متوفر', 'خطأ');
      return;
    }

    this.loading = true;

    const applicantId$ = eyeExam.applicantId
      ? of(eyeExam.applicantId)
      : this.applicantService.getApplicantByFileNumber$(eyeExam.applicantFileNumber!).pipe(
          map(applicant => applicant.applicantID)
        );

    applicantId$.pipe(
      switchMap((applicantId: number | undefined) =>
        applicantId && eyeExam.eyeExamID ? forkJoin({
          exam: this.examService.getEyeExamById(eyeExam.eyeExamID),
          patientRefractions: this.examService.getRefractionsByApplicantId(applicantId)
        }) : of({ exam: { data: null }, patientRefractions: [] })
      )
    ).subscribe({
      next: ({ exam, patientRefractions }: { exam: any, patientRefractions: any }) => {
        const modalRef = this.modalService.open(EyeExamDetails, { size: 'lg', centered: true });
        modalRef.componentInstance.exam = exam.data;
        modalRef.componentInstance.refractions = patientRefractions;
        modalRef.componentInstance.showRefractionsOnly = false;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('حدث خطأ أثناء جلب تفاصيل الفحص', 'خطأ');
      }
    });
  }

  // مساعدة لعرض معلومات المنتسب
  getApplicantName(exam: EyeExam): string {
    const cached = this.applicantsCache.get(exam.applicantFileNumber);
    return cached?.fullName || 'جاري التحميل...';
  }

  getApplicantJob(exam: EyeExam): string {
    const cached = this.applicantsCache.get(exam.applicantFileNumber);
    return cached?.job || '';
  }

  private loadApplicantsInfo() {
    const fileNumbers = [...new Set(this.exams.map(exam => exam.applicantFileNumber))];
    
    fileNumbers.forEach(fileNumber => {
      if (!fileNumber) return;
      if (!this.applicantsCache.has(fileNumber)) {
        this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
          next: (applicant) => this.applicantsCache.set(fileNumber, applicant),
          error: () => this.applicantsCache.set(fileNumber, { fullName: 'غير متوفر', job: '' })
        });
      }
    });
  }

  getRightEyeRefractions(exam: EyeExam): any[] {
    return exam.refractions?.filter(r => !r.isLeft) || [];
  }

  getLeftEyeRefractions(exam: EyeExam): any[] {
    return exam.refractions?.filter(r => r.isLeft) || [];
  }

  getRefractionTypeName(refractionTypeID: number): string {
    const type = this.refractionTypes.find(t => t.refractionTypeID === refractionTypeID);
    return type?.description || 'غير معروف';
  }

  private loadRefractionTypes() {
    this.examService.getRefractionTypes().subscribe({
      next: (response) => {
        if (response.succeeded && response.data?.items) {
          this.refractionTypes = response.data.items;
        }
      },
      error: () => {
        this.refractionTypes = [
          { refractionTypeID: 1, description: 'قصر نظر' },
          { refractionTypeID: 2, description: 'طول نظر' },
          { refractionTypeID: 3, description: 'استجماتيزم' }
        ];
      }
    });
  }
}
