import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoSetoresRoutingModule } from './tipo-setores-routing.module';
import { TipoSetoresFormComponent } from './tipo-setores-form/tipo-setores-form.component';


@NgModule({
  declarations: [
    TipoSetoresFormComponent
  ],
  imports: [
    CommonModule,
    TipoSetoresRoutingModule
  ],
  exports: [
    TipoSetoresFormComponent
  ]
})
export class TipoSetoresModule { }
