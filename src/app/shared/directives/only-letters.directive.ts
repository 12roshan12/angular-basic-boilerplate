import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[hbOnlyLetters]'
})
export class OnlyLettersDirective {
  @Input() hbOnlyLetters?: boolean = false;

  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    if (!this.hbOnlyLetters) {
      return;
    }
    const inputValue = this.ngControl.value;
    const sanitizedValue = inputValue.replace(/[^a-zA-Z]/g, ''); // Allow only letters

    if (inputValue !== sanitizedValue) {
      this.ngControl.control?.setValue(sanitizedValue);
    }
  }

}
