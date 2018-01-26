import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoCalendarioViewPage } from './aluno-calendario-view';

@NgModule({
  declarations: [
    AlunoCalendarioViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoCalendarioViewPage),
  ],
})
export class AlunoCalendarioViewPageModule {}
