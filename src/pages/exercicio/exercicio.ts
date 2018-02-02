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
    {description: 'Exercício 01', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 02', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 03', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 04', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 05', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 06', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 07', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 08', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 09', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 10', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 11', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 12', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 13', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 14', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'}
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
    const modal = this.modalCtrl.create(MenuComponent, {aluno: item, item: this.assign(item), menu: this.menu});
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
