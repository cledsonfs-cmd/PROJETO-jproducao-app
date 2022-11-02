import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessosFormComponent } from './acessos-form/acessos-form.component'

const routes: Routes = [
  {path: 'acessos-form', component: AcessosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessosRoutingModule { }
