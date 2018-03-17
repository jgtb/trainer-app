import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { Util } from '../../../util';

@Component({
  selector: 'page-configuracao-modal',
  templateUrl: 'configuracao-modal.html',
})
export class ConfiguracaoModalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
