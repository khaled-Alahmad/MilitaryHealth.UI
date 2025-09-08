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
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<ApiResponse<{items: Applicant[], totalCount: number}>>(
      `${this.apiUrl}?filter=${fileNumber}`,
      { headers }
    ).pipe(
      map(res => {
        const applicant = res.data.items.find(item => item.fileNumber === fileNumber);
        if (!applicant) {
          throw new Error(`Applicant with file number ${fileNumber} not found`);
        }
        return applicant;
      })
    );
  }


}
