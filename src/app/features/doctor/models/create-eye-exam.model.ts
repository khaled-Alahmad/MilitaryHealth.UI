// models/create-eye-exam.model.ts
export interface CreateEyeExam {
  eyeExamID?: number;
  applicantId?: number;
  applicantFileNumber: string;
  doctorID: number;
  vision: string;
  visionLeft: string;
  colorTest: string;
  colorTestLeft: string;
  otherDiseases?: string;
  resultID: number;
  reason?: string;
}
