import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-avaliacao-view',
  templateUrl: 'aluno-avaliacao-view.html',
})
export class AlunoAvaliacaoViewPage {

  title = '';

  avaliacao: any = {};
  aluno: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
  		this.avaliacao = this.navParams.get('item');
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = this.avaliacao.description;
  }

}
