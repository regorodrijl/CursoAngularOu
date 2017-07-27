import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { MaleteroModule } from './maletero/maletero.module';
import { HabitaculoModule } from './habitaculo/habitaculo.module';
import { CapoModule } from './capo/capo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CapoModule,
    MaleteroModule,
    HabitaculoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
