import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AulaPage } from './aula';
import { AulaFormPageModule } from './aula-form/aula-form.module';
import { AulaViewPageModule } from './aula-view/aula-view.module';

@NgModule({
  declarations: [
    AulaPage,
  ],
  imports: [
  	AulaFormPageModule,
  	AulaViewPageModule,
    IonicPageModule.forChild(AulaPage),
  ],
})
export class AulaPageModule {}
