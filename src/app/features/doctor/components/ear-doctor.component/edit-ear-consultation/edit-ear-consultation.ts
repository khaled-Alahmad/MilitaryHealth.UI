import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Consultation } from '../../../models/consultation.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';

@Component({
  selector: 'app-edit-ear-consultation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-ear-consultation.html',
  styleUrls: ['./edit-ear-consultation.scss']
})
export class EditEarConsultationComponent implements OnInit {
  @Input() consultation!: Consultation;
  @Output() consultationUpdated = new EventEmitter<any>();
  @Output() dialogClosed = new EventEmitter<boolean>();

  consultationForm!: FormGroup;
  uploadedPath: string | null = null;
  previewUrl: string | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private service: EarClinicExamService,
    private authService: AuthService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.consultationForm = this.fb.group({
      consultationType: [this.consultation.consultationType], // مخفي
      referredDoctor: [this.consultation.referredDoctor], // مخفي
      result: [this.consultation.result || '', Validators.required],
      attachment: [this.consultation.attachment || null]
    });

    if (this.consultation.attachment) {
      this.uploadedPath = this.consultation.attachment;
      this.previewUrl = this.uploadedPath;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // معاينة محلية للملف
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      // رفع الملف للسيرفر
      this.service.uploadFile(file).subscribe({
        next: (path) => {
          this.uploadedPath = path;
          this.consultationForm.patchValue({ attachment: path });
          this.toastr.success('✅ تم رفع الملف بنجاح', 'نجاح');
        },
        error: () => {
          this.toastr.error('❌ فشل في رفع الملف', 'خطأ');
        }
      });
    }
  }

  onSubmit() {
    if (this.consultationForm.invalid) {
      this.toastr.warning('يرجى إدخال النتيجة', 'تحذير');
      return;
    }

    this.loading = true;

    const updatedConsultation: Consultation = {
      ...this.consultation,
      result: this.consultationForm.value.result,
      attachment: this.uploadedPath || this.consultation.attachment
    };

    this.service.updateConsultation(this.consultation.consultationID!, updatedConsultation).subscribe({
      next: (response) => {
        this.toastr.success('تم تحديث الاستشارة بنجاح', 'نجاح');
        this.consultationUpdated.emit(true);
        this.activeModal.close();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error updating consultation:', error);
        this.toastr.error('فشل في تحديث الاستشارة', 'خطأ');
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  openFile(path: string) {
    if (!path) {
      this.toastr.warning('⚠️ لا يوجد ملف مرفق', 'تنبيه');
      return;
    }
    const url = this.service.getFileUrl(path);
    window.open(url, '_blank');
  }
}
