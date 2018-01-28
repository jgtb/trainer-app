import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-grafico',
  templateUrl: 'aluno-grafico.html',
})
export class AlunoGraficoPage {

  aluno: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.aluno = this.navParams.get('aluno');
    }

  ionViewDidLoad() {}

}
