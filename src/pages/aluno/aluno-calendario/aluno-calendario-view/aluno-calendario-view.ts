import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-calendario-view',
  templateUrl: 'aluno-calendario-view.html',
})
export class AlunoCalendarioViewPage {

  title = '';

  treino: any = {};
  aluno: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
  		this.treino = this.navParams.get('item');
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = this.treino.description;
  }

}
