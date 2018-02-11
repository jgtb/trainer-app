import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exercicioFilter',
})
export class ExercicioPipe implements PipeTransform {
  transform(items, searchTerm, count) {
    if (!items) {
      return [];
    }

    if (searchTerm === '' || typeof searchTerm === 'undefined') {
      return items.filter((item, i) => i <= count);
    }

    return items.filter((item, i) => item.idExercicio.descricao_pt.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
}
