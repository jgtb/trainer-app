import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoTreinoFormPage } from './aluno-treino-form/aluno-treino-form';
import { AlunoTreinoViewPage } from './aluno-treino-view/aluno-treino-view';

import { MenuComponent } from '../../../components/menu/menu';

@Component({
  selector: 'page-aluno-treino',
  templateUrl: 'aluno-treino.html'
})
export class AlunoTreinoPage {

  aluno: any = {};

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AlunoTreinoViewPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: AlunoTreinoFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  items = [
    {description: 'Treino 01'},
    {description: 'Treino 02'},
    {description: 'Treino 03'},
    {description: 'Treino 04'},
    {description: 'Treino 05'}
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, center: item.description};
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
        res.method(res.item, res.aluno);
      }
    });
  }

  create() {
    this.navCtrl.push(AlunoTreinoFormPage, {aluno: this.aluno}, {animate: false});
  }

  delete(item, aluno) {
    console.log('Excluír', item);
    console.log('Excluír', aluno);
  }

}
