import { Injectable } from '@angular/core';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class DashboardPersistence {

  constructor(public util: Util) {}

  async count(key) {
    const items = await this.util.getStorage(key);
    return items.length;
  }

}
