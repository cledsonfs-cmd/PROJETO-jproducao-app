import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';


@NgModule({
  declarations: [
    PedidosFormComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ],
  exports: [
    PedidosFormComponent
  ]
})
export class PedidosModule { }
