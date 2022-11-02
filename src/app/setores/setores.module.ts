import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresFormComponent } from './setores-form/setores-form.component';


@NgModule({
  declarations: [
    SetoresFormComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    FormsModule
  ],
  exports: [
    SetoresFormComponent
  ]
})
export class SetoresModule { }
