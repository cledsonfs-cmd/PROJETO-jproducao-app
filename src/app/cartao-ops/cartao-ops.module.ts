import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoOpsRoutingModule } from './cartao-ops-routing.module';
import { CartaoOpsFormComponent } from './cartao-ops-form/cartao-ops-form.component';


@NgModule({
  declarations: [
    CartaoOpsFormComponent
  ],
  imports: [
    CommonModule,
    CartaoOpsRoutingModule
  ],
  exports: [
    CartaoOpsFormComponent
  ]
})
export class CartaoOpsModule { }
