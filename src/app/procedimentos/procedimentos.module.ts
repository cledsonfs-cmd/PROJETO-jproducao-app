import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ProcedimentosRoutingModule } from './procedimentos-routing.module';
import { ProcedimentosFormComponent } from './procedimentos-form/procedimentos-form.component';


@NgModule({
  declarations: [
    ProcedimentosFormComponent
  ],
  imports: [
    CommonModule,
    ProcedimentosRoutingModule,
    FormsModule
  ],
  exports: [
    ProcedimentosFormComponent
  ]
})
export class ProcedimentosModule { }
