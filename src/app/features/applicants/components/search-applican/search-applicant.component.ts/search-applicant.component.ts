import { Component, EventEmitter, OnInit, OnDestroy, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Applicant } from '../../../models/applicant.model';
import { ApplicantService } from '../../../services/applicant.service';
import { ApplicantService as ReceptionApplicantService } from '../../../../reception/services/applicant.service';
import { ApplicantDetailsModel, ApplicantModel } from '../../../../reception/models/applicant.model';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { GregorianDatePipe } from '../../../../../shared/pipes/gregorian-date.pipe';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { ApiResponse, PagedResponse } from '../../../../../shared/models/paged-response.model';
import { Html5Qrcode } from 'html5-qrcode';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-applicant',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    GregorianDatePipe
  ],
  templateUrl: './search-applicant.component.html',
  styleUrls: ['./search-applicant.component.scss']
})
export class SearchApplicantComponent implements OnInit, OnDestroy {
  @ViewChild('barcodeInput', { static: false }) barcodeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('scannerContainer', { static: false }) scannerContainer!: ElementRef<HTMLDivElement>;
  
  @Input() hideApplicantDetails: boolean = false; // ✅ إخفاء البيانات الشخصية عند المشرف والديوان
  
 searchForm!: FormGroup;
  applicant: Applicant | null = null;
  loading = false;
  responseMessage: string | null = null;
  searchType: 'fileNumber' | 'barcode' | 'name' = 'fileNumber';
  showBarcodeScanner = false;
  searchResults: ApplicantModel[] = [];
  showResults = false;
  scanning = false;
  private html5QrCode: Html5Qrcode | null = null;
  private scannerId = 'barcode-scanner';
  private lastSearchValue: string | null = null; // ✅ منع الطلبات المكررة لنفس قيمة البحث
  private isSearching: boolean = false; // ✅ منع استدعاء البحث عدة مرات في نفس الوقت
  private lastEmittedFileNumber: string | null = null; // ✅ منع إرسال الـ event مرتين لنفس المنتسب
  private searchSubject = new Subject<string>(); // ✅ للبحث مع debounce
  private destroy$ = new Subject<void>(); // ✅ لإلغاء الاشتراكات
  private currentSearchSubscription: any = null; // ✅ لإلغاء الطلب السابق

  @Output() applicantSelected = new EventEmitter<Applicant>();
  @Output() applicantDetailsSelected = new EventEmitter<ApplicantDetailsModel>(); // ✅ إرسال ApplicantDetailsModel مباشرة لتجنب الطلبات المكررة

