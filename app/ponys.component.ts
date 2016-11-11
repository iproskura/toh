import { Component } from '@angular/core';
import { Pony } from "./interfaces/pony.interface";

@Component({
  selector: 'ns-ponies',
  styles: ['.red {color: red;}'],
  template: `<div>
  <h2>Ponies</h2>
  <ns-pony class="red" *ngFor="let blah of ponies" [pony]="blah" (ponySelected)="betOnPony($event)"></ns-pony>
  </div>
`
})

export class PoniesComponent {
  size: number = 4;

  ponies: Array<Pony> = [
    {id: 1, name: 'Rainbow Dash'},
    {id: 2, name: 'Pinkie Pie'},
    {id: 3, name: 'Fluttery'},
    {id: 4, name: 'Rarity'},
  ];

  betOnPony(pony: Pony){
    console.log('selecting pony', pony);
  }

  /*refreshPonies() {
    this.ponies = [
      {name: 'Fluttery'},
      {name: 'Rarity'},
      {name: 'Rainbow Dash'},
      {name: 'Pinkie Pie'}
    ];
  }*/

}


/*`<br><button (click)="refreshPonies()">Refresh</button>
 <ul>
   <li *ngFor="let pony of ponies | slice:0:size; let isEven=even"
   [style.color]="isEven ? 'green': 'black'">
   {{pony.name}}
   </li>
 </ul>
 <p>{{ponies | json}}</p>`*/
