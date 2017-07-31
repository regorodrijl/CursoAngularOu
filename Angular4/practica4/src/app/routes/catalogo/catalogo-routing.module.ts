import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from "./catalogo.component";
import { BuscarComponent } from "./buscar/buscar.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent,
    children: [
      {
        path: 'buscar',
        component: BuscarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
