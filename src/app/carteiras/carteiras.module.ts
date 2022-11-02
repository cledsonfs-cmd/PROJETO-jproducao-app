import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteirasRoutingModule } from './carteiras-routing.module';
import { CarteirasFormComponent } from './carteiras-form/carteiras-form.component';


@NgModule({
  declarations: [
    CarteirasFormComponent
  ],
  imports: [
    CommonModule,
    CarteirasRoutingModule
  ],
  exports: [
    CarteirasFormComponent
  ]
})
export class CarteirasModule { }
