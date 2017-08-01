import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-pedales',
  templateUrl: './pedales.component.html',
  styleUrls: ['./pedales.component.css']
})
export class PedalesComponent implements OnInit {

  @Output()
  acelerar: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  frenar: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  acelerarFunction() {
    this.acelerar.emit();
  }

  frenarFunction() {
    this.frenar.emit();
  }

}
