import { NgModule } from '@angular/core';
import { AlunoPipe } from './aluno/aluno';
import { AvaliacaoPipe } from './avaliacao/avaliacao';
import { ExercicioPipe } from './exercicio/exercicio';

@NgModule({
	declarations: [
		AlunoPipe,
    	AvaliacaoPipe,
    	ExercicioPipe
	],
	imports: [],
	exports: [
		AlunoPipe,
    	AvaliacaoPipe,
    	ExercicioPipe
	]
})
export class PipesModule {}
