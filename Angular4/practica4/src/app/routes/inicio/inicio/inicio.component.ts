import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CompartirInfoService } from "../compartir-info.service";

@Component({
  selector: 'cat-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(
    public compartirInfo: CompartirInfoService
  ) { }

  ngOnInit() {
    console.log("Valor anterior " + this.compartirInfo.edad);
    this.compartirInfo.setEdad(2);
    console.log("Inicio pone:" + this.compartirInfo.edad);
  }
}
