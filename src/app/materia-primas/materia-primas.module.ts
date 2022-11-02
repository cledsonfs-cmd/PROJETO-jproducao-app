import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaPrimasRoutingModule } from './materia-primas-routing.module';
import { MateriaPrimasFormComponent } from './materia-primas-form/materia-primas-form.component';


@NgModule({
  declarations: [
    MateriaPrimasFormComponent
  ],
  imports: [
    CommonModule,
    MateriaPrimasRoutingModule
  ],
  exports: [
    MateriaPrimasFormComponent
  ]
})
export class MateriaPrimasModule { }
