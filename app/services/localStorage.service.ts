export class LocalStorageService{
  list() {
    // console.log('FakeRaceService call');
    return [{name: 'localStorage: Londoner'}];
  }

  get(s2: string) {
    return [{name: 'localStorage.get: Londoner'}];
  }
}

export class FakeLocalStorage {
  get() {
    return [{ name: 'Lyon' }, { name: 'London' }];
  }
}
