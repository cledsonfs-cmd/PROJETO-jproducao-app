import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';


@NgModule({
  declarations: [
    EmpresasFormComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule
  ],
  exports: [
    EmpresasFormComponent
  ]
})
export class EmpresasModule { }
