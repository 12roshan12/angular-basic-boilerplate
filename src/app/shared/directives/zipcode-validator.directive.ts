import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[hbFilterZipcode]',
})
export class ZipCodeValidatorDirective {
  @Input() zipCodeValidator: boolean = false;
  private hyphenEntered = false;
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    if (!this.zipCodeValidator) {
      return;
    }
    // Validating the input value
    if (value === undefined) return;

    // Allow only numbers and at most one hyphen
    const transformedInput = value.replace(/[^\d-]/g, ''); // Allow only digits and hyphen
    const hyphenIndex = transformedInput.indexOf('-');

    if (hyphenIndex !== -1) {
      // Hyphen is present, allow only if it's the last character
      const afterHyphen = transformedInput.substring(hyphenIndex + 1);

      if (afterHyphen.includes('-')) {
        // If more than one hyphen, remove the last character (the entered hyphen)
        this.ngControl.control?.setValue(transformedInput.slice(0, -1));
      } else {
        // Only one hyphen is allowed, keep the input as is
        this.ngControl.control?.setValue(transformedInput);
      }
    } else {
      this.ngControl.control?.setValue(transformedInput);
    }
  }
}
