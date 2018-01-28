import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoFormPage } from './aluno-form/aluno-form';
import { AlunoMensagemPage } from './aluno-mensagem/aluno-mensagem';
import { AlunoTreinoPage } from './aluno-treino/aluno-treino';
import { AlunoAvaliacaoPage } from './aluno-avaliacao/aluno-avaliacao';
import { AlunoCalendarioPage } from './aluno-calendario/aluno-calendario';
import { AlunoGraficoPage } from './aluno-grafico/aluno-grafico';

import { MenuComponent } from '../../components/menu/menu';

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
    {title: 'Redefinir', icon: 'lock', method: this.changePassowrd, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  items = [
    {name: 'Aluno 01', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 02', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 03', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 04', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 05', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 06', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 07', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 08', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 09', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 10', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 11', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 12', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 13', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 14', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
  ];

  searchTerm = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, start: item.img, center: item.name};
  }

  open(item) {
    this.modalCtrl.create(MenuComponent, {aluno: item, item: this.assign(item), menu: this.menu, class: 'menu-lg'}).present();
  }

  create() {
    this.navCtrl.push(AlunoFormPage, {}, {animate: false});
  }

  createMensagem() {
    this.navCtrl.push(AlunoMensagemPage, {}, {animate: false});
  }

  changePassowrd({}, aluno) {
    console.log('Redefinir', aluno);
  }

  delete({}, aluno) {
    console.log('Excluír', aluno);
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
