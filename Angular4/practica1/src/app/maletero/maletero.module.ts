import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaleteroComponent } from './maletero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaleteroComponent],
  exports: [MaleteroComponent]
})
export class MaleteroModule { }
