import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { RaceService } from "./services/race.service";

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(
    appRef => playWithInjector(appRef.injector)
  );

function playWithInjector(inj: any){
  /*console.log('playWithInjector(inj)');
  console.log(inj.get(RaceService));
  console.log(inj.get('RaceServiceToken'));
  console.log(inj.get(RaceService) === inj.get(RaceService));
  console.log(inj.get(RaceService) === inj.get('RaceServiceToken'));*/
}
