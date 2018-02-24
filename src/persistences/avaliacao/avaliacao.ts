import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AvaliacaoPersistence {

  identifier = 'id_avaliacao';
  key = 'dataAvaliacao';
  orderBy = ['descricao'];

  constructor(public util: Util) {}

  store(res) {
    this.util.setStorage(this.key, res);
  }

  list() {
    return this.util.getStorage(this.key);
  }

  save(res) {

  }

  delete(id) {
    
  }

}
