import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let msg = 'حدث خطأ غير متوقع';

        if (err.status === 0) {
            msg = 'لا يوجد اتصال بالسيرفر';
        } else if (err.status === 401) {
            msg = 'انتهت صلاحية الجلسة، يرجى تسجيل الدخول مجددًا';
        } else if (err.status === 403) {
            msg = 'لا تملك صلاحية للوصول إلى هذه العملية';
        } else {
          // نعطي الأولوية للـ detail
          if (err.error?.errors?.detail?.length) {
            msg = err.error.errors.detail[0];
          }
          // إذا في message بس مو مفيد نتجاهله
          else if (err.error?.message && err.error.message !== 'Unhandled error') {
            msg = err.error.message;
          }
        }

        this.toastr.error(msg);
        return throwError(() => err);
      })
    );
  }
}
