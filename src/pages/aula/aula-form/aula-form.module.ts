import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaFormPage } from './aula-form';

@NgModule({
  declarations: [
    AulaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaFormPage),
  ],
})
export class AulaFormPageModule {}
