import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';


@NgModule({
  declarations: [
    EmpresasFormComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ],
  exports: [
    EmpresasFormComponent
  ]
})
export class EmpresasModule { }
