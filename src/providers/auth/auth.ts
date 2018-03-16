import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  async login(data) {
    const url = this.util.getUrl(`trainer/auth-login`);

    return await this.http.post(url, data).toPromise();
  }

  async forgotPassword(login) {
    const url = this.util.getUrl(`trainer/auth-forgot-password?login=${login}`);

    return await this.http.get(url).toPromise();
  }

  appId() {}

}
