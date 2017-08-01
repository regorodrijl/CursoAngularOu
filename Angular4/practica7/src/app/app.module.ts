import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocheComponent } from './routes/coche/coche.component';
import { SalpicaderoComponent } from './routes/coche/salpicadero/salpicadero.component';
import { PedalesComponent } from './routes/coche/pedales/pedales.component';
import { AceleradorComponent } from './routes/coche/pedales/acelerador/acelerador.component';
import { FrenoComponent } from './routes/coche/pedales/freno/freno.component';
import { MotorService } from './routes/motor.service';
import { MarchaatrasComponent } from './routes/coche/marchaatras/marchaatras.component';

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
    BrowserModule
  ],
  providers: [MotorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
