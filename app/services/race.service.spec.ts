import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from "./localStorage.service";
import { RaceService } from "./race.service";

describe('RaceService', () => {
  const localStorage = jasmine.createSpyObj('LocalStorageService', ['get']);
  beforeEach(() => TestBed.configureTestingModule({

    providers: [
      {
        provide: LocalStorageService,
        useValue: localStorage
      },
      RaceService
    ]
  }));

  it('should return 2 races from localStorage', () => {
    localStorage.get.and.returnValue([{name: 'Lyon'}, {name: 'London'}]);

    const service = TestBed.get(RaceService);
    const races = service.list();

    expect(races.length).toBe(2);
    expect(localStorage.get).toHaveBeenCalledWith('races');
  });
});
