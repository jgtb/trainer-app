import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aula-form',
  templateUrl: 'aula-form.html',
})
export class AulaFormPage {

  item: any = {};

  title = '';

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.item = this.navParams.get('item');
      console.log(this.item);
    }

  ionViewDidLoad() {
    this.setTitle();
  }

  ionViewDidEnter() {}

  setTitle() {
    this.title = !this.item ?  'Nova Aula' : this.item.description;
  }

}
