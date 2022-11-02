import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedimentosRoutingModule } from './procedimentos-routing.module';
import { ProcedimentosFormComponent } from './procedimentos-form/procedimentos-form.component';


@NgModule({
  declarations: [
    ProcedimentosFormComponent
  ],
  imports: [
    CommonModule,
    ProcedimentosRoutingModule
  ],
  exports: [
    ProcedimentosFormComponent
  ]
})
export class ProcedimentosModule { }
