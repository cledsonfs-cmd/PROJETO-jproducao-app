import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducoesRoutingModule } from './producoes-routing.module';
import { ProducoesFormComponent } from './producoes-form/producoes-form.component';


@NgModule({
  declarations: [
    ProducoesFormComponent
  ],
  imports: [
    CommonModule,
    ProducoesRoutingModule
  ],
  exports: [
    ProducoesFormComponent
  ]
})
export class ProducoesModule { }
