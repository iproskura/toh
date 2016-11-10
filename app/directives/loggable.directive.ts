import { Directive } from "@angular/core";

@Directive({
  selector: '[loggable]',
  inputs: ['text: logText']
})
export class SimpleLogger {
  set text(value: string) {
    console.log('logger++ ', value);
  }
}
