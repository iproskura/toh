import { Component } from '@angular/core';

@Component({
  selector: 'ns-ponies',
  template: `
<br><button (click)="refreshPonies()">Refresh</button>
<ul>
  <li *ngFor="let pony of ponies; let isEven=even"
    [style.color]="isEven ? 'green': 'black'">
    {{pony.name}}  
  </li>
</ul>`
})

export class PoniesComponent {
  ponies: Array<any> = [
    {name: 'Rainbow Dash'},
    {name: 'Pinkie Pie'}
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
