import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slides-treino-form',
  templateUrl: 'slides-treino-form.html'
})
export class SlidesTreinoFormComponent {

  @Input('items') items = [];
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  emit(item) {
    this.click.emit(item);
  }

}
