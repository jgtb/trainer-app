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
      this.aluno = this.navParams.get('aluno');
      this.avaliacao = this.navParams.get('item');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  ionViewDidEnter() {}

  reorderItems(indexes) {
    //let element = this.items[indexes.from];
    //this.items.splice(indexes.from, 1);
    //this.items.splice(indexes.to, 0, element);
  }

  setTitle() {
    this.title = !this.avaliacao ? 'Nova Avaliação' : this.avaliacao.descricao;
  }

}
