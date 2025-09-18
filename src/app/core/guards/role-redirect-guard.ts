import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { UserRoles } from '../models/enums/user-roles.enum';
import { AuthService } from '../../features/auth/services/auth.service';

export const roleRedirectGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  if (state.url === '/' || state.url === '') {
    const role = authService.getUserRole();
    console.log(role);
    switch (role) {
      case UserRoles.Admin:
        router.navigate(['/admin']);
        break;
      case UserRoles.Receptionist:
        router.navigate(['/reception']);
        break;
      case UserRoles.Supervisor:
        router.navigate(['/supervisor']);
        break;
      case UserRoles.Diwan:
        router.navigate(['/archive']);
        break;
      case UserRoles.Doctor:
        const specialty = localStorage.getItem("doctor_specialty");
        switch (specialty) {
          case 'عيون':
          case 'eye':
            router.navigate(['/doctor/eye']);
            break;
          case 'باطنة':
          case 'internal':
            router.navigate(['/doctor/internal']);
            break;
          case 'عظمية':
          case 'orthopedics':
            router.navigate(['/doctor/orthopedics']);
            break;
          case 'جراحة':
          case 'surgery':
            router.navigate(['/doctor/surgery']);
            break;
          default:
            router.navigate(['/doctor']); // fallback
        }
        break;
      default:
        router.navigate(['/unauthorized']);
        break;
    }

    return false; 
  }

  return true;
};
