import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AlunoPage } from './aluno';
import { AlunoMensagemPageModule } from './aluno-mensagem/aluno-mensagem.module';
import { AlunoFormPageModule } from './aluno-form/aluno-form.module';
import { AlunoTreinoPageModule } from './aluno-treino/aluno-treino.module';
import { AlunoAvaliacaoPageModule } from './aluno-avaliacao/aluno-avaliacao.module';
import { AlunoCalendarioPageModule } from './aluno-calendario/aluno-calendario.module';
import { AlunoGraficoPageModule } from './aluno-grafico/aluno-grafico.module';

import { MenuComponent } from '../../components/menu/menu';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AlunoPage,
    MenuComponent
  ],
  entryComponents: [
    MenuComponent
  ],
  imports: [
    AlunoMensagemPageModule,
    AlunoFormPageModule,
    AlunoTreinoPageModule,
    AlunoAvaliacaoPageModule,
    AlunoCalendarioPageModule,
    AlunoGraficoPageModule,
    PipesModule,
    IonicPageModule.forChild(AlunoPage),
  ],
})
export class AlunoPageModule {}
