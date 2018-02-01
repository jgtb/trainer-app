import { Component } from '@angular/core';

import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  aluno: any = {};
  item: any = {};
  menu: any = [{}];

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
    if (item.component) {
      this.open(item.component);
      return
    }

    this.alert(item.method);
  }

  open(component) {
    this.navCtrl.push(component, {aluno: this.aluno, item: this.item}, {animate: false});
  }

  alert(method) {
    method(this.item, this.aluno);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