  constructor(
    private fb: FormBuilder, 
    private applicantService: ApplicantService,
    private receptionApplicantService: ReceptionApplicantService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchValue: ['']
    });

    // ✅ الاستماع لتغييرات حقل البحث للبحث التلقائي عند Enter
    this.searchForm.get('searchValue')?.valueChanges.subscribe(() => {
      this.responseMessage = null;
      this.showResults = false;
      this.searchResults = [];
    });

    // ✅ إعداد debounce للبحث (500ms تأخير)
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(searchValue => {
      if (searchValue && searchValue.trim()) {
        this.performSearch(searchValue.trim());
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.currentSearchSubscription) {
      this.currentSearchSubscription.unsubscribe();
    }
    // ✅ إيقاف ماسح الباركود عند تدمير المكون
    this.stopBarcodeScanner();
    if (this.html5QrCode) {
      this.html5QrCode.clear();
    }
  }

  onSearchTypeChange(type: 'fileNumber' | 'barcode' | 'name'): void {
    this.searchType = type;
    this.searchForm.patchValue({ searchValue: '' });
    this.responseMessage = null;
    this.applicant = null;
    this.showResults = false;
    this.searchResults = [];
    this.showBarcodeScanner = false;
    this.lastEmittedFileNumber = null; // ✅ إعادة تعيين عند تغيير نوع البحث
  }

  onSearch(): void {
    const searchValue = this.searchForm.value.searchValue?.trim();
    if (!searchValue) {
      this.responseMessage = 'يرجى إدخال قيمة البحث أولاً';
      return;
    }

    // ✅ إلغاء الطلب السابق إذا كان موجوداً
    if (this.currentSearchSubscription) {
      this.currentSearchSubscription.unsubscribe();
      this.currentSearchSubscription = null;
    }

    // ✅ استخدام debounce للبحث
    this.searchSubject.next(searchValue);
  }

  // ✅ دالة البحث الفعلية (يتم استدعاؤها بعد debounce)
  private performSearch(searchValue: string): void {
    // ✅ منع الطلبات المكررة لنفس قيمة البحث
    if (this.isSearching && this.lastSearchValue === searchValue) {
      return;
    }

    this.isSearching = true;
    this.lastSearchValue = searchValue;
    this.loading = true;
    this.responseMessage = null;
    this.applicant = null;
    this.showResults = false;
    this.searchResults = [];

    switch (this.searchType) {
      case 'fileNumber':
        this.searchByFileNumber(searchValue);
        break;
      case 'barcode':
        this.searchByBarcode(searchValue);
        break;
      case 'name':
        this.searchByName(searchValue);
        break;
    }
  }

  private searchByFileNumber(fileNumber: string): void {
    // ✅ منع إرسال الـ event مرتين لنفس رقم الملف
    if (this.lastEmittedFileNumber === fileNumber && this.applicant?.fileNumber === fileNumber) {
      this.loading = false;
      this.isSearching = false;
      return;
    }

    // ✅ إلغاء الطلب السابق إذا كان موجوداً
    if (this.currentSearchSubscription) {
      this.currentSearchSubscription.unsubscribe();
    }

    // ✅ استخدام /api/Applicants/Details/{fileNumber} مباشرة (بدون filter)
    this.currentSearchSubscription = this.receptionApplicantService.getApplicantByFileNumber$(fileNumber.trim())
      .subscribe({
        next: (applicantDetails: ApplicantDetailsModel) => {
          if (applicantDetails) {
            this.selectApplicantWithDetails(applicantDetails);
          } else {
            this.responseMessage = 'لم يتم العثور على منتسب بهذا الرقم';
            this.applicant = null;
            this.lastEmittedFileNumber = null;
          }
          this.loading = false;
          this.isSearching = false;
          this.currentSearchSubscription = null;
        },
        error: () => {
          this.applicant = null;
          this.loading = false;
          this.isSearching = false;
          this.lastEmittedFileNumber = null;
          this.currentSearchSubscription = null;
          this.responseMessage = 'لم يتم العثور على منتسب بهذا الرقم';
        }
      });
  }

  private searchByBarcode(barcode: string): void {
    // ✅ الباركود يمكن أن يكون رقم الملف مباشرة أو بصيغة APP-{ID}
    
    // إذا كان الباركود بصيغة APP-{ID}، نستخرج ID ثم نبحث برقم الملف
    if (barcode.startsWith('APP-')) {
      const applicantId = parseInt(barcode.replace('APP-', ''), 10);
      if (!isNaN(applicantId)) {
        // ✅ جلب ApplicantModel أولاً للحصول على رقم الملف
        this.receptionApplicantService.getApplicantById$(applicantId).subscribe({
          next: (applicant: ApplicantModel) => {
            if (applicant && applicant.fileNumber) {
              // ✅ استخدام رقم الملف للبحث في Details
              this.searchByFileNumber(applicant.fileNumber);
            } else {
              this.responseMessage = 'لم يتم العثور على منتسب بهذا الباركود';
              this.applicant = null;
              this.lastEmittedFileNumber = null;
              this.loading = false;
              this.isSearching = false;
            }
          },
          error: () => {
            this.applicant = null;
            this.loading = false;
            this.isSearching = false;
            this.lastEmittedFileNumber = null;
            this.responseMessage = 'لم يتم العثور على منتسب بهذا الباركود';
          }
        });
        return;
      }
    }

    // ✅ البحث برقم الملف (الباركود هو رقم الملف مباشرة)
    this.searchByFileNumber(barcode);
  }


  private searchByName(name: string): void {
    // ✅ إلغاء الطلب السابق إذا كان موجوداً
    if (this.currentSearchSubscription) {
      this.currentSearchSubscription.unsubscribe();
    }

    // ✅ استخدام نفس الطريقة: GET /api/Applicants?page=1&pageSize=100&filter=xxx
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '100')
      .set('filter', name.trim());

    this.currentSearchSubscription = this.http.get<ApiResponse<PagedResponse<ApplicantModel>>>(`${environment.apiUrl}/api/Applicants`, { params })
      .subscribe({
        next: (response) => {
          if (response.data && response.data.items && response.data.items.length > 0) {
            // ✅ تصفية النتائج لمطابقة تامة مع الاسم
            const exactMatches = response.data.items.filter(applicant => {
              const applicantName = (applicant.fullName || '').trim();
              const searchName = name.trim();
              // ✅ مطابقة تامة (case-insensitive)
              return applicantName.toLowerCase() === searchName.toLowerCase();
            });

            // ✅ إزالة التكرارات بناءً على applicantID
            const uniqueMatches = this.removeDuplicateApplicants(exactMatches);

            if (uniqueMatches.length > 0) {
              this.searchResults = uniqueMatches;
              this.showResults = true;
              
              // إذا كانت النتيجة واحدة فقط، نختارها تلقائياً (سيتم جلب Details)
              if (this.searchResults.length === 1) {
                this.selectApplicant(this.searchResults[0]);
              }
            } else {
              this.responseMessage = 'لم يتم العثور على منتسب بهذا الاسم (المطابقة التامة)';
              this.showResults = false;
              this.searchResults = [];
            }
          } else {
            this.responseMessage = 'لم يتم العثور على منتسب بهذا الاسم';
            this.showResults = false;
            this.searchResults = [];
          }
          this.loading = false;
          this.isSearching = false;
          this.currentSearchSubscription = null;
        },
        error: () => {
          this.loading = false;
          this.isSearching = false;
          this.currentSearchSubscription = null;
          this.responseMessage = 'حدث خطأ أثناء البحث';
          this.showResults = false;
          this.searchResults = [];
        }
      });
  }

  // ✅ إزالة التكرارات من قائمة المنتسبين
  private removeDuplicateApplicants(applicants: ApplicantModel[]): ApplicantModel[] {
    const seen = new Set<number>();
    return applicants.filter(applicant => {
      if (seen.has(applicant.applicantID)) {
        return false;
      }
      seen.add(applicant.applicantID);
      return true;
      });
  }

  // ✅ إزالة التكرارات من قائمة ApplicantDetailsModel
  private removeDuplicateApplicantsDetails(applicants: ApplicantDetailsModel[]): ApplicantDetailsModel[] {
    const seen = new Set<number>();
    return applicants.filter(applicant => {
      if (seen.has(applicant.applicantID)) {
        return false;
      }
      seen.add(applicant.applicantID);
      return true;
    });
  }

  // ✅ تحويل ApplicantDetailsModel إلى ApplicantModel للعرض في القائمة
  private convertDetailsToModel(details: ApplicantDetailsModel): ApplicantModel {
    return {
      applicantID: details.applicantID,
      fileNumber: details.fileNumber,
      fullName: details.fullName,
      motherName: details.motherName,
      dateOfBirth: details.dateOfBirth,
      recruitmentCenter: details.recruitmentCenter,
      bloodType: details.bloodType,
      queueNumber: details.queueNumber,
      maritalStatusID: details.maritalStatusID,
      job: details.job,
      height: details.height,
      weight: details.weight,
      bmi: details.bmi,
      bloodPressure: details.bloodPressure,
      pulse: details.pulse,
      tattoo: details.tattoo,
      distinctiveMarks: details.distinctiveMarks,
      maritalStatus: details.maritalStatus,
      associateNumber: details.associateNumber,
      createdAt: details.createdAt
    } as ApplicantModel;
  }

  // ✅ دالة جديدة لاستخدام ApplicantDetailsModel مباشرة (بدون طلب إضافي)
  selectApplicantWithDetails(applicantDetails: ApplicantDetailsModel): void {
    // ✅ منع إرسال الـ event مرتين لنفس المنتسب
    if (this.lastEmittedFileNumber === applicantDetails.fileNumber) {
      return;
    }

    const selectedApplicant: Applicant = this.convertToApplicant(applicantDetails);
    this.applicant = selectedApplicant;
    this.responseMessage = null;
    this.showResults = false;
    this.searchResults = [];
    
    // ✅ منع إرسال الـ event مرتين لنفس المنتسب
    if (this.lastEmittedFileNumber !== applicantDetails.fileNumber) {
      this.lastEmittedFileNumber = applicantDetails.fileNumber;
      // ✅ إرسال ApplicantDetailsModel مباشرة بدون طلب إضافي
      this.applicantDetailsSelected.emit(applicantDetails);
      // ✅ إرسال Applicant أيضاً للتوافق مع المكونات الأخرى
      this.applicantSelected.emit(selectedApplicant);
    }
  }

  // ✅ دالة لجلب ApplicantDetailsModel من /api/Applicants/Details عند اختيار منتسب
  selectApplicant(applicant: ApplicantModel): void {
    // ✅ منع إرسال الـ event مرتين لنفس المنتسب
    if (this.lastEmittedFileNumber === applicant.fileNumber) {
      return;
    }

    // ✅ استخدام /api/Applicants/Details للحصول على ApplicantDetailsModel الكامل (مع بيانات العيادات)
    this.receptionApplicantService.getApplicantByFileNumber$(applicant.fileNumber).subscribe({
      next: (applicantDetails: ApplicantDetailsModel) => {
        if (applicantDetails) {
          this.selectApplicantWithDetails(applicantDetails);
        } else {
          // ✅ Fallback: استخدام ApplicantModel
          const selectedApplicant: Applicant = this.convertApplicantModelToApplicant(applicant);
          this.applicant = selectedApplicant;
          this.responseMessage = null;
          this.showResults = false;
          this.searchResults = [];
          
          if (this.lastEmittedFileNumber !== selectedApplicant.fileNumber) {
            this.lastEmittedFileNumber = selectedApplicant.fileNumber;
            this.applicantSelected.emit(selectedApplicant);
          }
        }
      },
      error: () => {
        // ✅ Fallback: استخدام ApplicantModel
        const selectedApplicant: Applicant = this.convertApplicantModelToApplicant(applicant);
        this.applicant = selectedApplicant;
        this.responseMessage = null;
        this.showResults = false;
        this.searchResults = [];
        
        if (this.lastEmittedFileNumber !== selectedApplicant.fileNumber) {
          this.lastEmittedFileNumber = selectedApplicant.fileNumber;
          this.applicantSelected.emit(selectedApplicant);
        }
      }
    });
  }

  // ✅ تحويل ApplicantDetailsModel إلى Applicant
  private convertToApplicant(details: ApplicantDetailsModel): Applicant {
    return {
      applicantID: details.applicantID,
      fileNumber: details.fileNumber,
      fullName: details.fullName,
      motherName: details.motherName,
      dateOfBirth: details.dateOfBirth,
      recruitmentCenter: details.recruitmentCenter,
      bloodType: details.bloodType,
      queueNumber: details.queueNumber,
      maritalStatusID: details.maritalStatusID,
      job: details.job,
      height: details.height,
      weight: details.weight,
      bmi: details.bmi,
      bloodPressure: details.bloodPressure,
      pulse: details.pulse,
      tattoo: details.tattoo,
      distinctiveMarks: details.distinctiveMarks,
      maritalStatus: details.maritalStatus
    };
  }

  // ✅ تحويل ApplicantModel إلى Applicant (Fallback)
  private convertApplicantModelToApplicant(model: ApplicantModel): Applicant {
    return {
      applicantID: model.applicantID,
      fileNumber: model.fileNumber,
      fullName: model.fullName,
      motherName: model.motherName,
      dateOfBirth: model.dateOfBirth,
      recruitmentCenter: model.recruitmentCenter,
      bloodType: model.bloodType,
      queueNumber: model.queueNumber,
      maritalStatusID: model.maritalStatusID,
      job: model.job,
      height: model.height,
      weight: model.weight,
      bmi: model.bmi,
      bloodPressure: model.bloodPressure,
      pulse: model.pulse,
      tattoo: model.tattoo,
      distinctiveMarks: model.distinctiveMarks,
      maritalStatus: model.maritalStatus
    };
  }

  onBarcodeScan(): void {
    this.showBarcodeScanner = true;
    // ✅ بدء المسح بعد فتح الـ Dialog
    setTimeout(() => {
      this.startBarcodeScanner();
    }, 300);
  }

  startBarcodeScanner(): void {
    if (this.scanning) {
      return;
    }

    // ✅ انتظار حتى يتم إنشاء العنصر في DOM
    if (!this.scannerContainer || !this.scannerContainer.nativeElement) {
      setTimeout(() => this.startBarcodeScanner(), 100);
      return;
    }

    const containerId = this.scannerContainer.nativeElement.id || this.scannerId;
    
    try {
      this.html5QrCode = new Html5Qrcode(containerId);
      this.scanning = true;

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
        disableFlip: false
      };

      this.html5QrCode.start(
        { facingMode: 'environment' }, // استخدام الكاميرا الخلفية
        config,
        (decodedText) => {
          // ✅ تم قراءة الباركود بنجاح
          this.onBarcodeScanned(decodedText);
        },
        (errorMessage) => {
          // تجاهل رسائل الخطأ أثناء المسح (NotFound, NotReadable, etc.)
        }
      ).catch((err) => {
        console.error('Error starting scanner:', err);
        let errorMsg = 'فشل في تشغيل الكاميرا';
        if (err && err.toString().includes('Permission')) {
          errorMsg = 'يرجى السماح بالوصول إلى الكاميرا في إعدادات المتصفح';
        } else if (err && err.toString().includes('NotFound')) {
          errorMsg = 'لم يتم العثور على كاميرا. تأكد من وجود كاميرا متصلة';
        }
        this.toastr.error(errorMsg, 'خطأ');
        this.scanning = false;
        this.showBarcodeScanner = false;
      });
    } catch (err) {
      console.error('Error initializing scanner:', err);
      this.toastr.error('حدث خطأ أثناء تشغيل الماسح', 'خطأ');
      this.scanning = false;
      this.showBarcodeScanner = false;
    }
  }

  stopBarcodeScanner(): void {
    if (this.html5QrCode) {
      this.html5QrCode.stop().then(() => {
        this.html5QrCode?.clear();
        this.html5QrCode = null;
        this.scanning = false;
      }).catch((err) => {
        console.error('Error stopping scanner:', err);
        // ✅ إعادة تعيين الحالة حتى لو فشل الإيقاف
        this.html5QrCode = null;
        this.scanning = false;
      });
    } else {
      this.scanning = false;
    }
  }

  onBarcodeScanned(barcode: string): void {
    // ✅ إيقاف الماسح بعد قراءة الباركود
    this.stopBarcodeScanner();
    this.showBarcodeScanner = false;

    if (barcode && barcode.trim()) {
      // ✅ تحديث حقل البحث بالقيمة المقروءة
      this.searchForm.patchValue({ searchValue: barcode.trim() });
      
      // ✅ البحث تلقائياً
      this.searchType = 'barcode';
      this.onSearch();
      
      this.toastr.success('تم قراءة الباركود بنجاح', 'نجاح');
    }
  }

  onCloseScanner(): void {
    this.stopBarcodeScanner();
    this.showBarcodeScanner = false;
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}