import { TestBed } from '@angular/core/testing'
import { RaceService } from "./race.service";
// import { RaceService } from "./race.service";

// import { Race } from '../interfaces/race.interface'

describe('RaceService', () => {
  let service: RaceService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RaceService]
  }));

  beforeEach(()=> service => TestBed.get(RaceService));

  it('should return races when list() is called', () => {
    expect(service.list().length).toBe(2);
  });
});
