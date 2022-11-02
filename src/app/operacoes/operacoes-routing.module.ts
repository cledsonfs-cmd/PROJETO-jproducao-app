import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacoesFormComponent } from './operacoes-form/operacoes-form.component';

const routes: Routes = [
  {path: 'operacoes-form', component: OperacoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacoesRoutingModule { }
