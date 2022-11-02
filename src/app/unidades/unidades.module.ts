import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UnidadesRoutingModule } from './unidades-routing.module';
import { UnidadesFormComponent } from './unidades-form/unidades-form.component';


@NgModule({
  declarations: [
    UnidadesFormComponent
  ],
  imports: [
    CommonModule,
    UnidadesRoutingModule,
    FormsModule
  ],
  exports: [
    UnidadesFormComponent
  ]
})
export class UnidadesModule { }
