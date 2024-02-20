import { ChangeDetectorRef, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateInputFormat]'
})
export class DateInputFormatDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    let input = event.target.value.toString();

    // Remove any non-digit characters
    input = input.replace(/\D/g, '');

    // Ensure the month is not greater than 12
    if (input.length > 2) {
      const month = parseInt(input.substring(0, 2), 10);
      if (month > 12) {
        input = '12' + input.substring(2);
      }
    }

    // Insert "/" between month and year if applicable
    if (input.length > 2) {
      input = input.substring(0, 2) + '/' + input.substring(2);
    }

    // Limit the year to two digits
    if (input.length > 5) {
      input = input.substring(0, 5); // Limiting to MM/YY format
    }

    // Get the current year
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year

    // Set the year to current year if less than or equal to the current year
    const inputYear = parseInt(input.substring(3), 10);
    if (inputYear <= currentYear) {
      input = input.substring(0, 3) + currentYear.toString().padStart(2, '0');
    }

    // Update the input value
    this.renderer.setProperty(this.el.nativeElement, 'value', input);

    // Trigger change detection
    this.cdr.markForCheck();
  }
}
