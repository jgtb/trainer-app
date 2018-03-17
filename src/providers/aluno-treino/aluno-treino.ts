import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AlunoTreinoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async index(id) {
    const url = this.util.getUrl(`trainer/aluno-treino-index?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  async view(id) {
    const url = this.util.getUrl(`trainer/aluno-treino-view?id=${id}`);

    return await this.http.get(url).toPromise();
  }

  async create(data) {
    const url = this.util.getUrl(`trainer/aluno-treino-create`);

    return await this.http.post(url, data).toPromise();
  }

  async update(data) {
    const url = this.util.getUrl(`trainer/aluno-treino-update`);

    return await this.http.post(url, data).toPromise();
  }

  async delete(id) {
    const url = this.util.getUrl(`trainer/aluno-treino-delete?id=${id}`);

    return await this.http.get(url).toPromise();
  }

}
