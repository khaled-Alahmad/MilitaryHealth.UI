import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InputSanitizerService {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * ✅ تنظيف النص من السكربتات الضارة
   * @param input النص المراد تنظيفه
   * @returns نص آمن
   */
  sanitizeText(input: string): string {
    if (!input) return '';
    
    // ✅ إزالة علامات HTML الخطيرة
    const dangerousTags = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const cleaned = input.replace(dangerousTags, '');
    
    // ✅ إزالة event handlers
    const eventHandlers = /on\w+\s*=\s*["'][^"']*["']/gi;
    const cleaned2 = cleaned.replace(eventHandlers, '');
    
    // ✅ إزالة javascript: URLs
    const jsUrls = /javascript:/gi;
    const cleaned3 = cleaned2.replace(jsUrls, '');
    
    return cleaned3.trim();
  }

  /**
   * ✅ تنظيف HTML
   */
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.sanitize(1, html) as SafeHtml || this.sanitizer.bypassSecurityTrustHtml('');
  }

  /**
   * ✅ تنظيف URL
   */
  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.sanitize(4, url) as SafeUrl || this.sanitizer.bypassSecurityTrustUrl('');
  }

  /**
   * ✅ تنظيف Style
   */
  sanitizeStyle(style: string): SafeStyle {
    return this.sanitizer.sanitize(2, style) as SafeStyle || this.sanitizer.bypassSecurityTrustStyle('');
  }

  /**
   * ✅ تنظيف Script
   */
  sanitizeScript(script: string): SafeScript {
    return this.sanitizer.sanitize(3, script) as SafeScript || this.sanitizer.bypassSecurityTrustScript('');
  }

  /**
   * ✅ تنظيف Resource URL
   */
  sanitizeResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.sanitize(5, url) as SafeResourceUrl || this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  /**
   * ✅ التحقق من أن النص لا يحتوي على سكربتات خطيرة
   */
  isSafe(input: string): boolean {
    const dangerousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /<object/i,
      /<embed/i
    ];

    return !dangerousPatterns.some(pattern => pattern.test(input));
  }
}

