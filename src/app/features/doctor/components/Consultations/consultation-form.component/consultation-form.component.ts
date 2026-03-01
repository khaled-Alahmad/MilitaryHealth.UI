import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Consultation } from '../../../models/consultation.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { EyeExamService } from '../../../services/eye-exam.service';

@Component({
  selector: 'app-consultation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.scss']
})
export class ConsultationFormComponent {
 @Input() applicantFileNumber: string = '';
  @Input() showModal: boolean = false;  // ✅ أضفنا @Input() هنا
  @Output() close = new EventEmitter<void>(); // لإرسال حدث الإغلاق للأب

  consultationForm!: FormGroup;
  uploadedPath: string | null = null;
  previewUrl: string | null = null;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private consultationService: EyeExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.consultationForm = this.fb.group({
      consultationType: ['', Validators.required],
      // referredDoctor: ['', Validators.required], // ❌ تم حذفه حسب التقرير
      referralReason: [''], // ✅ جديد - سبب الإحالة (اختياري)
      result: [null],
      attachment: [null]
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.previewUrl = null;
    this.uploadedPath = null;
    this.close.emit(); // ✅ إخطار الأب لإغلاق المودال
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // 🔹 معاينة محلية
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      // 🔹 رفع للسيرفر
      this.consultationService.uploadFile(file).subscribe({
        next: (path) => {
          this.uploadedPath = path;
          this.consultationForm.patchValue({ attachment: path });
          this.toastr.success('تم رفع الملف بنجاح', 'نجاح');
        },
        error: () => {
          this.toastr.error('فشل رفع الملف', 'خطأ');
        }
      });
    }
  }

  onSubmit() {
    if (this.consultationForm.invalid || !this.applicantFileNumber) {
      this.toastr.warning('يرجى إدخال جميع الحقول', 'تحذير');
      return;
    }

    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error('لم يتم العثور على معرف الطبيب', 'خطأ');
      return;
    }

    const consultation: Consultation = {
      doctorID,
      applicantFileNumber: this.applicantFileNumber,
      consultationType: this.consultationForm.value.consultationType,
      // referredDoctor: this.consultationForm.value.referredDoctor, // ❌ تم حذفه
      referralReason: this.consultationForm.value.referralReason, // ✅ جديد
      result: this.consultationForm.value.result,
      attachment: this.uploadedPath ?? ''
    };

    this.loading = true;

    this.consultationService.addConsultation(consultation).subscribe({
      next: () => {
        this.toastr.success('تمت إضافة الاستشارة بنجاح', 'نجاح');
        this.consultationForm.reset();
        this.previewUrl = null;
        this.uploadedPath = null;
        this.loading = false;
        this.closeModal();
      },
      error: () => {
        this.toastr.error('فشل في إضافة الاستشارة', 'خطأ');
        this.loading = false;
      }
    });
  }
}
