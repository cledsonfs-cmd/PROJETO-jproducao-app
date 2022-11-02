import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumoSetoresRoutingModule } from './consumo-setores-routing.module';
import { ConsumoSetoresFormComponent } from './consumo-setores-form/consumo-setores-form.component';


@NgModule({
  declarations: [
    ConsumoSetoresFormComponent
  ],
  imports: [
    CommonModule,
    ConsumoSetoresRoutingModule
  ],
  exports: [
    ConsumoSetoresFormComponent
  ]
})
export class ConsumoSetoresModule { }
