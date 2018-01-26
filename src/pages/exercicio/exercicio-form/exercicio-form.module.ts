import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExercicioFormPage } from './exercicio-form';

@NgModule({
  declarations: [
    ExercicioFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioFormPage),
  ],
})
export class ExercicioFormPageModule {}
