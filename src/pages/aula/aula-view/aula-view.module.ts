import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaViewPage } from './aula-view';

@NgModule({
  declarations: [
    AulaViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaViewPage),
  ],
})
export class AulaViewPageModule {}
