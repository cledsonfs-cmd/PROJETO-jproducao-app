import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ItemPedidosRoutingModule } from './item-pedidos-routing.module';
import { ItemPedidosFormComponent } from './item-pedidos-form/item-pedidos-form.component';


@NgModule({
  declarations: [
    ItemPedidosFormComponent
  ],
  imports: [
    CommonModule,
    ItemPedidosRoutingModule,
    FormsModule
  ],
  exports: [
    ItemPedidosFormComponent
  ]
})
export class ItemPedidosModule { }
