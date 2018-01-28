import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aula-view',
  templateUrl: 'aula-view.html',
})
export class AulaViewPage {

  item: any = {};

  title = '';

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.item = this.navParams.get('item');
    }

  ionViewDidLoad() {
      this.setTitle();
    }

  ionViewDidEnter() {}

  setTitle() {
    this.title = this.item.description
  }

}
