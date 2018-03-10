import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlunoTreinoFormModalPage } from './aluno-treino-form-modal/aluno-treino-form-modal';

import { AlunoTreinoProvider } from '../../../../providers/aluno-treino/aluno-treino';

import { AlunoTreinoPersistence } from '../../../../persistences/aluno-treino/aluno-treino';

import { Util } from '../../../../util';

@Component({
  selector: 'page-aluno-treino-form',
  templateUrl: 'aluno-treino-form.html',
})
export class AlunoTreinoFormPage {

  form: FormGroup;

  title = '';

  searchTerm = '';

  hasFocus = false;

  aluno: any = {};
  treino: any = {};
  exercicios: any = [];

  actionName = '';

  messages = {
    create: 'Treino registrado com sucesso',
    update: 'Treino alterado com sucesso',
    error: 'Não foi possível realizar este procedimento, tente mais tarde'
  };

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public modalCtrl: ModalController,
    public alunoTreinoProvider: AlunoTreinoProvider,
    public alunoTreinoPersistence: AlunoTreinoPersistence,
    public formBuilder: FormBuilder,
    public util: Util) {
      this.treino = this.navParams.get('item');
  	  this.aluno = this.navParams.get('aluno');
      this.exercicios = this.util.getStorage('dataExercicio');
      this.setTitle();
      this.setActionName();
      this.initForm();
      this.initTreino();
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      descricao: [this.treino ? this.treino.descricao : '', Validators.required]
    });
  }

  filteredItems() {
    return this.exercicios.filter(e => e.idExercicio.descricao_pt.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
  }

  action(exercicioSerie) {
    if (typeof exercicioSerie.id_exercicio !== 'undefined') {
      const modal = this.modalCtrl.create(AlunoTreinoFormModalPage, {exercicioSerie: exercicioSerie});
      modal.present();
      modal.onDidDismiss(res => {
        if (res !== null) {
          this.methods(res.action, res.item)
        }
      });
    }
  }

  methods(action, data) {
    switch(action) {
      case 'create':
        this.create(data);
      break;
      case 'update':
        this.update(data);
      break;
      case 'add':
        this.add(data);
      break;
      case 'edit':
        this.edit(data);
      break;
      case 'delete':
        this.delete(data);
      break;
    }
  }

  create(data) {
    this.util.showLoading();
    this.alunoTreinoProvider.create({...this.treino, descricao: data.descricao}).subscribe(res => {
      if (res) {
        this.alunoTreinoPersistence.save(this.aluno.id_aluno, res);
        this.util.showAlert('Atenção', this.messages.create);
        this.navCtrl.pop();
      } else {
        this.util.showAlert('Atenção', this.messages.error);
      }
      this.util.endLoading();
    }, err => this.util.handleServerError(err));
  }

  update(data) {
    this.util.showLoading();
    this.alunoTreinoProvider.update({...this.treino, descricao: data.descricao}).subscribe(res => {
      if (res) {
        this.alunoTreinoPersistence.save(this.aluno.id_aluno, res);
        this.util.showAlert('Atenção', this.messages.update);
        this.navCtrl.pop();
      } else {
        this.util.showAlert('Atenção', this.messages.error);
      }
      this.util.endLoading();
    }, err => this.util.handleServerError(err));
  }

  add(item) {
    this.treino.exercicioSeries.push(item);
  }

  edit(item) {
    this.treino = {...this.treino, exercicioSeries: this.treino.exercicioSeries.map(e => e.id_exercicio_serie === item.id_exercicio_serie ? item : e)};
  }

  delete(id) {
    this.treino = {...this.treino, exercicioSeries: this.treino.exercicioSeries.filter(e => e.id_exercicio_serie !== id)};
  }

  reorderItems(indexes) {
    let e = this.treino.exercicioSeries[indexes.from];
    this.treino.exercicioSeries.splice(indexes.from, 1);
    this.treino.exercicioSeries.splice(indexes.to, 0, e);
  }

  setTitle() {
    this.title = !this.treino ? 'Novo Treino' : this.treino.descricao;
  }

  setActionName() {
    this.actionName = !this.treino ? 'create' : 'update';
  }

  initTreino() {
    if (!this.treino) {
      this.treino = {
        id_aluno: this.aluno.id_aluno,
        descricao: '',
        exercicioSeries: []
      }
    }
  }

}
