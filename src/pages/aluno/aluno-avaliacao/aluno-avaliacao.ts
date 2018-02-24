import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoAvaliacaoFormPage } from './aluno-avaliacao-form/aluno-avaliacao-form';
import { AlunoAvaliacaoViewPage } from './aluno-avaliacao-view/aluno-avaliacao-view';

import { MenuComponent } from '../../../components/menu/menu';

import { Util } from '../../../util';

@Component({
  selector: 'page-aluno-avaliacao',
  templateUrl: 'aluno-avaliacao.html',
})
export class AlunoAvaliacaoPage {

  aluno: any = {};

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AlunoAvaliacaoViewPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: AlunoAvaliacaoFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: 'delete', class: 'odd-last-menu-item'}
  ];

  emptyMessage = 'Nenhum Avaliação encontrado...';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public util: Util) {
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, center: item.descricao, end: item.data};
  }

  open(item) {
    const modal = this.modalCtrl.create(MenuComponent, {aluno: this.aluno, item: this.assign(item), menu: this.menu});
    modal.present();
    modal.onDidDismiss(res => {
      if (typeof res != 'undefined') {
        if (res.component) {
          this.navCtrl.push(res.component, {aluno: res.aluno, item: res.item}, {animate: false});
          return
        }
        this.methods(res.method, res.item, res.aluno);
      }
    });
  }

  methods(method, item, aluno) {
    switch(method) {
      case 'delete':
        this.delete(item, aluno);
      break;
    }
  }

  create() {
    this.navCtrl.push(AlunoAvaliacaoFormPage, {aluno: this.aluno}, {animate: false});
  }

  delete(item, aluno) {
    const title = 'Excluír';
    const message = `Deseja excluír a Avaliação: ${item.descricao}`;
    const buttons = [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: () => {
          //this.handlerDelete(item);
        }
      }
    ];

    this.util.showAlert(title, message, null, buttons);
  }

}
