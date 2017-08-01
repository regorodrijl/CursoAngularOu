import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutModule } from './core/layout/layout.module';
import { MotorService } from "./routes/coche/motor.service";
import { CocheComponent } from "./routes/coche/coche.component";
import { SalpicaderoComponent } from "./routes/coche/salpicadero/salpicadero.component";
import { PedalesComponent } from "./routes/coche/pedales/pedales.component";
import { MarchaatrasComponent } from "./routes/coche/marchaatras/marchaatras.component";
import { AceleradorComponent } from "./routes/coche/pedales/acelerador/acelerador.component";
import { FrenoComponent } from "./routes/coche/pedales/freno/freno.component";

@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    SalpicaderoComponent,
    PedalesComponent,
    AceleradorComponent,
    FrenoComponent,
    MarchaatrasComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [MotorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
