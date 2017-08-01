import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalpicaderoComponent } from './salpicadero/salpicadero.component';
import { PedalesComponent } from './pedales/pedales.component';
import { CocheComponent } from './coche.component';
import { MarchaatrasComponent } from './marchaatras/marchaatras.component';
import { AceleradorComponent } from './pedales/acelerador/acelerador.component';
import { FrenoComponent } from './pedales/freno/freno.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SalpicaderoComponent, PedalesComponent,
     MarchaatrasComponent, CocheComponent, AceleradorComponent, FrenoComponent],
  exports: [SalpicaderoComponent, PedalesComponent, MarchaatrasComponent, CocheComponent, AceleradorComponent, FrenoComponent]
})
export class CocheModule { }
