import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AlunoAvaliacaoProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  index(id) {
    const url = this.util.getUrl(`trainer/aluno-avaliacao-index?id=${id}`);
    
    return this.http.get(url);
  }

  view(id) {
    const url = this.util.getUrl(`trainer/aluno-avaliacao-view?id=${id}`);
    
    return this.http.get(url);
  }

  create(data) {
    const url = this.util.getUrl(`trainer/aluno-avaliacao-create`);
    
    return this.http.post(url, data);
  }

  update(data) {
    const url = this.util.getUrl(`trainer/aluno-avaliacao-update`);
    
    return this.http.post(url, data);
  }

  delete(id) {
    const url = this.util.getUrl(`trainer/aluno-avaliacao-delete?id=${id}`);
    
    return this.http.get(url);
  }

}
