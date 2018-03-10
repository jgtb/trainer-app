import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AlunoTreinoPersistence {

  identifier = 'id_serie';
  key = 'dataAluno';
  orderBy = ['descricao'];

  constructor(public util: Util) {}

  store(res) {
    this.util.setStorage(this.key, res);
  }

  list() {
    return this.util.getStorage(this.key);
  }

  save(alunoId, res) {
    this.store(this.list().map(e => e.id_aluno === alunoId ? {...e, series: _.orderBy(_.unionBy([res], e.series, this.identifier), this.orderBy)} : e));
  }

  saveAll(alunoId, res) {
    this.store(this.list().map(e => e.id_aluno === alunoId ? {...e, series: res.series} : e));
  }

  delete(alunoId, serieId) {
    this.store(this.list().map(e => e.id_aluno === alunoId ? {...e, series: _.reject(e.series, {[this.identifier]: serieId})} : e));
  }

}
