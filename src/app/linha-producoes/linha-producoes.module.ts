import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { LinhaProducoesRoutingModule } from './linha-producoes-routing.module';
import { LinhaProducoesFormComponent } from './linha-producoes-form/linha-producoes-form.component';


@NgModule({
  declarations: [
    LinhaProducoesFormComponent
  ],
  imports: [
    CommonModule,
    LinhaProducoesRoutingModule,
    FormsModule
  ],
  exports: [
    LinhaProducoesFormComponent
  ]
})
export class LinhaProducoesModule { }
