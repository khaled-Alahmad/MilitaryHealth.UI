import { Doctor } from './doctor.model';
import { Result } from '../../../shared/models/result.model';
import { Refraction } from './refraction.model';

export interface EyeExam {
    eyeExamID?: number;
    applicantFileNumber: string;
    doctorID: number;
    vision: string; // القدرة البصرية اليمنى "R:" مثل "8" (لكتابة قبل /10)
    visionLeft: string; // القدرة البصرية اليسرى "L:" 
    colorTest: string; // اختبار الألوان اليمنى: "سليم" أو "غير سليم" أو "غير ذلك"
    colorTestLeft: string; // اختبار الألوان اليسرى: "سليم" أو "غير سليم" أو "غير ذلك"
    refractiveError?: string; // أسواء الانكسار (قديم - للتوافق مع البيانات القديمة)
    worstRefractionRight?: string; // أسوأ انكسار العين اليمنى: "مهمة" أو "غير مهمة"
    worstRefractionLeft?: string; // أسوأ انكسار العين اليسرى: "مهمة" أو "غير مهمة"
    otherDiseases?: string;
    resultID: number;
    applicantId?: number;
    reason?: string;
    doctor?: Doctor;
    refractions?: Refraction[];
    result?: Result;
}
