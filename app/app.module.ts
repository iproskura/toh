import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
>>>>>>> master

import { PonyRacerAppComponent } from './pony.racer.app.component';
import { RacesComponent } from './races.component';
import { PonyComponent } from "./pony.component";
import { PoniesComponent } from './ponys.component';
import { GreetingComponent } from './greeting.component';

import { ApiService } from './services/api.service';
import { RaceService, FakeRaceService } from './services/race.service';
import { FromNowPipe } from "./fromNow.Pipe";
<<<<<<< HEAD
import { Pony } from "./interfaces/pony.interface";
import { Race } from "./interfaces/race.interface";
import { SimpleLogger } from "./directives/loggable.directive";
import { RaceServiceWithHttp } from "./services/race.service.http";
import { LocalStorageService } from "./services/localStorage.service";

//TODO import pony iface, TITLE through providers
=======
import { SimpleLogger } from "./directives/loggable.directive";
import { RaceServiceWithHttp } from "./services/race.service.http";
import { LocalStorageService } from "./services/localStorage.service";
import { RegisterFormComponent } from "./register.form.component";
>>>>>>> master

const IS_PROD:boolean = true;

@NgModule({
<<<<<<< HEAD
  imports: [BrowserModule],
=======
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
>>>>>>> master
  declarations: [
    PonyRacerAppComponent,
    RacesComponent,
    PonyComponent,
    PoniesComponent,
    GreetingComponent,
    FromNowPipe,
<<<<<<< HEAD
    SimpleLogger
=======
    SimpleLogger,
    RegisterFormComponent
>>>>>>> master
  ],
  providers: [
    ApiService,
    Title,
    LocalStorageService,
    RaceServiceWithHttp,
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
