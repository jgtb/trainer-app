import { NgModule } from '@angular/core';

import { AuthProvider } from '../providers/auth/auth';
import { AlunoProvider } from '../providers/aluno/aluno';
import { AlunoMensagemProvider } from '../providers/aluno-mensagem/aluno-mensagem';
import { AlunoTreinoProvider } from '../providers/aluno-treino/aluno-treino';
import { AlunoAvaliacaoProvider } from '../providers/aluno-avaliacao/aluno-avaliacao';
import { AlunoCalendarioProvider } from '../providers/aluno-calendario/aluno-calendario';
import { AlunoGraficoProvider } from '../providers/aluno-grafico/aluno-grafico';
import { AulaProvider } from '../providers/aula/aula';
import { AvaliacaoProvider } from '../providers/avaliacao/avaliacao';
import { ExercicioProvider } from '../providers/exercicio/exercicio';
import { RankingProvider } from '../providers/ranking/ranking';
import { ConfiguracaoProvider } from '../providers/configuracao/configuracao';

import { StaticProvider } from '../providers/static/static';

const PROVIDERS = [
	AuthProvider,
	AlunoProvider,
	AlunoMensagemProvider,
	AlunoTreinoProvider,
	AlunoAvaliacaoProvider,
	AlunoCalendarioProvider,
	AlunoGraficoProvider,
	AulaProvider,
	AvaliacaoProvider,
	ExercicioProvider,
	ConfiguracaoProvider,
	RankingProvider,
	StaticProvider
];

@NgModule({
	providers: [PROVIDERS]
})
export class ProvidersModule {}
