import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FolhaElementosRoutingModule } from './folha-elementos-routing.module';
import { FolhaElementosFormComponent } from './folha-elementos-form/folha-elementos-form.component';


@NgModule({
  declarations: [
    FolhaElementosFormComponent
  ],
  imports: [
    CommonModule,
    FolhaElementosRoutingModule,
    FormsModule
  ],
  exports: [
    FolhaElementosFormComponent
  ]
})
export class FolhaElementosModule { }
