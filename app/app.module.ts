import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PonyRacerAppComponent } from './pony.racer.app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './pony.component';

import { ApiService } from './services/api.service';
import { RaceService } from './services/race.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    PonyRacerAppComponent,
    RacesComponent,
    PoniesComponent],
  providers: [
    ApiService,
    RaceService
  ],
  bootstrap: [PonyRacerAppComponent]
})

export class AppModule {

}
