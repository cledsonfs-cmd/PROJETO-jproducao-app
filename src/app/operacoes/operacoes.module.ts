import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesFormComponent } from './operacoes-form/operacoes-form.component';


@NgModule({
  declarations: [
    OperacoesFormComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule
  ],
  exports: [
    OperacoesFormComponent
  ]
})
export class OperacoesModule { }
