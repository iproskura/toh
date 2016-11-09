import { Component } from '@angular/core';

@Component({
  selector: 'ns-races',
  template: `<h3>Races:</h3>
<button (click)="refreshRaces()">Refresh races list</button>
<div *ngIf="races.length > 0"><p>There is {{races.length}} races</p></div>
<ul>
  <li *ngFor="let race of races; let i=index">{{i+1}}: {{race.name}}</li>
</ul>
<input type="text" #name>
<button (click)="name.focus()">Focus the input</button>
`
})

export class RacesComponent {
  races: any = [];

  refreshRaces() {
    this.races = [
      {name: 'London'},
      {name: 'Lyon'}
    ]
  }

}
