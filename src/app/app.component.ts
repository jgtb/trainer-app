import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { Util } from '../util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public util: Util) {
    platform.ready().then(() => {
      this.setRoot();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  setRoot() {
    if (this.util.isLogged()) {
      this.rootPage = DashboardPage;
    }

    this.rootPage = LoginPage;
  }
}
