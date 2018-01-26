import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoGraficoPage } from './aluno-grafico';

@NgModule({
  declarations: [
    AlunoGraficoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoGraficoPage),
  ],
})
export class AlunoGraficoPageModule {}
