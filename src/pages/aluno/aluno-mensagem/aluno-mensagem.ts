import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlunoMensagemProvider } from '../../../providers/aluno-mensagem/aluno-mensagem';

import { Util } from '../../../util';

@Component({
  selector: 'page-aluno-mensagem',
  templateUrl: 'aluno-mensagem.html',
})
export class AlunoMensagemPage {

  form: FormGroup;

  alunos: any = [];

  messages = {
    create: 'Mensagem enviada com sucesso!',
    error: 'Não foi possível realizar este procedimento, tente mais tarde'
  };

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alunoMensagemProvider: AlunoMensagemProvider,
    public util: Util) {
      this.alunos = this.navParams.get('alunos');
      this.initForm();
    }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      ids: [[]],
      titulo: [null, Validators.required],
      texto: [null, Validators.required],
      allHasBeenSelected: [true]
    });
  }

  async create(data) {
    const usuarioId = await this.util.getStorage('usuarioId');
    data = {...data, id_usuario: usuarioId}

    if (data.allHasBeenSelected) {
      data = {...data, ids: 0}
    }

    this.util.showLoading();
    await this.alunoMensagemProvider.create(data).then(res => {
      if (res) {
        this.util.showAlert('Atenção', this.messages.create);
        this.navCtrl.pop();
      } else {
        this.util.showAlert('Atenção', this.messages.error);
      }
      this.util.endLoading();
    }, err => this.util.handleServerError(err));
  }

}
