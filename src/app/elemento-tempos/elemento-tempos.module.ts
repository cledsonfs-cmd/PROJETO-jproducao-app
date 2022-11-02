import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ElementoTemposRoutingModule } from './elemento-tempos-routing.module';
import { ElementoTemposFormComponent } from './elemento-tempos-form/elemento-tempos-form.component';


@NgModule({
  declarations: [
    ElementoTemposFormComponent
  ],
  imports: [
    CommonModule,
    ElementoTemposRoutingModule,
    FormsModule
  ],
  exports: [
    ElementoTemposFormComponent
  ]
})
export class ElementoTemposModule { }
