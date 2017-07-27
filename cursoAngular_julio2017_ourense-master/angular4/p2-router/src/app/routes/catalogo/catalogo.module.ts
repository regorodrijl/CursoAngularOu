import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { BaseComponent } from './base.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  declarations: [CatalogoComponent, NuevoComponent, BaseComponent]
})
export class CatalogoModule { }
