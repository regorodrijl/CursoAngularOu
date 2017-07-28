import { Component, OnInit } from '@angular/core';
import { Empresa } from "./-data/empresa.model";

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  public titulo:string;
  public empresa:Empresa;

  constructor() { }

  ngOnInit() {
    this.titulo="Datos de la empresa";
    this.empresa= new Empresa('PLEXUS','España');
  }

}
