import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { EmbalagensRoutingModule } from './embalagens-routing.module';
import { EmbalagensFormComponent } from './embalagens-form/embalagens-form.component';


@NgModule({
  declarations: [
    EmbalagensFormComponent
  ],
  imports: [
    CommonModule,
    EmbalagensRoutingModule,
    FormsModule
  ],
  exports: [
    EmbalagensFormComponent
  ]
})
export class EmbalagensModule { }
