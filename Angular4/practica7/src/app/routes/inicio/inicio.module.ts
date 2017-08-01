import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CompartirInfoService } from "./compartir-info.service";
import { MinionComponent } from './minion/minion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicioComponent, MinionComponent],
  exports: [InicioComponent],
  providers:[CompartirInfoService]
})
export class InicioModule { }
