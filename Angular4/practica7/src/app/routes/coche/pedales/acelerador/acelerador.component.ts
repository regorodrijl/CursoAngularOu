import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-acelerador',
  templateUrl: './acelerador.component.html',
  styleUrls: ['./acelerador.component.css']
})
export class AceleradorComponent implements OnInit {

  @Output()
  acelerar: EventEmitter<void> = new EventEmitter<void>();

  acelerarFunction() {
    this.acelerar.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
