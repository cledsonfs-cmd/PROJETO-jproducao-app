import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaturamentosRoutingModule } from './faturamentos-routing.module';
import { FaturamentosFormComponent } from './faturamentos-form/faturamentos-form.component';


@NgModule({
  declarations: [
    FaturamentosFormComponent
  ],
  imports: [
    CommonModule,
    FaturamentosRoutingModule
  ],
  exports: [
    FaturamentosFormComponent
  ]
})
export class FaturamentosModule { }
