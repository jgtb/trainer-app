import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AulaFormPage } from './aula-form/aula-form';
import { AulaViewPage } from './aula-view/aula-view';

import { MenuComponent } from '../../components/menu/menu';

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
    return {...item, center: item.description, end: item.clock};
  }

  open(item) {
    const modal = this.modalCtrl.create(MenuComponent, {item: this.assign(item), menu: this.menu});
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
