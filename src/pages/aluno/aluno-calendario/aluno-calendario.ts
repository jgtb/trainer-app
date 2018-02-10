import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AlunoCalendarioFormPage } from './aluno-calendario-form/aluno-calendario-form';
import { AlunoCalendarioViewPage } from './aluno-calendario-view/aluno-calendario-view';

import { MenuComponent } from '../../../components/menu/menu';

@Component({
  selector: 'page-aluno-calendario',
  templateUrl: 'aluno-calendario.html',
})
export class AlunoCalendarioPage {

  menu = [
    {title: 'Visualizar', icon: 'eye', component: AlunoCalendarioViewPage, class: ''},
    {title: 'Alterar', icon: 'create', component: AlunoCalendarioFormPage, class: ''},
    {title: 'Excluír', icon: 'trash', method: this.delete, class: 'odd-last-menu-item'}
  ];

  aluno: any = {};

  eventSource: any = [];
  title = '';

  calendar = {
    mode: 'month',
    locale: 'en',
    formatDayHeader: 'EEE',
    noEventsLabel: 'Nenhum Treino',
    currentDate: new Date()
  };

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public modalCtrl: ModalController) {
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {
    this.eventSource = this.loadEvents();
  }

  assign(item) {
    return {...item, center: item.description};
  }

  loadEvents() {
    const events = [];

    for (let i = 0; i < 50; i++) {
      let date = new Date();
      let eventType = Math.floor(Math.random() * 2);
      let startDay = Math.floor(Math.random() * 90) - 45;
      let endDay = Math.floor(Math.random() * 2) + startDay;
      let startTime;
      let endTime;

      let startMinute = Math.floor(Math.random() * 24 * 60);
      let endMinute = Math.floor(Math.random() * 180) + startMinute;
      startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
      endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);

      events.push({
          description: 'Event - ' + i,
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false
      });
    }

    return events;
  }

  create() {
    this.navCtrl.push(AlunoCalendarioFormPage, {aluno: this.aluno}, {animate: false});
  }

  delete(item, aluno) {
    console.log('Excluír', aluno);
    console.log('Excluír', item);
  }

  onEventSelected(item) {
    const modal = this.modalCtrl.create(MenuComponent, {aluno: this.aluno, item: this.assign(item), menu: this.menu});
    modal.present();
    modal.onDidDismiss(res => {
      console.log(res);
      if (typeof res != 'undefined') {
        if (res.component) {
          this.navCtrl.push(res.component, {aluno: res.aluno, item: res.item}, {animate: false});
          return
        }
        res.method(res.item, res.aluno);
      }
    });
  }

  onViewTitleChanged(title) {
    this.title = title;
  }

}
