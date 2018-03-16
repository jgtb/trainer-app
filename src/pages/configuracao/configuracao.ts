import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ConfiguracaoAjudaPage } from './configuracao-ajuda/configuracao-ajuda';

import { ConfiguracaoProvider } from '../../providers/configuracao/configuracao';

import { ConfiguracaoPersistence } from '../../persistences/configuracao/configuracao';

import { Util } from '../../util';

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

  @ViewChild('logo') el: ElementRef;

  configuracao: any = {
    info: {
      descricao: '',
      resumo: '',
      logo: '',
      intolerancia: '',
      desativar: ''
    },
    colors: [],
    ranking: {
      periodo: '',
      frequencia: '',
      peso: '',
      pg: '',
      massa: ''
    },
    notifications: {
      aniversario: '',
      treino: ''
    }
  };

  logo = '';

  showRanking = false;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public modalCtrl: ModalController,
    public configuracaoProvider: ConfiguracaoProvider,
    public configuracaoPersistence: ConfiguracaoPersistence,
    public rendered: Renderer2,
    public util: Util) {}

  async ngOnInit() {
    await this.store();
  }

  async ionViewDidEnter() {}

  async store() {
    this.configuracao = await this.configuracaoPersistence.list();
    this.showRanking = this.configuracao.ranking.periodo;
  }

  open() {
    this.el.nativeElement.click();
  }

  upload($event) {
    const reader = new FileReader();
    reader.onload = (e) => {}
  }

  setColor(color) {
    return {
      'color': color
    }
  }

  async refresh($event) {
    const usuarioId = await this.util.getStorage('usuarioId');
    await this.configuracaoProvider.index(usuarioId).then(async res => {
      await this.configuracaoPersistence.store(res);
      await this.store();
      $event.complete();
    }, err => this.util.handleServerError(err));
  }

  help() {
    const modal = this.modalCtrl.create(ConfiguracaoAjudaPage);
    modal.present();
  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
