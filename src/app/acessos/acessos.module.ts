import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessosRoutingModule } from './acessos-routing.module';
import { AcessosFormComponent } from './acessos-form/acessos-form.component';


@NgModule({
  declarations: [
    AcessosFormComponent
  ],
  imports: [
    CommonModule,
    AcessosRoutingModule
  ],
  exports: [
    AcessosFormComponent
  ]
})
export class AcessosModule { }
