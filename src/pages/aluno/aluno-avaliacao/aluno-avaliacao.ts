import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoAvaliacaoFormPage } from './aluno-avaliacao-form/aluno-avaliacao-form';
import { AlunoAvaliacaoViewPage } from './aluno-avaliacao-view/aluno-avaliacao-view';

import { MenuComponent } from '../../../components/menu/menu';

@Component({
  selector: 'page-aluno-avaliacao',
  templateUrl: 'aluno-avaliacao.html',
})
export class AlunoAvaliacaoPage {

  aluno: any = {};

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AlunoAvaliacaoViewPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: AlunoAvaliacaoFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  items = [
    {description: 'Avaliação 01'},
    {description: 'Avaliação 02'},
    {description: 'Avaliação 03'},
    {description: 'Avaliação 04'},
    {description: 'Avaliação 05'}
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
    this.navCtrl.push(AlunoAvaliacaoFormPage, {aluno: this.aluno}, {animate: false});
  }

  delete(item, aluno) {
    console.log('Excluír', item);
    console.log('Excluír', aluno);
  }

}
