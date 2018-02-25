import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoTreinoFormPage } from './aluno-treino-form/aluno-treino-form';
import { AlunoTreinoTrainingPage } from './aluno-treino-training/aluno-treino-training';
import { AlunoTreinoViewPage } from './aluno-treino-view/aluno-treino-view';

import { AlunoTreinoProvider } from '../../../providers/aluno-treino/aluno-treino';

import { AlunoTreinoPersistence } from '../../../persistences/aluno-treino/aluno-treino';

import { MenuComponent } from '../../../components/menu/menu';

import { Util } from '../../../util';

@Component({
  selector: 'page-aluno-treino',
  templateUrl: 'aluno-treino.html'
})
export class AlunoTreinoPage {

  aluno: any = {};

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AlunoTreinoViewPage, class: ''},
    {title: 'Treinar', icon: 'body', component: AlunoTreinoTrainingPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: AlunoTreinoFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: 'delete', class: ''}
  ];

  emptyMessage = 'Nenhum Treino encontrado...';

  messages = {
    delete: 'Treino excluído com sucesso',
    error: 'Não foi possível realizar este procedimento, tente mais tarde'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alunoTreinoProvider: AlunoTreinoProvider,
    public alunoTreinoPersistence: AlunoTreinoPersistence,
    public util: Util) {
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {
    this.store();
  }

  store() {
    this.aluno = this.alunoTreinoPersistence.list().find(e => e.id_aluno === this.aluno.id_aluno);
  }

  assign(item) {
    return {...item, center: item.descricao};
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

  methods(method, treino, aluno) {
    switch(method) {
      case 'delete':
        this.delete(treino, aluno);
      break;
    }
  }

  create() {
    this.navCtrl.push(AlunoTreinoFormPage, {aluno: this.aluno}, {animate: false});
  }

  delete(treino, aluno) {
    const title = 'Excluír';
    const message = `Deseja excluír o Treino: ${treino.descricao}`;
    const buttons = [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.handleDelete(treino);
        }
      }
    ];

    this.util.showAlert(title, message, null, buttons);
  }

  handleDelete(treino) {
    this.util.showLoading();
    this.alunoTreinoProvider.delete(treino.id_serie).subscribe(res => {
        if (res) {
          this.util.showAlert('Atenção', this.messages.delete);
          this.alunoTreinoPersistence.delete(this.aluno.id_aluno, treino.id_serie);
          this.store();
        } else {
          this.util.showAlert('Atenção', this.messages.error);
        }
        this.util.endLoading();
      },
      err => this.util.handlerServerError(err));
  }

}
