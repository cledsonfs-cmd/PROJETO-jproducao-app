import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontoControleRegistrosRoutingModule } from './ponto-controle-registros-routing.module';
import { PontoControleRegistrosFormComponent } from './ponto-controle-registros-form/ponto-controle-registros-form.component';


@NgModule({
  declarations: [
    PontoControleRegistrosFormComponent
  ],
  imports: [
    CommonModule,
    PontoControleRegistrosRoutingModule
  ]
})
export class PontoControleRegistrosModule { }
