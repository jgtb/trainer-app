import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { LoginPageModule } from '../pages/login/login.module';
import { DashboardPageModule} from '../pages/dashboard/dashboard.module';
import { AlunoPageModule } from '../pages/aluno/aluno.module';
import { AvaliacaoPageModule } from '../pages/avaliacao/avaliacao.module';
import { ExercicioPageModule } from '../pages/exercicio/exercicio.module';
import { AulaPageModule } from '../pages/aula/aula.module';
import { RankingPageModule } from '../pages/ranking/ranking.module';
import { ConfiguracaoPageModule } from '../pages/configuracao/configuracao.module';

import { Ng2FileInputModule } from 'ng2-file-input';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { IonicImageLoader } from 'ionic-image-loader';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		LoginPageModule,
		DashboardPageModule,
		AlunoPageModule,
		AvaliacaoPageModule,
		ExercicioPageModule,
		AulaPageModule,
		RankingPageModule,
		ConfiguracaoPageModule,
		RoundProgressModule,
		IonicImageLoader.forRoot(),
		Ng2FileInputModule.forRoot(),
	]
})
export class PagesModule {}
