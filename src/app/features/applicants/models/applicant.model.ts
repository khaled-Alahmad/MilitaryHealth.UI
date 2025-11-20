export interface Applicant {
  applicantID: number;
  fileNumber: string;
  fullName: string;
  motherName?: string; // ✅ اسم الأم
  dateOfBirth?: Date | string; // ✅ تاريخ المواليد
  recruitmentCenter?: string; // ✅ مركز التجنيد
  bloodType?: string; // ✅ زمرة الدم
  queueNumber?: number; // ✅ رقم الدور
  maritalStatusID: number;
  job: string;
  height?: number;
  weight?: number;
  bmi?: number;
  bloodPressure?: string;
  pulse?: number;
  tattoo?: boolean;
  distinctiveMarks?: string;
  maritalStatus?: MaritalStatus;
  hasInternalExam?: boolean;   // ✅ أضفناها
}


export interface MaritalStatus {
  maritalStatusID: number;
  description: string;
}
