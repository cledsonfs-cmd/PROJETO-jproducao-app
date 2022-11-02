import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrazoEntregasRoutingModule } from './prazo-entregas-routing.module';
import { PrazoEntregasFormComponent } from './prazo-entregas-form/prazo-entregas-form.component';


@NgModule({
  declarations: [
    PrazoEntregasFormComponent
  ],
  imports: [
    CommonModule,
    PrazoEntregasRoutingModule
  ],
  exports: [
    PrazoEntregasFormComponent
  ]
})
export class PrazoEntregasModule { }
