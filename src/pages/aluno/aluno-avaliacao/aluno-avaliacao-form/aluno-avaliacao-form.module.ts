import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoAvaliacaoFormPage } from './aluno-avaliacao-form';

@NgModule({
  declarations: [
    AlunoAvaliacaoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoAvaliacaoFormPage),
  ],
})
export class AlunoAvaliacaoFormPageModule {}
