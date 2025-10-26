import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit  {
  @Input() collapsed = false; 
  role: string | null = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const userRole = this.authService.getUserRole();
    const userName = this.authService.getUserName();
    const specialtyId = this.authService.getSpecializationId();

    if (userRole === 'Doctor') {
      // تحديد الدور بناءً على اسم المستخدم أولاً، ثم التخصص
      switch (userName) {
        case 'eye_clinic':
          this.role = 'Doctor_Eye';
          break;
        case 'internal_clinic':
          this.role = 'Doctor_Internal';
          break;
        case 'surgery_clinic':
          this.role = 'Doctor_Surgery';
          break;
        case 'orthopedics_clinic':
          this.role = 'Doctor_Orthopedics';
          break;
        case 'ear_clinic':
          this.role = 'Doctor_Ear';
          break;
        default:
          // إذا لم يكن هناك اسم محدد، استخدم التخصص
          if (specialtyId) {
            switch (specialtyId) {
              case 1:
                this.role = 'Doctor_Eye';
                break;
              case 2:
                this.role = 'Doctor_Internal';
                break;
              case 3:
                this.role = 'Doctor_Surgery';
                break;
              case 4:
                this.role = 'Doctor_Orthopedics';
                break;
              case 5:
                this.role = 'Doctor_Ear';
                break;
              default:
                this.role = 'Doctor'; 
            }
          } else {
            this.role = 'Doctor';
          }
      }
    } else {
      this.role = userRole;
    }
    
    // Debug: طباعة القيم للتأكد
    console.log('User Role:', userRole);
    console.log('User Name:', userName);
    console.log('Specialty ID:', specialtyId);
    console.log('Final Role:', this.role);
  }
}
