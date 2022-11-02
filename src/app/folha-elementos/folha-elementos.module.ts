import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolhaElementosRoutingModule } from './folha-elementos-routing.module';
import { FolhaElementosFormComponent } from './folha-elementos-form/folha-elementos-form.component';


@NgModule({
  declarations: [
    FolhaElementosFormComponent
  ],
  imports: [
    CommonModule,
    FolhaElementosRoutingModule
  ],
  exports: [
    FolhaElementosFormComponent
  ]
})
export class FolhaElementosModule { }
