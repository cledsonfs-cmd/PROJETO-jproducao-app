import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivoReprogramacoesRoutingModule } from './motivo-reprogramacoes-routing.module';
import { MotivoReprogramacoesFormComponent } from './motivo-reprogramacoes-form/motivo-reprogramacoes-form.component';


@NgModule({
  declarations: [
    MotivoReprogramacoesFormComponent
  ],
  imports: [
    CommonModule,
    MotivoReprogramacoesRoutingModule
  ],
  exports: [
    MotivoReprogramacoesFormComponent
  ]
})
export class MotivoReprogramacoesModule { }
