import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Util } from '../../../../util';

@Component({
  selector: 'page-aluno-treino-form',
  templateUrl: 'aluno-treino-form.html',
})
export class AlunoTreinoFormPage {

  title = '';

  searchTerm = '';

  aluno: any = {};
  treino: any = {};
  exercicios: any = [];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public util: Util) {
      this.treino = this.navParams.get('item');
  	  this.aluno = this.navParams.get('aluno');
      this.exercicios = this.util.getStorage('dataExercicio');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  filteredItems() {
    return this.exercicios.filter(e => e.idExercicio.descricao_pt.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
  }

  reorderItems(indexes) {
    let e = this.treino.exercicioSeries[indexes.from];
    this.treino.exercicioSeries.splice(indexes.from, 1);
    this.treino.exercicioSeries.splice(indexes.to, 0, e);
  }

  setTitle() {
    this.title = !this.treino ? 'Novo Treino' : this.treino.descricao;
  }

}
