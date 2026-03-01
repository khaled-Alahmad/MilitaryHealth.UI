import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.inspector';
import { MessageService } from 'primeng/api';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { getProjectThemeConfig } from './shared/theem';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: getProjectThemeConfig(),
    }),
    provideAnimations(),
    provideToastr({
      timeOut: 2500,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      tapToDismiss: true,
    }),
    MessageService,
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
};
