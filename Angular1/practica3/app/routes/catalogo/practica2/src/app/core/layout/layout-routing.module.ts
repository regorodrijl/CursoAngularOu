import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../../routes/inicio/inicio/inicio.component';

const routes: Routes = [
   {
    path: '',
    component: InicioComponent
  },
  {
    path:'catalogo',
    loadChildren: '../../routes/catalogo/catalogo.module#CatalogoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
