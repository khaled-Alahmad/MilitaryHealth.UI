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
  reason?: string;
  result?: Result;
  doctor?: Doctor;
}
