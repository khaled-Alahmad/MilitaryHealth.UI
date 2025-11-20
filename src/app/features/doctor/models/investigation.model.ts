export interface Doctor {
  doctorID: number;
  fullName: string;
  specializationID: number;
  contractTypeID: number;
  code: string;
}

export interface Investigation {
  investigationID?: number;
  applicantFileNumber: string;
  type: string;
  investigationReason?: string; // ✅ جديد - سبب التحليل
  result: string;
  attachment?: string;
  status: string;
  doctorID: number;
  doctor?: Doctor;
}
