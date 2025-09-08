import { Component, Input, OnInit } from '@angular/core';
import { Refraction } from '../../../models/refraction.model';
import { RefractionType } from '../../../models/refraction-type.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EyeExam } from '../../../models/eye-exam.model';
import { ApplicantService } from '../../../../reception/services/applicant.service';

@Component({
  selector: 'app-eye-exam-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eye-exam-details.html',
  styleUrls: ['./eye-exam-details.scss']
})
export class EyeExamDetails implements OnInit {
  @Input() exam!: EyeExam;
  @Input() showRefractionsOnly: boolean = false;

  leftEyeRefractions: Refraction[] = [];
  rightEyeRefractions: Refraction[] = [];
  applicantInfo: any = null;

  constructor(
    public activeModal: NgbActiveModal,
    private applicantService: ApplicantService
  ) {}

  ngOnInit() {
    if (this.exam.refractions) {
      this.leftEyeRefractions = this.exam.refractions.filter((r: Refraction) => r.isLeft);
      this.rightEyeRefractions = this.exam.refractions.filter((r: Refraction) => !r.isLeft);
    }
    
    // تحميل معلومات المنتسب
    this.loadApplicantInfo();
  }

  private loadApplicantInfo() {
    if (this.exam.applicantFileNumber) {
      this.applicantService.getApplicantByFileNumber$(this.exam.applicantFileNumber).subscribe({
        next: (applicant) => {
          this.applicantInfo = applicant;
        },
        error: () => {
          this.applicantInfo = { fullName: 'غير متوفر', job: '' };
        }
      });
    }
  }

  close() {
    this.activeModal.dismiss();
  }

  getRefractionTypeName(refractionTypeID: number): string {
    const allRefractions = [...this.leftEyeRefractions, ...this.rightEyeRefractions];
    const refraction = allRefractions.find((r: Refraction) => r.refractionTypeID === refractionTypeID);
    return refraction?.refractionType?.description || 'غير معروف';
  }

 getResultName(resultID: number): string {
  if (this.exam.result && this.exam.result.resultID === resultID) {
    return this.exam.result.description;
  }
  return 'غير معروف';
}

 getResultBadgeClass(): string {
  if (!this.exam.result || !this.exam.result.description) return 'badge bg-secondary';
  switch (this.exam.result.description) {
    case 'مقبول': return 'badge bg-success';
    case 'مرفوض': return 'badge bg-danger';
    case 'مؤجل': return 'badge bg-warning text-dark';
    default: return 'badge bg-secondary';
  }
}

 getApplicantName(): string {
  return this.applicantInfo?.fullName || 'جاري التحميل...';
}

 getApplicantJob(): string {
  return this.applicantInfo?.job || '';
}
}
