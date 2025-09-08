export interface Refraction {
  refractionID?: number;
  refractionTypeID: number;
  refractionValue: number;
  isLeft: boolean;
  eyeExamID: number;
  refractionType?: {
    refractionTypeID: number;
    description: string;
  };
}
