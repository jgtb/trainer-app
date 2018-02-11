import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class RankingProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  index(id) {
    const url = this.util.getUrl(`trainer/ranking-index?id=${id}`);
    return this.http.get(url);
  }

}
