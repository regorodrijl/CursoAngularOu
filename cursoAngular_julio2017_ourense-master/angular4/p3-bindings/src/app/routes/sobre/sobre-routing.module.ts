import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreComponent } from 'app/routes/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreRoutingModule { }
