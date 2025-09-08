// models/eye-exam-post.model.ts
import { Refraction } from './refraction.model';

export interface EyeExamPost {
  eyeExamID?: number;

  // بيانات المنتسب
  applicantId?: number;          // معرّف المنتسب (لازم لأنك تستخدمه في showDetails و showRefractions)
  applicantFileNumber: string;   // رقم ملف المريض

  // بيانات الفحص
  doctorID: number;              // رقم الدكتور
  vision: string;                // القدرة البصرية
  colorTest: string;             // اختبار الألوان
  otherDiseases?: string;        // أمراض أخرى (اختياري)
  resultID: number;              // نتيجة الفحص (ID)
  reason?: string;               // سبب التأجيل أو الملاحظة

  // الانكسارات
  refractionID?: number;         // معرف الانكسار (مطلوب في addRefraction)
  refractions?: Refraction[];    // قائمة الانكسارات (يمين/يسار)

  // علاقات إضافية
  doctor?: {
    doctorID: number;
    fullName: string;
    specializationID?: number;
    contractTypeID?: number;
    code?: string;
  };
  refractionType?: {
    refractionTypeID: number;
    description: string;
  };
  result?: {
    resultID: number;
    description: string;
  };
}
