import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MotorService {

  private velocidad$: BehaviorSubject<number>;
  private velocidad;

  constructor() {
    this.velocidad = 0;
    this.velocidad$ = new BehaviorSubject(this.velocidad);
    this.emitirVelocidad();
  }

  marchaAtras() {
    if (this.velocidad <= 0) {
      this.velocidad--;
      this.emitirVelocidad();
    }
    return this.velocidad;
  }

  acelerar() {
    this.velocidad++;
    this.emitirVelocidad();
    return this.velocidad;
  }

  frenar() {
    if (this.velocidad > 0) {
      this.velocidad--;
      this.emitirVelocidad();
    }
    return this.velocidad;
  }

  private emitirVelocidad() {
    this.velocidad$.next(this.velocidad);
  }

  getVelocidad$(): Observable<number> {
    return this.velocidad$.asObservable();
  }

}