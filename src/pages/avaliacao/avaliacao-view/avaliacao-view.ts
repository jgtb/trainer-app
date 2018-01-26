import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-avaliacao-view',
  templateUrl: 'avaliacao-view.html',
})
export class AvaliacaoViewPage {

  title = '';

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
  	this.title = this.avaliacao.description;
  }

}
