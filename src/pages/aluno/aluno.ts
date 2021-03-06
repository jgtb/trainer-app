import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoFormPage } from './aluno-form/aluno-form';
import { AlunoMensagemPage } from './aluno-mensagem/aluno-mensagem';
import { AlunoTreinoPage } from './aluno-treino/aluno-treino';
import { AlunoAvaliacaoPage } from './aluno-avaliacao/aluno-avaliacao';
import { AlunoCalendarioPage } from './aluno-calendario/aluno-calendario';
import { AlunoGraficoPage } from './aluno-grafico/aluno-grafico';

import { AuthProvider } from '../../providers/auth/auth';
import { AlunoProvider } from '../../providers/aluno/aluno';

import { AlunoPersistence } from '../../persistences/aluno/aluno';

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
    {title: 'Redefinir', icon: 'lock', method: 'changePassword', class: ''},
    {title: 'Excluír', icon: 'trash', method: 'delete', class: 'odd-last-menu-item'}
  ];

  alunos: any = [];

  searchTerm = '';
  emptyMessage = 'Nenhum Aluno encontrado...';

  count = 10;
  increase = 10;

  messages = {
    changePassword: 'E-mail enviado com sucesso',
    delete: 'Aluno excluído com sucesso',
    error: 'Não foi possível realizar este procedimento, tente mais tarde'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public authProvider: AuthProvider,
    public alunoProvider: AlunoProvider,
    public alunoPersistence: AlunoPersistence,
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
    this.alunos = await this.alunoPersistence.list();
  }

  assign(item) {
    return {...item, start: this.src(item), center: item.nome};
  }

  src(item) {
    return item.idUsuario.link_foto ? item.idUsuario.link_foto : 'assets/img/user/none.svg';
  }

  open(item) {
    const modal = this.modalCtrl.create(MenuComponent, {aluno: item, item: this.assign(item), menu: this.menu, class: 'menu-lg'});
    modal.present();
    modal.onDidDismiss(res => {
      if (typeof res !== 'undefined') {
        if (res.component) {
          this.navCtrl.push(res.component, {aluno: res.aluno, item: res.item}, {animate: false});
          return;
        }
        this.methods(res.method, res.aluno);
      }
    });
  }

  methods(method, aluno) {
    switch(method) {
      case 'changePassword':
        this.changePassword(aluno);
      break;
      case 'delete':
        this.delete(aluno);
      break;
    }
  }

  create() {
    this.navCtrl.push(AlunoFormPage, {}, {animate: false});
  }

  createMensagem() {
    this.navCtrl.push(AlunoMensagemPage, {alunos: this.alunos}, {animate: false});
  }

  changePassword(aluno) {
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
          this.handleChangePassword(aluno);
        }
      }
    ];
    this.util.showAlert(title, message, null, buttons);
  }

  async handleChangePassword(aluno) {
    this.util.showLoading();
    await this.authProvider.forgotPassword(aluno.idUsuario.login).then(res => {
      if (res) {
        this.util.showAlert('Atenção', this.messages.changePassword);
      } else {
        this.util.showAlert('Atenção', this.messages.error);
      }
      this.util.endLoading();
    }, err => this.util.handleServerError(err))
  }

  delete(aluno) {
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
          this.handleDelete(aluno);
        }
      }
    ];
    this.util.showAlert(title, message, null, buttons);
  }

  async handleDelete(aluno) {
    this.util.showLoading();
    await this.alunoProvider.delete(aluno.id_usuario).then(async res => {
      if (res) {
        await this.alunoPersistence.delete(aluno.id_aluno);
        await this.store();
        this.util.showAlert('Atenção', this.messages.delete);
      } else {
        this.util.showAlert('Atenção', this.messages.error);
      }
      this.util.endLoading();
    }, err => this.util.handleServerError(err));
  }

  async refresh($event) {
    const usuarioId = await this.util.getStorage('usuarioId');
    await this.alunoProvider.index(usuarioId).then(async res => {
      await this.alunoPersistence.store(res);
      await this.store();
      $event.complete();
    }, err => this.util.handleServerError(err));
  }

  search($event) {
    this.searchTerm = $event.target.value;
  }

  infinite($event) {
    if (this.alunos.length > this.count) {
      setTimeout(() => {
        this.count += this.increase;
        $event.complete();
      }, 500);
    } else {
      $event.complete();
    }
  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
