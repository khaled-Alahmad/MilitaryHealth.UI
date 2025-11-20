import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface MessageOptions {
  title?: string;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
}

@Injectable({
  providedIn: 'root'
})
export class UnifiedMessageService {
  private readonly defaultDuration = 3000;
  private readonly defaultPosition = 'top-center';

  constructor(private toastr: ToastrService) {}

  // ✅ رسالة نجاح موحدة
  success(message: string, options?: MessageOptions): void {
    this.toastr.success(
      message,
      options?.title || 'نجاح',
      {
        timeOut: options?.duration || this.defaultDuration,
        positionClass: `toast-${options?.position || this.defaultPosition}`,
        closeButton: true,
        progressBar: true,
        enableHtml: false
      }
    );
  }

  // ✅ رسالة خطأ موحدة
  error(message: string, options?: MessageOptions): void {
    this.toastr.error(
      message,
      options?.title || 'خطأ',
      {
        timeOut: options?.duration || 5000, // ✅ رسائل الخطأ تبقى أطول
        positionClass: `toast-${options?.position || this.defaultPosition}`,
        closeButton: true,
        progressBar: true,
        enableHtml: false
      }
    );
  }

  // ✅ رسالة تحذير موحدة
  warning(message: string, options?: MessageOptions): void {
    this.toastr.warning(
      message,
      options?.title || 'تحذير',
      {
        timeOut: options?.duration || this.defaultDuration,
        positionClass: `toast-${options?.position || this.defaultPosition}`,
        closeButton: true,
        progressBar: true,
        enableHtml: false
      }
    );
  }

  // ✅ رسالة معلومات موحدة
  info(message: string, options?: MessageOptions): void {
    this.toastr.info(
      message,
      options?.title || 'معلومة',
      {
        timeOut: options?.duration || this.defaultDuration,
        positionClass: `toast-${options?.position || this.defaultPosition}`,
        closeButton: true,
        progressBar: true,
        enableHtml: false
      }
    );
  }
}

