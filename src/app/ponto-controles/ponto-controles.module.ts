import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { PontoControlesRoutingModule } from './ponto-controles-routing.module';
import { PontoControlesFormComponent } from './ponto-controles-form/ponto-controles-form.component';


@NgModule({
  declarations: [
    PontoControlesFormComponent
  ],
  imports: [
    CommonModule,
    PontoControlesRoutingModule,
    FormsModule
  ],
  exports: [
    PontoControlesFormComponent
  ]
})
export class PontoControlesModule { }
