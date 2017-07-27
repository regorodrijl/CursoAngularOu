import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorComponent } from './motor/motor.component';
import { CapoComponent } from './capo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MotorComponent, CapoComponent],
  exports: [MotorComponent, CapoComponent]
})
export class CapoModule { }
