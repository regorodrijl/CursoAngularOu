import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'co-marchaatras',
  templateUrl: './marchaatras.component.html',
  styleUrls: ['./marchaatras.component.css']
})
export class MarchaatrasComponent implements OnInit {

  @Output()
  marchaAtras: EventEmitter<void> = new EventEmitter<void>();

  marchaAtrasFunction() {
    this.marchaAtras.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
