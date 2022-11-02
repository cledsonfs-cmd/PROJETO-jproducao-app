import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FuncionarioEquipamentosRoutingModule } from './funcionario-equipamentos-routing.module';
import { FuncionarioEquipamentosFormComponent } from './funcionario-equipamentos-form/funcionario-equipamentos-form.component';


@NgModule({
  declarations: [
    FuncionarioEquipamentosFormComponent
  ],
  imports: [
    CommonModule,
    FuncionarioEquipamentosRoutingModule,
    FormsModule
  ],
  exports: [
    FuncionarioEquipamentosFormComponent
  ]
})
export class FuncionarioEquipamentosModule { }
