import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'gregorianDate',
  standalone: true
})
export class GregorianDatePipe implements PipeTransform {
  private datePipe: DatePipe;

  constructor() {
    // استخدام locale إنجليزي لضمان عرض التقويم الميلادي
    this.datePipe = new DatePipe('en-US');
  }

  transform(value: Date | string | null | undefined, format: string = 'yyyy/MM/dd'): string {
    if (!value) {
      return 'غير محدد';
    }

    try {
      const date = typeof value === 'string' ? new Date(value) : value;
      
      if (isNaN(date.getTime())) {
        return 'غير محدد';
      }

      // استخدام DatePipe مع locale إنجليزي لضمان التقويم الميلادي
      return this.datePipe.transform(date, format) || 'غير محدد';
    } catch {
      return 'غير محدد';
    }
  }
}

