import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToText'
})
export class DateToTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const now = new Date();
    const diff = Math.floor((now.getTime() - new Date(value).getTime()) / 1000); // Difference in seconds

    const intervals = {
      year: Math.floor(diff / 31536000),
      month: Math.floor(diff / 2592000),
      day: Math.floor(diff / 86400),
      hour: Math.floor(diff / 3600),
      minute: Math.floor(diff / 60)
    };

    if (intervals.year > 1) {
      return intervals.year + ' years ago';
    } else if (intervals.month > 1) {
      return intervals.month + ' months ago';
    } else if (intervals.day > 1) {
      return intervals.day + ' days ago';
    } else if (intervals.hour > 1) {
      return intervals.hour + ' hours ago';
    } else if (intervals.minute > 1) {
      return intervals.minute + ' minutes ago';
    } else {
      return 'Just now';
    }
  }
}
