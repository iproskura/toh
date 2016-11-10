import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Pony } from "./interfaces/pony.interface";

@Component({
  selector: 'ns-pony',
  inputs: ['pony'],
  outputs: ['ponySelected'],
  template: `<div loggable [logText]="pony.name" (click)="selectPony()">{{pony.id}}: {{pony.name}}</div>`
})
export class PonyComponent {
  // @Ouput() ponySelected = new EventEmitter<Pony();
  // @Input() pony: Pony;
  pony: Pony;

  ponySelected = new EventEmitter<Pony>();

  selectPony() {
    this.ponySelected.emit(this.pony);
  }
}
