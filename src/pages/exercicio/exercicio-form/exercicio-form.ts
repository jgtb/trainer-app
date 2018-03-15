import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { StaticProvider } from '../../../providers/static/static';

import { Util } from '../../../util';

@Component({
  selector: 'page-exercicio-form',
  templateUrl: 'exercicio-form.html',
})
export class ExercicioFormPage {

  form: FormGroup;

  title = '';
  actionName = '';

  exercicio: any = {};

  dataTipoEquipamento: any = [];
  dataTipoExercicio: any = [];
  dataClassificacaoExercicio: any = [];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public staticProvider: StaticProvider,
    public formBuilder: FormBuilder,
    public util: Util) {
  	  this.exercicio = this.navParams.get('item');
      this.initForm();
  }

  ionViewDidLoad() {
    this.setTitle();
    this.setAction();
    this.getAllTipoEquipamento();
    this.getAllTipoExercicio();
  }

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      id_usuario: [this.util.getStorage('usuarioId')],
      descricao: [this.exercicio ? this.exercicio.idExercicio.descricao_pt : ''],
      id_tipo_exercicio: [this.exercicio ? this.exercicio.id_tipo_exercicio : '', Validators.required],
      id_tipo_equipamento: [this.exercicio ? this.exercicio.id_tipo_equipamento : '', Validators.required],
      id_classificacao_exercicio: [this.exercicio ? this.exercicio.id_classificacao_exercicio : '', Validators.required],
      // fotos: [this.exercicio ? this.exercicio.fotos : '', Validators.required],
      video: [this.exercicio ? this.exercicio.video : '', Validators.required]
    });
  }

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

  getAllTipoEquipamento() {
    this.staticProvider.getAllTipoEquipamento().subscribe(res => this.dataTipoEquipamento = res);
  }

  getAllTipoExercicio() {
    this.staticProvider.getAllTipoExercicio().subscribe(res => this.dataTipoExercicio = res);
  }

  getAllClassificacaoExercicio(idTipoExercicio) {
    this.staticProvider.getAllClassificacaoExercicio().subscribe(res => this.dataClassificacaoExercicio = res.filter(e => e.id_tipo_exercicio = idTipoExercicio));
  }

  setTitle() {
    this.title = !this.exercicio ? 'Novo Exercício' : this.exercicio.idExercicio.descricao_pt;
  }

  setAction() {
    this.actionName = !this.exercicio ? 'Salvar' : 'Alterar';
  }

}
