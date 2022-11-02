import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevolucoesFormComponent } from './devolucoes-form/devolucoes-form.component';

const routes: Routes = [
  {path: 'devolucoes-form', component:  DevolucoesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevolucoesRoutingModule { }
