import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Util } from '../../../../util';

@Component({
  selector: 'page-aluno-avaliacao-view',
  templateUrl: 'aluno-avaliacao-view.html',
})
export class AlunoAvaliacaoViewPage {

  title = '';

  avaliacao: any = {};
  aluno: any = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public util: Util) {
      this.aluno = this.navParams.get('aluno');
  		this.avaliacao = this.navParams.get('item');
  }

  ionViewDidLoad() {
  	this.setTitle();
  }

  ionViewDidEnter() {}

  isTipoPergunta(id, ...values) {
    return [...values].some(e => e === id);
  }

  unserializeToFile(resposta) {
    return this.util.unserialize(resposta)[0];
  }

  unserializeToText(resposta) {
    const arr = this.util.unserialize(resposta);

    return arr.join(', ');
  }

  getResposta(pergunta) {
    const res = this.avaliacao.respostas.find(e => e.id_pergunta === pergunta.id_pergunta);

    if (res) {
      if (this.isTipoPergunta(pergunta.id_tipo_pergunta, '1', '2', '5')) {
        return res.resposta;
      }
      if (this.isTipoPergunta(pergunta.id_tipo_pergunta, '3')) {
        return this.unserializeToText(res.resposta);
      }
      if (this.isTipoPergunta(pergunta.id_tipo_pergunta, '4')) {
        return `<img src="http://localhost/personal/web/imgs-avaliacao/7-33.png">`;
        //return `<img src="${this.util.baseUrl}imgs-avaliacao/${this.unserializeToFile(res.resposta)}">`;
      }
    }
  }

  setTitle() {
    this.title = this.avaliacao.descricao;
  }

}
