import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

import { AlunoPage } from '../../pages/aluno/aluno';
import { AvaliacaoPage } from '../../pages/avaliacao/avaliacao';
import { ExercicioPage } from '../../pages/exercicio/exercicio';
import { AulaPage } from '../../pages/aula/aula';
import { RankingPage } from '../../pages/ranking/ranking';
import { ConfiguracaoPage } from '../../pages/configuracao/configuracao';

import { DashboardPersistence } from '../../persistences/dashboard/dashboard';

import { Util } from '../../util';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  menu = [];

  counts = {
    aluno: 0,
    avaliacao: 0,
    aula: 0,
    exercicio: 0
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dashboardPersistence: DashboardPersistence,
    public util: Util) {
      this.initMenu();
  }

  async ionViewDidLoad() {
    await this.count('dataAluno').then(res => this.counts.aluno = res);
    await this.count('dataAvaliacao').then(res => this.counts.avaliacao = res);
    await this.count('dataAula').then(res => this.counts.aula = res);
    await this.count('dataExercicio').then(res => this.counts.exercicio = res);
  }

  ionViewDidEnter() {}

  initMenu() {
    this.menu = [
      { title: 'Alunos', component: AlunoPage, icon: 'ios-person'},
      { title: 'Avaliações', component: AvaliacaoPage, icon: 'ios-document'},
      { title: 'Exercícios', component: ExercicioPage, icon: 'ios-body'},
      { title: 'Aulas', component: AulaPage, icon: 'ios-calendar'},
      { title: 'Ranking', component: RankingPage, icon: 'md-podium'},
      { title: 'Configurações', component: ConfiguracaoPage, icon: 'settings'}
    ];
  }

  count(key) {
    return this.dashboardPersistence.count(key);
  }

  open(component) {
    this.navCtrl.push(component, {}, {animate: false});
  }

  async logout() {
    await this.util.setLogout();
    this.navCtrl.push(LoginPage, {}, {animate: false});
  }

}
