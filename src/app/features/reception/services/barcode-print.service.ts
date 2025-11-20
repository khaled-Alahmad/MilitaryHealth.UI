import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as QRCode from 'qrcode';
import { ApplicantModel } from '../models/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class BarcodePrintService {
  private datePipe: DatePipe;

  constructor() {
    // استخدام locale 'en-US' لضمان عرض التاريخ الميلادي دائماً
    this.datePipe = new DatePipe('en-US');
  }

  /**
   * طباعة إيصال الباركود للمنتسب
   * @param applicant بيانات المنتسب
   */
  async printBarcodeReceipt(applicant: ApplicantModel): Promise<void> {
    try {
      // التحقق من وجود بيانات المنتسب
      if (!applicant) {
        return;
      }

      // إنشاء QR Code يحتوي على رقم الملف أو معرف المنتسب
      // استخدام fileNumber أو applicantID كبديل
      let qrCodeData = applicant.fileNumber || '';
      if (!qrCodeData && applicant.applicantID) {
        qrCodeData = `APP-${applicant.applicantID}`;
      }
      if (!qrCodeData) {
        return;
      }


      const qrCodeDataUrl = await QRCode.toDataURL(qrCodeData, {
        width: 200,
        margin: 1,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });

      // إنشاء نافذة طباعة
      const printWindow = window.open('', '_blank', 'width=400,height=600');
      if (!printWindow) {
        alert('يرجى السماح بالنوافذ المنبثقة لطباعة الباركود');
        return;
      }

      // محتوى الإيصال
      const receiptContent = this.generateReceiptHTML(applicant, qrCodeDataUrl, qrCodeData);

      // كتابة المحتوى في النافذة
      printWindow.document.open();
      printWindow.document.write(receiptContent);
      printWindow.document.close();

      // انتظار تحميل الصور ثم الطباعة
      const printAfterLoad = () => {
        // انتظار تحميل الصورة
        const img = printWindow.document.querySelector('img') as HTMLImageElement;
        if (img) {
          // إذا كانت الصورة محملة بالفعل
          if (img.complete && img.naturalHeight !== 0) {
            setTimeout(() => {
              printWindow.focus();
              printWindow.print();
              // إغلاق النافذة بعد الطباعة
              setTimeout(() => {
                printWindow.close();
              }, 1000);
            }, 500);
          } else {
            // انتظار تحميل الصورة
            img.onload = () => {
              setTimeout(() => {
                printWindow.focus();
                printWindow.print();
                setTimeout(() => {
                  printWindow.close();
                }, 1000);
              }, 500);
            };
            img.onerror = () => {
              // حتى لو فشل تحميل الصورة، اطبع النص
              setTimeout(() => {
                printWindow.focus();
                printWindow.print();
                setTimeout(() => {
                  printWindow.close();
                }, 1000);
              }, 1000);
            };
          }
        } else {
          // إذا لم توجد صورة، انتظر قليلاً ثم اطبع
          setTimeout(() => {
            printWindow.focus();
            printWindow.print();
            setTimeout(() => {
              printWindow.close();
            }, 1000);
          }, 1000);
        }
      };

      // استخدام setTimeout لضمان تحميل المحتوى
      setTimeout(() => {
        if (printWindow.document.readyState === 'complete') {
          printAfterLoad();
        } else {
          printWindow.onload = printAfterLoad;
          // في حالة لم يتم استدعاء onload
          setTimeout(() => {
            if (printWindow.document.readyState === 'complete') {
              printAfterLoad();
            }
          }, 2000);
        }
      }, 100);
    } catch (error) {
      alert('حدث خطأ أثناء محاولة طباعة الباركود');
      throw error;
    }
  }

  /**
   * إنشاء HTML للإيصال
   */
  private generateReceiptHTML(applicant: ApplicantModel, qrCodeDataUrl: string, qrCodeData: string): string {
    return `
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>إيصال الباركود - ${applicant.fileNumber}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Arial', 'Tahoma', sans-serif;
      width: 80mm; /* عرض الطابعة الحرارية (80mm = 3.15 inches) */
      max-width: 80mm;
      padding: 8mm 5mm;
      background: white;
      font-size: 11px;
      line-height: 1.5;
      margin: 0 auto;
    }
    
    .receipt {
      text-align: center;
      width: 100%;
    }
    
    .header {
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px dashed #000;
    }
    
    .header h1 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #000;
    }
    
    .header p {
      font-size: 11px;
      color: #666;
    }
    
    .info-section {
      margin: 15px 0;
      text-align: right;
      direction: rtl;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      padding: 5px 0;
      border-bottom: 1px dotted #ccc;
    }
    
    .info-label {
      font-weight: bold;
      color: #333;
      font-size: 11px;
    }
    
    .info-value {
      color: #000;
      font-size: 12px;
      font-weight: 600;
    }
    
    .barcode-section {
      margin: 20px 0;
      text-align: center;
    }
    
    .barcode-image {
      width: 120px;
      height: 120px;
      margin: 15px auto;
      border: 2px solid #000;
      padding: 8px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .barcode-image img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    .file-number {
      font-size: 14px;
      font-weight: bold;
      margin-top: 5px;
      letter-spacing: 2px;
    }
    
    .footer {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 2px dashed #000;
      font-size: 10px;
      color: #666;
    }
    
    @media print {
      body {
        margin: 0;
        padding: 5mm;
      }
      
      @page {
        size: 80mm auto;
        margin: 0;
      }
      
      .no-print {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="receipt">
    <div class="header">
      <h1>إيصال المنتسب</h1>
  
    </div>
    
    <div class="info-section">
      <div class="info-row">
        <span class="info-label">الاسم الكامل:</span>
        <span class="info-value">${applicant.fullName || '-'}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">رقم الملف:</span>
        <span class="info-value">${applicant.fileNumber || qrCodeData || '-'}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">رقم الدور:</span>
        <span class="info-value">${applicant.queueNumber != null ? applicant.queueNumber : '-'}</span>
      </div>
    </div>
    
    <div class="barcode-section">
      <div class="barcode-image">
        <img src="${qrCodeDataUrl}" alt="QR Code" />
      </div>
      <div class="file-number">${applicant.fileNumber || qrCodeData || ''}</div>
    </div>
    
        <div class="footer">
          <p>تاريخ الطباعة الهجري: ${new Date().toLocaleDateString('ar-SA')}</p>
          <p>تاريخ الطباعة الميلادي: ${this.getFormattedDate()}</p>
          <p>وقت الطباعة: ${this.getFormattedTime()}</p>
        </div>

  </div>
</body>
</html>
    `;
  }

  /**
   * الحصول على التاريخ الميلادي بصيغة yyyy/MM/dd
   */
  private getFormattedDate(): string {
    const now = new Date();
    return this.datePipe.transform(now, 'yyyy/MM/dd') || now.toISOString().split('T')[0];
  }

  /**
   * الحصول على الوقت بصيغة HH:mm:ss
   */
  private getFormattedTime(): string {
    const now = new Date();
    return this.datePipe.transform(now, 'HH:mm:ss') || now.toTimeString().split(' ')[0];
  }
}

