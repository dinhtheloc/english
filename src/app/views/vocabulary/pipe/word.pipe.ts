import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(english: string, key_word: string): any {
    const chip = `<span style="
    background-color: #e91e63;
    color: #fff;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    padding: 7px 12px;
    border-radius: 16px;
    align-items: center;
    cursor: default;
    min-height: 32px;
    height: 1px;">${key_word}<span>`
    const result = english.replace(key_word, chip);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

}
