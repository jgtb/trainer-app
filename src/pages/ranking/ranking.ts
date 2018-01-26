import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

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
