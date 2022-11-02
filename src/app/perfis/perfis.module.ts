import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfisRoutingModule } from './perfis-routing.module';
import { PerfisFormComponent } from './perfis-form/perfis-form.component';


@NgModule({
  declarations: [
    PerfisFormComponent
  ],
  imports: [
    CommonModule,
    PerfisRoutingModule
  ],
  exports: [
    PerfisFormComponent
  ]
})
export class PerfisModule { }
