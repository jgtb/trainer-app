import { Component, Input } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: 'info.html'
})
export class InfoComponent {

  @Input('aluno') aluno: any = {};
  @Input('index') index = 0;

  constructor() {}

  src() {
    return this.aluno.idUsuario.link_foto ? this.aluno.idUsuario.link_foto : 'assets/img/user/none.svg'
  }

  class() {
    return this.index % 2 === 0 ? 'even' : 'odd';
  }

}
