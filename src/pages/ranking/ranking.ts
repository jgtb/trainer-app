import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  itemsAtual = [
    {grupo: 'Grupo 01', alunos: [
      {nome: 'Aluno 01', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '29', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '25', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: true},
    {grupo: 'Grupo 02', alunos: [
      {nome: 'Aluno 01', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '29', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '25', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: false},
    {grupo: 'Grupo 03', alunos: [
      {nome: 'Aluno 01', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '29', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '25', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: false},
    {grupo: 'Grupo 04', alunos: [
      {nome: 'Aluno 01', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '29', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '25', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: false}
  ];

  itemsAnterior = [
    {grupo: 'Grupo 01', alunos: [
      {nome: 'Aluno 01', pontos: '55', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '31', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: true},
    {grupo: 'Grupo 02', alunos: [
      {nome: 'Aluno 01', pontos: '55', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '31', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: false},
    {grupo: 'Grupo 03', alunos: [
      {nome: 'Aluno 01', pontos: '55', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '31', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: false},
    {grupo: 'Grupo 04', alunos: [
      {nome: 'Aluno 01', pontos: '55', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 02', pontos: '44', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 03', pontos: '32', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
      {nome: 'Aluno 04', pontos: '31', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
    ], show: false}
  ];

  tab = 'atual';

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  back() {
    this.navCtrl.pop({animate: false});
  }

}
