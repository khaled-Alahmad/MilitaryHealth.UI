import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth-guard';
import { UserRoles } from '../../core/models/enums/user-roles.enum';

export const RECEPTION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/supervisor/supervisor').then(m => m.Supervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./components/applicants-list-supervisor/applicants-list-supervisor').then(m => m.ApplicantsListSupervisor),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  },
  {
    path: 'export',
    loadComponent: () =>
      import('./components/recruitment-export/recruitment-export').then(m => m.RecruitmentExportComponent),
    canActivate: [authGuard],
    data: { roles: [UserRoles.Supervisor] }
  }
];
