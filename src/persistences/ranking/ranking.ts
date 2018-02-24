import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class RankingPersistence {

  key = 'dataRanking';

  constructor(public util: Util) {}

  store(res) {
    this.util.setStorage(this.key, res);
  }

  list() {
    return this.util.getStorage(this.key);
  }

}
