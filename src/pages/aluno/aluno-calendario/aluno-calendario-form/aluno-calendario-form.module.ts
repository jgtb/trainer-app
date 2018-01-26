import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoCalendarioFormPage } from './aluno-calendario-form';

@NgModule({
  declarations: [
    AlunoCalendarioFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoCalendarioFormPage),
  ],
})
export class AlunoCalendarioFormPageModule {}
