import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component';


@NgModule({
  declarations: [
    EquipamentosFormComponent
  ],
  imports: [
    CommonModule,
    EquipamentosRoutingModule,
    FormsModule
  ],
  exports: [
    EquipamentosFormComponent
  ]
})
export class EquipamentosModule { }
