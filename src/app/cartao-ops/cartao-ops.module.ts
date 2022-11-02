import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CartaoOpsRoutingModule } from './cartao-ops-routing.module';
import { CartaoOpsFormComponent } from './cartao-ops-form/cartao-ops-form.component';


@NgModule({
  declarations: [
    CartaoOpsFormComponent
  ],
  imports: [
    CommonModule,
    CartaoOpsRoutingModule,
    FormsModule
  ],
  exports: [
    CartaoOpsFormComponent
  ]
})
export class CartaoOpsModule { }
