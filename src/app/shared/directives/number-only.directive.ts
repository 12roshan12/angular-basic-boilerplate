import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const initialValue: string = this.el.nativeElement.value;
    const sanitizedValue: string = this.getSanitizedValue(initialValue);
    if (initialValue !== sanitizedValue) {
      this.el.nativeElement.value = sanitizedValue;
      event.stopPropagation();
    }
  }

  private getSanitizedValue(inputValue: string): string {
    // Remove non-numeric characters except dot or minus sign
    return inputValue.replace(/[^0-9.-]/g, '');
  }
}
