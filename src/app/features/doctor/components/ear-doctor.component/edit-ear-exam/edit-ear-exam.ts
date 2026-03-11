import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EarClinicExam } from '../../../models/ear-clinic-exam.model';
import { EarClinicExamService } from '../../../services/ear-clinic-exam.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogWrapperComponent } from '../../../../../shared/components/dialog-wrapper/dialog-wrapper.component';

@Component({
  selector: 'app-edit-ear-exam',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DialogWrapperComponent],
  templateUrl: './edit-ear-exam.html',
  styleUrls: ['./edit-ear-exam.scss']
})
export class EditEarExamComponent implements OnInit {
  @Input() exam!: EarClinicExam;
  @Output() earExamUpdated = new EventEmitter<any>();
  @Output() dialogClosed = new EventEmitter<boolean>();

  examForm!: FormGroup;
  results: any[] = [];
  loading = false;
  
  // قيم الرنانات الشائعة - بأشكال أسهم
  readonly resonatorOptions = [
    '→', '←', '=', '→→', '←←', '↑', '↓', '→↑', '←↑', '→↓', '←↓',
    '↔', '↗', '↖', '↘', '↙', '✓', '✗', '○', '●'
  ];
  
  currentResonatorIndex = 0;
  
  // خيارات الفم
  readonly mouthOptions = ['سوي', 'سوء إطباق', 'طَقّة مفصل', 'تحت خلع مفصل فكي'];

  constructor(
    private fb: FormBuilder,
    private examService: EarClinicExamService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.loadResults();
    this.initForm();
  }

  private loadResults() {
    this.examService.getResults().subscribe({
      next: (response: any) => {
        if (response.data && response.data.items) {
          this.results = response.data.items;
        } else if (Array.isArray(response)) {
          this.results = response;
        } else if (response.items) {
          this.results = response.items;
        } else {
          this.results = [];
        }
      },
      error: (error: any) => {
        console.error('Error loading results:', error);
        this.results = [];
      }
    });
  }

  private initForm() {
    // معالجة غشاء الطبل - تحويل "غير سليم" إلى "غير ذلك" إذا لزم الأمر
    const rightTympanicValue = this.exam.rightTympanicMembrane || 'سليم';
    const leftTympanicValue = this.exam.leftTympanicMembrane || 'سليم';
    const rightTympanicStatus = rightTympanicValue === 'سليم' ? 'سليم' : 'غير ذلك';
    const leftTympanicStatus = leftTympanicValue === 'سليم' ? 'سليم' : 'غير ذلك';
    const rightTympanicOther = rightTympanicValue !== 'سليم' ? rightTympanicValue : '';
    const leftTympanicOther = leftTympanicValue !== 'سليم' ? leftTympanicValue : '';
    
    // معالجة اختبار الهمس - افتراضي جيدة
    const rightWhisperValue = this.exam.rightWhisperTest || '';
    const leftWhisperValue = this.exam.leftWhisperTest || '';
    const rightWhisperStatus = rightWhisperValue === 'جيدة' ? 'جيدة' : (rightWhisperValue ? 'غير ذلك' : 'جيدة');
    const leftWhisperStatus = leftWhisperValue === 'جيدة' ? 'جيدة' : (leftWhisperValue ? 'غير ذلك' : 'جيدة');
    const rightWhisperOther = rightWhisperStatus === 'غير ذلك' ? rightWhisperValue : '';
    const leftWhisperOther = leftWhisperStatus === 'غير ذلك' ? leftWhisperValue : '';
    
    // ضخامة القرينات: نفس النص من API إن وُجد، وإلا من boolean
    const rightHugeMates = this.exam.rightHugeMates ?? (this.exam.isRightHugeMates ? 'بسيطة' : 'لا يوجد');
    const leftHugeMates = this.exam.leftHugeMates ?? (this.exam.isLeftHugeMates ? 'بسيطة' : 'لا يوجد');
    
    // معالجة الوتيرة (الانحراف)
    const rightString = this.exam.rightString || 'لا يوجد';
    const leftString = this.exam.leftString || 'لا يوجد';
    
    // معالجة الرنانات - افتراضي متساوي (=)
    const resonatorsValue = this.exam.resonators || '=';
    const resonatorIndex = this.resonatorOptions.indexOf(resonatorsValue);
    this.currentResonatorIndex = resonatorIndex !== -1 ? resonatorIndex : 2;
    
    // معالجة الفم - افتراضي سوي عند عدم وجود قيمة
    const mouthValue = this.exam.mouth || 'سوي';

    this.examForm = this.fb.group({
      rightTympanicMembrane: [rightTympanicStatus, Validators.required],
      rightTympanicMembraneOther: [rightTympanicOther],
      leftTympanicMembrane: [leftTympanicStatus, Validators.required],
      leftTympanicMembraneOther: [leftTympanicOther],
      rightHearing: [this.exam.rightHearing || '', Validators.required],
      leftHearing: [this.exam.leftHearing || '', Validators.required],
      resonators: [resonatorsValue, Validators.required],
      rightWhisperTest: [rightWhisperStatus, Validators.required],
      rightWhisperTestOther: [rightWhisperOther],
      leftWhisperTest: [leftWhisperStatus, Validators.required],
      leftWhisperTestOther: [leftWhisperOther],
      rightHugeMates: [rightHugeMates],
      leftHugeMates: [leftHugeMates],
      rightString: [rightString],
      leftString: [leftString],
      mouth: [mouthValue],
      otherDiseases: [this.exam.otherDiseases || ''],
      resultID: [this.exam.resultID || '', Validators.required],
      reason: [this.exam.reason || '']
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

  onSubmit() {
    if (this.examForm.invalid) {
      this.toastr.warning('يرجى إدخال جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    this.loading = true;

    const formData = this.examForm.value;
    const rightTympanicMembrane = formData.rightTympanicMembrane === 'غير ذلك' 
      ? (formData.rightTympanicMembraneOther || '') 
      : formData.rightTympanicMembrane;
    const leftTympanicMembrane = formData.leftTympanicMembrane === 'غير ذلك' 
      ? (formData.leftTympanicMembraneOther || '') 
      : formData.leftTympanicMembrane;
    
    const updatedExam: EarClinicExam = {
      ...this.exam,
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
      rightHugeMates: formData.rightHugeMates,
      leftHugeMates: formData.leftHugeMates,
      rightString: formData.rightString === 'لا يوجد' ? '' : formData.rightString,
      leftString: formData.leftString === 'لا يوجد' ? '' : formData.leftString,
      mouth: formData.mouth || '',
      otherDiseases: formData.otherDiseases || '',
      resultID: formData.resultID,
      reason: formData.reason || ''
    };

    this.examService.updateEarClinicExam(this.exam.earClinicID!, updatedExam).subscribe({
      next: (response) => {
        this.toastr.success('تم تحديث الفحص بنجاح', 'نجاح');
        this.earExamUpdated.emit(true);
        this.activeModal.close();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error updating exam:', error);
        this.toastr.error('فشل في تحديث الفحص', 'خطأ');
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.activeModal.dismiss();
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
  }
}
