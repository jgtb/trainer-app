import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoTreinoViewPage } from './aluno-treino-view';

@NgModule({
  declarations: [
    AlunoTreinoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoTreinoViewPage),
  ],
})
export class AlunoTreinoViewPageModule {}
