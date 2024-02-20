// custom-date.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): Date | null {
    const parts = value.split('-');
    const day = +parts[0];
    const month = +parts[1] - 1;
    const year = +parts[2];

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null; // Return null for invalid dates
    }

    return new Date(year, month, day);
  }
}
