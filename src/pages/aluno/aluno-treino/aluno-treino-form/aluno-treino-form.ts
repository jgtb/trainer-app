import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-treino-form',
  templateUrl: 'aluno-treino-form.html',
})
export class AlunoTreinoFormPage {

  title = '';

  searchTerm = '';

  aluno: any = {};
  treino: any = {};

  items = [
    {description: 'Exercício 01', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 02', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 03', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 04', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 05', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 06', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 07', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 08', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 09', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 10', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 11', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 12', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 13', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'},
    {description: 'Exercício 14', img: 'http://fit.nexur.com.br/exercicios/24-0.gif'}
  ];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.treino = this.navParams.get('item');
  	  this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  filteredItems() {
    return this.items.filter(item => item.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  setTitle() {
    this.title = !this.treino ? 'Novo Treino' : this.treino.description;
  }

}
