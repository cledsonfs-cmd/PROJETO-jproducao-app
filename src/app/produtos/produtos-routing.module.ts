import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

const routes: Routes = [
  {path: 'produtos-form', component: ProdutosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
