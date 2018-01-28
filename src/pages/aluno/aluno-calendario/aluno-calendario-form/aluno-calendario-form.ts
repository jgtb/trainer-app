import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-calendario-form',
  templateUrl: 'aluno-calendario-form.html',
})
export class AlunoCalendarioFormPage {

  title = '';

  aluno: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
  	  this.aluno = this.navParams.get('aluno');
      console.log(this.aluno);
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = 'Novo Treino';
  }

}
