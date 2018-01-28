import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MenuComponent } from './menu/menu';
import { ListRankingComponent } from './list-ranking/list-ranking';
import { InfoComponent } from './info/info';

@NgModule({
  declarations: [
		MenuComponent,
		ListRankingComponent,
		InfoComponent
	],
  exports: [
		MenuComponent,
		ListRankingComponent,
		InfoComponent
	],
  imports: [
    IonicModule.forRoot(MenuComponent),
		IonicModule.forRoot(ListRankingComponent),
		IonicModule.forRoot(InfoComponent)
  ]
})
export class ComponentsModule {}
