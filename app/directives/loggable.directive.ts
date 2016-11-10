import { Directive } from "@angular/core";

@Directive({
  selector: '[loggable]',
  inputs: ['text: logText']
})
export class SimpleLogger {
  set text(value) {
    console.log('logger++ ', value);
  }
}
