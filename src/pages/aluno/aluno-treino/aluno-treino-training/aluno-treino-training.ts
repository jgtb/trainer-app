import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-treino-training',
  templateUrl: 'aluno-treino-training.html',
})
export class AlunoTreinoTrainingPage {

  title = '';

  treino: any = {};
  aluno: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.aluno = this.navParams.get('aluno');
      this.treino = this.navParams.get('item');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  setTitle() {
    this.title = this.treino.descricao;
  }

  src(treino) {
    return `http://fit.nexur.com.br/exercicios/${treino.idExercicio.id_exercicio}-0.gif`;
  }

}
