import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AvaliacaoFormPage } from './avaliacao-form/avaliacao-form';
import { AvaliacaoViewPage } from './avaliacao-view/avaliacao-view';

import { MenuComponent } from '../../components/menu/menu';

@IonicPage()
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
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, title: item.description};
  }

  open(item) {
    this.modalCtrl.create(MenuComponent, {item: this.assign(item), menu: this.menu}).present();
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
