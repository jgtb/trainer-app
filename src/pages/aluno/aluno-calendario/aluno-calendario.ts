import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aluno-calendario',
  templateUrl: 'aluno-calendario.html',
})
export class AlunoCalendarioPage {

  aluno: any = {};

  eventSource: any = [];
  title = '';

  calendar = {
    mode: 'month',
    locale: 'pt-PT',
    formatDayHeader: 'EEE',
    noEventsLabel: 'Nenhum Treino',
    currentDate: new Date()
  };

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {
      this.aluno = this.navParams.get('aluno');
  }

  ionViewDidLoad() {
    this.eventSource = this.loadEvents();
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
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false
      });
    }

    return events;
  }

  onViewTitleChanged(title) {
    this.title = title;
  }

}
