import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  declarations: [CatalogoComponent, BuscarComponent]
})
export class CatalogoModule { }
