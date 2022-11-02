import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolhaObservacoesFormComponent } from './folha-observacoes-form/folha-observacoes-form.component';

const routes: Routes = [
  {path: 'folha-observacoes-form', component: FolhaObservacoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolhaObservacoesRoutingModule { }
