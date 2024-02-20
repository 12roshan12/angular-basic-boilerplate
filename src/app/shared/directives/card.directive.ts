import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardFormat]'
})
export class CardFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    const cleanedValue = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const formatted = this.formatCardNumber(cleanedValue);
    input.value = formatted;
  }

  private formatCardNumber(value: string): string {
    const chunkSize = 4;
    const chunks: string[] = [];
    for (let i = 0; i < value.length; i += chunkSize) {
      chunks.push(value.substr(i, chunkSize));
    }
    return chunks.join(' ');
  }
}
