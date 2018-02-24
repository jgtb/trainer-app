import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

import { AlunoPage } from '../../pages/aluno/aluno';
import { AvaliacaoPage } from '../../pages/avaliacao/avaliacao';
import { ExercicioPage } from '../../pages/exercicio/exercicio';
import { AulaPage } from '../../pages/aula/aula';
import { RankingPage } from '../../pages/ranking/ranking';
import { ConfiguracaoPage } from '../../pages/configuracao/configuracao';

import { Util } from '../../util';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  menu = [];

  show = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public util: Util) {
      this.initMenu();
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {}

  initMenu() {
    this.menu = [
      { title: 'Alunos', component: AlunoPage, icon: 'ios-person', class: '' },
      { title: 'Avaliações', component: AvaliacaoPage, icon: 'ios-document', class: '' },
      { title: 'Exercícios', component: ExercicioPage, icon: 'ios-body', class: '' },
      { title: 'Aulas', component: AulaPage, icon: 'ios-calendar', class: '' },
      { title: 'Ranking', component: RankingPage, icon: 'md-podium', class: '' },
      { title: 'Configurações', component: ConfiguracaoPage, icon: 'settings', class: !this.show ? 'odd-last-menu-item' : '' }
    ];

    if (!this.show)
      this.menu.splice(4, 1);
  }

  open(component) {
    this.navCtrl.push(component, {}, {animate: false});
  }

  count(key) {
    return this.util.getStorage(key).length;
  }

  logout() {
    this.util.setLogout();
    this.navCtrl.push(LoginPage, {}, {animate: false});
  }

}
