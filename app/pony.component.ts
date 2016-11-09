import { Component } from '@angular/core';

@Component({
  selector: 'ns-ponies',
  template: `
<br><button (click)="refreshPonies()">Refresh</button>
<ul>
  <li *ngFor="let pony of ponies | slice:0:size; let isEven=even"
    [style.color]="isEven ? 'green': 'black'">
    {{pony.name}}  
  </li>
</ul>

<p>{{ponies | json}}</p>`
})

export class PoniesComponent {
  size: number = 2;

  ponies: Array<any> = [
    {name: 'Rainbow Dash'},
    {name: 'Pinkie Pie'},
    {name: 'Fluttery'},
    {name: 'Rarity'},
  ];

  refreshPonies() {
    this.ponies = [
      {name: 'Fluttery'},
      {name: 'Rarity'},
      {name: 'Rainbow Dash'},
      {name: 'Pinkie Pie'}
    ];
  }

}
