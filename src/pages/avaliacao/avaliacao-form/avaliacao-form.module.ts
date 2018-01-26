import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvaliacaoFormPage } from './avaliacao-form';

@NgModule({
  declarations: [
    AvaliacaoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AvaliacaoFormPage),
  ],
})
export class AvaliacaoFormPageModule {}
