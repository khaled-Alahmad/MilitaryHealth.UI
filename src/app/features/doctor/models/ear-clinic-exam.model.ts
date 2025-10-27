export interface Doctor {
  doctorID: number;
  specializationID: number;
  fullName?: string; // إذا كان السيرفر يرجع الاسم
}

export interface Result {
  resultID: number;
  description: string;
}

export interface EarClinicExam {
  earClinicID?: number;
  applicantFileNumber: string;
  doctorID: number;
  rightTympanicMembrane: string; // "سليم" or "غير سليم"
  leftTympanicMembrane: string; // "سليم" or "غير سليم"
  rightHearing: string;
  leftHearing: string;
  resonators: string;
  rightWhisperTest: string;
  leftWhisperTest: string;
  isRightHugeMates: boolean;
  isLeftHugeMates: boolean;
  rightString?: string; // OL Deviation - "بسيط", "متوسط", "شديد"
  leftString?: string; // OR Deviation - "بسيط", "متوسط", "شديد"
  mouth: string;
  mouthOther?: string; // For "أخرى" option
  otherDiseases: string;
  resultID: number;
  reason: string;
  result?: Result;
  doctor?: Doctor;
}
