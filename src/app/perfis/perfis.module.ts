import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { PerfisRoutingModule } from './perfis-routing.module';
import { PerfisFormComponent } from './perfis-form/perfis-form.component';


@NgModule({
  declarations: [
    PerfisFormComponent
  ],
  imports: [
    CommonModule,
    PerfisRoutingModule,
    FormsModule
  ],
  exports: [
    PerfisFormComponent
  ]
})
export class PerfisModule { }
