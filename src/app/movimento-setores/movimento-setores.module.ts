import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MovimentoSetoresRoutingModule } from './movimento-setores-routing.module';
import { MovimentoSetoresFormComponent } from './movimento-setores-form/movimento-setores-form.component';


@NgModule({
  declarations: [
    MovimentoSetoresFormComponent
  ],
  imports: [
    CommonModule,
    MovimentoSetoresRoutingModule,
    FormsModule
  ],
  exports: [
    MovimentoSetoresFormComponent
  ]
})
export class MovimentoSetoresModule { }
