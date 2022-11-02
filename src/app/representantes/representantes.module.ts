import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentantesRoutingModule } from './representantes-routing.module';
import { RepresentantesFormComponent } from './representantes-form/representantes-form.component';


@NgModule({
  declarations: [
    RepresentantesFormComponent
  ],
  imports: [
    CommonModule,
    RepresentantesRoutingModule
  ],
  exports: [
    RepresentantesFormComponent
  ]
})
export class RepresentantesModule { }
