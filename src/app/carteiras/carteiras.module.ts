import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CarteirasRoutingModule } from './carteiras-routing.module';
import { CarteirasFormComponent } from './carteiras-form/carteiras-form.component';


@NgModule({
  declarations: [
    CarteirasFormComponent
  ],
  imports: [
    CommonModule,
    CarteirasRoutingModule,
    FormsModule
  ],
  exports: [
    CarteirasFormComponent
  ]
})
export class CarteirasModule { }
