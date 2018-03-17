import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AvaliacaoPersistence {

  identifier = 'id_avaliacao';
  key = 'dataAvaliacao';
  orderBy = ['descricao'];

  constructor(public util: Util) {}

  async store(res) {
    await this.util.setStorage(this.key, res);
  }

  async list() {
    return await this.util.getStorage(this.key);
  }

  save(res) {

  }

  delete(id) {

  }

}
