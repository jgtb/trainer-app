import { NgModule } from '@angular/core';

import { DashboardPersistence } from '../persistences/dashboard/dashboard';
import { AlunoPersistence } from '../persistences/aluno/aluno';
import { AlunoTreinoPersistence } from '../persistences/aluno-treino/aluno-treino';
import { AvaliacaoPersistence } from '../persistences/avaliacao/avaliacao';
import { ExercicioPersistence } from '../persistences/exercicio/exercicio';
import { AulaPersistence } from '../persistences/aula/aula';
import { RankingPersistence } from '../persistences/ranking/ranking';
import { ConfiguracaoPersistence } from '../persistences/configuracao/configuracao';

const PERSISTENCES = [
	DashboardPersistence,
	AlunoPersistence,
	AlunoTreinoPersistence,
	AvaliacaoPersistence,
	ExercicioPersistence,
	AulaPersistence,
	RankingPersistence,
	ConfiguracaoPersistence
];

@NgModule({
	providers: [PERSISTENCES]
})
export class PersistencesModule {}
