import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";


class Race implements Race {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Injectable()
export class RaceService {
  constructor() {
  }

  list() {
    const race1 = new Race('London');
    const race2 = new Race('Lyon');

    // return this.apiService.get('/races');
    return [race1, race2];
  }
}


@Injectable()
export class FakeRaceService {
  list() {
    // console.log('FakeRaceService call');
    return [{name: 'fake Londoner'}];
  }
}
