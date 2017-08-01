import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from "./catalogo.component";
import { BuscarComponent } from "./buscar/buscar.component";
import { NuevoComponent } from "./nuevo/nuevo.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent,
    children: [
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'nuevo',
        component: NuevoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
