import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsService {

  constructor() { }

  validador(control: AbstractControl) {
    let error = null;
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0)) {
      error = { 'positive': 'Debe ser un número positivo' };
    }
    return error;
  }
}
