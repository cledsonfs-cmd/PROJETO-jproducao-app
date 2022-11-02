import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartaoOpsFormComponent } from './cartao-ops-form/cartao-ops-form.component';

const routes: Routes = [
  {path: 'cartao-ops-form', component: CartaoOpsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaoOpsRoutingModule { }
