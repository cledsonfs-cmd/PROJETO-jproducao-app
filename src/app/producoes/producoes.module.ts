import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ProducoesRoutingModule } from './producoes-routing.module';
import { ProducoesFormComponent } from './producoes-form/producoes-form.component';


@NgModule({
  declarations: [
    ProducoesFormComponent
  ],
  imports: [
    CommonModule,
    ProducoesRoutingModule,
    FormsModule
  ],
  exports: [
    ProducoesFormComponent
  ]
})
export class ProducoesModule { }
