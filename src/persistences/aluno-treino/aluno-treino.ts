import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AlunoTreinoPersistence {

  identifier = 'id_serie';
  key = 'dataAluno';
  orderBy = ['descricao'];

  constructor(public util: Util) {}

  async store(res) {
    await this.util.setStorage(this.key, res);
  }

  async list() {
    return await this.util.getStorage(this.key);
  }

  async save(alunoId, ress) {
    await this.list().then(async res => await this.store(res.map(e => e.id_aluno === alunoId ? {...e, series: _.orderBy(_.unionBy([ress], e.series, this.identifier), this.orderBy)} : e)));
  }

  async saveAll(alunoId, ress) {
    await this.list().then(async res => await this.store(res.map(e => e.id_aluno === alunoId ? {...e, series: ress.series} : e)));
  }

  async delete(alunoId, serieId) {
    await this.list().then(async res => await this.store(res.map(e => e.id_aluno === alunoId ? {...e, series: _.reject(e.series, {[this.identifier]: serieId})} : e)));
  }

}
