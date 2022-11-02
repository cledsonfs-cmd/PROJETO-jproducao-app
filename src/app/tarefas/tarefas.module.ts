import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';


@NgModule({
  declarations: [
    TarefasFormComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule
  ],
  exports: [
    TarefasFormComponent
  ]
})
export class TarefasModule { }
