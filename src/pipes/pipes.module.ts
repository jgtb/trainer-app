import { NgModule } from '@angular/core';

import { AlunoPipe } from './aluno/aluno';
import { ExercicioPipe } from './exercicio/exercicio';

@NgModule({
	declarations: [
		AlunoPipe,
    ExercicioPipe
	],
	imports: [],
	exports: [
		AlunoPipe,
    ExercicioPipe
	]
})
export class PipesModule {}
