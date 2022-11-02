import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbalagensRoutingModule } from './embalagens-routing.module';
import { EmbalagensFormComponent } from './embalagens-form/embalagens-form.component';


@NgModule({
  declarations: [
    EmbalagensFormComponent
  ],
  imports: [
    CommonModule,
    EmbalagensRoutingModule
  ],
  exports: [
    EmbalagensFormComponent
  ]
})
export class EmbalagensModule { }
