import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AlunoTreinoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

    indexAll(id) {
      const url = this.util.getUrl(`trainer/aluno-treino-index-all?id=${id}`);
      return this.http.get(url);
    }

  index(id) {
    const url = this.util.getUrl(`trainer/aluno-treino-index?id=${id}`);
    return this.http.get(url);
  }

  view(id) {
    const url = this.util.getUrl(`trainer/aluno-treino-view?id=${id}`);
    return this.http.get(url);
  }

  create(data) {
    const url = this.util.getUrl(`trainer/aluno-treino-create`);
    return this.http.post(url, data);
  }

  update(data) {
    const url = this.util.getUrl(`trainer/aluno-treino-update`);
    return this.http.post(url, data);
  }

  delete(id) {
    const url = this.util.getUrl(`trainer/aluno-treino-delete?id=${id}`);
    return this.http.get(url);
  }

}
