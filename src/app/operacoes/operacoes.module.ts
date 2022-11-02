import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesFormComponent } from './operacoes-form/operacoes-form.component';


@NgModule({
  declarations: [
    OperacoesFormComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule,
    FormsModule
  ],
  exports: [
    OperacoesFormComponent
  ]
})
export class OperacoesModule { }
