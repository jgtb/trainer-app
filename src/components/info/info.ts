import { Component, Input } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: 'info.html'
})
export class InfoComponent {

  @Input('aluno') aluno: any = {};
  @Input('index') index: number = 0;

  constructor() {}

  class() {
    return this.index % 2 == 0 ? 'even' : 'odd';
  }

}
