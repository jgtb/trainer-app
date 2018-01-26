import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AvaliacaoPage } from './avaliacao';
import { AvaliacaoFormPageModule } from './avaliacao-form/avaliacao-form.module';
import { AvaliacaoViewPageModule } from './avaliacao-view/avaliacao-view.module';

@NgModule({
  declarations: [
    AvaliacaoPage,
  ],
  imports: [
  	AvaliacaoFormPageModule,
  	AvaliacaoViewPageModule,
    IonicPageModule.forChild(AvaliacaoPage),
  ],
})
export class AvaliacaoPageModule {}
