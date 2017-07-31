import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormToolsService {

  constructor() { }

  mostrarErrores(formulario: FormGroup, controlName: string) {
    let hayErroresMostrar = false;
    const control = this.getControl(formulario, controlName);
    const hayCambios = control.dirty || control.touched;
    if (hayCambios)
      hayErroresMostrar = control.errors != null;

    return hayErroresMostrar;
  }
  getControl(formulario: FormGroup, controlName: string): AbstractControl {
    return formulario.controls[controlName];
  }
}
