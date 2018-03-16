import { Component, Input } from '@angular/core';

@Component({
  selector: 'empty',
  templateUrl: 'empty.html'
})
export class EmptyComponent {

  @Input('count') count = 0;
  @Input('message') message = '';
  @Input('show') _show = true;

  constructor() {}

  show() {
    return this.count === 0 && !this._show;
  }

}
