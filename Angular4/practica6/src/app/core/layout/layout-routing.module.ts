import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../../routes/inicio/inicio/inicio.component';
import { CocheComponent } from "../../routes/coche/coche.component";

const routes: Routes = [
   {
    path: '',
    component: InicioComponent
  },
  {
    path:'catalogo',
    loadChildren: '../../routes/catalogo/catalogo.module#CatalogoModule'
  },
  {
    path:'coche',
    component: CocheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
