import { Injectable } from '@angular/core';

export interface FileValidationResult {
  valid: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileValidationService {
  // ✅ الصيغ المسموحة للصور
  private readonly allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  
  // ✅ الصيغ المسموحة للملفات
  private readonly allowedDocumentTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/jpg',
    'image/png'
  ];

  // ✅ الحد الأقصى لحجم الملف (10 MB)
  private readonly maxFileSize = 10 * 1024 * 1024; // 10 MB in bytes

  /**
   * ✅ التحقق من صحة الملف (الصيغة والحجم)
   * @param file الملف المراد التحقق منه
   * @param allowedTypes أنواع الملفات المسموحة (اختياري)
   * @param maxSize الحد الأقصى للحجم بالبايت (اختياري)
   * @returns FileValidationResult
   */
  validateFile(
    file: File,
    allowedTypes: string[] = this.allowedDocumentTypes,
    maxSize: number = this.maxFileSize
  ): FileValidationResult {
    // ✅ التحقق من وجود الملف
    if (!file) {
      return {
        valid: false,
        error: 'لم يتم تحديد ملف'
      };
    }

    // ✅ التحقق من نوع الملف
    if (!allowedTypes.includes(file.type)) {
      const allowedExtensions = allowedTypes
        .map(type => {
          const extension = type.split('/')[1];
          return extension.toUpperCase();
        })
        .join(', ');
      
      return {
        valid: false,
        error: `نوع الملف غير مسموح. الصيغ المسموحة: ${allowedExtensions}`
      };
    }

    // ✅ التحقق من حجم الملف
    if (file.size > maxSize) {
      const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(2);
      return {
        valid: false,
        error: `حجم الملف كبير جداً. الحد الأقصى: ${maxSizeMB} MB`
      };
    }

    // ✅ التحقق من أن الملف ليس فارغاً
    if (file.size === 0) {
      return {
        valid: false,
        error: 'الملف فارغ'
      };
    }

    return { valid: true };
  }

  /**
   * ✅ التحقق من صحة الصورة
   */
  validateImage(file: File, maxSize: number = this.maxFileSize): FileValidationResult {
    return this.validateFile(file, this.allowedImageTypes, maxSize);
  }

  /**
   * ✅ التحقق من صحة المستند
   */
  validateDocument(file: File, maxSize: number = this.maxFileSize): FileValidationResult {
    return this.validateFile(file, this.allowedDocumentTypes, maxSize);
  }

  /**
   * ✅ تحويل حجم الملف إلى صيغة قابلة للقراءة
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
}

