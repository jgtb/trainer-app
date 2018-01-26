import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-avaliacao-form',
  templateUrl: 'avaliacao-form.html',
})
export class AvaliacaoFormPage {

  slides = [
  	{id: 1, title: 'Objetiva', icon: 'create'},
  	{id: 2, title: 'Múltipla Escolha', icon: 'create'},
  	{id: 3, title: 'Descritiva', icon: 'create'},
  	{id: 4, title: 'Texto Longo', icon: 'create'},
  	{id: 5, title: 'Imagem & Arquivo', icon: 'create'}
  ];

  title: '';

  avaliacao: any = {};

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams) {
      this.avaliacao = this.navParams.get('item');
  }

  ionViewDidLoad() {
    this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = !this.avaliacao ? 'Nova Avaliação' : this.avaliacao.description;
  }

}
