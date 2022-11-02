import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinhaProducoesFormComponent } from './linha-producoes-form/linha-producoes-form.component';

const routes: Routes = [
  {path: 'linha-producoes-form', component: LinhaProducoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinhaProducoesRoutingModule { }
