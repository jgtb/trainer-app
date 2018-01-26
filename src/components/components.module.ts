import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MenuComponent } from './menu/menu';

@NgModule({
	declarations: [MenuComponent],
	imports: [CommonModule],
	exports: [MenuComponent],
	entryComponents: [MenuComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
