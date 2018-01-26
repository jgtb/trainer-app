import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioPage } from './exercicio';
import { ExercicioFormPageModule } from './exercicio-form/exercicio-form.module';
import { ExercicioViewPageModule } from './exercicio-view/exercicio-view.module';

import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ExercicioPage
  ],
  imports: [
  	ExercicioFormPageModule,
  	ExercicioViewPageModule,
  	PipesModule,
    IonicPageModule.forChild(ExercicioPage),
  ]
})
export class ExercicioPageModule {}
