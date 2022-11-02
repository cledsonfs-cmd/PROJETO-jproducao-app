import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReprogramacoesFormComponent } from './reprogramacoes-form/reprogramacoes-form.component';

const routes: Routes = [
  {path: 'reprogramacoes-form', component: ReprogramacoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReprogramacoesRoutingModule { }
