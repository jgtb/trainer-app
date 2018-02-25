import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { StaticProvider } from '../../../../../providers/static/static';

import { Util } from '../../../../../util';

@Component({
  selector: 'page-aluno-treino-form-modal',
  templateUrl: 'aluno-treino-form-modal.html',
})
export class AlunoTreinoFormModalPage {

  form: FormGroup;

  title = '';
  actionName = '';

  exercicioSerie: any = {};

  tiposRepeticao: any = [];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public staticProvider: StaticProvider,
    public formBuilder: FormBuilder,
    public util: Util) {
      this.exercicioSerie = this.navParams.get('exercicioSerie');
      this.initForm();
    }

  ionViewDidLoad() {
    this.setTitle();
    this.setActionName();
    this.getAllTipoRepeticao();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id_exercicio_serie: [this.exercicioSerie.id_exercicio_serie ? this.exercicioSerie.id_exercicio_serie : ''],
      id_exercicio: [this.exercicioSerie.id_exercicio, Validators.required],
      id_tipo_repeticao: [this.exercicioSerie.idTipoRepeticao ? this.exercicioSerie.idTipoRepeticao.id_tipo_repeticao : '' , Validators.required],
      carga: [this.exercicioSerie.carga ? this.exercicioSerie.carga : '', Validators.required],
      num_repeticao: [this.exercicioSerie.num_repeticao ? this.exercicioSerie.num_repeticao : '', Validators.required],
      intervalo: [this.exercicioSerie.intervalo ? this.exercicioSerie.intervalo : '', Validators.required],
      nota: [this.exercicioSerie.nota ? this.exercicioSerie.nota : '']
    });
  }

  action(data) {
    switch(this.actionName) {
      case 'Adicionar':
        this.add(data);
      break;
      case 'Alterar':
        this.edit(data);
      break;
    }
  }

  add(data) {
    const res = {...data, id_exercicio_serie: this.util.getId(), idExercicio: {descricao_pt: this.exercicioSerie.idExercicio.descricao_pt}, idTipoRepeticao: this.tiposRepeticao.find(e => e.id_tipo_repeticao === data.id_tipo_repeticao)};
    this.dismiss(res, 'add');
  }

  edit(data) {
    const res = {...data, idExercicio: {descricao_pt: this.exercicioSerie.idExercicio.descricao_pt}, idTipoRepeticao: this.tiposRepeticao.find(e => e.id_tipo_repeticao === data.id_tipo_repeticao)};
    this.dismiss(res, 'edit');
  }

  delete() {
    this.dismiss(this.exercicioSerie.id_exercicio_serie, 'delete');
  }

  setTitle() {
    this.title = this.exercicioSerie.idExercicio.descricao_pt;
  }

  setActionName() {
    this.actionName = !this.exercicioSerie.id_exercicio_serie ? 'Adicionar' : 'Alterar';
  }

  getAllTipoRepeticao() {
    this.staticProvider.getAllTipoRepeticao().subscribe(res => this.tiposRepeticao = res);
  }

  dismiss(item = null, action = null) {
    this.viewCtrl.dismiss({action: action, item: item});
  }

}
