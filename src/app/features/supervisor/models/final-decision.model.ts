export interface FinalDecisionModel {
  orthopedicExamID: number;
  surgicalExamID: number;
  internalExamID: number;
  eyeExamID: number;
  earClinicID?: number;  // معرف عيادة الأذن
  applicantFileNumber: string;
  resultID: number;
  reason?: string;
  postponeDuration?: string;
  decisionDate: string;
}