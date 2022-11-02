import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AlmoxarifadosRoutingModule } from './almoxarifados-routing.module';
import { AlmoxarifadosFormComponent } from './almoxarifados-form/almoxarifados-form.component';


@NgModule({
  declarations: [
    AlmoxarifadosFormComponent
  ],
  imports: [
    CommonModule,
    AlmoxarifadosRoutingModule,
    FormsModule
  ]
  ,
  exports: [
    AlmoxarifadosFormComponent
  ]
})
export class AlmoxarifadosModule { }
