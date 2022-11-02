import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturamentosFormComponent } from './faturamentos-form/faturamentos-form.component';

const routes: Routes = [
  {path: 'faturamentos-form', component: FaturamentosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaturamentosRoutingModule { }
