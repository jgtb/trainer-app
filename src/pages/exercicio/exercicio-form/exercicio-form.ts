import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-exercicio-form',
  templateUrl: 'exercicio-form.html',
})
export class ExercicioFormPage {

  title = '';
  actionName = '';

  item: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
  	   this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    this.setTitle();
    this.setAction();
  }

  action() {
    switch(this.actionName) {
      case 'Salvar':
        this.create();
      break;
      case 'Alterar':
        this.update();
      break;
    }
  }

  create() {

  }

  update() {

  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = !this.item ? 'Novo Exercício' : this.item.description;
  }

  setAction() {
    this.actionName = !this.item ? 'Salvar' : 'Alterar';
  }

}
