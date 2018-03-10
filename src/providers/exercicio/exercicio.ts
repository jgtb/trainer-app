import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class ExercicioProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async index(id) {
    const url = this.util.getUrl(`trainer/exercicio-index?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  view(id) {
    const url = this.util.getUrl(`trainer/exercicio-view?id=${id}`);

    return this.http.get(url);
  }

  create(data) {
    const url = this.util.getUrl(`trainer/exercicio-create`);

    return this.http.post(url, data);
  }

  update(data) {
    const url = this.util.getUrl(`trainer/exercicio-update`);

    return this.http.post(url, data);
  }

  delete(id) {
    const url = this.util.getUrl(`trainer/exercicio-delete?id=${id}`);

    return this.http.get(url);
  }

}
