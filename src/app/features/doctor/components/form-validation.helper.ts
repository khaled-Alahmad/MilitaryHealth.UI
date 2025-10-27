import { FormGroup } from '@angular/forms';

/**
 * Helper Class لفحص صحة النماذج
 * يمكن استخدام هذه الكلاس في جميع المكونات
 */
export class FormValidationHelper {
  
  /**
   * الحصول على رسالة الخطأ للحقل
   * @param form FormGroup
   * @param controlName اسم الحقل
   * @returns رسالة الخطأ
   */
  static getErrorMessage(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);
    if (!control) return '';
    
    if (control.invalid && control.touched) {
      if (control.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
      if (control.errors?.['email']) {
        return 'البريد الإلكتروني غير صحيح';
      }
      if (control.errors?.['minlength']) {
        const requiredLength = control.errors['minlength'].requiredLength;
        return `يجب أن يكون ${requiredLength} أحرف على الأقل`;
      }
      if (control.errors?.['maxlength']) {
        const requiredLength = control.errors['maxlength'].requiredLength;
        return `يجب ألا يتجاوز ${requiredLength} أحرف`;
      }
      if (control.errors?.['min']) {
        const min = control.errors['min'].min;
        return `يجب أن تكون القيمة ${min} أو أكبر`;
      }
      if (control.errors?.['max']) {
        const max = control.errors['max'].max;
        return `يجب أن تكون القيمة ${max} أو أقل`;
      }
      if (control.errors?.['pattern']) {
        return 'التنسيق غير صحيح';
      }
    }
    return '';
  }

  /**
   * التحقق من صلاحية الحقل
   * @param form FormGroup
   * @param controlName اسم الحقل
   * @returns true إذا كان صحيح و touched
   */
  static isFieldValid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!(control?.valid && control?.touched);
  }

  /**
   * التحقق من عدم صلاحية الحقل
   * @param form FormGroup
   * @param controlName اسم الحقل
   * @returns true إذا كان غير صحيح و touched
   */
  static isFieldInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!(control?.invalid && control?.touched);
  }

  /**
   * التحقق مما إذا كان الحقل مطلوبًا
   * @param form FormGroup
   * @param controlName اسم الحقل
   * @returns true إذا كان مطلوبًا
   */
  static isFieldRequired(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    if (!control) return false;
    return control.hasError('required');
  }

  /**
   * وضع علامة touched على جميع الحقول
   * يستخدم عند إرسال النموذج لإظهار رسائل الخطأ
   * @param form FormGroup
   */
  static markAllFieldsAsTouched(form: FormGroup): void {
    Object.keys(form.controls).forEach(controlName => {
      const control = form.get(controlName);
      control?.markAsTouched();
    });
  }

  /**
   * الحصول على جميع رسائل الأخطاء في النموذج
   * @param form FormGroup
   * @returns map لاسم الحقل ورسالة الخطأ
   */
  static getAllErrors(form: FormGroup): Map<string, string> {
    const errors = new Map<string, string>();
    Object.keys(form.controls).forEach(controlName => {
      const errorMessage = this.getErrorMessage(form, controlName);
      if (errorMessage) {
        errors.set(controlName, errorMessage);
      }
    });
    return errors;
  }
}

