import { Component } from '@angular/core';
import { RaceService, FakeRaceService } from "./services/race.service";

@Component({
  selector: 'ns-races',
  providers: [{provide: RaceService, useClass: FakeRaceService}],
  template: `<p>{{list() | json}}</p>
`
})

export class RacesComponent {
  races: any = [];

  constructor(private raceService: RaceService){
  }

  list(){
    return this.raceService.list();
  }

  refreshRaces() {
    this.races = [
      {name: 'London'},
      {name: 'Lyon'}
    ]
  }
}
