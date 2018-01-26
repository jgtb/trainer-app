import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoCalendarioPage } from './aluno-calendario';

import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localePtPt from '@angular/common/locales/pt-PT';
registerLocaleData(localePtPt);

@NgModule({
  declarations: [
    AlunoCalendarioPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(AlunoCalendarioPage),
  ],
})
export class AlunoCalendarioPageModule {}
