import { Component, OnInit } from '@angular/core';

import { Busqueda } from './_data/busqueda.model';

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

  callback() {
    console.log(this.busqueda.value);
  }

}
