import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AulaFormPage } from './aula-form/aula-form';
import { AulaViewPage } from './aula-view/aula-view';

import { MenuComponent } from '../../components/menu/menu';

@IonicPage()
@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaPage {

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AulaViewPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: AulaFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  items = [
    {description: 'Segunda-Feira', aulas: [
      {description: 'Jump', clock: 'Seg, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Seg, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Seg, 09:00 ás 12:00'}
    ]},
    {description: 'Terça-Feira', aulas: [
      {description: 'Jump', clock: 'Ter, 09:00 ás 12:00'}
    ]},
    {description: 'Quarta-Feira', aulas: [
      {description: 'Jump', clock: 'Qua, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Qua, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Qua, 09:00 ás 12:00'}
    ]},
    {description: 'Quinta-Feira', aulas: [
      {description: 'Jump', clock: 'Qui, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Qui, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Qui, 09:00 ás 12:00'}
    ]},
    {description: 'Sexta-Feira', aulas: [
      {description: 'Jump', clock: 'Sex, 09:00 ás 12:00'}
    ]},
    {description: 'Sábado', aulas: [
      {description: 'Jump', clock: 'Sab, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Sab, 09:00 ás 12:00'},
      {description: 'Jump', clock: 'Sab, 09:00 ás 12:00'},
    ]},
    {description: 'Domingo', aulas: [
      {description: 'Jump', clock: 'Dom, 09:00 ás 12:00'}
    ]}
  ];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, title: item.description, time: item.clock};
  }

  open(item) {
    this.modalCtrl.create(MenuComponent, {item: this.assign(item), menu: this.menu}).present();
  }

  create() {
    this.navCtrl.push(AulaFormPage, {}, {animate: false});
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
