import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExercicioViewPage } from './exercicio-view';

@NgModule({
  declarations: [
    ExercicioViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioViewPage),
  ],
})
export class ExercicioViewPageModule {}
