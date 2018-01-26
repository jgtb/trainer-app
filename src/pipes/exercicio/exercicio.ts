import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exercicioFilter',
})
export class ExercicioPipe implements PipeTransform {
  transform(items, query) {
    if (!items)
      return [];

    if (query == null)
      return items;

    return items.filter(item =>
        item.description.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
}
