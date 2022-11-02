import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelasRoutingModule } from './telas-routing.module';
import { TelasFormComponent } from './telas-form/telas-form.component';


@NgModule({
  declarations: [
    TelasFormComponent
  ],
  imports: [
    CommonModule,
    TelasRoutingModule
  ],
  exports: [
    TelasFormComponent
  ]
})
export class TelasModule { }
