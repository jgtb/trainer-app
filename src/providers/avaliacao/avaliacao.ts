import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AvaliacaoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async index(id) {
    const url = this.util.getUrl(`trainer/avaliacao-index?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  view(id) {
    const url = this.util.getUrl(`trainer/avaliacao-view?id=${id}`);

    return this.http.get(url);
  }

  create(data) {
    const url = this.util.getUrl(`trainer/avaliacao-create`);

    return this.http.post(url, data);
  }

  update(data) {
    const url = this.util.getUrl(`trainer/avaliacao-update`);

    return this.http.post(url, data);
  }

  delete(id) {
    const url = this.util.getUrl(`trainer/avaliacao-delete?id=${id}`);

    return this.http.get(url);
  }

}
