import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eventTypIcon' })
export class EventTypIcon implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case "sport":
        return 'pool';
      case "game":
        return 'casino';
      case "goout":
        return 'free_breakfast';
      case "shopping":
        return 'store';
      case "cooking":
        return 'kitchen';
      case "movie":
        return 'theaters';
      case "other":
        return 'input';
      default:
        return 'pool';
    }
  }
}