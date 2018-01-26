import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-exercicio-view',
  templateUrl: 'exercicio-view.html',
})
export class ExercicioViewPage {

  title = '';

  item: any = {};

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
    this.title = this.item.description;
  }

}
