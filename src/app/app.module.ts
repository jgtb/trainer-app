import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { PagesModule } from '../pages/pages.module';
import { ProvidersModule } from '../providers/providers.module';

import { Util } from '../util';
import { AlunoTreinoProvider } from '../providers/aluno-treino/aluno-treino';
import { AlunoAvaliacaoProvider } from '../providers/aluno-avaliacao/aluno-avaliacao';
import { AlunoCalendarioProvider } from '../providers/aluno-calendario/aluno-calendario';
import { AlunoGraficoProvider } from '../providers/aluno-grafico/aluno-grafico';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ProvidersModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Util,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlunoTreinoProvider,
    AlunoAvaliacaoProvider,
    AlunoCalendarioProvider,
    AlunoGraficoProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
