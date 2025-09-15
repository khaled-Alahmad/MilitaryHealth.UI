import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../features/auth/services/auth.service';
import { UserRoles } from '../models/enums/user-roles.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const roles = route.data['roles'] as UserRoles[] || [];
  const messageError = route.data['messageError'] || 'تم رفض الوصول';

  if (!auth.isAuthenticated()) {
    // حفظ URL الحالي للعودة إليه بعد تسجيل الدخول
    const returnUrl = state.url;
    return router.createUrlTree(['/login'], { queryParams: { returnUrl } });
  }

  if (roles.length > 0 && !auth.isAuthorizated(roles)) {
    return router.createUrlTree(['/unauthorized']);
  }

  return true;
};
