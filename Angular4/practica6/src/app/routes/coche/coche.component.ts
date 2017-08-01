import { Component, OnInit } from '@angular/core';
import { MotorService } from "./motor.service";

@Component({
  selector: 'cat-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  velocidad = 0;

  constructor(private motor: MotorService) { }

  ngOnInit() {
  }

  marchaAtras() {
    this.velocidad = this.motor.marchaAtras();
  }

  acelerar() {
    this.velocidad = this.motor.acelerar();
  }

  frenar() {
    this.velocidad = this.motor.frenar();
  }

}
