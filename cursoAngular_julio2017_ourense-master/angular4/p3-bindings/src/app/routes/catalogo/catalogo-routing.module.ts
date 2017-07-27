import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from 'app/routes/catalogo/base.component';
import { CatalogoComponent } from 'app/routes/catalogo/catalogo.component';
import { NuevoComponent } from 'app/routes/catalogo/nuevo/nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'buscador',
        component: CatalogoComponent
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
