import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

  form: FormGroup;

  grupos = [
    {id: 1, description: 'Grupo 01'},
    {id: 2, description: 'Grupo 02'},
    {id: 3, description: 'Grupo 03'},
    {id: 4, description: 'Grupo 04'}
  ];

  title = '';
  actionName = 'Salvar';

  aluno: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.aluno = this.navParams.get('item');
      this.initForm();
  }

  ionViewDidLoad() {
    this.setTitle();
    this.setAction();
  }

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      nome: [this.aluno ? this.aluno.nome : '', Validators.required]
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

}
