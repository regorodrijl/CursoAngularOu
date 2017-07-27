import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsientoComponent } from './asiento/asiento.component';
import { VolanteComponent } from './volante/volante.component';
import { HabitaculoComponent } from './habitaculo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AsientoComponent, VolanteComponent, HabitaculoComponent],
  exports: [AsientoComponent, VolanteComponent, HabitaculoComponent]
})
export class HabitaculoModule { }
