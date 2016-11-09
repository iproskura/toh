import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello pony racer</h1>
    <h2>welcome: {{ user.name }}</h2>
    <ns-races></ns-races>
  `
})
export class PonyRacerAppComponent {
  user: any = {name: 'Cedr1L'};
}
