import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aluno-treino-form',
  templateUrl: 'aluno-treino-form.html',
})
export class AlunoTreinoFormPage {

  title = '';

  aluno: any = {};
  treino: any = {};

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams) {
      this.treino = this.navParams.get('item');
  	  this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  setTitle() {
    this.title = !this.treino ? 'Novo Treino' : this.treino.description;
  }

}
