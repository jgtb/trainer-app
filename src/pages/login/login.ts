import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../../pages/dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  go() {
    this.navCtrl.push(DashboardPage, {}, {animate: false});
  }

}
