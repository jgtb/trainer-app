import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MenuComponent } from './menu/menu';
import { ListRankingComponent } from './list-ranking/list-ranking';
import { InfoComponent } from './info/info';
import { SlidesAvaliacaoFormComponent } from './slides-avaliacao-form/slides-avaliacao-form';
import { SlidesTreinoFormComponent } from './slides-treino-form/slides-treino-form';
import { EmptyComponent } from './empty/empty';

const COMPONENTS = [
  MenuComponent,
  ListRankingComponent,
  InfoComponent,
  SlidesAvaliacaoFormComponent,
  SlidesTreinoFormComponent,
  EmptyComponent
];

import { IonicImageLoader } from 'ionic-image-loader';

const MODULES = [
  IonicImageLoader.forRoot(),
  IonicModule.forRoot(MenuComponent),
  IonicModule.forRoot(ListRankingComponent),
  IonicModule.forRoot(InfoComponent),
  IonicModule.forRoot(SlidesAvaliacaoFormComponent),
  IonicModule.forRoot(SlidesTreinoFormComponent)
];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [MODULES],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
