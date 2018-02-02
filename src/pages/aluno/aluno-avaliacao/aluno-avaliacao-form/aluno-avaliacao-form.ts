import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-avaliacao-form',
  templateUrl: 'aluno-avaliacao-form.html',
})
export class AlunoAvaliacaoFormPage {

  slides = [
  	{id: 1, title: 'Objetiva', icon: 'create'},
  	{id: 2, title: 'Múltipla Escolha', icon: 'create'},
  	{id: 3, title: 'Descritiva', icon: 'create'},
  	{id: 4, title: 'Texto Longo', icon: 'create'},
  	{id: 5, title: 'Imagem & Arquivo', icon: 'create'}
  ];

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
