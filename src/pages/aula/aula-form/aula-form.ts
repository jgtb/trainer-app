import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aula-form',
  templateUrl: 'aula-form.html',
})
export class AulaFormPage {

  aula: any = {};

  title = '';

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.aula = this.navParams.get('item');
    }

  ionViewDidLoad() {
    this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = !this.aula ?  'Nova Aula' : this.aula.description;
  }

}
