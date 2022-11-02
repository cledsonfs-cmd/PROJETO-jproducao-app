import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivoReprogramacoesFormComponent } from './motivo-reprogramacoes-form/motivo-reprogramacoes-form.component';

const routes: Routes = [
  {path: 'motivo-reprogramacoes-form', component: MotivoReprogramacoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivoReprogramacoesRoutingModule { }
