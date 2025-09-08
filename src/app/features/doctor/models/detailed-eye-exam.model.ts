import { EyeExam } from './eye-exam.model';
import { OrganizedRefractions } from './organized-refractions.model';

export interface DetailedEyeExam extends EyeExam {
  organizedRefractions: OrganizedRefractions;
}
