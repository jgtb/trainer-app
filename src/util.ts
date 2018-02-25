import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class Util {

  baseUrl = 'http://localhost/personal/web/';
  //baseUrl = 'http://homolog.nexur.com.br/web/trainer/';
  //baseUrl = 'http://fit.nexur.com.br/trainer/';

  logo: any;

  loading: any;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {}

  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setLogged() {
    this.setStorage('isLogged', 'true');
  }

  setLogout() {
    this.setStorage('isLogged', 'false');
  }

  isLogged() {
    if (this.getStorage('isLogged') == 'true') {
      return true;
    }

    return false;
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'circles',
    });
    this.loading.present();
  }

  endLoading() {
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

  handlerServerError(err) {
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

  getUrl(url) {
    return `${this.baseUrl}${url}`;
  }

  getId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
  }

}
