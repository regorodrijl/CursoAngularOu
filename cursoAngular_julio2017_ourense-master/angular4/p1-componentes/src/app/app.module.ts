import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CabezaModule } from './cabeza/cabeza.module';
import { TroncoModule } from './tronco/tronco.module';
import { ExtremidadesModule } from './extremidades/extremidades.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CabezaModule,
    TroncoModule,
    ExtremidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
