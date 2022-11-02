import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevolucoesRoutingModule } from './devolucoes-routing.module';
import { DevolucoesFormComponent } from './devolucoes-form/devolucoes-form.component';


@NgModule({
  declarations: [
    DevolucoesFormComponent
  ],
  imports: [
    CommonModule,
    DevolucoesRoutingModule
  ],
  exports: [
    DevolucoesFormComponent
  ]
})
export class DevolucoesModule { }
