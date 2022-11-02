import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmoxarifadosRoutingModule } from './almoxarifados-routing.module';
import { AlmoxarifadosFormComponent } from './almoxarifados-form/almoxarifados-form.component';


@NgModule({
  declarations: [
    AlmoxarifadosFormComponent
  ],
  imports: [
    CommonModule,
    AlmoxarifadosRoutingModule
  ]
  ,
  exports: [
    AlmoxarifadosFormComponent
  ]
})
export class AlmoxarifadosModule { }
