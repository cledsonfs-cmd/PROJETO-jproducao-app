import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DevolucoesRoutingModule } from './devolucoes-routing.module';
import { DevolucoesFormComponent } from './devolucoes-form/devolucoes-form.component';


@NgModule({
  declarations: [
    DevolucoesFormComponent
  ],
  imports: [
    CommonModule,
    DevolucoesRoutingModule,
    FormsModule
  ],
  exports: [
    DevolucoesFormComponent
  ]
})
export class DevolucoesModule { }
