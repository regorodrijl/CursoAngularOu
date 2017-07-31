import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cat-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() public busqueda:string;
  @Output() public busquedaChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public callback: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onBusqueda(){
    console.log("estoy");
    this.busquedaChange.emit(this.busqueda);
  }
  
  onCallback(){
    console.log("Emitiendo  onCallback()");
    this.callback.emit();
  }

}
