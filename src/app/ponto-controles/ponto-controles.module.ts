import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontoControlesRoutingModule } from './ponto-controles-routing.module';
import { PontoControlesFormComponent } from './ponto-controles-form/ponto-controles-form.component';


@NgModule({
  declarations: [
    PontoControlesFormComponent
  ],
  imports: [
    CommonModule,
    PontoControlesRoutingModule
  ],
  exports: [
    PontoControlesFormComponent
  ]
})
export class PontoControlesModule { }
