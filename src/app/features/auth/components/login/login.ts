import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm!: FormGroup;
  roleWithSpecialty: string | null = '';
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
submitted = false;


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  
  loging() {
      this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe({
      next: () => {
        const role = this.authService.getUserRole();
        if (role === 'Admin') 
        {
          this.router.navigate(['/admin/dashboard']);
        } 
        else if (role === 'Receptionist') 
        {
          this.router.navigate(['/reception/applicants/add']);
        }
         else if (role === 'Diwan') 
        {
          this.router.navigate(['/archive']);
        }  
        else if (role === 'Doctor') 
        {
          const specializationID = this.authService.getSpecializationId(); 
          
          if (specializationID) {
            this.authService.getSpecializationNameById(specializationID).subscribe({
              next: (specialtyName) => {
                const specialty = specialtyName.toLowerCase();

                // ربط الدور مع التخصص للعرض في sidebar
                this.roleWithSpecialty = `Doctor_${specialty.charAt(0).toUpperCase() + specialty.slice(1)}`;
                
                // التوجيه حسب التخصص
                switch (specialty) {
                  case 'عيون':
                  case 'eye':
                    this.router.navigate(['/doctor/eye']);
                    break;
                  case 'باطنة':
                  case 'internal':
                    this.router.navigate(['/doctor/internal']);
                    break;
                  case 'عظمية':
                  case 'orthopedics':
                    this.router.navigate(['/doctor/orthopedics']);
                    break;
                  case 'جراحة':
                  case 'surgery':
                    this.router.navigate(['/doctor/surgery']);
                    break;
                  case 'أذن':
                  case 'اذن':
                  case 'اذنية':
                  case 'أذنية':
                  case 'ear':
                  case 'انف واذن':
                  case 'أنف وأذن':
                  case 'أنف وأذن وحنجرة':
                  case 'انس ف و اذن':
                  case 'ears':
                  case 'otolaryngology':
                  case 'ent':
                    this.router.navigate(['/doctor/ear']);
                    break;
                  default:
                    this.router.navigate(['/doctor/']); // fallback
                }
              },
              error: () => {
                this.router.navigate(['/doctor']); // fallback
              }
            });
          } else {
            this.router.navigate(['/doctor']); // fallback
          }
        }
        else if (role === 'Supervisor') {
          this.router.navigate(['/supervisor']);
        }
         else {
          this.router.navigate(['/unauthorized']); // fallback لو حابب
        }
      },
      error: () => {
        // Error handling is done in auth service
      }
    });
  }

  getFieldError(fieldName: string): string | null {
    const control = this.loginForm.get(fieldName);
    if (control && control.touched && control.invalid) {
      if (control.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
      if (control.errors?.['email']) {
        return 'يرجى إدخال بريد إلكتروني صحيح';
      }
      if (control.errors?.['minlength']) {
        const requiredLength = control.errors['minlength'].requiredLength;
        return `الحد الأدنى ${requiredLength} حروف`;
      }
      if (control.errors?.['maxlength']) {
        const maxLength = control.errors['maxlength'].requiredLength;
        return `الحد الأقصى ${maxLength} حروف`;
      }
      if (control.errors?.['pattern']) {
        return 'القيمة غير مطابقة للنمط المطلوب';
      }
    }
    return null;
  }
}
