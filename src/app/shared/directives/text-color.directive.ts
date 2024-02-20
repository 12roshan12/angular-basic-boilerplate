// text-color.directive.ts

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input('appTextColor') status!: string; // Input property to receive the status

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const color = this.getColorBasedOnStatus();
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  private getColorBasedOnStatus(): string {
    switch (this.status) {
      case 'active':
        return 'green';
      case 'closed':
        return 'red';
      case 'cancelled':
        return 'orange';
      case 'onhold':
        return 'blue';
      default:
        return 'black'; // Default color if status doesn't match any condition
    }
  }
}
