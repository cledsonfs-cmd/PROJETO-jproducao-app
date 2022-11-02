import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubSetoresRoutingModule } from './sub-setores-routing.module';
import { SubSetoresFormComponent } from './sub-setores-form/sub-setores-form.component';


@NgModule({
  declarations: [
    SubSetoresFormComponent
  ],
  imports: [
    CommonModule,
    SubSetoresRoutingModule
  ],
  exports: [
    SubSetoresFormComponent
  ]
})
export class SubSetoresModule { }
