import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FolhaObservacoesRoutingModule } from './folha-observacoes-routing.module';
import { FolhaObservacoesFormComponent } from './folha-observacoes-form/folha-observacoes-form.component';


@NgModule({
  declarations: [
    FolhaObservacoesFormComponent
  ],
  imports: [
    CommonModule,
    FolhaObservacoesRoutingModule,
    FormsModule
  ],
  exports: [
    FolhaObservacoesFormComponent
  ]
})
export class FolhaObservacoesModule { }
