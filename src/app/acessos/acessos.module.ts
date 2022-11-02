import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AcessosRoutingModule } from './acessos-routing.module';
import { AcessosFormComponent } from './acessos-form/acessos-form.component';


@NgModule({
  declarations: [
    AcessosFormComponent
  ],
  imports: [
    CommonModule,
    AcessosRoutingModule,
    FormsModule
  ],
  exports: [
    AcessosFormComponent
  ]
})
export class AcessosModule { }
