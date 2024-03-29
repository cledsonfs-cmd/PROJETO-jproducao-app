import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SubProcessosRoutingModule } from './sub-processos-routing.module';
import { SubProcessosFormComponent } from './sub-processos-form/sub-processos-form.component';


@NgModule({
  declarations: [
    SubProcessosFormComponent
  ],
  imports: [
    CommonModule,
    SubProcessosRoutingModule,
    FormsModule
  ],
  exports: [
    SubProcessosFormComponent
  ]
})
export class SubProcessosModule { }
