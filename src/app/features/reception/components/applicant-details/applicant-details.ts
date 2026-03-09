import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GregorianDatePipe } from '../../../../shared/pipes/gregorian-date.pipe';
import { ActivatedRoute, Router } from '@angular/router';

// PrimeNG
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';

// Shared
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { ActionButtonsComponent, ActionButtonConfig } from '../../../../shared/components/action-buttons/action-buttons.component';

// Models and Services
import { ApplicantDetailsModel, ApplicantModel } from '../../models/applicant.model';
import { ApplicantService } from '../../services/applicant.service';
import { MaritalStatusService } from '../../services/marital-status.service';
import { MaritalStatus } from '../../models/marital-status.model';
import { BarcodePrintService } from '../../services/barcode-print.service';

@Component({
  selector: 'app-applicant-details',
  standalone: true,
  imports: [
    CommonModule,
    GregorianDatePipe,
    CardModule,
    ToastModule,
    TagModule,
    PageHeaderComponent,
    ActionButtonsComponent
  ],
  templateUrl: './applicant-details.html',
  styleUrl: './applicant-details.scss',
  providers: [MessageService]
})
export class ApplicantDetailsComponent implements OnInit {
  applicant: ApplicantDetailsModel | null = null;
  loading = false;
  fileNumber: string = '';
  maritalStatuses: MaritalStatus[] = [];

  get headerActions(): ActionButtonConfig[] {
    const disabled = !this.applicant || this.loading;
    return [
      { id: 'back', label: 'رجوع', icon: 'pi pi-arrow-right', severity: 'secondary', outlined: true },
      { id: 'print', label: 'طباعة الإيصال', icon: 'pi pi-print', severity: 'info', outlined: false, disabled, tooltip: 'طباعة الإيصال' },
      { id: 'edit', label: 'تعديل', icon: 'pi pi-pencil', severity: 'success', outlined: false, disabled, tooltip: 'تعديل' }
    ];
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private applicantService: ApplicantService,
    private messageService: MessageService,
    private maritalStatusService: MaritalStatusService,
    private barcodePrintService: BarcodePrintService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const fileNumber = params.get('fileNumber');
      if (fileNumber) {
        this.fileNumber = fileNumber;
        this.loadApplicant(fileNumber);
      }
    });
    this.loadMaritalStatuses();
  }

  loadMaritalStatuses(): void {
    this.maritalStatusService.getMaritalStatus().subscribe({
      next: (data) => (this.maritalStatuses = data),
      error: () => {}
    });
  }

  loadApplicant(fileNumber: string): void {
    this.loading = true;
    this.applicantService.getApplicantByFileNumber$(fileNumber).subscribe({
      next: (data: ApplicantDetailsModel) => {
        this.applicant = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'خطأ',
          detail: 'فشل في تحميل بيانات المنتسب'
        });
      }
    });
  }

  onHeaderAction(actionId: string): void {
    if (actionId === 'back') this.goBack();
    else if (actionId === 'print') this.printReceipt();
    else if (actionId === 'edit') this.editApplicant();
  }

  editApplicant(): void {
    if (!this.applicant?.applicantID) {
      this.messageService.add({
        severity: 'warn',
        summary: 'تنبيه',
        detail: 'لا يمكن تعديل هذا المنتسب - معرف غير متوفر'
      });
      return;
    }
    this.router.navigate(['reception', 'applicants', this.applicant.applicantID]);
  }

  getMaritalStatusDescription(maritalStatusID: number): string {
    const status = this.maritalStatuses.find(s => s.maritalStatusID === maritalStatusID);
    return status?.description || '';
  }

  goBack(): void {
    this.router.navigate(['reception/applicants']);
  }

  printReceipt(): void {
    if (!this.applicant) {
      this.messageService.add({
        severity: 'warn',
        summary: 'تحذير',
        detail: 'لا توجد بيانات منتسب للطباعة'
      });
      return;
    }

    // ✅ جلب البيانات الكاملة للحصول على queueNumber و fileNumber
    if (this.applicant.applicantID) {
      this.applicantService.getApplicantById$(this.applicant.applicantID).subscribe({
        next: (fullApplicantData: ApplicantModel) => {
          this.barcodePrintService.printBarcodeReceipt(fullApplicantData).catch(() => {
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في طباعة الإيصال'
            });
          });
        },
        error: () => {
          // محاولة الطباعة بالبيانات المتوفرة
          const applicantForPrint: ApplicantModel = {
            applicantID: this.applicant!.applicantID,
            fileNumber: this.applicant!.fileNumber,
            fullName: this.applicant!.fullName,
            motherName: this.applicant!.motherName,
            dateOfBirth: this.applicant!.dateOfBirth,
            recruitmentCenter: this.applicant!.recruitmentCenter,
            bloodType: this.applicant!.bloodType,
            queueNumber: this.applicant!.queueNumber,
            maritalStatusID: this.applicant!.maritalStatusID,
            job: this.applicant!.job,
            height: this.applicant!.height,
            weight: this.applicant!.weight,
            bmi: this.applicant!.bmi,
            bloodPressure: this.applicant!.bloodPressure,
            pulse: this.applicant!.pulse,
            tattoo: this.applicant!.tattoo,
            distinctiveMarks: this.applicant!.distinctiveMarks,
            associateNumber: this.applicant!.associateNumber || '',
            maritalStatus: { maritalStatusID: this.applicant!.maritalStatusID, description: '' }
          };
          this.barcodePrintService.printBarcodeReceipt(applicantForPrint).catch(() => {
            this.messageService.add({
              severity: 'error',
              summary: 'خطأ',
              detail: 'فشل في طباعة الإيصال'
            });
          });
        }
      });
    } else {
      // إذا لم يكن applicantID موجوداً، استخدم البيانات المتوفرة
      const applicantForPrint: ApplicantModel = {
        applicantID: this.applicant.applicantID,
        fileNumber: this.applicant.fileNumber,
        fullName: this.applicant.fullName,
        motherName: this.applicant.motherName,
        dateOfBirth: this.applicant.dateOfBirth,
        recruitmentCenter: this.applicant.recruitmentCenter,
        bloodType: this.applicant.bloodType,
        queueNumber: this.applicant.queueNumber,
        maritalStatusID: this.applicant.maritalStatusID,
        job: this.applicant.job,
        height: this.applicant.height,
        weight: this.applicant.weight,
        bmi: this.applicant.bmi,
        bloodPressure: this.applicant.bloodPressure,
        pulse: this.applicant.pulse,
        tattoo: this.applicant.tattoo,
        distinctiveMarks: this.applicant.distinctiveMarks,
        associateNumber: this.applicant.associateNumber || '',
        maritalStatus: { maritalStatusID: this.applicant.maritalStatusID, description: '' }
      };
      this.barcodePrintService.printBarcodeReceipt(applicantForPrint).catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'خطأ',
          detail: 'فشل في طباعة الإيصال'
        });
      });
    }
  }
}

