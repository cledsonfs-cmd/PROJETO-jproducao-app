import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { LotesRoutingModule } from './lotes-routing.module';
import { LotesFormComponent } from './lotes-form/lotes-form.component';


@NgModule({
  declarations: [
    LotesFormComponent
  ],
  imports: [
    CommonModule,
    LotesRoutingModule,
    FormsModule
  ],
  exports: [
    LotesFormComponent
  ]
})
export class LotesModule { }
