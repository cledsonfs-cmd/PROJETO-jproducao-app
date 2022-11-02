import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { OrdemProducoesRoutingModule } from './ordem-producoes-routing.module';
import { OrdemProducoesFormComponent } from './ordem-producoes-form/ordem-producoes-form.component';


@NgModule({
  declarations: [
    OrdemProducoesFormComponent
  ],
  imports: [
    CommonModule,
    OrdemProducoesRoutingModule,
    FormsModule
  ],
  exports: [
    OrdemProducoesFormComponent
  ]
})
export class OrdemProducoesModule { }
