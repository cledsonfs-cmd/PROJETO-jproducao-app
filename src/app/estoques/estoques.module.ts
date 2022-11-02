import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoquesRoutingModule } from './estoques-routing.module';
import { EstoquesFormComponent } from './estoques-form/estoques-form.component';


@NgModule({
  declarations: [
    EstoquesFormComponent
  ],
  imports: [
    CommonModule,
    EstoquesRoutingModule
  ],
  exports: [
    EstoquesFormComponent
  ]
})
export class EstoquesModule { }
