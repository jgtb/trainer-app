import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Util } from '../../../util';

@Component({
  selector: 'page-aluno-mensagem',
  templateUrl: 'aluno-mensagem.html',
})
export class AlunoMensagemPage {

  form: FormGroup;

  alunos: any = [];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public formBuilder: FormBuilder,
    public util: Util) {
      this.alunos = this.util.getStorage('dataAluno');
      this.initForm();
    }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      id_aluno: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  create(data) {
    console.log(data);
  }

  handlerOptionChange($event) {
    this.form.patchValue({
      id_aluno: $event
    });
  }

}
