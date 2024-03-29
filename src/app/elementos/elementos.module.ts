import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ElementosRoutingModule } from './elementos-routing.module';
import { ElementosFormComponent } from './elementos-form/elementos-form.component';


@NgModule({
  declarations: [
    ElementosFormComponent
  ],
  imports: [
    CommonModule,
    ElementosRoutingModule,
    FormsModule
  ],
  exports: [
    ElementosFormComponent
  ]
})
export class ElementosModule { }
