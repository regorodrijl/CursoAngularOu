import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormToolsService } from "./forms/form-tools.service";
import { ValidatorsService } from "./forms/validators.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    FormToolsService,
    ValidatorsService
  ],
  exports:[ReactiveFormsModule],
  declarations: []
})
export class SharedModule {ReactiveFormsModule }
