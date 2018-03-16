import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Injectable()
export class Util {

  baseUrl = 'http://localhost/nexur-api/web/';
  //baseUrl = 'http://homolog.nexur.com.br/web/trainer/';
  //baseUrl = 'http://fit.nexur.com.br/trainer/';

  logo: any;

  loading: any;
  loadingRunning: boolean;

  constructor(
    public storage: Storage,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {}

  async setStorage(key, value) {
    await this.storage.set(key, JSON.stringify(value));
  }

  async getStorage(key) {
    return JSON.parse(await this.storage.get(key));
  }

  async setLogged() {
    await this.setStorage('isLogged', 'true');
  }

  async setLogout() {
    await this.storage.clear();
  }

  async isLogged() {
    return await this.getStorage('isLogged');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loadingRunning = true;
    this.loading.present();
  }

  endLoading() {
    this.loadingRunning = false;
    this.loading.dismiss();
  }

  showAlert(title, message, inputs = null, buttons = null) {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      inputs: inputs,
      buttons: buttons,
    });

    alert.present();
  }

  unserialize(data) {
    const unserialize = data.split(';')
      .filter((e, i) => !(i%2 === 0))
      .map(e => e.split(':').reverse()[0].replace(/"/g, ""));

    return unserialize;
  }

  getUrl(url) {
    return `${this.baseUrl}${url}`;
  }

  getId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
  }

  handleServerError(err) {
    const title = 'Atenção';
    const message = 'Ocorreu um erro no servidor ao tratar da sua solicitação';
    const buttons = [
      {
        text: 'Tente novamente mais tarde',
      }
    ];

    if (this.loading) {
      this.endLoading();
    }

    this.showAlert(title, message, null, buttons);
  }

}
