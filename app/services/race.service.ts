import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable()
export class RaceService {
  constructor(private apiService: ApiService) {
  }

  list() {
    // return this.apiService.get('/races');
    return [{name: 'true Londoner'}];
  }
}

@Injectable()
export class FakeRaceService{
  list(){
    console.log('FakeRaceService call');
    return [{name: 'fake Londoner'}];
  }
}
