import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConfiguracaoProvider } from '../../providers/configuracao/configuracao';

import { Util } from '../../util';

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

  @ViewChild('logo') el: ElementRef;

  configuracao: any = [];
  logo = '';

  showRanking = false;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public configuracaoProvider: ConfiguracaoProvider,
    public rendered: Renderer2,
    public util: Util) {
      this.init();
    }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  init() {
    this.configuracao = this.util.getStorage('dataConfiguracao');
    this.showRanking = this.configuracao.ranking.periodo;
  }

  open() {
    this.el.nativeElement.click();
  }

  upload($event) {
    const reader = new FileReader();

    reader.onload = (e) => {

    }
  }

  setColor(color) {
    return {
      'color': color
    }
  }

  refresh($event) {
    this.handlerRefresh();
    setTimeout(() => {
      $event.complete();
    }, 1000);
  }

  handlerRefresh() {
    const usuarioId = this.util.getStorage('usuarioId');

    this.configuracaoProvider.index(usuarioId).subscribe(res => {
      this.util.setStorage('dataConfiguracao', res);
      this.init();
    }, err => this.util.handlerServerError(err));
  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
