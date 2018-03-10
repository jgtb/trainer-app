import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class ConfiguracaoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async index(id) {
    const url = this.util.getUrl(`trainer/configuracao-index?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  update(data) {
    const url = this.util.getUrl(`trainer/configuracao-update`);

    return this.http.post(url, data);
  }

}
