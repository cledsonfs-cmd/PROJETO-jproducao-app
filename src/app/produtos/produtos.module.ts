import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';


@NgModule({
  declarations: [
    ProdutosFormComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  exports: [
    ProdutosFormComponent
  ]
})
export class ProdutosModule { }
