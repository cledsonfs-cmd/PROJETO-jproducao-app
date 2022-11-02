import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';

const routes: Routes = [
  {path: 'empresas-form', component:  EmpresasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
