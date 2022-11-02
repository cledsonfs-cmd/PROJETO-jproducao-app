import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TipoSetoresRoutingModule } from './tipo-setores-routing.module';
import { TipoSetoresFormComponent } from './tipo-setores-form/tipo-setores-form.component';


@NgModule({
  declarations: [
    TipoSetoresFormComponent
  ],
  imports: [
    CommonModule,
    TipoSetoresRoutingModule,
    FormsModule
  ],
  exports: [
    TipoSetoresFormComponent
  ]
})
export class TipoSetoresModule { }
