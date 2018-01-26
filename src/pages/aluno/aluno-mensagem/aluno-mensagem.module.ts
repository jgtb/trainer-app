import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoMensagemPage } from './aluno-mensagem';

@NgModule({
  declarations: [
    AlunoMensagemPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoMensagemPage),
  ],
})
export class AlunoMensagemPageModule {}
