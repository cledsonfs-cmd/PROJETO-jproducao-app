import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducoesFormComponent } from './producoes-form/producoes-form.component';

const routes: Routes = [
  {path: 'producoes-form', component: ProducoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducoesRoutingModule { }
