import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';


@NgModule({
  declarations: [
    PedidosFormComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule
  ],
  exports: [
    PedidosFormComponent
  ]
})
export class PedidosModule { }
