import { Component } from '@angular/core';
import { RaceService } from "./services/race.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'ponyracer-app',
  template: `    
    <ns-greeting></ns-greeting>
    <h2>welcome: {{ user.name }}</h2>
    <ns-races></ns-races>
    <ns-ponies></ns-ponies>    
    <p>{{list() | json}}</p> `,
  viewProviders: [Title]
})
export class PonyRacerAppComponent {
  user: any = {name: 'Cedr1L'};

  constructor(private raceService: RaceService, title: Title) {
    title.setTitle('Pooony racer');
  }


  list() {
    return this.raceService.list();
  }
}
