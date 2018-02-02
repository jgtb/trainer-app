import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

  colors = [
    {title: 'Primary', color: '#263238'},
    {title: 'Secondary', color: '#212121'},
    {title: 'Light', color: '#ffffff'},
    {title: 'Dark', color: '#004d40'},
    {title: 'Darklight', color: '#00695c'}
  ];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  setColor(color) {
    return {
      'color': color
    }
  }

  back() {
    this.navCtrl.pop({animate: false});
  }

}
