import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementoTemposRoutingModule } from './elemento-tempos-routing.module';
import { ElementoTemposFormComponent } from './elemento-tempos-form/elemento-tempos-form.component';


@NgModule({
  declarations: [
    ElementoTemposFormComponent
  ],
  imports: [
    CommonModule,
    ElementoTemposRoutingModule
  ],
  exports: [
    ElementoTemposFormComponent
  ]
})
export class ElementoTemposModule { }
