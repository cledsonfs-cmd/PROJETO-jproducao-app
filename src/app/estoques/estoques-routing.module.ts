import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoquesFormComponent } from './estoques-form/estoques-form.component';

const routes: Routes = [
  {path: 'estoques-form', component: EstoquesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoquesRoutingModule { }
