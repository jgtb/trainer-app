import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DashboardPage } from '../../pages/dashboard/dashboard';

import { AuthProvider } from '../../providers/auth/auth';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { AlunoTreinoProvider } from '../../providers/aluno-treino/aluno-treino';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';
import { ExercicioProvider } from '../../providers/exercicio/exercicio';
import { AulaProvider } from '../../providers/aula/aula';
import { RankingProvider } from '../../providers/ranking/ranking';
import { ConfiguracaoProvider } from '../../providers/configuracao/configuracao';

import { Util } from '../../util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: FormGroup;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public authProvider: AuthProvider,
    public alunoProvider: AlunoProvider,
    public alunoTreinoProvider: AlunoTreinoProvider,
    public avaliacaoProvider: AvaliacaoProvider,
    public exercicioProvider: ExercicioProvider,
    public aulaProvider: AulaProvider,
    public rankingProvider: RankingProvider,
    public configuracaoProvider: ConfiguracaoProvider,
    public formBuilder: FormBuilder,
    public util: Util) {
      this.initForm();
    }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  initForm() {
    this.form = this.formBuilder.group({
      login: ['academia', Validators.required],
      password: ['thico215', Validators.required]
    });
  }

  login(data) {
    this.authProvider.login(data).subscribe(res => {
      if (res === -1) {
        this.handlerLoginError();
        return;
      }
      this.util.showLoading();
      this.handlerLoginSuccess(res);
    }, err => {
      this.util.handlerServerError(err);
    });
  }

  handlerLoginError() {}

  handlerLoginSuccess(res) {
    this.util.setLogged();
    this.alunoProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataAluno', res));
    this.alunoTreinoProvider.indexAll(res.id_usuario).subscribe(res => this.util.setStorage('dataAlunoTreino', res));
    // this.avaliacaoProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataAvaliacao', res));
    this.exercicioProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataExercicio', res));
    // this.aulaProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataAula', res));
    // this.rankingProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataRanking', res));
    // this.configuracaoProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataConfiguracao', res));
    this.finishLoginSuccess();
  }

  finishLoginSuccess() {
    setTimeout(() => {
      this.util.endLoading();
      this.open();
    }, 2000);
  }

  open() {
    this.navCtrl.push(DashboardPage, {}, {animate: false});
  }

}
