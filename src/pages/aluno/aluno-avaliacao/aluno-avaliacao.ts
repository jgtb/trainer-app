import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoAvaliacaoFormPage } from './aluno-avaliacao-form/aluno-avaliacao-form';
import { AlunoAvaliacaoViewPage } from './aluno-avaliacao-view/aluno-avaliacao-view';

import { MenuComponent } from '../../../components/menu/menu';

@IonicPage()
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
    return {...item, title: item.description};
  }

  open(item) {
    this.modalCtrl.create(MenuComponent, {aluno: this.aluno, item: this.assign(item), menu: this.menu}).present();
  }

  create() {
    this.navCtrl.push(AlunoAvaliacaoFormPage, {aluno: this.aluno}, {animate: false});
  }

  delete(item, aluno) {
    console.log('Excluír', item);
    console.log('Excluír', aluno);
  }

}
