import { Component, Input } from '@angular/core';

@Component({
  selector: 'slides-treino-form',
  templateUrl: 'slides-treino-form.html'
})
export class SlidesTreinoFormComponent {

  @Input('items') items = [];

  constructor() {}

}
