import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-mensagem',
  templateUrl: 'aluno-mensagem.html',
})
export class AlunoMensagemPage {

  items = [
    {name: 'Aluno 01', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 02', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 03', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 04', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 05', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 06', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 07', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 08', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 09', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 10', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 11', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 12', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 13', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'},
    {name: 'Aluno 14', img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'}
  ];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

}
