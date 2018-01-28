import { NgModule } from '@angular/core';

import { AlunoPipe } from './aluno/aluno';
import { ExercicioPipe } from './exercicio/exercicio';

const PIPES = [
	AlunoPipe,
	ExercicioPipe
];

@NgModule({
	declarations: [PIPES],
	exports: [PIPES]
})
export class PipesModule {}
