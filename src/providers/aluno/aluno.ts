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

  async view(id) {
    const url = this.util.getUrl(`trainer/aluno-view?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  async create(data) {
    const url = this.util.getUrl(`trainer/aluno-create`);

    return await this.http.post(url, data).toPromise();
  }

  async update(data) {
    const url = this.util.getUrl(`trainer/aluno-update`);

    return await this.http.post(url, data).toPromise();
  }

  async checkLogin(id, login) {
    const url = this.util.getUrl(`trainer/aluno-check-login?id=${id}&login=${login}`);

    return await this.http.get(url).toPromise();
  }

  async delete(id) {
    const url = this.util.getUrl(`trainer/aluno-delete?id=${id}`);

    return await this.http.get(url).toPromise();
  }

}
