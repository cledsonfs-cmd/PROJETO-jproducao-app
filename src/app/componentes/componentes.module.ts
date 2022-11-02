import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponentesFormComponent } from './componentes-form/componentes-form.component';


@NgModule({
  declarations: [
    ComponentesFormComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    FormsModule
  ],
  exports: [
    ComponentesFormComponent
  ]
})
export class ComponentesModule { }
