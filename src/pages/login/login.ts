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
import { AvaliacaoPersistence } from '../../persistences/avaliacao/avaliacao';
import { ExercicioPersistence } from '../../persistences/exercicio/exercicio';
import { AulaPersistence } from '../../persistences/aula/aula';
import { ConfiguracaoPersistence } from '../../persistences/configuracao/configuracao';

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
    public avaliacaoPersistence: AvaliacaoPersistence,
    public exercicioPersistence: ExercicioPersistence,
    public aulaPersistence: AulaPersistence,
    public configuracaoPersistence: ConfiguracaoPersistence,
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

  async login(data) {
    await this.authProvider.login(data).then(async res => {
      if (res == -1) {
        this.util.showAlert('Atenção', 'Login ou senha estão incorretos');
        return;
      }
      this.util.showLoading();
      await this.handleLoginSuccess(res);
    }, err => this.util.handleServerError(err));
  }

  async handleLoginSuccess(res) {
    const usuarioId = res.id_usuario;

    this.util.setLogged()
    this.util.setStorage('usuarioId', usuarioId);

    await this.alunoProvider.index(usuarioId).then(res => this.alunoPersistence.store(res));
    await this.avaliacaoProvider.index(usuarioId).then(res => this.avaliacaoPersistence.store(res));
    await this.exercicioProvider.index(usuarioId).then(res => this.exercicioPersistence.store(res));
    await this.aulaProvider.index(usuarioId).then(res => this.aulaPersistence.store(res));
    // await this.rankingProvider.index(res.id_usuario).then(res => this.util.setStorage('dataRanking', res));
    await this.configuracaoProvider.index(usuarioId).then(res => this.configuracaoPersistence.store(res));

    this.util.endLoading();
    this.goToDashboard();
  }

  goToDashboard() {
    this.navCtrl.push(DashboardPage, {}, {animate: false});
  }

}
