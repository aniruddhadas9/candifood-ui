import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeHtml} from '@angular/platform-browser/src/security/dom_sanitization_service';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(value): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}
