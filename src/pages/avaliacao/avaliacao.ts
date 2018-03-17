import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AvaliacaoFormPage } from './avaliacao-form/avaliacao-form';
import { AvaliacaoViewPage } from './avaliacao-view/avaliacao-view';

import { AvaliacaoPersistence } from '../../persistences/avaliacao/avaliacao';

import { MenuComponent } from '../../components/menu/menu';

import { Util } from '../../util';

@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AvaliacaoViewPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: AvaliacaoFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  avaliacoes: any = [];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public modalCtrl: ModalController,
    public avaliacaoPersistence: AvaliacaoPersistence,
    public util: Util) {}

  async ionViewDidLoad() {
    await this.load();
  }

  async ionViewDidEnter() {
    if (this.navParams.get('shouldUpdate')) {
      await this.store();
    }
  }

  async load() {
    await this.store();
  }

  async store() {
    this.avaliacoes = await this.avaliacaoPersistence.list();
  }

  assign(item) {
    return {...item, center: item.descricao};
  }

  open(item) {
    const modal = this.modalCtrl.create(MenuComponent, {item: this.assign(item), menu: this.menu});
    modal.present();
    modal.onDidDismiss(res => {
      if (typeof res != 'undefined') {
        if (res.component) {
          this.navCtrl.push(res.component, {aluno: res.aluno, item: res.item}, {animate: false});
          return
        }
        res.method(res.item, res.aluno);
      }
    });
  }

  create() {
  	this.navCtrl.push(AvaliacaoFormPage, {}, {animate: false});
  }

  delete(item) {
    console.log('Excluír', item);
  }

  refresh($event) {

  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
