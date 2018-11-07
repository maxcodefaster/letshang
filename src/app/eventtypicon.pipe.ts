import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eventTypIcon' })
export class EventTypIcon implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case "Sport":
        return 'pool';
      case "Game":
        return 'casino';
      case "Going out":
        return 'free_breakfast';
      case "Shopping":
        return 'store';
      case "Cooking":
        return 'kitchen';
      case "Movie":
        return 'theaters';
      case "other":
        return 'input';
      default:
        return 'pool';
    }
  }
}