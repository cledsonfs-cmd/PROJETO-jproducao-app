import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquinasRoutingModule } from './maquinas-routing.module';
import { MaquinasFormComponent } from './maquinas-form/maquinas-form.component';


@NgModule({
  declarations: [
    MaquinasFormComponent
  ],
  imports: [
    CommonModule,
    MaquinasRoutingModule
  ],
  exports: [
    MaquinasFormComponent
  ]
})
export class MaquinasModule { }
