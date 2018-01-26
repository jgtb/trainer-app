import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

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
    this.title = !this.item ? 'Novo Aluno' : this.item.name;
  }

}
