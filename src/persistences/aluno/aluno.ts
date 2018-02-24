import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AlunoPersistence {

  identifier = 'id_aluno';
  key = 'dataAluno';
  orderBy = ['nome'];

  constructor(public util: Util) {}

  store(res) {
    this.util.setStorage(this.key, res);
  }

  list() {
    return this.util.getStorage(this.key);
  }

  save(res) {
    this.store(_.orderBy(_.unionBy([res], this.list(), this.identifier), this.orderBy));
  }

  delete(id) {
    this.store(_.reject(this.list(), {[this.identifier]: id}));
  }

}
