import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AlunoMensagemProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async create(data) {
    const url = this.util.getUrl(`trainer/aluno-mensagem-create`);

    return await this.http.post(url, data).toPromise();
  }

}
