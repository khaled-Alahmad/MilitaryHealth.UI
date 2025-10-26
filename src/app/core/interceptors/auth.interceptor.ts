import { HttpInterceptorFn } from '@angular/common/http';
import { throwError, switchMap, catchError, timeout } from 'rxjs';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');
  const http = inject(HttpClient);
  let isRefreshing = false;

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    timeout(30000), // 30 second timeout
    catchError(err => {
      // Handle 401 Unauthorized
      if (err.status === 401 && !isRefreshing) {
        isRefreshing = true;
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (!refreshToken) {
          isRefreshing = false;
          localStorage.clear();
          window.location.href = '/login';
          return throwError(() => err);
        }

        return http.post<{ accessToken: string }>('api/auth/refresh', { refreshToken }).pipe(
          timeout(10000), // 10 second timeout for refresh
          switchMap(res => {
            localStorage.setItem('access_token', res.accessToken);
            const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${res.accessToken}` } });
            isRefreshing = false;
            return next(retryReq);
          }),
          catchError(() => {
            isRefreshing = false;
            localStorage.clear();
            window.location.href = '/login';
            return throwError(() => err);
          })
        );
      }
      
      // If already refreshing, just return error
      if (isRefreshing) {
        return throwError(() => err);
      }
      
      return throwError(() => err);
    })
  );
};
