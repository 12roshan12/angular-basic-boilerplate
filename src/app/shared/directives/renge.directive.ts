import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberRange]'
})
export class NumberRangeDirective {

  @Input() range: 'normal' | 'extended' = 'normal';
 
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const inputValue = event.key;
    const cursorPosition = this.el.nativeElement.selectionStart;

    if ((inputValue === '.' && this.el.nativeElement.value.includes('.') && cursorPosition > this.el.nativeElement.value.indexOf('.')) || 
        (this.range === 'extended' && inputValue === '.')) {
      event.preventDefault();
    } else if (inputValue === '0' && cursorPosition === this.el.nativeElement.value.indexOf('.') + 1) {
      event.preventDefault();
    }
  }

  @HostListener('keyup', ['$event']) onKeyup(event: any) {
    let inputVal = event.target.value;
    const parsedVal = parseFloat(inputVal); 

    let min = 0;
    let max = 100;

    if (this.range === 'extended') {
      max = 1000;
    }

    if (isNaN(parsedVal) || parsedVal < min || parsedVal > max) {
      event.target.value = this.clamp(parsedVal, min, max).toString();
    } else if (this.range === 'normal') {
      const decimalCount = this.getDecimalCount(parsedVal);
      if (decimalCount > 1) {
        event.target.value = parsedVal.toFixed(1);
      } else if ((decimalCount === 1 && inputVal.endsWith('.0')) || (decimalCount === 2 && inputVal.endsWith('.00'))) {
        inputVal = parsedVal.toFixed(0);
        event.target.value = inputVal;
      }
    }
  }

  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  getDecimalCount(num: number): number {
    if (Math.floor(num) === num) return 0;
    return num.toString().split('.')[1]?.length || 0;
  }

}
