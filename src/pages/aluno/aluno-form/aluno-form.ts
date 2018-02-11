import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { StaticProvider } from '../../../providers/static/static';

@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

  form: FormGroup;

  grupos: any = [];

  title = '';
  actionName = 'Salvar';

  aluno: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public staticProvider: StaticProvider,
    public formBuilder: FormBuilder) {
      this.aluno = this.navParams.get('item');
      this.initForm();
  }

  ionViewDidLoad() {
    this.setTitle();
    this.setAction();
    this.getAllGrupo();
  }

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      nome: [this.aluno ? this.aluno.nome : '', Validators.required],
      email: [this.aluno ? this.aluno.email : '', Validators.required],
      data_nascimento: [this.aluno ? this.aluno.data_nascimento : '', Validators.required],
      sexo: [this.aluno ? this.aluno.sexo : '', Validators.required],
      data_matricula: [this.aluno ? this.aluno.data_matricula : '', Validators.required],
      grupo: [this.aluno ? this.aluno.grupo : '', Validators.required],
      login: [this.aluno ? this.aluno.idUsuario.login : '', Validators.required],
      senha: [this.aluno ? this.aluno.idUsuario.senha : '', Validators.required]
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

  setTitle() {
    this.title = !this.aluno ? 'Novo Aluno' : this.aluno.nome;
  }

  setAction() {
    this.actionName = !this.aluno ? 'Salvar' : 'Alterar';
  }

  getAllGrupo() {
    this.staticProvider.getAllGrupo().subscribe(res => this.grupos = res);
  }

}
