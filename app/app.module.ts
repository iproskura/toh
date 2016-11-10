import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PonyRacerAppComponent } from './pony.racer.app.component';
import { RacesComponent } from './races.component';
import { PonyComponent } from "./pony.component";
import { PoniesComponent } from './ponys.component';
import { GreetingComponent } from './greeting.component';

import { ApiService } from './services/api.service';
import { RaceService, FakeRaceService } from './services/race.service';
import { FromNowPipe } from "./fromNow.Pipe";
import { Pony } from "./interfaces/pony.interface";
import { SimpleLogger } from "./directives/loggable.directive";
//TODO import pony iface

const IS_PROD = true;

@NgModule({
  imports: [BrowserModule],
  declarations: [
    PonyRacerAppComponent,
    RacesComponent,
    PonyComponent,
    PoniesComponent,
    GreetingComponent,
    FromNowPipe,
    SimpleLogger
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
