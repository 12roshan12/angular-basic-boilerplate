import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortJobsByDate'
})
export class SortJobsByDatePipe implements PipeTransform {
  transform(jobs: any[]): any[] {
    return jobs.sort((a, b) => {
      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    });
  }
}