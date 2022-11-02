import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresFormComponent } from './setores-form/setores-form.component';


@NgModule({
  declarations: [
    SetoresFormComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule
  ],
  exports: [
    SetoresFormComponent
  ]
})
export class SetoresModule { }
