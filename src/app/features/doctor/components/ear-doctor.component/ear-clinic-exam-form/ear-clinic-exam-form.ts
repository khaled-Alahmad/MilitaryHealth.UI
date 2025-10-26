import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Result } from '../../../models/result.model';
import { AuthService } from '../../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';

@Component({
  selector: 'app-ear-clinic-exam-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ear-clinic-exam-form.html',
  styleUrls: ['./ear-clinic-exam-form.scss']
})
export class EarClinicExamForm implements OnInit {
  @Input() applicantFileNumber: string = '';
  examForm!: FormGroup;
  results: Result[] = [];
  loading = false;
  showModal = false;

  constructor(
    private fb: FormBuilder,
    private examService: EarClinicExamService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadResults();
    console.log('EarClinicExamForm initialized');
  }

  private initForm() {
    this.examForm = this.fb.group({
      rightEar: ['', Validators.required],
      leftEar: ['', Validators.required],
      rightTympanicMembrane: ['', Validators.required],
      leftTympanicMembrane: ['', Validators.required],
      rightHearing: ['', Validators.required],
      leftHearing: ['', Validators.required],
      resonators: ['', Validators.required],
      rightWhisperTest: ['', Validators.required],
      leftWhisperTest: ['', Validators.required],
      rightNose: ['', Validators.required],
      leftNose: ['', Validators.required],
      isRightHugeMates: [false],
      isLeftHugeMates: [false],
      rightString: [''],
      leftString: [''],
      mouth: ['', Validators.required],
      mouthOther: [''],
      otherDiseases: [''],
      resultID: [null, Validators.required],
      reason: ['']
    });
  }

  private loadResults() {
    console.log('Loading results...');
    this.examService.getResults().subscribe({
      next: (response) => {
        console.log('Results response:', response);
        // معالجة الاستجابة بناءً على الهيكل المطلوب
        if (response.data && response.data.items) {
          this.results = response.data.items;
        } else if (Array.isArray(response)) {
          this.results = response;
        } else if (response.items) {
          this.results = response.items;
        } else {
          this.results = [];
        }
        console.log('Loaded results:', this.results);
        
        if (this.results.length === 0) {
          this.toastr.warning('لم يتم العثور على نتائج متاحة');
        }
      },
      error: (error) => {
        console.error('Error loading results:', error);
        this.toastr.error('خطأ في تحميل النتائج');
        this.results = [];
      }
    });
  }

  onSubmit() {
    if (this.examForm.valid) {
      this.loading = true;
      
      const formData = this.examForm.value;
      console.log('Form Data:', formData);
      
      const examData: EarClinicExam = {
        applicantFileNumber: this.applicantFileNumber,
        doctorID: Number(this.authService.getDoctorId()) || 0,
        rightEar: formData.rightEar,
        leftEar: formData.leftEar,
        rightTympanicMembrane: formData.rightTympanicMembrane,
        leftTympanicMembrane: formData.leftTympanicMembrane,
        rightHearing: formData.rightHearing,
        leftHearing: formData.leftHearing,
        resonators: formData.resonators,
        rightWhisperTest: formData.rightWhisperTest,
        leftWhisperTest: formData.leftWhisperTest,
        rightNose: formData.rightNose,
        leftNose: formData.leftNose,
        isRightHugeMates: formData.isRightHugeMates,
        isLeftHugeMates: formData.isLeftHugeMates,
        rightString: formData.rightString || '',
        leftString: formData.leftString || '',
        mouth: formData.mouth === 'أخرى' ? `أخرى: ${formData.mouthOther}` : formData.mouth,
        otherDiseases: formData.otherDiseases || '',
        resultID: formData.resultID,
        reason: formData.reason || ''
      };

      console.log('Sending Exam Data:', examData);
      
      this.examService.addEarClinicExam(examData).subscribe({
        next: (response) => {
          console.log('Exam saved successfully:', response);
          this.toastr.success('تم حفظ فحص الأذن والأنف والحنجرة بنجاح');
          this.examForm.reset();
          this.showModal = false;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error saving exam:', error);
          this.toastr.error('خطأ في حفظ الفحص');
          this.loading = false;
        }
      });
    } else {
      console.log('Form is invalid');
      Object.keys(this.examForm.controls).forEach(key => {
        const control = this.examForm.get(key);
        if (control?.invalid) {
          console.log('Invalid field:', key, control.errors);
        }
      });
      this.toastr.error('يرجى ملء جميع الحقول المطلوبة');
    }
  }

  resetForm() {
    this.examForm.reset();
    this.showModal = false;
  }

  addEarClinicExam() {
    this.showModal = true;
  }

  openModal() {
    this.showModal = true;
    console.log('Modal opened');
  }

  closeModal() {
    this.showModal = false;
    this.examForm.reset();
  }
}
