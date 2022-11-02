import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivoPerdasRoutingModule } from './motivo-perdas-routing.module';
import { MotivoPerdasFormComponent } from './motivo-perdas-form/motivo-perdas-form.component';


@NgModule({
  declarations: [
    MotivoPerdasFormComponent
  ],
  imports: [
    CommonModule,
    MotivoPerdasRoutingModule
  ],
  exports: [
    MotivoPerdasFormComponent
  ]
})
export class MotivoPerdasModule { }
