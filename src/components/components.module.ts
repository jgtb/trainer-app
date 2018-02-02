import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MenuComponent } from './menu/menu';
import { ListRankingComponent } from './list-ranking/list-ranking';
import { InfoComponent } from './info/info';
import { SlidesAvaliacaoFormComponent } from './slides-avaliacao-form/slides-avaliacao-form';
import { SlidesTreinoFormComponent } from './slides-treino-form/slides-treino-form';

const COMPONENTS = [
  MenuComponent,
  ListRankingComponent,
  InfoComponent,
  SlidesAvaliacaoFormComponent,
  SlidesTreinoFormComponent
];

@NgModule({
  declarations: [
		COMPONENTS
	],
  exports: [
		COMPONENTS
	],
  imports: [
    IonicModule.forRoot(MenuComponent),
		IonicModule.forRoot(ListRankingComponent),
		IonicModule.forRoot(InfoComponent),
    IonicModule.forRoot(SlidesAvaliacaoFormComponent),
		IonicModule.forRoot(SlidesTreinoFormComponent)
  ]
})
export class ComponentsModule {}
