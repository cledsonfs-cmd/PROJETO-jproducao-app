import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { EstoquesRoutingModule } from './estoques-routing.module';
import { EstoquesFormComponent } from './estoques-form/estoques-form.component';


@NgModule({
  declarations: [
    EstoquesFormComponent
  ],
  imports: [
    CommonModule,
    EstoquesRoutingModule,
    FormsModule
  ],
  exports: [
    EstoquesFormComponent
  ]
})
export class EstoquesModule { }
