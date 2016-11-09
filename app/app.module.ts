import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PonyRacerAppComponent } from './pony.racer.app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './pony.component';
import { GreetingComponent } from './greeting.component';

import { ApiService } from './services/api.service';
import { RaceService, FakeRaceService } from './services/race.service';
import { FromNowPipe } from "./fromNow.Pipe";

const IS_PROD = true;

@NgModule({
  imports: [BrowserModule],
  declarations: [
    PonyRacerAppComponent,
    RacesComponent,
    PoniesComponent,
    GreetingComponent,
    FromNowPipe
  ],
  providers: [
    ApiService,
    {
      provide: RaceService,
      useClass: IS_PROD ? RaceService : FakeRaceService
    },
    {
      provide: 'RaceServiceToken',
      useClass: RaceService
    }
  ],
  bootstrap: [PonyRacerAppComponent]
})

export class AppModule {

}
