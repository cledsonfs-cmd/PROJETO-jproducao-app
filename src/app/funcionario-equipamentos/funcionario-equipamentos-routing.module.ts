import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioEquipamentosFormComponent } from './funcionario-equipamentos-form/funcionario-equipamentos-form.component';

const routes: Routes = [
  {path: 'funcionario-equipamentos-form', component: FuncionarioEquipamentosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioEquipamentosRoutingModule { }
