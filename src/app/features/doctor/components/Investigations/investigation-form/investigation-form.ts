  import { CommonModule } from '@angular/common';
  import { Component, EventEmitter, Input, Output } from '@angular/core';
  import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import { AuthService } from '../../../../auth/services/auth.service';
  import { Investigation } from '../../../models/investigation.model';
  import { ToastrService } from 'ngx-toastr';
import { EyeExamService } from '../../../services/eye-exam.service';

  @Component({
    selector: 'app-investigation-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './investigation-form.html',
    styleUrl: './investigation-form.scss'
  })
  export class InvestigationForm {
 @Input() applicantFileNumber: string = '';
  @Input() showModal: boolean = false;  // 🔹 مهم جدًا
  @Input() investigationToEdit?: Investigation;
  @Output() close = new EventEmitter<void>();

  investigationForm!: FormGroup;
  uploadedPath: string | null = null;
  
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: EyeExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.investigationForm = this.fb.group({
      type: [this.investigationToEdit?.type || '', Validators.required],
      result: [null],
      attachment: [null],
      status: [null]
    });

    if (this.investigationToEdit?.attachment) {
      this.uploadedPath = this.investigationToEdit.attachment;
      this.previewUrl = this.uploadedPath;
    }
  }

  openModal() { this.showModal = true; }
  closeModal() { 
    this.showModal = false; 
    this.close.emit();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.previewUrl = e.target.result;
      reader.readAsDataURL(file);

      this.service.uploadFile(file).subscribe({
        next: (path) => {
          this.uploadedPath = path;
          this.investigationForm.patchValue({ attachment: path });
          this.toastr.success('✅ تم رفع الملف بنجاح', 'نجاح');
        },
        error: () => this.toastr.error('❌ فشل رفع الملف', 'خطأ')
      });
    }
  }

  onSubmit() {
    if (!this.applicantFileNumber || this.investigationForm.invalid) {
      this.toastr.warning('يرجى إدخال جميع الحقول المطلوبة', 'تنبيه');
      return;
    }

    const doctorID = Number(this.authService.getDoctorId());
    if (!doctorID) {
      this.toastr.error('❌ لم يتم العثور على معرف الطبيب', 'خطأ');
      return;
    }

    const investigation: Investigation = {
      ...this.investigationToEdit,
      doctorID,
      applicantFileNumber: this.applicantFileNumber,
      type: this.investigationForm.value.type,
      result: this.investigationForm.value.result,
      status: this.investigationForm.value.status,
      attachment: this.uploadedPath ?? ''
    };


    const request$ = this.investigationToEdit
      ? this.service.updateInvestigation(this.investigationToEdit.investigationID!, investigation)
      : this.service.addInvestigation(investigation);

    request$.subscribe({
      next: () => {
        this.toastr.success(
          this.investigationToEdit ? 'تم تعديل التحليل بنجاح' : 'تم إضافة طلب التحليل بنجاح',
          'نجاح'
        );
        this.investigationForm.reset();
        this.uploadedPath = null;
        this.previewUrl = null;
        this.closeModal();
      },
      error: () => {
        this.toastr.error('فشل في العملية', 'خطأ');
      }
    });
  }
}