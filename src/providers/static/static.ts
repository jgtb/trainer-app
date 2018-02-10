import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class StaticProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  getAllTipoRepeticao() {
    const url = 'assets/data/tipo-repeticao.json';

    return this.http.get(url);
  }

  getAllTipoPergunta() {
    const url = 'assets/data/tipo-pergunta.json';

    return this.http.get(url);
  }

  getAllTipoExercicio() {
    const url = 'assets/data/tipo-exercico.json';

    return this.http.get(url);
  }

  getAllTipoEquipamento() {
    const url = 'assets/data/tipo-equipamento.json';

    return this.http.get(url);
  }

  getAllGrupo() {
    const url = 'assets/data/grupo.json';

    return this.http.get(url);
  }

}