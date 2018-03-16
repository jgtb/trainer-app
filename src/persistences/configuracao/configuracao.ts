import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class ConfiguracaoPersistence {

  key = 'dataConfiguracao';

  constructor(public util: Util) {}

  async store(res) {
    await this.util.setStorage(this.key, res);
  }

  async list() {
    return await this.util.getStorage(this.key);
  }

}
