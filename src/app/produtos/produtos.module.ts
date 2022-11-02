import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';


@NgModule({
  declarations: [
    ProdutosFormComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  exports: [
    ProdutosFormComponent
  ]
})
export class ProdutosModule { }
