import { NgModule } from '@angular/core';

import { AuthProvider } from '../providers/auth/auth';
import { AlunoProvider } from '../providers/aluno/aluno';
import { AulaProvider } from '../providers/aula/aula';
import { AvaliacaoProvider } from '../providers/avaliacao/avaliacao';
import { ExercicioProvider } from '../providers/exercicio/exercicio';
import { ConfiguracaoProvider } from '../providers/configuracao/configuracao';

@NgModule({
	providers: [
		AuthProvider,
		AlunoProvider,
    AulaProvider,
    AvaliacaoProvider,
    ExercicioProvider,
    ConfiguracaoProvider
	]
})
export class ProvidersModule {}
