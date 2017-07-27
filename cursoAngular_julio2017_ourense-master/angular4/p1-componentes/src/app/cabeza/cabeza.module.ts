import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza.component';
import { OjoComponent } from './ojo/ojo.component';
import { NarizComponent } from './nariz/nariz.component';
import { BocaComponent } from './boca/boca.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabezaComponent, OjoComponent, NarizComponent, BocaComponent],
  exports: [CabezaComponent]
})
export class CabezaModule { }
