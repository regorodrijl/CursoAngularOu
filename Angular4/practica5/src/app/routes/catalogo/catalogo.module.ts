import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListaComponent } from './lista/lista.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../core/shared/shared.module";
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [CatalogoComponent, BuscarComponent, ListaComponent, NuevoComponent]
})
export class CatalogoModule { }
