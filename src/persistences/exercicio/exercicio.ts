import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class ExercicioPersistence {

  identifier = 'id_exercicio';
  key = 'dataExercicio';
  orderBy = ['descricao_pt'];

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
