import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicioComponent],
  exports: [InicioComponent]
})
export class InicioModule { }
