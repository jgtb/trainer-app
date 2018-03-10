import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlunoTreinoTrainingTimerPage } from './aluno-treino-training-timer/aluno-treino-training-timer';

import { AlunoTreinoProvider } from '../../../../providers/aluno-treino/aluno-treino';

import { AlunoTreinoPersistence } from '../../../../persistences/aluno-treino/aluno-treino';

import { Util } from '../../../../util';

@Component({
  selector: 'page-aluno-treino-training',
  templateUrl: 'aluno-treino-training.html',
})
export class AlunoTreinoTrainingPage {

  title = '';

  treino: any = {};
  aluno: any = {};

  emptyMessage = 'Nenhum Exercício encontrado...';

  showList = true;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public alunoTreinoProvider: AlunoTreinoProvider,
    public alunoTreinoPersistence: AlunoTreinoPersistence,
    public util: Util) {
      this.aluno = this.navParams.get('aluno');
      this.treino = this.navParams.get('item');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  store(res) {
    this.treino = res;
  }

  timer(item) {
    this.navCtrl.push(AlunoTreinoTrainingTimerPage);
  }

  update() {

  }

  done() {

  }

  video() {

  }

  setTitle() {
    this.title = this.treino.descricao;
  }

  src(treino) {
    return `http://fit.nexur.com.br/exercicios/${treino.idExercicio.id_exercicio}-0.gif`;
  }

  refresh($event) {
    this.alunoTreinoProvider.view(this.treino.id_serie).subscribe(res => {
      this.alunoTreinoPersistence.save(this.aluno.id_aluno, res);
      this.store(res);
      $event.complete();
    }, err => this.util.handleServerError(err));
  }

}
