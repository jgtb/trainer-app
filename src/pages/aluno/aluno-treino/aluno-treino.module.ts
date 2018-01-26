import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoTreinoPage } from './aluno-treino';

import { AlunoTreinoFormPage } from './aluno-treino-form/aluno-treino-form';
import { AlunoTreinoViewPage } from './aluno-treino-view/aluno-treino-view';

@NgModule({
  declarations: [
    AlunoTreinoPage,
    AlunoTreinoFormPage,
    AlunoTreinoViewPage
  ],
  entryComponents: [
    AlunoTreinoFormPage,
    AlunoTreinoViewPage
  ],
  imports: [
    IonicPageModule.forChild(AlunoTreinoPage),
  ],
})
export class AlunoTreinoPageModule {}
