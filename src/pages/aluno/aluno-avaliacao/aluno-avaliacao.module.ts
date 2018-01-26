import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AlunoAvaliacaoPage } from './aluno-avaliacao';
import { AlunoAvaliacaoFormPage } from './aluno-avaliacao-form/aluno-avaliacao-form';
import { AlunoAvaliacaoViewPage } from './aluno-avaliacao-view/aluno-avaliacao-view';

@NgModule({
  declarations: [
    AlunoAvaliacaoPage,
    AlunoAvaliacaoFormPage,
    AlunoAvaliacaoViewPage
  ],
  entryComponents: [
    AlunoAvaliacaoFormPage,
    AlunoAvaliacaoViewPage
  ],
  imports: [
    IonicPageModule.forChild(AlunoAvaliacaoPage),
  ],
})
export class AlunoAvaliacaoPageModule {}
