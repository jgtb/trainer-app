import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ExercicioFormPage } from './exercicio-form/exercicio-form';
import { ExercicioViewPage } from './exercicio-view/exercicio-view';

import { MenuComponent } from '../../components/menu/menu';

@Component({
  selector: 'page-exercicio',
  templateUrl: 'exercicio.html'
})
export class ExercicioPage {

  menu = [
    {title: 'Visualizar', icon: 'eye', component: ExercicioViewPage, class: ''},
    {title: 'Atualizar', icon: 'create', component: ExercicioFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  items = [
    {description: 'Exercício 01'},
    {description: 'Exercício 02'},
    {description: 'Exercício 03'},
    {description: 'Exercício 04'},
    {description: 'Exercício 05'},
    {description: 'Exercício 06'},
    {description: 'Exercício 07'},
    {description: 'Exercício 08'},
    {description: 'Exercício 09'},
    {description: 'Exercício 10'},
    {description: 'Exercício 11'},
    {description: 'Exercício 12'},
    {description: 'Exercício 13'},
    {description: 'Exercício 14'}
  ];

  searchTerm = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, center: item.description};
  }

  open(item) {
    this.modalCtrl.create(MenuComponent, {aluno: item, item: this.assign(item), menu: this.menu}).present();
  }

  create() {
    this.navCtrl.push(ExercicioFormPage, {}, {animate: false});
  }

  delete(item) {
    console.log('Excluír', item);
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
