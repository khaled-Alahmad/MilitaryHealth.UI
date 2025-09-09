import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Applicant } from '../models/applicant.model';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private apiUrl = `${environment.apiUrl}/api/Applicants`;

  constructor(private http: HttpClient) {}

  /**
   * جلب Applicant كامل عن طريق رقم الملف
   */
  getApplicantByFileNumber(fileNumber: string): Observable<Applicant> {
    return this.http.get<ApiResponse<Applicant>>(`${this.apiUrl}/${fileNumber}`)
        .pipe(
          map(response => response.data)
        );
  }





  
}
