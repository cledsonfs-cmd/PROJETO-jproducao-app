import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPedidosFormComponent } from './item-pedidos-form/item-pedidos-form.component';

const routes: Routes = [
  {path: 'item-pedidos-form', component: ItemPedidosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemPedidosRoutingModule { }
