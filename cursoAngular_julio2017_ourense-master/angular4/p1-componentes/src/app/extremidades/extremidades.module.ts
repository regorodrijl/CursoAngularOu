import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrazoComponent } from './brazo/brazo.component';
import { PiernaComponent } from './pierna/pierna.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrazoComponent, PiernaComponent],
  exports: [BrazoComponent, PiernaComponent]
})
export class ExtremidadesModule { }
