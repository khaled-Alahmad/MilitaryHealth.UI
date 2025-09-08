import { Doctor } from './doctor.model';
import { Result } from '../../../shared/models/result.model';
import { Refraction } from './refraction.model';

export interface EyeExam {
    eyeExamID?: number;
    applicantFileNumber: string;
    doctorID: number;
    vision: string;
    visionLeft: string;
    colorTest: string;
    colorTestLeft: string;
    otherDiseases?: string;
    resultID: number;
    applicantId?: number;
    reason?: string;
    doctor?: Doctor;
    refractions?: Refraction[];
    result?: Result;
}
