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
    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    
    body {
      font-family: 'Cairo', 'Segoe UI', 'Tahoma', sans-serif;
      width: 70mm;
      max-width: 70mm;
      margin: 0 auto;
      color: #000;
      line-height: 1.4;
    }
    
    .ticket {
      width: 100%;
      min-height: auto;
      padding: 2mm 3mm 4mm;
      display: flex;
      flex-direction: column;
      gap: 2mm;
      page-break-inside: avoid;
    }
    
    .header {
      text-align: center;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px dashed #000;
    }
    
    .header h1 {
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 4px 0;
    }
    
    .info-section {
      margin: 12px 0;
      text-align: right;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      border-bottom: 1px dotted #bbb;
      font-size: 11px;
    }
    
    .info-label {
      font-weight: 600;
      color: #111;
    }
    
    .info-value {
      font-weight: 700;
      color: #111;
      font-size: 12px;
    }
    
    .barcode-section {
      text-align: center;
      margin: 18px 0;
    }
    
    .barcode-image {
      width: 140px;
      height: 140px;
      margin: 0 auto;
      padding: 10px;
      border: 2px solid #000;
    }
    
    .barcode-image img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    .file-number {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 3px;
      margin-top: 8px;
    }
    
    .footer {
      margin-top: 18px;
      padding-top: 10px;
      border-top: 2px dashed #000;
      font-size: 11px;
      text-align: right;
      line-height: 1.5;
    }
    
    @media print {
      body {
        width: 70mm;
        max-width: 70mm;
      }
      
      @page {
        size: 72mm auto;
        margin: 0;
      }
    }
  </style>
</head>
<body>
  <div class="ticket">
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
          <p>تاريخ الميلادي: ${this.getFormattedDate()}</p>
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

