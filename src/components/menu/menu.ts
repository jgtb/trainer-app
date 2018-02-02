import { Component } from '@angular/core';

import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  aluno = {};
  item = {};
  menu = [{}];

  menuClass: '';

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
      this.aluno = this.navParams.get('aluno');
      this.item = this.navParams.get('item');
      this.menu = this.navParams.get('menu');
      this.menuClass = this.navParams.get('class');
  }

  action(item) {
    this.viewCtrl.dismiss({component: item.component, method: item.method, aluno: this.aluno, item: this.item});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
