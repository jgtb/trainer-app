import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoFormPage } from './aluno-form/aluno-form';
import { AlunoMensagemPage } from './aluno-mensagem/aluno-mensagem';
import { AlunoTreinoPage } from './aluno-treino/aluno-treino';
import { AlunoAvaliacaoPage } from './aluno-avaliacao/aluno-avaliacao';
import { AlunoCalendarioPage } from './aluno-calendario/aluno-calendario';
import { AlunoGraficoPage } from './aluno-grafico/aluno-grafico';

import { MenuComponent } from '../../components/menu/menu';

import { Util } from '../../util';

@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html'
})
export class AlunoPage {

  menu = [
    {title: 'Atualizar', icon: 'create', component: AlunoFormPage, class: ''},
    {title: 'Treinos', icon: 'body', component: AlunoTreinoPage, class: ''},
    {title: 'Avaliações', icon: 'document', component: AlunoAvaliacaoPage, class: ''},
    {title: 'Calendário', icon: 'calendar', component: AlunoCalendarioPage, class: ''},
    {title: 'Gráficos', icon: 'md-podium', component: AlunoGraficoPage, class: ''},
    {title: 'Redefinir', icon: 'lock', method: 'changePassowrd', class: ''},
    {title: 'Excluír', icon: 'trash', method: 'delete', class: 'odd-last-menu-item'}
  ];

  alunos: any = [];

  searchTerm = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public util: Util) {
      this.alunos = this.util.getStorage('dataAluno');
    }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, start: item.idUsuario.link_foto, center: item.nome};
  }

  open(item) {
    const modal = this.modalCtrl.create(MenuComponent, {aluno: item, item: this.assign(item), menu: this.menu, class: 'menu-lg'});
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

  create() {
    this.navCtrl.push(AlunoFormPage, {}, {animate: false});
  }

  createMensagem() {
    this.navCtrl.push(AlunoMensagemPage, {}, {animate: false});
  }

  methods(method, {}, aluno) {
    switch(method) {
      case 'changePassowrd':
        this.changePassowrd({}, aluno);
      break;
      case 'delete':
        this.delete({}, aluno);
      break;
    }
  }

  changePassowrd({}, aluno) {
    const title = 'Redefinir';
    const message = `Deseja redefinir a senha de ${aluno.nome}`;
    const buttons = [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.handlerChangePassword();
        }
      }
    ];
    this.util.showAlert(title, message, null, buttons);
  }

  handlerChangePassword() {

  }

  delete({}, aluno) {
    const title = 'Excluír';
    const message = `Deseja excluír o Aluno: ${aluno.nome}`;
    const buttons = [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.handlerDelete();
        }
      }
    ];
    this.util.showAlert(title, message, null, buttons);
  }

  handlerDelete() {

  }

  search($event) {
    this.searchTerm = $event.target.value;
  }

  refresh($event) {

  }

  infinite($event) {

  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
