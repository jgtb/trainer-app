import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoTreinoFormPage } from './aluno-treino-form';

@NgModule({
  declarations: [
    AlunoTreinoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoTreinoFormPage),
  ],
})
export class AlunoTreinoFormPageModule {}
