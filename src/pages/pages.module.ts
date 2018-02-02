import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AlunoPage } from '../pages/aluno/aluno';
import { AlunoFormPage } from '../pages/aluno/aluno-form/aluno-form';
import { AlunoAvaliacaoPage } from '../pages/aluno/aluno-avaliacao/aluno-avaliacao';
import { AlunoAvaliacaoFormPage } from '../pages/aluno/aluno-avaliacao/aluno-avaliacao-form/aluno-avaliacao-form';
import { AlunoAvaliacaoViewPage } from '../pages/aluno/aluno-avaliacao/aluno-avaliacao-view/aluno-avaliacao-view';
import { AlunoCalendarioPage } from '../pages/aluno/aluno-calendario/aluno-calendario';
import { AlunoCalendarioFormPage } from '../pages/aluno/aluno-calendario/aluno-calendario-form/aluno-calendario-form';
import { AlunoCalendarioViewPage } from '../pages/aluno/aluno-calendario/aluno-calendario-view/aluno-calendario-view';
import { AlunoTreinoPage } from '../pages/aluno/aluno-treino/aluno-treino';
import { AlunoTreinoFormPage } from '../pages/aluno/aluno-treino/aluno-treino-form/aluno-treino-form';
import { AlunoTreinoViewPage } from '../pages/aluno/aluno-treino/aluno-treino-view/aluno-treino-view';
import { AlunoGraficoPage } from '../pages/aluno/aluno-grafico/aluno-grafico';
import { AlunoMensagemPage } from '../pages/aluno/aluno-mensagem/aluno-mensagem';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { AvaliacaoFormPage } from '../pages/avaliacao/avaliacao-form/avaliacao-form';
import { AvaliacaoViewPage } from '../pages/avaliacao/avaliacao-view/avaliacao-view';
import { ExercicioPage } from '../pages/exercicio/exercicio';
import { ExercicioFormPage } from '../pages/exercicio/exercicio-form/exercicio-form';
import { ExercicioViewPage } from '../pages/exercicio/exercicio-view/exercicio-view';
import { AulaPage } from '../pages/aula/aula';
import { AulaFormPage } from '../pages/aula/aula-form/aula-form';
import { AulaViewPage } from '../pages/aula/aula-view/aula-view';
import { RankingPage } from '../pages/ranking/ranking';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';

const PAGES = [
	LoginPage,
	DashboardPage,
	AlunoPage,
	AlunoFormPage,
	AlunoAvaliacaoPage,
	AlunoAvaliacaoFormPage,
	AlunoAvaliacaoViewPage,
	AlunoCalendarioPage,
	AlunoCalendarioFormPage,
	AlunoCalendarioViewPage,
	AlunoTreinoPage,
	AlunoTreinoFormPage,
	AlunoTreinoViewPage,
	AlunoGraficoPage,
	AlunoMensagemPage,
	AvaliacaoPage,
	AvaliacaoFormPage,
	AvaliacaoViewPage,
	ExercicioPage,
	ExercicioFormPage,
	ExercicioViewPage,
	AulaPage,
	AulaFormPage,
	AulaViewPage,
	RankingPage,
	ConfiguracaoPage
];

import { Ng2FileInputModule } from 'ng2-file-input';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { IonicImageLoader } from 'ionic-image-loader';
import { NgCalendarModule  } from 'ionic2-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { ComponentsModule } from '../components/components.module';

const COMPONENTS = [
	NgCalendarModule,
	RoundProgressModule,
	BrowserAnimationsModule,
	CalendarModule.forRoot(),
	IonicImageLoader.forRoot(),
	Ng2FileInputModule.forRoot(),
	ComponentsModule
];

import { PipesModule } from '../pipes/pipes.module';

const PIPES = [
	PipesModule
];

import { ProvidersModule } from '../providers/providers.module';

const PROVIDERS = [
	ProvidersModule
];

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localeEn);

@NgModule({
	declarations: [PAGES],
	entryComponents: [PAGES],
	imports: [
		CommonModule,
		IonicModule,
		COMPONENTS,
		PIPES,
		PROVIDERS
	]
})
export class PagesModule {}
