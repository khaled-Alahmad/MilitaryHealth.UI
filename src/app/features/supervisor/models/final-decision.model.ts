export interface FinalDecisionModel {
  orthopedicExamID: number;
  surgicalExamID: number;
  internalExamID: number;
  eyeExamID: number;
  earClinicID?: number;
  applicantFileNumber: string;
  resultID: number;
  reason?: string;
  postponeDuration?: string;
  decisionDate: string;
  // ✅ حقول جديدة من التقرير
  receptionAddedAt?: Date | string;
  supervisorAddedAt?: Date | string;
  supervisorLastModifiedAt?: Date | string;
  isExportedToRecruitment?: boolean;
  exportedAt?: Date | string;
}