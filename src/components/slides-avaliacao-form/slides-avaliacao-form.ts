import { Component } from '@angular/core';

@Component({
  selector: 'slides-avaliacao-form',
  templateUrl: 'slides-avaliacao-form.html'
})
export class SlidesAvaliacaoFormComponent {

  items = [
  	{id: 1, title: 'Objetiva', icon: 'create'},
  	{id: 2, title: 'Múltipla Escolha', icon: 'create'},
  	{id: 3, title: 'Descritiva', icon: 'create'},
  	{id: 4, title: 'Texto Longo', icon: 'create'},
  	{id: 5, title: 'Imagem & Arquivo', icon: 'create'}
  ];

  constructor() {}

}
