import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { JWTPayload } from '../../models/jwt-payload.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserRoles } from '../../models/enums/user-roles.enum';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class Topbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  userRole: string | null = null;
  displayName: string = '';

  showUserMenu = false;
  constructor(private auth: AuthService, private router: Router) {
    this.userRole = this.auth.getUserRole();
    this.displayName = this.getDisplayName();
  }

  getDisplayName(): string {
    const role = this.userRole;
    
    if (!role) return '';
    
    // إذا كان المستخدم طبيب، احصل على اسم التخصص
    if (role === UserRoles.Doctor) {
      const specialtyName = this.auth.getDoctorSpecialtyName();
      if (specialtyName) {
        return specialtyName;
      }
      // إذا لم يكن هناك اسم تخصص، ابحث عن ID التخصص واحصل على الاسم
      const specialtyId = this.auth.getSpecializationId();
      if (specialtyId) {
        // جلب اسم التخصص من الـ API
        this.auth.getSpecializationNameById(specialtyId).subscribe({
          next: (name) => {
            if (name && name !== 'unknown') {
              localStorage.setItem('doctor_specialty_name', name);
              this.displayName = 'عيادة ' + name;
            }
          }
        });
      }
    }
    
    // إذا لم يكن طبيب، اظهر الدور
    const roleMap: { [key: string]: string } = {
      'Receptionist': 'أمين الاستقبال',
      'Admin': 'المسؤول',
      'Supervisor': 'المشرف',
      'Diwan': 'الديوان'
    };
    
    return roleMap[role] || role;
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }


  logout() {
    this.auth.logout().subscribe({
      next: () => {
        this.auth.clearStorage();
        this.router.navigate(['/login']);
      },
      error: () => {
        this.auth.clearStorage();
        this.router.navigate(['/login']);
      }
    });
  }
}
