import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormToolsService } from '../../../core/shared/forms/form-tools.service';
import { ValidatorsService } from '../../../core/shared/forms/validators.service';

import { Elemento } from '../-data/elemento.model';

@Component({
  selector: 'cat-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  public elemento: Elemento;
  public nuevoForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
    public toolService: FormToolsService) { }

  ngOnInit() {
    this.crearNuevoElemento();
    this.construirFormulario();
  }

  crearNuevoElemento() {
    this.elemento = new Elemento('', '', '', null, null);
  }

  construirFormulario() {
    const controls = this.inicializarControles();
    this.nuevoForm = this.formBuilder.group(controls);
  }

  inicializarControles() {
    const controls = {
      titulo: [
        this.elemento.titulo,
        Validators.required
      ],
      autor: [
        this.elemento.autor,
        Validators.required
      ],
      email: [
        this.elemento.email,
        Validators.required
      ],
      anho: [
        this.elemento.anho, [
          Validators.required,
          this.validatorsService.validador
        ]
      ],
      numero: [
        this.elemento.numero, [
          Validators.required,
          this.validatorsService.validadorMas10]
      ],
    };
    return controls;
  }

  mustShowErrors(controlName: string) {
    return this.toolService.mostrarErrores(this.nuevoForm, controlName);
  }

  getControl(controlName: string): AbstractControl {
    return this.nuevoForm.controls[controlName];
  }

  getControlErrors(controlName: string): string {
    let controlErrors = '';
    const control = this.getControl(controlName);
    if (control && control.errors) {
      Object.keys(control.errors).forEach(error => {
        controlErrors += error;
      });
    }
    return controlErrors;
  }

  eventoCambio() {
    console.log("Valor form: ", this.nuevoForm.value);
  }

}