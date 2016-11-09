import { Component } from '@angular/core';
import { RaceService } from "./services/race.service";

@Component({
  selector: 'ponyracer-app',
  template: `
    <h1>Hello pony racer</h1>
    <h2>welcome: {{ user.name }}</h2>
    <ns-races></ns-races>
    <ns-ponies></ns-ponies>    
    <p>{{list()[0].name}}</p>
  `
})
export class PonyRacerAppComponent {
  user: any = {name: 'Cedr1L'};

  constructor(private raceService: RaceService) {
  }


  list() {
    return this.raceService.list();
  }
}
