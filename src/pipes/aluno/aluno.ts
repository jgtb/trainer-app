import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alunoFilter',
})
export class AlunoPipe implements PipeTransform {
  transform(items, searchTerm, count) {
    if (!items) {
      return [];
    }

    if (searchTerm === '' || typeof searchTerm === 'undefined') {
      return items.filter((item, i) => i <= count);
    }

    return items.filter(item => item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
}
