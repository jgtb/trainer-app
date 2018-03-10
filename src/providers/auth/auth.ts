import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Util } from '../../util';

@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient,
    public util: Util) {}

  login(data) {
    const url = this.util.getUrl(`trainer/auth-login`);

    return this.http.post(url, data);
  }

  forgotPassword(login) {
    const url = this.util.getUrl(`trainer/auth-forgot-password?login=${login}`);

    return this.http.get(url);
  }

  appId() {}

}
