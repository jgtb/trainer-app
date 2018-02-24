import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlunoProvider } from '../../../providers/aluno/aluno';
import { StaticProvider } from '../../../providers/static/static';

import { AlunoPersistence } from '../../../persistences/aluno/aluno';

import { Util } from '../../../util';

import * as _ from 'lodash';

@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

  form: FormGroup;

  aluno: any = {};
  grupos: any = [];

  messages = {
    create: 'Aluno registrado com sucesso',
    update: 'Aluno alterado com sucesso',
    loginHasTakenError: 'Login já utilizado',
    error: 'Não foi possível realizar este procedimento, tente mais tarde'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alunoProvider: AlunoProvider,
    public staticProvider: StaticProvider,
    public alunoPersistence: AlunoPersistence,
    public formBuilder: FormBuilder,
    public util: Util) {
      this.aluno = this.navParams.get('item');
      this.initForm();
  }

  ionViewDidLoad() {
    this.getAllGrupo();
  }

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      id_usuario: [!this.aluno ? this.util.getStorage('usuarioId') : this.aluno.id_usuario],
      id_aluno: [this.aluno ? this.aluno.id_aluno : ''],
      nome: [this.aluno ? this.aluno.nome : '', Validators.required],
      email: [this.aluno ? this.aluno.email : '', Validators.required],
      data_nascimento: [this.aluno ? this.aluno.data_nascimento : '', Validators.required],
      data_matricula: [this.aluno ? this.aluno.data_matricula : '', Validators.required],
      grupo: [this.aluno ? this.aluno.grupo : '', Validators.required],
      sexo: [this.aluno ? this.aluno.sexo : '', Validators.required],
      login: [this.aluno ? this.aluno.idUsuario.login : '', [Validators.required]],
      senha: [this.aluno ? this.aluno.idUsuario.senha : '', Validators.required]
    });
  }

  action(data) {
    switch(this.getAction()) {
      case 'Salvar':
        this.create(data);
      break;
      case 'Alterar':
        this.update(data);
      break;
    }
  }

  create(data) {
    this.util.showLoading();
    this.alunoProvider.checkLogin(data.login).subscribe(res => {
      if (res === 1) {
        this.alunoProvider.create(data).subscribe(res => {
          if (res) {
            this.util.showAlert('Atenção', this.messages.create);
            this.alunoPersistence.save(res);
            this.navCtrl.pop();
          } else {
            this.util.showAlert('Atenção', this.messages.error);
          }
        }, err => this.util.handlerServerError(err));
      } else {
        this.util.showAlert('Atenção', this.messages.loginHasTakenError);
      }
      this.util.endLoading();
    }, err => this.util.handlerServerError(err));
  }

  update(data) {
    this.util.showLoading();
    this.alunoProvider.checkLogin(data.login).subscribe(res => {
      if (res === 1 ) {
        this.alunoProvider.update(data).subscribe(res => {
          if (res) {
            this.util.showAlert('Atenção', this.messages.update);
            this.alunoPersistence.save(res);
            this.navCtrl.pop();
          } else {
            this.util.showAlert('Atenção', this.messages.error);
          }
        }, err => this.util.handlerServerError(err));
      } else {
        this.util.showAlert('Atenção', this.messages.loginHasTakenError);
      }
      this.util.endLoading();
    }, err => this.util.handlerServerError(err));
  }

  getTitle() {
    return !this.aluno ? 'Novo Aluno' : this.aluno.nome;
  }

  getAction() {
    return !this.aluno ? 'Salvar' : 'Alterar';
  }

  getAllGrupo() {
    this.staticProvider.getAllGrupo().subscribe(res => this.grupos = res);
  }

}
