import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { StaticProvider } from '../../../../../providers/static/static';

@Component({
  selector: 'page-aluno-treino-form-modal',
  templateUrl: 'aluno-treino-form-modal.html',
})
export class AlunoTreinoFormModalPage {

  form: FormGroup;

  title = '';
  actionName = '';

  exercicio: any = {};

  tiposRepeticao: any = [];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public staticProvider: StaticProvider,
    public formBuilder: FormBuilder) {
      this.exercicio = this.navParams.get('exercicio');
      this.initForm();
    }

  ionViewDidLoad() {
    this.setTitle();
    this.setActionName();
    this.getAllTipoRepeticao();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id_exercicio: [this.exercicio.id_exercicio, Validators.required],
      id_tipo_repeticao: [this.exercicio.idTipoRepeticao ? this.exercicio.idTipoRepeticao.id_tipo_repeticao : '' , Validators.required],
      carga: [this.exercicio.carga ? this.exercicio.carga : '', Validators.required],
      num_repeticao: [this.exercicio.num_repeticao ? this.exercicio.num_repeticao : '', Validators.required],
      intervalo: [this.exercicio.intervalo ? this.exercicio.intervalo : '', Validators.required],
      nota: [this.exercicio.nota ? this.exercicio.nota : '']
    });
  }

  setTitle() {
    this.title = this.exercicio.idExercicio.descricao_pt;
  }

  setActionName() {
    this.actionName = !this.exercicio.id_exercicio_serie ? 'Adicionar' : 'Alterar';
  }

  getAllTipoRepeticao() {
    this.staticProvider.getAllTipoRepeticao().subscribe(res => this.tiposRepeticao = res);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
