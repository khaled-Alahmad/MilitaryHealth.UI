import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { Investigation } from '../../../models/investigation.model';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';

@Component({
  selector: 'app-edit-ear-investigation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-ear-investigation.html',
  styleUrls: ['./edit-ear-investigation.scss']
})
export class EditEarInvestigationComponent implements OnInit {
  @Input() investigation!: Investigation;
  @Output() investigationUpdated = new EventEmitter<any>();
  @Output() dialogClosed = new EventEmitter<boolean>();

  investigationForm!: FormGroup;
  uploadedPath: string | null = null;
  previewUrl: string | null = null;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: EarClinicExamService,
    private authService: AuthService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.investigationForm = this.fb.group({
      type: [this.investigation.type], // مخفي ولا يمكن تعديله
      result: [this.investigation.result || '', Validators.required],
      status: [this.investigation.result ? 'مكتمل' : 'مؤجل', Validators.required],
      attachment: [this.investigation.attachment || null]
    });

    if (this.investigation.attachment) {
      this.uploadedPath = this.investigation.attachment;
      this.previewUrl = this.uploadedPath;
    }

    // مراقبة التغيرات على حقل النتيجة لتحديث الحالة تلقائيًا
    this.investigationForm.get('result')?.valueChanges.subscribe(value => {
      const statusControl = this.investigationForm.get('status');
      if (value && value.trim() !== '') {
        statusControl?.setValue('مكتمل');
      } else {
        statusControl?.setValue('مؤجل');
      }
    });
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
          this.investigationForm.patchValue({ attachment: path });
          this.toastr.success('✅ تم رفع الملف بنجاح', 'نجاح');
        },
        error: () => {
          this.toastr.error('❌ فشل في رفع الملف', 'خطأ');
        }
      });
    }
  }

  onSubmit() {
    if (this.investigationForm.invalid) {
      this.toastr.warning('يرجى إدخال النتيجة', 'تحذير');
      return;
    }

    this.loading = true;

    const updatedInvestigation: Investigation = {
      ...this.investigation,
      result: this.investigationForm.value.result,
      status: this.investigationForm.value.status,
      attachment: this.uploadedPath || this.investigation.attachment
    };

    this.service.updateInvestigation(this.investigation.investigationID!, updatedInvestigation).subscribe({
      next: (response) => {
        this.toastr.success('تم تحديث التحليل بنجاح', 'نجاح');
        this.investigationUpdated.emit(true);
        this.activeModal.close();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error updating investigation:', error);
        this.toastr.error('فشل في تحديث التحليل', 'خطأ');
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
