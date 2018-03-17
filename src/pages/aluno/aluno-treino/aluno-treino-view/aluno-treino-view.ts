import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { AlunoTreinoProvider } from '../../../../providers/aluno-treino/aluno-treino';

import { AlunoTreinoPersistence } from '../../../../persistences/aluno-treino/aluno-treino';

import { Util } from '../../../../util';

@Component({
  selector: 'page-aluno-treino-view',
  templateUrl: 'aluno-treino-view.html',
})
export class AlunoTreinoViewPage {

  title = '';

  treino: any = {};
  aluno: any = {};

  emptyMessage = 'Nenhum Exercício encontrado...';

  showList = true;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public alunoTreinoProvider: AlunoTreinoProvider,
    public alunoTreinoPersistence: AlunoTreinoPersistence,
    public youtubeVideoPlayer: YoutubeVideoPlayer,
    public util: Util) {
      this.aluno = this.navParams.get('aluno');
      this.treino = this.navParams.get('item');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  store(res) {
    this.treino = res;
  }

  openVideo(item) {
    this.youtubeVideoPlayer.openVideo(this.getVideoId(item));
  }

  getVideoId(item) {
    return item.idExercicio.video.split('/').reverse()[0];
  }

  setTitle() {
    this.title = this.treino.descricao;
  }

  src(treino) {
    return `http://fit.nexur.com.br/exercicios/${treino.idExercicio.id_exercicio}-0.gif`;
  }

  async refresh($event) {
    await this.alunoTreinoProvider.view(this.treino.id_serie).then(async res => {
      await this.alunoTreinoPersistence.save(this.aluno.id_aluno, res);
      this.store(res);
      $event.complete();
    }, err => this.util.handleServerError(err));
  }

}
