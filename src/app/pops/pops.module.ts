import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopsRoutingModule } from './pops-routing.module';
import { PopsFormComponent } from './pops-form/pops-form.component';


@NgModule({
  declarations: [
    PopsFormComponent
  ],
  imports: [
    CommonModule,
    PopsRoutingModule
  ],
  exports: [
    PopsFormComponent
  ]
})
export class PopsModule { }
