import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[hbFilterNumber]'
})
export class FilterNumberDirective {

  @Input() onlyNumbers?:boolean= false;
  constructor(private ngControl: NgControl) {

   }

  @HostListener('input', ['$event']) onInput(event: Event): void {
    if (this.onlyNumbers) {
      const inputValue = this.ngControl.value;
      const sanitizedValue = inputValue.replace(/\D/g, ''); // Allow only whole numeric characters
      this.ngControl.control?.setValue(sanitizedValue);
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent): void {
    if (this.onlyNumbers && this.isNonNumericKey(event)) {
      event.preventDefault();
    }
  }

  private isNonNumericKey(event: KeyboardEvent): boolean {
    return (
      event.key !== 'Delete' &&
      event.key !== 'Backspace' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight' &&
      event.key !== 'Tab' &&
      event.key !== 'Home' &&
      event.key !== 'End' &&
      isNaN(Number(event.key))
    );
  }
}

