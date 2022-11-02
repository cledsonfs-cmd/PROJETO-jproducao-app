import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ConsumoSetoresRoutingModule } from './consumo-setores-routing.module';
import { ConsumoSetoresFormComponent } from './consumo-setores-form/consumo-setores-form.component';


@NgModule({
  declarations: [
    ConsumoSetoresFormComponent
  ],
  imports: [
    CommonModule,
    ConsumoSetoresRoutingModule,
    FormsModule
  ],
  exports: [
    ConsumoSetoresFormComponent
  ]
})
export class ConsumoSetoresModule { }
