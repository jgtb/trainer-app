import { NgModule } from '@angular/core';

import { AlunoPersistence } from '../persistences/aluno/aluno';
import { AlunoTreinoPersistence } from '../persistences/aluno-treino/aluno-treino';
import { AvaliacaoPersistence } from '../persistences/avaliacao/avaliacao';
import { ExercicioPersistence } from '../persistences/exercicio/exercicio';
import { RankingPersistence } from '../persistences/ranking/ranking';
import { ConfiguracaoPersistence } from '../persistences/configuracao/configuracao';

const PERSISTENCES = [
	AlunoPersistence,
	AlunoTreinoPersistence,
	AvaliacaoPersistence,
	ExercicioPersistence,
	RankingPersistence,
	ConfiguracaoPersistence
];

@NgModule({
	providers: [PERSISTENCES]
})
export class PersistencesModule {}
