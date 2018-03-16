import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ExercicioFormPage } from './exercicio-form/exercicio-form';
import { ExercicioViewPage } from './exercicio-view/exercicio-view';

import { MenuComponent } from '../../components/menu/menu';

import { Util } from '../../util';

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

  exercicios: any = [];

  searchTerm = '';

  count = 10;
  increase = 10;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public util: Util) {
      this.exercicios = this.util.getStorage('dataExercicio');
    }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  assign(item) {
    return {...item, center: item.idExercicio.descricao_pt};
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
    if (this.exercicios.length > this.count) {
      setTimeout(() => {
        this.count += this.increase;
        $event.complete();
      }, 500);
    } else {
      $event.complete();
    }
  }

  isChecked(exercicio) {
    return exercicio.ativo === '1';
  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
