import { Result } from "../../doctor/models/internal-exam.model";
import { MaritalStatus } from "./marital-status.model";

export interface ApplicantModel{
  applicantID:number;
  fileNumber:string;
  fullName: string;
  motherName?: string;
  dateOfBirth?: Date | string;
  recruitmentCenter?: string;
  bloodType?: string;
  queueNumber?: number;
  maritalStatusID: number;
  job: string;
  height?: number | null;
  weight?: number | null;
  bmi?: number | null;
  bloodPressure?: string | null;
  pulse?: number | null;
  tattoo?: boolean | null;
  tattooDescription?: string | null;
  distinctiveMarks?: string | null;
  maritalStatus?: MaritalStatus;
  associateNumber:string;
  createdAt?: Date | string;
}
export interface ApplicantDetailsModel {
  applicantID: number;
  fileNumber: string;
  fullName: string;
  motherName?: string;
  dateOfBirth?: Date | string;
  recruitmentCenter?: string;
  bloodType?: string;
  queueNumber?: number;
  associateNumber?: string;
  createdAt?: Date | string;
  maritalStatusID: number;
  maritalStatus?: MaritalStatus;
  job: string;
  height?: number | null;
  weight?: number | null;
  bmi?: number | null;
  bloodPressure?: string | null;
  pulse?: number | null;
  tattoo?: boolean | null;
  tattooDescription?: string | null;
  distinctiveMarks?: string | null;

  eyeExam?: EyeExam;
  surgicalExam?: SurgicalExam;
  orthopedicExamDto?: OrthopedicExam;
  internalExam?: InternalExam;
  earClinic?: EarExam;
  consultation?: Consultation;
  investigation?: Investigation;
  finalDecision?: FinalDecision;
}

export interface EyeExam {
  eyeExamID: number;
  applicantFileNumber: string;
  doctorID: number;
  vision: string;
  visionLeft?: string; // ✅ القدرة البصرية اليسرى
  colorTest: string;
  colorTestLeft?: string; // ✅ اختبار الألوان اليسرى
  refractionTypeID: number;
  refractionValue: number;
  resultID: number;
  refractions: Refraction[];
  otherDiseases?: string; // ✅ أمراض أخرى
  reason?: string; // ✅ السبب
}

export interface SurgicalExam {
  surgicalExamID: number;
  applicantFileNumber: string;
  doctorID: number;
  generalSurgery: string;
  urinarySurgery: string;
  vascularSurgery: string;
  thoracicSurgery: string;
  resultID: number;
}

export interface OrthopedicExam {
  orthopedicExamID: number;
  applicantFileNumber: string;
  doctorID: number;
  musculoskeletal: string;
  neurologicalSurgery: string;
  resultID: number;
  reason: string;
}

export interface InternalExam {
  internalExamID: number;
  applicantFileNumber: string;
  doctorID: number;
  heart: string;
  respiratory: string;
  digestive: string;
  endocrine: string;
  neurology: string;
  blood: string;
  joints: string;
  kidney: string;
  // hearing: string; // ❌ تم حذفه حسب التقرير
  skin: string;
  resultID: number;
}

export interface EarExam {
  earClinicID: number;
  applicantFileNumber: string;
  doctorID: number;
  rightEar: string;
  leftEar: string;
  rightTympanicMembrane: string;
  leftTympanicMembrane: string;
  rightHearing: string;
  leftHearing: string;
  resonators: string;
  rightWhisperTest: string;
  leftWhisperTest: string;
  rightNose: string;
  leftNose: string;
  isRightHugeMates: boolean;
  isLeftHugeMates: boolean;
  rightString: string;
  leftString: string;
  mouth: string;
  otherDiseases: string;
  resultID: number;
  reason: string;
  doctor?: {
    doctorID: number;
    fullName: string;
    specializationID: number;
    code: string;
  };
  finalDecisions?: any[];
  result?: {
    resultID: number;
    description: string;
  };
}

export interface Consultation {
  consultationID: number;
  doctorID: number;
  applicantFileNumber: string;
  consultationType: string;
  // referredDoctor: string; // ❌ تم حذفه حسب التقرير
  referralReason?: string; // ✅ جديد - سبب الإحالة
  result: string;
  attachment: string;
}

export interface Investigation {
  investigationID: number;
  applicantFileNumber: string;
  type: string;
  investigationReason?: string; // ✅ جديد - سبب التحليل
  result: string;
  attachment: string;
  status: string;
  doctorID: number;
}

export interface FinalDecision {
  decisionID: number;
  orthopedicExamID: number;
  surgicalExamID: number;
  internalExamID: number;
  eyeExamID: number;
  applicantFileNumber: string;
  resultID: number;
  reason: string;
  postponeDuration: string;
  decisionDate: string;
  result: Result;
  // ✅ حقول جديدة من التقرير
  receptionAddedAt?: Date | string;
  supervisorAddedAt?: Date | string;
  supervisorLastModifiedAt?: Date | string;
  isExportedToRecruitment?: boolean;
  exportedAt?: Date | string;
}

export interface Refraction {
  refractionTypeID: number;
  refractionValue: number;
}
