import { Component } from '@angular/core';

@Component({
  selector: 'ponyracer-app',
  template: `
    <h1>Hello pony racer</h1>
    <h2>welcome: {{ user.name }}</h2>
    <ns-races></ns-races>
    <ns-ponies></ns-ponies>
  `
})
export class PonyRacerAppComponent {
  user: any = {name: 'Cedr1L'};
}
