import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class ConfiguracaoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  index(id) {
    const url = this.util.getUrl(`trainer/configuracao-index?id=${id}`);
    return this.http.get(url);
  }

  update(data) {
    const url = this.util.getUrl(`trainer/configuracao-update`);
    return this.http.post(url, data);
  }

}
