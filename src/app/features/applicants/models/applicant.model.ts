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
  height?: number | null;
  weight?: number | null;
  bmi?: number | null;
  bloodPressure?: string | null;
  pulse?: number | null;
  tattoo?: boolean | null;
  tattooDescription?: string | null;
  distinctiveMarks?: string | null;
  maritalStatus?: MaritalStatus;
  hasInternalExam?: boolean; // ✅ أضفناها
}

export interface MaritalStatus {
  maritalStatusID: number;
  description: string;
}
