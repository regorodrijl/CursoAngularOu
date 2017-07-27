import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { BaseComponent } from './base.component';
import { ListaComponent } from './lista/lista.component';

import { FormsModule} from '@angular/forms';

import { SharedModule } from 'app/core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [CatalogoComponent, NuevoComponent, BaseComponent, ListaComponent]
})
export class CatalogoModule { }
