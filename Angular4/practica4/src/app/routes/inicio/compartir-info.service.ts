import { Injectable } from '@angular/core';

@Injectable()
export class CompartirInfoService {
  public edad:number;

  constructor() { }

  setEdad(numero:number){
    this.edad = numero;
  }
  getEdad(){
    return this.edad;
  }

}
