import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avaliacao',
})
export class AvaliacaoPipe implements PipeTransform {
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
