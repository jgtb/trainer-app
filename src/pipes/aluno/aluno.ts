import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alunoFilter',
})
export class AlunoPipe implements PipeTransform {
  transform(items, query) {
    if (!items)
      return [];

    if (query == null)
      return items;

    return items.filter(item =>
        item.nome.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
}
