import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AlunoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async index(id) {
    const url = this.util.getUrl(`trainer/aluno-index?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  view(id) {
    const url = this.util.getUrl(`trainer/aluno-view?id=${id}`);

    return this.http.get(url);
  }

  create(data) {
    const url = this.util.getUrl(`trainer/aluno-create`);

    return this.http.post(url, data);
  }

  update(data) {
    const url = this.util.getUrl(`trainer/aluno-update`);

    return this.http.post(url, data);
  }

  checkLogin(id, login) {
    const url = this.util.getUrl(`trainer/aluno-check-login?id=${id}&login=${login}`);

    return this.http.get(url);
  }

  delete(id) {
    const url = this.util.getUrl(`trainer/aluno-delete?id=${id}`);

    return this.http.get(url);
  }

}
