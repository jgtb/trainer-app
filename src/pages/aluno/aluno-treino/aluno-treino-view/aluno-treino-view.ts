import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-treino-view',
  templateUrl: 'aluno-treino-view.html',
})
export class AlunoTreinoViewPage {

  title = '';

  treino: any = {};
  aluno: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.aluno = this.navParams.get('aluno');
      this.treino = this.navParams.get('item');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  setTitle() {
    this.title = this.treino.description;
  }

}
