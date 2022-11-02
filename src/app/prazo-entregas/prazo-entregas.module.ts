import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { PrazoEntregasRoutingModule } from './prazo-entregas-routing.module';
import { PrazoEntregasFormComponent } from './prazo-entregas-form/prazo-entregas-form.component';


@NgModule({
  declarations: [
    PrazoEntregasFormComponent
  ],
  imports: [
    CommonModule,
    PrazoEntregasRoutingModule,
    FormsModule
  ],
  exports: [
    PrazoEntregasFormComponent
  ]
})
export class PrazoEntregasModule { }
