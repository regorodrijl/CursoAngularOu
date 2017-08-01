import { Component, OnInit } from '@angular/core';
import { Busqueda } from "./-data/busqueda.model";

@Component({
  selector: 'cat-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public busqueda: Busqueda;

  constructor() { }

  ngOnInit() {
    this.busqueda = new Busqueda('');
  }
  
  funcionCallback(){
    console.log("Valos de Busqueda->", this.busqueda.value );
  }
}
