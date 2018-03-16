import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class StaticProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async getAllTipoRepeticao() {
    const url = 'assets/data/tipo-repeticao.json';

    return await this.http.get<any>(url).toPromise();
  }

  async getAllTipoPergunta() {
    const url = 'assets/data/tipo-pergunta.json';

    return await this.http.get<any>(url).toPromise();
  }

  async getAllTipoExercicio() {
    const url = 'assets/data/tipo-exercicio.json';

    return await this.http.get<any>(url).toPromise();
  }

  async getAllTipoEquipamento() {
    const url = 'assets/data/tipo-equipamento.json';

    return await this.http.get<any>(url).toPromise();
  }

  async getAllClassificacaoExercicio() {
    const url = 'assets/data/classificacao-exercicio.json';

    return await this.http.get<any>(url).toPromise();
  }

  async getAllGrupo() {
    const url = 'assets/data/grupo.json';

    return await this.http.get<any>(url).toPromise();
  }

  async getAllRankingPeriodo() {
    const url = 'assets/data/ranking-periodo.json';

    return await this.http.get<any>(url).toPromise();
  }

}
