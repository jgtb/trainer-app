import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Util } from '../../util';

@Component({
  selector: 'slides-treino-form',
  templateUrl: 'slides-treino-form.html'
})
export class SlidesTreinoFormComponent {

  @Input('items') items = [];
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor(public util: Util) {}

  emit(item) {
    this.click.emit(item);
  }

  url(item) {
    return `http://fit.nexur.com.br/exercicios/${item.id_exercicio}-0.gif`;
  }

}
