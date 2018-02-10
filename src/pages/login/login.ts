import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DashboardPage } from '../../pages/dashboard/dashboard';

import { AuthProvider } from '../../providers/auth/auth';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { ExercicioProvider } from '../../providers/exercicio/exercicio';

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
    public exercicioProvider: ExercicioProvider,
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

  handlerLoginError() {
    console.log('Login Error');
  }

  handlerLoginSuccess(res) {
    this.util.setLogged();
    this.alunoProvider.index(res.id_usuario).subscribe(res => {
      this.util.setStorage('dataAluno', res);
    });
    this.exercicioProvider.index(res.id_usuario).subscribe(res => {
      this.util.setStorage('dataExercicio', res);
    })
    this.finishLoginSuccess();
  }

  finishLoginSuccess() {
    const that = this;
    setTimeout(function() {
      that.util.endLoading();
      that.go();
    }, 1500);
  }

  go() {
    this.navCtrl.push(DashboardPage, {}, {animate: false});
  }

}
