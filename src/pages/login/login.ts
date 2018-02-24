import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DashboardPage } from '../../pages/dashboard/dashboard';

import { AuthProvider } from '../../providers/auth/auth';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';
import { ExercicioProvider } from '../../providers/exercicio/exercicio';
import { AulaProvider } from '../../providers/aula/aula';
import { RankingProvider } from '../../providers/ranking/ranking';
import { ConfiguracaoProvider } from '../../providers/configuracao/configuracao';

import { AlunoPersistence } from '../../persistences/aluno/aluno';

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
    public avaliacaoProvider: AvaliacaoProvider,
    public exercicioProvider: ExercicioProvider,
    public aulaProvider: AulaProvider,
    public rankingProvider: RankingProvider,
    public configuracaoProvider: ConfiguracaoProvider,
    public alunoPersistence: AlunoPersistence,
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
      if (res == -1) {
        this.util.showAlert('Atenção', 'Login ou senha estão incorretos');
        return;
      }
      this.util.showLoading();
      this.handleLoginSuccess(res);
    }, err => this.util.handlerServerError(err));
  }

  handleLoginSuccess(res) {
    const usuarioId = res.id_usuario;

    this.util.setLogged();
    this.util.setStorage('usuarioId', usuarioId);
    this.alunoProvider.index(usuarioId).subscribe(res => {
      this.alunoPersistence.store(res);
      this.avaliacaoProvider.index(usuarioId).subscribe(res => this.util.setStorage('dataAvaliacao', res));
      this.exercicioProvider.index(usuarioId).subscribe(res => this.util.setStorage('dataExercicio', res));
      this.aulaProvider.index(usuarioId).subscribe(res => this.util.setStorage('dataAula', res));
      // this.rankingProvider.index(res.id_usuario).subscribe(res => this.util.setStorage('dataRanking', res));
      this.configuracaoProvider.index(usuarioId).subscribe(res => this.util.setStorage('dataConfiguracao', res));
      this.util.endLoading();
      this.goToDashboard();
    });
  }

  goToDashboard() {
    this.navCtrl.push(DashboardPage, {}, {animate: false});
  }

}
