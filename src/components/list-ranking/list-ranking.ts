import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-ranking',
  templateUrl: 'list-ranking.html'
})
export class ListRankingComponent {

  @Input('items') items = [];

  constructor() {}

  toggle(index) {
    this.items = this.items.map((e, i) => ({...e, show: i === index ? true : false}));
  }

}
