import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponenteMateriaPrimasRoutingModule } from './componente-materia-primas-routing.module';
import { ComponenteMateriaPrimasFormComponent } from './componente-materia-primas-form/componente-materia-primas-form.component';


@NgModule({
  declarations: [
    ComponenteMateriaPrimasFormComponent
  ],
  imports: [
    CommonModule,
    ComponenteMateriaPrimasRoutingModule
  ],
  exports: [
    ComponenteMateriaPrimasFormComponent
  ]
})
export class ComponenteMateriaPrimasModule { }
