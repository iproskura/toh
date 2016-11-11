import { TestBed, async } from '@angular/core/testing'
import { RaceService } from "./race.service";
import any = jasmine.any;
// import { RaceService } from "./race.service";

// import { Race } from '../interfaces/race.interface'

describe('RaceService', () => {
  let service: RaceService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RaceService]
  }));

  beforeEach(() => service = TestBed.get(RaceService));

  /*it('should return a promise of 2 races', async(() => {
    service.list().then(races => {
      expect(races.length).toBe(2);
    });
  }));*/

  it('should return races when list() is called', () => {
    expect(service.list().length).toBe(2);
  });
});
