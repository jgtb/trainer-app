import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoFormPage } from './aluno-form';

@NgModule({
  declarations: [
    AlunoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoFormPage),
  ],
})
export class AlunoFormPageModule {}
