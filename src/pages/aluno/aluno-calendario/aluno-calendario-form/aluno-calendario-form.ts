import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-calendario-form',
  templateUrl: 'aluno-calendario-form.html',
})
export class AlunoCalendarioFormPage {

  title = '';

  aluno: any = {};
  calendario: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
  	  this.aluno = this.navParams.get('aluno');
      this.calendario = this.navParams.get('item');
      console.log(this.calendario);
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = !this.calendario ? 'Novo Treino' : this.calendario.description;
  }

}
