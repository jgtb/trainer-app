import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alunoFilter',
})
export class AlunoPipe implements PipeTransform {
  transform(items, searchTerm) {
    if (!items)
      return [];

    if (searchTerm == null)
      return items;

    return items.filter(item =>
        item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }
}
