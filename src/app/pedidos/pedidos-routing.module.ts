import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';

const routes: Routes = [
  {path: 'pedidos-form', component: PedidosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
