import { Injectable } from '@angular/core';
import { LocalStorageService } from "./localStorage.service";


class Race implements Race {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class FakeLocalStorage {
  get() {
    return [
      {name: "Fake Lion"},
      {name: 'Fake London'}
    ];
  }
}

@Injectable()
export class RaceService {
  constructor(private localStorage: LocalStorageService) {
  }
  list() {
    return this.localStorage.get('races');
        // return [{name: 'RaceSrvc Londoner'}];
  }
}

//--------------------------------------------------
@Injectable()
export class FakeRaceService {
  list() {
    // console.log('FakeRaceService call');
    return [{name: 'fake Londoner'}];
  }
}
