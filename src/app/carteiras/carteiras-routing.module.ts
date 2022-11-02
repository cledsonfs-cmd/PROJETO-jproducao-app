import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirasFormComponent } from './carteiras-form/carteiras-form.component';

const routes: Routes = [
  {path: 'carteiras-form', component: CarteirasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteirasRoutingModule { }
