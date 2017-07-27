import { Component, OnInit } from '@angular/core';

import { Empresa } from './_data/empresa.model';

@Component({
  selector: 'cat-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  public titulo: string;
  public empresa: Empresa;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Datos de la empresa';
    this.empresa = new Empresa('Empresa','España');
  }

}
