import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReprogramacoesRoutingModule } from './reprogramacoes-routing.module';
import { ReprogramacoesFormComponent } from './reprogramacoes-form/reprogramacoes-form.component';


@NgModule({
  declarations: [
    ReprogramacoesFormComponent
  ],
  imports: [
    CommonModule,
    ReprogramacoesRoutingModule
  ],
  exports: [
    ReprogramacoesFormComponent
  ]
})
export class ReprogramacoesModule { }
