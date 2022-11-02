import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MateriaPrimasRoutingModule } from './materia-primas-routing.module';
import { MateriaPrimasFormComponent } from './materia-primas-form/materia-primas-form.component';


@NgModule({
  declarations: [
    MateriaPrimasFormComponent
  ],
  imports: [
    CommonModule,
    MateriaPrimasRoutingModule,
    FormsModule
  ],
  exports: [
    MateriaPrimasFormComponent
  ]
})
export class MateriaPrimasModule { }
