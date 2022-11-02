import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdemProducoesFormComponent } from './ordem-producoes-form/ordem-producoes-form.component';

const routes: Routes = [
  {path: 'ordem-producoes-form', component: OrdemProducoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemProducoesRoutingModule { }
