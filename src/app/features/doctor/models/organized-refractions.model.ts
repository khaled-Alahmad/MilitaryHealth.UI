export interface OrganizedRefractions {
  rightEye: {
    myopia?: number; // قصر نظر
    hyperopia?: number; // طول نظر
    astigmatism?: number; // استجماتيزم
  };
  leftEye: {
    myopia?: number; // قصر نظر
    hyperopia?: number; // طول نظر
    astigmatism?: number; // استجماتيزم
  };
  hasRefractions: boolean;
}
