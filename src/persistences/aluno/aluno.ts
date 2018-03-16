import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AlunoPersistence {

  items: any = [];

  identifier = 'id_aluno';
  key = 'dataAluno';
  orderBy = ['nome'];

  constructor(public util: Util) {}

  async store(res) {
    await this.util.setStorage(this.key, res);
  }

  async list() {
    return await this.util.getStorage(this.key);
  }

  async save(res) {
    await this.store(_.orderBy(_.unionBy([res], await this.list(), this.identifier), this.orderBy));
  }

  async delete(id) {
    await this.store(_.reject(await this.list(), {[this.identifier]: id}));
  }

}
