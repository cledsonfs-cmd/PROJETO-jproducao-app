import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SetorPerdasRoutingModule } from './setor-perdas-routing.module';
import { SetorPerdasFormComponent } from './setor-perdas-form/setor-perdas-form.component';


@NgModule({
  declarations: [
    SetorPerdasFormComponent
  ],
  imports: [
    CommonModule,
    SetorPerdasRoutingModule,
    FormsModule
  ],
  exports: [
    SetorPerdasFormComponent
  ]
})
export class SetorPerdasModule { }
