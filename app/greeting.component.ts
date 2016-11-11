import { Component } from '@angular/core';

@Component({
  selector: 'ns-greeting',
  template: `<h2>{{ asyncGreeting | async }}</h2>
<span>There was   {{ today | fromNow }}</span>`
})

export class GreetingComponent {
  today: Date = new Date(2016, 4, 1 );

  asyncGreeting = new Promise(resolve => {
    window.setTimeout(() => resolve('hello PONY'), 1500);
  })
}
