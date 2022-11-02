import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosFormComponent } from './eventos-form/eventos-form.component';


@NgModule({
  declarations: [
    EventosFormComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ],
  exports: [
    EventosFormComponent
  ]
})
export class EventosModule { }
