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
  
  // قيم الرنانات الشائعة - بأشكال أسهم
  readonly resonatorOptions = [
    '→',      // سهم لليمين (الصوت يسمع في الأذن اليمنى)
    '←',      // سهم لليسار (الصوت يسمع في الأذن اليسرى)
    '=',      // متساوي (الصوت يسمع في الوسط)
    '→→',     // سهمين لليمين
    '←←',     // سهمين لليسار
    '↑',      // سهم للأعلى
    '↓',      // سهم للأسفل
    '→↑',     // سهم لليمين وأعلى
    '←↑',     // سهم لليسار وأعلى
    '→↓',     // سهم لليمين وأسفل
    '←↓',     // سهم لليسار وأسفل
    '↔',      // سهم ذهاب وإياب
    '↗',      // سهم قطري لليمين وأعلى
    '↖',      // سهم قطري لليسار وأعلى
    '↘',      // سهم قطري لليمين وأسفل
    '↙',      // سهم قطري لليسار وأسفل
    '✓',      // علامة صح
    '✗',      // علامة خطأ
    '○',      // دائرة
    '●'       // دائرة مملوءة
  ];
  
  currentResonatorIndex = 0;

  private readonly statusFields = [
    { control: 'rightTympanicMembrane', otherControl: 'rightTympanicMembraneOther' },
    { control: 'leftTympanicMembrane', otherControl: 'leftTympanicMembraneOther' }
  ];

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
      rightTympanicMembrane: ['سليم', Validators.required],
      rightTympanicMembraneOther: [''],
      leftTympanicMembrane: ['سليم', Validators.required],
      leftTympanicMembraneOther: [''],
      rightHearing: ['', Validators.required],
      leftHearing: ['', Validators.required],
      resonators: ['', Validators.required],
      rightWhisperTest: ['', Validators.required],
      rightWhisperTestOther: [''],
      leftWhisperTest: ['', Validators.required],
      leftWhisperTestOther: [''],
      rightHugeMates: ['لا يوجد'],
      leftHugeMates: ['لا يوجد'],
      rightString: ['لا يوجد'],
      leftString: ['لا يوجد'],
      mouth: ['', Validators.required], // Array of selected options as comma-separated string
      otherDiseases: [''],
      resultID: [null, Validators.required],
      reason: ['']
    });
    
    // تحديث الفهرس عند تغيير القيمة
    this.examForm.get('resonators')?.valueChanges.subscribe(value => {
      const index = this.resonatorOptions.indexOf(value);
      if (index !== -1) {
        this.currentResonatorIndex = index;
      }
    });
    
    // إضافة التحقق من حقول "غير ذلك" - غشاء الطبل
    this.examForm.get('rightTympanicMembrane')?.valueChanges.subscribe(value => {
      if (value === 'غير ذلك') {
        this.examForm.get('rightTympanicMembraneOther')?.setValidators([Validators.required]);
      } else {
        this.examForm.get('rightTympanicMembraneOther')?.clearValidators();
        this.examForm.get('rightTympanicMembraneOther')?.setValue('');
      }
      this.examForm.get('rightTympanicMembraneOther')?.updateValueAndValidity({ emitEvent: false });
    });
    
    this.examForm.get('leftTympanicMembrane')?.valueChanges.subscribe(value => {
      if (value === 'غير ذلك') {
        this.examForm.get('leftTympanicMembraneOther')?.setValidators([Validators.required]);
      } else {
        this.examForm.get('leftTympanicMembraneOther')?.clearValidators();
        this.examForm.get('leftTympanicMembraneOther')?.setValue('');
      }
      this.examForm.get('leftTympanicMembraneOther')?.updateValueAndValidity({ emitEvent: false });
    });
    
    // إضافة التحقق من حقول "غير ذلك" - اختبار الهمس
    this.examForm.get('rightWhisperTest')?.valueChanges.subscribe(value => {
      if (value === 'غير ذلك') {
        this.examForm.get('rightWhisperTestOther')?.setValidators([Validators.required]);
      } else {
        this.examForm.get('rightWhisperTestOther')?.clearValidators();
        this.examForm.get('rightWhisperTestOther')?.setValue('');
      }
      this.examForm.get('rightWhisperTestOther')?.updateValueAndValidity({ emitEvent: false });
    });
    
    this.examForm.get('leftWhisperTest')?.valueChanges.subscribe(value => {
      if (value === 'غير ذلك') {
        this.examForm.get('leftWhisperTestOther')?.setValidators([Validators.required]);
      } else {
        this.examForm.get('leftWhisperTestOther')?.clearValidators();
        this.examForm.get('leftWhisperTestOther')?.setValue('');
      }
      this.examForm.get('leftWhisperTestOther')?.updateValueAndValidity({ emitEvent: false });
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
      const rightTympanicMembrane = formData.rightTympanicMembrane === 'غير ذلك' 
        ? (formData.rightTympanicMembraneOther || '') 
        : formData.rightTympanicMembrane;
      const leftTympanicMembrane = formData.leftTympanicMembrane === 'غير ذلك' 
        ? (formData.leftTympanicMembraneOther || '') 
        : formData.leftTympanicMembrane;
      
      const examData: EarClinicExam = {
        applicantFileNumber: this.applicantFileNumber,
        doctorID: Number(this.authService.getDoctorId()) || 0,
        rightTympanicMembrane,
        leftTympanicMembrane,
        rightHearing: formData.rightHearing,
        leftHearing: formData.leftHearing,
        resonators: formData.resonators,
        rightWhisperTest: formData.rightWhisperTest === 'غير ذلك' 
          ? (formData.rightWhisperTestOther || '') 
          : formData.rightWhisperTest,
        leftWhisperTest: formData.leftWhisperTest === 'غير ذلك' 
          ? (formData.leftWhisperTestOther || '') 
          : formData.leftWhisperTest,
        isRightHugeMates: formData.rightHugeMates !== 'لا يوجد',
        isLeftHugeMates: formData.leftHugeMates !== 'لا يوجد',
        rightString: formData.rightString === 'لا يوجد' ? '' : formData.rightString,
        leftString: formData.leftString === 'لا يوجد' ? '' : formData.leftString,
        mouth: formData.mouth || '',
        otherDiseases: formData.otherDiseases || '',
        resultID: formData.resultID,
        reason: formData.reason || ''
      };

      console.log('Sending Exam Data:', examData);
      
      this.examService.addEarClinicExam(examData).subscribe({
        next: (response) => {
          console.log('Exam saved successfully:', response);
          this.toastr.success('تم حفظ فحص الأذن والأنف والحنجرة بنجاح');
          this.resetForm();
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
    this.examForm.reset(this.getDefaultFormValues());
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
    this.examForm.reset(this.getDefaultFormValues());
  }

  // Helper method لتحديد رسالة الخطأ
  getErrorMessage(controlName: string): string {
    const control = this.examForm.get(controlName);
    if (control?.invalid && control?.touched) {
      if (control.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
    }
    return '';
  }

  // Helper method للتحقق من صلاحية الحقل
  isFieldValid(controlName: string): boolean {
    const control = this.examForm.get(controlName);
    return !!(control?.valid && control?.touched);
  }

  // Helper method للتحقق من عدم صلاحية الحقل
  isFieldInvalid(controlName: string): boolean {
    const control = this.examForm.get(controlName);
    return !!(control?.invalid && control?.touched);
  }

  // التنقل بين قيم الرنانات
  navigateResonator(direction: 'prev' | 'next') {
    if (direction === 'next') {
      this.currentResonatorIndex = (this.currentResonatorIndex + 1) % this.resonatorOptions.length;
    } else {
      this.currentResonatorIndex = this.currentResonatorIndex === 0 
        ? this.resonatorOptions.length - 1 
        : this.currentResonatorIndex - 1;
    }
    this.examForm.patchValue({ resonators: this.resonatorOptions[this.currentResonatorIndex] });
  }
  
  // تحديد قيمة الرنانات مباشرة
  selectResonator(value: string) {
    this.currentResonatorIndex = this.resonatorOptions.indexOf(value);
    if (this.currentResonatorIndex === -1) {
      this.currentResonatorIndex = 0;
    }
    this.examForm.patchValue({ resonators: value });
  }

  // خيارات الفم
  readonly mouthOptions = ['سوي', 'سوء إطباق', 'طَقّة مفصل', 'تحت خلع مفصل فكي'];

  // التحقق من اختيار خيار معين في الفم
  isMouthOptionSelected(option: string): boolean {
    const currentValue = this.examForm.get('mouth')?.value || '';
    if (!currentValue) return false;
    const selectedOptions = currentValue.split(',').map((s: string) => s.trim());
    return selectedOptions.includes(option);
  }

  // تبديل اختيار خيار في الفم
  toggleMouthOption(option: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const currentValue = this.examForm.get('mouth')?.value || '';
    let selectedOptions = currentValue ? currentValue.split(',').map((s: string) => s.trim()).filter((s: string) => s) : [];

    if (checkbox.checked) {
      // إضافة الخيار إذا لم يكن موجوداً
      if (!selectedOptions.includes(option)) {
        selectedOptions.push(option);
      }
    } else {
      // إزالة الخيار
      selectedOptions = selectedOptions.filter((opt: string) => opt !== option);
    }

    const newValue = selectedOptions.join(', ');
    this.examForm.patchValue({ mouth: newValue });
    
    // تحديث التحقق - الحقل مطلوب إذا لم يتم اختيار أي خيار
    if (selectedOptions.length === 0) {
      this.examForm.get('mouth')?.setValidators([Validators.required]);
    } else {
      this.examForm.get('mouth')?.clearValidators();
    }
    this.examForm.get('mouth')?.updateValueAndValidity({ emitEvent: false });
  }

  private getDefaultFormValues() {
    return this.statusFields.reduce((acc, field) => {
      acc[field.control] = 'سليم';
      acc[field.otherControl] = '';
      return acc;
    }, {
      rightHearing: '',
      leftHearing: '',
      resonators: '',
      rightWhisperTest: '',
      rightWhisperTestOther: '',
      leftWhisperTest: '',
      leftWhisperTestOther: '',
      rightHugeMates: 'لا يوجد',
      leftHugeMates: 'لا يوجد',
      rightString: 'لا يوجد',
      leftString: 'لا يوجد',
      mouth: '',
      otherDiseases: '',
      resultID: null,
      reason: ''
    } as any);
  }
}
