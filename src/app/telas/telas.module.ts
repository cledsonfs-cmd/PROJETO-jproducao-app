import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TelasRoutingModule } from './telas-routing.module';
import { TelasFormComponent } from './telas-form/telas-form.component';


@NgModule({
  declarations: [
    TelasFormComponent
  ],
  imports: [
    CommonModule,
    TelasRoutingModule,
    FormsModule
  ],
  exports: [
    TelasFormComponent
  ]
})
export class TelasModule { }
