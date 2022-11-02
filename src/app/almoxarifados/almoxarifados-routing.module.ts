import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmoxarifadosFormComponent } from './almoxarifados-form/almoxarifados-form.component'

const routes: Routes = [
  {path: 'acessos-form', component: AlmoxarifadosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmoxarifadosRoutingModule { }
