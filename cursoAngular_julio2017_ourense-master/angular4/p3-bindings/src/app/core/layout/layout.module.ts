import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

import { InicioModule } from 'app/routes/inicio/inicio.module';
import { SobreModule } from 'app/routes/sobre/sobre.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    InicioModule,
    SobreModule
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent],
  exports: [ShellComponent]
})
export class LayoutModule { }
