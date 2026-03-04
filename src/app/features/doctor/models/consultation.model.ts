export interface Doctor {
  doctorID: number;
  fullName: string;
  specializationID: number;
  contractTypeID: number;
  code: string;
}

export interface Consultation {
  consultationID?: number;
  doctorID?: number | null;
  applicantFileNumber: string;
  consultationType: string;
  // referredDoctor: string; // ❌ تم حذفه حسب التقرير
  referralReason?: string; // ✅ جديد - سبب الإحالة
  result: string;
  attachment?: string;
  doctor?: Doctor;
}
