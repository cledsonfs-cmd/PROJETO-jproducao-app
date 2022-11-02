import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosFormComponent } from './processos-form/processos-form.component';


@NgModule({
  declarations: [
    ProcessosFormComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule
  ],
  exports: [
    ProcessosFormComponent
  ]
})
export class ProcessosModule { }
