import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

  grupos = [
    {id: 1, description: 'Grupo 01'},
    {id: 2, description: 'Grupo 02'},
    {id: 3, description: 'Grupo 03'},
    {id: 4, description: 'Grupo 04'}
  ];

  title = '';
  actionName = 'Salvar';

  item: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    this.setTitle();
    this.setAction();
  }

  ionViewDidEnter() {}

  action() {
    switch(this.actionName) {
      case 'Salvar':
        this.create();
      break;
      case 'Alterar':
        this.update();
      break;
    }
  }

  create() {

  }

  update() {

  }

  setTitle() {
    this.title = !this.item ? 'Novo Aluno' : this.item.name;
  }

  setAction() {
    this.actionName = !this.item ? 'Salvar' : 'Alterar';
  }

}
