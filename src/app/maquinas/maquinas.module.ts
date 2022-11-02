import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MaquinasRoutingModule } from './maquinas-routing.module';
import { MaquinasFormComponent } from './maquinas-form/maquinas-form.component';


@NgModule({
  declarations: [
    MaquinasFormComponent
  ],
  imports: [
    CommonModule,
    MaquinasRoutingModule,
    FormsModule
  ],
  exports: [
    MaquinasFormComponent
  ]
})
export class MaquinasModule { }
