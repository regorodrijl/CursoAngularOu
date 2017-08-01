import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ValidatorsService {

  constructor() { }

  validador(control: AbstractControl) {
    let error = null;
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0)) {
      error = {'positive': 'Debe ser un número positivo'};
    }
    return error;
  }
  validadorMas10(control: AbstractControl) {
    let error = null;
    if (control.value !== undefined && (isNaN(control.value) || control.value < 10)) {
      error = {'positive': 'Debe ser mayor que 10'};
    }
    return error;
  }
}
