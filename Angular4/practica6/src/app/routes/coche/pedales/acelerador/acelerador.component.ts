import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'co-acelerador',
  templateUrl: './acelerador.component.html',
  styleUrls: ['./acelerador.component.css']
})
export class AceleradorComponent implements OnInit {

  @Output() acelerar: EventEmitter<void> = new EventEmitter<void>();
  constructor() {
    this.acelerar.emit();
  }

  ngOnInit() {
  }

}
