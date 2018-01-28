import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-avaliacao-form',
  templateUrl: 'aluno-avaliacao-form.html',
})
export class AlunoAvaliacaoFormPage {

  title = '';

  aluno: any = {};
  avaliacao: any  = {};

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
    this.title = !this.avaliacao ? 'Nova Avaliação' : this.avaliacao.description;
  }

}
