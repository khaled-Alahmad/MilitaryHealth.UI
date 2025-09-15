import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { Investigation } from '../../../models/investigation.model';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EyeExamService } from '../../../services/eye-exam.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-edit-investigation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-investigation.html',
  styleUrl: './edit-investigation.scss'
})
export class EditInvestigation {
  @Input() investigation!: Investigation;
  @Output() investigationUpdated = new EventEmitter<any>();

  investigationForm!: FormGroup;
  uploadedPath: string | null = null;
  previewUrl: string | null = null;
  loading: boolean = false;
  showModal: boolean = true; // 🔹 التحكم بالظهور مباشرة
  private baseUrl = 'http://itmanager12-001-site1.ltempurl.com/';
  constructor(
    private fb: FormBuilder,
    private service: EyeExamService,
    private authService: AuthService,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
  this.investigationForm = this.fb.group({
    type: [this.investigation.type], // مخفي ولا يمكن تعديله
    result: [this.investigation.result || ''],
    status: [this.investigation.result ? 'مكتمل' : 'مؤجل', Validators.required],
    attachment: [this.investigation.attachment || null]
  });
  console.log(this.investigation.attachment);
  if (this.investigation.attachment) {
    this.uploadedPath = this.investigation.attachment;
    this.previewUrl = `${environment.apiUrl}/${this.uploadedPath}`;
  }
  console.log(this.previewUrl);

  // 🔹 مراقبة التغيرات على حقل النتيجة لتحديث الحالة تلقائيًا
  this.investigationForm.get('result')?.valueChanges.subscribe(value => {
    const statusControl = this.investigationForm.get('status');
    if (statusControl) {
      statusControl.setValue(value?.trim() ? 'مكتمل' : 'مؤجل', { emitEvent: false });
    }
  });
}


onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    // ✅ معاينة الصورة مباشرة (base64)
    reader.onload = (e: any) => {
      this.previewUrl = e.target.result;
    };
    reader.readAsDataURL(file);

    // ✅ رفع الملف للسيرفر
    this.service.uploadFile(file).subscribe({
      next: (path) => {
       
        this.uploadedPath =path; // مسار السيرفر للحفظ فقط
        this.investigationForm.patchValue({ attachment: path });
        this.toastr.success('✅ تم رفع الملف بنجاح', 'نجاح');
      },
      error: () => this.toastr.error('❌ فشل رفع الملف', 'خطأ')
    });
  }
}


  onSubmit() {
    if (!this.investigationForm.valid) {
      this.toastr.warning('يرجى تعبئة الحقول المطلوبة', 'تنبيه');
      return;
    }

    const doctorID = Number(this.authService.getDoctorId());

    const updatedInv: Investigation = {
      ...this.investigation,
      doctorID,
      applicantFileNumber: this.investigation.applicantFileNumber,
      type: this.investigationForm.value.type,
      result: this.investigationForm.value.result,
      status: this.investigationForm.value.status,
      attachment: this.uploadedPath ?? ''
    };

    this.loading = true;

    this.service.updateInvestigation(this.investigation.investigationID!, updatedInv)
  .subscribe({
    next: () => {
      this.toastr.success('تم تعديل التحليل بنجاح', 'نجاح');
      this.loading = false;

      // 🔹 إعلام الأب بحدوث تحديث
      this.investigationUpdated.emit(true);

      this.cancel(); // إغلاق المودال
    },
    error: () => {
      this.toastr.error('فشل التحديث', 'خطأ');
      this.loading = false;
    }
  });
  }
  cancel() {
    this.modalService.dismissAll();
    }
    
    
}
