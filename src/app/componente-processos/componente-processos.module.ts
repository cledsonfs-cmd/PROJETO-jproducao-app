import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponenteProcessosRoutingModule } from './componente-processos-routing.module';
import { ComponenteProcessosFormComponent } from './componente-processos-form/componente-processos-form.component';


@NgModule({
  declarations: [
    ComponenteProcessosFormComponent
  ],
  imports: [
    CommonModule,
    ComponenteProcessosRoutingModule
  ],
  exports: [
    ComponenteProcessosFormComponent
  ]
})
export class ComponenteProcessosModule { }
